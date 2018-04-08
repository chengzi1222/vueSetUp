<template>
  <div>
    <div v-if="$route.meta.abc">
      555555
    </div>

    {{ msg }}
  </div>
</template>
<script>
    export default {
      data(){
        return{
          msg:'我是一个粉刷匠、粉刷本领强aaaaaaaaaa'
        }
      }
    }
</script>
<style scoped>

</style>
