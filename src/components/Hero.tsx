"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

const Hero = () => {
    const [line1, setLine1] = useState("");
    const fullLine1 = "Hi, I’m Maria Noor";

    useEffect(() => {
        const typeSpeed = 70;   // ms per character while typing
        const eraseSpeed = 40;  // ms per character while erasing
        const pauseAfterType = 1800;  // ms pause after fully typed
        const pauseAfterErase = 500; // ms pause after fully erased

        let i = 0;
        let isErasing = false;
        let timeout: ReturnType<typeof setTimeout>;

        const tick = () => {
            if (!isErasing) {
                // Typing forward
                if (i <= fullLine1.length) {
                    setLine1(fullLine1.substring(0, i));
                    i++;
                    if (i > fullLine1.length) {
                        // Finished typing — pause then start erasing
                        timeout = setTimeout(() => {
                            isErasing = true;
                            timeout = setTimeout(tick, eraseSpeed);
                        }, pauseAfterType);
                        return;
                    }
                    timeout = setTimeout(tick, typeSpeed);
                }
            } else {
                // Erasing backward
                if (i >= 0) {
                    setLine1(fullLine1.substring(0, i));
                    i--;
                    if (i < 0) {
                        // Finished erasing — pause then start typing again
                        isErasing = false;
                        i = 0;
                        timeout = setTimeout(tick, pauseAfterErase);
                        return;
                    }
                    timeout = setTimeout(tick, eraseSpeed);
                }
            }
        };

        timeout = setTimeout(tick, typeSpeed);

        return () => clearTimeout(timeout);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { 
                type: "spring", 
                stiffness: 80,
                damping: 15
            } 
        }
    };

    return (
        <section
            id="hero"
            className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-screen px-6 sm:px-12 py-24 overflow-hidden bg-gradient-to-b from-[#060608] via-[#0d0d12] to-[#060608]"
        >
            {/* Ambient neon backdrop glows */}
            <motion.div
                animate={{ 
                    x: [0, 40, -20, 0], 
                    y: [0, -30, 20, 0],
                    scale: [1, 1.1, 0.9, 1]
                }}
                transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
                className="absolute top-1/4 left-[5%] w-[24rem] h-[24rem] bg-[#00ffff0d] blur-[100px] rounded-full pointer-events-none will-change-transform"
            />
            <motion.div
                animate={{ 
                    x: [0, -50, 30, 0], 
                    y: [0, 40, -30, 0],
                    scale: [1, 0.9, 1.1, 1]
                }}
                transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
                className="absolute bottom-1/4 right-[5%] w-[28rem] h-[28rem] bg-[#7b4ae212] blur-[120px] rounded-full pointer-events-none will-change-transform"
            />

            {/* Subtle background grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            {/* Text Section */}
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="lg:col-span-7 relative z-10 text-center lg:text-left flex flex-col items-center lg:items-start justify-center space-y-6"
            >
                {/* Floating Tagline */}
                <motion.div 
                    variants={itemVariants}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00ffff0d] border border-[#00ffff22] text-[#00ffff] text-xs font-semibold tracking-wider uppercase shadow-[0_0_15px_#00ffff0a]"
                >
                    <Sparkles className="w-3.5 h-3.5 text-[#00ffff] animate-pulse" />
                    <span>Agentic AI & Automation Engineer</span>
                </motion.div>

                {/* Streaming Main Heading */}
                <div className="w-full text-center lg:text-left">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#f3f4f6] leading-tight">
                        {line1.substring(0, 8)}
                        {line1.length > 8 && (
                            <span className="text-[#00ffff] drop-shadow-[0_0_15px_#00ffff55] hover:text-[#ff5f6d] transition-colors duration-500 cursor-pointer">
                                {line1.substring(8)}
                            </span>
                        )}
                        <span className="text-[#00ffff] animate-pulse font-light">|</span>
                    </h1>

                </div>

                {/* Subtitle — always visible, fades in once on mount */}
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
                    className="text-xl sm:text-2xl md:text-3xl text-[#ff5f6d] font-semibold leading-snug"
                >
                    Agentic systems, LLM orchestration & workflow automation
                </motion.p>

                {/* Expanded Subtext */}
                <motion.p
                    variants={itemVariants}
                    className="text-lg sm:text-xl text-[#a3a3a3] max-w-xl leading-relaxed"
                >
                    Building AI systems that reason, plan, and act — from multi-agent pipelines and RAG architectures to end-to-end workflow automation that delivers real business impact.
                </motion.p>

                {/* CTA Action Buttons */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4"
                >
                    <a
                        href="#projects"
                        className="group flex items-center gap-2 bg-[#00ffff] hover:bg-[#ff5f6d] hover:shadow-[0_0_25px_#ff5f6daa] text-[#0a0a0a] hover:text-white text-base sm:text-lg font-bold px-8 py-3 rounded-2xl transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
                    >
                        View Projects 
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-3 bg-[#0a0a0a05] text-[#b0b0b0] hover:text-[#00ffff] text-base sm:text-lg font-bold rounded-2xl border border-[#1e90ff33] hover:border-[#00ffff55] transition-all duration-300 cursor-pointer"
                    >
                        Let’s Connect
                    </a>
                </motion.div>
            </motion.div>

            {/* Robot display */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="lg:col-span-5 flex justify-center relative z-10 w-full"
            >
                <motion.div
                    animate={{ y: [0, -12, 0] }}
                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                    className="w-full max-w-md h-[300px] sm:h-[400px] md:h-[500px] rounded-3xl overflow-hidden border border-[#00ffc633] hover:border-[#00ffc6aa] bg-[#050507a0] backdrop-blur-md shadow-[0_0_40px_#00ffc61a] hover:shadow-[0_0_50px_#00ffc633] transition-all duration-500"
                >
                    <iframe
                        src="https://my.spline.design/greetingrobot-si1O8WmNrSfwOdljPAwrfemi/"
                        frameBorder="0"
                        width="100%"
                        height="100%"
                        loading="lazy"
                        title="3D Greeting Robot"
                        className="rounded-3xl"
                    ></iframe>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
