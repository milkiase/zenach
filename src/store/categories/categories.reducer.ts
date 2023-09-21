import { AnyAction } from "redux";
import {TCategory} from "./categories.types";
import { fetchCategoriesInitAction, fetchCategoriesSuccessAction, fetchCategoriesFailedAction } from "./categories.actions";

export type TCategoriesState = {
    readonly categories: TCategory[], 
    readonly isLoading: boolean, 
    readonly error: Error | null}
const INITIAL_CATEGORIES_STATE: TCategoriesState = {
    categories: [],
    isLoading: false,
    error: null
}

const categoriesReducer = (state= INITIAL_CATEGORIES_STATE, action={} as AnyAction): TCategoriesState=>{

    if(fetchCategoriesInitAction.match(action)) return {...state, isLoading: true, error: null};
    if(fetchCategoriesSuccessAction.match(action)) return {...state, categories: action.payload, isLoading: false, error: null};
    if(fetchCategoriesFailedAction.match(action)) return {...state, error: action.payload, isLoading: false};
    return state;
}

export default categoriesReducer;