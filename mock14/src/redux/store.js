
import {legacy_createStore,compose,applyMiddleware,combineReducers} from "redux"
import thunk from "redux-thunk"
import { categorysReducer } from "./Getproducts/Get.reducer"
let rootreducer=combineReducers({
category:categorysReducer
})
let composer=compose

let enhancer=composer(applyMiddleware(thunk))
export let store=legacy_createStore(rootreducer,enhancer)