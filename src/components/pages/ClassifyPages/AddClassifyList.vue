<template>
    <div class="add_classifyList_item">        
        <div class="addlbitem_content">
            <div class="panel_heading">增加商品分类列表管理</div>
            <div class="form_content">
                <!-- prevent 阻止表单的默认提交行为 -->
                <form @submit.prevent="addClassifyListItem" enctype="multipart/form-data">                    
                    <ul>
                        <li> 
                            商品分类编号: <input type="text" name="classifyno" v-model="classifyNo"> 
                        </li>
                        <li>
                            商品分类名称: <input type="text" name="classifyname" v-model="classifyName"> 
                        </li>
                        <li>
                            商品分类描述: <textarea name="description" v-model="classifyDesc" id="" cols="60" rows="8"></textarea>
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
    import {adminAddClassifyListItem} from "../../../http/index"    
    export default {
        name:"add_classifyList_item",
        data(){
            return {
                classifyNo:"",
                classifyName:"",
                classifyDesc:""
            }
        },
        
        methods:{

            async addClassifyListItem(){
                const {classifyNo,classifyName,classifyDesc} = this                
                let dataObj = {}
                dataObj.classifyNo = classifyNo
                dataObj.classifyName = classifyName
                dataObj.classifyDesc = classifyDesc

                let result = await adminAddClassifyListItem(dataObj)
                if(result.errCode === 0){
                    // 数据返回成功
                    // 页面跳转
                    this.$router.push("/index/ClassifyList")
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
.add_classifyList_item{
    width: 100%;
    height: 100%;
}

.add_classifyList_item .addlbitem_content{
    width: 98%;
    height: 100%;
    margin: 10px auto;
}

.add_classifyList_item .addlbitem_content .panel_heading{
    color: #333;
    background-color: #f5f5f5;
    border-color: #ddd;
    padding: 10px 15px;
    border-bottom: 1px solid transparent;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
}

.add_classifyList_item .addlbitem_content .form_content{
    padding: 30px;
    font-size: 14px;
    color: #333;
}

.add_classifyList_item .addlbitem_content .form_content form ul{
    /* 开启 BFC */
    overflow: hidden; 
}

.add_classifyList_item .addlbitem_content .form_content form ul li {
    margin: 5px 0px;
}

.add_classifyList_item .addlbitem_content .form_content form ul li input {
    border: 1px solid #ccc;
    height: 20px;
}
</style>