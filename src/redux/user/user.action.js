import userTypes from "./user.types"
import todosApi from "../../apis/todos"


export const getUser = (id) => async (dispatch) => {
    const response = await todosApi.get(`/users/${id}`)

    console.log("response from redux action", response.data)
    dispatch({ type: userTypes.SET_USER, payload: response.data })
}




