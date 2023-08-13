import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import logo from "../../assets/logos/logo.png";
const Footer = () => {
    return (
        <section className='bg-black text-gray-200 py-24 mx-auto'>
            <article className='w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[3fr_1fr_1fr] 
            lg:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-12'>
                <div className='space-y-5'>
                    <div className='md:flex items-center gap-4 text-center sm:text-left'>
                        <img src={logo} alt="" className='h-12 w-12 mx-auto sm:mx-0 rounded-full' />
                        <h2 className="text-2xl font-bold">Robin Hossen</h2>
                    </div>
                    <p className="text-md text-center sm:text-justify text-gray-400">Explore, collaborate, contact. Let's bring your web development ideas to life. Thank you for visiting!</p>
                    <div className='flex items-center justify-center sm:justify-start gap-4'>
                    <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/robin0787/' className='bg-gray-100  duration-300 p-2 cursor-pointer rounded-full text-blue-500 hover:bg-black hover:ring ring-white hover:text-white'>
                            <FaLinkedinIn size={20} /></a>
                        <a target='_blank' rel='noreferrer' href='https://github.com/Robin0787'
                            className='bg-gray-100 duration-300 p-2 cursor-pointer rounded-full text-gray-600 hover:bg-black hover:ring ring-white hover:text-white '>
                            <FaGithub size={20} /></a>
                        <a target='_blank' rel='noreferrer' href='https://web.facebook.com/robinhossen636/' className='bg-gray-100 duration-300 p-2 cursor-pointer rounded-full text-blue-500 hover:bg-black hover:ring ring-white hover:text-white'>
                            <FaFacebook size={20} /></a>
                        <a target='_blank' rel='noreferrer' href='https://twitter.com/Mohamma19904459' className='bg-gray-100  duration-300 p-2 cursor-pointer rounded-full text-blue-500 hover:bg-black hover:ring ring-white hover:text-white'>
                            <FaTwitter size={20} /></a>
                    </div>
                </div>
                <div className='space-y-5 text-center sm:text-left'>
                <h2 className="text-xl">Services</h2>
                    <ul className='list-none space-y-3 text-gray-400'>
                        <li className='whitespace-pre'>Web Development</li>
                        <li className='whitespace-pre'>Front-End Development</li>
                        <li className='whitespace-pre'>Back-End Development</li>
                        <li className='whitespace-pre'>MERN Stack</li>
                    </ul>
                </div>
                <div className='space-y-5 text-center sm:text-left'>
                    <h2 className="text-xl">Menu</h2>
                    <ul className='list-none space-y-3 text-gray-400 flex flex-col'>
                        <a href="#">Home</a>
                        <a href="about">About</a>
                        <a href="skills">Skills</a>
                        <a href="#projects">Projects</a>
                    </ul>
                </div>
                <div className='space-y-5 text-center sm:text-left'>
                    <h2 className="text-xl">Social</h2>
                    <ul className='list-none space-y-3 text-gray-400 flex flex-col'>
                        <a target='_blank' href="https://www.linkedin.com/in/robin0787/" rel="noreferrer">LinkedIn</a>
                        <a target='_blank' href="https://www.facebook.com/robinhossen636" rel="noreferrer">Facebook</a>
                        <a target='_blank' href="https://twitter.com/robinhossen636" rel="noreferrer">Twitter</a>
                        <a target='_blank' href="https://github.com/Robin0787" rel="noreferrer">GitHub</a>
                    </ul>
                </div>
                <div className='space-y-5 text-center sm:text-left'>
                    <h2 className="text-xl">Contact</h2>
                    <ul className='list-none space-y-3 text-gray-400'>
                        <li>mohammadrobin636@gmail.com</li>
                        <li className='whitespace-pre'>+880 17996 18056</li>
                        <li className='whitespace-pre'>+880 1616 194210</li>
                        <li className='whitespace-pre'>Brahmanbaria, Dhaka, Bangladesh</li>
                    </ul>
                </div>
            </article>
        </section>
    );
};

export default Footer;