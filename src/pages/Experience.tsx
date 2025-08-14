import { motion, easeOut } from "framer-motion";

const experiences = [
  {
    role: "Software Developer",
    company: "mUniCampus",
    logo: "/municampus.png", // Transparent background image
    duration: "Aug 2024 - Present",
    description: [
      "Contributed to an edtech platform enabling students to evaluate answer sheets, get feedback, and track progress.",
      "Collaborated with backend, design, and QA teams to deliver high-quality features.",
      "Developed a platform that simplifies monitoring and feedback between institutes and students.",
      "Integrated REST APIs for real-time updates and accurate data display.",
    ],
  },
  {
    role: "Python Development Intern",
    company: "CEI DESIGN CONSULTANCY",
    logo: "/ceidesign.png", // Transparent background image
    duration: "May 2024 - Aug 2025",
    description: [
      "Supported the development of Python-based tools and automation scripts.",
      "Gained hands-on experience in coding, debugging, and collaborating on small-scale projects.",
    ],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
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
      {/* Bubble Background Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-pink-500 rounded-full"
            initial={{ opacity: 0.2, y: Math.random() * 200 }}
            animate={{
              y: [0, -50, 0],
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

      {/* Section Content */}
      <div className="relative max-w-5xl mx-auto px-6 z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            My Experience
          </h2>
          <p className="text-gray-400 mt-3">A timeline of my professional journey</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-8">
          {/* Vertical Line */}
          <span className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-500 via-purple-500/50 to-transparent rounded-full"></span>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-12"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={item}
                className="relative flex flex-col md:flex-row md:items-center gap-6"
              >
                {/* Node */}
                <span className="absolute -left-1 top-2 w-6 h-6 rounded-full bg-gradient-to-tr from-pink-500 to-purple-500 shadow-lg ring-4 ring-gray-900/80"></span>

                {/* Experience Card */}
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-pink-500/20 transition-all duration-300 w-full"
                >
                  {/* Logo + Role */}
                  <div className="flex items-center gap-4 mb-4">
                    {exp.logo && (
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="w-14 h-14 rounded-full border border-pink-400/30 shadow-lg object-contain bg-white/5 p-2"
                      />
                    )}
                    <div>
                      <h3 className="text-xl font-semibold">{exp.role}</h3>
                      <span className="text-pink-400 text-sm font-medium">
                        {exp.company}
                      </span>
                      <span className="block text-gray-400 text-xs">{exp.duration}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="mt-2 space-y-2 text-gray-300 text-sm list-disc list-inside">
                    {exp.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
