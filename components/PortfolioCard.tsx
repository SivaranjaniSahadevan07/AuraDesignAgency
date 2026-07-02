"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ProjectItem } from "../data/projects";

interface PortfolioCardProps {
  project: ProjectItem;
  index: number;
}

export default function PortfolioCard({ project, index }: PortfolioCardProps) {
  // Stagger entrance variants
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 80,
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
      className="group flex flex-col bg-white border border-slate-200/50 rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
    >
      {/* Image Container with Zoom and Glassmorphic Overlay */}
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          priority={index < 2} // Priority loading for above-the-fold content
        />

        {/* Gradient Overlay for bottom text styling on default state */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent opacity-100 pointer-events-none" />

        {/* Premium Interactive Glassmorphism Hover Overlay */}
        <div className="absolute inset-0 bg-slate-950/25 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-[3px] z-10">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
            className="w-14 h-14 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-2xl transition-transform duration-300 transform scale-0 group-hover:scale-100 group-hover:rotate-12"
          >
            <ArrowUpRight className="w-6 h-6" />
          </motion.div>
        </div>
      </div>

      {/* Project Details Content */}
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        {/* Category */}
        <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
          {project.category}
        </span>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 leading-tight mb-4 group-hover:text-blue-600 transition-colors duration-200">
          {project.title}
        </h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-slate-100 text-slate-600 border border-slate-200/30"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
