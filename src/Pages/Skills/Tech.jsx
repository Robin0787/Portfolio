
import bootstrap from "../../assets/technologies/bootstrap.png";
import css from "../../assets/technologies/css.png";
import git from "../../assets/technologies/git.png";
import github from "../../assets/technologies/github.png";
import html from "../../assets/technologies/html.png";
import javascript from "../../assets/technologies/javascript.png";
import mongodb from "../../assets/technologies/mongodb.png";
import nodejs from "../../assets/technologies/nodejs.png";
import reactjs from "../../assets/technologies/reactjs.png";
import tailwind from "../../assets/technologies/tailwind.png";

import BallCanvas from "../../Canvas/Ball";
import SectionWrapper from "../../hoc/SectionWrapper";

const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS",
      icon: css,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "github",
      icon: github,
    },
  ];


const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");