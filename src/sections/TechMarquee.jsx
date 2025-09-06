import React from "react";
import { motion } from "framer-motion";

const techStack = [
  { name: "React", logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
  { name: "Tailwind CSS", logo: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg" },
  { name: "Express", logo: "https://cdn.worldvectorlogo.com/logos/express-109.svg" },
  { name: "Node.js", logo: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
  { name: "MongoDB", logo: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
  { name: "Supabase", logo: "data:image/jpeg;base64,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" },
  { name: "Figma", logo: "data:image/png;base64,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" },
  { name: "GitHub", logo: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg" },
];

const TechMarquee = () => {
  return (
    <section className="py-20 bg-black text-white overflow-hidden">
      <h2 className="text-3xl font-bold mb-10 text-center">Our Tech Stack</h2>
      <div className="relative flex overflow-x-hidden">
        <motion.div
          className="flex space-x-16"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {techStack.map((tech, i) => (
            <div key={i} className="flex flex-col items-center min-w-[150px]">
              <img src={tech.logo} alt={tech.name} className="w-20 h-20 object-contain mb-2" />
              <span className="text-sm">{tech.name}</span>
            </div>
          ))}
        </motion.div>
        <motion.div
          className="flex space-x-16 absolute top-0"
          animate={{ x: ["100%", "0%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {techStack.map((tech, i) => (
            <div key={i} className="flex flex-col items-center min-w-[150px]">
              <img src={tech.logo} alt={tech.name} className="w-20 h-20 object-contain mb-2" />
              <span className="text-sm">{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechMarquee;
