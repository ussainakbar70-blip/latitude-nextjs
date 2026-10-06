"use client";

import { useState, useEffect, FormEvent, useCallback } from "react";
import Image from "next/image";
import {
  X,
  CheckCircle2,
  MessageCircle,
  Phone,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  MapPin,
} from "lucide-react";
import { site, buildWhatsappLink } from "@/data/site";

interface SiteSlide {
  id: string;
  badge: string;
  location: string;
  title: string;
  subtitle: string;
  priceHighlight: string;
  highlights: string;
  image: string;
  dropdownValue: string;
}

const siteSlides: SiteSlide[] = [
  {
    id: "kandhan-avenue",
    badge: "Grand Launch Offer",
    location: "Elur, Arisipalayam (Pollachi Highway 1.5 km)",
    title: "Kandhan Avenue",
    subtitle: "Premium 2 BHK Individual Houses & DTCP Plots",
    priceHighlight: "Houses from ₹29 Lakhs • Plots ₹6.20L/Cent",
    highlights: "Only ₹5L On-Hand • Up to 80% Loan • DTCP 256/2026",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    dropdownValue: "Kandhan Avenue (2 BHK Houses from ₹29L / Plots)",
  },
  {
    id: "rathna-residency",
    badge: "Future Corporation Limit",
    location: "Behind Karpagam University, Malumichampatty",
    title: "Rathna Residency",
    subtitle: "DTCP-Approved Gated Community Plots",
    priceHighlight: "Launch Price: Just ₹12.5 Lakhs / Cent",
    highlights: "33-ft Blacktop Roads • Water & EB • Solar Lights",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80",
    dropdownValue: "Rathna Residency, Malumichampatty (Plots from ₹12.5L/Cent)",
  },
  {
    id: "sri-aanandham-avenue",
    badge: "Grand Launch • Madhampatty",
    location: "700m from Main Bus Stop, Siruvani Main Rd",
    title: "Sri Aanandham Avenue",
    subtitle: "DTCP Plots & Luxury 2 BHK Duplex Villas",
    priceHighlight: "Plots ₹11.90L / Cent • Duplex from ₹45L",
    highlights: "1.8 km from Western Ring Road • Siruvani Water • DTCP 252/2026",
    image:
      "https://images.unsplash.com/photo-1524055988636-436cfa46e59e?auto=format&fit=crop&w=1000&q=80",
    dropdownValue:
      "Sri Aanandham Avenue, Madhampatty (Plots ₹11.90L/Cent / Duplex ₹45L)",
  },
];

