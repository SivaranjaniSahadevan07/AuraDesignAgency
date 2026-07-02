"use client";

import { motion } from "framer-motion";
import { Layout, Code, Layers, TrendingUp, ArrowRight } from "lucide-react";
import { ServiceItem } from "../data/services";

// Define a map of Lucide Icons matching the ServiceItem interface
const IconMap = {
  Layout: Layout,
  Code: Code,
  Layers: Layers,
  TrendingUp: TrendingUp,
};

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const IconComponent = IconMap[service.iconName];

  // Animation variants for smooth grid stagger entry
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -8, scale: 1.01 }}
      className="group relative flex flex-col justify-between p-8 bg-white border border-slate-200/80 rounded-3xl shadow-sm hover:shadow-xl hover:border-blue-600/20 transition-all duration-300 overflow-hidden"
    >
      {/* Dynamic glow effect background on hover */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-600/5 to-violet-600/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div>
        {/* Animated Icon Container */}
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-600 border border-blue-100 mb-6 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-violet-600 group-hover:text-white transition-all duration-300">
          <IconComponent className="w-6 h-6 transition-transform duration-300 group-hover:rotate-6" />
        </div>

        {/* Service Title */}
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300 mb-3">
          {service.title}
        </h3>

        {/* Service Description */}
        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Feature List */}
        <ul className="space-y-2 mb-8">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-xs text-slate-500 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-blue-500 transition-colors duration-300 mr-2" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Button link */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-blue-600 transition-colors duration-300">
          Explore Services
        </span>
        <div className="w-8 h-8 rounded-full bg-slate-50 text-slate-800 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </div>
      </div>
    </motion.div>
  );
}
