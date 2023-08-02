import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import {api} from "../../config"

const UseAuthenticatedRequest = (path) => { 
    const data = useContext(AuthContext);

    return async () => {
        const response = await fetch(
            api + path,
            {
                method: "GET",
                credentials: "include",
                headers: {
                    authorization: "Bearer " + data.accessToken
                }
            }
        );
    };
};

export default UseAuthenticatedRequest;