"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  Sparkles,
  Bot,
  X,
  Send,
  Minimize2,
  Maximize2,
  MapPin,
  Phone,
  MessageCircle,
  ExternalLink,
  ChevronDown,
  RotateCcw,
} from "lucide-react";
import { projects, getAvailableProjects, getBookedProjects, getSoldProjects } from "@/data/projects";
import {
  layoutPlots,
  layoutMetadata,
  getPlotByNumber,
  getAvailablePlots as getAvailableSitePlots,
  getBookedPlots as getBookedSitePlots,
  getSoldPlots as getSoldSitePlots,
} from "@/data/sitemap-plots";
import { site, buildWhatsappLink } from "@/data/site";

type Message = {
  id: string;
  sender: "ai" | "user";
  text: string;
  options?: { label: string; action: string }[];
  links?: { label: string; href: string }[];
  timestamp: string;
};

const INITIAL_PROMPTS = [
  "Rathna Residency Launch (₹12.5L/Cent) 🏡",
  "Kandhan Avenue 2 BHK (₹29L) ✨",
  "Show me available plots in the site map 🗺️",
  "Which plots are corner plots?",
  "What are the DTCP approval details?",
  "How do I book a free cab site visit? 🚗",
];

export default function LatitudeAiChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "ai",
      text: `Hello! I am **LATITUDE AI**, Senior Property Advisor for **Latitude Properties**.\n\nI can help you explore our Grand Launches:\n• **[Rathna Residency](/sites/rathna-residency)** (Malumichampatty, Future Corporation Limit - Plots at ₹12.5L/cent)\n• **[Kandhan Avenue](/sites/kandhan-avenue)** (Elur, Arisipalayam - 2 BHK Houses from ₹29L, Plots at ₹6.20L/cent)\n• **[Master Layout Maps & Live Plots](/sites/sri-aanandham-avenue)**\n\nWhat would you like to explore today?`,
      timestamp: "Just now",
      links: [
        { label: "Rathna Residency (Launch Offer)", href: "/sites/rathna-residency" },
        { label: "Kandhan Avenue (2 BHK & Plots)", href: "/sites/kandhan-avenue" },
        { label: "Sri Aanandham Layout Map", href: "/sites/sri-aanandham-avenue" },
        { label: "View All Sites", href: "/#sites" },
      ],
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen && !isMinimized) {
      scrollToBottom();
    }
  }, [messages, isOpen, isMinimized]);

  // AI Knowledge-based answering engine
  const generateAiResponse = (userQuery: string): { text: string; links?: { label: string; href: string }[] } => {
    const q = userQuery.toLowerCase();

    // 0a. Specific Plot Number Inquiry (e.g. "plot 1", "plot #8", "plot 14", "tell me about plot 5")
    const plotMatch = q.match(/plot\s*#?\s*(\d+)/);
    if (plotMatch) {
      const pNum = parseInt(plotMatch[1], 10);
      const plot = getPlotByNumber(pNum);
      if (plot) {
        const isAvail = plot.status === "available";
        const isBk = plot.status === "booked";
        return {
          text: `📍 **Details for ${plot.label} (${layoutMetadata.projectName})**:\n\n• **Status:** ${
            isAvail
              ? "🟢 **Available**"
              : isBk
              ? "🟡 **Booked (Token Advance Paid - SRO Processing)**"
              : "⚪ **100% Sold Out & Patta Transferred**"
          }\n• **Dimensions:** ${plot.dimensionsImperial} (${plot.dimensionsMetric})\n• **Area:** **${plot.areaSqFt} Sq.Ft** (${plot.areaCents} Cents)\n• **Facing:** ${plot.facing}\n• **Road Access:** ${plot.roadAccess}\n\n💰 **Pricing Details:**\n• **Price:** **₹${(plot.offerPrice / 100000).toFixed(2)} Lakhs** (Rate: ₹${plot.ratePerSqFt}/sq.ft)\n• **Title:** 100% Clear Title with Instant Sub-division Patta Transfer\n\n${plot.note ? `*Note: ${plot.note}*\n\n` : ""}Would you like to reserve ${plot.label} or inspect it during a free cab site visit?`,
          links: [
            { label: `View ${plot.label} on Site Map`, href: "/#site-map" },
            { label: "Book Free Cab Site Visit", href: "/#contact" },
          ],
        };
      }
    }

    // 0b. Master Site Map / Layout Map / Blueprint / Inventory Inquiry
    if (
      q.includes("site map") ||
      q.includes("layout") ||
      q.includes("blueprint") ||
      q.includes("sitemap") ||
      q.includes("plan") ||
      q.includes("how many plot") ||
      q.includes("how many plots") ||
      q.includes("plot map")
    ) {
      const availCount = getAvailableSitePlots().length;
      const bkCount = getBookedSitePlots().length;
      const sldCount = getSoldSitePlots().length;

      return {
        text: `🗺️ **Master Site Map & Plot Availability Overview**:\n\n• **Project:** **${layoutMetadata.projectName}**\n• **Location:** ${layoutMetadata.location}\n• **DTCP Sanction:** ${layoutMetadata.dtcpApprovalNo}\n• **Sub-division Order:** ${layoutMetadata.subdivisionNo}\n• **Survey Numbers:** ${layoutMetadata.surveyNumbers}\n\n📊 **Current Inventory Status (17 Total Plots):**\n• 🟢 **Available:** **${availCount} Plots** (Plots #01, #03, #05, #08, #11, #15, #16)\n• 🟡 **Booked (Token Received):** **${bkCount} Plots** (Plots #02, #09, #12, #14)\n• ⚪ **Sold Out (Patta Delivered):** **${sldCount} Plots** (Plots #04, #06, #07, #10, #13, #17)\n\n🛣️ **Infrastructure:** 9.0m (30 Ft) Main Central Tar Avenue + 7.2m (24 Ft) Cross Branch Roads, pure Siruvani drinking water, and dedicated TANGEDCO power space.\n\nYou can explore and click any plot on our live interactive site map!`,
        links: [
          { label: "Explore Interactive Site Map", href: "/#site-map" },
          { label: "Book Free Cab Site Visit", href: "/#contact" },
        ],
      };
    }

    // 0c. Corner Plots
    if (q.includes("corner")) {
      const corners = layoutPlots.filter((p) => p.isCorner);
      const cornerList = corners
        .map(
          (c) =>
            `• **${c.label}** (${c.status.toUpperCase()}): ${c.dimensionsImperial} (${c.areaCents} Cents) — ${c.facing} — Price: **₹${(c.offerPrice / 100000).toFixed(2)} Lakhs**`
        )
        .join("\n");

      return {
        text: `🏡 **Corner Plots in our Layout**:\n\nCorner plots provide dual road ventilation, maximum natural light, and superior Vastu compliance:\n\n${cornerList}\n\nWould you like to reserve a corner plot or visit the site?`,
        links: [
          { label: "Inspect Corners on Site Map", href: "/#site-map" },
          { label: "Enquire on WhatsApp", href: buildWhatsappLink(site.defaultWhatsappMessage) },
        ],
      };
    }

    // 0d. Approval Details
    if (
      q.includes("approval") ||
      q.includes("dtcp") ||
      q.includes("rera") ||
      q.includes("survey") ||
      q.includes("legal") ||
      q.includes("document")
    ) {
      return {
        text: `📜 **DTCP & Government Approval Details**:\n\n• **Kandhan Avenue Approval:** DTCP Approval No. 256/2026\n• **Sri Aanandham Avenue:** DTCP Order No: ${layoutMetadata.dtcpApprovalNo}\n• **Sub-division Sanction:** ${layoutMetadata.subdivisionNo}\n• **Title Status:** Single-owner parent deed with 40-year clean encumbrance certificate.\n• **Patta Transfer:** Instant individual sub-division Patta transfer upon registration.\n• **Bank Approval:** Pre-approved for up to 80%-85% home loans.\n\nWould you like our senior legal advisor to present certified sanction copies during your site visit?`,
        links: [
          { label: "View Kandhan Avenue Details", href: "/sites/kandhan-avenue" },
          { label: "View Approved Blueprint", href: "/#site-map" },
          { label: "Schedule Free Site Visit", href: "/#contact" },
        ],
      };
    }

    // 1. Rathna Residency – Malumichampatty Grand Launch
    if (
      q.includes("rathna") ||
      q.includes("residency") ||
      q.includes("malumichampatty") ||
      q.includes("karpagam") ||
      q.includes("12.5") ||
      q.includes("corporation limit")
    ) {
      return {
        text: `🏡🎉 **GRAND LAUNCH – RATHNA RESIDENCY, MALUMICHAMPATTY** (Future Corporation Limit) 🎉🏡\n\nOwn your dream plot in Rathna Residency, a premium DTCP-approved gated community located in one of Coimbatore's fastest-growing residential and IT corridors.\n\n💥 **Launch Price: Just ₹12.5 Lakhs per Cent**\n📍 **Location:** Behind Karpagam University, Malumichampatty (Future Corporation Limit)\n\n🌟 **Project Highlights:**\n✅ DTCP-Approved Layouts\n✅ Grand Entrance Arch & Fully Gated Community\n✅ 33-ft Wide Blacktop Roads\n✅ Individual Water Connection & Electricity Connection\n✅ Solar Street Lights\n✅ Peaceful Residential Environment\n\n📍 **Prime Connectivity:**\n🚗 Pollachi Road – 650 m\n🛣️ Future 6-Track L&T Bypass – 1.2 km\n💻 L&T IT Park – 2.2 km\n🏢 Rathinam Tech Park – 3 km\n🙏 Eachanari Vinayagar Temple – 2.5 km\n🚉 Podanur Railway Station – 10–15 mins\n🚆 Coimbatore Railway Station – 15–20 mins\n🚌 Ukkadam Bus Stand – 15–20 mins\n🚌 Gandhipuram Bus Stand – 20–25 mins\n\n🎓 **Surrounded by Top Educational Institutions:**\n• Karpagam University (Just Behind)\n• Karpagam Medical College & Hospital\n• Hindusthan College of Arts & Science\n• Rathinam University & Coimbatore Marine College\n• Christ The King Polytechnic College\n• GEDEE, Zion Model, Avatar & Genius Kids Public Schools\n\n💼 **Near Major Employment Hubs:**\n• SIDCO Industrial Estate\n• L&T IT Park (2.2 km)\n• Rathinam Tech Park (3 km)\n• Coimbatore Golf Club\n\n🌟 **Why Invest in Rathna Residency?**\n✔️ Prime Location in the Future Corporation Limit\n✔️ Close to Leading Educational Institutions & IT Parks\n✔️ Excellent Connectivity to Major Roads & Transport Hubs\n✔️ Ideal for Dream Home, Rental Income & Long-Term Investment\n✔️ High Future Appreciation Potential\n\nWould you like to reserve your preferred plot or schedule a free site visit?`,
        links: [
          { label: "Explore Rathna Residency Details", href: "/sites/rathna-residency" },
          { label: "Book Free Cab Site Visit", href: "/#contact" },
          { label: "Enquire on WhatsApp", href: buildWhatsappLink("Hello Latitude Properties, I would like to book a site visit for Rathna Residency, Malumichampatty (Launch Price: Just Rs. 12.5 Lakhs per Cent).") },
        ],
      };
    }

    // 2. Kandhan Avenue & Grand Launch Offer
    if (
      q.includes("kandhan") ||
      q.includes("launch") ||
      q.includes("offer") ||
      q.includes("2bhk") ||
      q.includes("house") ||
      q.includes("houses") ||
      q.includes("arisipalayam") ||
      q.includes("elur") ||
      q.includes("kinathukadavu") ||
      q.includes("price") ||
      q.includes("pricing") ||
      q.includes("discount")
    ) {
      return {
        text: `🏡✨ **KANDHAN AVENUE – ELUR, ARISIPALAYAM** ✨🏡\n\n🎉 **GRAND LAUNCH OFFER** 🎉\n\n🏠 **PREMIUM 2 BHK INDIVIDUAL HOUSES**\n💰 Starting from **JUST ₹29 LAKHS Onwards**\n\n💸 **Only ₹5 LAKHS On-Hand**\n🏦 **Up to 80% Bank Loan Assistance Available\***\n📜 **DTCP Approved Layout – Approval No. 256/2026**\n📐 **Residential Plots:** **₹6.20 LAKHS per Cent**\n\n━━━━━━━━━━━━━━━━━━━━━━\n\n📍 **Prime Location & Easy Connectivity:**\n✅ Pollachi Highway – 1.5 km (2 mins)\n✅ Kinathukadavu Bus Stand – 3–5 mins\n✅ Kinathukadavu Railway Station – 3–5 mins\n\n🏫 **Top Schools Nearby:**\n• Vivek Vidyalaya Matric Hr. Sec. School (2–3 mins)\n• Noyyal Public School (3–4 mins)\n• Akshaya Academy (8–10 mins)\n\n🎓 **Leading Colleges Nearby:**\n• VSB College of Engineering & Technical Campus (3–5 mins)\n• Sri Eshwar College of Engineering (5–7 mins)\n• Amrita Vishwa Vidyapeetham (5–7 mins)\n• Hindusthan College of Engineering (10–15 mins)\n• Karpagam Academy of Higher Education (20–25 mins)\n\n💼 **Employment Hubs Nearby:**\n• ELGi ACP (5–7 mins)\n• 200-Acre SIDCO Industrial Estate (10–15 mins)\n• L&T IT Park (10–15 mins)\n• Rathinam Tech Park (15–20 mins)\n\n🏥 **Healthcare Nearby:**\n• Sri Venkateswara Hospital (5–10 mins)\n• Karpagam Medical College Hospital (10–15 mins)\n\nWould you like to reserve a unit or schedule a free site visit?`,
        links: [
          { label: "Explore Kandhan Avenue Details", href: "/sites/kandhan-avenue" },
          { label: "Book Free Cab Site Visit", href: "/#contact" },
          { label: "Enquire on WhatsApp", href: buildWhatsappLink("Hello Latitude Properties, I would like to book a site visit for Kandhan Avenue.") },
        ],
      };
    }

    // 2. Layout Maps & Plot Availability
    if (
      q.includes("map") ||
      q.includes("available") ||
      q.includes("inventory")
    ) {
      return {
        text: `🗺️ **Master Layout Maps & Live Plot Status:**\n\nYou can inspect our high-resolution sanctioned layout maps and real-time plot directory right on each site page:\n\n• **[Kandhan Avenue](/sites/kandhan-avenue)**: 25 Plots total (11 Available, 6 Booked, 8 Sold) | 2 BHK Houses from ₹29L, Plots ₹6.20L/cent, 12m Tar Road, DTCP 256/2026\n• **[Sri Aanandham Avenue](/sites/sri-aanandham-avenue)**: 17 Plots total (8 Available, 4 Booked, 5 Sold) | 30ft Roads, Siruvani water line, solar lights\n• **[Siruvani Enclave (Phase 1 & 2)](/sites/siruvani-phase-1-2)**: 56 Plots total (18 Available in Phase 2, 12 Booked, 26 Sold in Phase 1)\n\nEvery site detail page features an interactive zoomable layout map and plot-by-plot inventory table!`,
        links: [
          { label: "Kandhan Avenue Details", href: "/sites/kandhan-avenue" },
          { label: "Sri Aanandham Layout Map", href: "/sites/sri-aanandham-avenue" },
          { label: "Siruvani Enclave Layout Map", href: "/sites/siruvani-phase-1-2" },
        ],
      };
    }

    // 3. Booked Properties
    if (q.includes("booked") || q.includes("token") || q.includes("advance") || q.includes("reserved")) {
      const booked = getBookedProjects();
      const list = booked
        .map(
          (p) =>
            `• **[${p.title}](/sites/${p.id})**:\n  - Location: ${p.location}\n  - Starting Price: ₹${(p.offerPrice / 100000).toFixed(2)} Lakhs\n  - Status: ${p.bookedOrSoldNote || "Token Received"}`
        )
        .join("\n\n");

      return {
        text: `📌 **Booked Sites & Plots Status:**\n\n${list}\n\nBuyers have placed token advances and their registrations are currently underway at the Sub-Registrar Office. You can join the **Phase 2 Waiting List** to be notified first if adjacent plots open up!`,
        links: [{ label: "Browse Booked Sites Page", href: "/booked-properties" }],
      };
    }

    // 4. Sold Properties
    if (q.includes("sold") || q.includes("completed") || q.includes("delivered") || q.includes("inhabited")) {
      const sold = getSoldProjects();
      const list = sold
        .map(
          (p) =>
            `• **[${p.title}](/sites/${p.id})**:\n  - 100% Sold Out & Delivered (${p.specs.totalPlotArea})\n  - All individual Pattas transferred\n  - Active resident welfare association with completed infrastructure.`
        )
        .join("\n\n");

      return {
        text: `🏆 **100% Sold Out & Handed Over Communities:**\n\n${list}\n\nLatitude Properties has delivered hundreds of plots across Coimbatore with a **zero-litigation 100% clear title track record**.`,
        links: [{ label: "View Sold Sites Showcase", href: "/sold-properties" }],
      };
    }

    // 5. Inch-by-Inch Specifications
    if (
      q.includes("inch") ||
      q.includes("spec") ||
      q.includes("dimension") ||
      q.includes("foundation") ||
      q.includes("water") ||
      q.includes("road")
    ) {
      return {
        text: `📐 **Engineering Standards & Specifications:**\n\nEach Latitude Properties project features precise, verified specifications:\n\n• **Roads:** 24ft (7.2m), 30ft (9.0m), and 40ft (12.0m) wide heavy-duty blacktop tar roads with storm drains.\n• **Water:** Dedicated Siruvani municipal drinking water tap + sweet water borewells.\n• **Electricity:** 3-Phase underground electric cabling or high-grade conduit poles with automatic solar street lighting.\n• **Approvals:** 100% DTCP & Coimbatore LPA sanctioned with immediate individual sub-division Patta.\n\nYou can inspect the full inch-by-inch breakdown on any site page!`,
        links: [
          { label: "Sri Aanandham Avenue Specs", href: "/sites/sri-aanandham-avenue" },
          { label: "Kandhan Avenue Specs", href: "/sites/kandhan-avenue" },
        ],
      };
    }

    // YouTube Video Tours & Shorts
    if (
      q.includes("youtube") ||
      q.includes("video") ||
      q.includes("short") ||
      q.includes("channel") ||
      q.includes("tour") ||
      q.includes("walkthrough")
    ) {
      return {
        text: `🎥 **Latitude Properties Official YouTube Channel & Video Tours:**\n\nYou can watch live on-site layout tours, villa walkthroughs, and buyer experiences directly on our website!\n\n• **Featured On-Site Shorts:**\n  - Rathna Residency DTCP Plots (Behind Karpagam University)\n  - Madhampatty 2 BHK Luxury Villa (₹45 Lakhs Onwards)\n  - Malumichampatty Dream Land Tour\n  - Coimbatore Real Estate Investment Guide\n\n• **Official Channel:** [@LatitudeProperties](https://www.youtube.com/@LatitudeProperties)`,
        links: [
          { label: "Watch Shorts Carousel on Website", href: "/#video-tours" },
          { label: "Visit Official YouTube Channel", href: "https://www.youtube.com/@LatitudeProperties" },
        ],
      };
    }

    // 7. Site Visit & Contact / Office
    if (
      q.includes("visit") ||
      q.includes("book") ||
      q.includes("contact") ||
      q.includes("office") ||
      q.includes("address") ||
      q.includes("phone") ||
      q.includes("location")
    ) {
      return {
        text: `🚗 **Latitude Properties — Free Site Visit & Office Details:**\n\n• **Office Address:**\n  ${site.address.full}\n\n• **Direct Phone:**\n  📞 **${site.phonePrimary}** / 📞 **${site.phoneAlternate}**\n\n• **Free Site Visit:**\n  We provide complimentary cab pick-up & drop across Coimbatore, plus on-site legal document verification with our senior team.`,
        links: [
          { label: "Schedule Site Visit Online", href: "/#contact" },
          { label: "Chat on WhatsApp Now", href: buildWhatsappLink(site.defaultWhatsappMessage) },
        ],
      };
    }

    // Default intelligent overview
    return {
      text: `Thank you for asking! **Latitude Properties** is Coimbatore's premier land and residential promoter, specializing in DTCP approved gated layouts, 2 BHK individual houses, wide tar roads, and 100% clear titles.\n\nCheck out our **Grand Launch Offer at Kandhan Avenue (Elur, Arisipalayam)** starting from ₹29 Lakhs for 2 BHK individual houses and ₹6.20 Lakhs/cent for plots!\n\nFeel free to ask me about:\n- 🏡 Kandhan Avenue 2 BHK houses & ₹6.20L/cent plots\n- 🗺️ Layout maps & live plot availability (Available / Booked / Sold)\n- 📏 Available plot dimensions & pricing\n- 🎥 YouTube video tours & inch-by-inch specs\n- 📜 DTCP Sanctions & Patta records\n- 🚗 Free cab pickup for site visits`,
      links: [
        { label: "Kandhan Avenue (Launch Offer)", href: "/sites/kandhan-avenue" },
        { label: "Live Interactive Site Map", href: "/#site-map" },
        { label: "Sri Aanandham Avenue", href: "/sites/sri-aanandham-avenue" },
        { label: "Booked Plots", href: "/booked-properties" },
      ],
    };
  };

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: query,
      timestamp: "Just now",
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setIsTyping(true);

    try {
      // Send chat history to backend API powered by openai/gpt-oss-20b
      const apiPayload = updatedMessages.map((m) => ({
        role: m.sender === "user" ? "user" : "assistant",
        content: m.text,
      }));

      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: apiPayload }),
      });

      if (res.ok) {
        const data = await res.json();
        if (data.content) {
          // Determine contextual quick links based on query
          let relevantLinks: { label: string; href: string }[] = [];
          const lower = (query + " " + data.content).toLowerCase();
          if (lower.includes("aanandham")) {
            relevantLinks.push({ label: "Sri Aanandham Avenue Layout", href: "/sites/sri-aanandham-avenue" });
          }
          if (lower.includes("site map") || lower.includes("plot") || lower.includes("layout") || lower.includes("map")) {
            relevantLinks.push({ label: "Live Interactive Site Map", href: "/#site-map" });
          }
          if (lower.includes("kalampalayam")) {
            relevantLinks.push({ label: "Sri Aanandham Avenue (Kalampalayam)", href: "/sites/sri-aanandham-avenue" });
          }
          if (lower.includes("kandhan")) {
            relevantLinks.push({ label: "Kandhan Avenue Layout", href: "/sites/kandhan-avenue" });
          }
          if (lower.includes("siruvani enclave") || lower.includes("phase")) {
            relevantLinks.push({ label: "Siruvani Enclave Layout", href: "/sites/siruvani-phase-1-2" });
          }
          if (lower.includes("booked")) {
            relevantLinks.push({ label: "Booked Plots", href: "/booked-properties" });
          }
          if (lower.includes("sold")) {
            relevantLinks.push({ label: "Sold Out Sites", href: "/sold-properties" });
          }
          if (relevantLinks.length === 0) {
            relevantLinks = [
              { label: "Kandhan Avenue", href: "/sites/kandhan-avenue" },
              { label: "Live Interactive Site Map", href: "/#site-map" },
              { label: "Sri Aanandham Avenue", href: "/sites/sri-aanandham-avenue" },
              { label: "Booked Plots", href: "/booked-properties" },
              { label: "Sold Out Sites", href: "/sold-properties" },
            ];
          }

          const aiMessage: Message = {
            id: (Date.now() + 1).toString(),
            sender: "ai",
            text: data.content,
            links: relevantLinks,
            timestamp: "Just now",
          };
          setMessages((prev) => [...prev, aiMessage]);
          setIsTyping(false);
          return;
        }
      }
      throw new Error("Fallback to local knowledge engine");
    } catch (err) {
      // Graceful instant fallback to built-in knowledge engine
      const response = generateAiResponse(query);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: response.text,
        links: response.links,
        timestamp: "Just now",
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Floating Launcher Button - Perfectly locked for Mobile and Desktop */}
      <div className="fixed z-[95] bottom-[84px] left-4 md:bottom-6 md:left-6 transition-all duration-300">
        {!isOpen && (
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Open LATITUDE AI Assistant"
            className="group relative flex items-center justify-center bg-navy-900 border-[1.5px] border-gold text-white rounded-full shadow-[0_10px_30px_rgba(10,16,51,0.4)] hover:shadow-[0_12px_35px_rgba(201,163,74,0.35)] hover:border-gold-warm transition-all duration-300 hover:scale-[1.06] active:scale-95 p-2 md:py-2.5 md:px-4"
          >
            {/* Pulsing online status beacon */}
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-gradient-to-r from-gold-warm to-amber-500 border border-navy-900" />
            </span>

            {/* Mobile Icon-only view (Compact, attractive 44px jewel) */}
            <div className="flex md:hidden items-center justify-center w-8 h-8 rounded-full bg-gold/15 text-gold-warm">
              <Bot size={20} className="transition-transform group-hover:rotate-12" />
            </div>

            {/* Desktop Capsule view (Elegant, luxury look) */}
            <div className="hidden md:flex items-center gap-2.5">
              <div className="p-1 rounded-full bg-gold/20 text-gold-warm">
                <Bot size={18} className="transition-transform group-hover:rotate-12" />
              </div>
              <div className="text-left leading-tight">
                <div className="font-serif text-[13px] font-bold text-gold-warm tracking-wider flex items-center gap-1">
                  LATITUDE AI
                  <Sparkles size={11} className="text-amber-400 animate-pulse" />
                </div>
                <div className="text-[9.5px] text-white/70">Ask Launch Offers & Specs</div>
              </div>
            </div>
          </button>
        )}
      </div>

      {/* Main Chat Window - Locked above mobile sticky navigation and docked on desktop */}
      {isOpen && (
        <div
          className={`fixed z-[120] transition-all duration-300 shadow-2xl rounded-sm border-2 border-gold/70 overflow-hidden bg-white flex flex-col ${
            isMinimized
              ? "bottom-[84px] left-4 md:bottom-6 md:left-6 w-[290px] h-[54px]"
              : "bottom-[76px] left-3 right-3 sm:right-auto sm:left-6 sm:w-[410px] h-[520px] max-h-[75vh] md:bottom-[86px] md:h-[560px]"
          }`}
        >
          {/* Chat Window Header */}
          <div className="bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 text-white p-3.5 border-b border-gold/40 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-gold/20 border border-gold flex items-center justify-center text-gold-warm">
                <Bot size={18} />
              </div>
              <div>
                <div className="font-serif text-base font-bold text-gold-warm flex items-center gap-1.5 leading-none">
                  LATITUDE AI
                  <span className="bg-gradient-to-r from-navy-800 to-navy-950 border border-gold/40 text-gold-warm text-[9px] font-bold px-1.5 py-0.5 rounded">
                    GRAND LAUNCH
                  </span>
                </div>
                <div className="text-[10.5px] text-white/80 mt-0.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Senior Property Consultant • Online
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1 text-white/70">
              <button
                type="button"
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-1.5 hover:text-white transition-colors"
                title={isMinimized ? "Maximize" : "Minimize"}
              >
                {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 hover:text-white transition-colors"
                title="Close"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Quick Prompts Carousel */}
              <div className="bg-bg px-3 py-2 border-b border-[#ECE9DF] overflow-x-auto flex gap-2 no-scrollbar">
                {INITIAL_PROMPTS.map((prompt, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSendMessage(prompt)}
                    className="flex-shrink-0 text-[11px] bg-white border border-[#DCD8CC] text-navy-900 hover:border-gold hover:text-gold px-2.5 py-1 rounded-full whitespace-nowrap transition-colors"
                  >
                    {prompt}
                  </button>
                ))}
              </div>

              {/* Chat Message Stream */}
              <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-[#FBFBFA]">
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={`flex flex-col ${
                      m.sender === "user" ? "items-end" : "items-start"
                    }`}
                  >
                    <div
                      className={`max-w-[88%] text-[13px] leading-relaxed p-3.5 rounded-sm shadow-sm ${
                        m.sender === "user"
                          ? "bg-navy-900 text-white"
                          : "bg-white text-navy-900 border border-[#ECE9DF]"
                      }`}
                    >
                      <div className="whitespace-pre-line">{m.text}</div>

                      {/* Interactive Deep-Links */}
                      {m.links && m.links.length > 0 && (
                        <div className="mt-3 pt-2 border-t border-[#ECE9DF] flex flex-wrap gap-1.5">
                          {m.links.map((link, idx) => (
                            <Link
                              key={idx}
                              href={link.href}
                              onClick={() => {
                                if (link.href.startsWith("http")) return;
                                setIsMinimized(true);
                              }}
                              className="inline-flex items-center gap-1 text-[11px] font-semibold text-navy-900 bg-bg hover:bg-gold/10 hover:text-gold border border-gold/30 px-2.5 py-1 rounded transition-colors"
                            >
                              <span>{link.label}</span>
                              <ExternalLink size={11} />
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                    <span className="text-[9.5px] text-muted mt-1 px-1">{m.timestamp}</span>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex items-center gap-1.5 text-xs text-muted p-2 bg-white border border-[#ECE9DF] rounded-sm w-28">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-gold animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-gold animate-bounce [animation-delay:0.4s]" />
                    <span className="text-[10.5px] text-muted ml-1">Thinking...</span>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Chat Input Bar */}
              <div className="p-3 bg-white border-t border-[#ECE9DF]">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage();
                  }}
                  className="flex items-center gap-2"
                >
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask about Kandhan Avenue, plots, 2 BHK houses, specs..."
                    className="flex-1 text-xs px-3 py-2.5 bg-bg border border-[#D5D2C7] rounded-sm focus:border-gold focus:outline-none"
                  />
                  <button
                    type="submit"
                    disabled={!input.trim()}
                    className="bg-navy-900 hover:bg-navy-800 disabled:opacity-40 text-gold-warm p-2.5 rounded-sm transition-colors"
                    aria-label="Send Message"
                  >
                    <Send size={15} />
                  </button>
                </form>

                {/* Instant Human Agent Escalation Footer */}
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#EEECE4] text-[10px] text-muted">
                  <span>Need human support?</span>
                  <a
                    href={buildWhatsappLink("Hi Latitude Properties, I am chatting with LATITUDE AI and would like to speak to a senior property manager.")}
                    target="_blank"
                    rel="noopener"
                    className="flex items-center gap-1 text-emerald-700 font-semibold hover:underline"
                  >
                    <MessageCircle size={12} />
                    Connect on WhatsApp
                  </a>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
