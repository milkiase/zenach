import {useNavigate} from 'react-router-dom'
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import Button from '../button/Button';
import {CartDropdownComponent, CartList, EmptyMessage} from './CartDropdown.styles'
import CartItem from '../cartItem/CartItem';

const CartDropdown = ()=>{
    const {cartItems, setIsCartOpen} = useContext(CartContext)
    const navigate = useNavigate()
    const goToCheckoutHandler = ()=>{
        navigate('/checkout')
        setIsCartOpen(false)
    }
    return (
        <CartDropdownComponent>
            <CartList>
                {
                    cartItems.length? (cartItems.map((cartItem)=> <CartItem key={cartItem.id} cartItem={cartItem}/>)) :
                    (<EmptyMessage>your cart is empty</EmptyMessage>)
                }
            </CartList>
            <Button onClick={goToCheckoutHandler}>Go to checkout</Button>
        </CartDropdownComponent>
        // <div className='cart-dropdown-container'>
        //     <div className='cart-list'>
        //         {
        //             cartItems.map((cartItem)=> <CartItem key={cartItem.id} cartItem={cartItem}/>)
        //         }
        //     </div>
        //         <Button onClick={goToCheckoutHandler}>Go to checkout</Button>
        // </div>
    );
}

export default CartDropdown;