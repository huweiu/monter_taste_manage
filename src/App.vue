<template>
  <div id="app">    
    <router-view/>
  </div>
</template>

<script>
import jwt_decode from "jwt-decode"
export default {
  name: 'App',
  data(){
    return {

    }   
  },

  created(){
    if(localStorage.admin_login_token){
      const decoded  = jwt_decode(localStorage.admin_login_token) 
      // 解析后的token存储到vuex中
        this.$store.dispatch("setAuthorization",!this.isEmpty(decoded))
        this.$store.dispatch("setUser",decoded)
    }
  },

  methods:{
    // 判断是否为空 为空返回真  不为空返回为假
    isEmpty(value){
      return (
        value === undefined || value === null || 
        (typeof value === "object" && Object.keys(value).length === 0) || 
        (typeof value === "string" && value.trim().length === 0)
      )
    }
  }
}
</script>

<style>
  html,body,#app {
    width: 100%;
    height: 100%;
    /* 去掉滚动条 */
    overflow: hidden;   
  }
</style>
