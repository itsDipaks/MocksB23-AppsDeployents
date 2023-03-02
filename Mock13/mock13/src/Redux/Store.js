import {legacy_createStore,compose,applyMiddleware,combineReducers} from "redux"
import thunk from "redux-thunk"
import { githubreducer } from "./Githubdata/github.reducer"
let rootreducer=combineReducers({
github:githubreducer
})
let composer=compose

let enhancer=composer(applyMiddleware(thunk))
export let store=legacy_createStore(rootreducer,enhancer)