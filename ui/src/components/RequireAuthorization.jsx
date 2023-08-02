import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const isAllowed = (arr1, arr2) => {

    for (let i = 0; i < arr2.length; i++) {
        const result = arr1.find(el => el === arr2[i]);
        if (result) {
            return true;
        }
    }

    return false;
};

const RequireAuthorization = ({ children, allowed }) => {
    const { auth } = useContext(AuthContext);
    const allowedRoles = (allowed)
        ? allowed
        : ["user"];

    return (
        (auth.username)
            ? (isAllowed(allowedRoles, auth.roles))
                ? children
                : <></>
            : <></>
    );
};

export default RequireAuthorization;