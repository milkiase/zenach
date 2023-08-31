import { useDispatch, useSelector } from 'react-redux';
import { addQuantitytoCartItemAction, removeItemFromCartAction } from '../../store/cart/cart.actions';
import { selectCartItems } from '../../store/cart/cart.selectors';
import {CheckoutItemComponent, CheckoutBtn} from './CheckoutItem.styles';

const CheckoutItem = ({cartItem, className})=>{
    const dispatch = useDispatch()
    const {id, imageURL, name, quantity, price} = cartItem
    const cartItems = useSelector(selectCartItems)
    const incrementQuantity = ()=>{
        dispatch(addQuantitytoCartItemAction(cartItems, id, 1))
    }
    const decrementQuantity = ()=>{
        dispatch(addQuantitytoCartItemAction(cartItems, id, -1))
    }
    const removeCheckout = ()=>{
        dispatch(removeItemFromCartAction(cartItems, id))
    }
    return (
        <CheckoutItemComponent className={className}>
            <img src={imageURL} alt={name} />
            <span>{name}</span>
            <span>
                <CheckoutBtn onClick={decrementQuantity}>
                    &#10094;
                </CheckoutBtn>
                {quantity}
                <CheckoutBtn onClick={incrementQuantity}>
                    &#10095;
                </CheckoutBtn>
            </span>
            <span>{price}</span>
            <CheckoutBtn onClick={removeCheckout}>&#10005;</CheckoutBtn>
        </CheckoutItemComponent>
    );
}

export default CheckoutItem;