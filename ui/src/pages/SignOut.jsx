import React, { useEffect } from "react";
import { useContext } from "react"; "react";
import { AuthContext } from "../contexts/AuthContext";
import UseAuthenticatedRequest, { } from "../hooks/UseAuthenticatedRequest";
import { useNavigate } from "react-router-dom";

const SignOut = () => {
    const { auth, setAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    const signout = UseAuthenticatedRequest("/account/signout");

    const handler = async () => {
        await signout();
        setAuth({
            username: "",
            accessToken: "",
            roles: []
        });
        navigate("/");
    }

    useEffect(() => {
        const el = document.querySelector(".modal");
        const instance = window.M.Modal.init(el);
    }, [])

    return (
        <span>
            <a
                href="#md"
                className="modal-trigger">Sign Out</a>

            <div className="modal" id="md">
                <div className="modal-content">
                    <p className="center">Are you sure you want to sign out?</p>
                </div>
                <div className="modal-footer">
                    <button
                        className="btn"
                        onClick={handler}>Yes</button>
                    <a href="#" className="btn modal-close">No</a>
                </div>
            </div>
        </span>
    );
};

export default SignOut;