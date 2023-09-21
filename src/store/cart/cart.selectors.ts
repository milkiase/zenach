import {createSelector} from 'reselect';
import { TCartState } from './cart.reducer';

const selectCartReducer = (state: any): TCartState => state.cart

export const selectCartItems = createSelector(
    [selectCartReducer],
    (cartReducerState) => cartReducerState.cartItems
)

export const selectIsCartOpen = createSelector(
    [selectCartReducer],
    (cartReducerState) => cartReducerState.isCartOpen
)

export const selectCartCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((previousValue, cartItem)=>{
        return (cartItem.quantity + previousValue)
    }, 0)
)

export const selectTotalPrice = createSelector(
    [selectCartItems],
    (cartItems)=> cartItems.reduce((previousValue, cartItem)=>{
        return ((cartItem.quantity * cartItem.price) + previousValue)
    }, 0)
)