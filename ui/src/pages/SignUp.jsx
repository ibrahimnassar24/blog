import { api } from "../../config";
import { useState } from "react";
const SignUp = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    const handler = async (e) => {

        if (password != confirm) { return; }
        const response = await fetch(
            api + "/account/signup",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username, password })

            }
        );
        const data = await response.status;
        console.log(data);
    }

    return (
        <div className="row">
            <div className="col s12 m6 l4 z-depth-3">
                <h1>Sign Up</h1>
                <form className="col s12">
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

                    <div className="input-field">
                        <input
                        type="password"
                        id="confirm"
                        value={confirm}
                        onChange={e => setConfirm(e.target.value)} />
                        <label htmlFor="confirm">Confirm Password</label>
                    </div>

                    <button
                    className="right btn"
                    type="button"
                    onClick={handler}>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;