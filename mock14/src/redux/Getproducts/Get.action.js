import {GETDATA_DONE, GETDATA_ERR, GETDATA_LOAD} from "./Get.type";
import axios from "axios"
export let getCategorydata = () => async (dispatch) => {
  dispatch({type: GETDATA_LOAD});
  try {
    let category = await axios.get("https://dummyjson.com/products/categories");
console.log(category)
    dispatch({
      type: GETDATA_DONE,
      payload: category.data,
    });
  } catch (err) {
    dispatch({type: GETDATA_ERR});
  }
};


export let Getproducts=(category)=>async(dispatch)=>{
    dispatch({type: GETDATA_LOAD});
    try {
      let products = await axios.get(`https://dummyjson.com/products/category/${category}`);
  console.log(products)
      dispatch({
        type: GETDATA_DONE,
        payload: products.data.products,
      });
    } catch (err) {
      dispatch({type: GETDATA_ERR});
    }
}

export let GetserchedProducts=(searchValue)=>async(dispatch)=>{
    console.log(searchValue)
    dispatch({type: GETDATA_LOAD});
    try {
      let products = await axios.get(`https://dummyjson.com/products/search?q=${searchValue}`);
  console.log(products)
      dispatch({
        type: GETDATA_DONE,
        payload: products.data.products,
      });
    } catch (err) {
      dispatch({type: GETDATA_ERR});
    }
}