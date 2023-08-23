import { Outlet, Link } from "react-router-dom";
import {ReactComponent as Cloth} from '../../assets/clothes-logo.svg'
import './Navigation.styles.scss'

import CartDropdown from '../../components/cartDropdown/CartDropdown'
import { useContext } from 'react';
import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cartIcon/CartIcon";
const Navigation = ()=>{
    const {currentUser} = useContext(UserContext)
    const {isCartOpen} = useContext(CartContext)
    const handleSignOut = async ()=>{
        try{
            await signOutUser()
        }catch(error){
            console.error(error)
        }
    }
    return (
        <>
            <div className="navigation">
                <Link to='/' className="logo-container">
                    <Cloth className="logo" width='50px'/>
                </Link>

                <div className="nav-links-container">
                    <Link to={'/shop'} className="nav-link">
                        Shop
                    </Link>
                    {
                        currentUser ? (<span className="nav-link" onClick={handleSignOut}>Sign-out</span>) :
                            <Link to="/auth" className="nav-link" >
                                sign-in
                            </Link>
                    }
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropdown></CartDropdown>}
            </div>
            <Outlet />
        </>
    );
}

export default Navigation;