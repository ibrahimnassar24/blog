import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import UseRefresh from "./UseRefresh";
import { api } from "../../config"

const UseAuthenticatedRequest = (path) => {
    const { auth, setAuth, accessToken } = useContext(AuthContext);
    const refresh = UseRefresh();

    const send = async () => {

        const response = await fetch(
            api + path,
            {
                method: "GET",
                credentials: "include",
                headers: {
                    authorization: "Bearer " + accessToken.current
                }
            }
        );
console.log(response.status)
        if (response.status === 401) {
            const res = await refresh();
            if (res != 200) { return; }
            return await send();
        } else {
            if (response.status != 200) { return; }
            const data = await response.json();
            return data;
        }
    }

    return send;
};

export default UseAuthenticatedRequest;