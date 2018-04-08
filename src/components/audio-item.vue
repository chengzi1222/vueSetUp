<template>
<div  @click="handleclick">
    <el-col :span="8" >
        <div class="box"> 
            <div  class="boxItem"> 
                <div class="imgbox relative">
                  <img :src="item.img">
                  <a href="javascript:;" class="absolute">{{ item.title }}</a>
                </div>
                <p class="info">{{ item.info }}</p>
                <p class="buy">{{ item.buy }}</p>
            </div>
        </div>
    </el-col>
</div>
</template>

<script>
import audiohttp from "../api/audioHttp"
export default {
  props:{
    item:{
      default:function(){
                return {};
            }
    }
  },
  data() {
    return {
    }
  },
   methods:{
        async handleclick(){
          
            //当点击的不同的类型才请求数据
            // if(this.itemData.id != this.$store.state.audiodata.id){
                let msg = await audiohttp(this.item.id);
               
                this.$store.dispatch("controlAudio",msg.data);
            // }
        },
        cc(){
          alert(1)
        }
    }
}
</script>


<style scoped>
.box:hover{
  border:1px solid red;
}
.buy{
  color: #3586BC;
  font-size: 15px;
}
.info{
  color: #3586BC;
  font-weight: normal;
  font-size: 18px;
  margin:20px 0;
  line-height: 28px;
  height: 58px;
}
.relative{
  position: relative;
}
.absolute{
  position:absolute;
  left: 0;
  bottom: 0;
  color: #fff;
  padding: 0 10%;
  font-size: 14px;
  text-align: center;
  height: 31px;
  line-height: 31px;
  background: rgba(0, 0, 0, 0.6);
  z-index: 99;
  width: 75%;
}
.imgbox{
  width: 100%;
  height: 230px;
  background: url(../assets/img/bgimg.jpg) no-repeat left;
  background-size: 98% 96%;
  }
.imgbox>img{
  margin: 5% 5% 0 0;
  width: 95%;
  height: 95%;
}

  .box{
    width: 99%;
    height: 350px;
    border: 1px solid #f8f8f8;
    background-color: #f8f8f8;
    padding: 30px 0;
  }
  .boxItem{
    width: 70%;
    margin: 0 auto;
    height: 290px;
  }
</style>
