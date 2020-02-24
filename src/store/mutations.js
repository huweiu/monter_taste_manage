import Vue from "vue"

import {
    SET_AUTHERZATION,
    SET_USER,
    CLEAR_CURRENT_STATE,
    EDIT_ITEM
} from "./mutation-type" 

export default{
    [SET_AUTHERZATION](state,{isAuthrization}){
        if(isAuthrization){
            state.isAuthrization = isAuthrization
        }else{
            state.isAuthrization = false
        }       
    },

    [SET_USER](state,{user}){
        if(user){
            state.user = user
        }else{
            state.user = {}
        }
    },

    [EDIT_ITEM](state,itemObj){
        if(itemObj){
            console.log("2222222222222222222")
            console.log(itemObj.row)
            state.adminItem = itemObj.row
            console.log("333333 mutation = ",state.adminItem)
        }
    }

    
    
}