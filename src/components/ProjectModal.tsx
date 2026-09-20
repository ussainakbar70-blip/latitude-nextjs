"use client";

import Image from "next/image";
import Link from "next/link";
import { X, Sparkles, ArrowRight } from "lucide-react";
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
          <div className="absolute top-3 left-3 bg-gradient-to-r from-red-600 to-amber-600 text-white text-[11px] font-bold px-3 py-1 rounded shadow flex items-center gap-1.5">
            <Sparkles size={12} />
            40% Deepavali Festive Discount
          </div>
        </div>
        <div className="p-7">
          <p className="uppercase text-xs font-semibold tracking-[0.28em] text-gold mb-1">
            {project.tag}
          </p>
          <h3 className="font-serif text-[28px] text-navy-900 mb-2">{project.title}</h3>

          {/* Deepavali Offer Card */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-gold/30 rounded p-3.5 mb-4">
            <div className="flex justify-between items-center text-xs text-muted mb-1">
              <span>Original Standard Price: <del>₹{(project.originalPrice / 100000).toFixed(2)} Lakhs</del></span>
              <span className="font-bold text-red-700 bg-red-100 px-2 py-0.5 rounded">40% OFF</span>
            </div>
            <div className="text-2xl font-serif font-bold text-navy-900">
              ₹{(project.offerPrice / 100000).toFixed(2)} Lakhs
              <span className="text-xs font-sans font-normal text-emerald-700 font-semibold ml-2">
                (Save ₹{(project.savingsAmount / 100000).toFixed(2)} Lakhs)
              </span>
            </div>
          </div>

          <DetailRow label="Location" value={project.location} />
          <DetailRow label="Plot Dimensions" value={project.specs.plotDimensions} />
          <DetailRow label="Total Plot Area" value={project.specs.totalPlotArea} />
          <DetailRow label="Facing Direction" value={project.specs.facing} />
          <DetailRow label="Road Width" value={project.specs.roadWidth} />
          <DetailRow label="Approval Status" value={project.specs.approvalNumber} />
          <DetailRow label="Patta" value={project.specs.pattaStatus} />

          <div className="mt-5">
            <Link
              href={`/properties/${project.id}`}
              onClick={onClose}
              className="w-full inline-flex items-center justify-center gap-2 rounded-sm bg-navy-900 hover:bg-navy-800 text-gold-warm font-semibold text-[14px] px-6 py-3.5 transition-all shadow-md"
            >
              Open Full Inch-by-Inch & 360° Virtual Tour Page
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
                `Hello Latitude Properties, I would like more details about ${project.title} and the 40% Deepavali offer.`
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
