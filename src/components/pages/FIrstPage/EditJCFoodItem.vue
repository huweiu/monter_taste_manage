<template>
    <div class="edit_lunbo_item">        
        <div class="editlbitem_content">
            <div class="panel_heading">编辑首页家常菜项目</div>
            <div class="form_content">
                <!-- prevent 阻止表单的默认提交行为 -->
                <form @submit.prevent="editJCFoodItem" enctype="multipart/form-data">                    
                    <ul>
                        <li> 
                            美食名称: <input type="text" name="title" v-model="foodName"> 
                        </li>
                        <li>
                            美食图片: <input type="file" @change="getFile($event)" id="f1" multiple name="picture"> 
                            <br><img v-show="isShowpic" style="width:50px;height:50px" :src="this.pic" alt="">
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
    import {getJCFoodInfo,editJCFood} from "../../../http/index"
    export default {
        name:"edit_lunbo_item",
        data(){
            return {
                foodName:"",
                description:"",
                pic:"",
                isShowpic:false,
                price:"", // 食物价格
                discount:"", // 折扣价格
                fee:"", // 配送费
                rate:"" , // 好评得分
                order:"", // 月售订单数量
                foodinfo:"" // 食物组成信息
            }
        },

        created(){
            this.getJCFoodItemInfo()
        },
        
        methods:{

            getFile(event) {
                this.pic = ""
                this.pic = event.target.files[0];
                if(this.pic){
                    this.isShowpic = false
                }                
                console.log("@@@@@@@ = ",this.pic);
            },

            async editJCFoodItem(){
                const {foodName,description,price,discount,fee,rate,order,foodinfo} = this
                let _id = localStorage.getItem("add_jcfood_item")
                let data = new FormData()
                data.append("foodName",foodName)
                data.append("desc",description)
                data.append("pic",this.pic)
                data.append("_id",_id)
                data.append("price",price)
                data.append("discount",discount)
                data.append("fee",fee)
                data.append("rate",rate)
                data.append("order",order)
                data.append("foodinfo",foodinfo)
                let result = await editJCFood(data)
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
            },

            async getJCFoodItemInfo(){
                // add_lb_items
                // 获取轮播图的编辑信息,去数据中查询
                let id = localStorage.getItem("add_jcfood_item")
                // console.log("&&&&&&&********** = ",id)
                let result = await getJCFoodInfo(id)
                if(result.errCode === 0){
                    this.foodName = result.data.foodName
                    this.description = result.data.desc
                    this.pic = result.data.pic
                    this.price = result.data.price
                    this.discount = result.data.discount
                    this.fee = result.data.fee
                    this.rate = result.data.rate
                    this.order = result.data.order
                    this.foodinfo = result.data.foodinfo
                    if(this.pic){
                        this.isShowpic = true
                    }
                    console.log(this.pic)
                }else{
                    // 数据返回失败
                    console.log("数据返回失败")
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
.edit_lunbo_item{
    width: 100%;
    height: 100%;
}

.edit_lunbo_item .editlbitem_content{
    width: 98%;
    height: 100%;
    margin: 10px auto;
}

.edit_lunbo_item .editlbitem_content .panel_heading{
    color: #333;
    background-color: #f5f5f5;
    border-color: #ddd;
    padding: 10px 15px;
    border-bottom: 1px solid transparent;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
}

.edit_lunbo_item .editlbitem_content .form_content{
    /* background-color: skyblue; */
    padding: 30px;
    font-size: 14px;
    color: #333;
}

/* .add_lunbo_item .addlbitem_content .form_content form{
    
} */

.edit_lunbo_item .editlbitem_content .form_content form ul{
    /* 开启 BFC */
    overflow: hidden; 
}

.edit_lunbo_item .editlbitem_content .form_content form ul li {
    margin: 5px 0px;
}

.edit_lunbo_item .editlbitem_content .form_content form ul li:first-child input {
    border: 1px solid #ccc;
    height: 20px;
}

.edit_lunbo_item .editlbitem_content .form_content form ul li .price {
    border: 1px solid #ccc;
    height: 20px;
}
</style>