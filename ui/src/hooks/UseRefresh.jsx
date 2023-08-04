import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { api } from "../../config";

const UseRefresh = () => {
    const { auth, setAuth, accessToken } = useContext(AuthContext);

    return async () => {
        const response = await fetch(
            api + "/account/refresh",
            {
                credentials: "include"
            }
        );

        if (response.status != 200) { 
            setAuth({
                username: "",
                roles: []
            })
            accessToken.current = "";
            return response.status;
        }

        const data = await response.json();
        setAuth(data);
        accessToken.current = data.accessToken;
        return response.status;
    };
};

export default UseRefresh;