// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "@/vuex/store"
import vueResource from 'vue-resource';

// 引入饿了么UI组件库


import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import '../theme/index.css'

// 引入全局的指令和过滤器
import directives from "@/directives.js"
import filters from "@/filters.js"

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(vueResource);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  vueResource,
  template: '<App/>',
  components: { App }
})
