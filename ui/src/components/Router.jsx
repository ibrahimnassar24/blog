import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import SignOut from "../pages/SignOut";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Unauthorized from "../pages/Unauthorized";
import NotFound from "../pages/NotFound";
import MainLayout from "../layouts/MainLayout";
import AuthenticatedLayout from "../layouts/AuthenticatedLayout";

const router = createBrowserRouter(
    createRoutesFromElements(
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route element={<AuthenticatedLayout />} >
                    <Route path="/profile" element={<Profile />} />
                </Route>
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp/>} />
                <Route path="/unauthorized" element={<Unauthorized />} />
                <Route path="*" element={<NotFound />} />
            </Route>
    )
);

const Router = () => {

    return (
        <RouterProvider router={router} />
    );
};

export default Router;