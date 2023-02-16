import {DASH_GET_ERROR, DASH_GET_LOADING, DASH_GET_SUCSSES} from "./Dash.type";

let initialstate = {
  loading: false,
  error: false,
data:[
  {
    "company_name": "Relance",
    "company_type": "IT",
    "stock_exchange": "NSE",
    "total_shares": "12000",
    "cost_per_share": "1200",
    "price_action": "154",
    "buyCountstock": "15",
    "id": 1
  }
]
};
export let DashboardReducer = (state = initialstate, {type, payload}) => {
  switch (type) {
    case DASH_GET_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case DASH_GET_SUCSSES: {
      return {
        ...state,
        loading: false,
        error: false,
        data:payload,
      };
    }
    case DASH_GET_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    default :return state
  }
};
