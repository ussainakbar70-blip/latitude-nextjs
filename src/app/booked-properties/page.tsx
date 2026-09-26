import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Clock,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Phone,
  MessageCircle,
  Layers,
  Map,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getBookedProjects } from "@/data/projects";
import { site, buildWhatsappLink } from "@/data/site";

export const metadata = {
  title: "Booked Sites & Plots | Token Advance & Under Registration Sites in Coimbatore",
  description:
    "Explore residential sites and plots currently booked under our 40% Deepavali offer and undergoing Sub-Registrar registration with Latitude Properties in Coimbatore. Join our Phase 2 priority waiting list.",
  alternates: {
    canonical: "/booked-properties",
  },
  openGraph: {
    title: "Booked Sites | Latitude Properties Coimbatore",
    description:
      "Track plots and sites currently booked and undergoing registration. Join the waitlist for adjacent plots.",
    url: "https://latitudeproperties.com/booked-properties",
  },
};

export default function BookedPropertiesPage() {
  const bookedProjects = getBookedProjects();

  const bookedJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Booked Sites & Plots - Latitude Properties",
    description:
      "Residential plots with token advance received undergoing registration in Coimbatore.",
    url: "https://latitudeproperties.com/booked-properties",
  };

  return (
    <main className="bg-bg min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookedJsonLd) }}
      />
      <Navbar />

      {/* Hero Header */}
      <section className="pt-32 pb-16 bg-navy-900 text-white border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C9A34A_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="max-w-[1240px] mx-auto px-5 md:px-10 relative z-10">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold uppercase px-3 py-1 rounded-sm mb-3">
              <Clock size={14} />
              Active Transaction Pipeline
            </span>

            <h1 className="font-serif text-3xl md:text-5xl font-bold text-white mb-4">
              Booked Sites & Token Received Plots
            </h1>

            <p className="text-[#EDEAE0] text-base leading-relaxed">
              These plots have received token advances from proud home buyers under our festive pricing.
              Sub-Registrar Office (SRO) deed registrations and bank mortgage releases are actively in progress.
            </p>

            <div className="flex flex-wrap gap-4 mt-6">
              <div className="bg-white/10 border border-white/15 px-4 py-2.5 rounded-sm">
                <span className="text-xs text-white/70 block">Active Booked Sites</span>
                <strong className="text-xl font-serif text-gold-warm font-bold">
                  {bookedProjects.length} Sites Tracked
                </strong>
              </div>
              <div className="bg-white/10 border border-white/15 px-4 py-2.5 rounded-sm">
                <span className="text-xs text-white/70 block">Next Phase Release</span>
                <strong className="text-xl font-serif text-gold-warm font-bold">
                  Phase 2 Now Open
                </strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booked Projects Grid */}
      <section className="py-14 md:py-20">
        <div className="max-w-[1240px] mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bookedProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white border border-[#ECE9DF] rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-64 w-full">
                    <Image
                      src={project.img}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />

                    <div className="absolute top-3.5 left-3.5 flex flex-col gap-1.5 items-start">
                      <span className="bg-amber-600 text-white text-xs font-bold uppercase px-3 py-1 rounded-sm shadow-md flex items-center gap-1.5">
                        <Clock size={12} />
                        Token Advance Received
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 text-white">
                      <span className="text-xs bg-navy-900/80 px-2.5 py-1 rounded-sm text-gold-warm font-medium">
                        {project.type}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-serif text-2xl font-bold text-navy-900 mb-1">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-muted text-xs mb-4">
                      <MapPin size={14} className="text-gold" />
                      <span>{project.location}</span>
                    </div>

                    {/* Plots KPI */}
                    {project.plotsSummary && (
                      <div className="flex items-center justify-between text-xs bg-[#FAF8F5] p-2.5 rounded-sm border border-[#EBE7DC] mb-4">
                        <span className="font-semibold text-navy-900 flex items-center gap-1">
                          <Layers size={13} className="text-gold" />
                          {project.plotsSummary.total} Plots Total
                        </span>
                        <div className="flex gap-2">
                          <span className="text-amber-700 font-bold">
                            ● {project.plotsSummary.booked} Booked
                          </span>
                          <span className="text-rose-700 font-bold">
                            ● {project.plotsSummary.sold} Sold
                          </span>
                        </div>
                      </div>
                    )}

                    <div className="bg-bg p-3.5 rounded-sm border border-[#ECE9DF] space-y-2 text-xs text-muted mb-4">
                      <div className="flex justify-between py-1 border-b border-[#EEECE4]">
                        <span>Plot Dimensions:</span>
                        <strong className="text-navy-900">{project.specs.plotDimensions}</strong>
                      </div>
                      <div className="flex justify-between py-1 border-b border-[#EEECE4]">
                        <span>Facing:</span>
                        <strong className="text-navy-900">{project.specs.facing}</strong>
                      </div>
                      <div className="flex justify-between py-1 border-b border-[#EEECE4]">
                        <span>Approvals:</span>
                        <strong className="text-navy-900">{project.dtcpApprovalNumber || project.specs.approvalNumber}</strong>
                      </div>
                    </div>

                    {project.bookedOrSoldNote && (
                      <div className="bg-amber-50 border border-amber-200 text-amber-900 p-3 rounded-sm text-xs mb-6 flex items-start gap-2">
                        <ShieldCheck size={16} className="text-amber-700 flex-shrink-0 mt-0.5" />
                        <span>{project.bookedOrSoldNote}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-[#EEECE4] flex flex-wrap gap-3 items-center justify-between">
                    <Link
                      href={`/sites/${project.id}`}
                      className="inline-flex items-center gap-1.5 text-navy-900 font-semibold text-sm hover:text-gold transition-colors"
                    >
                      View Layout Map & Site Specs
                      <ArrowRight size={15} />
                    </Link>

                    <a
                      href={buildWhatsappLink(
                        `Hi Latitude Properties, I noticed that ${project.title} is currently booked. Please put me on the waiting list if similar plots become available!`
                      )}
                      target="_blank"
                      rel="noopener"
                      className="inline-flex items-center gap-1.5 bg-navy-900 text-gold-warm hover:bg-navy-800 text-xs font-semibold px-4 py-2 rounded-sm transition-all"
                    >
                      <MessageCircle size={14} />
                      Join Waitlist for Phase 2
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Banner */}
          <div className="mt-16 bg-gradient-to-r from-navy-900 to-navy-800 text-white p-8 md:p-12 rounded-sm border border-gold/30 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-2">
                Looking for Available Sites with 40% Deepavali Discount?
              </h3>
              <p className="text-sm text-[#EDEAE0] max-w-xl">
                Browse our active layout listings with master layout maps, ready for immediate spot booking, instant registration, and individual Patta handover in Coimbatore.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/#sites"
                className="inline-flex items-center gap-2 bg-gradient-to-br from-gold-warm to-gold text-navy-900 font-bold text-sm px-6 py-3 rounded-sm shadow hover:scale-[1.02] transition-transform"
              >
                Browse Our Available Sites
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
