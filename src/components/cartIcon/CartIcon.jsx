import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';


import {CartIconComponent, ItemCount, ShoppingIcon} from './CartIcon.styles'
const CartIcon = ()=>{
    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext)
    return(
        <CartIconComponent onClick={()=>setIsCartOpen(!isCartOpen)}>
            <ShoppingIcon></ShoppingIcon>
            <ItemCount>{cartCount}</ItemCount>
        </CartIconComponent>
        // <div className='cart-icon-container' onClick={()=>setIsCartOpen(!isCartOpen)}>
        //     <ShoppingBag className='shopping-bag'></ShoppingBag>
        //     <span className='item-count'>{cartCount}</span>
        // </div>
    );
}

export default CartIcon;