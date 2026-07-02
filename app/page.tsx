import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Main Structural Container */}
      <main>
        {/* Full-width Hero Banner with background animations */}
        <Hero />

        {/* Core Capabilities & Expert Service cards */}
        <Services />

        {/* Client case studies with animated tab filters */}
        <Portfolio />

        {/* Contact coordinates & validation input form */}
        <Contact />
      </main>

      {/* Footer Navigation, Social profiles & dynamic copyright links */}
      <Footer />
    </>
  );
}
