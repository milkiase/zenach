import {takeLatest, put, call, all} from 'redux-saga/effects';
import { getCurrentUser, createUserDocumentFromAuth, signInWithGooglePopup,
    signInUserWithEmailAndPassword, createAuthUserWithEmailAndPassword, signOutUser
} from '../../utils/firebase/firebase.utils';
import { signInSuccessAction, signInFailedAction, signUpWithEmailSuccessAction,
    signUpWithEmailFailedAction, signOutSuccessAction, signOutFailedAction } from './user.actions';
import USER_ACTION_TYPES from './user.types';


function* getSnapshotFromUserAuth(userAuth, additionalDetails={}){
    try {
        const userSnapshot = yield call(createUserDocumentFromAuth, userAuth, additionalDetails)
        yield put(signInSuccessAction({...userSnapshot.data(), id: userSnapshot.id}))
    } catch (error) {
        yield put(signInFailedAction(error))
    }
}

function* isUserAuthenticated(){
    try {
        const userAuth = yield call(getCurrentUser)
        if(!userAuth){
            console.log(userAuth)
            yield put(signInSuccessAction(userAuth));
        }else{
            yield call(getSnapshotFromUserAuth, userAuth)
        }

    } catch (error) {
        yield put(signInFailedAction(error))
    }
}

function* onUserSessionCheck(){
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated)
} 

function* signInWithGoogleAsync(){
    try {
        const {user} = yield call(signInWithGooglePopup)
        yield call(getSnapshotFromUserAuth, user)
    } catch (error) {
        put(signInFailedAction(error))
    }
}

function* onGoogleSignInInit (){
    yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGNIN_INIT, signInWithGoogleAsync)
}

function* signInWithEmailAsync({payload: {email, password}}){
    try{
        const {user} = yield call(signInUserWithEmailAndPassword, email, password)
        alert('Successfully signed in.')
        yield call(getSnapshotFromUserAuth, user)
    }catch(error){
        yield put(signInFailedAction(error))
    }
}

function* onEmailSingInInit(){
    yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGNIN_INIT, signInWithEmailAsync)
}

function* signUpWithEmailAsync({payload: {email, password, displayName}}){
    try {
        const {user} = yield call(createAuthUserWithEmailAndPassword, email, password)
        alert('user has been created successfully!')
        console.log(user)
        console.log(displayName)
        yield put(signUpWithEmailSuccessAction(user, {displayName}))
    } catch (error) {
        yield put(signUpWithEmailFailedAction(error))
    }
}

function* onEmailSignUpInit(){
    yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGNUP_INIT, signUpWithEmailAsync)
}

function* signInAfterSignUpWithEmailAsync({payload: {user, additionalDetails}}){
    yield call(getSnapshotFromUserAuth, user, additionalDetails)
}

function* onEmailSignUpSuccess(){
    yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGNUP_SUCCESS, signInAfterSignUpWithEmailAsync)
}

function* signOutAsync(){
    try {
        yield call(signOutUser)
        yield put(signOutSuccessAction())
    } catch (error) {
        yield put(signOutFailedAction(error))
    }
}

function* onSignOutInit(){
    yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_INIT, signOutAsync)
}
export function* userSaga(){
    yield all([call(onUserSessionCheck), call(onGoogleSignInInit),
        call(onEmailSingInInit), call(onEmailSignUpInit), 
        call(onEmailSignUpSuccess), call(onSignOutInit)])
}