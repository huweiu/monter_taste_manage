<template>
    <div class="login">
        <section class="form-container">
            <div class="manage-tip">
                <span class="title">妈妈的味道后台管理系统</span>
            </div>
            <el-form :model="loginUser" :rules="rules" class="loginForm" ref="loginForm" label-width="60px">                
                <el-form-item label="邮箱" prop="email">
                    <el-input v-model="loginUser.email" placeholder="请输入邮箱"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="loginUser.password" placeholder="请输入密码" type="password"></el-input>
                </el-form-item>               
                <el-form-item>
                    <el-button type="primary"  class="submit_btn" @click="submitForm()">登 录</el-button>
                </el-form-item>
                <div class="tiparea">
                    <p>还没有账号？现在<router-link to='/register'>注册</router-link></p>
                </div>
            </el-form>
        </section>
    </div>
</template>

<script>
import {adminLogin} from "../http/index"
import md5 from "js-md5";
// import jwtdecode from "jwt-decode"
import jwt_decode from "jwt-decode"
export default {
  name: "login",
  data() {    
    return {
      loginUser: {       
        email: "",
        password: ""        
      },
      rules: {        
        email: [
          {
            type: "email",
            required: true,
            message: "邮箱格式不正确",
            trigger: "blur"
          }
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 6, max: 30, message: "长度在 6 到 30 个字符", trigger: "blur" }
        ]        
      }
    };
  },
  methods: {
    async submitForm() {
        let loginUser1 = {}     
        loginUser1.email = this.loginUser.email
        loginUser1.password =  md5(this.loginUser.password)
        let result = await adminLogin(loginUser1)
        if(result.errCode === 0){
          // 保存登录的时候的token
          console.log("33443344334433443344334433")
          console.log(result)
          // 将登录返回的token 保存在localstrage
          localStorage.setItem("admin_login_token",result.token)  
          // 解析token
          const decoded  = jwt_decode(result.token)   
          console.log("676767676767676767676767676767")
          console.log(decoded)  
          // 解析后的token存储到vuex中
          this.$store.dispatch("setAuthorization",!this.isEmpty(decoded))
          this.$store.dispatch("setUser",decoded)

          this.$message({
            message: "登录成功!",
            type: "success"
          });

          this.$router.push("/index");
        }else{
          console.log("error submit!!");
          return false;
        }
    },
    // 判断是否为空 为空返回真  不为空返回为假
    isEmpty(value){
      return (
        value === undefined || value === null || 
        (typeof value === "object" && Object.keys(value).length === 0) || 
        (typeof value === "string" && value.trim().length === 0)
      )
    }


    
  }


};
</script>

<style scoped>

.login {
  position: relative;
  width: 100%;
  height: 100%;
  background: url(../assets/bg.jpg) no-repeat center center;
  background-size: 100% 100%;
}

.form-container {
  width: 370px;
  height: 210px;
  position: absolute;
  top: 10%;
  left: 34%;
  padding: 25px;
  border-radius: 5px;
  text-align: center;
}

.form-container .manage-tip .title {
  font-family: "Microsoft YaHei";
  font-weight: bold;
  font-size: 26px;
  color: #fff;
}

.loginForm {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px 40px 20px 20px;
  border-radius: 5px;
  box-shadow: 0px 5px 10px #cccc;
}

.submit-btn {
  width: 100%;
}

.tiparea {
  text-align: right;
  font-size: 12px;
  color: #333;
}
.tiparea p a {
  color: #409eff;
}
</style>