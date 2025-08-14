import { motion, easeOut } from "framer-motion";

const experiences = [
  {
    role: "Software Developer",
    company: "Muni",
    duration: "July 2025 - Present",
    description:
      "Developed frontend features using React, TypeScript, and Tailwind CSS. Worked on multi-theme apps and responsive UI components.",
  },
  {
    role: "Intern",
    company: "Auto Techno Solutions",
    duration: "Jan 2025 - June 2025",
    description:
      "Worked on web applications, bug fixing, and enhancing user experience with modern web technologies.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 bg-gradient-to-b from-gray-900 via-black to-gray-950 text-white overflow-hidden"
    >
      {/* 🎈 Bubble Effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-pink-500 rounded-full"
            initial={{ opacity: 0.2, y: Math.random() * 200 }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              repeat: Infinity,
              duration: 6 + i * 0.15,
              ease: "easeInOut",
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">My Experience</h2>
          <p className="text-gray-400 mt-3">
            Work history and professional roles I've held
          </p>
        </motion.div>

        {/* Experience List */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col gap-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-pink-500/20 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold">{exp.role}</h3>
              <span className="text-gray-400 text-sm">
                {exp.company} | {exp.duration}
              </span>
              <p className="mt-2 text-gray-300 text-sm">{exp.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
