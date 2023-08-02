import { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext"
import { api } from "../../config";
const SignIn = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { auth, setAuth } = useContext(AuthContext);

    const handler = async (e) => {

        const response = await fetch(
            api + "/account/signin",
            {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username, password })

            }
        );
        const data = await response.json();
        setAuth(data);
    }


    return (
        <div className="row">
            <div className="col s12 m6 l4 z-depth-3">
                <h1>Sign In</h1>
                <form className="col s12" >
                    <div className="input-field">
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={e => setUsername(e.target.value)} />
                        <label htmlFor="username">User Name</label>
                    </div>

                    <div className="input-field">
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)} />
                        <label htmlFor="password">Password</label>
                    </div>


                    <button
                        className="col right btn"
                        type="button"
                        onClick={handler}>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default SignIn;

