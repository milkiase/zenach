import { memo } from 'react';

import { TCartItem } from '../../store/cart/cart.types';
import {CartItemComponent, ItemDetails, ItemDetail} from './CartItem.styles'

type TCartItemProps = {
    cartItem: TCartItem
}
const CartItem = memo(({cartItem}: TCartItemProps)=>{
    const {name, imageURL, price, quantity} = cartItem
    console.log('cart item', name)
    return (
        <CartItemComponent>
            <img src={imageURL} alt={name} />
            <ItemDetails>
                <ItemDetail>
                    {name}
                </ItemDetail>
                <ItemDetail>
                {quantity} x ${price}
                </ItemDetail>
            </ItemDetails>
        </CartItemComponent>
    );
})

export default CartItem;