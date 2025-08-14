import { motion } from "framer-motion";
import { useMemo } from "react";

// Inline icon (no external packages needed)
const BriefcaseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path d="M3 7h18" strokeWidth="1.5" />
    <rect x="3" y="7" width="18" height="13" rx="2" strokeWidth="1.5" />
    <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" strokeWidth="1.5" />
    <path d="M12 12v3" strokeWidth="1.5" />
  </svg>
);

type Exp = {
  role: string;
  company: string;
  period: string;
  description: string; // newline separated
};

const experiences: Exp[] = [
  {
    role: "Software Developer",
    company: "mUniCampus",
    period: "Aug 2024 – Present",
    description: `• Contributed to an edtech platform enabling students to evaluate answer sheets, get feedback, and track progress.
• Collaborated with backend, design, and QA teams to deliver high-quality features.
• Developed a platform that simplifies monitoring and feedback between institutes and students.
• Integrated REST APIs for real-time updates and accurate data display.`
  },
  {
    role: "Python Development - Intern",
    company: "CEI DESIGN CONSULTANCY",
    period: "May 2024 – Aug 2024",
    description: `• Supported the development of Python-based tools and automation scripts.
• Gained hands-on experience in coding, debugging, and collaborating on small-scale projects.`
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 }
  }
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function Experience() {
  // Pre-generate particle positions so they don't jump each render
  const particles = useMemo(
    () =>
      [...Array(25)].map(() => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        duration: 6 + Math.random() * 4
      })),
    []
  );

  return (
    <section
      id="experience"
      className="relative py-24 bg-gradient-to-b from-gray-900 via-black to-gray-950 text-white overflow-hidden"
    >
      {/* Particle Background */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-indigo-500 rounded-full"
            initial={{ opacity: 0.2, y: -10 }}
            animate={{ y: [0, 20, 0], opacity: [0.2, 0.8, 0.2] }}
            transition={{
              repeat: Infinity,
              duration: p.duration,
              ease: "easeInOut"
            }}
            style={{ top: p.top, left: p.left }}
          />
        ))}
      </div>

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold">Experience</h2>
          <p className="text-gray-400 mt-3">
            Companies I've worked with and roles I've held
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-6 md:pl-10">
          {/* vertical line */}
          <span className="absolute left-2 md:left-4 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/60 via-blue-400/40 to-transparent" />

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="space-y-8"
          >
            {experiences.map((exp) => (
              <motion.article
                key={exp.role + exp.company}
                variants={item}
                className="relative ml-4 md:ml-8"
              >
                {/* node */}
                <span className="absolute -left-4 md:-left-6 top-2 grid place-items-center w-8 h-8 rounded-full bg-indigo-600 ring-4 ring-gray-900/80 shadow-md">
                  <BriefcaseIcon className="w-4 h-4 text-white" />
                </span>

                <div className="group rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 md:p-6 hover:border-indigo-400/50 transition-colors">
                  <div className="flex flex-wrap items-baseline gap-3">
                    <h3 className="text-lg md:text-xl font-semibold">
                      {exp.role}
                    </h3>
                    <span className="text-indigo-400 font-medium">
                      {exp.company}
                    </span>
                    <span className="ml-auto text-xs md:text-sm text-gray-400">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="mt-3 text-gray-300 leading-relaxed list-disc list-inside space-y-1">
                    {exp.description.split("\n").map((line, i) => (
                      <li key={i}>{line.replace(/^•\s*/, "")}</li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
