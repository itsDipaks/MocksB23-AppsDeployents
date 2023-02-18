import {
    GET_CART_LOADING,
    GET_CART_SUCESS,
    GET_CART_ERROR,
  } from "./cart.action";
  
  let initialstate = {
    loading: false,
    error: false,
    data: [],
  };
  
  export let ProductReducer = (state = initialstate, {type, payload}) => {
    switch (type) {
      case GET_CART_LOADING: {
        return {
          ...state,
          loading: true,
          error: false,
        };
      }
      case GET_CART_SUCESS: {
        return {
          ...state,
          loading: false,
          data: payload,
        };
      }
      case GET_CART_ERROR: {
        return {
          ...state,
          error: true,
          loading: false,
        };
      }
      default:
        return state;
    }
  };
  