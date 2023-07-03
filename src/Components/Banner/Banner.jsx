import AOS from 'aos';
import 'aos/dist/aos.css';
import GridBackground from "../GridBackground";

const Banner = () => {
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
        <article data-aos="fade-down" className="sticky text-white inset-0 flex h-screen w-full flex-col justify-center py-28"
        >
            <GridBackground client:visible />
            <div className="flex flex-col items-center justify-center">
                <h1
                    className="text-center text-3xl sm:text-5xl font-bold leading-tight text-neutrals-50 md:text-7xl md:leading-tight lg:text-8xl lg:leading-tight"
                >
                    Programming<br />and Design<br />from the Future
                </h1>
                <a
                    href='/#projects'
                    className={`text-base sm:text-lg lg:text-xl mt-8 md:mt-12 py-3 px-4 md:px-6 md:py-4 lg:px-8 bg-white text-[#140233] border hover:bg-[#140233] duration-500 hover:text-white hover:tracking-[2px]`}
                >
                    Dig into my universe
                </a>
            </div>
        </article>
    );
};

export default Banner;