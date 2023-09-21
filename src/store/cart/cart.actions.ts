import { createAction, TActionWithPayload, TActionTypeOnly, withMatcher} from "../../utils/reducer/reducer.utils";
import CART_ACTION_TYPES, {TCartItem} from "./cart.types";
import { TCategoryItem } from "../categories/categories.types";

export type TSetCartItems = TActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS, TCartItem[]>
export type TSetIsCartOpen = TActionWithPayload<CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean>
export type TClearCartItems = TActionTypeOnly<CART_ACTION_TYPES.CLEAR_CART_ITEMS>

const addItemToCart = (cartItems:TCartItem[], itemToAdd: TCategoryItem): TCartItem[]=>{
    const existingItem = cartItems.find((cartItem)=> cartItem.id === itemToAdd.id)
    if(existingItem){
        return cartItems.map((cartItem)=>(cartItem.id === itemToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1}: cartItem))
    }
    let newItmes = [...cartItems, {...itemToAdd, quantity: 1}]
    return newItmes;
}

export const setIsCartOpenAction = withMatcher((isCartOpen:boolean):TSetIsCartOpen => createAction(
    CART_ACTION_TYPES.SET_IS_CART_OPEN,
    isCartOpen
    ))

export const setCartItemsAction = withMatcher((cartItems: TCartItem[]):TSetCartItems=>{
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems)
})

export const addItemToCartAction = (cartItems:TCartItem[], itemToAdd:TCategoryItem):TSetCartItems=>{
    const newCartItems = addItemToCart(cartItems, itemToAdd)
    return setCartItemsAction(newCartItems)
}

export const removeItemFromCartAction = (cartItems:TCartItem[], id:number):TSetCartItems =>{
    const newCartItems = cartItems.filter((product)=> product.id !== id)
    return setCartItemsAction(newCartItems)
}

export const addQuantitytoCartItemAction = (cartItems:TCartItem[], id:number, quantitytoAdd:number):TSetCartItems=>{
    if(quantitytoAdd < 0){
        const exitstingCartItem = cartItems.find((item)=> item.id === id)
        if(exitstingCartItem?.quantity === 1){
            return removeItemFromCartAction(cartItems, id)
        }
    }
    const newCartItems = cartItems.map((product)=> product.id === id? {...product, quantity: (product.quantity + quantitytoAdd)}: product)
    return setCartItemsAction(newCartItems)
}

export const clearCartItemsAction = withMatcher(():TClearCartItems=> createAction(CART_ACTION_TYPES.CLEAR_CART_ITEMS))