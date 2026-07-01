"use client";
import { motion } from "framer-motion";
import { Trophy, Target } from "lucide-react";

type Achievement = {
    title: string;
    subtitle: string;
    desc: string;
    details: string[];
    date: string;
};

const achievements: Achievement[] = [
    {
        title: "Winner, Problem Solving Competition",
        subtitle: "Tech Fest 2025 — University of Agriculture, Faisalabad",
        desc: "Placed 1st in a university-level problem solving competition, competing against fellow students on algorithmic and logical problem-solving tasks under time constraints.",
        details: [
            "Worked through a series of problem-solving challenges under strict time limits.",
            "Recognized for the accuracy and clarity of the approach used to reach solutions.",
            "Finished in 1st place among participating students at Tech Fest 2025."
        ],
        date: "2025",
    }
];

const Achievements = (): JSX.Element => {
    return (
        <section
            id="achievements"
            className="relative my-28 py-20 px-8 overflow-hidden 
            bg-gradient-to-b from-[#0a0a0a] via-[#141414] to-[#1a1a1a]
            border border-[#1e90ff33] rounded-3xl shadow-[0_0_40px_#00ffff33]"
        >
            {/* Background ambient lighting */}
            <motion.div
                animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
                className="absolute top-10 right-10 w-[24rem] h-[24rem] bg-[#00ffff11] blur-3xl rounded-full will-change-transform"
            />
            <motion.div
                animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
                transition={{ repeat: Infinity, duration: 35, ease: "easeInOut" }}
                className="absolute bottom-10 left-10 w-[26rem] h-[26rem] bg-[#7b4ae222] blur-3xl rounded-full will-change-transform"
            />

            <h2 className="text-4xl font-bold mb-16 tracking-wide text-center text-[#00ffff] drop-shadow-[0_0_10px_#00ffffaa]">
                Achievements
            </h2>

            <div className="max-w-4xl mx-auto">
                {achievements.map((ach, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{
                            scale: 1.02,
                            boxShadow: "0 0 30px rgba(0, 255, 255, 0.2)",
                        }}
                        transition={{ type: "spring", stiffness: 100, damping: 15 }}
                        className="bg-[#0f0f10] backdrop-blur-md border border-[#1e90ff33] 
                        rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-start gap-8
                        shadow-[0_0_20px_#00000055] transition-all duration-500 cursor-pointer"
                    >
                        <div className="flex-shrink-0 p-4 bg-[#1e90ff22] border border-[#00ffff55] rounded-2xl shadow-[0_0_15px_#00ffff44]">
                            <Trophy className="w-12 h-12 text-[#00ffff] drop-shadow-[0_0_10px_#00ffff]" />
                        </div>

                        <div className="flex-grow space-y-4 text-left">
                            <div className="flex justify-between items-start flex-wrap gap-2">
                                <div>
                                    <h3 className="text-2xl font-bold text-[#00ffff] tracking-wide">
                                        {ach.title}
                                    </h3>
                                    <h4 className="text-md text-[#1e90ff] font-medium mt-1">
                                        {ach.subtitle}
                                    </h4>
                                </div>
                                <span className="px-4 py-1 text-xs font-semibold uppercase tracking-wider text-[#00ffff] bg-[#00ffff22] rounded-full border border-[#00ffff55] shadow-[0_0_8px_#00ffff33]">
                                    {ach.date}
                                </span>
                            </div>

                            <p className="text-[#e0e0e0] leading-relaxed">
                                {ach.desc}
                            </p>

                            <ul className="space-y-2 mt-4">
                                {ach.details.map((detail, dIdx) => (
                                    <li key={dIdx} className="flex items-start gap-3 text-sm text-[#c5c5c5]">
                                        <Target className="w-4 h-4 text-[#1e90ff] flex-shrink-0 mt-1" />
                                        <span>{detail}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Achievements;