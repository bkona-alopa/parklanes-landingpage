"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-[#07111F]/80 backdrop-blur-md z-50 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 
          className="text-2xl font-extrabold tracking-tight text-white cursor-pointer select-none"
          onClick={() => scrollToSection("hero")}
        >
          Park<span className="text-[#00C853]">Lanes</span>
        </h1>

        <div className="hidden md:flex gap-8 items-center text-sm font-medium text-gray-300">
          <button 
            onClick={() => scrollToSection("features")} 
            className="hover:text-white transition duration-200 cursor-pointer"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection("how-it-works")} 
            className="hover:text-white transition duration-200 cursor-pointer"
          >
            How It Works
          </button>
          <button 
            onClick={() => scrollToSection("showcase")} 
            className="hover:text-white transition duration-200 cursor-pointer"
          >
            App Ecosystem
          </button>
        </div>

        <div className="flex gap-4">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("waitlist")}
            className="px-5 py-2.5 rounded-xl bg-[#1565C0] text-white font-semibold text-sm shadow-[0_0_15px_rgba(21,101,192,0.4)] hover:bg-[#1976D2] hover:shadow-[0_0_20px_rgba(21,101,192,0.6)] transition cursor-pointer"
          >
            Join Waitlist
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}
