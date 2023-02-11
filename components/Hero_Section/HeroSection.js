import Navbar from "./Navbar"

const HeroSection = () => {
    return (
        <>
            <div className="w-full
            h-screen
            bg-gradient-to-r
            from-primary-blue
            via-purple-400
            to-blue-500
            background-animate 
            ">
                <Navbar />
                <div className="w-full px-10 text-center">
                    <div className="text-3xl font-thin sm:text-6xl text-white mt-20">Hello, I'm</div>
                    <div className="text-4xl sm:text-7xl text-white">P. Revanth Pershad</div>
                    <div className="sm:px-40 mt-10  px-5">
                        <div className="text-lg sm:text-2xl font-light text-white">
                            I am a web developer with a background in the MERN stack,
                            Next.js, Tailwind CSS, Android development, Flutter, and Unity 2D. I have also 
                            learned UI/UX and few other libraries.
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default HeroSection