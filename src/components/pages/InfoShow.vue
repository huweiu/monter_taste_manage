<template>
    <!-- 个人信息组件 -->
    <div class="infoshow">
        <div class="infoshow_wrapper">
            <div class="infoshow_icon">
                <i class="iconfont icon-wode"></i>
                <span class=infoshow_icon_title>{{user.name}}</span>
            </div>
            <div class="infoshow_user">
                <i class="iconfont icon-shezhi2"></i>
                <span class=infoshow_user_title>{{user.identity === "manager_0" ? "管理员" : "普通员工"}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex"
    export default {
        name:"infoshow",
        data(){
            return {

            }
        },

        computed:{
            user(){
                return this.$store.getters.user
            }
        }
    }
</script>

<style scoped>
.infoshow{
    width: 100%;
    height: 100%;
    position: relative;
    margin-left: 200px;
    /* background-color: skyblue; */
}

.infoshow .infoshow_wrapper{
    width: 200px;
    height: 150px;
    /* background-color: blue; */
    position: absolute;
    top: 50%;
    transform: translate(50%,-50%);    
}

.infoshow .infoshow_wrapper .infoshow_icon,
.infoshow .infoshow_wrapper .infoshow_user{
    font-size: 20px;
    margin-bottom: 20px;
    display: flex;
}

.infoshow .infoshow_wrapper .infoshow_icon .infoshow_icon_title,
.infoshow .infoshow_wrapper .infoshow_user .infoshow_user_title{    
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.infoshow .infoshow_wrapper .infoshow_icon i,
.infoshow .infoshow_wrapper .infoshow_user i{
    font-size: 25px;
}
</style>