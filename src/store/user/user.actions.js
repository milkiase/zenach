import { createAction } from "../../utils/reducer/reducer.utils";
import USER_ACTION_TYPES from "./user.types";
export const setCurrentUserAction = (user) => (createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user))

export const checkUserSession = ()=> createAction(USER_ACTION_TYPES.CHECK_USER_SESSION)

export const signInWithEmailInitAction = (email, password) => createAction(
    USER_ACTION_TYPES.EMAIL_SIGNIN_INIT, {email, password}
)

export const signInWithGoogleAction = ()=> createAction(USER_ACTION_TYPES.GOOGLE_SIGNIN_INIT)



export const signInSuccessAction = (user)=> createAction(USER_ACTION_TYPES.SIGNIN_SUCCESS, user)

export const signInFailedAction = (error)=> createAction(USER_ACTION_TYPES.SIGNIN_FAILED, error)

export const signOutInitAction = ()=> createAction(USER_ACTION_TYPES.SIGN_OUT_INIT)
export const signOutSuccessAction = ()=> createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS)
export const signOutFailedAction = (error)=> createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error)


export const signUpWithEmailInitAction = (email, password, displayName)=>{
    return (
        createAction(USER_ACTION_TYPES.EMAIL_SIGNUP_INIT, {
            email,
            password,
            displayName
        })
    );
}

export const signUpWithEmailSuccessAction= (user, additionalDetails)=>(
    createAction(USER_ACTION_TYPES.EMAIL_SIGNUP_SUCCESS, {user, additionalDetails}))

export const signUpWithEmailFailedAction = (error)=> createAction(USER_ACTION_TYPES.EMAIL_SIGNUP_FAILED, error)