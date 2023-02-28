import {
  legacy_createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { JobdataReducer } from "./Jobs/jobs.reducer";
let Rootreducer = combineReducers({

    Jobs:JobdataReducer
});
let composer = compose;

export let store = legacy_createStore(
  Rootreducer,
  composer(applyMiddleware(thunk))
);
