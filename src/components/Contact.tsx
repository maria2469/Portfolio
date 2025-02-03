import { FaLinkedin, FaGithub, FaGoogle } from "react-icons/fa";

const Contact = () => {
    return (
        <section id="contact" className="my-16 text-center">
            <h2 className="text-4xl font-bold text-purple-300 mb-8">Contact Me</h2>
            <p className="text-gray-400 mb-4">Feel free to reach out for collaborations or fixing bugs.</p>
            <div className="flex gap-8 justify-center">
                <a href="https://www.linkedin.com/in/maria-noor-146010256/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-4xl text-blue-600 hover:text-blue-700 transition-all" />
                </a>
                <a href="https://github.com/maria2469" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-4xl text-gray-600 hover:text-gray-700 transition-all" />
                </a>
                <a href="mailto:tomarianoor@gmail.com">
                    <FaGoogle className="text-4xl text-red-500 hover:text-red-600 transition-all" />
                </a>
            </div>
        </section>
    );
};

export default Contact;
