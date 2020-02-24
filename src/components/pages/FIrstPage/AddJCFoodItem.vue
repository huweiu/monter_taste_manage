<template>
    <div class="add_lunbo_item">        
        <div class="addlbitem_content">
            <div class="panel_heading">增加首页家常菜推荐项目</div>
            <div class="form_content">
                <!-- prevent 阻止表单的默认提交行为 -->
                <form @submit.prevent="addJCFoodItem" enctype="multipart/form-data">                    
                    <ul>
                        <li> 
                            美食名称: <input type="text" name="title" v-model="foodName"> 
                        </li>
                        <li>
                            美食图片: <input type="file" @change="getFile($event)" id="f1" multiple name="picture"> 
                        </li>
                        <li> 
                            美食价格: <input type="text" class="price" name="price" v-model="price"> 
                            折扣价格: <input type="text" class="price" name="discount" v-model="discount"> 
                            配送费: <input type="text" class="price" name="order" v-model="fee"> 
                        </li>                        
                        <li> 
                            好 评 率: <input type="text" class="price" name="rate" v-model="rate"> 
                            月售订单: <input type="text" class="price" name="order" v-model="order"> 
                        </li>    

                        <li> 
                            美食信息: <input type="text" class="price" name="foodinfo" v-model="foodinfo">                             
                        </li>           
                        
                        <li>
                            美食描述: <textarea name="description" v-model="description" id="" cols="60" rows="8"></textarea>
                        </li>                       
                        <li>
                            <br><button type="submit">提 交</button>
                        </li>
                    </ul>                   
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import { Toast,Dialog } from "vant"
    import {adminAddJCFoodItem} from "../../../http/index"    
    export default {
        name:"add_lunbo_item",
        data(){
            return {
                foodName:"",
                description:"",
                pic:"",
                price:"", // 食物价格
                discount:"", // 折扣价格
                fee:"", // 配送费
                rate:"" , // 好评得分
                order:"", // 月售订单数量
                foodinfo:"" // 食物组成信息


            }
        },
        
        methods:{
            getFile(event) {
                this.pic = event.target.files[0];
                console.log(this.pic);
            },

            async addJCFoodItem(){
                const {foodName,description,price,discount,fee,rate,order,foodinfo} = this
                let data = new FormData()
                data.append("foodName",foodName)
                data.append("desc",description)
                data.append("pic",this.pic)
                
                data.append("price",price)
                data.append("discount",discount)
                data.append("fee",fee)
                data.append("rate",rate)
                data.append("order",order)
                data.append("foodinfo",foodinfo)

                let result = await adminAddJCFoodItem(data)
                if(result.errCode === 0){
                    // 数据返回成功
                    // 页面跳转
                    this.$router.push("/info/jcfood")
                }else{
                    // 返回失败结果
                    // Toast.fail(result.msg);
                    Dialog.alert({
                        message: result.msg
                    }).then(() => {
                        return 
                    });
                }                
            }
        },

        components: {
            [Dialog.Component.name]: Dialog.Component
        }
    }
</script>

<style scoped>
.add_lunbo_item{
    width: 100%;
    height: 100%;
}

.add_lunbo_item .addlbitem_content{
    width: 98%;
    height: 100%;
    margin: 10px auto;
}

.add_lunbo_item .addlbitem_content .panel_heading{
    color: #333;
    background-color: #f5f5f5;
    border-color: #ddd;
    padding: 10px 15px;
    border-bottom: 1px solid transparent;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
}

.add_lunbo_item .addlbitem_content .form_content{
    /* background-color: skyblue; */
    padding: 30px;
    font-size: 14px;
    color: #333;
}

.add_lunbo_item .addlbitem_content .form_content form ul{
    /* 开启 BFC */
    overflow: hidden; 
}

.add_lunbo_item .addlbitem_content .form_content form ul li {
    margin: 5px 0px;
}

.add_lunbo_item .addlbitem_content .form_content form ul li:first-child input {
    border: 1px solid #ccc;
    height: 20px;
}

.add_lunbo_item .addlbitem_content .form_content form ul li .price{
    border: 1px solid #ccc;
    height: 20px;
}
</style>