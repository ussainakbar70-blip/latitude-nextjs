"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  RotateCcw,
  ExternalLink,
  Sparkles,
  Heart,
  Instagram,
  CheckCircle2,
} from "lucide-react";
import {
  officialReels,
  instagramAccount,
  InstagramReel,
} from "@/data/instagram-reels";
import Reveal from "./Reveal";

export default function InstagramReelsCarousel() {
  // Start on index 1 so:
  // - Center: DdtXwmetl5a (Malumichampatti Booking)
  // - First Left (index 0): Ddv4l1TN2Hp (Customer Investment Review)
  // - First Right (index 2): DeCCc-6NYfE (Madhampatti Site 15 Handover)
  const [activeIndex, setActiveIndex] = useState(1);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const total = officialReels.length;

  const handlePrev = useCallback(() => {
    setPlayingId(null);
    setActiveIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  }, [total]);

  const handleNext = useCallback(() => {
    setPlayingId(null);
    setActiveIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  }, [total]);

  const handleCardClick = (index: number) => {
    if (index === activeIndex) {
      if (!playingId) {
        setPlayingId(officialReels[index].id);
      }
    } else {
      setPlayingId(null);
      setActiveIndex(index);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext]);

  // Touch swipe support for mobile devices
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      handleNext();
    } else if (distance < -50) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const currentReel = officialReels[activeIndex];

  return (
    <section
      id="video-tours"
      className="py-20 lg:py-28 bg-[#080D24] text-white relative overflow-hidden select-none"
    >
      {/* Ambient background lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-pink-600/10 via-purple-600/10 to-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[250px] bg-gold/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-5 md:px-10 relative z-10">
        {/* Section Header */}
        <Reveal className="text-center max-w-[780px] mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4 backdrop-blur-md">
            <Instagram size={15} className="text-[#E1306C]" />
            <span className="uppercase text-[11px] font-bold tracking-[0.22em] text-gold-warm">
              Instagram Reels &amp; Video Tours
            </span>
          </div>

          <h2 className="font-serif font-semibold text-white text-[32px] md:text-[44px] leading-[1.15] mb-4">
            On-Site Property Tours &amp; Client Stories
          </h2>

          <p className="text-[#B7B9C8] text-sm md:text-base leading-relaxed">
            Watch authentic client satisfaction reviews, DTCP plot handovers,
            and walkthroughs filmed directly on our Coimbatore project sites.
          </p>
        </Reveal>

        {/* 3D Coverflow Slider Viewport */}
        <div
          className="relative w-full py-4 min-h-[560px] sm:min-h-[640px] md:min-h-[700px] flex items-center justify-center"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            aria-label="Previous video tour"
            className="absolute left-2 sm:left-6 md:left-10 z-40 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/60 hover:bg-black/85 text-white border border-white/20 flex items-center justify-center backdrop-blur-md shadow-2xl transition-all duration-200 hover:scale-110 active:scale-95 hover:border-gold"
          >
            <ChevronLeft size={26} strokeWidth={2.5} />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next video tour"
            className="absolute right-2 sm:right-6 md:right-10 z-40 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/60 hover:bg-black/85 text-white border border-white/20 flex items-center justify-center backdrop-blur-md shadow-2xl transition-all duration-200 hover:scale-110 active:scale-95 hover:border-gold"
          >
            <ChevronRight size={26} strokeWidth={2.5} />
          </button>

          {/* Cards Container */}
          <div className="relative w-full max-w-[1040px] h-[520px] sm:h-[600px] md:h-[640px] flex items-center justify-center">
            {officialReels.map((reel, index) => {
              // Calculate relative offset from active index
              let offset = index - activeIndex;
              if (offset > total / 2) offset -= total;
              if (offset < -total / 2) offset += total;

              // Show 5 cards: -2, -1, 0, 1, 2
              const isVisible = Math.abs(offset) <= 2;
              if (!isVisible) return null;

              const isCenter = offset === 0;
              const isPlaying = isCenter && playingId === reel.id;

              // Transform calculations for the 3D coverflow perspective
              let translateX = 0;
              let scale = 1;
              let opacity = 1;
              let zIndex = 30;

              if (offset === 0) {
                translateX = 0;
                scale = 1;
                opacity = 1;
                zIndex = 30;
              } else if (offset === -1) {
                translateX = -62;
                scale = 0.86;
                opacity = 0.55;
                zIndex = 20;
              } else if (offset === 1) {
                translateX = 62;
                scale = 0.86;
                opacity = 0.55;
                zIndex = 20;
              } else if (offset === -2) {
                translateX = -115;
                scale = 0.72;
                opacity = 0.25;
                zIndex = 10;
              } else if (offset === 2) {
                translateX = 115;
                scale = 0.72;
                opacity = 0.25;
                zIndex = 10;
              }

              return (
                <div
                  key={reel.id}
                  onClick={() => handleCardClick(index)}
                  style={{
                    transform: `translate3d(${translateX}%, 0, 0) scale(${scale})`,
                    zIndex,
                    opacity,
                  }}
                  className={`absolute top-0 bottom-0 w-[270px] sm:w-[320px] md:w-[350px] transition-all duration-500 ease-out cursor-pointer rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] border ${
                    isCenter
                      ? "border-gold/60 ring-2 ring-gold/40 shadow-[0_25px_60px_rgba(230,175,46,0.25)]"
                      : "border-white/10 hover:border-white/30"
                  }`}
                >
                  {isPlaying ? (
                    /* Active Video Player with Instagram Embed */
                    <div className="relative w-full h-full bg-black flex flex-col">
                      <iframe
                        src={reel.embedUrl}
                        title={reel.title}
                        allow="encrypted-media"
                        allowFullScreen
                        scrolling="no"
                        className="w-full h-full border-0 bg-black"
                      />

                      {/* Top Overlay Bar */}
                      <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between z-20 pointer-events-none">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-white text-[11px] font-bold">
                          <Instagram size={13} className="text-[#E1306C]" />
                          <span>Instagram Reel</span>
                        </div>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setPlayingId(null);
                          }}
                          aria-label="Close video player"
                          className="pointer-events-auto p-1.5 rounded-full bg-black/75 hover:bg-black text-white transition-colors"
                        >
                          <RotateCcw size={15} />
                        </button>
                      </div>

                      {/* Bottom Channel Tag Bar */}
                      <div className="absolute bottom-2 left-2 right-2 p-2 rounded-lg bg-gradient-to-t from-black/95 via-black/70 to-transparent flex items-center justify-between text-[11px] pointer-events-none">
                        <div className="flex items-center gap-1.5 truncate mr-2">
                          <span className="font-semibold text-gold-warm">
                            {instagramAccount.handle}
                          </span>
                          <CheckCircle2 size={12} className="text-blue-400 shrink-0" />
                        </div>
                        <a
                          href={reel.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="pointer-events-auto inline-flex items-center gap-1 px-2.5 py-1 rounded bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white font-medium hover:opacity-95 text-[10.5px]"
                        >
                          <span>Instagram</span>
                          <ExternalLink size={10} />
                        </a>
                      </div>
                    </div>
                  ) : (
                    /* Thumbnail Coverflow Card Mode */
                    <div className="relative w-full h-full group bg-navy-900">
                      {/* Video Thumbnail */}
                      <Image
                        src={reel.thumbnail}
                        alt={reel.title}
                        fill
                        priority={isCenter}
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 300px, 360px"
                      />

                      {/* Scrim Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/40 group-hover:via-black/25 transition-all" />

                      {/* Top Badges */}
                      <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                        {reel.isClientSatisfaction ? (
                          <span className="inline-flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-gradient-to-r from-amber-500/90 to-gold/90 backdrop-blur-md text-navy-950 shadow-md">
                            <Heart size={11} className="fill-navy-950 text-navy-950" />
                            Client Satisfaction
                          </span>
                        ) : reel.viewsBadge ? (
                          <span className="inline-flex items-center gap-1 text-[10.5px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-gold-warm border border-gold/30">
                            <Sparkles size={11} />
                            {reel.viewsBadge}
                          </span>
                        ) : null}

                        {/* Instagram Icon Badge at Top Right */}
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#FD1D1D] via-[#E1306C] to-[#833AB4] text-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 ml-auto">
                          <Instagram size={15} />
                        </div>
                      </div>

                      {/* Center Play Button for Active Card */}
                      {isCenter && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
                          <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-gradient-to-tr from-[#FD1D1D] via-[#E1306C] to-[#833AB4] text-white flex items-center justify-center shadow-[0_0_35px_rgba(225,48,108,0.7)] group-hover:scale-110 transition-all duration-300">
                            <Play size={28} className="fill-white translate-x-0.5" />
                          </div>
                          <span className="mt-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-semibold text-white/95 uppercase tracking-widest border border-white/20">
                            Tap to Watch
                          </span>
                        </div>
                      )}

                      {/* Bottom Details on Active Card */}
                      <div className="absolute bottom-4 left-4 right-4 z-10">
                        <p className="text-[11px] font-semibold uppercase tracking-widest text-gold-warm mb-1">
                          {reel.location} • {reel.category}
                        </p>
                        <h3 className="font-serif text-base sm:text-lg font-bold text-white line-clamp-2 leading-snug">
                          {reel.title}
                        </h3>
                        <p className="text-[11.5px] text-[#C7C9D6] line-clamp-1 mt-1">
                          {reel.highlight}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Indicators / Thumbnails Bar */}
        <div className="flex flex-col items-center gap-6 mt-6">
          <div className="flex items-center gap-2">
            {officialReels.map((reel, idx) => (
              <button
                key={reel.id}
                onClick={() => {
                  setPlayingId(null);
                  setActiveIndex(idx);
                }}
                aria-label={`Jump to video tour ${idx + 1}: ${reel.shortTitle}`}
                className={`transition-all duration-300 rounded-full ${
                  idx === activeIndex
                    ? "w-8 h-2.5 bg-gradient-to-r from-[#E1306C] via-[#FD1D1D] to-gold shadow-md"
                    : "w-2.5 h-2.5 bg-white/25 hover:bg-white/50"
                }`}
              />
            ))}
          </div>

          {/* Quick Info & Direct Channel CTA */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-center">
            <div className="text-xs text-white/70">
              Playing <span className="font-bold text-white">{activeIndex + 1}</span> of{" "}
              <span className="font-bold text-white">{total}</span> Video Tours •{" "}
              <span className="text-gold-warm font-semibold">
                {currentReel.shortTitle}
              </span>
            </div>

            <span className="hidden sm:inline text-white/30">•</span>

            <a
              href={instagramAccount.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90 text-white font-semibold text-xs uppercase tracking-wider shadow-lg transition-transform hover:-translate-y-0.5"
            >
              <Instagram size={14} />
              <span>Follow on Instagram ({instagramAccount.handle})</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
