<template>
    <div class="profile">
        <el-container>
            <el-header height="300px">
            <el-row>
              <el-col :span="6"><el-image
                style="width: 184px; height: 184px"
                :src="steamPlayerSummaries.avatarfull"
                fit="fill"></el-image></el-col>
                <el-col :span="6">
                <h2>{{steamPlayerSummaries.personaname}}</h2>
                <h3>当前{{status[steamPlayerSummaries.personastate]}}</h3>
                <h4><el-link :href='steamPlayerSummaries.profileurl' type="info">个人资料链接</el-link></h4>
                </el-col>
                <el-col :span="12">
                <h2>统计信息</h2>
                <h3>击杀数：{{totalStats.totalKill}}</h3>
                <h3>死亡数：{{totalStats.totalDeath}}</h3>
                <h3>助攻数：{{totalStats.totalAssists}}</h3>
                <h3>MVP回合数：{{totalStats.totalAssists}}</h3>
                <h3>得分：{{totalStats.totalScores}}</h3>
                </el-col>
            </el-row>
            </el-header>
            <el-main>
             <el-table
                :data="matchHistoryArray"
                style="width: 100%">
                <el-table-column
                label="比赛ID"
                width="180">
                <template slot-scope="scope">{{scope.row.matchid}}</template>
                </el-table-column>
                <el-table-column
                label="地图"
                width="180">
                <template slot-scope="scope">{{scope.row.map}}</template>
                </el-table-column>
                <el-table-column
                label="比赛开始时间">
                <template slot-scope="scope">{{scope.row.time}}</template>
                </el-table-column>
                <el-table-column>
                <template slot-scope="scope">
                <el-button type="primary"  @click="handleOnClickInfo(scope.row.matchid)">查看比赛详情</el-button></template>
                </el-table-column>
            </el-table>
            </el-main>
        </el-container>
    </div>
</template>
<script>
import Axios from 'axios'
import router from '@/router.js'

export default {
    //TODO
    props:{
        steam64id:{type:String,default:function(){
            return this.$route.params.id
        }},
    },
    created: function() {
        Axios.get('api/profile',{params:{
            ID:this.steam64id
        }}).then(response=>{
            this.matchHistoryArray=response.data.matchHistoryArray;
            this.totalStats=response.data.totalStats;
        });
        Axios.get('/steamapi/',{
                params:{
                    key:'46257AD6F8FBB94C70E3B66BF1BC8164',
                    steamids:this.steam64id
                }
            }
        ).then(response=>{
            console.log(response.data.response.players[0])
            this.steamPlayerSummaries = response.data.response.players[0]
        })
    },
    data() {
        return {
            matchHistoryArray:[],
            totalStats:{},
            steamPlayerSummaries:{},
            status:['离线','在线','忙碌','离开','打盹','想要交易','想要玩游戏']
        }
    },
    methods: {
        handleOnClickInfo:function(matchid){
            console.log(matchid)
            router.push({name:'match-id',params:{id:matchid}})
        }
    },
}
</script>
<style scoped>

</style>
