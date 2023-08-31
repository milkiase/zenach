import { createSelector } from "reselect"

const selectCategoriesReducer = (state) => state.categories

const selectCategories = createSelector(
    [selectCategoriesReducer],
    (categoriesReducerState) => categoriesReducerState.categories
)

export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories)=>(categories.reduce((accumulator, category) => {
        console.log('selector fired')
        const {items, title} = category
        return {...accumulator, [title.toLowerCase()]: items}
    }, {}))
)
