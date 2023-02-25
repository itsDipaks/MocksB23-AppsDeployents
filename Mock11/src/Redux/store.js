import {legacy_createStore,applyMiddleware,combineReducers,compose } from "redux"
import thunk from "redux-thunk"
import { GetDataReducer } from "./Getdata/Get.reducer"

let rootreducer=combineReducers({
Getdata:GetDataReducer
})
let creatcomposer=compose
export let store=legacy_createStore(rootreducer,creatcomposer(applyMiddleware(thunk)))