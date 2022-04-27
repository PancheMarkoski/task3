import filterTypes from "./fitler.types"


export const setFiletr = (option) => {

    return {
        type: filterTypes.SET_FILTER,
        payload: option
    }
}



