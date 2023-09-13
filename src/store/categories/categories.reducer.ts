import CATEGORIES_ACTION_TYPES, {TCategory} from "./categories.types";
import { TCategoriesActions } from "./categories.actions";

export type TCategoriesState = {
    readonly categories: TCategory[], 
    readonly isLoading: boolean, 
    readonly error: Error | null}
const INITIAL_CATEGORIES_STATE: TCategoriesState = {
    categories: [],
    isLoading: false,
    error: null
}

const categoriesReducer = (state= INITIAL_CATEGORIES_STATE, action={} as TCategoriesActions)=>{
    switch (action.type) {
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_INIT:
            return {...state, isLoading: true, error: null};
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
            return {...state, categories: action.payload, isLoading: false, error: null}
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
            return {...state, error: action.payload, isLoading: false}
        default:
            return state;
    }
}

export default categoriesReducer;