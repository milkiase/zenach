import './CartItem.styles.scss'

const CartItem = ({cartItem})=>{
    const {name, imageURL, price, quantity} = cartItem
    return (
        <div className='cart-item-container'>
            <img src={imageURL} alt={name} />
            <div className='item-details'>
                <span clasName="item-name">{name}</span>
                <span clasName="">{quantity} x ${price} </span>
            </div>
        </div>
    );
}

export default CartItem;