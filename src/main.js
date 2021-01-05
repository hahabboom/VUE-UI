/* 项目开发规范请参阅 README.md */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCookie from 'vue-cookie' // https://github.com/alfhen/vue-cookie
import ElementUI from 'element-ui' // https://element.eleme.cn/#/zh-CN/component/installation
import 'element-ui/lib/theme-chalk/index.css'
import 'animate.css/animate.min.css' // https://animate.style/
import '@/assets/font/fonts.css'
import '@/assets/iconfont/iconfont.css'
import BaseWindow from '@/components/BaseWindow'
import echarts from 'echarts'

Vue.use(VueCookie)
Vue.use(ElementUI)

Vue.component('BaseWindow', BaseWindow)

Vue.prototype.$event = Vue.prototype.$event || new Vue() // 全局事件挂载，用于全局事件派发和接收
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false // Vue.config：Vue 的全局配置 https://cn.vuejs.org/v2/api/

// 全局混入
Vue.mixin({
  mounted () {
    if (this.resize) {
      window.addEventListener('resize', this.resize)
    }
  }
})

/* 创建和挂载根实例 */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
