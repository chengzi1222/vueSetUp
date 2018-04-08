import Vue from 'vue'
import Router from 'vue-router'
import store from "@/vuex/store.js"
import { Message } from "element-ui"
import { getCookie } from "../api/utils"
import whiteList from './whitelist'; // 白名单
 
// 懒加载
const index = resolve => require(['../view/index/index.vue'], resolve)
const login = resolve => require(['../view/login/login.vue'], resolve)
const test = resolve => require(['../view/test/test.vue'],resolve)
const aa = resolve => require(['../view/test/aa.vue'],resolve)
const bb = resolve => require(['../view/test/bb.vue'],resolve)
const load = resolve => require(['../components/loading.vue'],resolve)

Vue.use(Router)

const router =  new Router({
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  },
  routes: [
    {
      path:"/",
      name:"login",
      component:login
    },
     {
      path: '/load',
      name: 'load',
      component: load
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path:'/test',
      name:'test',
      redirect:'/test/aa',
      component:test,
      children:[{
        path:'aa',
        name:'aa',
        component:aa,
        meta:{ abc : false }
      },
      {
         path:'bb',
         name:'bb',
         component:bb
      }]
    }
  ]
})
router.beforeEach((to, from, next) => {
   store.commit("loadingtrue")
   if(getCookie('name') == store.state.token ){

        if (to.path === '/') {
          next({
            path: '/index'
          });
        } else {
          next();
        }
   }else {
      if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
        next();
      } else if(to.path === '/'){
      
        next(); 
      }
      else  {
         Message.error('沒有權限，请登錄');
        next({
          path: '/'
        });
        store.commit("loadingfalse")
        // next('/'); // 否则全部重定向到登录页
      }
   }
});
router.afterEach( ()=> {
    store.commit("loadingfalse")
});

export default router;
