import {takeLatest, put, call, all} from 'typed-redux-saga/macro';
import { User } from 'firebase/auth';
import { getCurrentUser, createUserDocumentFromAuth, signInWithGooglePopup,
    signInUserWithEmailAndPassword, createAuthUserWithEmailAndPassword, signOutUser, TAdditionalDetails
} from '../../utils/firebase/firebase.utils';
import { signInSuccessAction, signInFailedAction, signUpWithEmailSuccessAction,
    signUpWithEmailFailedAction, signOutSuccessAction, signOutFailedAction,
    TSignInWithEmailInitAction,
    TSignUpWithEmailInitAction
} from './user.actions';
import USER_ACTION_TYPES from './user.types';


function* getSnapshotFromUserAuth(userAuth:User, additionalDetails={} as TAdditionalDetails){
    try {
        const userSnapshot = yield* call(createUserDocumentFromAuth, userAuth, additionalDetails)
        if(userSnapshot) yield* put(signInSuccessAction({...userSnapshot.data(), id: userSnapshot.id}))
    } catch (error) {
        yield* put(signInFailedAction(error as Error))
    }
}

function* isUserAuthenticated(){
    try {
        const userAuth = yield* call(getCurrentUser)
        if(!userAuth){
            yield* put(signInSuccessAction(userAuth));
        }else{
            yield* call(getSnapshotFromUserAuth, userAuth)
        }

    } catch (error) {
        yield* put(signInFailedAction(error as Error))
    }
}

function* onUserSessionCheck(){
    yield* takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated)
} 

function* signInWithGoogleAsync(){
    try {
        const {user} = yield* call(signInWithGooglePopup)
        yield* call(getSnapshotFromUserAuth, user)
    } catch (error) {
        put(signInFailedAction(error as Error))
    }
}

function* onGoogleSignInInit (){
    yield* takeLatest(USER_ACTION_TYPES.GOOGLE_SIGNIN_INIT, signInWithGoogleAsync)
}

function* signInWithEmailAsync({payload: {email, password}}:TSignInWithEmailInitAction){
    try{
        const userCredential = yield* call(signInUserWithEmailAndPassword, email, password)
        if(userCredential) {
            const {user} = userCredential
            alert('Successfully signed in.')
            yield* call(getSnapshotFromUserAuth, user)
        }
    }catch(error){
        yield* put(signInFailedAction(error as Error))
    }
}

function* onEmailSingInInit(){
    yield* takeLatest(USER_ACTION_TYPES.EMAIL_SIGNIN_INIT, signInWithEmailAsync)
}

function* signUpWithEmailAsync({payload: {email, password, displayName}}:TSignUpWithEmailInitAction){
    try {
        const userCredential = yield* call(createAuthUserWithEmailAndPassword, email, password)
        if(userCredential){
            const {user} = userCredential
            alert('user has been created successfully!')
            console.log(user)
            console.log(displayName)
            yield* put(signUpWithEmailSuccessAction(user, {displayName}))
        }
    } catch (error) {
        yield* put(signUpWithEmailFailedAction(error as Error))
    }
}

function* onEmailSignUpInit(){
    yield* takeLatest(USER_ACTION_TYPES.EMAIL_SIGNUP_INIT, signUpWithEmailAsync)
}

function* signInAfterSignUpWithEmailAsync({payload: {user, additionalDetails}}:ReturnType<typeof signUpWithEmailSuccessAction>){
    yield* call(getSnapshotFromUserAuth, user, additionalDetails)
}

function* onEmailSignUpSuccess(){
    yield* takeLatest(USER_ACTION_TYPES.EMAIL_SIGNUP_SUCCESS, signInAfterSignUpWithEmailAsync)
}

function* signOutAsync(){
    try {
        yield* call(signOutUser)
        yield* put(signOutSuccessAction())
    } catch (error) {
        yield* put(signOutFailedAction(error as Error))
    }
}

function* onSignOutInit(){
    yield* takeLatest(USER_ACTION_TYPES.SIGN_OUT_INIT, signOutAsync)
}
export function* userSaga(){
    yield* all([call(onUserSessionCheck), call(onGoogleSignInInit),
        call(onEmailSingInInit), call(onEmailSignUpInit), 
        call(onEmailSignUpSuccess), call(onSignOutInit)])
}