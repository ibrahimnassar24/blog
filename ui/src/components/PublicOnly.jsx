import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const PublicOnly = ({ children }) => {

    const { auth } = useContext(AuthContext);

    return (
        auth.username
        ? <></>
        : children
    );
};

export default PublicOnly;