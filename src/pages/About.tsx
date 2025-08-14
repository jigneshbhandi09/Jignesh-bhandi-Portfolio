import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-950 text-white flex items-center justify-center px-6 md:px-20 py-16 overflow-hidden"
    >
      {/* Bubble Background Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(35)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-yellow-500 rounded-full"
            initial={{ opacity: 0.2, y: -10 }}
            animate={{ y: [0, 25, 0], opacity: [0.2, 0.8, 0.2] }}
            transition={{
              repeat: Infinity,
              duration: 5 + i * 0.15,
              ease: "easeInOut",
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center z-10">
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <img
            src="/profile_photo.png"
            alt="Jignesh Bhandi"
            className="rounded-2xl shadow-lg shadow-yellow-500/30 hover:scale-105 transition-transform duration-300 border border-yellow-400/20"
          />
        </motion.div>

        {/* Right Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6 border-b-4 border-yellow-500 inline-block">
            About Me
          </h2>
          <p className="text-lg leading-relaxed text-gray-300 mb-6">
            I’m{" "}
            <span className="text-yellow-400 font-semibold">Jignesh Bhandi</span>, a
            passionate{" "}
            <span className="text-yellow-400 font-semibold">Software Developer</span>{" "}
            with{" "}
            <span className="text-yellow-400 font-semibold">1 Year of Experience</span>{" "}
            specializing in building responsive, modern, and interactive web
            applications.
          </p>
          <p className="text-lg leading-relaxed text-gray-300 mb-6">
            Skilled in{" "}
            <span className="text-yellow-400 font-semibold">
              HTML, CSS, JavaScript, React, Tailwind CSS, and TypeScript
            </span>
            , I focus on crafting beautiful, user-friendly websites that deliver
            seamless experiences across devices.
          </p>

          {/* Resume Button */}
        <button
  className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-full shadow-lg 
             hover:bg-yellow-400 hover:scale-105 transition-all duration-300 flex items-center gap-2"
  onClick={() => window.open('/Jignesh_Bhandi_Resume.pdf', '_blank')}
>
  <FaDownload /> View Resume
</button>





        </motion.div>
      </div>
    </section>
  );
}
