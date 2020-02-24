<template>
    <div class="index">
        <HeaderNav/>
        <LeftMenu/>
        <!-- <Father/> -->
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import HeaderNav from "./pages/HeaderNav"
    import Home from "./pages/Home"
    import LeftMenu from "./pages/LeftMenu"
    import Father from "./pages/Father"
    export default {
        name:"index",
        data(){
            return {
                
            }
        },

        components:{
            HeaderNav,
            Home,
            LeftMenu,
            Father
        }
    }
</script>

<style scoped>
.index{
    width: 100%;
    height: 100%;
    background-color: #fff;
}

.container{
    margin-left: 210px;
}
</style>