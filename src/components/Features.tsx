"use client";

import { motion } from "framer-motion";
import { 
  Clock, 
  QrCode, 
  Users, 
  Activity, 
  WifiOff, 
  BarChart3 
} from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    title: "Realtime Parking Availability",
    description: "Instantly see vacant spaces across public streets and private garages with minute-by-minute occupancy reports.",
    icon: <Clock className="w-8 h-8 text-[#00C853]" />,
  },
  {
    title: "QR-based Parking Entry",
    description: "Scan QR code at the entry lane to instantly check-in, authorize payments, and receive direction to your parking spot.",
    icon: <QrCode className="w-8 h-8 text-[#00C853]" />,
  },
  {
    title: "Operator Management",
    description: "Empower parking operator agents with unified dashboards to check check-ins, validation passes, and log lane changes.",
    icon: <Users className="w-8 h-8 text-[#00C853]" />,
  },
  {
    title: "Live Occupancy Tracking",
    description: "Visual telemetry and active counts of filled versus vacant spaces for municipal planning and garage operators.",
    icon: <Activity className="w-8 h-8 text-[#00C853]" />,
  },
  {
    title: "Offline-first Operations",
    description: "Works seamlessly even during internet blackouts. Local sync keeps check-in queues moving without delays.",
    icon: <WifiOff className="w-8 h-8 text-[#00C853]" />,
  },
  {
    title: "Realtime Analytics",
    description: "Analyze peak demand, daily utilization ratios, and revenue trends with exportable automated reports.",
    icon: <BarChart3 className="w-8 h-8 text-[#00C853]" />,
  },
];

export default function Features() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  return (
    <section id="features" className="py-28 px-6 bg-[#0B1524] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1565C0]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Built for Modern Parking Operations
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            A cohesive suite of real-time tools, scanning capability, and administrative control to optimize urban mobility.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              whileHover={{ 
                y: -8, 
                borderColor: "rgba(0, 200, 83, 0.4)",
                boxShadow: "0 10px 30px -10px rgba(0, 200, 83, 0.15)"
              }}
              className="p-8 rounded-3xl bg-[#101B2D]/60 border border-white/5 backdrop-blur-sm transition duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="p-4 w-fit rounded-2xl bg-white/5 mb-6 border border-white/5">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
