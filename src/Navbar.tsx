import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Navbar = () => {
    const sections = ["Home", "Services", "About", "Skills", "Projects", "Contact"];

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed w-full z-50 backdrop-blur-md 
                       bg-[#0a0a0a80] border-b border-[#1e90ff33]
                       shadow-[0_0_25px_#00ffff33] transition-all duration-500"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-10">
                <div className="flex justify-between items-center h-16">
                    {/* Logo / Name */}
                    <motion.h1
                        whileHover={{ scale: 1.05, textShadow: "0 0 20px #00ffff" }}
                        className="text-[#00ffff] text-2xl font-bold tracking-wider 
                                   cursor-pointer drop-shadow-[0_0_8px_#00ffff88]
                                   transition-all duration-300"
                    >
                        Maria Noor
                    </motion.h1>

                    {/* Navigation Links */}
                    <ul className="flex gap-8 text-[#b0b0b0] font-medium">
                        {sections.map((section) => (
                            <li key={section}>
                                <Link
                                    to={section.toLowerCase()}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={600}
                                    activeClass="active"
                                    className="relative cursor-pointer transition-all duration-300
                                               hover:text-[#00ffff] group text-lg tracking-wide"
                                >
                                    {section}
                                    <span
                                        className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#00ffff] 
                                                   rounded-full transition-all duration-300 
                                                   group-hover:w-full shadow-[0_0_8px_#00ffff]"
                                    />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Active Section Highlight */}
            <style>{`
                .active {
                    color: #00ffff;
                    font-weight: 600;
                    text-shadow: 0 0 10px #00ffffaa;
                }
            `}</style>
        </motion.nav>
    );
};

export default Navbar;
