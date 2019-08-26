<template>
    <div>
    
        <el-container>
    
            <el-aside width="200px">


            </el-aside>
            <el-container>
    
                <el-header>
                <el-row>
                  <el-col :span="12">Team A</el-col>
                  <el-col :span="12">Team B</el-col>
                </el-row>
                <el-row>
                  <el-col :span="12">{{matchInfoId.team_a_score}}</el-col>
                  <el-col :span="12">{{matchInfoId.team_b_score}}</el-col>

                </el-row>

                </el-header>
    
                <el-main>
                  <table class="csgo_scoreboard_inner_right">
                  <tbody>
                    <tr>
					        <th>玩家名称</th>
                  <th>延迟</th>
                  <th>杀</th>
                  <th>助</th>
                  <th>死</th>
                  <th>★</th>
                  <th>爆头率</th>
                  <th>得分</th>
                </tr>
                <tr>
                  <td><a img :src="steamPlayerSummaries[0].avatar" :herf="steamPlayerSummaries[0].profileurl">{{steamPlayerSummaries[0].personaname}}</a></td>
                  <td>{{playerRecord.player1.latency}}</td>
                  <td>{{playerRecord.player1.kills}}</td>
                  <td>{{playerRecord.player1.assist}}</td>
                  <td>{{playerRecord.player1.death}}</td>
                  <td>{{playerRecord.player1.mvp_round}}</td>
                  <td>{{playerRecord.player1.headshot_rate}}</td>
                  <td>{{playerRecord.player1.score}}</td>
                  </tr>
                  <tr>
                  <td><a img :src="steamPlayerSummaries[1].avatar" :herf="steamPlayerSummaries[1].profileurl">{{steamPlayerSummaries[1].personaname}}</a></td>
                  <td>{{playerRecord.player2.latency}}</td>
                  <td>{{playerRecord.player2.kills}}</td>
                  <td>{{playerRecord.player2.assist}}</td>
                  <td>{{playerRecord.player2.death}}</td>
                  <td>{{playerRecord.player2.mvp_round}}</td>
                  <td>{{playerRecord.player2.headshot_rate}}</td>
                  <td>{{playerRecord.player2.score}}</td>
                  </tr>
                  <tr>
                  <td><a img :src="steamPlayerSummaries[2].avatar" :herf="steamPlayerSummaries[2].profileurl">{{steamPlayerSummaries[2].personaname}}</a></td>
                  <td>{{playerRecord.player3.latency}}</td>
                  <td>{{playerRecord.player3.kills}}</td>
                  <td>{{playerRecord.player3.assist}}</td>
                  <td>{{playerRecord.player3.death}}</td>
                  <td>{{playerRecord.player3.mvp_round}}</td>
                  <td>{{playerRecord.player3.headshot_rate}}</td>
                  <td>{{playerRecord.player3.score}}</td>
                  </tr>
                  <tr>
                  <td><a img :src="steamPlayerSummaries[3].avatar" :herf="steamPlayerSummaries[3].profileurl">{{steamPlayerSummaries[3].personaname}}</a></td>
                  <td>{{playerRecord.player4.latency}}</td>
                  <td>{{playerRecord.player4.kills}}</td>
                  <td>{{playerRecord.player4.assist}}</td>
                  <td>{{playerRecord.player4.death}}</td>
                  <td>{{playerRecord.player4.mvp_round}}</td>
                  <td>{{playerRecord.player4.headshot_rate}}</td>
                  <td>{{playerRecord.player4.score}}</td>
                  </tr>
                  <tr>
                  <td><a img :src="steamPlayerSummaries[4].avatar" :herf="steamPlayerSummaries[4].profileurl">{{steamPlayerSummaries[4].personaname}}</a></td>
                  <td>{{playerRecord.player5.latency}}</td>
                  <td>{{playerRecord.player5.kills}}</td>
                  <td>{{playerRecord.player5.assist}}</td>
                  <td>{{playerRecord.player5.death}}</td>
                  <td>{{playerRecord.player5.mvp_round}}</td>
                  <td>{{playerRecord.player5.headshot_rate}}</td>
                  <td>{{playerRecord.player5.score}}</td>
                  </tr>
                  <tr>
                  <hr></hr>
                  </tr>
                  <tr>
                  <td><a img :src="steamPlayerSummaries[5].avatar" :herf="steamPlayerSummaries[5].profileurl">{{steamPlayerSummaries[5].personaname}}</a></td>
                  <td>{{playerRecord.player6.latency}}</td>
                  <td>{{playerRecord.player6.kills}}</td>
                  <td>{{playerRecord.player6.assist}}</td>
                  <td>{{playerRecord.player6.death}}</td>
                  <td>{{playerRecord.player6.mvp_round}}</td>
                  <td>{{playerRecord.player6.headshot_rate}}</td>
                  <td>{{playerRecord.player6.score}}</td>
                  </tr>
                  <tr>
                  <td><a img :src="steamPlayerSummaries[6].avatar" :herf="steamPlayerSummaries[6].profileurl">{{steamPlayerSummaries[6].personaname}}</a></td>
                  <td>{{playerRecord.player7.latency}}</td>
                  <td>{{playerRecord.player7.kills}}</td>
                  <td>{{playerRecord.player7.assist}}</td>
                  <td>{{playerRecord.player7.death}}</td>
                  <td>{{playerRecord.player7.mvp_round}}</td>
                  <td>{{playerRecord.player7.headshot_rate}}</td>
                  <td>{{playerRecord.player7.score}}</td>
                  </tr>
                  <tr>
                  <td><a img :src="steamPlayerSummaries[7].avatar" :herf="steamPlayerSummaries[7].profileurl">{{steamPlayerSummaries[7].personaname}}</a></td>
                  <td>{{playerRecord.player8.latency}}</td>
                  <td>{{playerRecord.player8.kills}}</td>
                  <td>{{playerRecord.player8.assist}}</td>
                  <td>{{playerRecord.player8.death}}</td>
                  <td>{{playerRecord.player8.mvp_round}}</td>
                  <td>{{playerRecord.player8.headshot_rate}}</td>
                  <td>{{playerRecord.player8.score}}</td>
                  </tr>
                  <tr>
                  <td><a img :src="steamPlayerSummaries[8].avatar" :herf="steamPlayerSummaries[8].profileurl">{{steamPlayerSummaries[8].personaname}}</a></td>
                  <td>{{playerRecord.player9.latency}}</td>
                  <td>{{playerRecord.player9.kills}}</td>
                  <td>{{playerRecord.player9.assist}}</td>
                  <td>{{playerRecord.player9.death}}</td>
                  <td>{{playerRecord.player9.mvp_round}}</td>
                  <td>{{playerRecord.player9.headshot_rate}}</td>
                  <td>{{playerRecord.player9.score}}</td>
                  </tr>
                  <tr>
                  <td><a img :src="steamPlayerSummaries[9].avatar" :herf="steamPlayerSummaries[9].profileurl">{{steamPlayerSummaries[9].personaname}}</a></td>
                  <td>{{playerRecord.player10.latency}}</td>
                  <td>{{playerRecord.player10.kills}}</td>
                  <td>{{playerRecord.player10.assist}}</td>
                  <td>{{playerRecord.player10.death}}</td>
                  <td>{{playerRecord.player10.mvp_round}}</td>
                  <td>{{playerRecord.player10.headshot_rate}}</td>
                  <td>{{playerRecord.player10.score}}</td>
                  </tr>
                  </tbody>
            </table></el-main>
    
            </el-container>
    
        </el-container>
    
    </div>
