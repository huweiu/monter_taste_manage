<template>
    <div class="add_lunbo_item">        
        <div class="addlbitem_content">
            <div class="panel_heading">增加首页食物推荐项目</div>
            <div class="form_content">
                <!-- prevent 阻止表单的默认提交行为 -->
                <form @submit.prevent="addFoodRecItem" enctype="multipart/form-data">                    
                    <ul>
                        <li> 
                            美食名称: <input type="text" name="title" v-model="foodName"> 
                        </li>
                        <li>
                            美食图片: <input type="file" @change="getFile($event)" id="f1" multiple name="picture"> 
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
    import {adminAddFoodRecItem} from "../../../http/index"    
    export default {
        name:"add_lunbo_item",
        data(){
            return {
                foodName:"",
                description:"",
                pic:""
            }
        },
        
        methods:{
            getFile(event) {
                this.pic = event.target.files[0];
                console.log(this.pic);
            },

            async addFoodRecItem(){
                const {foodName,description} = this
                let data = new FormData()
                data.append("foodName",foodName)
                data.append("desc",description)
                data.append("pic",this.pic)  

                let result = await adminAddFoodRecItem(data)
                if(result.errCode === 0){
                    // 数据返回成功
                    // 页面跳转
                    this.$router.push("/info/foodrecommend")
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

/* .add_lunbo_item .addlbitem_content .form_content form{
    
} */

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
</style>