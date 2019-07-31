import Vue from 'vue'
import store from './store'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

var router = new Router({
  
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('./views/Profile.vue')
    },
    {
      path: '/setting',
      name: 'setting',
      component: () => import('./views/Setting.vue'),
      meta:{
        requireLogin:true,
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue'),
      meta:{
        requireLogout:true
      }
    },
    {
      path: '/register',
      name: 'register',
      component:() => import('./views/Register.vue'),
      meta:{
        requireLogout: true
      }
    },

  ],
  components:{
    store
  }
  
})
router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  console.log(store.getters.isLogin)
  if(to.meta.requireLogin == true){
    if(store.getters.isLogin==false){
      alert('请先登录！')
      next('/login')
    }
  }
  if(to.meta.requireLogout==true){
    if(store.getters.isLogin==true){
      alert('请先登出！')
      next('/')
    }
  }
  next()
})

export default router;