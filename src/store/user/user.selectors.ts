import { TRootState } from '../store';
import { createSelector } from "reselect";
import { TUserState } from "./user.reducer";

export const selectUserReducer = (state: TRootState):TUserState => state.user;

export const selectCurrentUser = createSelector(
    [selectUserReducer],
    (userSlice)=> userSlice.currentUser
)