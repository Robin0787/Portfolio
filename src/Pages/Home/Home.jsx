import Banner from "../../Components/Banner/Banner";
import Header from "../../Components/Header/Header";
import About from "../About/About";
import Projects from "../Projects/Projects";

const Home = () => {
    return (
        <section>
            <Header />
            <Banner />
            <About />
            <Projects />
        </section>
    );
};

export default Home;