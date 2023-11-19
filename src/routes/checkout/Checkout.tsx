import { memo } from 'react';
import { useSelector } from 'react-redux';

import { selectCartItems, selectTotalPrice } from '../../store/cart/cart.selectors';

import {CheckoutComponent, CheckoutItemComponent, TotalPrice} from './Checkout.styles'
import CheckoutItem from '../../components/checkoutItem/CheckoutItem';
import PaymentForm from '../../components/paymentForm/PaymentForm';
const Checkout = memo(()=>{
    const cartItems = useSelector(selectCartItems)
    const totalPrice = useSelector(selectTotalPrice)
    return (
        <CheckoutComponent>
            <CheckoutItemComponent>
                <span>Product</span>
                <span>Description</span>
                <span>Quantity</span>
                <span>Price</span>
                <span>Remove</span>
            </CheckoutItemComponent>
            {
                cartItems.map((cartItem)=><CheckoutItem className='checkout-item' key={cartItem.id} cartItem={cartItem}></CheckoutItem>)
            }
            <TotalPrice>
                <p>Total: ${totalPrice}</p>
            </TotalPrice>
            <PaymentForm></PaymentForm>
        </CheckoutComponent>
    );
})

export default Checkout;