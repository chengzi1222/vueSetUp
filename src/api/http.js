import axios from "axios"
import store from "../vuex/store"
import { getCookie } from "./utils"
import { Message,Loading } from "element-ui"
//请求超时时间
axios.defaults.timeout=5000;

//http请求拦截器
axios.interceptors.request.use(config=>{
    if( getCookie("name") == store.state.token ){// 判断是否存在token，如果存在的话，则每个http header都加上token
        config.headers.Authorization = `token ${store.state.token}`;
    }else {
        Message.error({
            message: '没有权限'
        })
    }
    return config;
},error => {
    Message.error({
        message: '加载超时'
    })
    return Promise.reject(err);
})
//http响应拦截器
axios.interceptors.response.use(data=>{
 
    return data
},error =>{   
    Message.error({
        message: '加载失败'
    })
    return Promise.reject(err);
})
export default axios