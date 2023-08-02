import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import axios from "axios";

const Home = () => {

    const { auth, setAuth } = useContext(AuthContext);


    return (
        <div>
            <h1>Home</h1>
            {
                (auth.username)
                    ? <h3>hello {auth.username}</h3>
                    : <h3>you should sign in</h3>
            }


        </div>
    );
};

export default Home;