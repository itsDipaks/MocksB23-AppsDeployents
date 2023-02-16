import {AUTH_GET_ERROR,AUTH_GET_LOADING,AUTH_GET_SUCSSES} from "./Auth.type"
import axios from "axios"
import { baseurl } from "../../assets/ServerUrl"

export let loginaction=(cred)=>async(dispatch)=>{

let getuserdata=await axios.get(`${baseurl}/stockappUsers`).then((res)=>{return res})
console.log(getuserdata)

try{
    if(cred.email=="admin@stockbroker.com" && cred.password=="admin123"){
        dispatch({
            type:AUTH_GET_SUCSSES,
            payload:"Admin"
        })
    
    }else{
    
        getuserdata && await getuserdata.data.map((el)=>{
            console.log(el)
            console.log(cred,"cred")
          if(cred.email===el.email && cred.password===el.password){
            
                 dispatch({
                     type:AUTH_GET_SUCSSES,
                     payload:"user"
                 })
         
             }else{
         dispatch({
             type:AUTH_GET_ERROR,
             payload:"not user "
         })
             }
         }
         
         )
    }
}catch(err){
    dispatch({
        type:AUTH_GET_ERROR,
        payload:"faild"
    })
}

}

export let registerUser=(cred)=>async(dispatch)=>{

    dispatch({
        type:AUTH_GET_LOADING
    })
    try{
        let response=await axios.post(`${baseurl}/stockappUsers`,cred)
if(response){
    dispatch({
        type:AUTH_GET_SUCSSES
    })
}
    }catch(err){
        dispatch({
            type:AUTH_GET_ERROR
        })
    }


}