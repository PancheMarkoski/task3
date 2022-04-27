import termTypes from "./term.types";

const INITIAL_STATE = {
    term: ""
}

const termReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case termTypes.SET_TERM:
            return {
                ...state,
                term: action.payload
            }
        default:
            return state;
    }
}

export default termReducer;