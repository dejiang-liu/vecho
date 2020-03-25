import Vue from 'vue'
import App from '@/App.vue'
import router from './router'
import store from './store'

//兼容IE9+
import 'babel-polyfill'

//第三方库
import MintUI, { Indicator, Toast } from 'mint-ui'
import 'mint-ui/lib/style.css'
import VueProgressBar from 'vue-progressbar'

// 自定义
import '@/assets' // 字体、样式等资源

//第三方
Vue.use(MintUI)
Vue.prototype.$indicator = Indicator
Vue.prototype.$toast = Toast
Vue.use(VueProgressBar, {
  color: 'rgb(143, 255, 199)',
  failedColor: 'red',
  height: '2px'
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
