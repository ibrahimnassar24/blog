import { useState, useContext, useRef } from "react";
import { AuthContext } from "../contexts/AuthContext";
import UseAuthenticatedRequest from "../hooks/UseAuthenticatedRequest";
import Loading from "../components/Loading"

const Test = () => {

    const send = UseAuthenticatedRequest("/post/create");
    const [result, setResult] = useState("");
    const { auth, setAuth } = useContext(AuthContext);
    const AT = useRef(auth.accessToken);

    const goHandler = async () => {
        const response = await fetch("http://localhost:3131/api/post/create",
            {
                credentials: "include",
                headers: {
                    authorization: "Bearer " + AT.current
                }
            });

        console.log(response.status);
        if (response.status != 200) { return response.status; }
        const data = await response.json();
        setResult(JSON.stringify(data));
        return response.status
    };

    const refreshHandler = async () => {
        const response = await fetch("http://localhost:3131/api/account/refresh", {
            credentials: "include"
        })

        if (response.status != 200) { return response.status; }

        const data = await response.json();
        console.log(data);
        AT.current = data.accessToken
        setAuth(data);
        return response.status;
    };

    const handler = async () => {
        const data = await send();
        setResult(JSON.stringify(data))
    };

    return (
        <div>
            <h2>Test page</h2>
            <p>
                {
                    result ? result : "no result"
                }
            </p>
            <br />
            <button className="btn" onClick={handler}>Go</button>
            <button className="btn" onClick={refreshHandler}>Refresh</button>
        </div>
    );
};

export default Test;