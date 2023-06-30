import { motion } from "framer-motion";
import EarthCanvas from "../../Components/Earth/Earth";
import { slideIn } from "../../Utils/motion";
const About = () => {
    return (
        <section id="about"
            className="sticky bg-[#140233] text-white inset-1 h-[100vh] w-full flex-col justify-center py-10 mb-20">
            <article className="md:flex justify-between items-center">
                <div className="md:w-1/2">
                <motion.div 
                    variants={slideIn('left', 'tween', 5, 1)}  
                >
                    <h2 className="py-10 border text-5xl h-[550px] text-blue-700">
                        <EarthCanvas />
                    </h2>
                </motion.div>
                </div>
                <div className="md:w-1/2">
                <motion.div variants={slideIn('right', 'tween', 5, 1)}  >
                    <h2 className="py-10 border text-5xl">Right</h2>
                </motion.div>
                </div>
            </article>
        </section>
    )
};

export default About;