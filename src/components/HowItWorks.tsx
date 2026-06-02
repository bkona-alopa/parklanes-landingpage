"use client";

import { motion } from "framer-motion";
import { QrCode, ClipboardCheck, ParkingCircle } from "lucide-react";

interface Step {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Scan QR at Entry",
    description: "The driver scans the dynamic operator QR code at the parking facility entrance. The browser instantly prompts registration and entry verification.",
    icon: <QrCode className="w-6 h-6 text-white" />,
  },
  {
    number: "02",
    title: "Operator Validation",
    description: "The parking operator's app immediately detects the check-in request, verifies availability, and approves the vehicle entry with one tap.",
    icon: <ClipboardCheck className="w-6 h-6 text-white" />,
  },
  {
    number: "03",
    title: "Park Seamlessly",
    description: "The driver parks at their designated spot. Real-time city occupancy counters update instantly, keeping metrics live for other users.",
    icon: <ParkingCircle className="w-6 h-6 text-white" />,
  },
];

export default function HowItWorks() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" as const } 
    },
  };

  return (
    <section id="how-it-works" className="py-28 px-6 bg-[#0B1524] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] bg-[#00C853]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            How ParkLanes Works
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            A frictionless loop connecting driver booking to physical lane validation in seconds.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-12 relative"
        >
          {/* Connecting line for larger screens */}
          <div className="hidden md:block absolute top-[68px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-[#1565C0]/20 via-[#00C853]/30 to-[#1565C0]/20 z-0" />

          {steps.map((step, index) => (
            <motion.div 
              key={step.number}
              variants={stepVariants}
              className="relative z-10 flex flex-col items-center text-center px-4"
            >
              {/* Step Icon with outer ring */}
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#1565C0] to-[#00C853] flex items-center justify-center shadow-lg relative z-10">
                  {step.icon}
                </div>
                {/* Decorative pulse ring */}
                <div className="absolute inset-0 w-16 h-16 rounded-2xl border-2 border-[#00C853]/30 animate-ping opacity-40 pointer-events-none scale-105" />
              </div>

              {/* Step Number Display */}
              <span className="text-xs font-bold text-[#00C853] tracking-widest uppercase mb-2">
                Step {step.number}
              </span>

              {/* Title & Description */}
              <h3 className="text-2xl font-bold text-white mb-4">
                {step.title}
              </h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
