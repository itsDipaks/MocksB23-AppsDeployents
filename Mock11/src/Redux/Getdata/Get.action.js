import {GetData_Error, GetData_Loading, GetData_Sucess} from "./Get.type";
import axios from "axios";
export let getcountrys = (val) =>async (dispatch) => {
  dispatch({
    type: GetData_Loading,
  });
  try {
    let data =await axios.get("https://restcountries.com/v2/all").then(res=>res)
    console.log(data.data);
    dispatch({
      type: GetData_Sucess,
      payload: data.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: GetData_Error,
    });
  }
};
export let getcontrybyfilter = (val) =>async (dispatch) => {
  dispatch({
    type: GetData_Loading,
  });
  try {
    let data =await axios.get(`https://restcountries.com/v3.1/region/${val}`).then(res=>res)
    console.log(data);
    dispatch({
      type: GetData_Sucess,
      payload: data.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: GetData_Error,
    });
  }
};


