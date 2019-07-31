<template>
    <div id="register">
    <el-container>
      <el-container class="reg-box">
        <el-main height>
          <div id="main page">
            <div >
              <h3 class="reg-title">欢迎注册</h3>
              <el-row type="flex" justify="center" style="padding: 6px">
                <el-col :span="8">
                  <el-input v-model="username" placeholder="请输入用户名"></el-input>
                </el-col>
              </el-row>
              <el-row type="flex" justify="center" style="padding: 6px">
                <el-col :span="8">
                  <el-input placeholder="请输入电子邮件地址" v-model="email"></el-input>
                </el-col>
              </el-row>
              <el-row type="flex" justify="center" style="padding: 6px">
                <el-col :span="8">
                  <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
                </el-col>
              </el-row>
              
              <el-button @click="registerHandler" type="primary" style="margin:15px">注册</el-button>
            </div>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import Axios from 'axios';


export default {
    name:'register',
    data(){
        return{
            username:'',
            password:'',
            email:'',
        }
    },
    methods:{
        registerHandler(){
            
            console.log(this.username+this.password+this.email)
            Axios.post('api/register',{
                username:this.username,
                email:this.email,
                password:this.password
            }).then(response=>{
                if(response.data.err_code==1){
                    window.alert(response.data.message)
                }
                else if(response.data.err_code==0){
                    alert(response.data.message)
                    router.push("/");
                }
            })
        }
    }
}
</script>
<style scoped>
.reg-box {
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
.reg-title {
  text-align: center;
  margin: 0 auto 40px auto;
  color: #303133;
}
</style>
