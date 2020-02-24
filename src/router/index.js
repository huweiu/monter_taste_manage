import Vue from 'vue'
import Router from 'vue-router'
import Index from "../components/Index"
import Register from "../components/Register.vue"
import NotFound from "../components/404"
import Login from "../components/Login"
import Home from "../components/pages/Home"
import InfoShow from "../components/pages/InfoShow"

import LunBo from "../components/pages/LunBo"
import AddLunBoItem from "../components/pages/AddLunBoItem"
import EditLunBoItem from "../components/pages/EditLunBoItem"

import FoodRecommend from "../components/pages/FIrstPage/FoodRecommend"
import AddFoodRec from "../components/pages/FIrstPage/AddFoodRec"
import EditFoodRecItem from "../components/pages/FIrstPage/EditFoodRecItem"

import JPFoodRecommend from "../components/pages/FIrstPage/JPFoodRecommend"
import AddJPFoodRecommend from "../components/pages/FIrstPage/AddJPFoodRecommend"
import EditJPFoodRecItem from "../components/pages/FIrstPage/EditJPFoodRecItem"

import JCFood from "../components/pages/FIrstPage/JCFood"
import AddJCFoodItem from "../components/pages/FIrstPage/AddJCFoodItem"
import EditJCFoodItem from "../components/pages/FIrstPage/EditJCFoodItem"

import ClassifyList from "../components/pages/ClassifyPages/ClassifyList"
import AddClassifyList from "../components/pages/ClassifyPages/AddClassifyList"
import EditClassifyList from "../components/pages/ClassifyPages/EditClassifyList"

import Classify from "../components/pages/ClassifyPages/Classify"
import AddClassify from "../components/pages/ClassifyPages/AddClassify"
import EditClassify from "../components/pages/ClassifyPages/EditClassify"

Vue.use(Router)

const router = new Router({
  routes: [
    {path: '/',redirect:"/index"},
    {path: '/index',name: 'Index',component: Index,
      children:[
        {path:"", omponent:Home},
        {path:"/index/home",name:"home",omponent:Home},        
        {path:"/index/infoshow",name:"infoshow",component:InfoShow},
        {path:"/index/lunbo",name:"lunbo",component:LunBo},
        {path:"/info/addlunboitem",name:"addlunboitem",component:AddLunBoItem},
        {path:"/info/editlunboitem",name:"editlunboitem",component:EditLunBoItem},
        {path:"/info/foodrecommend",name:"foodrecommend",component:FoodRecommend},
        {path:"/info/addfoodrec",name:"addfoodrec",component:AddFoodRec},
        {path:"/info/editFoodRec",name:"addfoodrec",component:EditFoodRecItem},  

        {path:"/info/jpFoodRec",name:"jpFoodRec",component:JPFoodRecommend},
        {path:"/info/addjpFoodRec",name:"addjpFoodRec",component:AddJPFoodRecommend},
        {path:"/info/editjpFoodRec",name:"editjpFoodRec",component:EditJPFoodRecItem},

        {path:"/info/jcfood",name:"jcfood",component:JCFood},
        {path:"/info/addjcfood",name:"addjcfood",component:AddJCFoodItem},
        {path:"/info/editjcfood",name:"editjcfood",component:EditJCFoodItem},

        {path:"/index/ClassifyList",name:"ClassifyList",component:ClassifyList},
        {path:"/index/addClassifyList",name:"addClassifyList",component:AddClassifyList},
        {path:"/index/editClassifyList",name:"editClassifyList",component:EditClassifyList},

        {path:"/index/classify",name:"classify",component:Classify},
        {path:"/index/addclassify",name:"addclassify",component:AddClassify},
        {path:"/index/editclassify",name:"editclassify",component:EditClassify},


      ]
    },
    {path: '*',name: '/404',component: NotFound},
    {path: '/register',name: 'Register',component: Register},
    {path: '/login',name: 'Login',component: Login}
  ]
})

// 实现路由守卫
router.beforeEach((to,from,next)=>{
  // 判断localStorage中是否拥有token
  const isLogin = localStorage.admin_login_token ? true : false
  if(to.path === "/login" || to.path === "/register"){
    next();
  }else{
    isLogin ? next() : next("/login")
  }
})
 
export default router 
