import GridBackground from "../GridBackground";


const Banner = () => {
    return (
        <article className="sticky text-white inset-0 flex h-screen w-full flex-col justify-center py-28"
        >
            <GridBackground client:visible />
            <div className="flex flex-col items-center justify-center">
                <h1
                    className="text-center text-5xl sm:text-5xl font-bold leading-tight text-neutrals-50 md:text-7xl md:leading-tight lg:text-8xl lg:leading-tight"
                >
                    Programming<br />and Design<br />from the Future
                </h1>
                <button
                    className={`text-base sm:text-lg lg:text-xl mt-8 md:mt-12 py-3 px-4 md:px-6 md:py-4 lg:px-8 bg-white text-[#140233] border hover:bg-[#140233] duration-500 hover:text-white hover:tracking-[2px]`}
                >
                    Dig into my universe
                </button>
            </div>
        </article>
    );
};

export default Banner;