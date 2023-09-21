import {AnyAction} from 'redux';
import {TCartItem} from "./cart.types";
import { clearCartItemsAction, setIsCartOpenAction, setCartItemsAction } from './cart.actions';

export type TCartState = {
    cartItems: TCartItem[],
    isCartOpen: boolean
}

const INITIAL_CART_STATE:TCartState = {
    cartItems: [],
    isCartOpen: false
}

const cartReducer = (state=INITIAL_CART_STATE, action: AnyAction): TCartState=>{
    if(setCartItemsAction.match(action)) return {...state, cartItems: action.payload};
    if(setIsCartOpenAction.match(action)) return {...state, isCartOpen: action.payload};
    if(clearCartItemsAction.match(action)) return {...state, cartItems: []}
    return state;
}

export default cartReducer;