import { createSlice } from "@reduxjs/toolkit";

const INITIAL_CART_STATE = {
    cartItems: [],
    isCartOpen: false
}

const addItemToCart = (cartItems, itemToAdd)=>{
    const existingItem = cartItems.find((cartItem)=> cartItem.id === itemToAdd.id)
    if(existingItem){
        return cartItems.map((cartItem)=>(cartItem.id === itemToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1}: cartItem))
    }
    let newItmes = [...cartItems, {...itemToAdd, quantity: 1}]
    return newItmes;
}

const addQuantitytoCartItem = (cartItems, id, quantitytoAdd)=>{
    if(quantitytoAdd < 0){
        const exitstingCartItem = cartItems.find((item)=> item.id === id)
        if(exitstingCartItem.quantity === 1){
            return cartItems.filter((product)=> product.id !== id)
        }
    }
    return cartItems.map((product)=> product.id === id? {...product, quantity: (product.quantity + quantitytoAdd)}: product)
    
}
const cartSlice = createSlice({
    name: 'cart',
    initialState: INITIAL_CART_STATE,
    reducers: {
        setCartItems(state, action){
            state.cartItems = action.payload
        },
        setIsCartOpen: (state, action)=>{
            state.isCartOpen = action.payload
        },
        addItemToCart(state, action){
            state.cartItems = addItemToCart(state.cartItems, action.payload)
        },
        removeItemFromCart(state, action){
            state.cartItems = state.cartItems.filter((product)=> product.id !== action.payload)
        },
        addQuantitytoCartItem(state, action){
            const [id, quantitytoAdd] = action.payload
            state.cartItems = addQuantitytoCartItem(state.cartItems, id, quantitytoAdd)
        }
    }
})




export const setIsCartOpenAction = cartSlice.actions.setIsCartOpen;
export const addItemToCartAction = cartSlice.actions.addItemToCart;
export const removeItemFromCartAction = cartSlice.actions.removeItemFromCart;
export const addQuantitytoCartItemAction = cartSlice.actions.addQuantitytoCartItem;

export const cartReducer = cartSlice.reducer;