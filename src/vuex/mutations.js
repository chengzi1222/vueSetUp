const mutations = {
    // 设置用户信息
    SETUSER(state,userobj){
        for (var key in userobj) {
            state.user[key] = userobj[key];
        }
    },
    // 删除用户信息
    DELUSER(state){
        state.user = {};
    },
    //设置token值
    SETTOKEN(state,tokenval){
        state.token = tokenval;
    },
    //改变正在播放的音频的数据
    CHANGEAUDIODATA(state,newsrc){
        state.audiodata = newsrc;
    },
    //改变音频的播放与暂停状态
    CHANGEPLAY(state){
        state.play =  !state.play;
    },
    //设置音频的播放的状态
    SETPLAY(state,data){
        state.play = data;
    },
    loadingfalse(state) {
        state.loadingISshow = false;
      },
    loadingtrue(state) {
        state.loadingISshow = true;
      },
};
export default mutations;
