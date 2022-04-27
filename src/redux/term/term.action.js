import termTypes from "./term.types";

export const getTerm = (term) => {

    return {
        type: termTypes.SET_TERM,
        payload: term
    }
}