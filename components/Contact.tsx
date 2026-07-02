"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import SectionHeading from "./SectionHeading";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when user begins typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) newErrors.message = "Message content is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");

    // Simulate network submission delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setStatus("success");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Decorative Blur Background Circles */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-[-10%] left-[-10%] w-[350px] h-[350px] bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Get in touch"
          title="Let's Build Something Beautiful Together"
          subtitle="Ready to elevate your digital presence? Send us a message or schedule a call. Our team will get back to you within 24 hours."
          align="center"
        />

        {/* Large Rounded Contact Card Container */}
        <div className="max-w-5xl mx-auto bg-white border border-slate-200/60 rounded-[32px] shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Column: Contact details (Slate/Dark background) */}
          <div className="lg:col-span-5 bg-[#111827] text-white p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
            {/* Glowing pattern overlay */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px]" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-violet-600/25 rounded-full blur-[80px]" />

            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                Reach out to us via email, phone, or stop by our office. We look forward to hearing your idea.
              </p>

              {/* Coordinates List */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Email Us</span>
                    <a href="mailto:hello@aura-agency.com" className="text-sm font-semibold hover:text-blue-400 transition-colors">
                      hello@aura-agency.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Call Us</span>
                    <a href="tel:+18005550199" className="text-sm font-semibold hover:text-blue-400 transition-colors">
                      +1 (800) 555-0199
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Our Studio</span>
                    <span className="text-sm font-semibold text-slate-300">
                      100 Creative Blvd, Suite 400<br />San Francisco, CA 94107
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Micro details at bottom */}
            <div className="relative z-10 pt-12 border-t border-white/10 mt-12 lg:mt-0">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">Hours of Operation</span>
              <p className="text-xs text-slate-400">Monday – Friday: 9:00 AM – 6:00 PM PST</p>
            </div>
          </div>

          {/* Right Column: Submission Form */}
          <div className="lg:col-span-7 p-8 md:p-12 relative flex flex-col justify-center bg-white">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                // Success screen
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-green-50 text-green-600 flex items-center justify-center border border-green-100 mb-6">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-600 text-sm max-w-md mb-8">
                    Thank you for reaching out to AURA. One of our design coordinators will review your brief and follow up shortly.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="px-6 py-2.5 rounded-full bg-slate-900 hover:bg-blue-600 text-white font-semibold transition-all duration-300"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                // Form screen
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                  noValidate
                >
                  {/* Name field */}
                  <div className="flex flex-col">
                    <label htmlFor="name" className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-5 py-3.5 rounded-2xl bg-slate-50 border text-slate-900 text-sm transition-all duration-300 input-focus ${
                          errors.name ? "border-red-400 bg-red-50/10 focus:ring-red-400/20 focus:border-red-400" : "border-slate-200"
                        }`}
                        placeholder="John Doe"
                        disabled={status === "submitting"}
                      />
                      {errors.name && (
                        <div className="flex items-center gap-1.5 mt-2 text-xs font-semibold text-red-500">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.name}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col">
                    <label htmlFor="email" className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-5 py-3.5 rounded-2xl bg-slate-50 border text-slate-900 text-sm transition-all duration-300 input-focus ${
                          errors.email ? "border-red-400 bg-red-50/10 focus:ring-red-400/20 focus:border-red-400" : "border-slate-200"
                        }`}
                        placeholder="john@example.com"
                        disabled={status === "submitting"}
                      />
                      {errors.email && (
                        <div className="flex items-center gap-1.5 mt-2 text-xs font-semibold text-red-500">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.email}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Message field */}
                  <div className="flex flex-col">
                    <label htmlFor="message" className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                      Your Message
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className={`w-full px-5 py-3.5 rounded-2xl bg-slate-50 border text-slate-900 text-sm transition-all duration-300 input-focus resize-none ${
                          errors.message ? "border-red-400 bg-red-50/10 focus:ring-red-400/20 focus:border-red-400" : "border-slate-200"
                        }`}
                        placeholder="Describe your project goals or request details..."
                        disabled={status === "submitting"}
                      />
                      {errors.message && (
                        <div className="flex items-center gap-1.5 mt-2 text-xs font-semibold text-red-500">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.message}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all duration-300 disabled:bg-blue-600/50 shadow-lg shadow-blue-500/10 active:scale-[0.99] group"
                  >
                    {status === "submitting" ? (
                      <>
                        <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
