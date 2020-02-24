<template>
    <div class="title_nav">
        <span class="title">{{title}}</span>
    </div>
</template>

<script>    
    export default {
        name:"title_nav",
        props:["title"],
        data(){
            return {

            }
        }
    }
</script>

<style scoped>
    .title_nav{
        position: absolute;
        width: 83%;
        height: 30px;
        margin-top: 10px;
        background-color: #f5f5f5;
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .title_nav .title{
        padding-left: 10px;
        color: #777;
    }
</style>