"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/#projects", label: "Properties" },
  { href: "/booked-properties", label: "Booked Plots" },
  { href: "/sold-properties", label: "Sold Out" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled
            ? "bg-navy-900/90 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.25)] py-3.5"
            : "py-5"
        }`}
      >
        <div className="max-w-[1240px] mx-auto px-5 md:px-10 flex items-center justify-between">
          <Link href="/" className="flex flex-col leading-none text-white no-underline">
            <b className="font-serif text-[22px] tracking-[0.12em] font-bold">
              LATITUDE
            </b>
            <span className="text-[9px] tracking-[0.35em] text-gold-warm mt-[3px]">
              PROPERTIES
            </span>
          </Link>

          <nav className="hidden lg:flex gap-9 items-center">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[#EDEAE0] text-sm no-underline relative pb-1 group"
              >
                {l.label}
                <span className="absolute left-0 bottom-0 w-0 h-px bg-gold-warm transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3.5">
            <Link
              href="/#contact"
              className="hidden lg:inline-flex items-center gap-2 rounded-sm bg-gradient-to-br from-gold-warm to-gold text-navy-900 font-semibold text-[13.5px] px-6 py-3 transition-transform hover:-translate-y-0.5"
            >
              Enquire Now
            </Link>
            <button
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
              className="lg:hidden text-white p-1.5"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 bg-navy-900 z-[105] flex flex-col justify-center p-10 transition-transform duration-400 ease-[cubic-bezier(0.65,0,0.35,1)] lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 text-white p-2"
        >
          <X size={28} />
        </button>
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            onClick={() => setMenuOpen(false)}
            className="text-white font-serif text-[28px] no-underline py-3 border-b border-white/10"
          >
            {l.label}
          </Link>
        ))}
        <Link
          href="/#contact"
          onClick={() => setMenuOpen(false)}
          className="mt-7 inline-flex items-center justify-center gap-2 rounded-sm bg-gradient-to-br from-gold-warm to-gold text-navy-900 font-semibold text-[13.5px] px-6 py-3.5"
        >
          Enquire Now
        </Link>
      </div>
    </>
  );
}
