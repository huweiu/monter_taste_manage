<template>
    <div class="addClassifyList">
        <!-- 首页轮播图管理页面 -->
        <Title :title="title"/>
        <div class="addClassifyList_wrapper">
            <div class="add_btn">
                <el-row class="add_btn_pri">
                    <el-button type="primary" round @click="addItem">添 加</el-button>
                </el-row>
            </div>
            <el-table v-if="tableData.length > 0" :data='tableData' border 
                :default-sort = "{prop: 'no', order: 'descending'}" style="width: 100%">
                <!-- 编号 -->
                <el-table-column prop="no" label="编号" type="index" align="center" width="70"></el-table-column>
                <!-- 添加日期 -->
                <el-table-column prop="type" label="创建时间" align="center" width="230">
                    <template slot-scope="scope">
                        <!-- 日期前面的时钟小图标 -->
                        <i class="el-icon-time"></i>
                        <!-- 日期文本显示 -->
                        <span style="margin-left: 10px">{{ scope.row.date.slice(0,10) }}</span>
                    </template>
                </el-table-column>

                <el-table-column prop="number" label="商品分类编号" align="center" width="180">
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.classifyNo }}</span>
                    </template>
                </el-table-column>

                <el-table-column prop="name" label="商品分类名称" align="center" width="150">
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.classifyName }}</span>
                    </template>
                </el-table-column>

                <el-table-column prop="describer" label="商品分类描述" align="center" width="333">
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.classifyDesc }}</span>
                    </template>
                </el-table-column>

                <el-table-column prop="operation" align='center' label="操作" width="180">
                    <template slot-scope="scope">
                        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>

            </el-table>            
            <el-table v-else>页面还没有数据呦！</el-table>
            <!-- 分页显示 -->
            <el-row> 
                <!-- 一行里面有24个格子 -->
                <el-col :span="24">     
                    <div class="pagination">
                        <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page.sync="paginations.page_index"
                            :page-sizes="paginations.page_sizes"
                            :page-size="paginations.page_size"
                            :layout="paginations.layout"
                            :total="paginations.total">
                        </el-pagination>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import Title from "../Title"
    import { Dialog } from 'vant';
    import { getClassifyListDataBase ,adminDelClassifyList} from "../../../http/index"
    export default {
        name:"addClassifyList",
        data(){
            return {
                title:"商品分类列表管理",
                tableData: [],
                alltableData:[],
                paginations:{
                    page_index:1, // 当前显示的是那一页的数据
                    total:0, // 当前数据的总数
                    page_size:3, // 一页显示几条数据
                    page_sizes:[3,6,9,12,15,18,21,24,27,30], // 每页显示几条数据
                    layout:"total, sizes, prev, pager, next, jumper" // 翻页属性
                }                
            }
        },

        created(){            
            this.getClassifyListData()
        },

        methods:{
            handleEdit(index, row) {
                // index 在页面中的排类顺序
                // row 包含这一行的所有后台数据信息
                console.log(index, row);          
                // 保存请求数据的id到localStorage中，以便在编辑页面的时候能获取到数据展示在页面上
                localStorage.setItem("add_classifylist_item",row._id)
                // 点击编辑按钮之后页面跳转到编辑页面
                this.$router.push("/index/editClassifyList")
            },

            handleDelete(index, row) {
                console.log(index, row);
                // 删除条目记录
                // 根据项目自己的数据信息进行删除项目操作
                let id = row._id // 获取保存的id
                Dialog.confirm({
                    title: '标题',
                    message: '确定要删除吗?'
                }).then(() => {
                    let result = adminDelClassifyList(id)
                    result.then((data)=>{
                        if(data.errCode === 0){
                            this.getClassifyListData() //重新请求数据
                        }
                    })
                    .catch((error)=>{
                        console.log(error)
                        throw error
                    })
                }).catch(() => {
                    return
                });                                
            },            

            addItem(){
                // 点击页面增加按钮，跳转到添加项目页面
                this.$router.push("/index/addClassifyList")
            },

            async getClassifyListData(){
                // 获取数据库数据展示页面                
                let result = await getClassifyListDataBase()              
                if(result.errCode === 0){
                    // 查询返回数据成功
                    this.alltableData = result.dataArr
                    console.log("BBBBBBBBBBBBBB = ")
                    // 设置分页数据
                    this.setPaginations()
                }else{
                    console.log(result.msg)
                }
            },

            // 每页显示几条数据
            handleSizeChange(page_size) {
                // 切换size
                this.paginations.page_index = 1
                this.paginations.page_size = page_size
                this.tableData = this.alltableData.filter((item,index)=>{
                    return index < page_size
                })
            },

            // 当前页
            handleCurrentChange(page) {
                // 获取当前页
                let index = this.paginations.page_size * (page - 1)
                // 数据总数
                let nums = this.paginations.page_size * page;
                // 容器
                let tables = []

                for(let i = index;i < nums;i++){
                    if(this.alltableData[i]){
                        tables.push(this.alltableData[i])
                    }
                    this.tableData = tables
                }
            },

            // 设置分页数据
            setPaginations(){
                // 分页属性设置
                this.paginations.total = this.alltableData.length // 当前数据的总数
                this.paginations.page_index = 1
                this.paginations.page_size = 3
                // 设置默认的分页数据
                this.tableData = this.alltableData.filter((item,index)=>{
                    return index < this.paginations.page_size
                })
            }
        },

        components:{
            Title
        }
    }
</script>

<style scoped>
.addClassifyList{
    width: 100%;
    height: 100%;
}

.addClassifyList .addClassifyList_wrapper{
    width: 99%;
    height: 100%;    
    padding-top: 50px; 
    /* overflow: hidden;    */
}

.addClassifyList .addClassifyList_wrapper .add_btn{
    width: 100%;
    height: 40px;
    margin-bottom: 10px;
    position: relative;
}

.addClassifyList .addClassifyList_wrapper .add_btn .add_btn_pri{
    position: absolute;
    right: 0px;
}

.pagination{
    text-align: right;
    margin-top: 10px;
}
</style>