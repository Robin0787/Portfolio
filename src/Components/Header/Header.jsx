import { Link } from 'react-router-dom';
import style from "../ButtonLink.module.css";

const Header = () => {
    return (
        <article className="absolute top-0 w-full flex justify-between items-center px-4 sm:px-6 lg:px-20 py-4 z-10 bg-transparent  text-white">
        <div className="flex justify-center items-center gap-5 ">
            <Link to={'/#about'}>About</Link>
            <Link to={'/#projects'}>Projects</Link>
            <Link>Contact</Link>
        </div>
        <div className="hidden md:block">
            <h2 className="text-xl tracking-[2px]">Welcome To My Portfolio</h2>
        </div>
        <div>
        <button
               className={`${style.btn}`}
            >
                Hit me up
            </button>
        </div>
    </article>
    );
};

export default Header;