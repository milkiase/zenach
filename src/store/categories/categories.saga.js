import {takeLatest, put, all, call} from 'redux-saga/effects';
import { getCategoriesDocuments } from '../../utils/firebase/firebase.utils';
import { fetchCategoriesFailedAction, fetchCategoriesSuccessAction } from './categories.actions';
import CATEGORIES_ACTION_TYPES from './categories.types';


export function* fetchCategoriesAsync(){
    try {
        const categoriesArray = yield call(getCategoriesDocuments)
        yield put(fetchCategoriesSuccessAction(categoriesArray))
    } catch (error) {
        yield put(fetchCategoriesFailedAction(error))
    }
}

export function* onFetchCategories(){
    yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_INIT, fetchCategoriesAsync)
}
export function* categoriesSaga(){
    yield all([call(onFetchCategories)])
}