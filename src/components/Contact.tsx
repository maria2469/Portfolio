import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaGoogle } from "react-icons/fa";

const Contact = () => {
    return (
        <section
            id="contact"
            className="relative my-28 py-20 text-center rounded-3xl overflow-hidden
                 bg-gradient-to-b from-[#0a0a0a] via-[#141414] to-[#1a1a1a]
                 border border-[#1e90ff33] shadow-[0_0_40px_#00ffff33]"
        >
            {/* Subtle animated glow */}
            <motion.div
                animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
                transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
                className="absolute top-0 left-10 w-[20rem] h-[20rem] bg-[#00ffff22] blur-3xl rounded-full"
            />
            <motion.div
                animate={{ x: [0, -60, 0], y: [0, 40, 0] }}
                transition={{ repeat: Infinity, duration: 30, ease: "easeInOut" }}
                className="absolute bottom-0 right-10 w-[24rem] h-[24rem] bg-[#7b4ae244] blur-3xl rounded-full"
            />

            <h2 className="text-4xl font-bold mb-8 tracking-wide text-[#00ffff] drop-shadow-[0_0_10px_#00ffffaa]">
                Let’s Connect
            </h2>

            <p className="text-lg text-[#d0d0d0] mb-12 max-w-2xl mx-auto leading-relaxed">
                I’m open to collaborations, freelance projects, and AI consulting opportunities — especially
                around{" "}
                <span className="text-[#1e90ff] font-semibold">
                    agentic systems, workflow automation, and LLM-based solutions.
                </span>
            </p>

            <div className="flex gap-12 justify-center mb-10">
                <motion.a
                    href="https://www.linkedin.com/in/maria-noor-146010256/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, rotate: 3 }}
                    transition={{ type: "spring", stiffness: 200, damping: 12 }}
                >
                    <FaLinkedin className="text-4xl text-[#00ffffcc] hover:text-[#1e90ff] transition-all duration-300 drop-shadow-[0_0_8px_#00ffff77]" />
                </motion.a>

                <motion.a
                    href="https://github.com/maria2469"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, rotate: -3 }}
                    transition={{ type: "spring", stiffness: 200, damping: 12 }}
                >
                    <FaGithub className="text-4xl text-[#00ffffcc] hover:text-[#7b4ae2] transition-all duration-300 drop-shadow-[0_0_8px_#00ffff77]" />
                </motion.a>

                <motion.a
                    href="mailto:tomarianoor@gmail.com"
                    whileHover={{ scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 200, damping: 12 }}
                >
                    <FaGoogle className="text-4xl text-[#00ffffcc] hover:text-[#1e90ff] transition-all duration-300 drop-shadow-[0_0_8px_#00ffff77]" />
                </motion.a>
            </div>

            <p className="mt-8 text-sm text-[#b0b0b0]">
                © {new Date().getFullYear()}{" "}
                <span className="text-[#00ffff] font-semibold">Maria Noor</span>. All rights reserved.
            </p>
        </section>
    );
};

export default Contact;
