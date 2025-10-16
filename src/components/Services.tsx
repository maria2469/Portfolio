"use client";
import { motion } from "framer-motion";

const services = [
    {
        title: "Agentic AI Systems",
        desc: "I design and develop AI agents that can reason, plan, and act autonomously using LangChain, LangGraph, and LLM orchestration frameworks — ideal for automating complex decisions or workflows.",
    },
    {
        title: "Workflow Automation",
        desc: "I build end-to-end automation pipelines that connect APIs, databases, and AI reasoning layers — enabling seamless automation for intelligent business operations.",
    },
    {
        title: "Voice AI Solutions",
        desc: "I create conversational voice systems with natural speech input and output, enabling real-time human–AI interaction for assistants and support bots.",
    },
    {
        title: "RAG & Knowledge Systems",
        desc: "I implement Retrieval-Augmented Generation (RAG) pipelines with vector databases, allowing AI systems to reason over private data with accuracy and context awareness.",
    },
    {
        title: "Full-Stack AI Integration",
        desc: "I combine FastAPI, React, Tailwind, and SQL to deliver production-ready AI products — from intelligent backend APIs to polished, responsive interfaces.",
    },
];

const floatVariants = {
    initial: { y: 0 },
    animate: {
        y: [0, -12, 0],
        transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    },
};

const glowVariants = {
    animate: {
        boxShadow: [
            "0 0 10px rgba(0,255,255,0.3)",
            "0 0 25px rgba(0,255,255,0.6)",
            "0 0 10px rgba(0,255,255,0.3)",
        ],
        transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
    },
};

const Services = () => {
    return (
        <section
            id="services"
            className="relative my-28 py-24 overflow-hidden rounded-3xl 
                 bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#1a1a1a]
                 text-[#e0e0e0]"
        >
            {/* Floating background glow blobs */}
            <motion.div
                animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
                transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
                className="absolute top-10 left-10 w-80 h-80 bg-[#00ffff22] blur-3xl rounded-full"
            />
            <motion.div
                animate={{ x: [0, -100, 0], y: [0, 60, 0] }}
                transition={{ repeat: Infinity, duration: 24, ease: "easeInOut" }}
                className="absolute bottom-10 right-10 w-96 h-96 bg-[#1e90ff33] blur-3xl rounded-full"
            />

            <h2 className="text-5xl font-extrabold text-center mb-20 tracking-wide text-[#00ffff] drop-shadow-[0_0_20px_#00ffffaa]">
                My Expertise
            </h2>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-6 relative z-10">
                {services.map((service, i) => (
                    <motion.div
                        key={i}
                        variants={floatVariants}
                        initial="initial"
                        animate="animate"
                        className="group relative p-8 rounded-3xl border border-[#1e90ff33] 
                       bg-[#0f0f0f88] backdrop-blur-xl overflow-hidden 
                       cursor-pointer hover:border-[#00ffffaa]
                       transition-all duration-500"
                    >
                        {/* Rotating light ring */}
                        <motion.div
                            className="absolute -inset-[2px] rounded-3xl bg-gradient-to-r from-[#00ffff44] to-[#1e90ff44] blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                            animate={{
                                rotate: [0, 360],
                            }}
                            transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                        />

                        <motion.div variants={glowVariants} animate="animate">
                            <h3 className="text-2xl font-semibold mb-4 text-[#00ffff] group-hover:text-[#1e90ff] transition-all duration-300">
                                {service.title}
                            </h3>
                            <p className="text-[#cccccc] leading-relaxed">{service.desc}</p>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Services;
