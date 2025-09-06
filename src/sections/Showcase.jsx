import React, { useRef } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Stockpreneur",
    description: "Landing Page for a Trading company",
    image: "/stockpreneur_logo.jpg",
    video: "/Stockpreneur%20landing%20page.mp4",
  },
  {
    title: "Nexus Canon",
    description: "OTT streaming Platform",
    image: "Favicon.png",
    video: "/Nexus-Canon.mp4",
  },
  {
    title: "ShopEZ",
    description: "E-commerce website for buying electronics",
    image: "https://st2.depositphotos.com/50337402/47080/v/450/depositphotos_470802364-stock-illustration-audio-jack-gold-plated-metalic.jpg",
    video: "/ShopEZ.mp4",
  },
  {
    title: "LucidResume",
    description: "Resume builder website",
    image: "https://us.123rf.com/450wm/jovanas/jovanas2007/jovanas200700125/150989623-white-business-woman-icon-or-logo-on-dark-background.jpg",
    video: "/LucidResume.mp4",
  },
];

const Showcase = () => {
  return (
    <section id="work" className="py-32 max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-bold mb-12 text-center tracking-tight">
        Our Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((p, i) => {
          const videoRef = useRef(null);

          const handleMouseEnter = () => {
            if (videoRef.current) {
              videoRef.current.currentTime = 0;
              videoRef.current.play();
            }
          };

          const handleMouseLeave = () => {
            if (videoRef.current) {
              videoRef.current.pause();
              videoRef.current.currentTime = 0;
            }
          };

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="overflow-hidden rounded-3xl relative group shadow-2xl"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* Controlled Video */}
              <video
                ref={videoRef}
                src={p.video}
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Image fades away on hover */}
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-[350px] object-cover relative z-10 transition-opacity duration-700 group-hover:opacity-0"
              />

              {/* Black overlay with blur */}
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-20 transition-opacity duration-700 group-hover:opacity-0"></div>

              {/* Text fades away on hover */}
              <div
                className="absolute inset-0 z-30 flex flex-col items-center justify-center 
                           text-center text-white px-4 transition-opacity duration-700 group-hover:opacity-0"
              >
                <span className="text-3xl font-bold drop-shadow-[0_0_15px_rgba(0,0,0,0.9)] tracking-wide">
                  {p.title}
                </span>
                <p className="text-white/90 text-base mt-3 max-w-md drop-shadow-[0_0_10px_rgba(0,0,0,0.7)]">
                  {p.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Showcase;