export default function LeadPopupModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    requirement: siteSlides[0].dropdownValue,
  });

  const handleClose = () => {
    setIsOpen(false);
    try {
      sessionStorage.setItem("latitude_lead_popup_dismissed", "true");
    } catch {
      // ignore
    }
  };

  const goToSlide = useCallback((index: number) => {
    setActiveSlide(index);
    // Sync requirement dropdown if it currently matches one of the 3 site options
    const currentReq = formData.requirement;
    const isOneOfSites = siteSlides.some((s) => s.dropdownValue === currentReq);
    if (isOneOfSites) {
      setFormData((prev) => ({
        ...prev,
        requirement: siteSlides[index].dropdownValue,
      }));
    }
  }, [formData.requirement]);

  const nextSlide = useCallback(() => {
    const nextIdx = (activeSlide + 1) % siteSlides.length;
    goToSlide(nextIdx);
  }, [activeSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    const prevIdx = (activeSlide - 1 + siteSlides.length) % siteSlides.length;
    goToSlide(prevIdx);
  }, [activeSlide, goToSlide]);

  const handleRequirementChange = (value: string) => {
    setFormData((prev) => ({ ...prev, requirement: value }));
    const matchedIdx = siteSlides.findIndex((s) => s.dropdownValue === value);
    if (matchedIdx !== -1) {
      setActiveSlide(matchedIdx);
    }
  };

  // Popup display delay
  useEffect(() => {
    try {
      const isDismissed = sessionStorage.getItem("latitude_lead_popup_dismissed");
      if (!isDismissed) {
        const timer = setTimeout(() => {
          setIsOpen(true);
        }, 1800);
        return () => clearTimeout(timer);
      }
    } catch {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1800);
      return () => clearTimeout(timer);
    }
  }, []);

  // Keyboard navigation & escape listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") {
        handleClose();
      } else if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, prevSlide, nextSlide]);

  // Slideshow auto-advance timer (3.8 seconds)
  useEffect(() => {
    if (!isOpen || isPaused || submitted) return;

    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % siteSlides.length);
    }, 3800);

    return () => clearInterval(interval);
  }, [isOpen, isPaused, submitted]);

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

  const currentSlideData = siteSlides[activeSlide];
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
            className="sm:hidden absolute top-2.5 right-2.5 z-30 bg-black/60 text-white rounded-full p-1.5 focus:outline-none"
          >
            <X size={18} strokeWidth={2.5} />
          </button>

          {/* Left Column: 3-Site Slideshow */}
          <div
            className="relative w-full md:w-1/2 min-h-[260px] md:min-h-[470px] bg-navy-900 overflow-hidden select-none"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {siteSlides.map((slide, idx) => {
              const isActive = idx === activeSlide;
              return (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    isActive
                      ? "opacity-100 z-10 pointer-events-auto"
                      : "opacity-0 z-0 pointer-events-none"
                  }`}
                >
                  <Image
                    src={slide.image}
                    alt={`${slide.title} - Latitude Properties`}
                    fill
                    priority={idx === 0}
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/50 to-navy-950/40" />

                  {/* Top Bar: Floating Offer Badge & Counter */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-20">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded bg-gold text-navy-900 font-bold text-[11px] sm:text-xs shadow-lg uppercase tracking-wider">
                      <Sparkles size={13} className="animate-spin-slow shrink-0" />
                      <span>{slide.badge}</span>
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider text-white/90 bg-black/55 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-white/15">
                      Site {idx + 1} of {siteSlides.length}
                    </span>
                  </div>

                  {/* Bottom Information Overlay */}
                  <div className="absolute bottom-11 left-4 right-4 text-white z-20">
                    <div className="flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-gold-warm mb-1">
                      <MapPin size={12} className="text-gold shrink-0" />
                      <span className="truncate">{slide.location}</span>
                    </div>

                    <h4 className="font-serif text-lg sm:text-xl font-bold leading-snug drop-shadow-md text-white">
                      {slide.title}
                    </h4>

                    <p className="text-[12px] sm:text-[13px] text-white/90 font-medium mt-0.5 line-clamp-1">
                      {slide.subtitle}
                    </p>

                    <div className="mt-2 inline-flex items-center gap-1 px-2.5 py-1 bg-black/40 backdrop-blur-md rounded border border-gold/30 text-[11px] sm:text-xs text-gold-light font-bold">
                      <span>🏷️</span>
                      <span>{slide.priceHighlight}</span>
                    </div>

                    <p className="text-[10px] sm:text-[11px] text-white/80 mt-1 line-clamp-1">
                      {slide.highlights}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Left / Right Carousel Controls */}
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous Site"
              className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/45 hover:bg-black/75 text-white flex items-center justify-center transition-all backdrop-blur-sm hover:scale-110 focus:outline-none"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next Site"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/45 hover:bg-black/75 text-white flex items-center justify-center transition-all backdrop-blur-sm hover:scale-110 focus:outline-none"
            >
              <ChevronRight size={20} />
            </button>

            {/* Bottom Dots Navigation */}
            <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2 z-20">
              {siteSlides.map((slide, idx) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => goToSlide(idx)}
                  aria-label={`Show ${slide.title}`}
                  className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${
                    idx === activeSlide
                      ? "w-7 bg-gold shadow-md"
                      : "w-2 bg-white/45 hover:bg-white/80"
                  }`}
                />
              ))}
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
                  Leading Coimbatore with verified DTCP certified plots,
                  individual instant Patta, and premium 2 BHK individual houses.
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
                      onChange={(e) => handleRequirementChange(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D1D9D1] rounded-sm text-ink focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                    >
                      <option value="Kandhan Avenue (2 BHK Houses from ₹29L / Plots)">
                        Kandhan Avenue – Elur (Houses from ₹29L / Plots ₹6.20L/Cent)
                      </option>
                      <option value="Rathna Residency, Malumichampatty (Plots from ₹12.5L/Cent)">
                        Rathna Residency – Malumichampatty (Plots ₹12.5L/Cent)
                      </option>
                      <option value="Sri Aanandham Avenue, Madhampatty (Plots ₹11.90L/Cent / Duplex ₹45L)">
                        Sri Aanandham Avenue – Madhampatty (Plots ₹11.90L / Duplex ₹45L)
                      </option>
                      <option value="Residential Plot in Coimbatore">
                        Residential Plot in Coimbatore
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
