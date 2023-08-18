import { Outlet, Link } from "react-router-dom";
import {ReactComponent as Cloth} from '../../assets/clothes-logo.svg'
import './Navigation.styles.scss'
const Navigation = ()=>{
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
                    {/* <Link to="ljkl" className="nav-link">
                        Random
                    </Link> */}
                    <Link to="/sign-in" className="nav-link" >
                        sign-in
                    </Link>
                </div>
            </div>
            <Outlet />
        </>
    );
}

export default Navigation