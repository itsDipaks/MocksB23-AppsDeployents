import {legacy_createStore,applyMiddleware,combineReducers,compose} from "redux"

import thunk from "redux-thunk"
import { ProductReducer } from "./Products/product.reducer"
let Rootreducers=combineReducers({
Products:ProductReducer
})
let composer=compose
export let store=legacy_createStore(Rootreducers,composer(applyMiddleware(thunk)))