"use client";

import { useState, FormEvent } from "react";
import { MapPin, Phone, CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";
import { site, buildWhatsappLink, buildMapsLink } from "@/data/site";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Static demo only — no backend wired up. Swap this for a real submission
    // handler (e.g. a Vercel API route or Formspree) before going live.
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-[88px] lg:py-[120px] bg-navy-900 text-white">
      <div className="max-w-[1240px] mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-[70px]">
        <Reveal>
          <p className="uppercase text-xs font-semibold tracking-[0.28em] text-gold-warm">
            Get In Touch
          </p>
          <h2 className="font-serif font-semibold text-white text-[32px] md:text-[44px] leading-[1.15] my-3.5">
            Let&apos;s Find the
            <br />
            Right Property
          </h2>
          <p className="text-[#B7B9C8] text-base leading-[1.75] max-w-[560px]">
            Have a location, budget or property requirement in mind? Connect
            with Latitude Promoters for current project details and
            site-visit assistance.
          </p>

          <div className="my-7">
            <p className="font-serif text-xl text-white mb-2.5">Latitude Promoters</p>
            <div className="flex items-start gap-3 text-[#D8D9E4] text-[15px] mb-3.5">
              <MapPin size={18} className="text-gold-warm flex-shrink-0 mt-0.5" />
              <span>
                {site.address.line1}
                <br />
                {site.address.line2}
                <br />
                {site.address.line3}
              </span>
            </div>
            <div className="flex items-start gap-3 text-[#D8D9E4] text-[15px]">
              <Phone size={18} className="text-gold-warm flex-shrink-0 mt-0.5" />
              <span>
                {site.phonePrimary} (Primary) &nbsp;·&nbsp; {site.phoneAlternate} (Alternate)
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-3.5">
            <a
              href={`tel:${site.phonePrimaryTel}`}
              className="inline-flex items-center gap-2 rounded-sm bg-gradient-to-br from-gold-warm to-gold text-navy-900 font-semibold text-[13.5px] px-6 py-3"
            >
              Call Now
            </a>
            <a
              href={buildWhatsappLink(site.defaultWhatsappMessage)}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-sm border border-white/55 text-white text-[13.5px] px-6 py-3 transition-colors hover:bg-white/10 hover:border-white"
            >
              WhatsApp
            </a>
            <a
              href={buildMapsLink()}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-sm border border-white/55 text-white text-[13.5px] px-6 py-3 transition-colors hover:bg-white/10 hover:border-white"
            >
              Get Directions
            </a>
          </div>
        </Reveal>

        <Reveal className="bg-white rounded-sm p-6 sm:p-10">
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <Field label="Full Name">
                  <input type="text" required className={inputClass} />
                </Field>
                <Field label="Phone Number">
                  <input type="tel" required className={inputClass} />
                </Field>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <Field label="Interested In">
                  <select className={inputClass}>
                    <option>Residential Plots</option>
                    <option>Gated Community</option>
                    <option>Land Investment</option>
                  </select>
                </Field>
                <Field label="Budget Range">
                  <select className={inputClass}>
                    <option>Under ₹15 Lakhs</option>
                    <option>₹15L – ₹30L</option>
                    <option>₹30L and above</option>
                  </select>
                </Field>
              </div>
              <div className="mb-4">
                <Field label="Preferred Location">
                  <input
                    type="text"
                    placeholder="e.g. Kalampalayam, Coimbatore"
                    className={inputClass}
                  />
                </Field>
              </div>
              <div className="mb-4">
                <Field label="Message">
                  <textarea rows={3} className={inputClass} />
                </Field>
              </div>
              <button
                type="submit"
                className="w-full flex justify-center items-center gap-2 rounded-sm bg-gradient-to-br from-gold-warm to-gold text-navy-900 font-semibold text-[13.5px] px-6 py-3.5"
              >
                Request Property Details
              </button>
            </form>
          ) : (
            <div className="text-center py-8 px-2.5">
              <CheckCircle2 size={44} className="text-gold mx-auto mb-4" />
              <p className="font-serif text-xl text-navy-900 mb-2">Thank you</p>
              <p className="text-muted text-[14.5px] max-w-[340px] mx-auto">
                This demo form is ready to connect to your preferred enquiry
                system.
              </p>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}

const inputClass =
  "w-full border border-[#E5E1D8] px-3.5 py-2.5 text-[15px] text-ink outline-none bg-[#FCFBF8] focus:border-gold";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-[11.5px] tracking-[0.1em] uppercase text-muted font-semibold mb-1.5">
        {label}
      </label>
      {children}
    </div>
  );
}
