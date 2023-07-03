import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from "framer-motion";
import EarthCanvas from "../../Components/Earth/Earth";
import SocialLinks from "../../Components/SocialLinks";
import TypingHeadings from "../../Components/TypingHeadings";
import { Caption, Paragraph } from "../../Components/Typography/Typography";
import { slideIn } from "../../Utils/motion";

const About = () => {

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

    const headings = [
        'Junior Web Developer',
        "Programmer",
        'MERN Stack Developer',
        'Problem solver',
        "JavaScript Developer",
        "Passionate Learner"
    ];

    return (
        <section id="about"
            className="bg-[#060918] text-white lg:h-screen w-full flex-col justify-center py-10  overflow-hidden">
            <article className="md:flex justify-between items-center h-full text-center md:text-left">
                <div  className="md:w-1/2">
                    <motion.div variants={slideIn('left', 'tween', 0.2, 1)}>
                        <div className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[600px]">
                            <EarthCanvas />
                        </div>
                    </motion.div>
                </div>
                <div  className="md:w-1/2 p-4 md:pl-0 md:pr-6 xl:pr-8">
                    <motion.div variants={slideIn('right', 'tween', 0.2, 1)}  >
                        <Caption>About</Caption>
                        <TypingHeadings
                            client:visible
                            headings={headings}
                        />
                        <Paragraph>
                            I am Robin, a passionate Junior Web Developer bringing you
                            <span className="text-gray-200"> programming and development from the future
                            </span >. My expertise is developing next-level websites and web applications including backend development.
                        </Paragraph>
                        <SocialLinks />
                    </motion.div>
                </div>
            </article>
        </section>
    )
};
export default About;