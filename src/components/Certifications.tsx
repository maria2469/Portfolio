"use client";
import { motion } from "framer-motion";

type Certification = {
    title: string;
    img: string;
    desc: string;
    link: string;
};

const certifications: Certification[] = [
    {
        title: "Introduction to Git and GitHub",
        img: "/images/git&github.png",
        desc: "Foundational training on Git version control, GitHub workflows, branching strategies, and collaborative software development practices.",
        link: "https://www.coursera.org/account/accomplishments/verify/LO50GWTX5XAP",
    },
    {
        title: "Using Python to Interact with the Operating System",
        img: "/images/python_os.png",
        desc: "Learned automation, file system management, process handling, and system-level scripting using Python.",
        link: "https://www.coursera.org/account/accomplishments/verify/IK5SSOR42CIC",
    },
    {
        title: "Google Crash Course on Python",
        img: "/images/crash_python.png",
        desc: "Comprehensive introduction to Python programming covering data structures, OOP, scripting, and automation fundamentals.",
        link: "https://www.coursera.org/account/accomplishments/verify/UM1ZM4QYQV63",
    },
];

const Certifications = (): JSX.Element => {
    const doubled = [...certifications, ...certifications];

    return (
        <section
            id="certifications"
            className="relative my-28 py-20 px-8 overflow-hidden 
            bg-gradient-to-b from-[#0a0a0a] via-[#141414] to-[#1a1a1a]
            border border-[#1e90ff33] rounded-3xl shadow-[0_0_40px_#00ffff33]"
        >
            {/* Background motion */}
            <motion.div
                animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
                transition={{ repeat: Infinity, duration: 35, ease: "easeInOut" }}
                className="absolute top-10 left-10 w-[26rem] h-[26rem] bg-[#00ffff22] blur-3xl rounded-full will-change-transform"
            />
            <motion.div
                animate={{ x: [0, -60, 0], y: [0, 40, 0] }}
                transition={{ repeat: Infinity, duration: 45, ease: "easeInOut" }}
                className="absolute bottom-10 right-10 w-[28rem] h-[28rem] bg-[#7b4ae244] blur-3xl rounded-full will-change-transform"
            />

            <h2 className="text-4xl font-bold mb-16 tracking-wide text-center text-[#00ffff] drop-shadow-[0_0_10px_#00ffffaa]">
                Certifications
            </h2>

            <div className="relative w-full overflow-hidden">
                <motion.div
                    className="flex gap-10"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "mirror",
                        duration: 22,
                        ease: "linear",
                    }}
                >
                    {doubled.map((cert, index) => (
                        <motion.div
                            key={`${cert.title}-${index}`}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
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
                                src={cert.img}
                                alt={cert.title}
                                loading="lazy"
                                decoding="async"
                                className="w-full h-56 object-cover rounded-t-2xl border-b border-[#1e90ff22]"
                            />
                            <div className="p-6 text-left">
                                <h3 className="text-2xl font-semibold text-[#00ffff] mb-3">
                                    {cert.title}
                                </h3>
                                <p className="text-[#d0d0d0] text-sm leading-relaxed mb-5">
                                    {cert.desc}
                                </p>
                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block px-5 py-2 font-semibold text-sm 
                                    bg-[#1e90ff33] hover:bg-[#00ffff] hover:text-[#0a0a0a] 
                                    text-[#00ffff] rounded-xl border border-[#00ffff55]
                                    shadow-[0_0_15px_#00ffff55] hover:shadow-[0_0_25px_#00ffffaa]
                                    transition-all"
                                >
                                    View Certificate
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#0a0a0a] to-transparent pointer-events-none" />
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#0a0a0a] to-transparent pointer-events-none" />
            </div>
        </section>
    );
};

export default Certifications;
