import {createSlice} from '@reduxjs/toolkit';

const INITIAL_CATEGORIES_STATE = {
    categories: []
}

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: INITIAL_CATEGORIES_STATE,
    reducers: {
        setCategories(state, action){
            state.categories = action.payload
        }
    }
})

export const setCategoriesAction = categoriesSlice.actions.setCategories
export const categoriesReducer = categoriesSlice.reducer