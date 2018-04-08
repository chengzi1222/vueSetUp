import Vue from "vue";

const focus = Vue.directive("focus",{
    inserted:function(el){
        el.focus();
    }
});


const select = Vue.directive("select",{
    inserted:function(el){
        el.select();
    }
})

const red = Vue.directive("red",{
    inserted:function(el){
        el.style.color='red';
    }
})
export {focus,select,red};