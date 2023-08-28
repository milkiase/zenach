import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import Button, {BUTTON_TYPE_CLASSES} from '../button/Button';
import {ProductCardComponent, ProductFooter} from './ProductCard.styles'

const ProductCard = ({product})=>{
    const {name, imageURL, price} = product
    const {addItemToCart} = useContext(CartContext)

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
        // <div className='product-card-container'>
        //     <img src={imageURL} alt={name} />
        //     <div className='product-card-footer'>
        //         <span className='name'>{name}</span>
        //         <span className='price'>{price}</span>
        //     </div>
        //     <Button buttonType='inverted' onClick={addToCart}>Add to cart</Button>
        // </div>
    );
}

export default ProductCard;