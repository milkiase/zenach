import CATEGORIES_ACTION_TYPES, {TCategory} from "./categories.types";
import { createAction, TActionTypeOnly, TActionWithPayload, withMatcher} from "../../utils/reducer/reducer.utils";

export type TFetchCategoriesInitAction = TActionTypeOnly<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_INIT>
export type TFetchCategoriesSuccessAction = TActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, TCategory[]>
export type TFetchCategoriesFailedAction = TActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, Error>

export const fetchCategoriesInitAction = withMatcher((): TFetchCategoriesInitAction => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_INIT))

export const fetchCategoriesSuccessAction = withMatcher((categories: Array<TCategory>): TFetchCategoriesSuccessAction => (
        createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categories)
    ))

export const fetchCategoriesFailedAction = withMatcher((error:Error): TFetchCategoriesFailedAction => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error));