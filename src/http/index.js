/**
 * 包含项目使用到的所有请求服务器的的方法
 * 返回值是Promise的实例 
*/

import ajax from "./ajax"  // 引入封装好的ajax方法
const BASE_URL = "http://localhost:6000/api/users"

// 后台管理系统用户注册接口
export const adminRegister = async (registerUser1)=>{
    // console.log("222222222222222")
    // console.log(BASE_URL)
    return await ajax(BASE_URL + "/admin_register",{registerUser1},"POST")    
}

// 后台管理系统用户登录接口
export const adminLogin = async (loginUser1)=>{    
    return await ajax(BASE_URL + "/admin_login",{loginUser1},"POST")    
}

// 后台管理系统
export const adminAddItem = async (data)=>{    
    return await ajax(BASE_URL + "/admin_additem",data,"POST")    
}

// 编辑后台管理系统
export const adminEditItem = async (data)=>{    
    return await ajax(BASE_URL + "/admin_editItem",data,"POST")    
}

// 删除后台管理系统单条数据
export const adminDELItem = async (id)=>{    
    // console.log("******** = ",BASE_URL + `/admin_delItem/${id}`)
    return await ajax(BASE_URL + `/admin_delItem/${id}`,{id},"DELETE")    
}

// 获取后台管理系统数据
export const getItemDataBase = async ()=>{    
    return await ajax(BASE_URL + "/getitemdata")    
}

export const getLUNBOItemInfo = async (id) =>{
    return await ajax(BASE_URL + "/get_lunbo_item",{id})
}

// --------------------------------------------------主页食物推荐相关接口-----------------------------------------------

export const adminAddFoodRecItem = async (data)=>{    
    return await ajax(BASE_URL + "/admin_addFooedRecItem",data,"POST")    
}

// 获取美食后台管理系统数据
export const getFoodRecDataBase = async ()=>{    
    return await ajax(BASE_URL + "/getFoodRecdata")    
}

// 获取后台管理系统数据
export const getFoodRecInfo = async (id) =>{
    return await ajax(BASE_URL + "/getFoodRecInfo",{id})
}

// 编辑首页美食管理系统
export const editFoodRec = async (data)=>{    
    return await ajax(BASE_URL + "/admin_editFoodRec",data,"POST")    
}

// 删除后台管理系统单条数据
export const adminDelFoodRec = async (id)=>{
    return await ajax(BASE_URL + `/admin_delFoodRec/${id}`,{id},"DELETE")    
}


// -----------------------------------------------------主页食物推荐相关接口-----------------------------


// -----------------------------------------------------主页精品美食推荐相关接口---------------------------------
export const adminAddJPFoodRecItem = async (data)=>{    
    return await ajax(BASE_URL + "/admin_addJPFooedRecItem",data,"POST")    
}

// 获取美食后台管理系统数据
export const getJPFoodRecDataBase = async ()=>{    
    return await ajax(BASE_URL + "/getJPFoodRecdata")    
}

// 获取后台管理系统数据
export const getJPFoodRecInfo = async (id) =>{
    return await ajax(BASE_URL + "/getJPFoodRecInfo",{id})
}

// 编辑首页美食管理系统
export const editJPFoodRec = async (data)=>{    
    return await ajax(BASE_URL + "/admin_editJPFoodRec",data,"POST")    
}

// 删除后台管理系统单条数据
export const adminDelJPFoodRec = async (id)=>{
    return await ajax(BASE_URL + `/admin_delJPFoodRec/${id}`,{id},"DELETE")    
}
// -----------------------------------------------------主页精品美食推荐相关接口---------------------------------

// -----------------------------------------------------主页家常菜相关接口---------------------------------
// 往数据库中增加美食信息(增加单条数据信息)
export const adminAddJCFoodItem = async (data)=>{    
    return await ajax(BASE_URL + "/admin_addJCFoodItem",data,"POST")    
}

// 获取美食后台管理系统数据(所有的数据信息)
export const getJCFoodDataBase = async ()=>{    
    return await ajax(BASE_URL + "/getJCFooddata")    
}

// 获取后台管理系统数据（单条数据信息）
export const getJCFoodInfo = async (id) =>{
    return await ajax(BASE_URL + "/getJCFoodInfo",{id})
}

// 编辑首页美食管理系统 (编辑修改单条信息)
export const editJCFood = async (data)=>{    
    return await ajax(BASE_URL + "/admin_editJCFood",data,"POST")    
}

// 删除后台管理系统单条数据 (删除单条数据信息)
export const adminDelJCFood = async (id)=>{
    return await ajax(BASE_URL + `/admin_delJCFood/${id}`,{id},"DELETE")    
}
// -----------------------------------------------------主页   家常菜  相关接口---------------------------------



// -----------------------------------------------------主页  食品分类列表  相关接口---------------------------------
// 往数据库中增加食品分类列表(增加单条数据信息)
export const adminAddClassifyListItem = async (dataObj)=>{  
    console.log("YYYYYYYYYYYYYY = ",dataObj)  
    return await ajax(BASE_URL + "/admin_addClassifyList",dataObj,"POST")    
}

// 获取 食品 分类列表 后台管理系统数据(所有的数据信息)
export const getClassifyListDataBase = async ()=>{    
    return await ajax(BASE_URL + "/getClassifyListData")    
}

// 编辑 食品分类列表 后台管理系统数据 (编辑修改单条信息)
export const editClassfyList = async (data)=>{    
    return await ajax(BASE_URL + "/admin_editClassfyList",data,"POST")    
}

// 获取 食品分类列表 后台管理系统数据（单条数据信息）
export const getClassifyListcInfo = async (id) =>{
    return await ajax(BASE_URL + "/getClassifyListInfo",{id})
}

// 删除后台 食品分类列表 管理系统单条数据 (删除单条数据信息)
export const adminDelClassifyList = async (id)=>{
    return await ajax(BASE_URL + `/admin_DelClassifyList/${id}`,{id},"DELETE")    
}

// -----------------------------------------------------主页  食品分类列表  相关接口-------------------------


// --------------------------------主页  食品分类  相关接口-------------------------
// 往数据库中增加食品分类(增加单条数据信息)
export const adminAddClassifyItem = async (data)=>{  
    console.log("YYYYYYYYYYYYYY = ",data)  
    return await ajax(BASE_URL + "/admin_addClassify",data,"POST")    
}

// 获取 食品 分类列表 后台管理系统数据(所有的数据信息)
export const getClassifyDataBase = async ()=>{    
    return await ajax(BASE_URL + "/getClassifyDataBase")    
}

// 编辑 食品分类 后台管理系统数据 (编辑修改单条信息)
export const editClassify = async (data)=>{    
    return await ajax(BASE_URL + "/admin_editClassify",data,"POST")    
}

// 获取 食品分类 后台管理系统数据（单条数据信息）
export const getClassifyInfo = async (id) =>{
    return await ajax(BASE_URL + "/getClassifyInfo",{id})
}

// 删除后台 食品分类 管理系统单条数据 (删除单条数据信息)
export const adminDelClassify = async (id)=>{
    return await ajax(BASE_URL + `/admin_DelClassify/${id}`,{id},"DELETE")    
}
// --------------------------------主页  食品分类  相关接口-------------------------