import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";

// Skill data
const skills = [
  { name: "HTML", icon: "🌐", color: "text-orange-500" },
  { name: "CSS", icon: "🎨", color: "text-blue-500" },
  { name: "JavaScript", icon: "⚡", color: "text-yellow-400" },
  { name: "ReactJS", icon: "⚛️", color: "text-sky-400" },
  { name: "Tailwind CSS", icon: "💨", color: "text-cyan-400" },
  { name: "PHP", icon: "🐘", color: "text-purple-500" },
  { name: "WordPress", icon: "📝", color: "text-blue-700" },
  { name: "Python", icon: "🐍", color: "text-green-400" },
];

// Motion variants
const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const item = { hidden: { opacity: 0, y: 30, scale: 0.8 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } } };

export default function Skills() {
  // For parallax tilt
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, card: HTMLDivElement | null) => {
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMouseX(x - rect.width / 2);
    setMouseY(y - rect.height / 2);
  };

  return (
    <section id="skills" className="relative py-24 bg-gradient-to-b from-gray-900 via-black to-gray-950 text-white overflow-hidden">
      {/* Particle Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-indigo-500 rounded-full"
            initial={{ opacity: 0.2, y: -10 }}
            animate={{ y: [0, 20, 0], opacity: [0.2, 0.8, 0.2] }}
            transition={{ repeat: Infinity, duration: 6 + i * 0.2, ease: "easeInOut" }}
            style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
          />
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-wide">My Skills</h2>
          <p className="text-gray-400 mt-3">Technologies I work with in a modern stack</p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={item}
              whileHover={{ scale: 1.15 }}
              className="relative flex flex-col items-center justify-center gap-3 bg-white/5 backdrop-blur-lg rounded-3xl p-6 cursor-pointer shadow-2xl hover:shadow-indigo-500/40 transition-transform duration-400"
              onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
              style={{
                transform: `rotateY(${mouseX / 20}deg) rotateX(${-mouseY / 20}deg)`,
              }}
            >
              <span className={`text-5xl ${skill.color} animate-bounce`}>{skill.icon}</span>
              <span className="text-gray-200 font-semibold text-lg">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
