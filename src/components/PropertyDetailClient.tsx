"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  MapPin,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Phone,
  ArrowLeft,
  Share2,
  Check,
  Route,
  Droplets,
  Sun,
  Shield,
  Trees,
  Zap,
  Compass,
  Waves,
  Grid3x3,
  MessageCircle,
  GraduationCap,
  Briefcase,
  HeartPulse,
  Landmark,
  School,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SiteLayoutViewer from "@/components/SiteLayoutViewer";
import SiteLayoutMap from "@/components/SiteLayoutMap";
import { Project } from "@/data/projects";
import { site, buildWhatsappLink } from "@/data/site";

const amenityIconMap: Record<string, any> = {
  Route,
  Droplets,
  Sun,
  Shield,
  Trees,
  Zap,
  Compass,
  Waves,
  Grid3x3,
};

const neighborhoodIconMap: Record<string, any> = {
  Route,
  School,
  GraduationCap,
  Briefcase,
  HeartPulse,
  Landmark,
};

export default function PropertyDetailClient({ project }: { project: Project }) {
  const [activeImage, setActiveImage] = useState(project.img);
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    message: `Hi Latitude Properties, I am interested in visiting ${project.title} and exploring available units and pricing.`,
  });

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${project.title} - Latitude Properties`,
        text: `Check out ${project.title} layout map & property details!`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const isAvailable = project.status === "available";
  const isBooked = project.status === "booked";
  const isSold = project.status === "sold";

  return (
    <main className="bg-bg min-h-screen">
      <Navbar />

      {/* Top Breadcrumb & Action Bar */}
      <div className="pt-28 pb-6 bg-navy-900 text-white border-b border-white/10">
        <div className="max-w-[1240px] mx-auto px-5 md:px-10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-[#EDEAE0]">
            <Link href="/" className="hover:text-gold-warm transition-colors flex items-center gap-1.5">
              <ArrowLeft size={16} />
              Home
            </Link>
            <span className="text-white/40">/</span>
            <Link href="/#sites" className="hover:text-gold-warm transition-colors">
              Our Sites
            </Link>
            <span className="text-white/40">/</span>
            <span className="text-gold-warm font-medium truncate max-w-[200px] sm:max-w-none">
              {project.title}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white text-xs px-3 py-1.5 rounded-sm transition-colors"
            >
              <Share2 size={14} />
              {copied ? "Link Copied!" : "Share"}
            </button>
            <a
              href={`tel:${site.phonePrimaryTel}`}
              className="inline-flex items-center gap-1.5 bg-gradient-to-br from-gold-warm to-gold text-navy-900 font-semibold text-xs px-4 py-1.5 rounded-sm"
            >
              <Phone size={14} />
              Call Now
            </a>
          </div>
        </div>
      </div>

      {/* Hero Site Title & Launch Callout */}
      <section className="bg-navy-900 text-white pt-6 pb-12">
        <div className="max-w-[1240px] mx-auto px-5 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/15">
            <div>
              <div className="flex flex-wrap items-center gap-2.5 mb-3">
                <span className="bg-gold-warm text-navy-900 font-bold text-xs uppercase px-3 py-1 rounded-sm tracking-wider">
                  {project.tag}
                </span>

                {isAvailable && (
                  <span className="bg-gradient-to-r from-navy-800 to-navy-900 border border-gold/40 text-gold-warm text-xs font-bold uppercase px-3 py-1 rounded-sm flex items-center gap-1 shadow-md">
                    <Sparkles size={13} className="text-gold-warm" />
                    {project.launchOfferTitle || "DTCP Approved Layout"}
                  </span>
                )}
                {isBooked && (
                  <span className="bg-amber-600 text-white text-xs font-bold uppercase px-3 py-1 rounded-sm">
                    Token Advance Received • SRO Processing
                  </span>
                )}
                {isSold && (
                  <span className="bg-emerald-700 text-white text-xs font-bold uppercase px-3 py-1 rounded-sm">
                    100% Sold Out & Handed Over
                  </span>
                )}
              </div>

              <h1 className="font-serif text-3xl md:text-5xl font-bold text-white mb-3">
                {project.title}
              </h1>

              <div className="flex items-center gap-2 text-[#EDEAE0] text-sm md:text-base">
                <MapPin size={18} className="text-gold-warm flex-shrink-0" />
                <span>{project.location}</span>
                <span className="text-white/30">•</span>
                <span className="text-gold-warm font-medium">{project.type}</span>
              </div>
            </div>

            {/* Pricing Showcase Card */}
            <div className="bg-navy-800/90 border-2 border-gold/60 p-5 rounded-sm shadow-xl max-w-md w-full">
              {project.houseStartingPrice ? (
                <div>
                  <div className="flex items-center justify-between text-xs text-gold-warm font-semibold mb-1">
                    <span className="flex items-center gap-1 font-bold tracking-wider">
                      <Sparkles size={14} className="text-gold-warm" />
                      {project.launchOfferTitle || "GRAND LAUNCH OFFER"}
                    </span>
                    <span className="bg-emerald-600 text-white font-bold px-2 py-0.5 rounded text-[11px]">
                      DTCP APPROVED
                    </span>
                  </div>

                  <div className="text-xs text-[#EDEAE0] uppercase tracking-wide mt-1">
                    Premium 2 BHK Individual Houses
                  </div>
                  <div className="font-serif text-2xl md:text-3xl font-bold text-white my-1">
                    {project.houseStartingPrice}
                  </div>

                  <div className="flex items-center justify-between text-xs mt-2 pt-2 border-t border-white/10">
                    <span className="text-emerald-400 font-semibold">
                      Plots: {project.plotRatePerCent}
                    </span>
                    <span className="text-gold-warm font-bold">
                      {project.onHandAmount}
                    </span>
                  </div>
                  <div className="text-[11px] text-white/70 mt-1">
                    *{project.bankLoanAssistance}
                  </div>
                </div>
              ) : project.plotRatePerCent ? (
                <div>
                  <div className="flex items-center justify-between text-xs text-gold-warm font-semibold mb-1">
                    <span className="flex items-center gap-1 font-bold tracking-wider">
                      <Sparkles size={14} className="text-gold-warm" />
                      {project.launchOfferTitle || "GRAND LAUNCH OFFER"}
                    </span>
                    <span className="bg-emerald-600 text-white font-bold px-2 py-0.5 rounded text-[11px]">
                      DTCP APPROVED
                    </span>
                  </div>

                  <div className="text-xs text-[#EDEAE0] uppercase tracking-wide mt-1">
                    Limited Launch Price
                  </div>
                  <div className="font-serif text-2xl md:text-3xl font-bold text-white my-1">
                    {project.plotRatePerCent}
                  </div>

                  <div className="flex items-center justify-between text-xs mt-2 pt-2 border-t border-white/10">
                    <span className="text-emerald-400 font-semibold">
                      Future Corporation Limit
                    </span>
                    <span className="text-gold-warm font-bold">
                      33-ft Blacktop Roads
                    </span>
                  </div>
                  <div className="text-[11px] text-white/70 mt-1">
                    Behind Karpagam University • Pollachi Road 650m
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex items-center justify-between text-xs text-gold-warm font-semibold mb-1">
                    <span className="flex items-center gap-1">
                      <ShieldCheck size={14} className="text-gold-warm" />
                      DTCP APPROVED RESIDENTIAL SITES
                    </span>
                    <span className="bg-emerald-600 text-white font-bold px-2 py-0.5 rounded text-[11px]">
                      AVAILABLE
                    </span>
                  </div>

                  <div className="flex items-baseline gap-3 my-1">
                    <span className="font-serif text-3xl md:text-4xl font-bold text-white">
                      ₹{(project.offerPrice / 100000).toFixed(2)} Lakhs
                    </span>
                    <span className="text-white/70 text-xs">
                      (Starting Price)
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs text-emerald-400 mt-2 pt-2 border-t border-white/10">
                    <span>Rate: ₹{project.ratePerSqFtOffer}/sq.ft</span>
                    <span className="text-gold-warm font-medium">100% Clear Titles & Patta</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Quick Specifications Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 text-xs text-[#EDEAE0]">
            <div>
              <span className="text-white/60 block">Layout Approval</span>
              <strong className="text-white text-sm font-semibold">
                {project.dtcpApprovalNumber || project.specs.approvalNumber}
              </strong>
            </div>
            <div>
              <span className="text-white/60 block">Road Width</span>
              <strong className="text-white text-sm font-semibold">
                {project.specs.roadWidth}
              </strong>
            </div>
            <div>
              <span className="text-white/60 block">Patta Status</span>
              <strong className="text-white text-sm font-semibold">
                Instant Individual Patta
              </strong>
            </div>
            <div>
              <span className="text-white/60 block">Bank Loan</span>
              <strong className="text-gold-warm text-sm font-semibold">
                {project.bankLoanAssistance || "Up to 80%-85% Approved"}
              </strong>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Details Grid */}
      <section className="py-12">
        <div className="max-w-[1240px] mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left 2 Columns: Gallery, Master Layout Map & Plot Status, Specs, Amenities */}
            <div className="lg:col-span-2 space-y-12">
              {/* Photo Gallery with Switcher */}
              <div className="bg-white p-4 border border-[#ECE9DF] rounded-sm shadow-sm">
                <div className="relative h-[360px] md:h-[460px] w-full overflow-hidden rounded-sm mb-4">
                  <Image
                    src={activeImage}
                    alt={`${project.title} photographic view in Coimbatore`}
                    fill
                    priority
                    className="object-cover transition-all duration-300"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                  />
                  <div className="absolute bottom-3 left-3 bg-navy-900/80 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-sm">
                    {project.title} • Photographic View
                  </div>
                </div>

                {project.gallery && project.gallery.length > 1 && (
                  <div className="grid grid-cols-4 gap-3">
                    {project.gallery.map((img, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setActiveImage(img)}
                        className={`relative h-20 rounded-sm overflow-hidden border-2 transition-all ${
                          activeImage === img
                            ? "border-gold scale-[1.02] shadow-md"
                            : "border-transparent opacity-75 hover:opacity-100"
                        }`}
                      >
                        <Image
                          src={img}
                          alt={`${project.title} view ${idx + 1}`}
                          fill
                          className="object-cover"
                          sizes="150px"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Master Layout Map & Real-Time Plot Availability Section */}
              <SiteLayoutViewer
                project={project}
                onSelectPlot={(plot) => {
                  setFormData((prev) => ({
                    ...prev,
                    message: `Hi Latitude Properties, I am interested in Plot #${plot.plotNumber} (${plot.areaCents} / ${plot.areaSqFt} sq.ft) at ${project.title}. Please share available plot layout details and booking steps.`,
                  }));
                }}
              />

              {/* Inch-by-Inch Architectural & Structural Specifications */}
              <div className="bg-white p-6 md:p-8 border border-[#ECE9DF] rounded-sm shadow-sm">
                <div className="border-b border-[#ECE9DF] pb-5 mb-6">
                  <p className="uppercase text-xs font-semibold tracking-[0.28em] text-gold">
                    Complete Transparency
                  </p>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy-900 mt-1">
                    Inch-by-Inch Site Details & Specifications
                  </h2>
                  <p className="text-muted text-sm mt-2">
                    Every dimension, road width, legal approval, and infrastructure detail verified down to the exact measurement.
                  </p>
                </div>

                {/* Key Dimensions Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-bg rounded-sm border border-[#ECE9DF] mb-8">
                  <div>
                    <span className="text-xs text-muted block">Plot Dimensions</span>
                    <strong className="text-navy-900 text-sm font-semibold">
                      {project.specs.plotDimensions}
                    </strong>
                  </div>
                  <div>
                    <span className="text-xs text-muted block">Total Plot Area</span>
                    <strong className="text-navy-900 text-sm font-semibold">
                      {project.specs.totalPlotArea}
                    </strong>
                  </div>
                  <div>
                    <span className="text-xs text-muted block">Facing Direction</span>
                    <strong className="text-navy-900 text-sm font-semibold">
                      {project.specs.facing}
                    </strong>
                  </div>
                  <div>
                    <span className="text-xs text-muted block">Road Width</span>
                    <strong className="text-navy-900 text-sm font-semibold">
                      {project.specs.roadWidth}
                    </strong>
                  </div>
                </div>

                {/* Technical Construction & Legal Specifications Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <SpecCard
                    title="Legal & Approval Authority"
                    icon={ShieldCheck}
                    items={[
                      { label: "DTCP Approval", value: project.dtcpApprovalNumber || project.specs.approvalNumber },
                      { label: "Survey Number", value: project.surveyNumber || "Revenue Sub-divided" },
                      { label: "Patta Status", value: project.specs.pattaStatus },
                      { label: "Bank Approval", value: project.bankLoanAssistance || "SBI, HDFC, Canara Pre-approved" },
                    ]}
                  />

                  <SpecCard
                    title="Civic & Road Infrastructure"
                    icon={Route}
                    items={[
                      { label: "Internal Roads", value: project.specs.roadWidth },
                      { label: "Water Facility", value: project.specs.waterDrainage },
                      { label: "Power Supply", value: project.specs.electricalPlumbing },
                      { label: "Drainage", value: "Underground Stormwater Drainage" },
                    ]}
                  />

                  <SpecCard
                    title="Residential Construction Scope"
                    icon={Sparkles}
                    items={[
                      { label: "Built-up Scope", value: project.specs.builtUpArea || "Customizable Layout" },
                      { label: "Usable Carpet Area", value: project.specs.carpetArea || "100% Usable Residential Space" },
                      { label: "Vastu Compliance", value: "100% Vastu Orientations" },
                      { label: "Ceiling Height", value: project.specs.ceilingHeight },
                    ]}
                  />

                  <SpecCard
                    title="Structural Engineering"
                    icon={CheckCircle2}
                    items={[
                      { label: "Foundation", value: project.specs.foundation },
                      { label: "Superstructure", value: project.specs.superstructure },
                      { label: "Flooring", value: project.specs.flooring },
                      { label: "Doors & Windows", value: project.specs.doorsWindows },
                    ]}
                  />
                </div>
              </div>

              {/* On-Site Amenities & Living Standards */}
              <div className="bg-white p-6 md:p-8 border border-[#ECE9DF] rounded-sm shadow-sm">
                <p className="uppercase text-xs font-semibold tracking-[0.28em] text-gold mb-1">
                  Community Standards
                </p>
                <h3 className="font-serif text-2xl font-bold text-navy-900 mb-6">
                  Community Infrastructure & Features
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {project.amenitiesList.map((amenity, idx) => {
                    const IconComponent = amenityIconMap[amenity.iconName] || Shield;
                    return (
                      <div
                        key={idx}
                        className="flex items-start gap-3.5 p-4 rounded-sm border border-[#ECE9DF] bg-bg hover:border-gold/60 transition-colors"
                      >
                        <div className="p-2.5 bg-navy-900 text-gold-warm rounded-sm flex-shrink-0">
                          <IconComponent size={20} />
                        </div>
                        <div>
                          <h4 className="font-serif font-bold text-navy-900 text-base mb-1">
                            {amenity.name}
                          </h4>
                          <p className="text-muted text-xs leading-relaxed m-0">
                            {amenity.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Comprehensive Description & Neighborhood Highlights */}
              <div className="bg-white p-6 md:p-8 border border-[#ECE9DF] rounded-sm shadow-sm">
                <h3 className="font-serif text-2xl font-bold text-navy-900 mb-4">
                  About {project.title}
                </h3>
                <p className="text-muted text-sm md:text-base leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Structured Strategic Neighborhood Connectivity */}
                {project.neighborhoodConnectivity && project.neighborhoodConnectivity.length > 0 && (
                  <div className="mb-8 pt-6 border-t border-[#ECE9DF]">
                    <div className="flex items-center gap-2 mb-4">
                      <MapPin size={18} className="text-gold" />
                      <h4 className="font-serif text-xl font-bold text-navy-900 m-0">
                        Strategic Connectivity, Education & Employment Proximity
                      </h4>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.neighborhoodConnectivity.map((cat, cIdx) => {
                        const IconComponent = neighborhoodIconMap[cat.iconName] || MapPin;
                        return (
                          <div
                            key={cIdx}
                            className="p-4 bg-bg rounded-sm border border-[#ECE9DF] flex flex-col justify-between"
                          >
                            <div className="flex items-center gap-2 mb-2.5 pb-2 border-b border-[#E6E2D6]">
                              <div className="p-1.5 bg-navy-900 text-gold-warm rounded">
                                <IconComponent size={16} />
                              </div>
                              <span className="font-serif font-bold text-navy-900 text-sm">
                                {cat.category}
                              </span>
                            </div>
                            <ul className="space-y-1.5 text-xs">
                              {cat.items.map((item, iIdx) => (
                                <li
                                  key={iIdx}
                                  className="flex items-center justify-between text-navy-900/90 gap-2"
                                >
                                  <span className="font-medium truncate">{item.name}</span>
                                  <span className="bg-white px-2 py-0.5 rounded border border-[#EDE9E0] text-emerald-800 font-semibold flex-shrink-0 text-[11px]">
                                    {item.distanceTime}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                <h4 className="font-serif text-lg font-semibold text-navy-900 mb-3">
                  Key Location Highlights:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.highlights.map((hl, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-sm text-navy-900">
                      <CheckCircle2 size={17} className="text-emerald-600 flex-shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Pricing & Booking / Enquiry Form */}
            <div className="space-y-6">
              {/* Grand Launch Offer / Pricing Card */}
              <div className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white p-6 rounded-sm border-2 border-gold shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center gap-2 text-gold-warm text-xs font-bold tracking-wider uppercase mb-2">
                  <Sparkles size={16} />
                  {project.launchOfferTitle || "Verified Property Offer"}
                </div>

                {project.houseStartingPrice ? (
                  <>
                    <div className="text-2xl font-serif font-bold text-white mb-1">
                      {project.houseStartingPrice}
                    </div>
                    <p className="text-xs text-[#EDEAE0] mb-4">
                      Grand launch opportunity at Elur, Arisipalayam. Individual houses & residential plots.
                    </p>

                    <div className="bg-white/10 p-4 rounded-sm border border-white/15 space-y-2 mb-4 text-xs">
                      <div className="flex justify-between">
                        <span className="text-white/80">Plots per cent:</span>
                        <span className="font-bold text-gold-warm">{project.plotRatePerCent}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/80">Down Payment:</span>
                        <span className="font-bold text-emerald-400">{project.onHandAmount}</span>
                      </div>
                      <div className="flex justify-between border-t border-white/10 pt-2">
                        <span className="text-white/80">Bank Loan:</span>
                        <span className="text-white font-medium">Up to 80% Assistance*</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/80">DTCP Layout:</span>
                        <span className="text-white font-medium">{project.dtcpApprovalNumber}</span>
                      </div>
                    </div>

                    <a
                      href={buildWhatsappLink(
                        `Hello Latitude Properties, I would like to book a site visit for ${project.title} (${project.houseStartingPrice} / Plots: ${project.plotRatePerCent}).`
                      )}
                      target="_blank"
                      rel="noopener"
                      className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-br from-gold-warm to-gold text-navy-900 font-bold text-sm py-3 px-4 rounded-sm shadow hover:scale-[1.02] transition-transform"
                    >
                      <MessageCircle size={18} />
                      Enquire on WhatsApp
                    </a>
                  </>
                ) : project.plotRatePerCent ? (
                  <>
                    <div className="text-2xl font-serif font-bold text-white mb-1">
                      {project.plotRatePerCent}
                    </div>
                    <p className="text-xs text-[#EDEAE0] mb-4">
                      Grand launch gated community plots in Future Corporation Limit, behind Karpagam University.
                    </p>

                    <div className="bg-white/10 p-4 rounded-sm border border-white/15 space-y-2 mb-4 text-xs">
                      <div className="flex justify-between">
                        <span className="text-white/80">Launch Price:</span>
                        <span className="font-bold text-gold-warm">{project.plotRatePerCent}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/80">Road Width:</span>
                        <span className="font-bold text-emerald-400">33-ft Blacktop Roads</span>
                      </div>
                      <div className="flex justify-between border-t border-white/10 pt-2">
                        <span className="text-white/80">Approval:</span>
                        <span className="text-white font-medium">DTCP-Approved Layouts</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/80">Location:</span>
                        <span className="text-white font-medium">Pollachi Rd 650m • L&T Bypass 1.2km</span>
                      </div>
                    </div>

                    <a
                      href={buildWhatsappLink(
                        `Hello Latitude Properties, I would like to book a site visit for ${project.title}, Malumichampatty (${project.plotRatePerCent}).`
                      )}
                      target="_blank"
                      rel="noopener"
                      className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-br from-gold-warm to-gold text-navy-900 font-bold text-sm py-3 px-4 rounded-sm shadow hover:scale-[1.02] transition-transform"
                    >
                      <MessageCircle size={18} />
                      Enquire on WhatsApp
                    </a>
                  </>
                ) : (
                  <>
                    <div className="text-2xl font-serif font-bold text-white mb-1">
                      ₹{(project.offerPrice / 100000).toFixed(2)} Lakhs
                    </div>
                    <p className="text-xs text-[#EDEAE0] mb-4">
                      DTCP approved residential plots with immediate individual Patta transfer in Coimbatore.
                    </p>

                    <div className="bg-white/10 p-4 rounded-sm border border-white/15 space-y-2 mb-4 text-xs">
                      <div className="flex justify-between">
                        <span className="text-white/80">Starting Rate:</span>
                        <span className="font-bold text-gold-warm">₹{project.ratePerSqFtOffer}/sq.ft</span>
                      </div>
                      <div className="flex justify-between border-t border-white/10 pt-2">
                        <span className="text-white/80">Bank Loan:</span>
                        <span className="text-white font-medium">Up to 85% Assistance</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/80">Approval:</span>
                        <span className="text-white font-medium">{project.dtcpApprovalNumber || "DTCP Approved"}</span>
                      </div>
                    </div>

                    <a
                      href={buildWhatsappLink(
                        `Hello Latitude Properties, I would like more details about ${project.title} and current plot availability.`
                      )}
                      target="_blank"
                      rel="noopener"
                      className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-br from-gold-warm to-gold text-navy-900 font-bold text-sm py-3 px-4 rounded-sm shadow hover:scale-[1.02] transition-transform"
                    >
                      <MessageCircle size={18} />
                      Enquire on WhatsApp
                    </a>
                  </>
                )}
              </div>

              {/* Schedule Free Site Visit Form */}
              <div id="site-visit-form" className="bg-white p-6 border border-[#ECE9DF] rounded-sm shadow-sm">
                <h3 className="font-serif text-xl font-bold text-navy-900 mb-1">
                  Schedule a Free Site Visit
                </h3>
                <p className="text-xs text-muted mb-4">
                  Free pick-up and drop facility available across Coimbatore.
                </p>

                {formSubmitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 p-4 rounded-sm text-center">
                    <CheckCircle2 size={32} className="text-emerald-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-sm">Site Visit Request Received!</h4>
                    <p className="text-xs text-emerald-800 mt-1">
                      Our Senior Property Advisor will contact you within 30 minutes to confirm your visit date and cab pickup.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-3.5">
                    <div>
                      <label className="text-xs font-semibold text-navy-900 block mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Kumar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full text-sm px-3.5 py-2.5 border border-[#D5D2C7] rounded-sm focus:border-gold focus:outline-none bg-bg"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-navy-900 block mb-1">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full text-sm px-3.5 py-2.5 border border-[#D5D2C7] rounded-sm focus:border-gold focus:outline-none bg-bg"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-navy-900 block mb-1">
                        Preferred Visit Date
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full text-sm px-3.5 py-2.5 border border-[#D5D2C7] rounded-sm focus:border-gold focus:outline-none bg-bg"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-navy-900 block mb-1">
                        Message / Query / Selected Plot
                      </label>
                      <textarea
                        id="visit-message"
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full text-sm px-3.5 py-2.5 border border-[#D5D2C7] rounded-sm focus:border-gold focus:outline-none bg-bg"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-navy-900 hover:bg-navy-800 text-gold-warm font-semibold text-sm py-3 px-4 rounded-sm transition-colors shadow-md"
                    >
                      Book Free Site Visit
                    </button>
                  </form>
                )}

                <div className="mt-5 pt-4 border-t border-[#ECE9DF] space-y-2 text-xs text-muted">
                  <div className="flex items-center gap-2">
                    <Check size={14} className="text-emerald-600 flex-shrink-0" />
                    <span>Free cab pickup anywhere in Coimbatore</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check size={14} className="text-emerald-600 flex-shrink-0" />
                    <span>On-site DTCP documents & layout map inspection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check size={14} className="text-emerald-600 flex-shrink-0" />
                    <span>Instant bank loan eligibility calculation</span>
                  </div>
                </div>
              </div>

              {/* Office & Direct Contact Card */}
              <div className="bg-bg p-5 border border-[#ECE9DF] rounded-sm text-xs text-muted space-y-2.5">
                <strong className="text-navy-900 text-sm block">
                  Latitude Properties Office
                </strong>
                <p>{site.address.full}</p>
                <div className="pt-2 border-t border-[#ECE9DF] space-y-1">
                  <div>
                    <strong className="text-navy-900">Phone: </strong>
                    <a href={`tel:${site.phonePrimaryTel}`} className="text-gold font-medium">
                      {site.phonePrimary}
                    </a>
                  </div>
                  <div>
                    <strong className="text-navy-900">Alternate: </strong>
                    <a href={`tel:${site.phoneAlternateTel}`} className="text-gold font-medium">
                      {site.phoneAlternate}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Master Site Map & Plot Availability Section */}
      <section className="py-14 bg-white border-t border-[#ECE9DF]">
        <div className="max-w-[1240px] mx-auto px-5 md:px-10">
          <SiteLayoutMap />
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}

function SpecCard({
  title,
  icon: Icon,
  items,
}: {
  title: string;
  icon: any;
  items: { label: string; value: string }[];
}) {
  return (
    <div className="border border-[#ECE9DF] rounded-sm p-4 bg-bg">
      <div className="flex items-center gap-2.5 text-navy-900 font-serif font-bold text-base mb-3">
        <Icon size={18} className="text-gold" />
        <span>{title}</span>
      </div>
      <div className="divide-y divide-[#ECE9DF] text-xs">
        {items.map((item, idx) => (
          <div key={idx} className="py-2 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
            <span className="text-muted font-medium">{item.label}</span>
            <span className="text-navy-900 font-semibold sm:text-right">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
