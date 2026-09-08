import Link from "next/link";
import { site } from "@/data/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/#projects", label: "Available Properties" },
  { href: "/booked-properties", label: "Booked Properties" },
  { href: "/sold-properties", label: "Sold Out Properties" },
  { href: "/#about", label: "About Us" },
  { href: "/#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#070A24] text-[#B7B9C8] pt-16 pb-7">
      <div className="max-w-[1240px] mx-auto px-5 md:px-10 grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-10">
        <div>
          <b className="font-serif text-white text-2xl tracking-[0.1em]">LATITUDE PROMOTERS</b>
          <span className="block text-gold-warm text-xs tracking-[0.18em] uppercase mt-2">
            {site.tagline}
          </span>
          <p className="mt-4 max-w-[280px] text-sm leading-[1.7]">
            Residential plots and land opportunities across Coimbatore,
            guided by transparency and long-term thinking.
          </p>
        </div>

        <div>
          <h5 className="text-white text-[13px] tracking-[0.14em] uppercase mb-4">
            Quick Links
          </h5>
          <ul className="list-none p-0 m-0">
            {links.map((l) => (
              <li key={l.href} className="mb-3">
                <Link href={l.href} className="text-[#B7B9C8] no-underline text-[14.5px] hover:text-gold-warm">
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
              <a href={`tel:${site.phonePrimaryTel}`} className="text-[#B7B9C8] no-underline text-[14.5px] hover:text-gold-warm">
                {site.phonePrimary}
              </a>
            </li>
            <li className="mb-3">
              <a href={`tel:${site.phoneAlternateTel}`} className="text-[#B7B9C8] no-underline text-[14.5px] hover:text-gold-warm">
                {site.phoneAlternate}
              </a>
            </li>
            <li>
              <span className="text-[14.5px]">Coimbatore, Tamil Nadu</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-5 md:px-10 border-t border-white/[0.08] mt-12 pt-6 flex flex-col md:flex-row md:justify-between gap-2 text-[12.5px] text-[#7C7F94]">
        <span>© {new Date().getFullYear()} Latitude Promoters. All rights reserved.</span>
        <span>Demo website presentation — not an official commissioned deployment.</span>
      </div>
    </footer>
  );
}
