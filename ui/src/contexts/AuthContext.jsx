import { useState, useContext, createContext, useRef } from "react";

const AuthContext = createContext({});

const AuthContextProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        username: "",
        roles: []
    });
    const accessToken = useRef("");

    return (
        <AuthContext.Provider value={{ auth, setAuth, accessToken }}>
            {children}
        </AuthContext.Provider>
    );
};
export {
    AuthContext,
    AuthContextProvider
}