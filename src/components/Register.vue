<template>
    <div class="register">
        <section class="form-container">
            <div class="manage-tip">
                <span class="title">妈妈的味道后台管理系统</span>
            </div>
            <el-form :model="registerUser" :rules="rules" class="registerForm" ref="registerForm" label-width="80px">
                <el-form-item label="用户名" prop="name">
                    <el-input v-model="registerUser.name" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                    <el-input v-model="registerUser.email" placeholder="请输入邮箱"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="registerUser.password" placeholder="请输入密码" type="password"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="password2">
                    <el-input v-model="registerUser.password2" placeholder="请确认密码" type="password"></el-input>
                </el-form-item>
                <el-form-item label="选择身份">
                    <el-select v-model="registerUser.identity" placeholder="请选择身份">
                        <el-option label="管理员" value="manager_0"></el-option>
                        <el-option label="员工" value="employee_1"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <!-- <el-button type="primary"  class="submit_btn" @click="submitForm('registerForm')">注 册</el-button> -->
                    <el-button type="primary"  class="submit_btn" @click="submitForm()">注 册</el-button>
                </el-form-item>
            </el-form>
        </section>
    </div>
</template>

<script>
import {adminRegister} from "../http/index"
import md5 from "js-md5";
export default {
  name: "register",
  data() {
    var validatePass2 = (rule, value, callback) => {
      if (value !== this.registerUser.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {            
      registerUser:{
        name: "",
        email: "",
        password: "",
        password2: "",
        identity: "",
      },
      rules: {
        name: [
          { required: true, message: "用户名不能为空", trigger: "change" },
          { min: 2, max: 30, message: "长度在 2 到 30 个字符", trigger: "blur" }
        ],
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
        ],
        password2: [
          { required: true, message: "确认密码不能为空", trigger: "blur" },
          {
            min: 6,
            max: 30,
            message: "长度在 6 到 30 个字符",
            trigger: "blur"
          },
          { validator: validatePass2, trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    async submitForm() {      
      let registerUser1 = {}      
      // registerUser.name = this.name
      registerUser1.password =  md5(this.registerUser.password)
      registerUser1.name =  this.registerUser.name
      registerUser1.email =  this.registerUser.email
      registerUser1.identity =  this.registerUser.identity
      console.log("22222333344444444  === " + this.registerUser.identity)
      let result = await adminRegister(registerUser1)
      
      console.log(result)
      if(result.errCode === 0){
          // 注册成功
          this.$message({
            message: "注册成功!",
            type: "success"
          });
          this.$router.push("/login");
      }else{
        console.log("error submit!!");
        return false;
      }
         

        
      
    }
  }
};
</script>

<style scoped>

.register {
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

.registerForm {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px 40px 20px 20px;
  border-radius: 5px;
  box-shadow: 0px 5px 10px #cccc;
}

.submit-btn {
  width: 100%;
}    
</style>