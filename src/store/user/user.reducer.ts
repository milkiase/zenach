import { TUserData } from "../../utils/firebase/firebase.utils";
import { AnyAction } from "redux";
import {signInSuccessAction, signOutFailedAction, signUpWithEmailFailedAction, signInFailedAction, signOutSuccessAction} from './user.actions';

export type TUserState = {
    readonly currentUser: TUserData | null,
    readonly error: Error | null,
}
const INITIAL_USER_STATE:TUserState = {
    currentUser: {} as TUserData,
    error: null
}
const userReducer = (state=INITIAL_USER_STATE, action:AnyAction)=>{

    if(signInSuccessAction.match(action)) return {...state, currentUser: action.payload, error: null};
    if(signOutFailedAction.match(action) || signUpWithEmailFailedAction.match(action) || signInFailedAction.match(action)){
        return {...state, error: action.payload}
    }
    if(signOutSuccessAction.match(action)) return {...state, currentUser: null, error: null};
    return state;
    
}

export default userReducer;