"use client";
import { motion } from "framer-motion";

const projects = [
    {
        title: "OpsPilot — Smart Workflow Assistant",
        img: "/images/opspilot.png",
        desc: "OpsPilot automates workflow orchestration using LLM reasoning, API integration, and contextual task memory — enabling hands-free project management and operations.",
        link: "https://github.com/maria2469/Opspilot",
    },
    {
        title: "MediBot 0.2 — Vision + Voice AI Doctor",
        img: "/images/medibot.png",
        desc: "A multimodal AI agent capable of medical image analysis and voice conversation using Groq, ElevenLabs, and Gradio — bridging diagnostics and dialogue.",
        link: "https://github.com/maria2469/Medi_Bot-0.2",
    },
    {
        title: "LangGraph Chatbot — Contextual Reasoning",
        img: "/images/langgraph-chatbot.png",
        desc: "A real-time reasoning chatbot built with LangGraph, Streamlit, and FastAPI — showcasing persistent memory, contextual retrieval, and stateful thinking.",
        link: "https://github.com/maria2469/Langraph_chatbot",
    },
    {
        title: "YouTube AI Q&A — Conversational Video Search",
        img: "/images/youtubebot.png",
        desc: "An AI-driven Chrome extension that turns YouTube into a conversational experience — ask any question and get real-time contextual answers from transcripts.",
        link: "https://github.com/maria2469/Youtube-Chatbot-Extension",
    },
    {
        title: "DramaBot — Emotionally Intelligent Agent",
        img: "/images/dramabot.png",
        desc: "DramaBot combines emotional voice AI, narrative generation, and real-time empathy modeling — transforming conversations into creative performances.",
        link: "https://drama-queen.vercel.app/",
    },
];

const Projects = () => {
    const doubled = [...projects, ...projects];

    return (
        <section
            id="projects"
            className="relative my-28 py-20 px-8 overflow-hidden 
                 bg-gradient-to-b from-[#0a0a0a] via-[#141414] to-[#1a1a1a]
                 border border-[#1e90ff33] rounded-3xl shadow-[0_0_40px_#00ffff33]"
        >
            {/* Subtle background movement */}
            <motion.div
                animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
                transition={{ repeat: Infinity, duration: 30, ease: "easeInOut" }}
                className="absolute top-10 left-10 w-[25rem] h-[25rem] bg-[#00ffff22] blur-3xl rounded-full"
            />
            <motion.div
                animate={{ x: [0, -50, 0], y: [0, 40, 0] }}
                transition={{ repeat: Infinity, duration: 40, ease: "easeInOut" }}
                className="absolute bottom-10 right-10 w-[28rem] h-[28rem] bg-[#7b4ae244] blur-3xl rounded-full"
            />

            <h2 className="text-4xl font-bold mb-16 tracking-wide text-center text-[#00ffff] drop-shadow-[0_0_10px_#00ffffaa]">
                Featured Projects
            </h2>

            <div className="relative w-full overflow-hidden">
                <motion.div
                    className="flex gap-10"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "mirror",
                        duration: 20,
                        ease: "linear",
                    }}
                >
                    {doubled.map((project, index) => (
                        <motion.div
                            key={`${project.title}-${index}`}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 0 25px rgba(0, 255, 255, 0.25)",
                            }}
                            transition={{ type: "spring", stiffness: 150, damping: 15 }}
                            className="min-w-[360px] md:min-w-[400px] bg-[#0f0f10] backdrop-blur-md
                         border border-[#1e90ff33] rounded-2xl overflow-hidden 
                         shadow-[0_0_20px_#00000055] hover:shadow-[0_0_25px_#00ffff33]
                         transition-all duration-500 cursor-pointer"
                        >
                            <img
                                src={project.img}
                                alt={project.title}
                                className="w-full h-56 object-cover rounded-t-2xl border-b border-[#1e90ff22]"
                            />
                            <div className="p-6 text-left">
                                <h3 className="text-2xl font-semibold text-[#00ffff] mb-3">
                                    {project.title}
                                </h3>
                                <p className="text-[#d0d0d0] text-sm leading-relaxed mb-5">
                                    {project.desc}
                                </p>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block px-5 py-2 font-semibold text-sm 
                             bg-[#1e90ff33] hover:bg-[#00ffff] hover:text-[#0a0a0a] 
                             text-[#00ffff] rounded-xl border border-[#00ffff55]
                             shadow-[0_0_15px_#00ffff55] hover:shadow-[0_0_25px_#00ffffaa]
                             transition-all"
                                >
                                    View Project
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Edge fade effects */}
                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#0a0a0a] to-transparent pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#0a0a0a] to-transparent pointer-events-none"></div>
            </div>
        </section>
    );
};

export default Projects;
