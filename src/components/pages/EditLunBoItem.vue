<template>
    <div class="edit_lunbo_item">        
        <div class="editlbitem_content">
            <div class="panel_heading">编辑首页轮播图项目</div>
            <div class="form_content">
                <!-- prevent 阻止表单的默认提交行为 -->
                <form @submit.prevent="editLBItem" enctype="multipart/form-data">                    
                    <ul>
                        <li> 
                            项目名称: <input type="text" name="title" v-model="title"> 
                        </li>
                        <li>
                            项目图片: <input type="file" @change="getFile($event)" id="f1" multiple name="picture"> 
                            <br><img v-show="isShowpic" style="width:50px;height:50px" :src="this.pic" alt="">
                        </li>
                        <li>
                            项目描述: <textarea name="description" v-model="description" id="" cols="60" rows="8"></textarea>
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
    import {getLUNBOItemInfo,adminEditItem,adminDELItem} from "../../http/index"   
    import {mapState, mapActions} from "vuex"
    export default {
        name:"edit_lunbo_item",
        data(){
            return {
                title:"",
                description:"",
                pic:"",
                isShowpic:false

                // dataBase:{}
            }
        },

        created(){
            this.getlbItemInfo()
        },
        
        methods:{
            ...mapState(["adminItem"]), 

            getFile(event) {
                this.pic = ""
                this.pic = event.target.files[0];
                if(this.pic){
                    this.isShowpic = false
                }                
                console.log("@@@@@@@ = ",this.pic);
            },

            async editLBItem(){
                const {title,description} = this
                let _id = localStorage.getItem("add_lb_item")
                let data = new FormData()
                data.append("title",title)
                data.append("desc",description)
                data.append("pic",this.pic)
                data.append("_id",_id)
                let result = await adminEditItem(data)
                if(result.errCode === 0){
                    // 数据返回成功
                    // 页面跳转
                    this.$router.push("/index/lunbo")
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

            async getlbItemInfo(){
                // add_lb_items
                // 获取轮播图的编辑信息,去数据中查询
                let id = localStorage.getItem("add_lb_item")
                // console.log("&&&&&&&********** = ",id)
                let result = await getLUNBOItemInfo(id)
                if(result.errCode === 0){
                    this.title = result.data.title
                    this.description = result.data.desc
                    this.pic = result.data.pic
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
</style>