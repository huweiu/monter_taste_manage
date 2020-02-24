import axios from "axios"
import { Loading, Message } from 'element-ui';
import router from "../router"
// import { Message } from 'element-ui';

let loading
function startLoading() {
    loading = Loading.service({
        lock:true,
        text:"拼命加载中...",
        background:"rgba(0,0,0,0.7)"
    });
}

function endLoading() {
    loading.close() // 结束加载动画
}

// 请求拦截
// 请求的时候加载动画
axios.interceptors.request.use(config=>{
    // 请求服务器的时候拦截一下，加载请求是的动画
    startLoading()
    // 如果本地的localStorage中存在token的话
    if(localStorage.admin_login_token){
        // 任何登录之后访问的页面都可以获取并且使用这个token
        config.headers.Authorization = localStorage.admin_login_token
    }
    return config
},error=>{
    return  Promise.reject(error)
})

// 响应拦截
// 请求结束的时候结束动画
axios.interceptors.response.use(response=>{
    // 服务器响应请求的时候拦截响应一下，做结束加载动画动作
    console.log("11111111111111111111111111")
    endLoading() // 结束加载动画
    console.log(response)
    return response
},error=>{
    // 错误提醒
    endLoading() // 结束加载动画
    Message.error(error.response.data);
    // 获取错误状态码,
    let {status} = error.response
    if(status === 401){
        Message.error("token失效请重新登录");
        localStorage.removeItem("admin_login_token")
        // 跳转到登录页面
        router.push("/login")
    }
    return Promise.reject(error)
})

export default axios 