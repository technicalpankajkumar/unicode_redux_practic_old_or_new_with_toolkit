import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import { userReducer } from "./reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from '@redux-devtools/extension'

const middleware = [thunk]

const rootReducer = combineReducers({
    users: userReducer
})

export const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(...middleware)
    )
)