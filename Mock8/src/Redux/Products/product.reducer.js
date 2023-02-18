import {
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCESS,
  GET_PRODUCTS_ERROR,
} from "./product.type";

let initialstate = {
  loading: false,
  error: false,
  data: [],
};

export let ProductReducer = (state = initialstate, {type, payload}) => {
  switch (type) {
    case GET_PRODUCTS_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case GET_PRODUCTS_SUCESS: {
      return {
        ...state,
        loading: false,
        data: payload,
      };
    }
    case GET_PRODUCTS_ERROR: {
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