</template>
<script>
import Axios from 'axios'
import router from '@/router.js'

export default {
    name:'Match',
    props:{
        matchid:{
            default:function(){
                return this.$route.params.id
            }
        }
    },
    created:function(){
        Axios.get('api/match',{params:{
            matchid:this.matchid
        }}).then(response=>{
            if(response.data.err_code == 1){
                alert(response.data.msg)
            }
            else {
                console.log(response)
                this.playerRecord = response.data.playerRecord;
                this.matchInfoId = response.data.matchInfoId;
                this.match_id = response.data.match_id;
            }
        }).then(response=>{
          Axios.get('steamapi/?key=46257AD6F8FBB94C70E3B66BF1BC8164&steamids='+this.playerRecord.player1.player_id+','+this.playerRecord.player2.player_id+','+
                    this.playerRecord.player3.player_id+','+
                    this.playerRecord.player4.player_id+','+
                    this.playerRecord.player5.player_id+','+
                    this.playerRecord.player6.player_id+','+
                    this.playerRecord.player7.player_id+','+
                    this.playerRecord.player8.player_id+','+
                    this.playerRecord.player9.player_id+','+
                    this.playerRecord.player10.player_id
        ).then(response=>{
            console.log(response.data.response.players)
            this.steamPlayerSummaries = response.data.response.players
        })
        })
    },
    data() {
        return {
            playerRecord:[],
            matchInfoId:[],
            match_id:[],
            steamPlayerSummaries:[]
        }
    }
}
</script>
<style>
  .csgo_scoreboard_inner_right {
	width: 100%;
}

.csgo_scoreboard_inner_right th, .csgo_scoreboard_inner_right td {
	border-bottom: 1px solid #243549;
	width: 35px;
	min-width: 35px;
	text-align: right;
}

.csgo_scoreboard_inner_right th {
	padding-left: 0px;
	padding-right: 0px;
}

.csgo_scoreboard_inner_right td {
	padding: 0px;
}

.csgo_scoreboard_inner_right .inner_name {
	width: 175px;
	max-width: 175px;
	text-align: left;
}
</style>