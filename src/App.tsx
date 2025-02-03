import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";



const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-purple-900 text-white">
      <Navbar />
      <main className="px-8 py-16 pt-32">
        <Hero />

        {/* Adding the ID to each section for react-scroll to work */}
        <section id="services">
          <Services />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects /> {/* Your Projects section */}
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
