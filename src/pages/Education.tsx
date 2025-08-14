import React from "react";

const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-gray-100 dark:via-gray-200 dark:to-gray-100 text-white dark:text-gray-900 overflow-hidden"
    >
      {/* Bubble background */}
      <div className="absolute inset-0 -z-10">
        {[...Array(15)].map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-white/10 dark:bg-black/10 animate-bubble"
            style={{
              width: `${Math.random() * 40 + 10}px`,
              height: `${Math.random() * 40 + 10}px`,
              left: `${Math.random() * 100}%`,
              bottom: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 5}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="max-w-4xl text-center px-6">
        <h2 className="text-4xl font-bold mb-6">Experience</h2>
        <div className="bg-white/10 dark:bg-gray-200/50 backdrop-blur-sm rounded-2xl shadow-lg p-6 text-left">
          <h3 className="text-2xl font-semibold">Software Developer</h3>
          <p className="text-gray-300 dark:text-gray-800">
            Muni • Jan 2025 – Present
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>
              Developed responsive React + TypeScript applications with three
              distinct themes using Tailwind CSS.
            </li>
            <li>
              Implemented Context API and localStorage for theme persistence.
            </li>
            <li>
              Collaborated with backend, design, and QA teams to deliver
              high-quality features.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
