import { useDispatch, useSelector} from 'react-redux';

import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selectors';
import { setIsCartOpenAction } from '../../store/cart/cart.actions';

import {CartIconComponent, ItemCount, ShoppingIcon} from './CartIcon.styles'

const CartIcon = ()=>{
    const dispatch = useDispatch()
    const isCartOpen = useSelector(selectIsCartOpen)
    const cartCount = useSelector(selectCartCount)
    return(
        <CartIconComponent onClick={()=>dispatch(setIsCartOpenAction(!isCartOpen))}>
            <ShoppingIcon></ShoppingIcon>
            <ItemCount cartCount={cartCount}>{cartCount}</ItemCount>
        </CartIconComponent>
    );
}

export default CartIcon;