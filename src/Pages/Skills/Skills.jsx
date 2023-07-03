import { motion } from "framer-motion";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import css from "../../assets/technologies/css.png";
import git from "../../assets/technologies/git.png";
import html from "../../assets/technologies/html.png";
import javascript from "../../assets/technologies/javascript.png";
import mongodb from "../../assets/technologies/mongodb.png";
import nodejs from "../../assets/technologies/nodejs.png";
import reactjs from "../../assets/technologies/reactjs.png";
import tailwind from "../../assets/technologies/tailwind.png";

import "react-vertical-timeline-component/style.min.css";

import { textVariant } from "../../Utils/motion";
import SectionWrapper from "../../hoc/SectionWrapper";
import { styles } from "../Styles";



const technologies = [
    {
        title: "HTML",
        icon: html,
        iconBg: "#383E56",
        date: "January 2022",
    },
    {
        title: "CSS",
        icon: css,
        iconBg: "#E6DEDD",
        date: "March 2022",
    },
    {
        title: "Git",
        icon: git,
        iconBg: "#383E56",
        date: "April 2022",
    },
    {
        title: "JavaScript",
        icon: javascript,
        iconBg: "#E6DEDD",
        date: "June 2022",
    },
    {
        title: "React",
        icon: reactjs,
        iconBg: "#E6DEDD",
        date: "August 2022",
    },
    {
        title: "tailwind",
        icon: tailwind,
        iconBg: "#E6DEDD",
        date: "January 2023",
    },
    {
        title: "Node.js",
        icon: nodejs,
        iconBg: "#E6DEDD",
        date: "March 2023",
    },
    {
        title: "Express.js",
        icon: nodejs,
        iconBg: "#E6DEDD",
        date: "April 2023",
    },
    {
        title: "MongoDB",
        icon: mongodb,
        iconBg: "#E6DEDD",
        date: "May 2023",
    }
];

const ExperienceCard = ({ technology }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: "#1d1836",
                color: "#fff",
                width: '100px',
                margin: '0 auto'
            }}
            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            date={technology.date}
            iconStyle={{ background: technology.iconBg }}
            icon={
                <div className='flex justify-center items-center w-full h-full'>
                    <img
                        src={technology.icon}
                        alt={technology.title}
                        className='w-[60%] h-[60%] object-contain'
                    />
                </div>
            }
        >
            <div>
                <h3 className='text-gray-100 text-[24px] font-bold'>{technology.title}</h3>
            </div>
        </VerticalTimelineElement>
    );
};

const Skills = () => {
    return (
        <section className="bg-[#140233] sticky pt-16 py-10 overflow-hidden">
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center`}>
                    What I have done so far
                </p>
                <h2 className={`${styles.sectionHeadText} text-center`}>
                    Work Experience.
                </h2>
            </motion.div>

            <div className=' flex flex-col'>
                <VerticalTimeline>
                    {technologies.map((technology, index) => (
                        <ExperienceCard
                            key={`technology-${index}`}
                            technology={technology}
                        />
                    ))}
                </VerticalTimeline>
            </div>
        </section>
    );
};

export default SectionWrapper(Skills, "skills");