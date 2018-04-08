<template>
  <div class="main" >
    <el-input
      placeholder="请输入你要搜索的内容"
      icon="search"
      class="searchInput"
      v-model="input2"
      :on-icon-click="handleIconClick">
    </el-input>
    <div> 
        <em class="title">小编推荐</em>
        <el-row :gutter="45">
            <audioitem v-for='(item,index) in pagedata.slice(0,3)' :item="item" :key='index' ></audioitem>
        </el-row>
    </div>
    <div> 
        <em class="title">头条</em>
        <el-row :gutter="45">
            <audioitem v-for='(item,index) in  pagedata.slice(12,15)' :item="item"  :key='index'></audioitem>
        </el-row>
    </div>
    <div>
        <em class="title">有声书</em>
        <el-row :gutter="45">
            <audioitem v-for='(item,index) in  pagedata.slice(6,9)' :item="item" :key='index'></audioitem>
        </el-row>
    </div>
        <div>
        <em class="title">脱口秀</em>
        <el-row :gutter="45">
            <audioitem v-for='(item,index) in  pagedata.slice(15,18)' :item="item" :key='index'></audioitem>
        </el-row>
    </div>
    <player class="player" @getState="getstate"></player>
     
  </div>
</template>

<script>
import audioitem from "../../components/audio-item"
import player from "../../components/player"
import indexpagehttp from "../../api/indexpagehttp"
import store from "../../vuex/store"

export default {
  name: 'hello',
  components:{
    audioitem,
    player
  },
  data () {
    return {
      pagedata:[]
    }
  },
    async beforeMount(){//载入前获取数据
    let pagedata = await indexpagehttp();
    this.pagedata = pagedata.data;
  },
  computed:{
  
  },
  mounted(){
  },
  methods:{
    getstate(s){
      if(!s){
         this.$store.state.audioDOM.pause()
      }else{
        this.$store.state.audioDOM.play()
      }
      this.$store.state.audioState=s
    }
    ,handleIconClick(){

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.searchInput{
  margin: 50px 240px;
  width: 600px;
}
.player{
position: fixed;
left:0%;
top:50%;
border-radius: 5px;
overflow: hidden
}
.main{
  padding-bottom: 50px;
}
.title{
  color:#202020;
  font-weight: 600;
  font-family: "georgia", "STHeiti", "Microsoft YaHei", "simsun", "sans-serif", Arial;
  font-size: 30px;
  font-style: italic;
  padding: 25px 0 25px ;
  display: inline-block;
  width:100%;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
