"use client";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section
            id="hero"
            className="relative grid grid-cols-1 md:grid-cols-2 items-center min-h-screen px-8 overflow-hidden bg-gradient-to-b from-[#0A0A0A] via-[#1A1A1A] to-[#0A0A0A]"
        >
            {/* Subtle background texture */}
            <div
                className="absolute inset-0 bg-[url('/images/Hero-image.png')] bg-cover bg-center opacity-10 blur-sm"
                aria-hidden="true"
            ></div>

            {/* Robot display */}
            <div className="flex justify-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="w-full max-w-md h-[500px] rounded-3xl overflow-hidden border border-[#00FFC655] shadow-[0_0_40px_#00FFC644]"
                >
                    <iframe
                        src="https://my.spline.design/greetingrobot-si1O8WmNrSfwOdljPAwrfemi/"
                        frameBorder="0"
                        width="100%"
                        height="100%"
                        className="rounded-3xl"
                    ></iframe>
                </motion.div>
            </div>

            {/* Text Section */}
            <div className="relative z-10 text-center md:text-left mt-8 md:mt-0">
                <motion.h2
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-6xl font-extrabold text-[#EAEAEA]"
                >
                    Hi, I’m{" "}
                    <span className="text-[#00ffff]">Maria Noor</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="mt-4 text-xl text-[#A3A3A3] max-w-lg"
                >
                    AI Engineer specializing in{" "}
                    <span className="text-[#FF5F6D] font-semibold">
                        agentic systems, LLM orchestration, and workflow automation.
                    </span>{" "}
                    I build scalable, intelligent applications that reason, act, and evolve.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    <a
                        href="#projects"
                        className="mt-8 inline-block bg-[#00ffff] hover:bg-[#FF5F6D] hover:shadow-[0_0_25px_#00FFC6] text-[#0A0A0A] text-lg font-semibold px-8 py-3 rounded-2xl transition-all duration-300"
                    >
                        View Projects
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
