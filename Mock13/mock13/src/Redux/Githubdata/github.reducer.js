import {GET_GITHUB_DONE,GET_GITHUB_ERR,GET_GITHUB_LOADING}from "./github.types"
let initialstate={loading:false,error:false,data:[]}
export let githubreducer=(state=initialstate,{type,payload})=>{
switch(type){
    case GET_GITHUB_LOADING:{
        return {
            ...state,
            loading:true
        }
    }
    case GET_GITHUB_DONE:{
        return {
            ...state,
            loading:false,
            data:payload
        }
    }
    case GET_GITHUB_ERR:{
        return {
            ...state,
            loading:false,
            error:true
        }
    }
    default:return state
}
}