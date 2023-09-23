import {takeLatest, put, all, call} from 'typed-redux-saga/macro';
import { getCategoriesDocuments } from '../../utils/firebase/firebase.utils';
import { fetchCategoriesFailedAction, fetchCategoriesSuccessAction } from './categories.actions';
import CATEGORIES_ACTION_TYPES from './categories.types';


export function* fetchCategoriesAsync(){
    try {
        const categoriesArray = yield* call(getCategoriesDocuments)
        yield* put(fetchCategoriesSuccessAction(categoriesArray))
    } catch (error) {
        yield* put(fetchCategoriesFailedAction(error as Error))
    }
}

export function* onFetchCategories(){
    yield* takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_INIT, fetchCategoriesAsync)
}
export function* categoriesSaga(){
    yield* all([call(onFetchCategories)])
}