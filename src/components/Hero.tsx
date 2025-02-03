import { motion } from "framer-motion";
import profilePic from "/images/profile.jpg"; // Correct path for images in the public folder


const Hero = () => {
    return (
        <section
            id="hero"
            className="grid grid-cols-1 md:grid-cols-2 items-center min-h-screen relative"
        >
            <div
                className="absolute inset-0 bg-cover bg-center opacity-30"
                style={{ backgroundImage: "url('/images/Hero-image.png')" }}
            ></div>
            <div className="flex justify-center relative">
                <motion.img
                    src={profilePic}
                    alt="Profile"
                    className="w-64 h-64 rounded-full shadow-lg border-4 border-purple-400"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                />
            </div>
            <div className="text-center md:text-left relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl font-extrabold text-purple-300"
                >
                    Hello, I'm Maria Noor
                </motion.h2>
                <p className="mt-4 text-xl text-gray-400">
                    Frontend Developer | Aspiring DevOps Specialist
                </p>
                <a
                    href="#projects"
                    className="mt-6 bg-purple-600 hover:bg-purple-700 text-lg px-6 py-2 rounded-2xl text-white transition-all inline-block"
                >
                    View Projects
                </a>
            </div>
        </section>
    );
};

export default Hero;
