"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, Shield, BarChart3, Check } from "lucide-react";

interface AppTab {
  id: string;
  name: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  bullets: string[];
  imageSrc: string;
  imageAlt: string;
}

const tabs: AppTab[] = [
  {
    id: "user",
    name: "User App",
    icon: <Smartphone className="w-5 h-5" />,
    title: "Driver App: Find & Pay Instantly",
    description: "Designed for modern commuters to locate parking instantly without circling blocks.",
    bullets: [
      "Live GPS spot detection and turn-by-turn lane routing",
      "Dynamic reservation holding to lock your spot before arrival",
      "Seamless contactless checking and automated payment exit",
      "QR key pass integration directly in mobile wallet"
    ],
    imageSrc: "/parklanes-landingpage/user-app.png",
    imageAlt: "User Commuter App screenshot",
  },
  {
    id: "operator",
    name: "Operator App",
    icon: <Shield className="w-5 h-5" />,
    title: "Operator Portal: Smooth Lane Control",
    description: "Equips agents and lane attendants with instant validation checkpoints.",
    bullets: [
      "Ultra-fast camera scanner for entry and exit QR validations",
      "Real-time vehicle log and offline check-in caching",
      "Interactive spot allocation override tools",
      "Instant lane block/unblock toggles for maintenance"
    ],
    imageSrc: "/parklanes-landingpage/operator-app.png",
    imageAlt: "Operator Lane App screenshot",
  },
  {
    id: "dashboard",
    name: "Admin Dashboard",
    icon: <BarChart3 className="w-5 h-5" />,
    title: "Ops Dashboard: Full-scale City Analytics",
    description: "Gives parking administrators, municipal bodies, and garage owners total control over their assets.",
    bullets: [
      "Interactive occupancy trend charts and utilization indexes",
      "Comprehensive revenue ledger with pricing strategy tools",
      "Multi-facility configuration and manager role provisioning",
      "Automated reports on peak parking and lane clogging rates"
    ],
    imageSrc: "/parklanes-landingpage/dashboard.png",
    imageAlt: "Admin Analytics Dashboard screenshot",
  },
];

export default function AppShowcase() {
  const [activeTab, setActiveTab] = useState<string>("user");
  const activeData = tabs.find((t) => t.id === activeTab)!;

  return (
    <section id="showcase" className="py-28 px-6 bg-[#07111F] relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#1565C0]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Unified Parking Ecosystem
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            A seamlessly connected workflow for drivers, ground operators, and system administrators.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex justify-center mb-16">
          <div className="flex p-1.5 bg-[#101B2D]/80 border border-white/10 rounded-2xl backdrop-blur-md">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition cursor-pointer relative ${
                    isActive ? "text-white" : "text-gray-400 hover:text-gray-200"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-showcase-tab"
                      className="absolute inset-0 bg-[#1565C0] rounded-xl z-0"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab.icon}</span>
                  <span className="relative z-10">{tab.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Text Description Pane */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-3xl font-extrabold text-white mb-6">
                  {activeData.title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  {activeData.description}
                </p>

                <ul className="space-y-4">
                  {activeData.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="p-1 rounded-full bg-[#00C853]/15 text-[#00C853] mt-1 shrink-0">
                        <Check className="w-4 h-4" />
                      </div>
                      <span className="text-gray-300 text-sm md:text-base leading-relaxed">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Screenshot Display Pane */}
          <div className="lg:col-span-7 flex justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="relative w-full max-w-[650px] aspect-square lg:aspect-video xl:aspect-square bg-[#101B2D]/40 border border-white/10 p-4 rounded-3xl backdrop-blur-sm shadow-[0_20px_50px_rgba(7,17,31,0.5)] overflow-hidden"
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src={activeData.imageSrc}
                    alt={activeData.imageAlt}
                    fill
                    className="object-contain rounded-2xl select-none"
                    priority
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
