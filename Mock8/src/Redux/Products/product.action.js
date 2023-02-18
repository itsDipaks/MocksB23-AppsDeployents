import { GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCESS } from "./product.type"
import axios from "axios"
 export let getAllproducts=(filtervalue)=>async(dispatch)=>{

dispatch({
    type:GET_PRODUCTS_LOADING
})
  try{

    let productsRes=await axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?filter=${filtervalue}`)
    dispatch({
        type:GET_PRODUCTS_SUCESS,
        payload:productsRes.data
    })
  } catch(err){
    dispatch({
        type:GET_PRODUCTS_ERROR
    })
  } 

}
 export let getsortedproducts=(sortvalue)=>async(dispatch)=>{

    console.log(sortvalue)
dispatch({
    type:GET_PRODUCTS_LOADING
})
  try{

    let productsRes=await axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?sort=price&order=${sortvalue}`)
    dispatch({
        type:GET_PRODUCTS_SUCESS,
        payload:productsRes.data
    })
  } catch(err){
    dispatch({
        type:GET_PRODUCTS_ERROR
    })
  } 

}



 export let getproductbyid=(id)=>async(dispatch)=>{

    console.log(id)
dispatch({
    type:GET_PRODUCTS_LOADING
})
  try{

    let productsRes=await axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/1`)
    dispatch({
        type:GET_PRODUCTS_SUCESS,
        payload:productsRes
    })
  } catch(err){
    dispatch({
        type:GET_PRODUCTS_ERROR
    })
  } 

}