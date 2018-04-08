<template>
  <div>
      <br/>
      <br/>
      <br/>
      <span >用户名</span>:<el-input v-model="username"  placeholder="请输入用户名" v-red ></el-input>
      <br/>
      <br/>
      <span  v-red>密&emsp;码:</span><el-input v-model="password" type="password"  placeholder="请输入密码" ></el-input>
      <br/>
      <br/>
       <el-button type="primary" @click="axiostest">登录</el-button>
  </div>
</template>

<script>

import Vue from "vue";
import axios from "axios"
import { setCookie,getCookie } from "../../api/utils"
import store from "../../vuex/store"

export default {
  data(){
      return{
        data:"",
        username:"",
        password:"",
        config: {
            //请求的接口，在请求的时候，如axios.get(url,config);这里的url会覆盖掉config中的url
            url: '/user',
            
            // 请求方法同上
            method: 'get', // default
            // 基础url前缀
            baseURL: 'https://some-domain.com/api/',
            　　
            　　　　
            transformRequest: [function (data) {
            // 这里可以在发送请求之前对请求数据做处理，比如form-data格式化等，这里可以使用开头引入的Qs（这个模块在安装axios的时候就已经安装了，不需要另外安装）
            　　data = Qs.stringify({});
                return data;
            }],
            
            transformResponse: [function (data) {
            // 这里提前处理返回的数据
            
            return data;
            }],
            
            // 请求头信息
            headers: {'X-Requested-With': 'XMLHttpRequest'},
            
            //parameter参数
            params: {
            ID: 12345
            },
            
            //post参数，使用axios.post(url,{},config);如果没有额外的也必须要用一个空对象，否则会报错
            data: {
            firstName: 'Fred'
            },
            
            //设置超时时间
            timeout: 1000,
            //返回数据类型
            responseType: 'json', // default
        }
      }
  },
  computed:{
    count(){
        return this.$store.state.count2;
    }
  },
  methods:{
  
    handleLogin(){
       this.$store.dispatch('increment').then(() => {
         console.log(11)
       } )
    },
    axiostest() {
        // axios.post("/api/base/login",{
		// 	username:this.username,
		// 	password:this.password,
		// 	validatecode:null
		// }).then(res => {
        //     console.log(res)
        // }).catch(err => {
        //     console.log(err)
        // })
        if(this.username == "138" && this.password == "111"){
            this.$message({
            message: '恭喜你，登录成功',
            type: 'success'
             });
             store.state.token=this.username;
             setCookie('name',store.state.token,1)
            this.$router.push({//你需要接受路由的参数再跳转
                    path: "/index"
            });
        }else{
              this.$message.error('登录失败，请输入正确的账号与密码');
        }
    },promise(){
    var sleep=function(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                console.log("44setTimeout4")
                resolve("11")
            },1000)
       
        })
    };
    async function getsleep() {
        let vv=await sleep();
        return   new Promise((resolve,reject)=>{
            console.log("setTimeout")
                resolve(vv)
        })
    }
    getsleep().then(v=>{
        console.log(v+"1")
    })
    }
  }
}
</script>

<style scope>
.el-input{
    width:200px;
    margin-left:20px;
}
</style>

