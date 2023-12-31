enum USER_ACTION_TYPES  {
    SET_CURRENT_USER = 'user/SET_CURRENT_USER',
    CHECK_USER_SESSION  = 'user/CHECK_USER_SESSION',
    GOOGLE_SIGNIN_INIT  = 'user/GOOGLE_SIGNIN_INIT',
    EMAIL_SIGNIN_INIT  = 'user/EMAIL_SIGNIN_INIT',
    EMAIL_SIGNUP_INIT  = 'user/EMAIL_SIGNUP_INIT',
    EMAIL_SIGNUP_SUCCESS = 'user/EMAIL_SIGNUP_SUCCESS',
    EMAIL_SIGNUP_FAILED = 'user/EMAIL_SIGNUP_FAILED',
    SIGNIN_SUCCESS  = 'user/SIGNIN_SUCCESS',
    SIGNIN_FAILED  = 'user/SIGNIN_FAILED',
    SIGN_OUT_INIT = 'user/SIGN_OUT_INIT',
    SIGN_OUT_SUCCESS = 'user/SIGN_OUT_SUCCESS',
    SIGN_OUT_FAILED = 'user/SIGN_OUT_FAILED'
}

export default USER_ACTION_TYPES;