"use client";
import { motion } from "framer-motion";

const skills = [
    { name: "Python", icon: "/images/python.png" },
    { name: "FastAPI", icon: "/images/fastapi.png" },
    { name: "LangChain", icon: "/images/langchain.png" },
    { name: "LangGraph", icon: "/images/langraph.png" },
    { name: "Vector DB", icon: "/images/vectordb.jpg" },
    { name: "RAG", icon: "/images/rag.png" },
    { name: "React", icon: "/images/React.png" },
    { name: "Tailwind", icon: "/images/tailwind.png" },
    { name: "SQL", icon: "/images/sql.jpg" },
    { name: "JavaScript", icon: "/images/Javascript.jpg" },
    { name: "TypeScript", icon: "/images/Typescript.png" },
    { name: "HTML", icon: "/images/Html.png" },
    { name: "CSS", icon: "/images/Css.png" },
];

const Skills = () => {
    return (
        <section
            id="skills"
            className="relative my-28 py-20 text-center overflow-hidden
                 bg-gradient-to-b from-[#0a0a0a] via-[#141414] to-[#1a1a1a]
                 text-[#e0e0e0] rounded-3xl border border-[#1e90ff33]
                 shadow-[0_0_40px_#00ffff22]"
        >
            {/* Glowing background elements */}
            <motion.div
                animate={{ x: [0, 100, 0] }}
                transition={{ repeat: Infinity, duration: 30, ease: "easeInOut" }}
                className="absolute top-10 left-10 w-80 h-80 bg-[#00ffff22] blur-3xl rounded-full"
            />
            <motion.div
                animate={{ x: [0, -100, 0] }}
                transition={{ repeat: Infinity, duration: 35, ease: "easeInOut" }}
                className="absolute bottom-10 right-10 w-[26rem] h-[26rem] bg-[#1e90ff22] blur-3xl rounded-full"
            />

            <h2 className="relative text-5xl font-extrabold mb-14 tracking-wide text-[#00ffff] drop-shadow-[0_0_10px_#00ffffaa]">
                Skills
            </h2>

            {/* Horizontal animation only */}
            <div className="relative w-full overflow-hidden">
                <motion.div
                    className="flex space-x-12"
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "mirror",
                        duration: 35,
                        ease: "linear",
                    }}
                >
                    {[...skills, ...skills].map((skill, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 200, damping: 12 }}
                            className="flex flex-col items-center justify-center min-w-[140px]
                         p-6 rounded-2xl bg-[#ffffff05] backdrop-blur-md 
                         border border-[#00ffff22] 
                         hover:border-[#00ffffaa] hover:shadow-[0_0_25px_#00ffff55]
                         transition-all duration-300"
                        >
                            <motion.img
                                src={skill.icon}
                                alt={skill.name}
                                whileHover={{ scale: 1.15, rotate: 3 }}
                                transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                                className="h-16 w-16 object-contain mb-3 drop-shadow-[0_0_12px_#00ffff77]"
                            />
                            <p className="text-lg font-semibold tracking-wide text-[#00ffff]">
                                {skill.name}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
