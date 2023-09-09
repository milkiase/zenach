import { useDispatch } from 'react-redux';
import { addItemToCartAction } from '../../store/cart/cart.slice';

import Button, {BUTTON_TYPE_CLASSES} from '../button/Button';
import {ProductCardComponent, ProductFooter} from './ProductCard.styles'

const ProductCard = ({product})=>{
    const dispatch = useDispatch()
    const {name, imageURL, price} = product
    const addItemToCart = (cartItem)=>{
        dispatch(addItemToCartAction(cartItem))
    }

    const addToCart = ()=>{
        addItemToCart(product)
    }
    return (
        <ProductCardComponent>
            <img src={imageURL} alt={name} />
            <ProductFooter>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </ProductFooter>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addToCart}>Add to cart</Button>
        </ProductCardComponent>
    );
}

export default ProductCard;