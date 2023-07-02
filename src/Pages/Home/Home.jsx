
import Banner from "../../Components/Banner/Banner";
import Navbar from "../../Components/Navbar/Navbar";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Works from "../Projects/Works";

const Home = () => {
    
    return (
        <section>
            <Navbar />
            <Banner />
            <About />
            <Works />
            <Projects />
        </section>
    );
};

export default Home;