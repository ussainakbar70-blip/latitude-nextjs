"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import {
  Compass,
  RotateCw,
  Play,
  Pause,
  Maximize2,
  Minimize2,
  ZoomIn,
  ZoomOut,
  Info,
  Video,
  Eye,
  RefreshCw,
} from "lucide-react";

interface Property360ViewerProps {
  title: string;
  imageUrl: string;
  videoUrl?: string;
  location: string;
}

export default function Property360Viewer({
  title,
  imageUrl,
  videoUrl,
  location,
}: Property360ViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [rotationX, setRotationX] = useState(0); // 0 to 360 degrees
  const [zoom, setZoom] = useState(1);
  const [autoRotate, setAutoRotate] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeTab, setActiveTab] = useState<"panorama" | "video">("panorama");
  const animationFrameRef = useRef<number | null>(null);

  // Auto-rotation loop
  useEffect(() => {
    if (!autoRotate || isDragging || activeTab !== "panorama") return;

    const interval = setInterval(() => {
      setRotationX((prev) => (prev + 0.3) % 360);
    }, 30);

    return () => clearInterval(interval);
  }, [autoRotate, isDragging, activeTab]);

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setAutoRotate(false);
  };

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - startX;
      setStartX(e.clientX);
      setRotationX((prev) => {
        let next = prev - deltaX * 0.4;
        if (next < 0) next += 360;
        return next % 360;
      });
    },
    [isDragging, startX]
  );

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      setStartX(e.touches[0].clientX);
      setAutoRotate(false);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || e.touches.length !== 1) return;
    const deltaX = e.touches[0].clientX - startX;
    setStartX(e.touches[0].clientX);
    setRotationX((prev) => {
      let next = prev - deltaX * 0.5;
      if (next < 0) next += 360;
      return next % 360;
    });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  const resetView = () => {
    setRotationX(0);
    setZoom(1);
    setAutoRotate(true);
  };

  return (
    <div className="bg-navy-900 border border-gold/30 rounded-sm overflow-hidden shadow-2xl my-8">
      {/* Top Controls Bar */}
      <div className="px-5 py-3.5 bg-navy-800/90 border-b border-white/10 flex flex-wrap items-center justify-between gap-3 text-white">
        <div className="flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-serif text-lg font-semibold tracking-wide text-gold-warm">
            360° Interactive Virtual Property Tour
          </span>
          <span className="hidden md:inline-block text-xs bg-gold/20 text-gold-warm border border-gold/40 px-2 py-0.5 rounded">
            Interactive Drag & Pan
          </span>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center gap-2 bg-navy-900/80 p-1 rounded border border-white/10 text-xs">
          <button
            type="button"
            onClick={() => setActiveTab("panorama")}
            className={`flex items-center gap-1.5 px-3 py-1 rounded transition-all ${
              activeTab === "panorama"
                ? "bg-gold text-navy-900 font-semibold"
                : "text-white/70 hover:text-white"
            }`}
          >
            <Eye size={13} />
            360° Panorama
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("video")}
            className={`flex items-center gap-1.5 px-3 py-1 rounded transition-all ${
              activeTab === "video"
                ? "bg-gold text-navy-900 font-semibold"
                : "text-white/70 hover:text-white"
            }`}
          >
            <Video size={13} />
            360° Video Walkthrough
          </button>
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className={`relative h-[420px] md:h-[500px] w-full overflow-hidden select-none bg-black cursor-grab active:cursor-grabbing ${
          isFullscreen ? "fixed inset-0 z-[300] h-screen w-screen" : ""
        }`}
      >
        {activeTab === "panorama" ? (
          <>
            {/* Cylindrical Panorama Canvas Effect via Background Repeat */}
            <div
              className="absolute inset-0 w-full h-full transition-transform duration-75 ease-out"
              style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: `${240 * zoom}% 100%`,
                backgroundPosition: `${(rotationX / 360) * 100}% center`,
                backgroundRepeat: "repeat-x",
                transform: `scale(${zoom})`,
              }}
            />

            {/* Subtle Vignette & Gradient Overlays */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-navy-900/80 via-transparent to-navy-900/40" />

            {/* Compass / Degree HUD */}
            <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-navy-900/85 backdrop-blur-md px-3 py-1.5 rounded-sm border border-gold/40 text-white text-xs">
              <Compass
                size={16}
                className="text-gold-warm transition-transform duration-100"
                style={{ transform: `rotate(${-rotationX}deg)` }}
              />
              <span className="font-mono text-gold-warm">{Math.round(rotationX)}°</span>
              <span className="text-white/60">|</span>
              <span className="text-white/80">
                {rotationX >= 315 || rotationX < 45
                  ? "East (Front)"
                  : rotationX < 135
                  ? "South"
                  : rotationX < 225
                  ? "West"
                  : "North"}
              </span>
            </div>

            {/* Interactive Drag Hint */}
            <div className="absolute top-4 right-4 z-20 hidden sm:flex items-center gap-2 bg-navy-900/85 backdrop-blur-md px-3 py-1.5 rounded-sm border border-white/10 text-white text-xs">
              <RotateCw size={13} className="text-gold-warm animate-spin" />
              <span>Click & Drag anywhere to rotate 360°</span>
            </div>

            {/* Central watermark/hint on initial load */}
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 bg-black/60 backdrop-blur-md px-4 py-2 rounded text-center border border-white/15 text-white/90 text-xs pointer-events-none">
              <span>Drag horizontally to explore layout • Zoom with + / - controls</span>
            </div>
          </>
        ) : (
          /* Video Walkthrough Player Placeholder */
          <div className="relative w-full h-full flex flex-col items-center justify-center p-6 bg-navy-950 text-center">
            <div className="w-16 h-16 rounded-full bg-gold/20 border border-gold flex items-center justify-center mb-4 text-gold animate-pulse">
              <Video size={28} />
            </div>
            <h4 className="font-serif text-xl text-white mb-2">
              360° 4K Aerial & Ground Video Walkthrough
            </h4>
            <p className="text-muted text-sm max-w-md mb-6">
              Sample 360° video player container. When your official drone or 360° camera video is ready, simply plug in the YouTube 360 or MP4 link to play it right here.
            </p>
            <div className="inline-flex items-center gap-2 bg-gold text-navy-900 font-semibold text-xs px-4 py-2.5 rounded">
              <Play size={14} />
              Sample Video Resource Slot Ready
            </div>
          </div>
        )}

        {/* Floating Bottom Control Bar */}
        <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
          {/* Location & Title pill */}
          <div className="bg-navy-900/90 backdrop-blur-md px-3.5 py-1.5 rounded-sm border border-white/15 text-white text-xs pointer-events-auto flex items-center gap-2">
            <span className="font-semibold text-gold-warm">{title}</span>
            <span className="text-white/40">•</span>
            <span className="text-white/70">{location}</span>
          </div>

          {/* Quick HUD Buttons */}
          <div className="flex items-center gap-2 pointer-events-auto bg-navy-900/90 backdrop-blur-md p-1.5 rounded-sm border border-white/15 text-white">
            <button
              type="button"
              onClick={() => setAutoRotate(!autoRotate)}
              className="p-1.5 hover:text-gold-warm transition-colors"
              title={autoRotate ? "Pause Auto-Rotate" : "Start Auto-Rotate"}
            >
              {autoRotate ? <Pause size={15} /> : <Play size={15} />}
            </button>
            <div className="w-px h-4 bg-white/20" />
            <button
              type="button"
              onClick={() => setZoom((z) => Math.min(z + 0.2, 1.8))}
              className="p-1.5 hover:text-gold-warm transition-colors"
              title="Zoom In"
            >
              <ZoomIn size={15} />
            </button>
            <button
              type="button"
              onClick={() => setZoom((z) => Math.max(z - 0.2, 0.8))}
              className="p-1.5 hover:text-gold-warm transition-colors"
              title="Zoom Out"
            >
              <ZoomOut size={15} />
            </button>
            <div className="w-px h-4 bg-white/20" />
            <button
              type="button"
              onClick={resetView}
              className="p-1.5 hover:text-gold-warm transition-colors"
              title="Reset View"
            >
              <RefreshCw size={15} />
            </button>
            <div className="w-px h-4 bg-white/20" />
            <button
              type="button"
              onClick={toggleFullscreen}
              className="p-1.5 hover:text-gold-warm transition-colors"
              title="Fullscreen"
            >
              {isFullscreen ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
            </button>
          </div>
        </div>
      </div>

      {/* Developer/User Notice Banner */}
      <div className="bg-navy-950 px-5 py-3 border-t border-white/10 flex items-center justify-between text-xs text-white/70">
        <div className="flex items-center gap-2">
          <Info size={14} className="text-gold-warm flex-shrink-0" />
          <span>
            <strong>Resource Slot:</strong> Displaying high-resolution sample 360° panorama. Ready for your actual 360° videos & aerial shots.
          </span>
        </div>
        <span className="hidden sm:inline text-gold-warm font-medium">360° VR Supported</span>
      </div>
    </div>
  );
}
