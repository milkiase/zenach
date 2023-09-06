import { createAction } from "../../utils/reducer/reducer.utils";
import CART_ACTION_TYPES from "./cart.types";

const addItemToCart = (cartItems, itemToAdd)=>{
    const existingItem = cartItems.find((cartItem)=> cartItem.id === itemToAdd.id)
    if(existingItem){
        return cartItems.map((cartItem)=>(cartItem.id === itemToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1}: cartItem))
    }
    let newItmes = [...cartItems, {...itemToAdd, quantity: 1}]
    return newItmes;
}

export const setIsCartOpenAction = (isCartOpen) => createAction(
    CART_ACTION_TYPES.SET_IS_CART_OPEN,
    isCartOpen
    )

export const addItemToCartAction = (cartItems, itemToAdd)=>{
    const newCartItems = addItemToCart(cartItems, itemToAdd)
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

export const removeItemFromCartAction = (cartItems, id) =>{
    const newCartItems = cartItems.filter((product)=> product.id !== id)
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

export const addQuantitytoCartItemAction = (cartItems, id, quantitytoAdd)=>{
    if(quantitytoAdd < 0){
        const exitstingCartItem = cartItems.find((item)=> item.id === id)
        if(exitstingCartItem.quantity === 1){
            return removeItemFromCartAction(cartItems, id)
        }
    }
    const newCartItems = cartItems.map((product)=> product.id === id? {...product, quantity: (product.quantity + quantitytoAdd)}: product)
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

export const clearCartItemsAction = ()=> createAction(CART_ACTION_TYPES.CLEAR_CART_ITEMS)