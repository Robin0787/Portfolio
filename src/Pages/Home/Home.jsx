import { Toaster } from 'react-hot-toast';
import Banner from "../../Components/Banner/Banner";
import Navbar from "../../Components/Navbar/Navbar";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Overview from "../Overview/Overview";
import Works from "../Projects/Works";
const Home = () => {
    return (
        <section>
            <Navbar />
            <Banner />
            <About />
            <Overview />
            <Works />
            <Contact />
            <Footer />
            <Toaster />
        </section>
    );
};

export default Home;