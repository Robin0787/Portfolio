import { motion } from "framer-motion";
import EarthCanvas from "../../Components/Earth/Earth";
import SocialLinks from "../../Components/SocialLinks";
import TypingHeadings from "../../Components/TypingHeadings";
import { Caption, Paragraph } from "../../Components/Typography/Typography";
import { slideIn } from "../../Utils/motion";


const About = () => {
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
            className="sticky bg-[#060918] text-white inset-1 h-screen w-full flex-col justify-center py-10 mb-20">
            <article className="md:flex justify-between items-center h-full text-center md:text-left">
                <div className="md:w-1/2">
                    <motion.div variants={slideIn('left', 'tween', 5, 1)}>                           
                    <div className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[600px]">
                    <EarthCanvas />
                    </div>
                    </motion.div>
                </div>
                <div className="md:w-1/2 p-4 md:pl-0 md:pr-6 xl:pr-8">
                    <motion.div variants={slideIn('right', 'tween', 5, 1)}  >
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