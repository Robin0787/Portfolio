import AOS from 'aos';
import 'aos/dist/aos.css';
import Container from "../../Components/Container";
import { Caption, Paragraph } from "../../Components/Typography/Typography";

const Projects = () => {
    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 400, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });
    return (
        <section id="projects" className="relative bg-[#140233]  text-white pt-20 h-screen w-full overflow-x-hidden ">
            <Container >
                <Caption data-aos="fade-down" data-aos-delay={300}>Projects</Caption>
                <Paragraph data-aos="fade-left" data-aos-delay={400}>Welcome to the projects section of my portfolio, where I showcase my web development work. Here, you'll find a collection of projects I've completed, demonstrating my skills in front-end and back-end development. Each project represents a unique challenge I undertook, utilizing modern technologies, responsive design, and intuitive user experiences. From visually stunning websites to interactive web applications, I invite you to explore my projects and see firsthand the craftsmanship and attention to detail I bring to each endeavor. Whether you're looking for inspiration or seeking a reliable web developer, I hope my portfolio exhibits the passion and dedication I have for creating impactful online experiences. Take a moment to browse through my projects and feel free to reach out if you have any questions or opportunities for collaboration. Enjoy!</Paragraph>
                <Container />
            </Container>
        </section>
    );
};

export default Projects;