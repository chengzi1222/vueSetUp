<template>
<div class="player">
    <div>
        <img src="http://fdfs.xmcdn.com/group28/M05/31/DC/wKgJSFlUaXnz-8BgAADao7w_CQY501_web_large.jpg" alt="加载失败">
        <i title="播放" @click="handHover" :class="{playBtn : this.play  }"></i>
    </div>
</div>
</template>

<script>
import store from "../vuex/store"
export default{
    data(){
        return{
            play:true
        }
    },
    methods:{
       handHover(){
          var playB=this.play;
          this.play=playB ? false : true;
          this.$emit('getState',this.play);
          
       }
    },
    mounted(){
        this.play=this.$store.state.audioState
    }
}
</script>

<style scoped>
.player>div{
    width: 100px;
    height:100px;
    background: #fff;
    position: relative;
}
.player>div>img{
    display:block;
    width: 100%;
    height: 100%;
}
.player>div>i{
    width: 50px;
    height: 50px;
    cursor: pointer;
    display: inline-block;
    background: url(../assets/img/player.png) no-repeat;
    vertical-align: middle;
    position: absolute;
    top:25px;
    left:25px;
    background-size: 251%;
}
.player>div>i:hover{
    background-position: -75px 0;
}
.player>div .playBtn{
    background-position: 0px -63px;
}
.player>div .playBtn:hover{
     background-position: -75px -63px;
}
</style>