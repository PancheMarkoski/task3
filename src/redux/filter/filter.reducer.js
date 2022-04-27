import filterTypes from "./fitler.types";

const INITIAL_STATE = {
    option: ""
}

const filterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case filterTypes.SET_FILTER:
            return {
                ...state,
                option: action.payload
            }
        default:
            return state;
    }
}

export default filterReducer;