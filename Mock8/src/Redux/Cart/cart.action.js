import { GET_CART_ERROR, GET_CART_LOADING, GET_CART_SUCESS } from "./cart.type"

let arr=[]

export let storeddata=()=>async(dispatch)=>{

    dispatch({
        type:GET_CART_LOADING
    })
      try{
    
        let productsRes=await axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`)
        dispatch({
            type:GET_CART_SUCESS,
            payload:productsRes.data
        })

        console.log(productsRes.data)
      } catch(err){
        dispatch({
            type:GET_CART_ERROR
        })
      } 
}