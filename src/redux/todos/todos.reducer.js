import todosTypes from './todos.types';

const INITIAL_STATE = {
    todos: []
}

const todosReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case todosTypes.SET_TODOS:
            return {
                ...state,
                todos: action.payload.data
            }
        case todosTypes.DELETE_TODOS:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }
        case todosTypes.UPDATE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload.id) {
                        todo.completed = action.payload.update
                    }
                    return todo
                })
            }
        default:
            return state;
    }
}

export default todosReducer;