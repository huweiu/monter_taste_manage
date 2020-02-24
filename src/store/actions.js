import Vue from "vue"

import {
    SET_AUTHERZATION,
    SET_USER,
    EDIT_ITEM
} from "./mutation-type" 

export default{
    setAuthorization({commit,state},isAuthorization){
        commit(SET_AUTHERZATION,{isAuthorization})
    },

    setUser({commit,state},user){
        commit(SET_USER,{user})
    },

    clearCurrentState({commit,state}){
        commit(SET_AUTHERZATION,false)
        commit(SET_USER,{})
    },

    editItem({commit,state},itemObj){
        commit(EDIT_ITEM,itemObj)
    }



}