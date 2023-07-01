import Banner from "../../Components/Banner/Banner";
// import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import About from "../About/About";
import Projects from "../Projects/Projects";

const Home = () => {
    return (
        <section>
            <Navbar />
            <Banner />
            <About />
            <Projects />
        </section>
    );
};

export default Home;