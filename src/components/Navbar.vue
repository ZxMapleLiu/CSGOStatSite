<template>
  <el-menu
    :default-active="this.$route.path"
    class="el-menu-demo"
    mode="horizontal"
    router
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-menu-item index="/">主页</el-menu-item>
    <el-menu-item index="/about">关于</el-menu-item>
    <el-col :span="10">
      <el-menu-item>
      <el-input v-model="searchText" placeholder="输入STEAM64位ID，STEAMID或者网站用户名"></el-input>
    </el-menu-item>
    </el-col>
    <el-menu-item>
      <el-button type="primary" @click.prevent="handleSearch">搜索</el-button>
    </el-menu-item>
    <template>
      <el-submenu index v-show="isLogin">
      <template slot="title">{{username}}</template>
      <el-menu-item index="/profile">我的战绩</el-menu-item>
      <el-menu-item index="/setting">设置中心</el-menu-item>
      <el-menu-item @click="handleLogout">登出</el-menu-item>
    </el-submenu>
    </template>
    

    <el-menu-item v-show="!(isLogin)" index="/login" justify="end">登录</el-menu-item>
    <el-menu-item v-show="!(isLogin)" index="/register">注册</el-menu-item>
    
  </el-menu>
</template>

<script>
import Axios from 'axios';
import router from '@/router.js'
import store from '@/store.js'

export default {
  name: "Navbar",
  data() {
    return {
      searchText: "",
    };
  },
  computed:{
      username()
      {
        return store.getters.currentUser
      },
      isLogin()
      {
        return store.getters.isLogin
      }
  },
  components:{
    router,
    store
  },
  methods: {
    handleSearch() {
      console.log(this.searchText);
    },
    handleLogout(){
      Axios.get('/api/logout',{}).then(response=>{

        store.dispatch("setUser",null)
        alert(response.data.message)
        router.go("/")
      })
    }
  },
  props: []
};
</script>