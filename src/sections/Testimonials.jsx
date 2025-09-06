import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  { name: "Rhea K.", quote: "ADCRAFT turned our idea into a polished digital experience." },
  { name: "Aman S.", quote: "Pixel-perfect and fast delivery — they overdelivered." },
  { name: "Ishita P.", quote: "Students loved the motion and design touches!" },
];

const Testimonials = () => {
  return (
    <section className="py-32 max-w-6xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-16">What Clients Say</h2>
      <div className="grid md:grid-cols-3 gap-10">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.2 }}
            className="p-8 bg-black/60 rounded-3xl border border-gray-700 hover:border-white/30 transition"
          >
            <p className="mb-4 text-gray-300">“{t.quote}”</p>
            <h4 className="font-semibold">{t.name}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
