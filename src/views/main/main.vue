<template>
  <div
    class="main"
    element-loading-background="rgba(8, 22, 58, 1)"
    element-loading-spinner="el-icon-loading"
    element-loading-text="正在加载中"
  >
    <template>
      <div class="top">
        <main-top :user-msg="userMsg" ref="mainTop"></main-top>
      </div>
      <div class="bottom">
        <main-side id="mainSide"></main-side>
        <main-content></main-content>
      </div>
    </template>
  </div>
</template>

<script>
import MainTop from './main-top'
import MainSide from './main-side'
import MainContent from './main-content'

export default {
  data () {
    return {
      loading: true,
      userMsg: null,
      hiddenProperty: 'hidden' in document ? 'hidden' : 'webkitHidden' in document ? 'webkitHidden' : 'mozHidden' in document ? 'mozHidden' : null
    }
  },
  components: {
    MainContent,
    MainTop,
    MainSide
  },
  computed: {
    documentClientHeight: {
      get () {
        return this.$store.state.common.documentClientHeight
      },
      set (val) {
        this.$store.commit('common/updateDocumentClientHeight', val)
      }
    },
    sidebarFold: {
      get () {
        return this.$store.state.common.sidebarFold
      }
    },
    userId: {
      get () {
        return this.$store.state.user.id
      },
      set (val) {
        this.$store.commit('user/updateId', val)
      }
    },
    userName: {
      get () {
        return this.$store.state.user.name
      },
      set (val) {
        this.$store.commit('user/updateName', val)
      }
    },
    roleStatus: {
      get () {
        return this.$store.state.user.role
      },
      set (val) {
        this.$store.commit('user/updateRole', val)
      }
    },
    userInfo: {
      get () {
        return this.$store.state.user.userInfo
      },
      set (val) {
        this.$store.commit('user/updateUserInfo', val)
      }
    }
  },
  methods: {
    // 重置窗口可视高度
    resetDocumentClientHeight () {
      this.documentClientHeight = document.documentElement.clientHeight
      // this.$refs.siteMain.style.height = document.documentElement['clientHeight'] + 'px'
    },
    resize () {
      this.resetDocumentClientHeight()
      // common.resetTitleWidth()
    },
    reset () {
      this.resetDocumentClientHeight()
      window.addEventListener('resize', this.resize)
    },
    dispose () {
      window.removeEventListener('resize', this.resize)
    }
  },
  created () {
  },
  mounted () {
    this.reset()
    // document.addEventListener(this.hiddenProperty.replace(/hidden/i, 'visibilitychange'), this.onVisibilityChange) // 切换浏览器标签页的时候有用
  },
  destroyed () {
    this.dispose()
  }
}
</script>

<style lang="scss" scoped>
  .main {
    width: 100%;
    height: 100%;
    background-color: #EDF1F4;
    .top {
      width: 100%;
      height: 95px;
    }
    .bottom {
      display: flex;
      .main-side,
      .main-content {
        //margin: 20px 0;
        max-height: calc(100vh - 95px);
      }
      .main-side {
        overflow-y: auto;
        width: 200px;
        box-shadow: 3px 0px 5px 0px rgba(0, 0, 0, 0.3);
        background-color: slateblue;
        scrollbar-width: none; // FireFox
        &::-webkit-scrollbar {
          display: none;
        }
      }
      .main-content {
        flex: 1;
        padding-right: 20px;
        overflow-y: auto;
        scrollbar-width: thin; // FireFox
        scrollbar-color: $base-color $base-color-dark; // FireFox
      }
    }
  }
</style>
