<template>
    <div class="setting">
        <!-- <img src="../assets/steamlogin.png" alt="log in through steam" @click.prevent="SteamloginHandler"> -->
        <el-button @click="SteamloginHandler" v-show="!isBinded">绑定STEAM账号</el-button>
        <p v-show="isBinded">已经绑定了STEAM账号！</p>
    </div>
</template>
<script>
import Axios from 'axios';
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
