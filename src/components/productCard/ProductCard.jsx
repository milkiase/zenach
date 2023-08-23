import Button from '../button/Button';
import './ProductCard.styles.scss'

const ProductCard = ({product})=>{
    const {name, imageURL, price} = product
    return (
        <div className='product-card-container'>
            <img src={imageURL} alt={name} />
            <div className='product-card-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType='inverted'>Add to cart</Button>
        </div>
    );
}

export default ProductCard;