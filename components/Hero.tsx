"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Award, CheckCircle, Users } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 80, damping: 15 },
    },
  };

  const trustStats = [
    { label: "Years Experience", value: "10+", icon: Award },
    { label: "Projects Completed", value: "250+", icon: CheckCircle },
    { label: "Happy Clients", value: "99%", icon: Users },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 md:pt-36 flex items-center bg-[#F8FAFC] bg-grid-pattern overflow-hidden"
    >
      {/* Dynamic Animated Gradient Blobs in background */}
      <div className="absolute top-20 right-[-10%] w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-blue-400/20 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-10 left-[-5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-violet-400/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center py-12 md:py-20">
          
          {/* Left Column: Text & CTAs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Small Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100/50 text-blue-600 font-semibold text-xs uppercase tracking-wider mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping" />
              Next-Gen Design Agency
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6"
            >
              Designing Digital <br />
              <span className="text-gradient">Experiences</span> <br />
              That Inspire
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-600 max-w-xl leading-relaxed mb-8"
            >
              We combine design thinking, premium technology, and strategic creativity 
              to craft digital interfaces, software applications, and visual systems that scale.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-12"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-blue-600 text-white font-bold hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/20 active:scale-95 transition-all duration-300 group"
              >
                Get Started
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white border border-slate-200 text-slate-700 font-bold hover:bg-slate-50 active:scale-95 transition-all duration-300"
              >
                View Portfolio
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 md:gap-8 pt-8 border-t border-slate-200/80 w-full"
            >
              {trustStats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-2xl md:text-3xl font-black text-slate-900 mb-1">
                    {stat.value}
                  </span>
                  <span className="text-xs md:text-sm text-slate-500 font-medium leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Premium Image & Floating Shapes */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
            className="lg:col-span-5 relative flex items-center justify-center lg:justify-end"
          >
            {/* Main Premium Workspace / Art Image Container */}
            <div className="relative w-full aspect-[4/5] max-w-[420px] rounded-[48px] bg-gradient-to-tr from-blue-100 to-violet-100 border border-slate-200/50 shadow-2xl overflow-hidden animate-float">
              <Image
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80"
                alt="AURA Creative 3D Fluid Design"
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-cover"
                priority
              />
            </div>

            {/* Decorative Floating Shapes */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 bg-white border border-slate-100 p-4 rounded-3xl shadow-xl flex items-center gap-3 z-20 pointer-events-none"
            >
              <div className="w-10 h-10 rounded-2xl bg-violet-100 flex items-center justify-center text-violet-600">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div className="flex flex-col pr-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">Client Satisfaction</span>
                <span className="text-sm font-black text-slate-900">100% Guaranteed</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-6 -right-6 md:right-0 bg-white border border-slate-100 p-4 rounded-3xl shadow-xl flex items-center gap-3 z-20 pointer-events-none"
            >
              <div className="w-10 h-10 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600">
                <Award className="w-5 h-5" />
              </div>
              <div className="flex flex-col pr-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">Agency Award</span>
                <span className="text-sm font-black text-slate-900">Awwwards Nominee</span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
