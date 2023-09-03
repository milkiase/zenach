import CATEGORIES_ACTION_TYPES from "./categories.types";

const INITIAL_CATEGORIES_STATE = {
    categories: [],
    isLoading: false,
    error: null
}

const categoriesReducer = (state= INITIAL_CATEGORIES_STATE, action)=>{
    const {type, payload} = action
    switch (type) {
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_INIT:
            return {...state, isLoading: true, error: null};
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
            return {...state, categories: payload, isLoading: false, error: null}
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
            return {...state, error: payload, isLoading: false}
        default:
            return state;
    }
}

export default categoriesReducer;