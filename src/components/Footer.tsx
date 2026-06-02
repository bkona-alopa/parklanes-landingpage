"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#07111F] border-t border-white/10 pt-20 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Brand Column */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-extrabold text-white tracking-tight">
            Park<span className="text-[#00C853]">Lanes</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-sm text-sm leading-relaxed">
            Real-time urban parking infrastructure. Accelerating commute efficiency, reducing traffic congestion, and empowering space operators globally.
          </p>
        </div>

        {/* Links Column */}
        <div>
          <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
            Navigation
          </h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>
              <button 
                onClick={() => scrollToSection("features")} 
                className="hover:text-white transition cursor-pointer"
              >
                Features
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection("how-it-works")} 
                className="hover:text-white transition cursor-pointer"
              >
                How It Works
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection("showcase")} 
                className="hover:text-white transition cursor-pointer"
              >
                App Ecosystem
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection("waitlist")} 
                className="hover:text-white transition cursor-pointer"
              >
                Join Waitlist
              </button>
            </li>
          </ul>
        </div>

        {/* Legal Column */}
        <div>
          <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
            Company
          </h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>
              <span className="hover:text-white transition cursor-default">Privacy Policy</span>
            </li>
            <li>
              <span className="hover:text-white transition cursor-default">Terms of Service</span>
            </li>
            <li>
              <span className="hover:text-white transition cursor-default">Security Overview</span>
            </li>
            <li>
              <span className="hover:text-white transition cursor-default">Contact Support</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} ParkLanes. All rights reserved. Built for modern cities.
        </p>
        
        <div className="flex gap-6 text-xs text-gray-500">
          <span className="hover:text-white transition cursor-default">Twitter</span>
          <span className="hover:text-white transition cursor-default">LinkedIn</span>
          <span className="hover:text-white transition cursor-default">GitHub</span>
        </div>
      </div>
    </footer>
  );
}
