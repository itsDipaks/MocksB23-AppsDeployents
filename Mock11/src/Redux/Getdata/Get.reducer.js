import {GetData_Error, GetData_Loading, GetData_Sucess} from "./Get.type";

let initialstate = {
  loading: false,
  error: false,
  data: [],
};
export let GetDataReducer = (state = initialstate, {type, payload}) => {
  switch (type) {
    case GetData_Loading: {
      return {
        ...state,
        loading: true,
      };
    }
    case GetData_Sucess: {
      return {
        ...state,
        loading: false,
        data: payload,
      };
    }
    case GetData_Loading: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    default:
      return state;
  }
};
