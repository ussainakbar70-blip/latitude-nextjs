"use client";

import Image from "next/image";
import Link from "next/link";
import { X, Sparkles, ArrowRight, Layers } from "lucide-react";
import { Project } from "@/data/projects";
import { site, buildWhatsappLink } from "@/data/site";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 bg-[rgba(6,9,30,0.72)] z-[200] flex items-center justify-center p-5"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white max-w-[640px] w-full max-h-[88vh] overflow-y-auto relative rounded-sm shadow-2xl">
        <button
          aria-label="Close"
          onClick={onClose}
          className="absolute top-3.5 right-3.5 bg-navy-900/70 text-white w-9 h-9 rounded-full flex items-center justify-center z-10 hover:bg-navy-900 transition-colors"
        >
          <X size={18} />
        </button>
        <div className="relative h-[220px] w-full">
          <Image src={project.img} alt={project.title} fill className="object-cover" sizes="640px" />
          <div className="absolute top-3 left-3 bg-gradient-to-r from-navy-900 to-navy-800 text-gold-warm text-[11px] font-bold px-3 py-1 rounded shadow flex items-center gap-1.5 border border-gold/40">
            <Sparkles size={12} className="text-gold-warm" />
            {project.launchOfferTitle || "DTCP Approved"}
          </div>
        </div>
        <div className="p-7">
          <p className="uppercase text-xs font-semibold tracking-[0.28em] text-gold mb-1">
            {project.tag}
          </p>
          <h3 className="font-serif text-[28px] text-navy-900 mb-2">{project.title}</h3>

          {/* Plot Summary Strip */}
          {project.plotsSummary && (
            <div className="flex items-center justify-between text-xs bg-[#FAF8F5] p-3 rounded-sm border border-[#EBE7DC] mb-4">
              <span className="font-semibold text-navy-900 flex items-center gap-1.5">
                <Layers size={14} className="text-gold" />
                {project.plotsSummary.total} Plots Total
              </span>
              <div className="flex gap-2.5">
                <span className="text-emerald-700 font-bold">
                  ● {project.plotsSummary.available} Available
                </span>
                <span className="text-amber-700 font-bold">
                  ● {project.plotsSummary.booked} Booked
                </span>
                <span className="text-rose-700 font-bold">
                  ● {project.plotsSummary.sold} Sold
                </span>
              </div>
            </div>
          )}

          {/* Pricing Card */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-gold/40 rounded p-4 mb-4">
            {project.houseStartingPrice ? (
              <div>
                <div className="flex justify-between items-center text-xs font-bold text-navy-900 mb-1">
                  <span>PREMIUM 2 BHK INDIVIDUAL HOUSES</span>
                  <span className="text-emerald-800">Plots: {project.plotRatePerCent}</span>
                </div>
                <div className="text-2xl font-serif font-bold text-navy-900">
                  {project.houseStartingPrice}
                </div>
                <div className="text-xs text-muted mt-2 pt-2 border-t border-gold/20 flex flex-wrap justify-between gap-1">
                  <span className="font-semibold text-navy-900">{project.onHandAmount}</span>
                  <span className="text-emerald-700 font-medium">{project.bankLoanAssistance}</span>
                </div>
              </div>
            ) : project.plotRatePerCent ? (
              <div>
                <div className="flex justify-between items-center text-xs font-bold text-navy-900 mb-1">
                  <span>GRAND LAUNCH OFFER</span>
                  <span className="text-emerald-800">DTCP Approved Layout</span>
                </div>
                <div className="text-2xl font-serif font-bold text-navy-900">
                  {project.plotRatePerCent}
                </div>
                <div className="text-xs text-muted mt-2 pt-2 border-t border-gold/20 flex flex-wrap justify-between gap-1">
                  <span className="font-semibold text-navy-900">Future Corporation Limit</span>
                  <span className="text-emerald-700 font-medium">33-ft Blacktop Roads • Pollachi Rd 650m</span>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex justify-between items-center text-xs text-muted mb-1">
                  <span>Plot Starting Price</span>
                  <span className="font-semibold text-emerald-800">100% Clear Title Patta</span>
                </div>
                <div className="text-2xl font-serif font-bold text-navy-900">
                  ₹{(project.offerPrice / 100000).toFixed(2)} Lakhs
                  <span className="text-xs font-sans font-normal text-muted ml-2">
                    (₹{project.ratePerSqFtOffer}/sq.ft)
                  </span>
                </div>
              </div>
            )}
          </div>

          <DetailRow label="Location" value={project.location} />
          <DetailRow label="Plot Dimensions" value={project.specs.plotDimensions} />
          <DetailRow label="Total Plot Area" value={project.specs.totalPlotArea} />
          <DetailRow label="Facing Direction" value={project.specs.facing} />
          <DetailRow label="Road Width" value={project.specs.roadWidth} />
          <DetailRow label="Approval Status" value={project.dtcpApprovalNumber || project.specs.approvalNumber} />
          <DetailRow label="Patta" value={project.specs.pattaStatus} />

          <div className="mt-5">
            <Link
              href={`/sites/${project.id}`}
              onClick={onClose}
              className="w-full inline-flex items-center justify-center gap-2 rounded-sm bg-navy-900 hover:bg-navy-800 text-gold-warm font-semibold text-[14px] px-6 py-3.5 transition-all shadow-md"
            >
              Open Full Site Details & Layout Map
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="flex flex-wrap gap-2.5 mt-3">
            <a
              href={`tel:${site.phonePrimaryTel}`}
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-sm bg-gradient-to-br from-gold-warm to-gold text-navy-900 font-semibold text-[13.5px] px-4 py-2.5"
            >
              Call Now
            </a>
            <a
              href={buildWhatsappLink(
                `Hello Latitude Properties, I would like more details about ${project.title} layout map and pricing.`
              )}
              target="_blank"
              rel="noopener"
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-sm border border-navy-900 text-navy-900 text-[13.5px] px-4 py-2.5 hover:bg-navy-900 hover:text-white transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4 py-[11px] border-b border-[#EEECE4] text-[14.5px]">
      <span className="text-muted flex-shrink-0">{label}</span>
      <span className="text-ink font-medium text-right">{value}</span>
    </div>
  );
}
