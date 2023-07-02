
import Banner from "../../Components/Banner/Banner";
import Navbar from "../../Components/Navbar/Navbar";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Works from "../Projects/Works";


const Home = () => {
    return (
        <section>
            <Navbar />
            <Banner />
            <About />
            <Works />
            <Contact />
        </section>
    );
};

export default Home;