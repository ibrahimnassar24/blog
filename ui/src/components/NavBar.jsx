import { NavLink } from "react-router-dom";
import SignOut from "../pages/SignOut";
import PublicOnly from "./PublicOnly";
import RequireAuthorization from "./RequireAuthorization";

const NavBar = () => {

    return (
        <nav>
            <div className="container">
                <div className="nav-wrapper">
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <PublicOnly>
                            <li><NavLink to="/signin">Sign In</NavLink></li>
                            <li><NavLink to="/signup">Sign Up</NavLink></li>
                        </PublicOnly>
                        <RequireAuthorization>
                            <li><NavLink to="/profile">Profile</NavLink></li>
                            <li><SignOut /></li>
                        </RequireAuthorization>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;