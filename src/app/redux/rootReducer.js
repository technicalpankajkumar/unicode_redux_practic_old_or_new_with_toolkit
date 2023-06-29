import { combineReducers } from "redux";
import { postsReducer } from "./reducer";


export const rootReducer = combineReducers({
    posts:postsReducer
})