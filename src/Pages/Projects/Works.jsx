import { motion } from "framer-motion";
import { BsArrowRightShort, BsGithub } from 'react-icons/bs';
import { Tilt } from "react-tilt";
import Container from "../../Components/Container";
import { Caption } from "../../Components/Typography/Typography";
import { fadeIn, textVariant } from "../../Utils/motion";
import collegeNavigator from "../../assets/projects/college_navigator.png";
import lotusLight from "../../assets/projects/lotusLight.png";
import sherlock from "../../assets/projects/sherlock.png";
import siteSaver from "../../assets/projects/site_saver.png";
import { styles } from "../Styles";

const projects = [
  {
    name: "SHERLOCK",
    description:
      "A school management website has an admin, instructor, and student dashboard. Admin has the authority to control instructors of the school, instructor can control students, and students can make requests for their results to the school.",
    features: [
      'User Registration and Login by email & password.', 'Login as Instructor or Student',
      "Admin Dashboard", "Instructor Dashboard", "Student Dashboard", 'Accept login of instructors and students', "Add current students", "Edit and Delete current students"
    ],
    tags: [
      {
        name: "React",
        color: "text-blue-600",
      },
      {
        name: "Tailwind",
        color: "text-red-600",
      },
      {
        name: "Firebase",
        color: "text-yellow-600",
      },
      {
        name: "MongoDB",
        color: "text-green-600",
      },
      {
        name: "Express",
        color: "text-yellow-600",
      }
    ],
    image: sherlock,
    source_code_link: "https://github.com/Robin0787/School_Management/",
    live_website_link: "https://school-management-1203a.web.app/"
  },
  {
    name: "Lotus Light Studio",
    description:
      "An E-learning website that offers a variety of photography classes for students. Has an admin, instructor, and student dashboard.",
    features: [
      'Admin dashboard.', 'Instructor dashboard.', 'Student dashboard.', "Change the role of instructors and students", 'Make Payment with Stripe.', 'User Authentication using Firebase. ', "Add and Delete preferred classes"
    ],
    tags: [
      {
        name: "React",
        color: "text-blue-600",
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
        name: "MongoDB",
        color: "text-green-600",
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
    name: "College Navigator",
    description:
      "A full-stack website for taking admission to different colleges. Students can book an admission seat by filling out a booking form.",
    features: [
      'User Registration and Login by email & password.', 'Can Search colleges by their name.', 'Can book seat for admission.', "Can write a review on specific college."
    ],
    tags: [
      {
        name: "React",
        color: "text-blue-600",
      },
      {
        name: "Tailwind",
        color: "text-sky-600",
      },
      {
        name: "Firebase",
        color: "text-yellow-600",
      },
      {
        name: "Express",
        color: "text-yellow-600",
      },
      {
        name: "MongoDB",
        color: "text-green-600",
      }
    ],
    image: collegeNavigator,
    source_code_link: "https://github.com/Robin0787/College-Navigator",
    live_website_link: "https://college-navigator-101.web.app/"
  },
  {
    name: "Site Saver",
    description:
      "A full-stack website for saving your favorite websites for further use.",
    features: [
      'Creating categories', "Adding websites", "Deleting categories", "Deleting websites"
    ],
    tags: [
      {
        name: "React",
        color: "text-blue-600",
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
        name: "MongoDB",
        color: "text-green-600",
      }
    ],
    image: siteSaver,
    source_code_link: "https://site-saver.netlify.app/",
    live_website_link: "https://site-saver.netlify.app/"
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
        <div className='relative w-full h-[230px] img-wrapper'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-lg object-center'
          />
          <div className='absolute inset-0 flex justify-end gap-0 card-img_hover'>
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