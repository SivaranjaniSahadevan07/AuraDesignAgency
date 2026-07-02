"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import PortfolioCard from "./PortfolioCard";
import { projectsData } from "../data/projects";

const categories = ["All", "UI/UX Design", "Web Development", "Branding", "Digital Art"];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter project items dynamically based on tab selection
  const filteredProjects = activeCategory === "All"
    ? projectsData
    : projectsData.filter((project) => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
      {/* Subtle Grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Our Portfolio"
          title="Bespoke Digital Works We Are Proud of"
          subtitle="Explore some of our latest case studies and craft projects developed for clients worldwide, spanning diverse technology sectors."
          align="center"
        />

        {/* Dynamic Category Filtering Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 md:mb-16">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-slate-600 hover:text-slate-900 bg-white border border-slate-200/60 shadow-sm"
                }`}
              >
                {/* Framer motion layout slider for background selector pill */}
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryPill"
                    className="absolute inset-0 bg-blue-600 rounded-full"
                    style={{ zIndex: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            );
          })}
        </div>

        {/* Portfolio Cards Grid Container */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <PortfolioCard project={project} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
