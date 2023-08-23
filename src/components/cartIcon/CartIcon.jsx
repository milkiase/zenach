import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

import {ReactComponent as ShoppingBag} from '../../assets/shopping-bag.svg'
import './CartIcon.styles.scss'
const CartIcon = ()=>{
    const {isCartOpen, setIsCartOpen} = useContext(CartContext)
    return(
        <div className='cart-icon-container' onClick={()=>setIsCartOpen(!isCartOpen)}>
            <ShoppingBag className='shopping-bag'></ShoppingBag>
            <span className='item-count'>0</span>
        </div>
    );
}

export default CartIcon;