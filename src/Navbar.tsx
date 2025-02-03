import { Link } from "react-scroll";

const Navbar = () => {
    return (
        <nav className="bg-black fixed w-full z-50 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <h1 className="text-purple-400 text-2xl font-bold">Maria Noor</h1>
                    <ul className="flex gap-6">
                        {["Home", "Services", "About", "Skills", "Projects", "Contact"].map((section) => (
                            <li key={section}>
                                <Link
                                    to={section.toLowerCase()} // Matches the section IDs
                                    spy={true}
                                    smooth={true}
                                    offset={-70} // Adjust for fixed navbar
                                    duration={500}
                                    className="text-white hover:text-purple-400 cursor-pointer"
                                >
                                    {section}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
