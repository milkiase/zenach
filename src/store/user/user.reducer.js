import USER_ACTION_TYPES from "./user.types"

const INITIAL_USER_STATE = {
    currentUser: {},
    error: null
}
const userReducer = (state=INITIAL_USER_STATE, action)=>{
    const {type, payload} = action

    switch(type){
        case USER_ACTION_TYPES.SIGNIN_SUCCESS:
            return {...state, currentUser: payload, error: null}
        case USER_ACTION_TYPES.SIGN_OUT_FAILED:
        case USER_ACTION_TYPES.EMAIL_SIGNUP_FAILED:
        case USER_ACTION_TYPES.SIGNIN_FAILED:
            return {...state, error: payload}
        case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
            return {...state, currentUser: null, error: null}
        default:
            return state
    }
}

export default userReducer;