import {legacy_createStore,applyMiddleware,combineReducers,compose} from "redux"
import thunk from "redux-thunk"
import { QuizReducer } from "./Quiz/Quiz.reducer"
let Rootreducers=combineReducers({
quiz:QuizReducer
})
let createcomposer=compose
export let store=legacy_createStore(Rootreducers,createcomposer(applyMiddleware(thunk)))