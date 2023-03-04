import {GETDATA_DONE, GETDATA_ERR, GETDATA_LOAD} from "./Get.type";

let initialstate = {
  load: false,
  err: false,
  data: []
};

export let categorysReducer = (state = initialstate, {type, payload}) => {
  switch (type) {
    case GETDATA_LOAD: {
      return {
        ...state,
        load: true,
      };
    }
    case GETDATA_DONE: {
      return {
        ...state,
        load: false,
        data: payload,
      };
    }
    case GETDATA_ERR: {
      return {
        ...state,
        load: false,
        err: true,
      };
    }
    default: return state;
  }
};

