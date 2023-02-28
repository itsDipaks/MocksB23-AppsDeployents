import {GET_JOB_FAILURE, GET_JOB_LOADING, GET_JOB_SUCESS} from "./jobs.type";
import axios from "axios";
import {baseurl} from "../../assets/url";
export let addjobsdata = (formdata) => async (dispatch) => {
  dispatch({type: GET_JOB_LOADING});

  try {
    let datares = await axios.post(`${baseurl}`, formdata);
    dispatch({type: GET_JOB_SUCESS, payload: datares.data});
  } catch (err) {
    dispatch({type: GET_JOB_FAILURE});
  }
};

export let getpostedjobs = (value) => async (dispatch) => {
  dispatch({type: GET_JOB_LOADING});

  try {
    if (value) {
      let datares = await axios.get(`${baseurl}?Role=${value}`);
      dispatch({type: GET_JOB_SUCESS, payload: datares.data});
    } else {
      let datares = await axios.get(`${baseurl}`);
      dispatch({type: GET_JOB_SUCESS, payload: datares.data});
    }
  } catch (err) {
    dispatch({type: GET_JOB_FAILURE});
  }
};


export let getserchdata = (value) => async (dispatch) => {
  dispatch({type: GET_JOB_LOADING});

  try {
    if (value) {
      let datares = await axios.get(`${baseurl}?q=${value}`);
      dispatch({type: GET_JOB_SUCESS, payload: datares.data});
    }
  } catch (err) {
    dispatch({type: GET_JOB_FAILURE});
  }
};
