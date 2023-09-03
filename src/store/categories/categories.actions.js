import CATEGORIES_ACTION_TYPES from "./categories.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const fetchCategoriesInitAction = ()=> createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_INIT)

export const fetchCategoriesSuccessAction = (categories) => (
        createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categories)
    )

export const fetchCategoriesFailedAction = (error) => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error)
