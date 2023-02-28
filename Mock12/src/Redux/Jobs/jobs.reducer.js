import {GET_JOB_FAILURE,GET_JOB_LOADING,GET_JOB_SUCESS} from "./jobs.type"
let intitalstate={
    loading:false,
    error:false,
    data:[]
}
export let JobdataReducer=(state=intitalstate,{type,payload})=>{
    switch(type){
        case GET_JOB_LOADING:{
            return{
                ...state,
                loading:true,
                error:false
            }
        }
        case GET_JOB_SUCESS:{
            return{
                ...state,
                loading:false,
                error:false,
                data:payload
            }
        }
        case GET_JOB_FAILURE:{
            return{
                ...state,
                loading:false,
                error:true
            }
        }
        default :return state
    }
}