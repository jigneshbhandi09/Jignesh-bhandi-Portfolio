import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="relative min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-12 pt-24 pb-16 overflow-hidden">
      
      {/* Background Animated Bubbles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-indigo-500 rounded-full opacity-30"
            initial={{ y: Math.random() * 800 }}
            animate={{ y: [Math.random() * 800, -50] }}
            transition={{
              repeat: Infinity,
              duration: 6 + Math.random() * 5,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto flex flex-col justify-start min-h-screen z-10">
        
        {/* Header Section */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="pt-12" // ⬅ Adds top padding to push text down
>
  <h1 className="text-4xl md:text-6xl font-extrabold leading-snug">
    Hi, I’m{" "}
    <span className="text-indigo-400">Jignesh Bhandi</span>
    <br />
    <span className="text-gray-300">Software Developer</span>
  </h1>

  <p className="mt-6 text-lg text-gray-400 max-w-2xl leading-relaxed">
    Crafting modern, responsive, and visually appealing websites using{" "}
    <span className="text-indigo-400 font-medium">
      React, Tailwind CSS, and TypeScript
    </span>
    .
  </p>
</motion.div>


        {/* Buttons Section */}
        <motion.div
          className="mt-8 flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-full font-medium transition-all shadow-md hover:shadow-indigo-500/30"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-gray-500 hover:border-white rounded-full font-medium transition-all shadow-md hover:shadow-white/30"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Footer Small Text */}
        <motion.div
          className="text-gray-500 text-sm mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
         
        </motion.div>
      </div>
    </section>
  );
}
