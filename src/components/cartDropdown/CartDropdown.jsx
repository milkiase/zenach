import Button from '../button/Button';
import './CartDropdown.styles.scss'

const CartDropdown = ()=>{
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-list'>

            </div>
            <Button>Go to checkout</Button>
        </div>
    );
}

export default CartDropdown;