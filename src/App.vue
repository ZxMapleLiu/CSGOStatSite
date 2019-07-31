<template>
  <div id="app" style="margin: 0px" :style="{backgroundImage:'url('+bgurl+')'}">
    <el-container>
        <el-header>
          <Navbar></Navbar>
        </el-header>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

  	export default {
      name:'App',
      components:
      {
        Navbar
      },
      data(){
        return {
          bgurl:'./src/assets/background.png'
        }
      }
  	}

</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
