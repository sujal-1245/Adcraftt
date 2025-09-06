import React from "react";
import { motion } from "framer-motion";
import { Code, Layers, Sparkles } from "lucide-react";

const services = [
  { icon: <Code size={36} />, title: "Web Development", desc: "High-performing, scalable websites built with React, Vite, and Tailwind." },
  { icon: <Layers size={36} />, title: "Custom Web Apps", desc: "From dashboards to SaaS platforms, we craft functional web products." },
  { icon: <Sparkles size={36} />, title: "Luxury Visuals", desc: "3D animations, cinematic visuals, and motion design to wow audiences." },
];

const Services = () => {
  return (
    <section id="services" className="py-32 max-w-7xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        Our Expertise
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-10">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="p-8 bg-black/60 border border-gray-700 rounded-3xl backdrop-blur-lg hover:border-white/30 transition"
          >
            <div className="mb-4 text-indigo-400">{s.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{s.title}</h3>
            <p className="text-gray-400">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
