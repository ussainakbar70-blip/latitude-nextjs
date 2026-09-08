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
  "Tell me about the 40% Deepavali Offer! ✨",
  "Which properties are currently available?",
  "What are the inch-by-inch specs of Kalampalayam?",
  "Show me Booked & Sold Out properties",
  "How do I book a free site visit?",
  "Where is Latitude Promoters office located?",
];

export default function LatitudeAiChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "ai",
      text: `Hello! I am **LATITUDE AI**, your personal property consultant for **Latitude Promoters**.\n\nI can help you explore our DTCP & RERA approved residential plots, our **Special 40% Deepavali Festive Offer**, inch-by-inch architectural specifications, 360° virtual tours, and free site visits.\n\nWhat would you like to explore today?`,
      timestamp: "Just now",
      links: [
        { label: "View 40% Deepavali Plots", href: "/#projects" },
        { label: "Booked Plots", href: "/booked-properties" },
        { label: "Sold Out Layouts", href: "/sold-properties" },
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

    // 1. Deepavali 40% Offer
    if (
      q.includes("deepavali") ||
      q.includes("depavali") ||
      q.includes("diwali") ||
      q.includes("offer") ||
      q.includes("40%") ||
      q.includes("discount")
    ) {
      return {
        text: `🎉 **Mega Deepavali 40% Festive Dhamaka Offer!**\n\nLatitude Promoters is currently offering an unprecedented **Flat 40% OFF** on all our active residential layouts in Coimbatore:\n\n• **Kalampalayam Area**: Original ₹55L ➔ **Offer Price: ₹33 Lakhs** (You Save ₹22 Lakhs!)\n• **Green Fields Layout**: Original ₹75L ➔ **Offer Price: ₹45 Lakhs** (You Save ₹30 Lakhs!)\n• **Coimbatore Region Plots**: Original ₹42L ➔ **Offer Price: ₹25.20 Lakhs** (You Save ₹16.8 Lakhs!)\n\n⚡ **Offer Highlights:**\n- Valid for limited spot bookings during the festive season\n- Clear DTCP & RERA approved layouts with individual Patta\n- Bank loans up to 85% with SBI, HDFC, Canara, ICICI\n\nWould you like to reserve a spot or schedule a free site visit?`,
        links: [
          { label: "Explore Kalampalayam (40% Off)", href: "/properties/kalampalayam-area" },
          { label: "Explore Green Fields (40% Off)", href: "/properties/green-fields-layout" },
        ],
      };
    }

    // 2. Available Properties / Plots
    if (
      q.includes("available") ||
      q.includes("property") ||
      q.includes("properties") ||
      q.includes("plots") ||
      q.includes("land") ||
      q.includes("projects")
    ) {
      const avail = getAvailableProjects();
      const list = avail
        .map(
          (p) =>
            `• **[${p.title}](/properties/${p.id})** (${p.location}):\n  - Size: ${p.specs.totalPlotArea}\n  - Facing: ${p.specs.facing}\n  - Offer Price: **₹${(p.offerPrice / 100000).toFixed(2)} Lakhs** (after 40% Deepavali discount)\n  - Status: ${p.tag}`
        )
        .join("\n\n");

      return {
        text: `Here are our currently **Available Residential Properties**:\n\n${list}\n\nEvery property includes interactive **360° virtual tours**, inch-by-inch specifications, and DTCP approval documents.`,
        links: [
          { label: "View Kalampalayam Layout", href: "/properties/kalampalayam-area" },
          { label: "View Green Fields Layout", href: "/properties/green-fields-layout" },
          { label: "View Coimbatore Region Plots", href: "/properties/coimbatore-region-plots" },
        ],
      };
    }

    // 3. Booked Properties
    if (q.includes("booked") || q.includes("token") || q.includes("advance") || q.includes("reserved")) {
      const booked = getBookedProjects();
      const list = booked
        .map(
          (p) =>
            `• **[${p.title}](/properties/${p.id})**:\n  - Location: ${p.location}\n  - Locked Price: ₹${(p.offerPrice / 100000).toFixed(2)} Lakhs (under 40% Deepavali offer)\n  - Status: ${p.bookedOrSoldNote}`
        )
        .join("\n\n");

      return {
        text: `📌 **Booked Properties Status:**\n\n${list}\n\nBuyers have placed token advances and their registrations are currently underway at the Sub-Registrar Office. You can join the **Phase 2 Waiting List** to be notified first if adjacent plots open up!`,
        links: [{ label: "Browse Booked Properties Page", href: "/booked-properties" }],
      };
    }

    // 4. Sold Properties
    if (q.includes("sold") || q.includes("completed") || q.includes("delivered") || q.includes("inhabited")) {
      const sold = getSoldProjects();
      const list = sold
        .map(
          (p) =>
            `• **[${p.title}](/properties/${p.id})**:\n  - 100% Sold Out & Delivered (${p.specs.totalPlotArea})\n  - All individual Pattas transferred\n  - Active resident welfare association with completed infrastructure.`
        )
        .join("\n\n");

      return {
        text: `🏆 **100% Sold Out & Handed Over Communities:**\n\n${list}\n\nLatitude Promoters has delivered 500+ plots across Coimbatore with a **zero-litigation 100% clear title track record**.`,
        links: [{ label: "View Sold Properties Showcase", href: "/sold-properties" }],
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
        text: `📐 **Inch-by-Inch Engineering Standards:**\n\nEach Latitude Promoters project features precise, verified specifications:\n\n• **Roads:** 33ft to 40ft wide heavy-duty blacktop tar roads with storm drains.\n• **Water:** Dedicated Siruvani municipal drinking water tap + sweet water borewells.\n• **Electricity:** 3-Phase underground electric cabling or high-grade conduit poles with automatic solar street lighting.\n• **Approvals:** 100% DTCP & TN RERA sanctioned with immediate individual sub-division Patta.\n• **Structure (Villas):** Deep RCC column isolated footing, 9\" wire-cut red brick walls, 4x2 vitrified tiles, teak main doors, and Finolex/Jaquar fittings.\n\nYou can inspect the full inch-by-inch breakdown on any property page!`,
        links: [
          { label: "Kalampalayam Inch-by-Inch Specs", href: "/properties/kalampalayam-area" },
          { label: "Green Fields Specs", href: "/properties/green-fields-layout" },
        ],
      };
    }

    // 6. 360-Degree Views
    if (q.includes("360") || q.includes("virtual") || q.includes("tour") || q.includes("panorama") || q.includes("view")) {
      return {
        text: `🌐 **360° Interactive Virtual Property Tours:**\n\nEvery property detail page now contains an interactive 360-degree viewer! You can click, drag, pan, zoom, and rotate the panorama horizontally 360 degrees to inspect the layout, roads, and scenic surroundings right from your screen.\n\nVisit any property page to test the interactive 360° tour!`,
        links: [
          { label: "Test 360° Tour on Kalampalayam", href: "/properties/kalampalayam-area" },
          { label: "Test 360° Tour on Green Fields", href: "/properties/green-fields-layout" },
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
        text: `🚗 **Latitude Promoters — Free Site Visit & Office Details:**\n\n• **Office Address:**\n  ${site.address.full}\n\n• **Direct Phone:**\n  📞 **${site.phonePrimary}** / 📞 **${site.phoneAlternate}**\n\n• **Free Site Visit:**\n  We provide complimentary cab pick-up & drop across Coimbatore, plus on-site legal document verification with our senior team.`,
        links: [
          { label: "Schedule Site Visit Online", href: "/#contact" },
          { label: "Chat on WhatsApp Now", href: buildWhatsappLink(site.defaultWhatsappMessage) },
        ],
      };
    }

    // Default intelligent overview
    return {
      text: `Thank you for asking! **Latitude Promoters** is Coimbatore's premier land and residential promoter, specializing in DTCP and RERA approved gated layouts with direct Siruvani drinking water, wide tar roads, and 100% clear titles.\n\nRight now, we are celebrating our **40% Deepavali Festive Discount** across our layouts in Kalampalayam and Coimbatore.\n\nFeel free to ask me about:\n- 💥 The 40% Deepavali price savings\n- 🏡 Available plot dimensions & pricing\n- 🌐 360° Virtual Tours & inch-by-inch specs\n- 🔒 Booked & Sold property records\n- 🚗 Free cab pickup for site visits`,
      links: [
        { label: "View Available Plots", href: "/#projects" },
        { label: "Booked Plots", href: "/booked-properties" },
        { label: "Sold Layouts", href: "/sold-properties" },
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
          if (lower.includes("kalampalayam")) {
            relevantLinks.push({ label: "Kalampalayam Layout (40% Off)", href: "/properties/kalampalayam-area" });
          }
          if (lower.includes("green fields")) {
            relevantLinks.push({ label: "Green Fields Layout", href: "/properties/green-fields-layout" });
          }
          if (lower.includes("booked")) {
            relevantLinks.push({ label: "Booked Plots", href: "/booked-properties" });
          }
          if (lower.includes("sold")) {
            relevantLinks.push({ label: "Sold Out Communities", href: "/sold-properties" });
          }
          if (relevantLinks.length === 0) {
            relevantLinks = [
              { label: "View Available Plots (40% Off)", href: "/#projects" },
              { label: "Booked Plots", href: "/booked-properties" },
              { label: "Sold Out Layouts", href: "/sold-properties" },
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
                <div className="text-[9.5px] text-white/70">Ask 40% Offer & Specs</div>
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
                  <span className="bg-gradient-to-r from-red-600 to-amber-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                    40% OFFER ACTIVE
                  </span>
                </div>
                <div className="text-[10.5px] text-white/70 mt-0.5">
                  GPT OSS 20B • Official AI Assistant
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
                    placeholder="Ask about 40% offer, plots, specs, 360°..."
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
                    href={buildWhatsappLink("Hi Latitude Promoters, I am chatting with LATITUDE AI and would like to speak to a senior property manager.")}
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
