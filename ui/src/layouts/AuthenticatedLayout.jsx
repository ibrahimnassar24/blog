import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

const AuthenticatedLayout = () => {
    const {auth} = useContext(AuthContext);

    return (
       auth.username
       ? <Outlet />
       : <Navigate to="/signin" replace={true}/>

    );
};

export default AuthenticatedLayout;