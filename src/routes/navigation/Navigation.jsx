import { Outlet } from "react-router-dom";
import {ReactComponent as Cloth} from '../../assets/clothes-logo.svg'
import {NavigationComponent, NavLinks, NavLink} from './Navigation.styles'


import CartDropdown from '../../components/cartDropdown/CartDropdown';
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selectors";
import { selectIsCartOpen } from "../../store/cart/cart.selectors";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cartIcon/CartIcon";
const Navigation = ()=>{
    const currentUser = useSelector(selectCurrentUser)
    const isCartOpen = useSelector(selectIsCartOpen)
    const handleSignOut = async ()=>{
        try{
            await signOutUser()
        }catch(error){
            console.error(error)
        }
    }
    return (
        <>
            <NavigationComponent>
                <NavLink to='/'>
                    <Cloth className="logo" width='50px'/>
                </NavLink>
                <NavLinks>
                    <NavLink to={'/shop'}>
                        Shop
                    </NavLink>
                    {
                        currentUser ? (<NavLink as='span' onClick={handleSignOut}>Sign-out</NavLink>) :
                            <NavLink to="/auth">
                                sign-in
                            </NavLink>
                    }
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropdown></CartDropdown>}
            </NavigationComponent>
            <Outlet />
        </>
    );
}

export default Navigation;