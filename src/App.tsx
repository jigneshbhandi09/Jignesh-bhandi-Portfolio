import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Footer from "./components/Footer";
import Skill from "./pages/skill";

import { useInView } from "react-intersection-observer";

const AnimatedSection: React.FC<{ id: string; children: React.ReactNode; className?: string }> = ({ id, children, className }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // triggers when 10% of section is visible
  });

  return (
    <section
      id={id}
      ref={ref}
      className={`${className} transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </section>
  );
};

const App: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white">
      <Navbar />

      <AnimatedSection id="home" className="min-h-screen py-20 flex items-center justify-center">
        <Home />
      </AnimatedSection>

      <AnimatedSection id="about" className="pt-px pb-4 bg-gray-800">
        <About />
      </AnimatedSection>

      <AnimatedSection id="experience" className="pt-px pb-4 bg-gray-700">
        <Experience />
      </AnimatedSection>

      <AnimatedSection id="projects" className="pt-px pb-4 bg-gray-800">
        <Projects />
      </AnimatedSection>

      <AnimatedSection id="skills" className="pt-px pb-4 bg-gray-800">
        <Skill />
      </AnimatedSection>

      <AnimatedSection id="education" className="min-h-screen py-20 flex items-center justify-center">
        <Education />
      </AnimatedSection>

      <AnimatedSection id="contact" className="pt-px pb-4 bg-gray-700">
        <Contact />
      </AnimatedSection>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
