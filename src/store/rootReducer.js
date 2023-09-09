import { combineReducers } from "@reduxjs/toolkit";
import {userReducer} from "./user/user.slice";
import {categoriesReducer} from "./categories/categories.slice";
import {cartReducer} from "./cart/cart.slice";
const rootReducer = combineReducers({
    user: userReducer,
    categories: categoriesReducer,
    cart: cartReducer
})

export default rootReducer;