import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Trophy,
  Users,
  Award,
  MessageCircle,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getSoldProjects } from "@/data/projects";
import { site, buildWhatsappLink } from "@/data/site";

export const metadata = {
  title: "Sold Out Properties & Completed Communities | 100% Delivered Plots in Coimbatore",
  description:
    "Explore our delivered, fully inhabited, and 100% sold-out residential plotting communities in Coimbatore with Latitude Promoters. 100% Patta delivery and zero dispute record.",
  alternates: {
    canonical: "/sold-properties",
  },
  openGraph: {
    title: "Sold Out Properties | Latitude Promoters Coimbatore",
    description:
      "100% delivered residential layouts with individual Pattas transferred across Coimbatore.",
    url: "https://latitudepromoters.com/sold-properties",
  },
};

export default function SoldPropertiesPage() {
  const soldProjects = getSoldProjects();

  const soldJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Completed & Sold Out Residential Layouts - Latitude Promoters",
    description:
      "Showcase of 100% delivered, registered, and inhabited residential layouts in Coimbatore.",
    url: "https://latitudepromoters.com/sold-properties",
  };

  return (
    <main className="bg-bg min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(soldJsonLd) }}
      />
      <Navbar />

      {/* Hero Header */}
      <section className="pt-32 pb-16 bg-navy-900 text-white border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C9A34A_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="max-w-[1240px] mx-auto px-5 md:px-10 relative z-10">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold uppercase px-3 py-1 rounded-sm mb-3">
              <Trophy size={14} />
              100% Proven Delivery Track Record
            </span>

            <h1 className="font-serif text-3xl md:text-5xl font-bold text-white mb-4">
              Sold Properties & Completed Layouts
            </h1>

            <p className="text-[#EDEAE0] text-base leading-relaxed">
              Every project developed by Latitude Promoters is backed by transparent DTCP approvals, 100% clear legal titles, and prompt individual Patta delivery. Browse our completed gated layouts where thriving families are building their dream homes.
            </p>
          </div>

          {/* Key Delivery Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 pt-8 border-t border-white/10">
            <div className="bg-navy-800/80 border border-white/10 p-4 rounded-sm">
              <div className="font-serif text-3xl font-bold text-gold-warm">100%</div>
              <div className="text-xs text-[#EDEAE0] mt-1">Individual Patta Delivery</div>
            </div>
            <div className="bg-navy-800/80 border border-white/10 p-4 rounded-sm">
              <div className="font-serif text-3xl font-bold text-gold-warm">500+</div>
              <div className="text-xs text-[#EDEAE0] mt-1">Happy Landowners</div>
            </div>
            <div className="bg-navy-800/80 border border-white/10 p-4 rounded-sm">
              <div className="font-serif text-3xl font-bold text-gold-warm">0</div>
              <div className="text-xs text-[#EDEAE0] mt-1">Legal Title Disputes</div>
            </div>
            <div className="bg-navy-800/80 border border-white/10 p-4 rounded-sm">
              <div className="font-serif text-3xl font-bold text-gold-warm">&gt;35%</div>
              <div className="text-xs text-[#EDEAE0] mt-1">Avg. 3-Year Appreciation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sold Projects Grid */}
      <section className="py-16">
        <div className="max-w-[1240px] mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {soldProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white border border-[#ECE9DF] rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative h-[260px] w-full overflow-hidden">
                  <span className="absolute top-3.5 left-3.5 z-10 bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm shadow-md flex items-center gap-1.5">
                    <CheckCircle2 size={13} />
                    {project.tag}
                  </span>

                  <span className="absolute bottom-3.5 left-3.5 z-10 bg-navy-900/85 backdrop-blur-md text-gold-warm text-xs px-3 py-1 rounded-sm">
                    {project.handoverDate || "Successfully Delivered"}
                  </span>

                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <div className="p-6 md:p-8 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="font-serif text-2xl text-navy-900 mb-2">
                      {project.title}
                    </h3>

                    <div className="flex items-center gap-1.5 text-muted text-sm mb-4">
                      <MapPin size={15} className="text-gold flex-shrink-0" />
                      <span>{project.location}</span>
                    </div>

                    <p className="text-muted text-xs leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Specs summary */}
                    <div className="space-y-1.5 text-xs text-muted mb-6 bg-bg p-4 rounded-sm border border-[#ECE9DF]">
                      <div className="flex justify-between py-1 border-b border-[#EEECE4]">
                        <span>Delivery Scope:</span>
                        <strong className="text-navy-900">{project.specs.totalPlotArea}</strong>
                      </div>
                      <div className="flex justify-between py-1 border-b border-[#EEECE4]">
                        <span>Road & Infrastructure:</span>
                        <strong className="text-navy-900">{project.specs.roadWidth}</strong>
                      </div>
                      <div className="flex justify-between py-1 border-b border-[#EEECE4]">
                        <span>DTCP & Approvals:</span>
                        <strong className="text-navy-900">{project.specs.approvalNumber}</strong>
                      </div>
                      <div className="flex justify-between py-1 border-b border-[#EEECE4]">
                        <span>Patta Status:</span>
                        <strong className="text-emerald-700 font-semibold">{project.specs.pattaStatus}</strong>
                      </div>
                    </div>

                    {project.bookedOrSoldNote && (
                      <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 p-3 rounded-sm text-xs mb-6 flex items-start gap-2">
                        <ShieldCheck size={16} className="text-emerald-700 flex-shrink-0 mt-0.5" />
                        <span>{project.bookedOrSoldNote}</span>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-[#EEECE4] flex flex-wrap gap-3 items-center justify-between">
                    <Link
                      href={`/properties/${project.id}`}
                      className="inline-flex items-center gap-1.5 text-navy-900 font-semibold text-sm hover:text-gold transition-colors"
                    >
                      View Specs & 360° View
                      <ArrowRight size={15} />
                    </Link>

                    <a
                      href={buildWhatsappLink(
                        `Hi Latitude Promoters, I noticed ${project.title} is sold out. Please inform me when Phase 2 or a similar project launches in that area.`
                      )}
                      target="_blank"
                      rel="noopener"
                      className="inline-flex items-center gap-1.5 bg-navy-900 text-gold-warm hover:bg-navy-800 text-xs font-semibold px-4 py-2 rounded-sm transition-all"
                    >
                      <MessageCircle size={14} />
                      Pre-Register for Phase 2
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Call to Action */}
          <div className="mt-16 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 text-white p-8 md:p-12 rounded-sm border border-gold shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-gold-warm text-xs font-bold uppercase tracking-widest block mb-1">
                Don&apos;t Miss Out
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-2">
                Grab Currently Available Plots with 40% Deepavali Discount
              </h3>
              <p className="text-sm text-[#EDEAE0] max-w-xl">
                Our active plots in Kalampalayam and Coimbatore are filling fast. Benefit from our limited-time 40% Deepavali festive pricing today!
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 bg-gradient-to-br from-gold-warm to-gold text-navy-900 font-bold text-sm px-6 py-3 rounded-sm shadow hover:scale-[1.02] transition-transform"
              >
                View Available Plots
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
