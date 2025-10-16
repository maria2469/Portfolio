import Navbar from "./Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div
      className="min-h-screen 
                 bg-gradient-to-b from-[#0a0a0a] via-[#141414] to-[#1a1a1a] 
                 text-[#e0e0e0] 
                 overflow-x-hidden"
    >
      <Navbar />

      <main className="px-8 py-16 pt-32 space-y-32">
        <Hero />

        {/* Section Anchors */}
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
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default App;
