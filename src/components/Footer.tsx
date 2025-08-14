import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-8 px-6">
      {/* Top Glow Border */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"></div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Brand */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold tracking-wide text-white">Jignesh Bhandi - Portfolio</h2>
          <p className="text-sm text-gray-400 mt-1">
            Building modern web experiences with passion 🚀
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          {[
            { icon: <FaEnvelope />, link: "mailto:jigneshbhandi09@gmail.com" },
{ icon: <FaGithub />, link: "https://github.com/jigneshbhandi009" },
{ icon: <FaLinkedin />, link: "https://www.linkedin.com/in/jignesh-bhandi-8bb6bb252/" },
{ icon: <FaTwitter />, link: "https://twitter.com/" },


          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 text-white p-3 rounded-full shadow-md transform hover:scale-110 transition-all duration-300"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-6 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Jignesh Bhandi. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
