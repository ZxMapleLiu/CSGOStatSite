import Vuex from 'vuex'
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import store from './store'
import App from './App.vue'



Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(ElementUI)

import axios from 'axios';//引入axios组件
axios.defaults.withCredentials=true;  //跨域保存session有用
//将 axios 赋值给 Vue，方便在子组件里面使用
Vue.prototype.$reqs = axios;



const app = new Vue({
  router,
  store,

  // data:
  // {
  //   topnavbar : new Vue({
  //     router,
  //     render: h=>h(Navbar)
  //   }).$mount('#navbar')
  // },
  created() {
    this.$store.dispatch("setUser", sessionStorage.username)
  },

  render: h => h(App)
}).$mount('#app')

