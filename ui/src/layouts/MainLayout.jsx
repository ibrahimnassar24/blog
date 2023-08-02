import { Outlet} from "react-router-dom";
import NavBar from "../components/NavBar";

const MainLayout = () => {

    return (
        <>
        <header>
            <NavBar />
        </header>
        <main className="container">
            <Outlet />
        </main>
        </>
    );
};

export default MainLayout;