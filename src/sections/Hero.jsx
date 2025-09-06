import React from "react";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },   // start invisible & lower
  animate: { opacity: 1, y: 0 },    // fade in + move up
  transition: { delay, duration: 1, ease: "easeOut" },
});

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://videos.pexels.com/video-files/2792370/2792370-hd_1920_1080_30fps.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark overlay for luxury mood */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-black/60"
      />

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl px-6">
        <motion.h1
          {...fadeUp(0.3)}
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-lg"
        >
          ADCRAFT
        </motion.h1>

        <motion.p
          {...fadeUp(0.8)}
          className="mt-6 text-lg md:text-2xl text-gray-300 font-light"
        >
          Crafting{" "}
          <span className="text-white">luxury digital experiences </span>
          for brands that deserve timeless presence.
        </motion.p>

        <motion.div {...fadeUp(1.3)} className="mt-10 flex justify-center">
          <button className="px-8 py-3 rounded-full bg-white text-black font-semibold text-lg hover:bg-gray-200 transition-all shadow-lg">
            Explore Our Work
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
