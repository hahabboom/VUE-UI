/**
 * @date 2020/7/21
 * @Description
 * 文档：https://router.vuejs.org/zh/
 * 路由跳转：使用命名路由 name 标识进行跳转 https://router.vuejs.org/zh/guide/essentials/named-routes.html
 * 通过meta对象设置路由展示方式
 *
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import $axios from '@/config/axios-config.js'
// import { clearLoginInfo } from '@/utils'
// import { isURL } from '@/utils/validate'

Vue.use(VueRouter)
Vue.prototype.$axios = $axios

/* 路由懒加载：https://router.vuejs.org/zh/guide/advanced/lazy-loading.html */
// const $import = view => () => import(`@/views/${view}.vue`) // error: https://stackoverflow.com/questions/59851788/import-eslint-cannot-read-property-range-of-null-occurred-while-linting
const $import = view => () => import('@/views/' + view + '.vue')

/* 定义路由 */
const globalRoutes = [
  {
    path: '/404',
    component: $import('global/404'),
    name: '404',
    meta: { title: '404 Not found' }
  },
  {
    path: '/login',
    component: $import('global/login'),
    name: 'login',
    meta: { title: '登录' }
  }
] // 全局路由

const mainRoutes = {
  path: '/',
  component: $import('main/main'),
  name: 'main',
  meta: { title: '页面入口路由' },
  redirect: { name: 'Home' }, // 路由重定向：https://router.vuejs.org/zh/guide/essentials/redirect-and-alias.html#%E9%87%8D%E5%AE%9A%E5%90%91
  children: [
    {
      path: '/home/Home',
      component: $import('modules/home/Home'),
      name: 'Home',
      meta: {
        title: '首页',
        menuId: 94
      }
    }
  ] // 页面路由
  // beforeEnter (to, from, next) {
  //   // 路由独享守卫
  //   // 完整导航解析流程中第 5 步调用：https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E5%AE%8C%E6%95%B4%E7%9A%84%E5%AF%BC%E8%88%AA%E8%A7%A3%E6%9E%90%E6%B5%81%E7%A8%8B
  //   const token = Vue.cookie.get('token')
  //   console.log(token)
  //   // if (!token || !/\S/.test(token)) {
  //   //   clearLoginInfo()
  //   //   next({ name: 'login' })
  //   // }
  //   // next()
  // }
} // 页面入口路由

/**
 * @date 2020/7/22
 * @Description 获取当前路由类型
 * @param to 即将进入的目标路由对象
 * @param globalRoutes 全局路由
 * @return String global / main: 全局路由标识 / 入口路由标识
 */
// const getRouteType = (to, globalRoutes) => {
//   let temp = []
//   for (let i = 0; i < globalRoutes.length; i++) {
//     if (to.path === globalRoutes[i].path) {
//       return 'global'
//     } else if (globalRoutes[i].children && globalRoutes[i].children.length >= 1) {
//       temp = temp.concat(globalRoutes[i].children)
//     }
//   }
//   return temp.length >= 1 ? getRouteType(to, temp) : 'main'
// }

// function fnAddDynamicMenuRoutes (menuList = [], routes = []) {
//   var temp = []
//   for (var i = 0; i < menuList.length; i++) {
//     if (menuList[i].list && menuList[i].list.length >= 1) {
//       temp = temp.concat(menuList[i].list)
//     } else if (menuList[i].url && /\S/.test(menuList[i].url)) {
//       menuList[i].url = menuList[i].url.replace(/^\//, '')
//       var route = {
//         path: menuList[i].url.replace('/', '-'),
//         component: null,
//         name: menuList[i].url.replace('/', '-'),
//         meta: {
//           parentId: menuList[i].parentId, // 如果只有一级导航， 此值为0
//           menuId: menuList[i].menuId,
//           title: menuList[i].name,
//           isDynamic: true,
//           isTab: true,
//           iframeUrl: ''
//         }
//       }
//       // url以http[s]://开头, 通过iframe展示
//       if (isURL(menuList[i].url)) {
//         route.path = `i-${menuList[i].menuId}`
//         route.name = `i-${menuList[i].menuId}`
//         route.meta.iframeUrl = menuList[i].url
//       } else {
//         try {
//           route.component = $import(`modules/${menuList[i].url}`) || null
//         } catch (e) {
//         }
//       }
//       routes.push(route)
//     }
//   }
//   if (temp.length >= 1) {
//     fnAddDynamicMenuRoutes(temp, routes)
//   } else {
//     mainRoutes.name = 'main-dynamic'
//     mainRoutes.children = routes
//     router.addRoutes([
//       mainRoutes,
//       {
//         path: '*',
//         redirect: { name: '404' }
//       }
//     ])
//     sessionStorage.setItem('dynamicMenuRoutes', JSON.stringify(mainRoutes.children || '[]'))
//     console.log('%c!<-------------------- 动态(菜单)路由 s -------------------->', 'color:blue')
//     console.log(mainRoutes.children)
//     console.log('%c!<-------------------- 动态(菜单)路由 e -------------------->', 'color:blue')
//   }
// }

/* 创建 router 实例 */
const router = new VueRouter({
  // Router 构建选项：https://router.vuejs.org/zh/api/#router-%E6%9E%84%E5%BB%BA%E9%80%89%E9%A1%B9
  mode: 'hash',
  routes: globalRoutes.concat(mainRoutes),
  scrollBehavior: () => ({
    x: 0,
    y: 0
  }),
  isAddDynamicMenuRoutes: false // 初始化自定义属性：是否存在动态菜单列表
})

// /* 导航守卫注册 */
// router.beforeEach((to, from, next) => {
//   // 注册全局前置守卫：https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E5%85%A8%E5%B1%80%E5%89%8D%E7%BD%AE%E5%AE%88%E5%8D%AB
//   // console.log(to, from, router)
//   // if (router.options.isAddDynamicMenuRoutes || getRouteType(to, globalRoutes) === 'global') {
//   //   // 动态菜单列表（页面路由）已存在 或 当前访问的页面属于全局路由
//   //   next()
//   // } else {
//   //   // 获取并保存动态菜单列表（页面路由），追加到 history 栈
//   //   // 添加到本地存储
//   //   $axios({
//   //     url: '/sys/menu/nav',
//   //     method: 'get'
//   //   }).then(({ data }) => {
//   //     console.log(data)
//   //     if (data && data.code === 0) {
//   //       fnAddDynamicMenuRoutes(data.menuList)
//   //       router.options.isAddDynamicMenuRoutes = true
//   //       sessionStorage.setItem('menuList', JSON.stringify(data.menuList || '[]'))
//   //       sessionStorage.setItem('permissions', JSON.stringify(data.permissions || '[]'))
//   //       next({
//   //         ...to,
//   //         replace: true
//   //       })
//   //     } else {
//   //       sessionStorage.setItem('menuList', '[]')
//   //       sessionStorage.setItem('permissions', '[]')
//   //       next()
//   //     }
//   //     // next()
//   //   }).catch(error => {
//   //     router.push({ name: 'login' }).then(() => console.error(`错误信息：${error} 菜单列表和权限请求失败，跳转至登录页......`))
//   //   })
//   // }
// })

export default router
