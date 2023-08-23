import { createContext, useState, useEffect} from "react";

const addCartItem = (cartItems, itemToAdd)=>{
    const currentItemsId = cartItems.map((cartItem)=>cartItem.id)
    if(currentItemsId.includes(itemToAdd.id)){
        const itemIndex = currentItemsId.indexOf(itemToAdd.id)
        const newCartItems = [...cartItems]
        newCartItems[itemIndex].quantity += 1
        return newCartItems;
    }
    let newItmes = [...cartItems, {...itemToAdd, quantity: 1}]
    return newItmes;
}
export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: ()=>{},
    cartItems: [],
    addItemToCart: ()=>{},
    cartCount: 0
})

export const CartProvider = ({children})=>{
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const addItemToCart = (itemToAdd)=>{
        setCartItems(addCartItem(cartItems, itemToAdd))
    }
    useEffect(()=>{
        const newCartCount = cartItems.reduce((currentCount, cartItem)=>{
            return cartItem.quantity + currentCount
        }, 0)
        setCartCount(newCartCount)
    }, [cartItems])
    const cartValue = {isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount}
    return (
        <CartContext.Provider value={cartValue}>
            {children}
        </CartContext.Provider>
    );
}