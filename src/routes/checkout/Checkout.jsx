import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

import {CheckoutComponent, CheckoutItemComponent, TotalPrice} from './Checkout.styles'
import CheckoutItem from '../../components/checkoutItem/CheckoutItem';
const Checkout = ()=>{
    const {cartItems, totalPrice} = useContext(CartContext)
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
        </CheckoutComponent>
        // <div className='checkout-container'>
        //     <div className='checkout-item'>
        //         <span>Product</span>
        //         <span>Description</span>
        //         <span>Quantity</span>
        //         <span>Price</span>
        //         <span className='remove'>Remove</span>
        //     </div>
        //     {
        //         cartItems.map((cartItem)=><CheckoutItem className='checkout-item' key={cartItem.id} cartItem={cartItem}></CheckoutItem>)
        //     }
        //     <div className='total-price'> 
        //         <p>Total: ${totalPrice}</p>
        //     </div>
        // </div>
    );
}

export default Checkout;