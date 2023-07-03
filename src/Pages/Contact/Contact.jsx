import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import ContactForm from '../../Components/ContactForm/ContactForm';
import Container from "../../Components/Container";
import { Caption } from "../../Components/Typography/Typography";
import { fadeIn, textVariant } from "../../Utils/motion";
import contactAnimation from "../../assets/contactAnimation.json";
import { styles } from "../Styles";

const Contact = () => {
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
        <section id='contact' className="relative bg-[#140233] text-white pt-20 w-full overflow-x-hidden ">
            <Container >
                <motion.div variants={textVariant()}>
                    <Caption>Get in touch</Caption>
                    <h2 className={`${styles.sectionHeadText}`}>Contact.</h2>
                </motion.div>
                <article className='w-full flex'>
                    <motion.p
                        variants={fadeIn("", "", 0.1, 1)}
                        className='mt-3 text-gray-300 text-[17px] max-w-3xl leading-[30px] text-justify'
                    >
                        Let's Connect! Reach out through the Contact Me section to discuss your web development needs, collaborations, or any inquiries. I'm excited to hear from you and explore how we can work together to bring your ideas to life.
                    </motion.p>
                </article>
                <article className='flex flex-col md:flex-row justify-between items-center gap-5 p-10'>
                    <div className='md:w-1/2'>
                        <div className='p-10'>
                            <Lottie animationData={contactAnimation} loop={true} />
                        </div>
                    </div>
                    <div className='md:w-1/2 w-full pb-10 md:pb-0'>
                        <ContactForm />
                    </div>
                </article>
            </Container>
        </section>
    );
};

export default Contact;