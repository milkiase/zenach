import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import './CheckoutItem.styles.scss'

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
        <div className={`checkout-item-container ${className}`}>
            <img src={imageURL} alt={name} />
            <span className='description'>{name}</span>
            <span className='quantity'>
                <button className='dec' onClick={decrementQuantity}> &#10094; </button>
                {quantity}
                <button className='inc' onClick={incrementQuantity}> &#10095; </button>
            </span>
            <span className='price'>{price}</span>
            <button className='remove' onClick={removeCheckout}> &#10005; </button>
        </div>
    );
}

export default CheckoutItem;