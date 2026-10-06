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
  Play,
  RotateCcw,
  ExternalLink,
  Instagram,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Project } from "@/data/projects";
import { site, buildWhatsappLink } from "@/data/site";
import { instagramAccount } from "@/data/instagram-reels";

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
  const [activeReelId, setActiveReelId] = useState<string | null>(null);
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
        text: `Check out ${project.title} property details!`,
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
              {project.id === "kandhan-avenue" ? (
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
              ) : project.id === "sri-aanandham-avenue" ? (
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
                    Madhampatty Launch Price
                  </div>
                  <div className="font-serif text-2xl md:text-3xl font-bold text-white my-1">
                    {project.plotRatePerCent}
                  </div>

                  <div className="flex items-center justify-between text-xs mt-2 pt-2 border-t border-white/10">
                    <span className="text-emerald-400 font-semibold">
                      2 BHK Duplex: From ₹45L
                    </span>
                    <span className="text-gold-warm font-bold">
                      700m to Bus Stop
                    </span>
                  </div>
                  <div className="text-[11px] text-white/70 mt-1">
                    Western Ring Road 1.8 km • Direct Siruvani Drinking Water
                  </div>
                </div>
              ) : project.id === "rathna-residency" ? (
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
            {/* Left 2 Columns: Gallery, Specs, Amenities */}
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

              {/* Project Video Walkthroughs & Client Satisfaction Reels */}
              {project.instagramReels && project.instagramReels.length > 0 && (
                <div className="bg-white p-6 md:p-8 border border-[#ECE9DF] rounded-sm shadow-sm">
                  <div className="border-b border-[#ECE9DF] pb-5 mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                    <div>
                      <div className="inline-flex items-center gap-1.5 uppercase text-xs font-semibold tracking-[0.25em] text-gold mb-1">
                        <Instagram size={14} className="text-[#E1306C]" />
                        <span>Official Video Tours</span>
                      </div>
                      <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy-900">
                        Site Walkthrough & Client Reviews
                      </h2>
                      <p className="text-muted text-sm mt-1 max-w-xl">
                        Watch verified on-site video walkthroughs and authentic customer satisfaction stories filmed live at {project.title}.
                      </p>
                    </div>

                    <a
                      href={instagramAccount.reelsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy-900 hover:text-gold transition-colors py-1.5 px-3 rounded bg-bg border border-[#ECE9DF] shrink-0 self-start sm:self-auto"
                    >
                      <Instagram size={14} className="text-[#E1306C]" />
                      <span>{instagramAccount.handle}</span>
                      <ExternalLink size={12} className="text-muted" />
                    </a>
                  </div>

                  {/* Video Cards Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.instagramReels.map((reel) => {
                      const isPlaying = activeReelId === reel.id;
                      return (
                        <div
                          key={reel.id}
                          className="flex flex-col bg-bg border border-[#ECE9DF] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                        >
                          {/* 9:15 Aspect Ratio Container */}
                          <div className="relative aspect-[9/15] w-full bg-black overflow-hidden group">
                            {isPlaying ? (
                              <div className="relative w-full h-full bg-black">
                                <iframe
                                  src={reel.embedUrl}
                                  title={reel.title}
                                  allow="encrypted-media"
                                  allowFullScreen
                                  scrolling="no"
                                  className="w-full h-full border-0 bg-black"
                                />
                                {/* Top Controls */}
                                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-20 pointer-events-none">
                                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md text-white text-[11px] font-bold">
                                    <Instagram size={12} className="text-[#E1306C]" />
                                    <span>Instagram Reel</span>
                                  </span>
                                  <button
                                    type="button"
                                    onClick={() => setActiveReelId(null)}
                                    aria-label="Close video player"
                                    className="pointer-events-auto p-1.5 rounded-full bg-black/80 hover:bg-black text-white transition-colors"
                                  >
                                    <RotateCcw size={14} />
                                  </button>
                                </div>
                              </div>
                            ) : (
                              <div
                                className="relative w-full h-full cursor-pointer"
                                onClick={() => setActiveReelId(reel.id)}
                              >
                                <Image
                                  src={reel.thumbnail}
                                  alt={reel.title}
                                  fill
                                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                                  sizes="(max-width: 768px) 100vw, 400px"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/35" />

                                {/* Top Badges */}
                                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none z-10">
                                  <span className="bg-navy-900/90 backdrop-blur-md text-gold-warm font-bold text-[11px] px-2.5 py-1 rounded shadow border border-gold/30">
                                    {reel.viewsBadge || reel.category}
                                  </span>
                                  {reel.isClientSatisfaction && (
                                    <span className="bg-emerald-600/90 backdrop-blur-md text-white text-[10.5px] font-bold px-2 py-0.5 rounded shadow flex items-center gap-1">
                                      <CheckCircle2 size={11} />
                                      Verified Client
                                    </span>
                                  )}
                                </div>

                                {/* Central Play Button */}
                                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#E1306C] via-[#F77737] to-[#FCAF45] p-0.5 shadow-2xl group-hover:scale-110 transition-transform">
                                    <div className="w-full h-full rounded-full bg-navy-900/90 flex items-center justify-center text-white backdrop-blur-sm group-hover:bg-navy-900 transition-colors">
                                      <Play size={24} className="text-gold-warm fill-gold-warm ml-1" />
                                    </div>
                                  </div>
                                </div>

                                {/* Bottom Information on Thumbnail */}
                                <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white z-10 pointer-events-none">
                                  <p className="text-[11px] text-gold-warm font-semibold mb-0.5 uppercase tracking-wider">
                                    {reel.category}
                                  </p>
                                  <h3 className="font-serif font-bold text-sm sm:text-base leading-snug line-clamp-2 text-white">
                                    {reel.shortTitle || reel.title}
                                  </h3>
                                </div>
                              </div>
                            )}
                          </div>

                          {/* Content Details & Action Footer */}
                          <div className="p-4 flex flex-col justify-between flex-grow bg-white">
                            <p className="text-xs text-muted leading-relaxed mb-3">
                              {reel.highlight}
                            </p>
                            <div className="pt-3 border-t border-[#ECE9DF] flex items-center justify-between gap-2 text-xs">
                              <button
                                type="button"
                                onClick={() => setActiveReelId(isPlaying ? null : reel.id)}
                                className="inline-flex items-center gap-1.5 font-bold text-navy-900 hover:text-gold transition-colors"
                              >
                                <Play size={13} className="text-gold fill-gold" />
                                <span>{isPlaying ? "Close Player" : "Watch Reel"}</span>
                              </button>
                              <a
                                href={reel.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-muted hover:text-[#E1306C] transition-colors"
                              >
                                <Instagram size={13} className="text-[#E1306C]" />
                                <span>Open Instagram</span>
                                <ExternalLink size={11} />
                              </a>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

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

                {project.id === "kandhan-avenue" ? (
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
                ) : project.id === "sri-aanandham-avenue" ? (
                  <>
                    <div className="text-2xl font-serif font-bold text-white mb-1">
                      {project.plotRatePerCent}
                    </div>
                    <p className="text-xs text-[#EDEAE0] mb-4">
                      Grand launch DTCP approved plots & luxury 2 BHK duplex villas at Madhampatty.
                    </p>

                    <div className="bg-white/10 p-4 rounded-sm border border-white/15 space-y-2 mb-4 text-xs">
                      <div className="flex justify-between">
                        <span className="text-white/80">Launch Price:</span>
                        <span className="font-bold text-gold-warm">{project.plotRatePerCent}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/80">2 BHK Duplex:</span>
                        <span className="font-bold text-emerald-400">From ₹45 Lakhs</span>
                      </div>
                      <div className="flex justify-between border-t border-white/10 pt-2">
                        <span className="text-white/80">Western Ring Rd:</span>
                        <span className="text-white font-medium">1.8 km (3 mins)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/80">DTCP Layout:</span>
                        <span className="text-white font-medium">{project.dtcpApprovalNumber}</span>
                      </div>
                    </div>

                    <a
                      href={buildWhatsappLink(
                        `Hello Latitude Properties, I would like to book a site visit for Sri Aanandham Avenue, Madhampatty (Plots: ${project.plotRatePerCent} / Duplex: from Rs. 45L).`
                      )}
                      target="_blank"
                      rel="noopener"
                      className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-br from-gold-warm to-gold text-navy-900 font-bold text-sm py-3 px-4 rounded-sm shadow hover:scale-[1.02] transition-transform"
                    >
                      <MessageCircle size={18} />
                      Enquire on WhatsApp
                    </a>
                  </>
                ) : project.id === "rathna-residency" ? (
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
                    <span>On-site DTCP documents & legal title inspection</span>
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
