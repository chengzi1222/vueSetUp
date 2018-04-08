<template>
  <div>
    <div  @click="path" v-red >查询</div>
    {{ msg }}
  </div>
</template>
<script>
    export default {
      data(){
        return{
          msg:'我是一个粉刷匠、粉刷本领强bbbbbbbb'
        }
      },
      methods: {
        path(){
          console.log(this.$route.fullPath)
        }
      }
    }
</script>

<style scoped>

</style>
