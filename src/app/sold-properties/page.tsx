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
  Layers,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getSoldProjects } from "@/data/projects";
import { site, buildWhatsappLink } from "@/data/site";

export const metadata = {
  title: "Sold Out Sites & Completed Communities | 100% Delivered Plots in Coimbatore",
  description:
    "Explore our delivered, fully inhabited, and 100% sold-out residential plotting communities in Coimbatore with Latitude Properties. 100% Patta delivery and zero dispute record.",
  alternates: {
    canonical: "/sold-properties",
  },
  openGraph: {
    title: "Sold Out Sites | Latitude Properties Coimbatore",
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
    name: "Completed & Sold Out Residential Layouts - Latitude Properties",
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
              Sold Out Sites & Completed Layouts
            </h1>

            <p className="text-[#EDEAE0] text-base leading-relaxed">
              Every single plot in these landmark residential communities was sold out, legally registered,
              and handed over to proud homeowners. Over 50+ families are already building and living peacefully in these layouts.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
              <div className="bg-white/10 border border-white/15 p-4 rounded-sm">
                <Users size={20} className="text-gold-warm mb-1.5" />
                <strong className="text-2xl font-serif text-white block">56+</strong>
                <span className="text-xs text-[#EDEAE0]">Happy Plot Owners</span>
              </div>
              <div className="bg-white/10 border border-white/15 p-4 rounded-sm">
                <CheckCircle2 size={20} className="text-emerald-400 mb-1.5" />
                <strong className="text-2xl font-serif text-white block">100%</strong>
                <span className="text-xs text-[#EDEAE0]">Individual Pattas Handed</span>
              </div>
              <div className="bg-white/10 border border-white/15 p-4 rounded-sm col-span-2 sm:col-span-1">
                <Award size={20} className="text-gold-warm mb-1.5" />
                <strong className="text-2xl font-serif text-white block">Zero</strong>
                <span className="text-xs text-[#EDEAE0]">Legal Disputes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sold Projects Showcase */}
      <section className="py-14 md:py-20">
        <div className="max-w-[1240px] mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {soldProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white border border-[#ECE9DF] rounded-sm overflow-hidden shadow-sm flex flex-col justify-between"
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
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />

                    <div className="absolute top-3.5 left-3.5 flex flex-col gap-1.5 items-start">
                      <span className="bg-emerald-700 text-white text-xs font-bold uppercase px-3 py-1 rounded-sm shadow-md flex items-center gap-1.5">
                        <CheckCircle2 size={13} />
                        100% Sold Out & Delivered
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
                        <span className="text-rose-700 font-bold">
                          ● All {project.plotsSummary.sold} Plots Delivered
                        </span>
                      </div>
                    )}

                    <p className="text-xs text-muted leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="bg-bg p-3.5 rounded-sm border border-[#ECE9DF] space-y-2 text-xs text-muted mb-4">
                      <div className="flex justify-between py-1 border-b border-[#EEECE4]">
                        <span>Total Units Delivered:</span>
                        <strong className="text-navy-900">{project.specs.totalPlotArea}</strong>
                      </div>
                      <div className="flex justify-between py-1 border-b border-[#EEECE4]">
                        <span>DTCP & Approvals:</span>
                        <strong className="text-navy-900">{project.dtcpApprovalNumber || project.specs.approvalNumber}</strong>
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
                </div>

                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-[#EEECE4] flex flex-wrap gap-3 items-center justify-between">
                    <Link
                      href={`/sites/${project.id}`}
                      className="inline-flex items-center gap-1.5 text-navy-900 font-semibold text-sm hover:text-gold transition-colors"
                    >
                      View Layout Map & Specs
                      <ArrowRight size={15} />
                    </Link>

                    <a
                      href={buildWhatsappLink(
                        `Hi Latitude Properties, I noticed ${project.title} is sold out. Please inform me when Phase 2 or a similar layout launches in that area.`
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
                Grab Currently Available Sites with 40% Deepavali Discount
              </h3>
              <p className="text-sm text-[#EDEAE0] max-w-xl">
                Our active plots in Sri Aanandham Avenue, Kandhan Avenue, and Siruvani Enclave are filling fast.
                Benefit from our limited-time 40% Deepavali festive pricing today!
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/#sites"
                className="inline-flex items-center gap-2 bg-gradient-to-br from-gold-warm to-gold text-navy-900 font-bold text-sm px-6 py-3 rounded-sm shadow hover:scale-[1.02] transition-transform"
              >
                View Available Sites
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
