"use client";

import SectionHeading from "./SectionHeading";
import ServiceCard from "./ServiceCard";
import { servicesData } from "../data/services";

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Subtle background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Animated Section Heading */}
        <SectionHeading
          badge="Our Expertise"
          title="Creative Solutions Designed to Grow Your Business"
          subtitle="We deliver high-end digital craftsmanship across design, development, and growth strategy to help startups and enterprises succeed."
          align="center"
        />

        {/* Responsive Services Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
