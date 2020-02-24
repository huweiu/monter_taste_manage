<template>
    <div class="father">
        <Title/>
    </div>
</template>

<script>
    import Title from "./Title"
    export default {
        name:"father",
        data(){
            return {

            }
        },

        components:{
            Title
        }



    }
</script>

<style scoped>
    .father{
        width: calc(100% - 200px);
        /* height: calc(100% - 60px); */
        height: 100%;
        background-color: #fff;
        margin-left: 200px;
    }
</style>