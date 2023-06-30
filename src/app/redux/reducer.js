import { CREATE_POST, DELETE_POST, EDIT_POST } from "../constants"

const initialState = []

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_POST: {
            return [...state, action.payload]
        }
        case DELETE_POST:{
            return state.filter(obj => obj.id != action.payload)
        }
        default:
            return state; 
    }
}