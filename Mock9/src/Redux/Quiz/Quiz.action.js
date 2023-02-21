import {GET_Quiz_LOADING,GET_Quiz_ERROR,GET_Quiz_SUCESS}from"./Quiz.type"
import axios from "axios"
import { baseurl } from "../../assets/url"
// export const Saveinfo=(formdata)=>async(dispatch)=>{

// dispatch({
//     type:GET_Quiz_LOADING
// })
// try{
// let adddata=await axios.post(`${baseurl}/QuizUser`,formdata)
//     dispatch({
//         type:GET_Quiz_SUCESS,
//         payload:{msg:"Data Added Sucess",res:adddata.data}
//     })
// }catch(err){
//     dispatch({
//         type:GET_Quiz_ERROR
//     })

// }

// }
export const getquestion=(Difficulty,Category,countqs)=>async(dispatch)=>{

dispatch({
    type:GET_Quiz_LOADING
})
try{
let getqioz=await axios.get(`https://opentdb.com/api.php?amount=${countqs}&category=${Category}&difficulty=${Difficulty}&type=multiple`)
console.log(getqioz.data.results)   
dispatch({
        type:GET_Quiz_SUCESS,
        payload:getqioz.data.results
    })
}catch(err){
    dispatch({
        type:GET_Quiz_ERROR
    })

}

}