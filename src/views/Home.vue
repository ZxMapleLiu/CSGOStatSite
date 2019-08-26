<template>
  <div class="home">
    <!-- <navbar></navbar> -->
    <el-image
    style="width:wrap-content"
    :src="bnimgurl"
    fit='scale-down'>
    </el-image>
    <banner>
    </banner>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
//import navbar from '@/components/Navbar.vue'
import banner from '@/components/Banner.vue'
export default {
  name: 'home',
  components: {
    // HelloWorld
    banner
  },
  data() {
    return {
      bnimgurl:require('@/assets/fb_image.png')
    }
  },
}
</script>
<style scoped>
</style>
