import { motion, easeOut } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Multi Theme Switcher App",
    description:
      "A React + TypeScript app with three distinct themes, using Context API and Tailwind CSS for styling. Includes localStorage persistence and responsive UI.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "project1.png",
    link: "https://multi-theme-switcher-app-h4mn.vercel.app/",
  },
  {
    title: "Real-Time ICU Monitoring",
    description:
      "A real-time patient monitoring system using MQTT protocol to send alerts and display patient data on a web interface.",
    tech: ["HTML", "CSS", "JavaScript", "MQTT"],
    image: "/images/icu-monitor.png",
    link: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio website built with HTML, CSS, and JavaScript, featuring responsive design and smooth animations.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/images/portfolio.png",
    link: "#",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: easeOut }, // fixed ease
  },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 bg-gradient-to-b from-gray-900 via-black to-gray-950 text-white overflow-hidden"
    >
      {/* Bubble / Particle Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-pink-500 rounded-full"
            initial={{ opacity: 0.2, y: -10 }}
            animate={{
              y: [0, 20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              repeat: Infinity,
              duration: 5 + i * 0.2,
              ease: [0.42, 0, 0.58, 1] as any, // fixed ease for TS
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">My Projects</h2>
          <p className="text-gray-400 mt-3">
            Some of the work I've built and showcased
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="relative flex flex-col bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-pink-400/50 transition-all duration-300 shadow-lg hover:shadow-pink-500/20"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm flex-1 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-700/60 px-3 py-1 rounded-full text-sm text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors"
                >
                  Live Demo <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Caption */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-gray-500 mt-16 text-sm"
        >
          I’ve worked on these projects to sharpen my skills and build real-world solutions.
        </motion.p>
      </div>
    </section>
  );
}
