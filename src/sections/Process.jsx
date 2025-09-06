import React from "react";
import { motion } from "framer-motion";

const steps = [
  { title: "Discovery", desc: "We align on your goals and audience." },
  { title: "Design", desc: "Wireframes → visuals → interactive prototypes." },
  { title: "Development", desc: "React, Tailwind, APIs, and integrations." },
  { title: "Launch", desc: "SEO, analytics, and smooth delivery." },
];

const Process = () => {
  return (
    <section id="process" className="py-32 bg-black/80 border-t border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Our Process</h2>
        <div className="grid md:grid-cols-4 gap-10">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="text-center"
            >
              <h3 className="text-2xl font-semibold mb-3">{s.title}</h3>
              <p className="text-gray-400">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
