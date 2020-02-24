<template>
    <!-- 左侧导航 -->
    <div class="left_menu">
        <div class="left_menu_wrapper">
            <div class="content">
                <el-row class="tac">
                    <el-col :span="24">                    
                        <el-menu default-active="2" @open="handleOpen" @close="handleClose">

                            <el-menu-item index="1" @click="goto1('/index/home')">
                                <i class="el-icon-menu"></i>
                                <span slot="title">后台管理系统首页</span>
                            </el-menu-item>

                            <el-submenu index="2">
                                <template slot="title">
                                    <i class="el-icon-location"></i>
                                    <span>商城商品管理</span>
                                </template>

                                <el-submenu index="1-1">
                                    <template slot="title">商城首页商品管理</template>
                                    <el-menu-item index="1-1-1">
                                        <router-link to="/index/lunbo">首页轮播图管理</router-link>
                                    </el-menu-item>
                                    <el-menu-item index="1-1-2">
                                        <router-link to="/info/foodrecommend">首页食物推荐管理</router-link>
                                    </el-menu-item>
                                    <el-menu-item index="1-1-3">
                                        <router-link to="/info/jpFoodRec">首页精品美食管理</router-link>
                                    </el-menu-item>
                                    <el-menu-item index="1-1-4">
                                        <router-link to="/info/jcfood">首页家常菜分类管理</router-link>
                                    </el-menu-item>
                                </el-submenu>

                                <el-submenu index="1-2">
                                    <template slot="title">分类管理</template>
                                    <el-menu-item index="1-2-1">
                                        <router-link to="/index/ClassifyList">商品分类列表</router-link>
                                    </el-menu-item>
                                    <el-menu-item index="1-3-2">
                                        <router-link to="/index/classify">增加商品分类</router-link>
                                    </el-menu-item>                                   
                                </el-submenu>

                                <el-submenu index="1-3">
                                    <template slot="title">商城购物车管理</template>
                                    <el-menu-item index="1-3-1">
                                        <router-link to="/LunBo">商城购物车管理1</router-link>
                                    </el-menu-item>
                                    <el-menu-item index="1-3-2">
                                        <router-link to="/LunBo">商城购物车管理2</router-link>
                                    </el-menu-item>
                                    <el-menu-item index="1-3-3">
                                        <router-link to="/LunBo">商城购物车管理3</router-link>
                                    </el-menu-item>
                                </el-submenu>

                                <el-submenu index="1-4">
                                    <template slot="title">商城订单管理</template>
                                    <el-menu-item index="1-3-1">
                                        <router-link to="/LunBo">商城订单管理1</router-link>
                                    </el-menu-item>
                                    <el-menu-item index="1-3-2">
                                        <router-link to="/LunBo">商城订单管理2</router-link>
                                    </el-menu-item>
                                    <el-menu-item index="1-3-3">
                                        <router-link to="/LunBo">商城订单管理3</router-link>
                                    </el-menu-item>
                                </el-submenu>

                            </el-submenu>

                            <el-menu-item index="3">
                                <i class="el-icon-setting"></i>
                                <span slot="title">退出管理系统</span>
                            </el-menu-item>
                        </el-menu>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
    import BScroll from '@better-scroll/core'
    import PullUp from '@better-scroll/pull-up'
    export default {
        name:"left_menu",
        data(){
            return {

            }
        },        

        methods: {           

            goto1(path){
                this.$router.push(path)
            },

            handleOpen(key, keyPath) {
                console.log("111111111 == ",key)
                console.log("22222222 == ",keyPath)

                let str = ""
                let str1 = ""
                let str2 = " / "
                let str3 = ""

                if(key === 2){ // key = 2 下拉框被选中
                    let str1 = "商城商品管理" 
                }

                switch(keyPath[1]){
                    case "1-1":
                        str2 = "商城首页商品管理"
                        break
                    case "1-2":
                        str2 = "分类管理"
                        break
                    case "1-3":
                        str2 = "商城购物车管理"
                        break
                    case "1-4":
                        str2 = "商城订单管理"
                        break
                }

                // 如何取到最里层的

                str = str1 +  str2 + str3

                console.log(str)

            },

            handleClose(key, keyPath) {
                console.log("3333333333333 == ",key)
                console.log("444444444444 == ",keyPath)
            }
        }
    }
</script>

<style scoped>
.left_menu{
    width: 200px;
    height: 100%;
    background-color: #324057;
    /* background-color: #fff; */
    position: fixed;
    box-sizing: border-box;
    z-index: 1;
}

.left_menu .left_menu_wrapper{
    width: 185px;
    height: 500px;
    margin: 20px auto;
    box-sizing: border-box;
    font-size: 14px;
    border: 1px solid #428bca;
    border-radius: 4px;
}

.left_menu .left_menu_wrapper .first_page{
    display: flex;
    justify-content: center;
    width: 100%;
    /* height: 40px;     */
    /* line-height: 40px;  */
    /* box-shadow: 0 0 0 1px #428bca;  */
    margin-bottom: 30px;
}

.left_menu .left_menu_wrapper .first_page .sy{
    text-align: center;
    display: block;
    width: 100%;
    height: 100%;
    color: #fff;
}

.left_menu .left_menu_wrapper .merch_title{    
    color: #fff;    
}

.left_menu .left_menu_wrapper .merch_title:hover{
    cursor: pointer;
}
</style>