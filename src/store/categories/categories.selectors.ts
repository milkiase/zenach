import { TRootState } from '../store';
import { createSelector } from "reselect";
import { TCategoriesState } from "./categories.reducer";
import { TCategoryMap } from "./categories.types";

// I will chanage the type any once rootstate is typed
const selectCategoriesReducer = (state: TRootState):TCategoriesState => state.categories

const selectCategories = createSelector(
    [selectCategoriesReducer],
    (categoriesReducerState) => categoriesReducerState.categories
)

export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories): TCategoryMap=>(categories.reduce((accumulator, category) => {
        const {items, title} = category
        return {...accumulator, [title.toLowerCase()]: items}
    }, {} as TCategoryMap))
)

export const selectCategoriesIsLoading = createSelector(
    [selectCategoriesReducer],
    (categoriesReducerState) => categoriesReducerState.isLoading
)