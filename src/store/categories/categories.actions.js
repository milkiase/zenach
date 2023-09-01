import CATEGORIES_ACTION_TYPES from "./categories.types";
import { createAction } from "../../utils/reducer/reducer.utils";
import { getCategoriesDocuments } from "../../utils/firebase/firebase.utils";
export const setCategoriesAction = (categories)=>(createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categories))

const fetchCategoriesInitAction = ()=> createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_INIT)

const fetchCategoriesSuccessAction = (categories) => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categories)

const fetchCategoriesFailedAction = (error) => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error)

export const fetchCategoriesAsync = async (dispatch)=>{
    try{
        dispatch(fetchCategoriesInitAction())
        const categoriesArray = await getCategoriesDocuments()
        dispatch(fetchCategoriesSuccessAction(categoriesArray))
    }catch(error){
        dispatch(fetchCategoriesFailedAction(error))
    }
}