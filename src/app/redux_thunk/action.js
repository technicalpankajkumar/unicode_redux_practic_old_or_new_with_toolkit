import axios from "axios";
import { USER_FAILED, USER_REQUEST, USER_SUCCESS } from "./constants";

export const GetUsers =()=>{

return async (dispatch) => {
    try {
        dispatch({ type: USER_REQUEST })
        const response = await axios.get('https://dummyjson.com/users')
        dispatch({ type: USER_SUCCESS, payload: response.data.users })
    }
     catch (error) {
        dispatch({
            type: USER_FAILED,
            payload: error.data
                &&
                error.response.data.message ? error.response.data.message : error.message
        })
    }
}
}