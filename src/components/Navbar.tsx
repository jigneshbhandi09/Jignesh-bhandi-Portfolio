import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: [0.5] }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experiences" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900/80 backdrop-blur-md text-white shadow-lg z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo + Name */}
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 text-gray-900 font-extrabold text-xl flex items-center justify-center rounded-full shadow-lg border border-yellow-300/50"
            animate={{
              y: [0, -4, 0],
              boxShadow: [
                "0 0 10px rgba(250, 204, 21, 0.6)",
                "0 0 18px rgba(250, 204, 21, 0.8)",
                "0 0 10px rgba(250, 204, 21, 0.6)",
              ],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut",
            }}
          >
            JB
          </motion.div>
          <span className="text-xl font-bold tracking-wide">
            <span className="text-yellow-400 hover:text-yellow-300 transition-colors">
              Jignesh
            </span>{" "}
            <span className="text-white hover:text-gray-200 transition-colors">
              Bhandi
            </span>
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`relative font-medium transition duration-300
                ${
                  activeSection === link.id
                    ? "text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]"
                    : "hover:text-yellow-300"
                }`}
            >
              {link.label}
              <span
                className={`absolute left-0 -bottom-1 w-full h-0.5 bg-yellow-400 transform transition-transform duration-300 origin-left
                ${activeSection === link.id ? "scale-x-100" : "scale-x-0 hover:scale-x-100"}`}
              ></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-300 hover:text-yellow-400 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-md shadow-lg">
          <div className="flex flex-col items-center gap-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-medium transition duration-300
                  ${
                    activeSection === link.id
                      ? "text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]"
                      : "hover:text-yellow-300"
                  }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
