import AOS from 'aos';
import 'aos/dist/aos.css';
import { BsDiscord, BsGithub, BsTwitter } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { FiLinkedin } from 'react-icons/fi';


const SocialLinks = () => {

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

    const classes = `p-3 rounded-full ring-2 ring-gray-200 transform  cursor-pointer duration-300 group`
    return (
        <ul data-aos="fade-left" data-aos-delay={500}  className="flex justify-center md:justify-start items-center gap-3 md:gap-5 xl:gap-8 my-4">
           <a  target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/robin-web-dev/" className={`${classes}`}>
            <FiLinkedin size={18} className="group-hover:scale-125 duration-300"/>
           </a>
           <a target='_blank' rel='noreferrer' href="https://web.facebook.com/robinhossen636" className={`${classes}`}>
            <FaFacebook size={18} className="group-hover:scale-125 duration-300" />
           </a>
           <a target='_blank' rel='noreferrer' href="https://github.com/Robin0787/" className={`${classes} `}>
            <BsGithub size={18} className="group-hover:scale-125 duration-300" />
           </a>
           <a target='_blank' rel='noreferrer' href="https://twitter.com/robinhossen636"  className={`${classes}`}>
            <BsTwitter size={18} className="group-hover:scale-125 duration-300" />
           </a>
           <a target='_blank' rel='noreferrer' href="https://discord.gg/Skau2wmZ"  className={`${classes} `}>
            <BsDiscord size={18} className="group-hover:scale-125 duration-300"/>
           </a>
        </ul>
    );
};

export default SocialLinks;