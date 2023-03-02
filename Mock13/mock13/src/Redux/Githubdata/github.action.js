import {
  GET_GITHUB_DONE,
  GET_GITHUB_ERR,
  GET_GITHUB_LOADING,
} from "./github.types";
import axios from "axios";
export let allgithubdata = (value,filtervalue) => async (dispatch) => {
  dispatch({type: GET_GITHUB_LOADING});
  try {
    let resdata = await axios.get(
      `https://api.github.com/search/repositories?q=${value?value:"all"}+language:${filtervalue?filtervalue:"all"}&sort=stars&order=desc&page=1&per_page=10`
    );
    console.log(resdata)
    dispatch({
      type: GET_GITHUB_DONE,
      payload: resdata.data,
    });
  } catch (err) {
    dispatch({type: GET_GITHUB_ERR});
  }
};
