<template>
  <div>test
    <router-link :to='{name : "aa"}' >
      to-aa
    </router-link>
     <router-link :to='{name : "bb", query: { user :"zaizai"}}'>
      to-bb
    </router-link>
<br><br><br><br><br><br>

<button @click="isshow">按钮</button>
    <transition name="fade">
      <div class="div" v-show="show">
        哈哈哈哈哈哈哈
      </div>
    </transition>
    <br><br><br><br><br><br>
     <router-view></router-view>

     <br>
       <el-button @click="visible = true">我是一个小按钮</el-button>
  </div>
</template>
<script>
    export default {
      data () {
        return {
          show:true
        }
      },
      methods:{
          isshow() {
            this.show=!this.show
          }
      },
      beforeRouteEnter (to, from, next) {
         // 在渲染该组件的对应路由被 confirm 前调用
         // 不！能！获取组件实例 `this`
         // 因为当钩子执行前，组件实例还没被创建
           next(vm => {
              console.log(from.path)
            })
    },
     beforeRouteLeave (to, from, next) {
         // 在渲染该组件的对应路由被 confirm 前调用
         //能！获取组件实例 `this`
         // 因为当钩子执行前，组件实例还没被创建
           next(vm => {
              console.log(2)
            })
    },
    }
</script>

<style scoped>
.div{
  width:150px;
  height: 30px;
  background: pink;
}
.fade-enter-active, .fade-leave-active{
 transition: all 1s ease-out;
}
 
.fade-enter{
width:1000px;
opacity: 0;
}
.fade-leave-active{
width: 1000px;
opacity: 0;
 }
</style>
