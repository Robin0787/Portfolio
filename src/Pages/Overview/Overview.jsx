import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import Container from "../../Components/Container";
import { Caption } from "../../Components/Typography/Typography";
import { fadeIn, textVariant } from "../../Utils/motion";
import backend from "../../assets/services/backend.png";
import web from "../../assets/services/web.png";
import Tech from "../Skills/Tech";
import { styles } from "../Styles";

const services = [
    {
        title: "Web Development",
        icon: web,
    },
    {
        title: "MERN Stack",
        icon: backend,
    }
];



const ServiceCard = ({ index, title, icon }) => (
    <Tilt className=''>
        <motion.div
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className=' green-pink-gradient p-[1px] rounded-[20px] shadow-card '
        >
            <div
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className='bg-tertiary rounded-[20px] px-5 py-3 sm:py-5 sm:px-12   flex justify-evenly items-center flex-col gap-4 '
            >
                <img
                    src={icon}
                    alt='web-development'
                    className='w-16 h-16 object-contain'
                />

                <h3 className='text-white text-[14px] sm:text-[20px] font-bold text-center sm:whitespace-pre'>
                    {title}
                </h3>
            </div>
        </motion.div>
    </Tilt>
);

const Overview = () => {
    return (
        <section id="skills" className="bg-[#140233] text-white sticky inset-1 lg:h-screen pt-16 py-10 overflow-hidden z-0">
            <Container>
                <motion.div variants={textVariant()}>
                    <Caption>Overview</Caption>
                    <h2 className={styles.sectionHeadText}>Services & Skills</h2>
                </motion.div>
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className='mt-1 text-secondary text-[15px] max-w-3xl text-justify leading-[25px]'
                >
                    I showcase my expertise as a web developer. Offering a range of services including responsive web design, dynamic web application development, and proficiency in front-end and back-end technologies. Explore this section to discover how I can bring your web development projects to life.
                </motion.p>
                <article className="flex flex-col md:flex-row flex-grow gap-5 mt-5 md:mt-10 justify-between items-center">
                    <div className='flex flex-row md:flex-col gap-10 '>
                        {services.map((service, index) => (
                            <ServiceCard key={service.title} index={index} {...service} />
                        ))}
                    </div>
                    <div>
                        <Tech />
                    </div>
                </article>
            </Container>
        </section>
    );
};


export default Overview;