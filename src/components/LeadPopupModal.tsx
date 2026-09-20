"use client";

import { useState, useEffect, FormEvent } from "react";
import Image from "next/image";
import { X, CheckCircle2, MessageCircle, Phone, Sparkles } from "lucide-react";
import { site, buildWhatsappLink } from "@/data/site";

export default function LeadPopupModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    requirement: "Residential Plot (40% Festive Offer)",
  });

  useEffect(() => {
    // Check if dismissed in current session
    try {
      const isDismissed = sessionStorage.getItem("latitude_lead_popup_dismissed");
      if (!isDismissed) {
        // Trigger popup after 1.8 seconds delay
        const timer = setTimeout(() => {
          setIsOpen(true);
        }, 1800);
        return () => clearTimeout(timer);
      }
    } catch {
      // Fallback if sessionStorage is not accessible
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1800);
      return () => clearTimeout(timer);
    }
  }, []);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    try {
      sessionStorage.setItem("latitude_lead_popup_dismissed", "true");
    } catch {
      // ignore
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;

    // Simulate enquiry capture and provide instant WhatsApp handoff
    setSubmitted(true);
    try {
      sessionStorage.setItem("latitude_lead_popup_dismissed", "true");
    } catch {
      // ignore
    }
  };

  if (!isOpen) return null;

  const whatsappMessage = `Hi Latitude Properties! My name is ${formData.name}. I am interested in: ${formData.requirement}. My contact number is ${formData.phone}. Please share layout pricing & availability.`;

  return (
    <div
      onClick={handleClose}
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm animate-fadeIn"
    >
      {/* Container holding Modal + Dismiss link underneath */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl flex flex-col items-center my-auto"
      >
        {/* Desktop Close 'X' Button above right corner */}
        <button
          onClick={handleClose}
          aria-label="Close modal"
          className="hidden sm:block absolute -top-10 right-0 text-white/90 hover:text-white transition-transform hover:scale-110 p-1.5 focus:outline-none z-10"
        >
          <X size={26} strokeWidth={2.5} />
        </button>

        {/* Modal Card */}
        <div className="relative w-full bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col md:flex-row border border-white/20 max-h-[88vh] md:max-h-none overflow-y-auto">
          {/* Mobile inside close button */}
          <button
            onClick={handleClose}
            aria-label="Close modal"
            className="sm:hidden absolute top-2.5 right-2.5 z-20 bg-black/60 text-white rounded-full p-1.5 focus:outline-none"
          >
            <X size={18} strokeWidth={2.5} />
          </button>
          {/* Left Column: Architectural Photo */}
          <div className="relative w-full md:w-1/2 min-h-[220px] md:min-h-[460px] bg-navy-900">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
              alt="Latitude Properties Luxury Residential Villa & Plots in Coimbatore"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-navy-900/30" />

            {/* Floating Offer Badge */}
            <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-gold text-navy-900 font-bold text-xs shadow-lg uppercase tracking-wider">
              <Sparkles size={14} className="animate-spin-slow" />
              <span>40% Festive Discount</span>
            </div>

            {/* Bottom Caption on Left Image */}
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold-warm">
                Kalampalayam, Coimbatore
              </p>
              <p className="font-serif text-lg font-medium leading-snug">
                DTCP & RERA Approved Villa Plots
              </p>
              <p className="text-[11px] text-white/80 mt-0.5">
                Individual Patta • Pure Siruvani Water • 30ft Roads
              </p>
            </div>
          </div>

          {/* Right Column: Content & Lead Form */}
          <div className="w-full md:w-1/2 bg-[#F7F9F6] p-6 sm:p-8 md:p-9 flex flex-col justify-center text-ink">
            {!submitted ? (
              <>
                {/* Eyebrow */}
                <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#4A5D4E] mb-1.5">
                  Ready to Build Your Dream Home?
                </p>

                {/* Brand Name Heading */}
                <h3 className="text-2xl sm:text-[28px] font-extrabold text-navy-900 tracking-tight leading-tight mb-2">
                  Latitude Properties
                </h3>

                {/* Subtitle / Description */}
                <p className="text-xs sm:text-[13px] text-muted leading-relaxed mb-5">
                  Leading Coimbatore with verified DTCP & RERA certified plots,
                  individual instant Patta, and 100% pure Siruvani drinking water.
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D1D9D1] rounded-sm text-ink placeholder-[#8F9B8F] focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      required
                      placeholder="WhatsApp Mobile Number (+91)"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D1D9D1] rounded-sm text-ink placeholder-[#8F9B8F] focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                    />
                  </div>

                  <div>
                    <select
                      value={formData.requirement}
                      onChange={(e) =>
                        setFormData({ ...formData, requirement: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D1D9D1] rounded-sm text-ink focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                    >
                      <option value="Residential Plot (40% Festive Offer)">
                        Residential Plot (40% Festive Offer)
                      </option>
                      <option value="East / Corner Facing Plot">
                        East / Corner Facing Plot
                      </option>
                      <option value="Schedule Free Cab Site Visit">
                        Schedule Free Cab Site Visit
                      </option>
                      <option value="Pricing & Layout Brochure">
                        Pricing & Layout Brochure
                      </option>
                    </select>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full mt-2 py-3 px-6 bg-[#F5B400] hover:bg-[#E0A200] active:scale-[0.99] text-navy-900 font-bold text-sm uppercase tracking-wider rounded-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <span>Submit</span>
                  </button>
                </form>

                <p className="text-[11px] text-[#7A8B7A] text-center mt-3 flex items-center justify-center gap-1.5">
                  <span>🔒 100% Confidential • Instant Call Back within 15 mins</span>
                </p>
              </>
            ) : (
              /* Success State */
              <div className="text-center py-4 px-2 animate-fadeIn">
                <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-inner">
                  <CheckCircle2 size={32} />
                </div>
                <h4 className="text-xl font-bold text-navy-900 mb-1">
                  Enquiry Received!
                </h4>
                <p className="text-xs sm:text-sm text-muted mb-5 leading-relaxed">
                  Thank you, <span className="font-semibold text-navy-900">{formData.name}</span>. Our Senior Property Consultant is reviewing your requirement and will call you at <span className="font-semibold text-navy-900">{formData.phone}</span> shortly.
                </p>

                <div className="space-y-2.5">
                  <a
                    href={buildWhatsappLink(whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs sm:text-sm rounded-sm shadow transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={17} />
                    <span>Chat on WhatsApp Instantly</span>
                  </a>

                  <a
                    href={`tel:${site.phonePrimaryTel}`}
                    className="w-full py-2.5 px-4 bg-navy-900 hover:bg-navy-800 text-white font-semibold text-xs sm:text-sm rounded-sm shadow transition-all flex items-center justify-center gap-2"
                  >
                    <Phone size={16} className="text-gold" />
                    <span>Call Sales: {site.phonePrimary}</span>
                  </a>
                </div>

                <button
                  onClick={handleClose}
                  className="text-xs text-muted hover:text-navy-900 underline mt-4 inline-block font-medium"
                >
                  Close this window & explore website
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Dismiss Link matching Reference Image */}
        <button
          onClick={handleClose}
          className="mt-3.5 text-xs sm:text-sm text-white/80 hover:text-white transition-colors underline-offset-4 hover:underline focus:outline-none font-medium"
        >
          No thanks, I&apos;m not interested!
        </button>
      </div>
    </div>
  );
}
