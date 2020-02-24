<template>
    <div class="edit_classifylist_item">        
        <div class="editlbitem_content">
            <div class="panel_heading">编辑商品分类列表项目</div>
            <div class="form_content">
                <!-- prevent 阻止表单的默认提交行为 -->
                <form @submit.prevent="editClassfyListItem" enctype="multipart/form-data">                    
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
    import {getClassifyListcInfo,editClassfyList} from "../../../http/index"
    export default {
        name:"edit_classifylist_item",
        data(){
            return {
                classifyNo:"",
                classifyName:"",
                classifyDesc:"",
                isShowpic:false
            }
        },

        created(){
            this.getClassifyListItemInfo()
        },
        
        methods:{          

            async editClassfyListItem(){
                const {classifyNo,classifyName,classifyDesc} = this 
                let _id = localStorage.getItem("add_classifylist_item")               
                let dataObj = {}
                dataObj.classifyNo = classifyNo
                dataObj.classifyName = classifyName
                dataObj.classifyDesc = classifyDesc
                dataObj._id = _id               
                
                let result = await editClassfyList(dataObj)
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
            },

            async getClassifyListItemInfo(){
                // add_lb_items
                // 获取轮播图的编辑信息,去数据中查询
                let id = localStorage.getItem("add_classifylist_item")              
                let result = await getClassifyListcInfo(id)
                if(result.errCode === 0){
                    this.classifyNo = result.data.classifyNo
                    this.classifyName = result.data.classifyName
                    this.classifyDesc = result.data.classifyDesc                    
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
.edit_classifylist_item{
    width: 100%;
    height: 100%;
}

.edit_classifylist_item .editlbitem_content{
    width: 98%;
    height: 100%;
    margin: 10px auto;
}

.edit_classifylist_item .editlbitem_content .panel_heading{
    color: #333;
    background-color: #f5f5f5;
    border-color: #ddd;
    padding: 10px 15px;
    border-bottom: 1px solid transparent;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
}

.edit_classifylist_item .editlbitem_content .form_content{
    padding: 30px;
    font-size: 14px;
    color: #333;
}

.edit_classifylist_item .editlbitem_content .form_content form ul{
    /* 开启 BFC */
    overflow: hidden; 
}

.edit_classifylist_item .editlbitem_content .form_content form ul li {
    margin: 5px 0px;
}

.edit_classifylist_item .editlbitem_content .form_content form ul li input {
    border: 1px solid #ccc;
    height: 20px;
}
</style>