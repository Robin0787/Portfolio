import { motion } from "framer-motion";
import { BsArrowRightShort, BsGithub } from 'react-icons/bs';
import { Tilt } from "react-tilt";
import Container from "../../Components/Container";
import { Caption } from "../../Components/Typography/Typography";
import { fadeIn, textVariant } from "../../Utils/motion";
import bistroBoss from "../../assets/projects/bistroBoss.png";
import jungleToys from "../../assets/projects/jungleToys.png";
import lotusLight from "../../assets/projects/lotusLight.png";
import { styles } from "../Styles";

const projects = [
  {
    name: "Lotus Light Studio",
    description:
      "An E-learning website that offers a variety of photography classes for students. Has an admin, instructor, and student dashboard.",
    features: [
      'Admin, Instructor and Student dashboard.', 'Payment Integration with Stripe.', 'User Authentication using Firebase. '
    ],
    tags: [
      {
        name: "React",
        color: "text-blue-600",
      },
      {
        name: "MongoDB",
        color: "text-green-600",
      },
      {
        name: "Tailwind",
        color: "text-sky-600",
      },
      {
        name: "Express",
        color: "text-yellow-600",
      },
      {
        name: "Stripe",
        color: "text-red-500",
      }
    ],
    image: lotusLight,
    source_code_link: "https://github.com/Robin0787/LotusLight_Studio",
    live_website_link: "https://lotus-light-studio.web.app/"
  },
  {
    name: "Jungle Toys",
    description:
      "An e-commerce type website for purchasing and adding toys for kids. Implemented authenticatio and secure storage for user data.",
    features: [
      'User Registration and Login by email & password.', 'Showing and adding toys for sell.', 'Updating and deleting added toys.'
    ],
    tags: [
      {
        name: "React",
        color: "text-blue-600",
      },
      {
        name: "MongoDB",
        color: "text-green-600",
      },
      {
        name: "Tailwind",
        color: "text-sky-600",
      },
      {
        name: "Express",
        color: "text-yellow-600",
      }
    ],
    image: jungleToys,
    source_code_link: "https://github.com/Robin0787/Jungle-Toys",
    live_website_link: "https://jungle-toys.web.app/"
  },
  {
    name: "Bistro Boss",
    description:
      "A full-stack website that offers multiple food items for users. Admin dashboard for admin an user dashboard for user. ",
    features: [
      'Admin, and User dashboard.', 'Payment Integration with Stripe.', 'User Authentication using Firebase'
    ],
    tags: [
      {
        name: "React",
        color: "text-blue-600",
      },
      {
        name: "MongoDB",
        color: "text-green-600",
      },
      {
        name: "Tailwind",
        color: "text-sky-600",
      },
      {
        name: "Express",
        color: "text-yellow-600",
      },
      {
        name: "Stripe",
        color: "text-red-500",
      }
    ],
    image: bistroBoss,
    source_code_link: "https://github.com/Robin0787/Bistro-boss",
    live_website_link: "https://bistro-boss-9ee8c.web.app/"
  },
];

const ProjectCard = ({
  index,
  name,
  description,
  features,
  tags,
  image,
  source_code_link,
  live_website_link
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary shadow-xl shadow-blue-950 p-5 rounded-2xl  w-full '
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />
          <div className='absolute inset-0 flex justify-end gap-0  card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className=' p-2 rounded-full cursor-pointer'
            >
              <BsGithub size={30} className="bg-gray-100 text-gray-700 rounded-full p-1  hover:bg-gray-600 hover:text-gray-100 duration-300"/>
            </div>
            <div
              onClick={() => window.open(live_website_link, "_blank")}
              className=' p-2 rounded-full cursor-pointer'
            >
             <BsArrowRightShort size={30} className="bg-gray-100 text-blue-900 rounded-full p-1 outline outline-0 outline-gray-100 hover:outline-2 duration-100"/>
            </div>
          </div>
        </div>
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-3 text-gray-400 text-[14px] text-justify'>{description}</p>
        </div>
        <ul className="my-6 list-none text-gray-300 text-[13px] space-y-1">
          {features?.map((feature, index) => (
            <li key={`${feature}-${index}`}
              className="flex gap-3 items-center "
            >
              <BsArrowRightShort size={20}/>
              {feature}
            </li>
          ))}
        </ul>

        <div className='mt-4 flex flex-wrap justify-between items-center gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <section id="projects" className="bg-[#140233] py-10 md:py-20 overflow-hidden">
      <Container>
        <motion.div variants={textVariant()}>
          <Caption>My work</Caption>
          <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
        </motion.div>
        <div className='w-full flex'>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-3 text-gray-300 text-[17px] max-w-3xl leading-[30px] text-justify'
          >
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described with
            links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </motion.p>
        </div>
        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10'>
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </Container>
    </section>
  );
};

// export default StarWrapper(Works, "projects");
export default Works;