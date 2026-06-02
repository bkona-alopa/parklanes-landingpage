"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden pt-20">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#1565C0]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 -translate-x-1/2 w-[350px] h-[350px] bg-[#00C853]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#00C853] text-sm font-semibold mb-8 backdrop-blur-sm"
        >
          <MapPin size={16} />
          <span>Real-time Parking Infrastructure</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-white"
        >
          Smart Parking Solutions
          <span className="block mt-2 bg-gradient-to-r from-[#00C853] to-[#00E676] bg-clip-text text-transparent">
            for Modern Cities
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
        >
          Find parking spaces instantly. Streamline operator workflows. Reduce congestion and urban friction with ParkLanes.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("waitlist")}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#1565C0] hover:bg-[#1976D2] font-bold text-white shadow-[0_0_20px_rgba(21,101,192,0.4)] transition flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Get Started</span>
            <ArrowRight size={18} />
          </motion.button>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("features")}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/5 font-semibold text-gray-200 hover:text-white transition cursor-pointer"
          >
            Explore Features
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
