import { Outlet } from "react-router-dom";
import '../App.css'
import Navbers from "../Component/Nabver/Navbers/Navbers"
import Header from "../Sections/Header";
import Footer from "../Sections/Footer";
import Hero from "../Sections/Hero";

const Home = () => {
    return (
        <div className="   ">
            <Hero />
            <Header />
            <Navbers />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Home;