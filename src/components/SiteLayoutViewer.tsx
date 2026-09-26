"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Maximize2,
  X,
  Download,
  CheckCircle2,
  Clock,
  Ban,
  Layers,
  ArrowRight,
  Sparkles,
  Info,
} from "lucide-react";
import { Project, PlotItem } from "@/data/projects";

interface SiteLayoutViewerProps {
  project: Project;
  onSelectPlot?: (plot: PlotItem) => void;
}

export default function SiteLayoutViewer({
  project,
  onSelectPlot,
}: SiteLayoutViewerProps) {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [filter, setFilter] = useState<"all" | "available" | "booked" | "sold">("all");
  const [selectedPlot, setSelectedPlot] = useState<PlotItem | null>(null);

  const { total, available, booked, sold } = project.plotsSummary || {
    total: project.plotsList?.length || 0,
    available: project.plotsList?.filter((p) => p.status === "available").length || 0,
    booked: project.plotsList?.filter((p) => p.status === "booked").length || 0,
    sold: project.plotsList?.filter((p) => p.status === "sold").length || 0,
  };

  const filteredPlots = (project.plotsList || []).filter((p) => {
    if (filter === "all") return true;
    return p.status === filter;
  });

  const handleZoomIn = () => setZoomLevel((z) => Math.min(z + 0.25, 2.5));
  const handleZoomOut = () => setZoomLevel((z) => Math.max(z - 0.25, 0.75));
  const handleResetZoom = () => setZoomLevel(1);

  const handlePlotEnquire = (plot: PlotItem) => {
    setSelectedPlot(plot);
    if (onSelectPlot) {
      onSelectPlot(plot);
    }
    const messageInput = document.getElementById("visit-message") as HTMLTextAreaElement | null;
    if (messageInput) {
      messageInput.value = `Hi Latitude Properties, I am interested in Plot #${plot.plotNumber} (${plot.areaCents} / ${plot.areaSqFt} sq.ft) at ${project.title}. Please share details and pricing.`;
    }
    const contactSection = document.getElementById("contact") || document.getElementById("site-visit-form");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="layout-map" className="bg-white border border-[#ECE9DF] rounded-sm p-6 md:p-8 shadow-sm">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#ECE9DF]">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="uppercase text-xs font-semibold tracking-[0.28em] text-gold flex items-center gap-1.5">
              <Layers size={15} />
              Master Layout Map & Plot Status
            </span>
            {project.dtcpApprovalNumber && (
              <span className="bg-navy-900 text-gold-warm text-[10px] font-bold px-2 py-0.5 rounded tracking-wider uppercase">
                {project.dtcpApprovalNumber}
              </span>
            )}
          </div>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy-900">
            {project.layoutMapTitle || `${project.title} Approved Layout Plan`}
          </h2>
          <p className="text-muted text-sm mt-1 max-w-2xl">
            Review the official survey demarcations, road widths, and real-time availability of every single plot in {project.title}.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {project.layoutMapImage && (
            <a
              href={project.layoutMapImage}
              download={`${project.title}-layout-plan`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy-900 border border-[#D5D0C3] bg-bg hover:border-gold px-3.5 py-2 rounded-sm transition-colors"
            >
              <Download size={14} className="text-gold" />
              Download Layout Map
            </a>
          )}
        </div>
      </div>

      {/* Real-time Plot Availability Counters */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 my-6">
        <div className="bg-bg p-4 rounded-sm border border-[#E9E5D9] text-center">
          <div className="text-xs text-muted font-medium uppercase tracking-wider">Total Plots</div>
          <div className="font-serif text-3xl font-bold text-navy-900 mt-1">{total}</div>
          <div className="text-[11px] text-muted mt-0.5">Approved in Layout</div>
        </div>

        <div className="bg-emerald-50/70 p-4 rounded-sm border border-emerald-200/80 text-center">
          <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wider flex items-center justify-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Available
          </div>
          <div className="font-serif text-3xl font-bold text-emerald-700 mt-1">{available}</div>
          <div className="text-[11px] text-emerald-700/80 mt-0.5">Ready to Book</div>
        </div>

        <div className="bg-amber-50/70 p-4 rounded-sm border border-amber-200/80 text-center">
          <div className="text-xs font-semibold text-amber-800 uppercase tracking-wider flex items-center justify-center gap-1">
            <Clock size={12} className="text-amber-600" />
            Booked
          </div>
          <div className="font-serif text-3xl font-bold text-amber-700 mt-1">{booked}</div>
          <div className="text-[11px] text-amber-700/80 mt-0.5">Token Advance Received</div>
        </div>

        <div className="bg-rose-50/70 p-4 rounded-sm border border-rose-200/80 text-center">
          <div className="text-xs font-semibold text-rose-800 uppercase tracking-wider flex items-center justify-center gap-1">
            <CheckCircle2 size={12} className="text-rose-600" />
            Sold Out
          </div>
          <div className="font-serif text-3xl font-bold text-rose-700 mt-1">{sold}</div>
          <div className="text-[11px] text-rose-700/80 mt-0.5">Registered & Handed Over</div>
        </div>
      </div>

      {/* Progress Bar Visualizing Inventory Breakdown */}
      {total > 0 && (
        <div className="mb-7">
          <div className="flex justify-between items-center text-xs text-muted mb-1.5">
            <span>Layout Booking Status</span>
            <span className="font-medium text-navy-900">
              {Math.round(((sold + booked) / total) * 100)}% Booked / Sold
            </span>
          </div>
          <div className="h-3 w-full bg-[#EAE7DD] rounded-full overflow-hidden flex">
            <div
              style={{ width: `${(sold / total) * 100}%` }}
              className="bg-rose-500 transition-all duration-500"
              title={`Sold: ${sold} (${Math.round((sold / total) * 100)}%)`}
            />
            <div
              style={{ width: `${(booked / total) * 100}%` }}
              className="bg-amber-400 transition-all duration-500"
              title={`Booked: ${booked} (${Math.round((booked / total) * 100)}%)`}
            />
            <div
              style={{ width: `${(available / total) * 100}%` }}
              className="bg-emerald-500 transition-all duration-500"
              title={`Available: ${available} (${Math.round((available / total) * 100)}%)`}
            />
          </div>
          <div className="flex items-center gap-4 text-[11.5px] mt-2 text-muted">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> Available ({available})
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" /> Booked ({booked})
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500" /> Sold Out ({sold})
            </span>
          </div>
        </div>
      )}

      {/* Interactive Layout Map Image Viewer */}
      {project.layoutMapImage && (
        <div className="relative border border-[#E3DFD5] bg-[#F7F5EE] rounded-sm overflow-hidden mb-8">
          <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5 bg-navy-900/85 backdrop-blur-sm p-1 rounded shadow-md text-white">
            <button
              onClick={handleZoomIn}
              title="Zoom In"
              aria-label="Zoom In"
              className="p-1.5 hover:bg-white/20 rounded transition-colors"
            >
              <ZoomIn size={16} />
            </button>
            <button
              onClick={handleZoomOut}
              title="Zoom Out"
              aria-label="Zoom Out"
              className="p-1.5 hover:bg-white/20 rounded transition-colors"
            >
              <ZoomOut size={16} />
            </button>
            <button
              onClick={handleResetZoom}
              title="Reset Zoom"
              aria-label="Reset Zoom"
              className="p-1.5 hover:bg-white/20 rounded transition-colors"
            >
              <RotateCcw size={16} />
            </button>
            <div className="w-px h-4 bg-white/20 mx-1" />
            <button
              onClick={() => setIsFullscreen(true)}
              title="Fullscreen"
              aria-label="Fullscreen"
              className="p-1.5 hover:bg-white/20 rounded transition-colors"
            >
              <Maximize2 size={16} />
            </button>
          </div>

          <div className="absolute bottom-3 left-3 z-20 bg-navy-900/85 backdrop-blur-sm text-gold-warm text-xs px-3 py-1.5 rounded flex items-center gap-2">
            <Info size={13} />
            <span>Click layout map to view high-resolution full screen</span>
          </div>

          <div
            className="overflow-auto min-h-[420px] max-h-[620px] flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setIsFullscreen(true)}
          >
            <div
              className="transition-transform duration-200 origin-center relative max-w-full"
              style={{ transform: `scale(${zoomLevel})` }}
            >
              <Image
                src={project.layoutMapImage}
                alt={`${project.title} layout map`}
                width={1200}
                height={800}
                className="max-w-full h-auto object-contain mx-auto shadow-md rounded"
                priority
              />
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen Layout Map Modal */}
      {isFullscreen && project.layoutMapImage && (
        <div className="fixed inset-0 z-[200] bg-navy-950/95 backdrop-blur-md flex flex-col p-4 md:p-8 animate-fadeIn">
          <div className="flex items-center justify-between text-white pb-3 border-b border-white/10">
            <div>
              <h3 className="font-serif text-xl text-gold-warm font-semibold">
                {project.layoutMapTitle || `${project.title} Layout Plan`}
              </h3>
              <p className="text-xs text-white/70">
                DTCP Sanctioned Layout • {project.location}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={project.layoutMapImage}
                download={`${project.title}-layout-plan`}
                className="inline-flex items-center gap-1.5 bg-gold-warm text-navy-900 font-semibold text-xs px-3 py-1.5 rounded transition-transform hover:scale-105"
              >
                <Download size={14} /> Download Map
              </a>
              <button
                onClick={() => setIsFullscreen(false)}
                className="text-white hover:text-gold-warm p-1.5 rounded transition-colors"
                aria-label="Close Fullscreen"
              >
                <X size={26} />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-auto flex items-center justify-center p-2">
            <Image
              src={project.layoutMapImage}
              alt={`${project.title} full layout map`}
              width={1800}
              height={1400}
              className="max-h-[85vh] w-auto object-contain shadow-2xl rounded"
            />
          </div>
        </div>
      )}

      {/* Interactive Plot-by-Plot Inventory Table */}
      {project.plotsList && project.plotsList.length > 0 && (
        <div className="mt-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#ECE9DF]">
            <div>
              <h3 className="font-serif text-xl font-bold text-navy-900">
                Plot-by-Plot Status Directory
              </h3>
              <p className="text-xs text-muted mt-0.5">
                Select your preferred plot to check dimensions, facing direction and lock today&apos;s special festive price.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1.5 bg-bg p-1 rounded border border-[#E3DFD5]">
              <button
                onClick={() => setFilter("all")}
                className={`text-xs px-3 py-1 rounded transition-colors ${
                  filter === "all"
                    ? "bg-navy-900 text-white font-semibold shadow-sm"
                    : "text-muted hover:text-navy-900"
                }`}
              >
                All ({total})
              </button>
              <button
                onClick={() => setFilter("available")}
                className={`text-xs px-3 py-1 rounded transition-colors ${
                  filter === "available"
                    ? "bg-emerald-600 text-white font-semibold shadow-sm"
                    : "text-muted hover:text-emerald-700"
                }`}
              >
                Available ({available})
              </button>
              <button
                onClick={() => setFilter("booked")}
                className={`text-xs px-3 py-1 rounded transition-colors ${
                  filter === "booked"
                    ? "bg-amber-600 text-white font-semibold shadow-sm"
                    : "text-muted hover:text-amber-700"
                }`}
              >
                Booked ({booked})
              </button>
              <button
                onClick={() => setFilter("sold")}
                className={`text-xs px-3 py-1 rounded transition-colors ${
                  filter === "sold"
                    ? "bg-rose-600 text-white font-semibold shadow-sm"
                    : "text-muted hover:text-rose-700"
                }`}
              >
                Sold ({sold})
              </button>
            </div>
          </div>

          {/* Plots Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 mt-5">
            {filteredPlots.map((plot) => {
              const isPlotAvailable = plot.status === "available";
              const isPlotBooked = plot.status === "booked";
              const isPlotSold = plot.status === "sold";

              return (
                <div
                  key={plot.plotNumber}
                  className={`p-4 rounded-sm border transition-all flex flex-col justify-between ${
                    isPlotAvailable
                      ? "bg-white border-[#E0DCCE] hover:border-gold hover:shadow-md"
                      : isPlotBooked
                      ? "bg-amber-50/40 border-amber-200"
                      : "bg-[#F7F6F2] border-stone-200 opacity-80"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-serif font-bold text-lg text-navy-900">
                        Plot #{plot.plotNumber}
                      </span>
                      {isPlotAvailable && (
                        <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          Available
                        </span>
                      )}
                      {isPlotBooked && (
                        <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider flex items-center gap-1">
                          <Clock size={10} />
                          Booked
                        </span>
                      )}
                      {isPlotSold && (
                        <span className="bg-stone-200 text-stone-700 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                          Sold Out
                        </span>
                      )}
                    </div>

                    <div className="space-y-1 text-xs text-muted mb-3">
                      <div>
                        <strong className="text-navy-900">Area:</strong> {plot.areaCents} ({plot.areaSqFt} Sq.Ft)
                      </div>
                      {plot.dimensions && (
                        <div>
                          <strong className="text-navy-900">Dimensions:</strong> {plot.dimensions}
                        </div>
                      )}
                      {plot.facing && (
                        <div>
                          <strong className="text-navy-900">Facing:</strong> {plot.facing}
                        </div>
                      )}
                    </div>
                  </div>

                  {isPlotAvailable ? (
                    <button
                      onClick={() => handlePlotEnquire(plot)}
                      className="w-full mt-2 inline-flex items-center justify-center gap-1.5 bg-gradient-to-br from-gold-warm to-gold text-navy-900 font-semibold text-xs py-2 px-3 rounded-sm transition-transform hover:-translate-y-0.5 shadow-sm"
                    >
                      Enquire for Plot #{plot.plotNumber}
                      <ArrowRight size={13} />
                    </button>
                  ) : isPlotBooked ? (
                    <button
                      onClick={() => handlePlotEnquire(plot)}
                      className="w-full mt-2 inline-flex items-center justify-center gap-1 text-[11px] font-medium text-amber-800 bg-amber-100/70 hover:bg-amber-100 py-1.5 px-2 rounded-sm transition-colors"
                    >
                      Join Plot Waitlist
                    </button>
                  ) : (
                    <div className="w-full mt-2 text-center text-[11px] font-medium text-stone-500 py-1.5 bg-stone-100 rounded-sm">
                      Handed Over to Owner
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
