import { Phone, MessageCircle, Calendar } from "lucide-react";
import { buildWhatsappLink, site } from "@/data/site";

export default function StickyMobileCta() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[80] bg-white shadow-[0_-6px_24px_rgba(10,16,51,0.14)] flex gap-2 px-2.5 pt-2.5 md:hidden"
      style={{ paddingBottom: "calc(0.625rem + env(safe-area-inset-bottom))" }}
    >
      <a
        href={`tel:${site.phonePrimaryTel}`}
        className="flex-1 flex flex-col items-center gap-0.5 py-1.5 text-navy-900 text-[11px] font-semibold no-underline"
      >
        <Phone size={19} className="text-gold" />
        Call
      </a>
      <a
        href={buildWhatsappLink(site.defaultWhatsappMessage)}
        target="_blank"
        rel="noopener"
        className="flex-1 flex flex-col items-center gap-0.5 py-1.5 rounded text-white text-[11px] font-semibold no-underline bg-navy-900"
      >
        <MessageCircle size={19} className="text-gold-warm" />
        Chat
      </a>
      <a
        href="#contact"
        className="flex-1 flex flex-col items-center gap-0.5 py-1.5 text-navy-900 text-[11px] font-semibold no-underline"
      >
        <Calendar size={19} className="text-gold" />
        Visit
      </a>
    </div>
  );
}
