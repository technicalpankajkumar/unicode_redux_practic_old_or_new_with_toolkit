import { CREATE_POST } from "../constants"

const initialState = []

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_POST: {
            return [...state, action.payload]
        }
        default:
            return state;
    }
}