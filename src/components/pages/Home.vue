<template>
    <div class="home">
        <div class="container">
            <h1 class="title">妈妈的味道</h1>
            <p class="lead"> 专注于线上快餐, 致力于给每一位客户最优质的服务和用餐体验! </p>
        </div>
    </div>
</template>

<script>
    export default {
        name:"home",
        data(){
            return {

            }
        }
    }
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
  background: url(../../assets/swiper_01.jpg) no-repeat;
  background-size: 100% 100%;
  overflow:hidden;  
}

.container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-top: 100px;
  background-color: rgba(0, 0, 0, 0.7);
  text-align: center;
  color: white;
}

.title {
  font-size: 30px;
}

.lead {
  margin-top: 50px;
  font-size: 22px;
}
</style>