import { lazy, Suspense } from "react";
import Navbar from "./Navbar";
import Hero from "./components/Hero";

// Lazy-load everything below the fold so the initial bundle is smaller
// and the hero renders immediately without waiting for heavy components.
const Services      = lazy(() => import("./components/Services"));
const About         = lazy(() => import("./components/About"));
const Skills        = lazy(() => import("./components/Skills"));
const Projects      = lazy(() => import("./components/Projects"));
const Certifications = lazy(() => import("./components/Certifications"));
const Achievements  = lazy(() => import("./components/Achievements"));
const Contact       = lazy(() => import("./components/Contact"));

// Minimal inline fallback — avoids an extra component import
const SectionSkeleton = () => (
  <div className="w-full h-48 rounded-3xl bg-[#0f0f10] animate-pulse border border-[#1e90ff11]" />
);

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
        {/* Hero is eagerly loaded — it is above the fold */}
        <Hero />

        <Suspense fallback={<SectionSkeleton />}>
          <section id="services">
            <Services />
          </section>
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <section id="about">
            <About />
          </section>
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <section id="skills">
            <Skills />
          </section>
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <section id="projects">
            <Projects />
          </section>
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <section id="certifications">
            <Certifications />
          </section>
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <section id="achievements">
            <Achievements />
          </section>
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <section id="contact">
            <Contact />
          </section>
        </Suspense>
      </main>
    </div>
  );
};

export default App;
