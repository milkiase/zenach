import {useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems} from '../../store/cart/cart.selectors';
import { setIsCartOpenAction } from '../../store/cart/cart.actions';
import Button from '../button/Button';
import {CartDropdownComponent, CartList, EmptyMessage} from './CartDropdown.styles';
import CartItem from '../cartItem/CartItem';

const CartDropdown = ()=>{
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)
    const navigate = useNavigate()
    const goToCheckoutHandler = ()=>{
        navigate('/checkout')
        dispatch(setIsCartOpenAction(false))
        
    }
    return (
        <CartDropdownComponent>
            <CartList>
                {
                    cartItems.length? (cartItems.map((cartItem)=> <CartItem key={cartItem.id} cartItem={cartItem}/>)) :
                    (<EmptyMessage>Your cart is empty</EmptyMessage>)
                }
            </CartList>
            <Button onClick={goToCheckoutHandler}>Go to checkout</Button>
        </CartDropdownComponent>
    );
}

export default CartDropdown;