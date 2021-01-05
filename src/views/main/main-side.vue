<template>
  <div class="main-side">
    <ul>
      <li :dynamicMenuRoutes="dynamicMenuRoutes" :key="menu.menuId" :menu="menu" v-for="menu in menuList">
        <div :class="{active: menu.menuId === navIndexF}" :index="menu.menuId + ''" :ref="'f'+menu.menuId"
             @click="onFirClick(menu,menu.menuId)" class="nav-btn-f">{{menu.name === '首页' ? '首&emsp;&emsp;页' :
          menu.name}}
        </div>
        <div :children="menu.list.length" :index="menu.menuId + ''" :ref="'s'+menu.menuId"
             class="nav-btn-s" v-if="menu.list && menu.list.length >= 1">
          <ul>
            <li
              :class="{active: menu.menuId === navIndexF && item.menuId === navIndexS}"
              :dynamicMenuRoutes="dynamicMenuRoutes"
              :key="item.menuId"
              :menu="item"
              @click='onSecClick(item, menu.menuId, item.menuId)'
              v-for="item in menu.list"
            >{{item.name}}
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { isURL } from '@/utils/validate'

export default {
  name: 'main-side',
  data () {
    return {
      dynamicMenuRoutes: [],
      defaultShow: false,
      navIndexF: -1, // 一级导航索引
      navIndexS: -1, // 二级导航索引
      prevFirst: 0, // 一级菜单的上一个
      openIndex: -1 // 展开的索引 默认不展开
    }
  },
  computed: {
    menuList: {
      get () {
        console.log(this.$store.state.common.menuList)
        return this.$store.state.common.menuList
      },
      set (val) {
        this.$store.commit('common/updateMenuList', val)
      }
    },
    menuActiveName: {
      get () {
        return this.$store.state.common.menuActiveName
      },
      set (val) {
        this.$store.commit('common/updateMenuActiveName', val)
      }
    },
    mainTabs: {
      get () {
        return this.$store.state.common.mainTabs
      },
      set (val) {
        this.$store.commit('common/updateMainTabs', val)
      }
    },
    mainTabsActiveName: {
      get () {
        return this.$store.state.common.mainTabsActiveName
      },
      set (val) {
        this.$store.commit('common/updateMainTabsActiveName', val)
      }
    }
  },
  watch: {
    $route: 'routeHandle',
    navIndexF () {
      this.$nextTick(function () {
        this.onOpenFold()
      })
    }
  },
  methods: {
    onGotoView (val, subVal = '') {
      const menu = this.menuList.filter(item => item.name === val)
      if (this.navIndexF !== menu[0].menuId) this.onFirClick(menu[0], menu[0].menuId)
      if (subVal !== '') { // 跳到二级菜单
        const menu2 = menu[0].list.filter(item => item.name === subVal)
        this.onSecClick(menu2[0], menu[0].menuId, menu2[0].menuId)
      }
    },
    // 路由操作
    routeHandle (route) {
      if (route.meta.isTab) {
        // tab选中, 不存在先添加
        var tab = this.mainTabs.filter(item => item.name === route.name)[0]
        if (!tab) {
          if (route.meta.isDynamic) {
            route = this.dynamicMenuRoutes.filter(item => item.name === route.name)[0]
            if (!route) {
              return console.error('未能找到可用标签页!')
            }
          }
          tab = {
            menuId: route.meta.menuId || route.name,
            name: route.name,
            title: route.meta.title,
            type: isURL(route.meta.iframeUrl) ? 'iframe' : 'module',
            iframeUrl: route.meta.iframeUrl || ''
          }
          this.mainTabs = this.mainTabs.concat(tab)
        }
        this.menuActiveName = tab.name
        this.mainTabsActiveName = tab.name
      }
    },
    navClick (menu, index1, index2 = -1) {
      if (index2 !== -1) {
        const subs = document.getElementsByClassName('nav-btn-s')
        for (const item of subs) {
          for (let i = 0, len = item.getElementsByTagName('li').length; i < len; i++) {
            item.getElementsByTagName('li')[i].classList.remove('active')
          }
        }
        event.currentTarget.classList.add('active')
        this.gotoRouteHandle(menu)
        return
      }
      if (menu.list && menu.list.length >= 1) {
        const fir = this.$refs['f' + index1][0]
        const sub = this.$refs['s' + index1][0]
        if (sub.style.height !== '0px') { // 收起二级菜单
          sub.style.height = '0px'
          sub.style.opacity = '0'
          fir.classList.remove('active')
        } else { // 展开二级菜单
          sub.style.height = sub.getAttribute('children') * 40 + 'px'
          sub.style.opacity = '1'
          fir.classList.add('active')
          // 展开后默认显示二级菜单的第一个页面
          this.gotoRouteHandle(menu.list[0])
          sub.getElementsByTagName('li')[0].classList.add('active')
          console.log(menu.list[0])
        }
      } else {
        if (this.prevFirst !== index1) {
          const pre = this.$refs['f' + this.prevFirst][0]
          pre.classList.remove('active')
          const fir = this.$refs['f' + index1][0]
          fir.classList.add('active')
          this.prevFirst = index1
        }
        this.gotoRouteHandle(menu)
      }
    },
    // 通过menuId与动态(菜单)路由进行匹配跳转至指定路由
    gotoRouteHandle (menu) {
      const route = this.dynamicMenuRoutes.filter(item => item.meta.menuId === menu.menuId)
      if (route.length >= 1) {
        this.$router.push({ name: route[0].name })
        this.menuActiveName = route[0].name
        // sessionStorage.setItem('navIndex', this.navIndexF + '|' + this.navIndexS + '|' + this.openIndex)
      }
    },
    onFirClick: function (menu, index1) {
      if (this.openIndex !== -1) {
        const sub = this.$refs['s' + this.openIndex][0]
        if (sub.style.height !== '0px') {
          sub.style.height = '0px'
          sub.style.opacity = '0'
        }
      }
      if (index1 === this.openIndex) {
        this.openIndex = -1
      } else {
        this.navIndexF = index1
        if (menu.list && menu.list.length >= 1) {
          // 展开
          const sub = this.$refs['s' + index1][0]
          sub.style.height = sub.getAttribute('children') * 40 + 'px'
          sub.style.opacity = '1'
          // 展开后默认显示二级菜单的第一个页面
          this.gotoRouteHandle(menu.list[0])
          this.openIndex = index1
          this.navIndexS = menu.list[0].menuId
        } else {
          this.openIndex = -1
          this.navIndexS = -1
          this.gotoRouteHandle(menu)
        }
      }
    },
    onSecClick: function (menu, index1, index2) {
      this.navIndexS = index2
      this.navIndexF = index1
      this.gotoRouteHandle(menu)
    },
    onOpenFold () {
      if (this.openIndex !== -1) {
        const sub = this.$refs['s' + this.navIndexF][0]
        sub.style.height = sub.getAttribute('children') * 40 + 'px'
        sub.style.opacity = '1'
      }
    }
  },
  created () {
    // console.log(this.$route)
    this.menuList = JSON.parse(sessionStorage.getItem('menuList'))
    this.dynamicMenuRoutes = JSON.parse(sessionStorage.getItem('dynamicMenuRoutes'))
    if (this.$route.meta.parentId) {
      this.navIndexF = this.$route.meta.parentId
      this.navIndexS = this.$route.meta.menuId
      this.openIndex = this.navIndexF
    } else {
      this.navIndexF = this.$route.meta.menuId
      this.navIndexS = -1
      this.openIndex = -1
    }
    this.routeHandle(this.$route)
  },
  mounted () {
    this.$event.$on('gotoView', this.onGotoView) // 首页跳转到制定菜单模块
  }
}
</script>

<style lang="scss" scoped>
  .main-side {
    li {
      height: 100%;
      margin: 20px;
      text-align: center;
      list-style-type: none;
      color: $text-color;

      &:first-child {
        margin-top: 10px;
      }

      .nav-btn-f {
        width: 120px;
        height: 48px;
        font-size: 20px;
        line-height: 50px;
        background: url("~@/assets/img/menu.png");
        cursor: pointer;

        &:hover,
        &.active {
          color: white;
          background: url("~@/assets/img/menu_selected.png");
        }
      }

      .nav-btn-s {
        position: relative;
        height: 0;
        font-size: 18px;
        transition: all .3s ease-in-out;
        cursor: pointer;
        overflow: hidden;

        li {
          width: 120px;
          height: 36px;
          margin: 4px auto;
          line-height: 36px;
          background: url("~@/assets/img/sub_menu.png");

          &:hover,
          &.active {
            color: white;
            background: url("~@/assets/img/sub_menu_selected.png");
          }
        }
      }
    }
  }
</style>
