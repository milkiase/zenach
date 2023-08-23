import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import Button from '../button/Button';
import './ProductCard.styles.scss'

const ProductCard = ({product})=>{
    const {name, imageURL, price} = product
    const {addItemToCart} = useContext(CartContext)

    const addToCart = ()=>{
        addItemToCart(product)
    }
    return (
        <div className='product-card-container'>
            <img src={imageURL} alt={name} />
            <div className='product-card-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType='inverted' onClick={addToCart}>Add to cart</Button>
        </div>
    );
}

export default ProductCard;