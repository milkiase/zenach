import { Outlet, Link } from "react-router-dom";
import {ReactComponent as Cloth} from '../../assets/clothes-logo.svg'
import './Navigation.styles.scss'
import { useContext } from 'react';
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
const Navigation = ()=>{
    const {currentUser} = useContext(UserContext)
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
                        currentUser ? (<span className="nav-link" onClick={handleSignOut}>Sign Out</span>) :
                            <Link to="/auth" className="nav-link" >
                                sign-in
                            </Link>
                    }
                </div>
            </div>
            <Outlet />
        </>
    );
}

export default Navigation