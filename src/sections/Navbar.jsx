import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-black/40 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold tracking-widest">ADCRAFT</h1>
        <nav className="hidden md:flex gap-8 text-sm">
          <a href="#services" className="hover:text-gray-300">Services</a>
          <a href="#work" className="hover:text-gray-300">Work</a>
          <a href="#process" className="hover:text-gray-300">Process</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
        </nav>
        <button className="px-5 py-2 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition">
          Start a Project
        </button>
      </div>
    </motion.header>
  );
};

export default Navbar;
