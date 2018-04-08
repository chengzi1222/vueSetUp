<template>
  <div id="app">
    <div class="allpage">
        <top></top>
        <div class="syjcC">
          <keep-alive>
               <router-view></router-view>
          </keep-alive>
          <loading v-if="$store.state.loadingISshow">加载中的效果</loading>
        </div> 
    </div>
    <bottom></bottom>
     <audio src="55" ref="audioDOM" >您的浏览器不支持 audio 标签。</audio>
  </div>
</template>

<script>
import top from "@/view/common/top";
import bottom from "@/view/common/bottom"
import loading from "@/components/loading"


export default {
  name: 'app',
  components:{
    top,
    bottom,
    loading
  },
  methods:{
    hand(){
       console.log(this.$refs.audioDOM.src)
    }
  },
  mounted(){
    this.$store.state.audioDOM=this.$refs.audioDOM
  }
}
</script>

<style >
*{
  padding: 0;
  margin: 0;
}
a{
  text-decoration: none;
}
html,body,#app{
  height: 100%;
}
.allpage {
    width: 100%;
    min-height: calc(100% - 120px);
    overflow: hidden;
    position: relative;
    min-width: 1200px;
}
.syjcC {
    width: 1080px;
    margin: 0 auto;
    overflow: hidden;
}
</style>
