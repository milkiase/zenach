import { createAction, TActionTypeOnly, TActionWithPayload, withMatcher} from "../../utils/reducer/reducer.utils";
import { TUserData, TAdditionalDetails } from "../../utils/firebase/firebase.utils";
import USER_ACTION_TYPES from "./user.types";
import { User } from "firebase/auth";

export type TSetCurrentUserAction = TActionWithPayload<USER_ACTION_TYPES.SET_CURRENT_USER, TUserData>
export type TCheckUserSession = TActionTypeOnly<USER_ACTION_TYPES.CHECK_USER_SESSION>
export type TSignInWithEmailInitAction = TActionWithPayload<USER_ACTION_TYPES.EMAIL_SIGNIN_INIT, {email:string, password:string}>
export type TSignInWithGoogleAction = TActionTypeOnly<USER_ACTION_TYPES.GOOGLE_SIGNIN_INIT>
export type TSignUpWithEmailInitAction = TActionWithPayload<USER_ACTION_TYPES.EMAIL_SIGNUP_INIT, 
                                                            {email: string, password: string, displayName: string}>
export type TSignInSuccessAction = TActionWithPayload<USER_ACTION_TYPES.SIGNIN_SUCCESS, TUserData>                                                            
export const setCurrentUserAction = withMatcher((user:TUserData):TSetCurrentUserAction => (createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user)))

export const checkUserSession = withMatcher(():TCheckUserSession=> createAction(USER_ACTION_TYPES.CHECK_USER_SESSION))

export const signInWithEmailInitAction = withMatcher((email:string, password:string):TSignInWithEmailInitAction => createAction(
    USER_ACTION_TYPES.EMAIL_SIGNIN_INIT, {email, password}
))

export const signInWithGoogleAction = withMatcher(():TSignInWithGoogleAction=> createAction(USER_ACTION_TYPES.GOOGLE_SIGNIN_INIT))


export const signInSuccessAction = withMatcher((user:(TUserData & {id: string}) | null)=> createAction(USER_ACTION_TYPES.SIGNIN_SUCCESS, user))

export const signInFailedAction = withMatcher((error:Error)=> createAction(USER_ACTION_TYPES.SIGNIN_FAILED, error))

export const signOutInitAction = ()=> createAction(USER_ACTION_TYPES.SIGN_OUT_INIT)
export const signOutSuccessAction = withMatcher(()=> createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS))
export const signOutFailedAction = withMatcher((error:Error)=> createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error))


export const signUpWithEmailInitAction = withMatcher((email:string, password:string, displayName:string):TSignUpWithEmailInitAction=>{
    return (
        createAction(USER_ACTION_TYPES.EMAIL_SIGNUP_INIT, {
            email,
            password,
            displayName
        })
    );
})

export const signUpWithEmailSuccessAction= (user:User, additionalDetails:TAdditionalDetails)=>(
    createAction(USER_ACTION_TYPES.EMAIL_SIGNUP_SUCCESS, {user, additionalDetails}))

export const signUpWithEmailFailedAction = withMatcher((error:Error)=> createAction(USER_ACTION_TYPES.EMAIL_SIGNUP_FAILED, error))