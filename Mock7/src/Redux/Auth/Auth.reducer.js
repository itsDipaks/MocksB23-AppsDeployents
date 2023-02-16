import {AUTH_GET_ERROR, AUTH_GET_LOADING, AUTH_GET_SUCSSES} from "./Auth.type";

let initialstate = {
  loading: false,
  error: false,
 access:""
};
export let AuthReducer = (state = initialstate, {type, payload}) => {
  switch (type) {
    case AUTH_GET_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
        access:payload,
      };
    }
    case AUTH_GET_SUCSSES: {
        localStorage.setItem("Access" ,JSON.stringify(payload))
      return {
        ...state,
        loading: false,
        error: false,
        access:payload,

        
      };
    }
    case AUTH_GET_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
        access:payload,
      };
    }

    default :return state
  }
};
