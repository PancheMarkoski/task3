import { combineReducers } from 'redux'

import todosReducer from './todos/todos.reducer'
import filterReducer from './filter/filter.reducer';
import userReducer from './user/user.reducer';
import termReducer from './term/term.reducer';

export default combineReducers({
    todos: todosReducer,
    filter: filterReducer,
    user: userReducer,
    term: termReducer
});