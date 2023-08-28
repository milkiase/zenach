import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import {CheckoutItemComponent, CheckoutBtn} from './CheckoutItem.styles'

const CheckoutItem = ({cartItem, className})=>{
    const {id, imageURL, name, quantity, price} = cartItem
    const {removeItemFromCart, addQuantitytoCartItem} = useContext(CartContext)
    const incrementQuantity = ()=>{
        addQuantitytoCartItem(id, 1)
    }
    const decrementQuantity = ()=>{
        addQuantitytoCartItem(id, -1)
    }
    const removeCheckout = ()=>{
        removeItemFromCart(id)
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
        // <div className={`checkout-item-container ${className}`}>
        //     <img src={imageURL} alt={name} />
        //     <span className='description'>{name}</span>
        //     <span className='quantity'>
        //         <button className='dec' onClick={decrementQuantity}> &#10094; </button>
        //         {quantity}
        //         <button className='inc' onClick={incrementQuantity}> &#10095; </button>
        //     </span>
        //     <span className='price'>{price}</span>
        //     <button className='remove' onClick={removeCheckout}> &#10005; </button>
        // </div>
    );
}

export default CheckoutItem;