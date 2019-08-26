<template>
    <div class="setting">
        <!-- <img src="../assets/steamlogin.png" alt="log in through steam" @click.prevent="SteamloginHandler"> -->
        <el-button @click="SteamloginHandler" v-show="!isBinded">绑定STEAM账号</el-button>
        <p v-show="isBinded">已经绑定了STEAM账号！</p>
        <el-button type="primary" href="@/src/assets/csgo-chrome-extension.crx" download="csgo-chrome-extension">点击下载Chrome插件</el-button>
    </div>

</template>
<script>
import Axios from 'axios';
import store from '@/store';
export default {
    computed:{
        isBinded(){
            return store.getters.isBinded
        }
    },
    methods:{
        SteamloginHandler(){
            console.log('click')
            Axios.get('/api/loginwithsteam').then(Response=>{
                console.log(session)
            })
        //TODO
        }
    }
}
</script>
<style scoped>

</style>
