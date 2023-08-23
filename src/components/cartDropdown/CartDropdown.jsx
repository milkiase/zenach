import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import Button from '../button/Button';
import './CartDropdown.styles.scss'
import CartItem from '../cartItem/CartItem';

const CartDropdown = ()=>{
    const {cartItems} = useContext(CartContext)
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-list'>
                {
                    cartItems.map((cartItem)=> <CartItem key={cartItem.id} cartItem={cartItem}/>)
                }
            </div>
            <Button>Go to checkout</Button>
        </div>
    );
}

export default CartDropdown;