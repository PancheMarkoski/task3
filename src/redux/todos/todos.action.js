import todosTypes from './todos.types'
import todosApi from '../../apis/todos'


export const getTodos = () => async (dispatch) => {
    const response = await todosApi.get("/todos")

    dispatch({ type: todosTypes.SET_TODOS, payload: response })
}

export const deleteTodo = (itemId) => ({

    type: todosTypes.DELETE_TODOS,
    payload: itemId
})


export const updateTodo = (id, update) => ({

    type: todosTypes.UPDATE_TODO,
    payload: {
        id,
        update
    }
})