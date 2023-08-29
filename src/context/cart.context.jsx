import { createContext, useReducer} from "react";
import {createAction} from '../utils/reducer/reducer.utils'

const addCartItem = (cartItems, itemToAdd)=>{
    const existingItem = cartItems.find((cartItem)=> cartItem.id === itemToAdd.id)
    if(existingItem){
        return cartItems.map((cartItem)=>(cartItem.id === itemToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1}: cartItem))
    }
    let newItmes = [...cartItems, {...itemToAdd, quantity: 1}]
    return newItmes;
}
const getCartCountAndTotalPrice = (cartItems)=>{
    const [newCartCount, newTotalPrice] = cartItems.reduce((previousValue, cartItem)=>{
        return [cartItem.quantity + previousValue[0], (cartItem.quantity * cartItem.price) + previousValue[1]]
    }, [0, 0])
    return {newCartCount, newTotalPrice}
}
export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: ()=>{},
    cartItems: [],
    addItemToCart: ()=>{},
    cartCount: 0,
    totalPrice: 0,
    removeItemFromCart: ()=>{},
    addQuantitytoCartItem: ()=>{}
})

const CART_ACTION_TYPES = {
    SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
    SET_CART_ITEMS: 'SET_CART_ITEMS'
}
const cartReducer = (state, action)=>{
    const {type, payload} = action
    switch(type){
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {...state, ...payload}
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return {...state, isCartOpen: payload.isOpen}
        default:
            throw new Error(`Unknown cart action type of: ${type}`)
    }
}

const INITIAL_CART_STATE = {
    cartItems: [],
    cartCount: 0,
    totalPrice: 0,
    isCartOpen: false
}

export const CartProvider = ({children})=>{
    const [cartState, dispatchCart] = useReducer(cartReducer, INITIAL_CART_STATE)
    const {cartItems, cartCount, totalPrice, isCartOpen} = cartState
    const setIsCartOpen = (isOpen)=>{
        dispatchCart(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, {isOpen}))
    }
    const updateCartItems = (newCartItems)=>{
        const {newCartCount, newTotalPrice} = getCartCountAndTotalPrice(newCartItems)
        dispatchCart(createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
                        cartItems: newCartItems, 
                        cartCount: newCartCount,
                        totalPrice: newTotalPrice
                    })
        )
    }
    const addItemToCart = (item)=>{
        const newCartItems = addCartItem(cartItems, item)
        updateCartItems(newCartItems)
    }
    const removeItemFromCart = (id)=>{
        const newCartItems = cartItems.filter((product)=> product.id !== id)
        updateCartItems(newCartItems)
    }
    const addQuantitytoCartItem = (id, quantitytoAdd)=>{
        if(quantitytoAdd < 0){
            const exitstingCartItem = cartItems.find((item)=> item.id === id)
            if(exitstingCartItem.quantity === 1){
                return removeItemFromCart(id)
            }
        }
        const newCartItems = cartItems.map((product)=> product.id === id? {...product, quantity: (product.quantity + quantitytoAdd)}: product)
        updateCartItems(newCartItems)
    }
    const cartValue = {isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount, totalPrice, removeItemFromCart, addQuantitytoCartItem}
    return (
        <CartContext.Provider value={cartValue}>
            {children}
        </CartContext.Provider>
    );
}