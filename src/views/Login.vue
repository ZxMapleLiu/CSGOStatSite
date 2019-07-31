<template>
  <div id="login">
    <el-container>
      <el-container class="login-box">
        <el-main height>
          <div id="main page">
            <div>
              <h3 class="login-title">欢迎登录</h3>
              <el-row type="flex" justify="center" style="padding: 6px">
                <el-col :span="8">
                  <el-input v-model="username" placeholder="请输入用户名"></el-input>
                </el-col>
              </el-row>
              <el-row type="flex" justify="center" style="padding: 6px">
                <el-col :span="8">
                  <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
                </el-col>
              </el-row>
              <el-button @click="loginHandler" type="primary" style="margin: 15px">登录</el-button>
            </div>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import router from '@/router.js'
var md5 = require("md5");
const axios = require("axios");



export default {
  name: "login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  components:{
      router
  },
  methods: {
    loginHandler() {
      axios
        .post("api/login", {
          username: this.username,
          password: this.password
        })
        .then(response => {
          console.log(response);
          if (response.data.err_code === 0) {
            sessionStorage.setItem("username",response.data.username)
            if(response.data.steamid != null){
                sessionStorage.setItem("steamid",response.data.steamid)
            }
            //console.log(sessionStorage.getItem("username"))
            this.$store.dispatch("setUser", sessionStorage.username)
            console.log(response.data.message)
            console.log(this.$store.state.isLogin)
            alert(response.data.message)
            router.push("/");
          } else if (response.data.err_code === 1) {
            console.log(response.data.message)
            alert(response.data.message)
          }
        });
    }
  }
};
</script>
<style scoped>
.login-box {
  border: 1px solid #dcdfe6;
  width: 100px;
  height: 450px;
  margin: auto;
  padding: 35px 35px 15px 35px;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  box-shadow: 0 0 25px #909399;
}
.login-title {
  text-align: center;
  margin: 0 auto 40px auto;
  color: #303133;
}
</style>
