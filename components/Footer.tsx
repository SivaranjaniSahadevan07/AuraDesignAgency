"use client";

import { useState, useEffect } from "react";
import { Globe, Link, Share2, ArrowUp } from "lucide-react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  // Set year only on the client to prevent SSR/hydration mismatch
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  // Scroll back to top behavior
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 py-16 md:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">

        {/* Main Grid content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-slate-900">

          {/* Logo & Description */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <a href="#home" className="flex items-center gap-2 group mb-6">
              <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center text-white font-black text-sm tracking-tighter shadow-lg group-hover:scale-105 transition-transform duration-300">
                A
              </span>
              <span className="text-xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors duration-300">
                AURA
              </span>
            </a>
            <p className="text-sm leading-relaxed max-w-sm text-slate-400">
              AURA is a premium design and development agency. We craft high-performance digital products,
              bespoke visual brand identities, and custom technology solutions for leading enterprises and growing startups.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 flex flex-col">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-6">
              Company
            </span>
            <nav className="flex flex-col gap-4">
              <a href="#home" className="text-sm hover:text-white transition-colors duration-200">
                Home
              </a>
              <a href="#services" className="text-sm hover:text-white transition-colors duration-200">
                Services
              </a>
              <a href="#portfolio" className="text-sm hover:text-white transition-colors duration-200">
                Portfolio
              </a>
              <a href="#contact" className="text-sm hover:text-white transition-colors duration-200">
                Contact Us
              </a>
            </nav>
          </div>

          {/* Core Services Index Column */}
          <div className="lg:col-span-4 flex flex-col">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-6">
              Expertise
            </span>
            <ul className="space-y-4">
              <li className="text-sm">UI/UX Interface Design</li>
              <li className="text-sm">Web Application Engineering</li>
              <li className="text-sm">Brand Strategy & Systems</li>
              <li className="text-sm">Search Optimization & Growth</li>
            </ul>
          </div>

        </div>

        {/* Footer Sub-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <span className="text-xs text-slate-500 order-2 sm:order-1">
            &copy; {currentYear ?? ""} AURA Agency. All rights reserved. Made for design excellence.
          </span>

          {/* Socials & Scroll to Top button */}
          <div className="flex items-center gap-6 order-1 sm:order-2">
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-slate-900 hover:bg-blue-600 hover:text-white text-slate-400 flex items-center justify-center border border-slate-900 transition-colors"
                aria-label="Visit AURA Website"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-slate-900 hover:bg-blue-600 hover:text-white text-slate-400 flex items-center justify-center border border-slate-900 transition-colors"
                aria-label="Share AURA"
              >
                <Share2 className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-slate-900 hover:bg-blue-600 hover:text-white text-slate-400 flex items-center justify-center border border-slate-900 transition-colors"
                aria-label="AURA Links"
              >
                <Link className="w-4 h-4" />
              </a>
            </div>

            {/* Back to top scroll button */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-2xl bg-slate-900 hover:bg-blue-600 text-white flex items-center justify-center border border-slate-800 transition-colors"
              aria-label="Scroll to top of the page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
