import { BsDiscord, BsGithub, BsTwitter } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { FiLinkedin } from 'react-icons/fi';

const SocialLinks = () => {
    const classes = `p-3 rounded-full outline outline-1 outline-gray-200 transform hover:scale-125  hover:outline-blue-400 cursor-pointer duration-300`
    return (
        <ul className="flex justify-center md:justify-start items-center gap-3 md:gap-5 xl:gap-8 my-4">
           <a target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/robin0787/" className={`${classes} hover:scale-115`}>
            <FiLinkedin size={18} />
           </a>
           <a target='_blank' rel='noreferrer' href="https://web.facebook.com/robinhossen636" className={`${classes} hover:scale-115`}>
            <FaFacebook size={18} />
           </a>
           <a target='_blank' rel='noreferrer' href="https://github.com/Robin0787/" className={`${classes} hover:scale-115`}>
            <BsGithub size={18} />
           </a>
           <a target='_blank' rel='noreferrer' href="https://twitter.com/robinhossen636"  className={`${classes} hover:scale-115`}>
            <BsTwitter size={18} />
           </a>
           <a target='_blank' rel='noreferrer' href="https://discord.gg/Skau2wmZ"  className={`${classes} hover:scale-115 `}>
            <BsDiscord size={18}/>
           </a>
        </ul>
    );
};

export default SocialLinks;