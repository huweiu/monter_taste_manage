<template>
    <div class="header_nav">
        <header class="header_wrapper">
            <div class="header_wrapper_left">
                <img src="../../../static/images/profile_header/profile_header.png" alt="">
                <span class="title">妈妈的味道后台管理系统</span>                
            </div>
            <div class="header_wrapper_right">
                <div class="userinfo">
                    <div class="welcome">
                        <p class="comename">欢迎</p>
                        <p class="name">{{user.name}}</p>
                    </div>
                    <div class="username">
                        <!-- 下拉箭头 -->
                        <el-dropdown trigger="click" @command="setDialogInfo">
                            <span class="el-dropdown-link">
                                <!-- el-icon-caret-bottom 箭头的样式 -->
                                <i class="el-icon-caret-bottom el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item command="info">个人信息</el-dropdown-item>
                                <el-dropdown-item command="logout">退出</el-dropdown-item>                                
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
    export default {
        name:"header_nav",
        data(){
            return {

            }
        },

        computed:{
            user(){
                return this.$store.getters.user
            }
        },

        methods: {
            setDialogInfo(command) {
                // this.$message('click on item ' + command);
                console.log(command)
                switch(command){
                    case "info":
                        this.showInfoList()
                        break
                    case "logout":
                        this.logout()
                        break
                }
            },

            showInfoList(){
                console.log("个人信息")
                this.$router.push("/index/infoshow")
            },

            logout(){
                console.log("退出")
                // 清除token
                localStorage.removeItem("admin_login_token")
                // 设置vuex store
                this.$store.dispatch("clearCurrentState")
                this.$router.push("/login")
            }    
        }
    }
</script>

<style scoped>
    .header_nav {
        width: 100%;
        height: 60px;
        min-width: 600px;
        padding: 5px;
        background: #324057;
        color: #fff;
        border-bottom: 1px solid #1f2d3d;
    }

    .header_nav .header_wrapper{
        width: 95%;
        height: 100%;
        margin: 0 auto;
    }

    .header_nav .header_wrapper .header_wrapper_left{
        float: left;
        box-sizing: border-box;
    }

    .header_nav .header_wrapper .header_wrapper_left img{
        float: left;
        width: 60px;
        height: 60px;
        /* border: 4px solid white; */
        border-radius: 50%;
    }

    .header_nav .header_wrapper .header_wrapper_left .title{
        float: left;
        margin-top: 20px;
        margin-left: 10px;
    }

    .header_nav .header_wrapper .header_wrapper_right{
        height: 100%;
        float: right;
        box-sizing: border-box;
        /* margin-top: 10px; */
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .header_nav .header_wrapper .header_wrapper_right .welcome{
        font-size: 12px;
        float: left;
    }

    .header_nav .header_wrapper .header_wrapper_right .username{
        float: left;
    }

    .el-dropdown-link {
        cursor: pointer;
        color: #fff;
    }
    .el-icon-caret-bottom {
        font-size: 12px;
    }


</style>