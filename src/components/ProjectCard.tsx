import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight, Sparkles, Compass, Layers, Map } from "lucide-react";
import { Project } from "@/data/projects";
import Reveal from "./Reveal";

export default function ProjectCard({
  project,
  onSelect,
}: {
  project: Project;
  onSelect?: (p: Project) => void;
}) {
  const isAvailable = project.status === "available";
  const isBooked = project.status === "booked";
  const isSold = project.status === "sold";
  const summary = project.plotsSummary;

  return (
    <Reveal>
      <div className="bg-white shadow-[0_10px_30px_rgba(10,16,51,0.06)] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_26px_50px_rgba(10,16,51,0.14)] group flex flex-col h-full border border-[#EDEAE0]">
        <Link href={`/sites/${project.id}`} className="block relative h-[230px] overflow-hidden">
          <div className="absolute top-3.5 left-3.5 z-10 flex flex-col gap-1.5 items-start">
            <span className="bg-navy-900/90 backdrop-blur-sm text-gold-warm text-[10.5px] tracking-[0.16em] uppercase px-3 py-1 font-semibold rounded-sm shadow-sm">
              {project.tag}
            </span>
            {isAvailable && (
              <span className="bg-gradient-to-r from-red-600 to-amber-600 text-white text-[10px] tracking-wider uppercase px-2.5 py-1 font-bold rounded-sm shadow-md flex items-center gap-1">
                <Sparkles size={11} />
                40% Deepavali Offer
              </span>
            )}
            {isBooked && (
              <span className="bg-amber-600 text-white text-[10px] tracking-wider uppercase px-2.5 py-1 font-bold rounded-sm shadow-md">
                Token Received
              </span>
            )}
            {isSold && (
              <span className="bg-emerald-700 text-white text-[10px] tracking-wider uppercase px-2.5 py-1 font-bold rounded-sm shadow-md">
                100% Sold Out
              </span>
            )}
          </div>

          <div className="absolute bottom-3 right-3 z-10 bg-navy-900/80 backdrop-blur-sm text-white/90 text-[11px] px-2.5 py-1 rounded-sm flex items-center gap-1.5">
            {project.layoutMapImage ? (
              <>
                <Map size={13} className="text-gold-warm" />
                Layout Map Ready
              </>
            ) : (
              <>
                <Compass size={13} className="text-gold-warm" />
                360° Tour Ready
              </>
            )}
          </div>

          <Image
            src={project.img}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.08]"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </Link>

        <div className="p-6 flex flex-col flex-grow justify-between">
          <div>
            <Link href={`/sites/${project.id}`}>
              <h3 className="font-serif text-2xl text-navy-900 mb-1.5 hover:text-gold transition-colors">
                {project.title}
              </h3>
            </Link>
            <div className="flex items-center gap-1.5 text-muted text-[13.5px] mb-3">
              <MapPin size={14} className="text-gold flex-shrink-0" />
              <span>{project.location}</span>
            </div>

            {/* Plot Availability Breakdown Badge Strip */}
            {summary && (
              <div className="flex items-center justify-between text-[11.5px] bg-[#FAF8F5] px-2.5 py-2 rounded-sm border border-[#EBE7DC] mb-3">
                <span className="text-navy-900 font-semibold flex items-center gap-1">
                  <Layers size={13} className="text-gold" />
                  {summary.total} Plots Total
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-700 font-bold" title="Available Plots">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1" />
                    {summary.available} Avail
                  </span>
                  <span className="text-amber-700 font-bold" title="Booked Plots">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-500 mr-1" />
                    {summary.booked} Booked
                  </span>
                  <span className="text-rose-700 font-bold" title="Sold Plots">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-rose-500 mr-1" />
                    {summary.sold} Sold
                  </span>
                </div>
              </div>
            )}

            <div className="bg-bg p-3 rounded-sm mb-4 border border-[#E9E6DB]">
              <div className="flex items-baseline justify-between gap-2">
                <div className="text-[11.5px] text-muted line-through">
                  ₹{(project.originalPrice / 100000).toFixed(2)} Lakhs
                </div>
                <div className="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded">
                  Save ₹{(project.savingsAmount / 100000).toFixed(2)}L (40% OFF)
                </div>
              </div>
              <div className="text-[19px] font-serif font-bold text-navy-900 mt-0.5">
                ₹{(project.offerPrice / 100000).toFixed(2)} Lakhs
                <span className="text-[12px] font-sans font-normal text-muted ml-2">
                  (₹{project.ratePerSqFtOffer}/sq.ft)
                </span>
              </div>
            </div>

            <div className="text-xs text-muted space-y-1 mb-5">
              <div><strong className="text-navy-900">Dimensions:</strong> {project.specs.plotDimensions}</div>
              <div><strong className="text-navy-900">Approvals:</strong> {project.dtcpApprovalNumber || project.specs.approvalNumber.split("|")[0]}</div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-[#EEECE4]">
            <Link
              href={`/sites/${project.id}`}
              className="inline-flex items-center gap-1.5 text-navy-900 font-semibold text-sm hover:text-gold transition-colors"
            >
              Site Details & Layout
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            {onSelect && (
              <button
                type="button"
                onClick={() => onSelect(project)}
                className="text-xs font-medium text-muted hover:text-navy-900 underline"
              >
                Quick Preview
              </button>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
