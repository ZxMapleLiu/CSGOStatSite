import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUserName:'',
    isLogin: false,
    isBinded:false
  },
  getters:{
    currentUser:state => state.currentUserName,
    isLogin:state => state.isLogin,
    isBinded:state => state.isBinded
  },
  mutations: {
    userStatus:(state,user)=>
    {
      if(user){
        state.currentUserName=user
        state.isLogin = true
        if(sessionStorage.getItem("steamid")){
          state.isBinded = true
        }
      }else if (user == null)
      {
        sessionStorage.removeItem("username");
        state.currentUserName = null
        state.isLogin =false
      }
    }
  },
  actions: {
    setUser: ({commit},user) =>{
      commit("userStatus",user)
    }
    
  }
})
