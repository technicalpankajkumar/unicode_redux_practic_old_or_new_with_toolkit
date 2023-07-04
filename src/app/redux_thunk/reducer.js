import { USER_FAILED, USER_REQUEST, USER_SUCCESS } from "./constants"

const initialState = {
    loading: false,
    users: [],
    error: null
}

export const userReducer = (state = initialState, action)=>{

    switch (action.type) {
        case USER_REQUEST:
            return { ...state, loading: true }
        case USER_SUCCESS:
            return { ...state, users: action.payload, loading: false }
        case USER_FAILED:
            return { ...state, error: action.payload, loading: false }
        default:
            return state;
    }
}