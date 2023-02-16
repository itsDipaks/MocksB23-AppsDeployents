import {legacy_createStore,combineReducers,applyMiddleware, compose} from "redux"
import thunk from "redux-thunk"
import { AuthReducer } from "./Auth/Auth.reducer"
import { DashboardReducer } from "./Dashboard/Dash.reducer"
let RootReducers=combineReducers({
Auth:AuthReducer,
Dash:DashboardReducer
})

let createComposer=compose
export const store=legacy_createStore(RootReducers,createComposer(applyMiddleware(thunk)))