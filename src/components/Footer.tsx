import Link from "next/link";
import Image from "next/image";
import { site } from "@/data/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/#sites", label: "Our Sites" },
  { href: "/booked-properties", label: "Booked Plots" },
  { href: "/sold-properties", label: "Sold Out Sites" },
  { href: "/#about", label: "About Us" },
  { href: "/#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#070A24] text-[#B7B9C8] pt-16 pb-7">
      <div className="max-w-[1240px] mx-auto px-5 md:px-10 grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-10">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="relative w-12 h-12 rounded-sm overflow-hidden bg-navy-950 border border-gold/40 flex-shrink-0">
              <Image
                src="/images/branding/logo.png"
                alt="Latitude Properties Official Logo"
                fill
                className="object-contain p-1"
              />
            </div>
            <div>
              <b className="font-serif text-white text-xl tracking-[0.1em] block leading-tight">
                LATITUDE PROPERTIES
              </b>
              <span className="block text-gold-warm text-[10px] tracking-[0.22em] uppercase mt-0.5">
                {site.tagline}
              </span>
            </div>
          </div>
          <p className="mt-4 max-w-[300px] text-sm leading-[1.7] text-[#9EA1B5]">
            Approved DTCP residential sites and land investment opportunities across Coimbatore,
            guided by clear legal titles, approved layout plans, and transparent guidance.
          </p>
        </div>

        <div>
          <h5 className="text-white text-[13px] tracking-[0.14em] uppercase mb-4">
            Quick Links
          </h5>
          <ul className="list-none p-0 m-0">
            {links.map((l) => (
              <li key={l.href} className="mb-3">
                <Link href={l.href} className="text-[#B7B9C8] no-underline text-[14.5px] hover:text-gold-warm transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="text-white text-[13px] tracking-[0.14em] uppercase mb-4">Contact</h5>
          <ul className="list-none p-0 m-0">
            <li className="mb-3">
              <a href={`tel:${site.phonePrimaryTel}`} className="text-[#B7B9C8] no-underline text-[14.5px] hover:text-gold-warm transition-colors">
                {site.phonePrimary}
              </a>
            </li>
            <li className="mb-3">
              <a href={`tel:${site.phoneAlternateTel}`} className="text-[#B7B9C8] no-underline text-[14.5px] hover:text-gold-warm transition-colors">
                {site.phoneAlternate}
              </a>
            </li>
            <li>
              <span className="text-[14.5px]">{site.address.line1} {site.address.line2}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-5 md:px-10 border-t border-white/[0.08] mt-12 pt-6 flex flex-col md:flex-row md:justify-between gap-2 text-[12.5px] text-[#7C7F94]">
        <span>© {new Date().getFullYear()} Latitude Properties. All rights reserved.</span>
        <span>Premium Living. Promising Future.</span>
      </div>
    </footer>
  );
}
