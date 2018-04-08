import Vuex from "vuex"
import Vue from "vue"

import index from "@/vuex/index.js";
import mutations from "@/vuex/mutations.js"

Vue.use(Vuex);


// 全局
const state = {
  token:"",//权限
  loadingISshow:false,//loading加载
  audioDOM:"",//播放dom
  audioState:false,//播放状态
  newData:{ //播放的数据
    id:0,
    play_path:""
  }
};

const getters = {

};
const actions = {
  controlAudio({commit,state,dispatch},newData){
      
      // 如果有新数据先将新数据挂上去，用于后面是否换新的播放地址
      // if(newData){
      //   commit("CHANGEAUDIODATA",newData);
      // }
      console.log(newData,state.audioState)
        state.newData.play_path=newData.play_path;
        state.audioDOM.src=state.newData.play_path;
        state.audioDOM.play()
      // 如果数据不会空，且播放地址存在，且播放地址更新了将新地址给播放器
      // if(state.audiodata &&  state.audiodata.play_path && (state.audioDOM.src != state.audiodata.play_path) ){
      //     state.audioDOM.src = state.audiodata.play_path;
      //     //播放结束执行的回调函数
      //     state.audioDOM.addEventListener("ended",()=>{
      //         commit('CHANGEPLAY');
      //         state.audioDOM.src = state.audiodata.play_path;
      //     },false)
      // }

      // // 通过是否有新数据用于控制后面的是否播放
      // dispatch("changePlayState",newData);
      
  },
// 改变播放按钮的样式
changePlayState({state,commit},newData){
    if(state.play &&  state.audioDOM.src ){
        //当前未处于播放状态，音频有播放链接，切换成播放。
        state.audioDOM.play();
        state.playiconDOM.style.background ="url(" + state.audiodata.cover_url_142 + ")";
        state.playiconDOM.style.backgroundSize = "contain";
        commit('CHANGEPLAY');
    }else if(!state.play &&  state.audioDOM.src && newData){
        // 当处于正在播放时，音频有播放链接，且是有新数据要播放，那任然处于播放状态。
        state.audioDOM.play();
        state.playiconDOM.style.background ="url(" + state.audiodata.cover_url_142 + ")";
        state.playiconDOM.style.backgroundSize = "contain";
    }
    else{
        state.audioDOM.pause();
        state.playiconDOM.style.background ="url(" + state.audiodata.cover_url_142 + ")";
        state.playiconDOM.style.backgroundSize = "contain";
        commit('CHANGEPLAY');
    }
    
  },
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {
    index
  }

})
