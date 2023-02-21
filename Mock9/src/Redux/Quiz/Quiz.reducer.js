import {GET_Quiz_LOADING,GET_Quiz_ERROR,GET_Quiz_SUCESS}from"./Quiz.type"
let initalstate={
    loading:false,
    error:false,
    data:[]
}
export let QuizReducer=(state=initalstate,{type,payload})=>{
switch(type){

    case GET_Quiz_LOADING:{
        return{
            ...state,loading:true
        }
    }
    case GET_Quiz_SUCESS:{
        return{
            ...state,loading:false,
            data:payload
        }
    }
    case GET_Quiz_ERROR:{
        return{
            ...state,loading:false,
            error:true
        }
    }
    default :return state
}
}