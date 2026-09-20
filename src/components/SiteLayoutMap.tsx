"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  MapPin,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Compass,
  ArrowRight,
  Maximize2,
  X,
  Phone,
  MessageCircle,
  Eye,
  FileCheck,
  Layers,
  Zap,
} from "lucide-react";
import {
  layoutPlots,
  layoutMetadata,
  LayoutPlot,
  PlotStatus,
  getPlotByNumber,
} from "@/data/sitemap-plots";
import { site, buildWhatsappLink } from "@/data/site";
import Reveal from "./Reveal";

export default function SiteLayoutMap() {
  const [selectedPlotNum, setSelectedPlotNum] = useState<number>(1);
  const [filter, setFilter] = useState<"all" | PlotStatus>("all");
  const [blueprintModalOpen, setBlueprintModalOpen] = useState(false);

  const selectedPlot = getPlotByNumber(selectedPlotNum) || layoutPlots[0];

  const filteredPlots = layoutPlots.filter((p) => {
    if (filter === "all") return true;
    return p.status === filter;
  });

  const totalCount = layoutPlots.length;
  const availableCount = layoutPlots.filter((p) => p.status === "available").length;
  const bookedCount = layoutPlots.filter((p) => p.status === "booked").length;
  const soldCount = layoutPlots.filter((p) => p.status === "sold").length;

  const getStatusColor = (status: PlotStatus, isSelected: boolean) => {
    if (isSelected) {
      return "ring-4 ring-gold ring-offset-2 scale-[1.03] z-20 shadow-xl";
    }
    switch (status) {
      case "available":
        return "bg-emerald-50 border-emerald-500 text-emerald-950 hover:bg-emerald-100 hover:border-emerald-600";
      case "booked":
        return "bg-amber-50 border-amber-500 text-amber-950 hover:bg-amber-100 hover:border-amber-600";
      case "sold":
        return "bg-slate-100 border-slate-400 text-slate-700 opacity-90 hover:opacity-100";
    }
  };

  const getStatusBadge = (status: PlotStatus) => {
    switch (status) {
      case "available":
        return (
          <span className="inline-flex items-center gap-1 bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">
            <Sparkles size={10} />
            Available (40% Off)
          </span>
        );
      case "booked":
        return (
          <span className="inline-flex items-center gap-1 bg-amber-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">
            <Clock size={10} />
            Booked (Token Paid)
          </span>
        );
      case "sold":
        return (
          <span className="inline-flex items-center gap-1 bg-slate-700 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">
            <CheckCircle2 size={10} />
            100% Sold Out
          </span>
        );
    }
  };

  return (
    <div id="site-map" className="mb-20">
      {/* Section Header */}
      <Reveal className="mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <p className="uppercase text-xs font-semibold tracking-[0.28em] text-gold m-0">
              Live Interactive Master Layout
            </p>
          </div>

          <button
            type="button"
            onClick={() => setBlueprintModalOpen(true)}
            className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-gold-warm text-xs font-semibold px-4 py-2 rounded-sm border border-gold/40 shadow-sm transition-all hover:scale-[1.02]"
          >
            <FileCheck size={14} />
            View Official DTCP Approved Blueprint
          </button>
        </div>

        <h2 className="font-serif font-semibold text-navy-900 text-[28px] md:text-[40px] leading-[1.18] m-0">
          Master Site Map & Plot Availability
        </h2>

        <p className="text-muted text-sm md:text-base leading-[1.7] max-w-[780px] mt-2 mb-0">
          Explore all 17 DTCP-approved residential plots with exact dimensions, road widths, and real-time booking statuses. Click any plot on the layout to inspect detailed inch-by-inch specifications and claim our exclusive <strong>40% Deepavali Dhamaka Discount</strong>.
        </p>
      </Reveal>

      {/* Real-time Inventory Status Strip */}
      <Reveal className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 mb-8">
        <div className="bg-white p-4 rounded-sm border border-[#ECE9DF] shadow-sm flex items-center gap-3">
          <div className="w-10 h-10 rounded-sm bg-navy-900/5 text-navy-900 flex items-center justify-center font-serif font-bold text-lg">
            {totalCount}
          </div>
          <div>
            <div className="text-xs text-muted font-medium">Total Plots</div>
            <div className="text-sm font-bold text-navy-900">17 Planned Plots</div>
          </div>
        </div>

        <div className="bg-emerald-50/60 p-4 rounded-sm border border-emerald-200 shadow-sm flex items-center gap-3">
          <div className="w-10 h-10 rounded-sm bg-emerald-600 text-white flex items-center justify-center font-serif font-bold text-lg">
            {availableCount}
          </div>
          <div>
            <div className="text-xs text-emerald-800 font-medium">Available Now</div>
            <div className="text-sm font-bold text-emerald-950 flex items-center gap-1">
              {availableCount} Plots (40% Off)
            </div>
          </div>
        </div>

        <div className="bg-amber-50/60 p-4 rounded-sm border border-amber-200 shadow-sm flex items-center gap-3">
          <div className="w-10 h-10 rounded-sm bg-amber-600 text-white flex items-center justify-center font-serif font-bold text-lg">
            {bookedCount}
          </div>
          <div>
            <div className="text-xs text-amber-800 font-medium">Booked / Token</div>
            <div className="text-sm font-bold text-amber-950">
              {bookedCount} Under SRO Reg.
            </div>
          </div>
        </div>

        <div className="bg-slate-100/70 p-4 rounded-sm border border-slate-300 shadow-sm flex items-center gap-3">
          <div className="w-10 h-10 rounded-sm bg-slate-700 text-white flex items-center justify-center font-serif font-bold text-lg">
            {soldCount}
          </div>
          <div>
            <div className="text-xs text-slate-600 font-medium">100% Sold Out</div>
            <div className="text-sm font-bold text-slate-900">
              {soldCount} Patta Delivered
            </div>
          </div>
        </div>
      </Reveal>

      {/* Filter Tabs & Quick Legend */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-3.5 rounded-sm border border-[#ECE9DF] mb-6 shadow-sm">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-xs font-semibold text-muted uppercase tracking-wider mr-2 hidden sm:inline-block">
            Filter View:
          </span>
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={`text-xs px-3.5 py-1.5 rounded-sm font-semibold transition-all ${
              filter === "all"
                ? "bg-navy-900 text-gold-warm shadow-sm"
                : "text-navy-900/70 hover:text-navy-900 hover:bg-navy-900/5"
            }`}
          >
            All Plots ({totalCount})
          </button>
          <button
            type="button"
            onClick={() => setFilter("available")}
            className={`text-xs px-3.5 py-1.5 rounded-sm font-semibold transition-all flex items-center gap-1.5 ${
              filter === "available"
                ? "bg-emerald-600 text-white shadow-sm"
                : "text-emerald-700 hover:bg-emerald-50"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            Available ({availableCount})
          </button>
          <button
            type="button"
            onClick={() => setFilter("booked")}
            className={`text-xs px-3.5 py-1.5 rounded-sm font-semibold transition-all flex items-center gap-1.5 ${
              filter === "booked"
                ? "bg-amber-600 text-white shadow-sm"
                : "text-amber-700 hover:bg-amber-50"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            Booked ({bookedCount})
          </button>
          <button
            type="button"
            onClick={() => setFilter("sold")}
            className={`text-xs px-3.5 py-1.5 rounded-sm font-semibold transition-all flex items-center gap-1.5 ${
              filter === "sold"
                ? "bg-slate-700 text-white shadow-sm"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-slate-400" />
            Sold Out ({soldCount})
          </button>
        </div>

        <div className="flex items-center gap-3 text-xs text-muted">
          <span className="hidden md:inline-block">Approval: <strong>DTCP No. 1041/2025</strong></span>
          <span className="hidden md:inline-block">•</span>
          <span>Survey: <strong>S.F. 257/2B, 258/1B</strong></span>
        </div>
      </div>

      {/* Main Interactive Grid: Layout Map (Left/Center) + Selected Plot Inspector (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column (8 cols): Digital Architectural Master Layout Canvas */}
        <div className="lg:col-span-8 bg-white p-5 sm:p-7 rounded-sm border border-[#ECE9DF] shadow-md relative overflow-hidden">
          {/* Top Boundary Marker */}
          <div className="text-center py-2 px-4 bg-navy-900 text-white rounded-t-sm border-b border-gold/40 flex items-center justify-between text-xs">
            <span className="font-mono text-gold-warm">North Boundary: 48.0m (47.9m)</span>
            <span className="font-medium text-white/80">Adjacent: S.F. No. 258/1A1</span>
          </div>

          {/* Top 9.0m Layout Road (Orange Ribbon) */}
          <div className="bg-gradient-to-r from-amber-600 to-amber-500 text-navy-950 font-bold text-xs py-2 px-4 text-center border-b border-amber-700 shadow-inner flex items-center justify-center gap-2">
            <span>9.0m (30 Feet) Wide Layout Connecting Road • S.F. No. 258/1B</span>
          </div>

          {/* Middle Layout Body with Left Row, Central 9m Road, and Right Row */}
          <div className="relative py-4 grid grid-cols-12 gap-3 bg-neutral-50/70 p-3 sm:p-5 border-x border-[#ECE9DF]">
            {/* Left Boundary Dimension Label */}
            <div className="hidden sm:flex absolute left-1 top-1/2 -translate-y-1/2 -rotate-90 origin-center text-[10.5px] font-mono text-muted tracking-wider pointer-events-none whitespace-nowrap">
              West Boundary: 95.0m • S.F. No. 257/2
            </div>

            {/* Right Boundary Dimension Label */}
            <div className="hidden sm:flex absolute right-1 top-1/2 -translate-y-1/2 rotate-90 origin-center text-[10.5px] font-mono text-muted tracking-wider pointer-events-none whitespace-nowrap">
              East Boundary: 97.4m (95.2m) • S.F. No. 258/2B1A1
            </div>

            {/* Left Column Plots: 8 down to 1 */}
            <div className="col-span-5 flex flex-col gap-2.5 pl-2 sm:pl-5">
              {/* Plot 8 (Top Corner) */}
              <PlotButton
                plot={getPlotByNumber(8)!}
                isSelected={selectedPlotNum === 8}
                isFiltered={filter !== "all" && getPlotByNumber(8)!.status !== filter}
                onClick={() => setSelectedPlotNum(8)}
              />

              {/* Contiguous Plots 7, 6, 5, 4, 3 */}
              <PlotButton
                plot={getPlotByNumber(7)!}
                isSelected={selectedPlotNum === 7}
                isFiltered={filter !== "all" && getPlotByNumber(7)!.status !== filter}
                onClick={() => setSelectedPlotNum(7)}
              />
              <PlotButton
                plot={getPlotByNumber(6)!}
                isSelected={selectedPlotNum === 6}
                isFiltered={filter !== "all" && getPlotByNumber(6)!.status !== filter}
                onClick={() => setSelectedPlotNum(6)}
              />
              <PlotButton
                plot={getPlotByNumber(5)!}
                isSelected={selectedPlotNum === 5}
                isFiltered={filter !== "all" && getPlotByNumber(5)!.status !== filter}
                onClick={() => setSelectedPlotNum(5)}
              />
              <PlotButton
                plot={getPlotByNumber(4)!}
                isSelected={selectedPlotNum === 4}
                isFiltered={filter !== "all" && getPlotByNumber(4)!.status !== filter}
                onClick={() => setSelectedPlotNum(4)}
              />
              <PlotButton
                plot={getPlotByNumber(3)!}
                isSelected={selectedPlotNum === 3}
                isFiltered={filter !== "all" && getPlotByNumber(3)!.status !== filter}
                onClick={() => setSelectedPlotNum(3)}
              />
              <PlotButton
                plot={getPlotByNumber(2)!}
                isSelected={selectedPlotNum === 2}
                isFiltered={filter !== "all" && getPlotByNumber(2)!.status !== filter}
                onClick={() => setSelectedPlotNum(2)}
              />

              {/* Cross Branch Road (7.2m road) between Plot 2 and Plot 1 */}
              <div className="bg-amber-500/90 text-navy-950 font-bold text-[10px] py-1.5 px-2 text-center rounded-sm border border-amber-600 shadow-inner">
                7.2m (24 Ft) Cross Road
              </div>

              {/* Plot 1 (South-West Corner) */}
              <PlotButton
                plot={getPlotByNumber(1)!}
                isSelected={selectedPlotNum === 1}
                isFiltered={filter !== "all" && getPlotByNumber(1)!.status !== filter}
                onClick={() => setSelectedPlotNum(1)}
              />
            </div>

            {/* Center: Main 9.0m (30ft) Spine Road */}
            <div className="col-span-2 bg-gradient-to-b from-amber-500 via-amber-600 to-amber-500 text-navy-950 rounded-sm border border-amber-700 flex flex-col items-center justify-between py-6 px-1 shadow-inner relative overflow-hidden select-none">
              <div className="absolute inset-y-0 w-0.5 border-r border-dashed border-white/60 left-1/2 -translate-x-1/2" />
              <div className="rotate-90 origin-center text-[11px] font-bold tracking-widest uppercase text-navy-950 whitespace-nowrap z-10 bg-amber-400/90 px-2 py-0.5 rounded shadow-sm">
                9.0m (30 Ft) Main Central Avenue
              </div>
              <div className="rotate-90 origin-center text-[10px] font-semibold tracking-wider text-navy-900/80 whitespace-nowrap z-10 bg-amber-400/90 px-1.5 py-0.5 rounded shadow-sm">
                Blacktop Road • Streetlights
              </div>
            </div>

            {/* Right Column Plots: 16 & 17, 15 & 14, 12 & 13, 11 & 10, TANGEDCO & 9 */}
            <div className="col-span-5 flex flex-col gap-2.5 pr-2 sm:pr-5">
              {/* Row 1: Plots 16 & 17 */}
              <div className="grid grid-cols-2 gap-2">
                <PlotButton
                  plot={getPlotByNumber(16)!}
                  isSelected={selectedPlotNum === 16}
                  isFiltered={filter !== "all" && getPlotByNumber(16)!.status !== filter}
                  onClick={() => setSelectedPlotNum(16)}
                  compact
                />
                <PlotButton
                  plot={getPlotByNumber(17)!}
                  isSelected={selectedPlotNum === 17}
                  isFiltered={filter !== "all" && getPlotByNumber(17)!.status !== filter}
                  onClick={() => setSelectedPlotNum(17)}
                  compact
                />
              </div>

              {/* Row 2: Plots 15 & 14 */}
              <div className="grid grid-cols-2 gap-2">
                <PlotButton
                  plot={getPlotByNumber(15)!}
                  isSelected={selectedPlotNum === 15}
                  isFiltered={filter !== "all" && getPlotByNumber(15)!.status !== filter}
                  onClick={() => setSelectedPlotNum(15)}
                  compact
                />
                <PlotButton
                  plot={getPlotByNumber(14)!}
                  isSelected={selectedPlotNum === 14}
                  isFiltered={filter !== "all" && getPlotByNumber(14)!.status !== filter}
                  onClick={() => setSelectedPlotNum(14)}
                  compact
                />
              </div>

              {/* Cross Branch Road 1: 7.2m (24ft) */}
              <div className="bg-amber-500/90 text-navy-950 font-bold text-[10px] py-1.5 px-2 text-center rounded-sm border border-amber-600 shadow-inner">
                7.2m (24 Ft) Cross Road
              </div>

              {/* Row 3: Plots 12 & 13 */}
              <div className="grid grid-cols-2 gap-2">
                <PlotButton
                  plot={getPlotByNumber(12)!}
                  isSelected={selectedPlotNum === 12}
                  isFiltered={filter !== "all" && getPlotByNumber(12)!.status !== filter}
                  onClick={() => setSelectedPlotNum(12)}
                  compact
                />
                <PlotButton
                  plot={getPlotByNumber(13)!}
                  isSelected={selectedPlotNum === 13}
                  isFiltered={filter !== "all" && getPlotByNumber(13)!.status !== filter}
                  onClick={() => setSelectedPlotNum(13)}
                  compact
                />
              </div>

              {/* Row 4: Plots 11 & 10 */}
              <div className="grid grid-cols-2 gap-2">
                <PlotButton
                  plot={getPlotByNumber(11)!}
                  isSelected={selectedPlotNum === 11}
                  isFiltered={filter !== "all" && getPlotByNumber(11)!.status !== filter}
                  onClick={() => setSelectedPlotNum(11)}
                  compact
                />
                <PlotButton
                  plot={getPlotByNumber(10)!}
                  isSelected={selectedPlotNum === 10}
                  isFiltered={filter !== "all" && getPlotByNumber(10)!.status !== filter}
                  onClick={() => setSelectedPlotNum(10)}
                  compact
                />
              </div>

              {/* Cross Branch Road 2: 7.2m (24ft) */}
              <div className="bg-amber-500/90 text-navy-950 font-bold text-[10px] py-1.5 px-2 text-center rounded-sm border border-amber-600 shadow-inner">
                7.2m (24 Ft) Cross Road
              </div>

              {/* Bottom Right: TANGEDCO Space + Plot 9 */}
              <div className="grid grid-cols-5 gap-2 items-stretch">
                {/* TANGEDCO Transformer Zone (Purple/Indigo as in blueprint) */}
                <div className="col-span-2 bg-indigo-100 border border-indigo-400 text-indigo-900 p-2 rounded-sm flex flex-col items-center justify-center text-center shadow-sm">
                  <Zap size={15} className="text-indigo-600 mb-0.5" />
                  <span className="text-[9.5px] font-bold uppercase leading-tight">TANGEDCO</span>
                  <span className="text-[8px] text-indigo-700">Sub-station</span>
                </div>

                {/* Plot 9 */}
                <div className="col-span-3">
                  <PlotButton
                    plot={getPlotByNumber(9)!}
                    isSelected={selectedPlotNum === 9}
                    isFiltered={filter !== "all" && getPlotByNumber(9)!.status !== filter}
                    onClick={() => setSelectedPlotNum(9)}
                    compact
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Boundary Marker */}
          <div className="text-center py-2 px-4 bg-navy-900 text-white rounded-b-sm border-t border-gold/40 flex items-center justify-between text-xs">
            <span className="font-mono text-gold-warm">South Boundary: 40.8m (40.8m)</span>
            <span className="font-medium text-white/80">Adjacent: S.F. No. 256</span>
          </div>

          {/* Blueprint Legend Footer */}
          <div className="pt-4 mt-3 flex flex-wrap items-center justify-between gap-3 text-xs text-muted border-t border-[#ECE9DF]">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 bg-emerald-50 border border-emerald-500 rounded-sm" />
                Available (40% Off)
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 bg-amber-50 border border-amber-500 rounded-sm" />
                Booked (Token Paid)
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 bg-slate-200 border border-slate-400 rounded-sm" />
                100% Sold Out
              </span>
            </div>
            <div className="text-[11px] text-navy-900 font-medium">
              💡 Tap any plot to view inch-by-inch pricing & specs
            </div>
          </div>
        </div>

        {/* Right Column (4 cols): Selected Plot Detail Inspector Card */}
        <div className="lg:col-span-4 bg-white border-2 border-gold/60 rounded-sm shadow-xl p-6 sticky top-24">
          <div className="flex items-start justify-between gap-3 border-b border-[#ECE9DF] pb-4 mb-4">
            <div>
              <span className="text-[11px] font-mono tracking-wider uppercase text-muted block mb-1">
                Selected Plot Inspector
              </span>
              <h3 className="font-serif text-2xl font-bold text-navy-900 m-0">
                {selectedPlot.label}
              </h3>
            </div>
            <div>{getStatusBadge(selectedPlot.status)}</div>
          </div>

          {/* Key Dimensions Specs Grid */}
          <div className="grid grid-cols-2 gap-2.5 p-3 bg-bg rounded-sm border border-[#ECE9DF] text-xs mb-5">
            <div>
              <span className="text-muted block text-[11px]">Dimensions</span>
              <strong className="text-navy-900">{selectedPlot.dimensionsImperial}</strong>
            </div>
            <div>
              <span className="text-muted block text-[11px]">Metric</span>
              <strong className="text-navy-900">{selectedPlot.dimensionsMetric}</strong>
            </div>
            <div>
              <span className="text-muted block text-[11px]">Total Area</span>
              <strong className="text-navy-900 font-semibold">
                {selectedPlot.areaSqFt} Sq.Ft
              </strong>
            </div>
            <div>
              <span className="text-muted block text-[11px]">Cent Equivalent</span>
              <strong className="text-navy-900 font-semibold">
                {selectedPlot.areaCents} Cents
              </strong>
            </div>
            <div className="col-span-2 pt-2 border-t border-[#ECE9DF]">
              <span className="text-muted block text-[11px]">Facing & Road Access</span>
              <strong className="text-navy-900 block mt-0.5">
                {selectedPlot.facing}
              </strong>
              <span className="text-[11px] text-muted block mt-0.5">
                {selectedPlot.roadAccess}
              </span>
            </div>
          </div>

          {/* Pricing Box with Deepavali Dhamaka Discount */}
          <div className="bg-navy-900 text-white p-4 rounded-sm border border-gold/40 shadow-inner mb-5">
            <div className="flex items-center justify-between text-[11px] text-gold-warm font-semibold mb-1">
              <span className="flex items-center gap-1">
                <Sparkles size={13} className="text-gold-warm" />
                40% DEEPAVALI OFFER
              </span>
              <span className="bg-red-600 text-white px-2 py-0.5 rounded text-[10px] font-bold">
                FLAT 40% OFF
              </span>
            </div>

            <div className="flex items-baseline gap-2.5 my-1">
              <del className="text-xs text-white/50">
                ₹{(selectedPlot.originalPrice / 100000).toFixed(2)} Lakhs
              </del>
              <div className="font-serif text-2xl font-bold text-white">
                ₹{(selectedPlot.offerPrice / 100000).toFixed(2)} Lakhs
              </div>
            </div>

            <div className="flex items-center justify-between text-xs pt-2 mt-2 border-t border-white/15">
              <span className="text-emerald-400 font-semibold">
                You Save ₹{(selectedPlot.savingsAmount / 100000).toFixed(2)} Lakhs
              </span>
              <span className="text-white/70">
                ₹{selectedPlot.ratePerSqFt}/sq.ft
              </span>
            </div>
          </div>

          {/* Status Note or Plot Highlights */}
          {selectedPlot.note && (
            <div className="p-3 bg-amber-50 border border-amber-200 text-amber-900 text-xs rounded-sm mb-4 leading-relaxed">
              <strong>Status Note:</strong> {selectedPlot.note}
            </div>
          )}

          <div className="space-y-1.5 mb-6 text-xs text-navy-900">
            {selectedPlot.highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>{h}</span>
              </div>
            ))}
          </div>

          {/* Interactive CTAs */}
          <div className="space-y-2.5">
            {selectedPlot.status === "available" && (
              <a
                href={buildWhatsappLink(
                  `Hello Latitude Promoters, I am interested in reserving ${selectedPlot.label} (${selectedPlot.dimensionsImperial}, ${selectedPlot.areaCents} Cents) under the 40% Deepavali Offer for Rs. ${(selectedPlot.offerPrice / 100000).toFixed(2)} Lakhs.`
                )}
                target="_blank"
                rel="noopener"
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-br from-gold-warm to-gold text-navy-900 font-bold text-xs py-3 px-4 rounded-sm shadow hover:scale-[1.02] transition-transform"
              >
                <MessageCircle size={16} />
                Reserve {selectedPlot.label} on WhatsApp
              </a>
            )}

            {selectedPlot.status === "booked" && (
              <a
                href={buildWhatsappLink(
                  `Hello Latitude Promoters, I saw that ${selectedPlot.label} is currently booked. Can you notify me if this plot becomes available or if adjacent plots are opening?`
                )}
                target="_blank"
                rel="noopener"
                className="w-full inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs py-3 px-4 rounded-sm shadow transition-colors"
              >
                <Clock size={16} />
                Join Waiting List for {selectedPlot.label}
              </a>
            )}

            {selectedPlot.status === "sold" && (
              <a
                href={buildWhatsappLink(
                  `Hello Latitude Promoters, I noticed ${selectedPlot.label} is 100% sold out. Please share details of upcoming similar plots in Kalampalayam.`
                )}
                target="_blank"
                rel="noopener"
                className="w-full inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs py-3 px-4 rounded-sm shadow transition-colors"
              >
                <CheckCircle2 size={16} />
                Enquire for Phase 2 Releases
              </a>
            )}

            <a
              href="#contact"
              className="w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-bg text-navy-900 font-semibold text-xs py-2.5 px-4 rounded-sm border border-navy-900/30 transition-colors"
            >
              <Phone size={14} />
              Schedule Free Cab Site Visit
            </a>
          </div>
        </div>
      </div>

      {/* Official DTCP Blueprint Lightbox Modal */}
      {blueprintModalOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[250] flex items-center justify-center p-4 sm:p-8"
          onClick={(e) => {
            if (e.target === e.currentTarget) setBlueprintModalOpen(false);
          }}
        >
          <div className="bg-white max-w-4xl w-full max-h-[90vh] overflow-hidden rounded-sm shadow-2xl flex flex-col">
            <div className="p-4 bg-navy-900 text-white flex items-center justify-between border-b border-gold/40">
              <div className="flex items-center gap-2">
                <FileCheck size={18} className="text-gold-warm" />
                <div>
                  <h4 className="font-serif text-lg font-bold text-gold-warm m-0">
                    Official DTCP Approved Layout Blueprint
                  </h4>
                  <p className="text-[11px] text-white/70 m-0">
                    {layoutMetadata.dtcpApprovalNo} • {layoutMetadata.subdivisionNo}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setBlueprintModalOpen(false)}
                className="text-white/70 hover:text-white p-1.5 transition-colors"
                title="Close"
              >
                <X size={22} />
              </button>
            </div>

            <div className="p-4 overflow-auto flex-1 bg-neutral-900 flex items-center justify-center">
              <div className="relative w-full max-w-2xl min-h-[500px]">
                <Image
                  src="/images/official-layout-plan.png"
                  alt="Official DTCP Approved Site Map & Layout Plan"
                  width={800}
                  height={1000}
                  className="object-contain w-full h-auto rounded border border-white/20 shadow-lg mx-auto bg-white"
                  priority
                />
              </div>
            </div>

            <div className="p-4 bg-bg border-t border-[#ECE9DF] flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="text-muted">
                Survey Nos: <strong>{layoutMetadata.surveyNumbers}</strong> • Verified Clear Title
              </div>
              <div className="flex gap-2">
                <a
                  href="/images/official-layout-plan.png"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-1.5 bg-navy-900 text-gold-warm px-3.5 py-1.5 rounded-sm font-semibold text-xs"
                >
                  <Eye size={14} />
                  Open Full Resolution
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Small Sub-component for individual Plot Tiles
function PlotButton({
  plot,
  isSelected,
  isFiltered,
  onClick,
  compact = false,
}: {
  plot: LayoutPlot;
  isSelected: boolean;
  isFiltered: boolean;
  onClick: () => void;
  compact?: boolean;
}) {
  const getStatusStyles = () => {
    if (plot.status === "available") {
      return "border-emerald-500 bg-emerald-50/80 text-emerald-950 hover:bg-emerald-100 hover:border-emerald-600";
    }
    if (plot.status === "booked") {
      return "border-amber-500 bg-amber-50/80 text-amber-950 hover:bg-amber-100 hover:border-amber-600";
    }
    return "border-slate-300 bg-slate-100 text-slate-700 hover:bg-slate-200";
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={`text-left p-2.5 rounded-sm border transition-all relative overflow-hidden flex flex-col justify-between ${getStatusStyles()} ${
        isSelected
          ? "ring-2 ring-gold border-gold shadow-md scale-[1.02] z-10 font-medium"
          : ""
      } ${isFiltered ? "opacity-30 scale-95" : "opacity-100"}`}
      style={{ minHeight: compact ? "68px" : "72px" }}
    >
      <div className="flex items-center justify-between w-full">
        <span className="font-serif font-bold text-sm sm:text-base leading-tight">
          {plot.label}
        </span>
        <span
          className={`text-[8.5px] font-bold px-1.5 py-0.5 rounded uppercase leading-none ${
            plot.status === "available"
              ? "bg-emerald-600 text-white"
              : plot.status === "booked"
              ? "bg-amber-600 text-white"
              : "bg-slate-600 text-white"
          }`}
        >
          {plot.status === "available"
            ? "40% Off"
            : plot.status === "booked"
            ? "Booked"
            : "Sold"}
        </span>
      </div>

      <div className="flex items-baseline justify-between w-full mt-1 text-[10px] text-navy-900/80">
        <span className="font-mono">{plot.dimensionsImperial.split("×")[0].trim()}</span>
        <span className="font-semibold text-navy-950">
          ₹{(plot.offerPrice / 100000).toFixed(1)}L
        </span>
      </div>

      <div className="text-[9.5px] text-muted truncate w-full">
        {plot.areaCents} Cents • {plot.facing.split(" ")[0]}
      </div>
    </button>
  );
}
