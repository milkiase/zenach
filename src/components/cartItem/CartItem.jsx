import {CartItemComponent, ItemDetails, ItemDetail} from './CartItem.styles'

const CartItem = ({cartItem})=>{
    const {name, imageURL, price, quantity} = cartItem
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
        // <div className='cart-item-container'>
        //     <img src={imageURL} alt={name} />
        //     <div className='item-details'>
        //         <span className="item-name">{name}</span>
        //         <span className="">{quantity} x ${price} </span>
        //     </div>
        // </div>
    );
}

export default CartItem;