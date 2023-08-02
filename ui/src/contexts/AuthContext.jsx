import { useState, useContext, createContext } from "react";

const AuthContext = createContext({});

const AuthContextProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        accessToken: "",
        username: "",
        roles: []
    });

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
};
export {
    AuthContext,
    AuthContextProvider
}