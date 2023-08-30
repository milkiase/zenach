import { createAction } from "../../utils/reducer/reducer.utils"
import USER_ACTION_TYPES from "./user.types"
export const setCurrentUserAction = (user) => (createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user))