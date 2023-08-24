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
    cartCount: 0,
    totalPrice: 0,
    removeItemFromCart: ()=>{},
    addQuantitytoCartItem: ()=>{}
})

export const CartProvider = ({children})=>{
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    const addItemToCart = (itemToAdd)=>{
        setCartItems(addCartItem(cartItems, itemToAdd))
    }
    const removeItemFromCart = (id)=>{
        setCartItems(cartItems.filter((product)=> product.id !== id))
    }
    const addQuantitytoCartItem = (id, quantitytoAdd)=>{
        if(quantitytoAdd < 0){
            const exitstingCartItem = cartItems.find((cartItem)=> cartItem.id === id)
            if(exitstingCartItem.quantity === 1){
                removeItemFromCart(id)
                return
            }
        }
        setCartItems(cartItems.map((product)=> product.id === id? {...product, quantity: (product.quantity + quantitytoAdd)}: product))
    }
    useEffect(()=>{
        const [newCartCount, newTotalPrice] = cartItems.reduce((previousValue, cartItem)=>{
            return [cartItem.quantity + previousValue[0], (cartItem.quantity * cartItem.price) + previousValue[1]]
        }, [0, 0])
        setCartCount(newCartCount)
        setTotalPrice(newTotalPrice)
    }, [cartItems])
    const cartValue = {isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount, totalPrice, removeItemFromCart, addQuantitytoCartItem}
    return (
        <CartContext.Provider value={cartValue}>
            {children}
        </CartContext.Provider>
    );
}