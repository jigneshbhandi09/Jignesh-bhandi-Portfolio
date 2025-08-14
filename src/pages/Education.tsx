import { motion } from "framer-motion";

// Graduation cap icon
const GraduationCapIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path d="M22 10l-10-5L2 10l10 5 10-5z" strokeWidth="1.5" />
    <path d="M6 12v5a4 4 0 0 0 8 0v-5" strokeWidth="1.5" />
  </svg>
);

type Edu = {
  degree: string;
  institution: string;
  period: string;
};

const education: Edu[] = [
  {
    degree: "Electronics and Communication Engineering",
    institution: "Don Bosco Institute of Technology",
    period: "2020 – 2024",
  },
  {
    degree: "Science",
    institution: "SSS Multipurpose Technical JR College",
    period: "2018 – 2020",
  }
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 }
  }
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] }
  }
};

export default function Education() {
  return (
    <section
      id="education"
      className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white w-full overflow-hidden"
    >
      {/* Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-indigo-500 rounded-full"
            initial={{ opacity: 0.2, y: -10 }}
            animate={{ y: [0, 20, 0], opacity: [0.2, 0.8, 0.2] }}
            transition={{ repeat: Infinity, duration: 6 + i * 0.2, ease: "easeInOut" }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      <div className="w-full px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-gray-400 mt-2">
            My academic foundation and key learning milestones.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-6 md:pl-10">
          {/* vertical line */}
          <span className="absolute left-2 md:left-4 top-0 bottom-0 w-px bg-gradient-to-b from-pink-500 via-purple-500/50 to-transparent" />

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="space-y-10"
          >
            {education.map((edu, index) => (
              <motion.article
                key={index}
                variants={item}
                className="relative ml-4 md:ml-8"
              >
                {/* Node */}
                <motion.span
                  initial={{ scale: 0, rotate: 180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 120, damping: 12 }}
                  className="absolute -left-4 md:-left-6 top-2 grid place-items-center w-8 h-8 rounded-full bg-gradient-to-tr from-pink-600 to-purple-500 ring-4 ring-gray-900/80 shadow-lg"
                >
                  <GraduationCapIcon className="w-4 h-4 text-white" />
                </motion.span>

                {/* Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  className="group rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-5 md:p-6 hover:border-pink-400/50 hover:shadow-lg hover:shadow-pink-500/10 transition-all duration-300 w-full"
                >
                  {/* Degree */}
                  <h3 className="text-lg md:text-xl font-semibold text-white">
                    {edu.degree}
                  </h3>
                  {/* Institution */}
                  <p className="text-pink-400 font-medium mt-1">
                    {edu.institution}
                  </p>
                  {/* Period */}
                  <span className="block text-xs md:text-sm text-gray-400 mt-2">
                    {edu.period}
                  </span>
                </motion.div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
