// 设置cookie
import md5 from "md5"
export function setCookie(name,value,day){
    var Days
    //默认7天
    Days=day ? day : 7;
    var exp=new Date();
    exp.setTime(exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000))
   document.cookie=name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}
export function getCookie(name){
    console.log(name)
   // (^| )name=([^;]*)(;|$),match[0]为与整个正则表达式匹配的字符串，match[i]为正则表达式捕获数组相匹配的数组；
   var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
   if(arr != null) {
       return unescape(arr[2]);
   }
   return null;
}
export function delCookie(name){
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null)
      document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
    }