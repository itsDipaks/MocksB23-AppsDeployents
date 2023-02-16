import {DASH_GET_ERROR,DASH_GET_LOADING,DASH_GET_SUCSSES} from "./Dash.type"
import axios from "axios"
import { baseurl } from "../../assets/ServerUrl"


export let ListStocks=(cred)=>async(dispatch)=>{

    dispatch({
        type:DASH_GET_LOADING
    })
    try{
        let response=await axios.post(`${baseurl}/companies`,cred)
if(response){
    dispatch({
        type:DASH_GET_SUCSSES
    })
}
    }catch(err){
        dispatch({
            type:DASH_GET_ERROR
        })
    }
}


export let BuyStocks=(data)=>async(dispatch)=>{

    dispatch({
        type:DASH_GET_LOADING
    })
    try{
        let response=await axios.post(`${baseurl}/PerchesedStock`,data)
if(response){
    dispatch({
        type:DASH_GET_SUCSSES
    })
}
    }catch(err){
        dispatch({
            type:DASH_GET_ERROR
        })
    }
}



export let GetListedCompanies=(page)=>async(dispatch)=>{

    dispatch({
        type:DASH_GET_LOADING
    })
    try{
        if(page){
            let response=await axios.get(`${baseurl}/companies?_page=${page}&_limit=4`)
            if(response){
                dispatch({
                    type:DASH_GET_SUCSSES,
                    payload:response.data
                })
            }
        }else{
            let response=await axios.get(`${baseurl}/companies`)
            if(response){
                dispatch({
                    type:DASH_GET_SUCSSES,
                    payload:response.data
                })
            }
        }
       

    }catch(err){
        dispatch({
            type:DASH_GET_ERROR
        })
    }
}
export let getBuyProducts=()=>async(dispatch)=>{

    dispatch({
        type:DASH_GET_LOADING
    })
    try{
       
            let response=await axios.get(`${baseurl}/PerchesedStock`)
            if(response){
                dispatch({
                    type:DASH_GET_SUCSSES,
                    payload:response.data
                })
            }
        
       

    }catch(err){
        dispatch({
            type:DASH_GET_ERROR
        })
    }
}