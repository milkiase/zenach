import { createSlice } from "@reduxjs/toolkit";

const INITIAL_USER_STATE = {
    currentUser: {}
}

const userSlice = createSlice({
    name: 'user',
    initialState: INITIAL_USER_STATE,
    reducers: {
        setCurrentUser(state, action){
            state.currentUser = action.payload
        }
    }
})

export const setCurrentUserAction = userSlice.actions.setCurrentUser;
export const userReducer = userSlice.reducer