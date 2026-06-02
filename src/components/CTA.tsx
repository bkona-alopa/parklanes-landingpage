"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, CheckCircle, ArrowRight, Loader2 } from "lucide-react";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    // Simulate API request delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="waitlist" className="py-28 px-6 bg-[#07111F] relative overflow-hidden flex items-center justify-center">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1565C0]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#00C853]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl w-full text-center relative z-10 p-8 md:p-16 rounded-[40px] bg-[#101B2D]/40 border border-white/10 backdrop-blur-md shadow-2xl">
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key="signup-form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
                Join the Future of Urban Parking
              </h2>
              <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
                Be the first to know when ParkLanes launches in your city. Simplify your parking, optimize operations, and unlock seamless travel.
              </p>

              <form onSubmit={handleSubmit} className="max-w-md mx-auto w-full">
                <div className="flex flex-col sm:flex-row items-center gap-3 p-1.5 rounded-2xl bg-white/5 border border-white/10 focus-within:border-[#1565C0]/85 transition duration-300">
                  <div className="flex items-center gap-3 w-full px-4 py-3 sm:py-0">
                    <Mail className="text-gray-400 w-5 h-5 shrink-0" />
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (error) setError("");
                      }}
                      className="bg-transparent border-none outline-none text-white text-base placeholder-gray-500 w-full focus:ring-0 focus:outline-none"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto px-6 py-4 rounded-xl bg-[#1565C0] hover:bg-[#1976D2] text-white font-bold text-sm shadow-[0_4px_15px_rgba(21,101,192,0.3)] transition shrink-0 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        <span>Join Waitlist</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </motion.button>
                </div>

                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm mt-3 text-left pl-4 font-medium"
                  >
                    {error}
                  </motion.p>
                )}
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success-message"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="py-6 flex flex-col items-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="w-20 h-20 rounded-full bg-[#00C853]/10 border border-[#00C853]/30 flex items-center justify-center text-[#00C853] mb-8"
              >
                <CheckCircle className="w-10 h-10" />
              </motion.div>

              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                You're on the list!
              </h2>
              <p className="text-gray-300 text-lg max-w-lg mx-auto leading-relaxed mb-8">
                Thank you for joining. We have successfully registered <span className="text-white font-semibold underline decoration-[#00C853] decoration-2">{email}</span>. We'll send you an invitation once we expand to your district.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setSubmitted(false);
                  setEmail("");
                }}
                className="px-6 py-2.5 rounded-xl border border-white/20 hover:bg-white/5 text-gray-300 text-sm font-semibold transition cursor-pointer"
              >
                Sign Up Another Email
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
