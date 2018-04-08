<template>
    
    <div class="syjctop">
        <div  class="logobox"><img :src="imgdata" class="logo"></div>
        <div class="nav">
        <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-submenu index="1">
                <template slot="title">分类查询</template>
                <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
            </el-submenu>
            <el-menu-item index="2">有声书城</el-menu-item>
            <el-menu-item index="3">听吧社区</el-menu-item>
            <el-menu-item index="4">机构专区</el-menu-item>
            <el-menu-item index="5"><a href="https://www.taobao.com" target="_blank">9.9包邮商城</a></el-menu-item>
        </el-menu>
        </div>
    </div>
    
</template>

<script>
export default {
  data(){
      return{
          imgdata:require("../../assets/img/logo.png"),
          data: [{
          label: '文学',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '小说',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '娱乐',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        activeIndex: '1',
        activeIndex2: '1'
      }
  },
    methods: {
        handleNodeClick(data) {
        console.log(data);
        },
         handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style scoped>
.syjctop{
  width: 100%;
  background-color: rgb(246, 242, 238);
}
.syjctop  .logobox{
    margin: 0 auto;
    height: 60px;
    width: 1080px;
    background-color: rgb(246, 242, 238);
}
.nav{
  width: 1080px;
  margin: 0 auto;
  background-color: rgb(246, 242, 238);
}
.syjctop .logo{
    width: 214px;
    height:60px;
    display: block;
    background-size: cover;
}
.el-tree {
    cursor: pointer;
    border:none;
    min-width: 400px;
}
</style>