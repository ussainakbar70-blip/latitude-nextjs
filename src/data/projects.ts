export type PropertyStatus = "available" | "booked" | "sold";

export type PlotItem = {
  plotNumber: number | string;
  areaSqFt: number;
  areaCents: string;
  dimensions?: string;
  facing?: string;
  status: "available" | "booked" | "sold";
};

export type PlotsSummary = {
  total: number;
  available: number;
  booked: number;
  sold: number;
};

export type InchByInchSpecs = {
  plotDimensions: string;
  totalPlotArea: string;
  builtUpArea?: string;
  carpetArea?: string;
  facing: string;
  roadWidth: string;
  approvalNumber: string;
  pattaStatus: string;
  foundation: string;
  superstructure: string;
  flooring: string;
  doorsWindows: string;
  electricalPlumbing: string;
  waterDrainage: string;
  ceilingHeight: string;
};

export type PropertyAmenity = {
  name: string;
  description: string;
  iconName: "Route" | "Droplets" | "Sun" | "Shield" | "Trees" | "Zap" | "Compass" | "Waves" | "Grid3x3";
};

export type Project = {
  id: string;
  tag: string;
  title: string;
  location: string;
  type: string;
  status: PropertyStatus;
  amenities: string;
  amenitiesList: PropertyAmenity[];
  img: string;
  gallery: string[];
  specs: InchByInchSpecs;
  // Deepavali 40% Festive Offer Details
  originalPrice: number;
  discountPercent: number; // 40
  offerPrice: number;
  savingsAmount: number;
  ratePerSqFtOriginal: number;
  ratePerSqFtOffer: number;
  deepavaliOfferValidUntil: string;
  // 360 Tour resources
  view360Image: string;
  view360Title: string;
  description: string;
  highlights: string[];
  bookedOrSoldNote?: string;
  handoverDate?: string;
  // Layout map and plot details
  layoutMapImage?: string;
  layoutMapTitle?: string;
  brochureImage?: string;
  dtcpApprovalNumber?: string;
  surveyNumber?: string;
  plotsSummary: PlotsSummary;
  plotsList: PlotItem[];
};

export type Site = Project;

export const projects: Project[] = [
  {
    id: "sri-aanandham-avenue",
    tag: "Premium DTCP Approved Plots",
    title: "Sri Aanandham Avenue",
    location: "Siruvani Main Road, Kalampalayam, Coimbatore",
    type: "DTCP Approved Residential Layout",
    status: "available",
    dtcpApprovalNumber: "DTCP No: 252/2026",
    surveyNumber: "S.F. NO - 258/1A1, 258/1B, 256, 257/2, 258/2B1A1",
    layoutMapImage: "/images/sites/sri-aanandham-layout.jpg",
    layoutMapTitle: "Sri Aanandham Avenue Official Approved Layout Plan",
    brochureImage: "/images/sites/sri-aanandham-avenue-brochure.jpg",
    img: "/images/sites/sri-aanandham-avenue-brochure.jpg",
    gallery: [
      "/images/sites/sri-aanandham-avenue-brochure.jpg",
      "/images/sites/sri-aanandham-layout.jpg",
      "https://images.unsplash.com/photo-1524055988636-436cfa46e59e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
    ],
    plotsSummary: {
      total: 17,
      available: 8,
      booked: 4,
      sold: 5,
    },
    plotsList: [
      { plotNumber: 1, areaSqFt: 1988, areaCents: "4 Cent 245 Sft", dimensions: "40' x 45'", facing: "East", status: "available" },
      { plotNumber: 2, areaSqFt: 1650, areaCents: "3 Cent 343 Sft", dimensions: "33' x 45'", facing: "East", status: "sold" },
      { plotNumber: 3, areaSqFt: 1650, areaCents: "3 Cent 343 Sft", dimensions: "33' x 50'", facing: "East", status: "sold" },
      { plotNumber: 4, areaSqFt: 1625, areaCents: "3 Cent 318 Sft", dimensions: "32'-6\" x 50'", facing: "East", status: "available" },
      { plotNumber: 5, areaSqFt: 1250, areaCents: "2 Cent 379 Sft", dimensions: "25' x 50'", facing: "East", status: "booked" },
      { plotNumber: 6, areaSqFt: 1500, areaCents: "3 Cent 193 Sft", dimensions: "30' x 50'", facing: "East", status: "available" },
      { plotNumber: 7, areaSqFt: 1500, areaCents: "3 Cent 193 Sft", dimensions: "30' x 50'", facing: "East", status: "available" },
      { plotNumber: 8, areaSqFt: 1794, areaCents: "4 Cent 51 Sft", dimensions: "35' x 50'", facing: "North-East Corner", status: "booked" },
      { plotNumber: 9, areaSqFt: 1846, areaCents: "4 Cent 103 Sft", dimensions: "40' x 44'-6\"", facing: "West", status: "sold" },
      { plotNumber: 10, areaSqFt: 1548, areaCents: "3 Cent 241 Sft", dimensions: "29' x 50'-3\"", facing: "West", status: "available" },
      { plotNumber: 11, areaSqFt: 1488, areaCents: "3 Cent 181 Sft", dimensions: "25' x 45'", facing: "West", status: "sold" },
      { plotNumber: 12, areaSqFt: 1488, areaCents: "3 Cent 181 Sft", dimensions: "25' x 45'", facing: "West", status: "available" },
      { plotNumber: 13, areaSqFt: 1736, areaCents: "3 Cent 429 Sft", dimensions: "32'-9\" x 50'-3\"", facing: "West", status: "booked" },
      { plotNumber: 14, areaSqFt: 1754, areaCents: "4 Cent 12 Sft", dimensions: "33'-3\" x 50'-3\"", facing: "West", status: "sold" },
      { plotNumber: 15, areaSqFt: 1738, areaCents: "3 Cent 431 Sft", dimensions: "30' x 45'", facing: "West", status: "available" },
      { plotNumber: 16, areaSqFt: 1711, areaCents: "3 Cent 404 Sft", dimensions: "35' x 43'-6\"", facing: "North-West Corner", status: "booked" },
      { plotNumber: 17, areaSqFt: 1971, areaCents: "4 Cent 229 Sft", dimensions: "36'-9\" x 51'-9\"", facing: "North", status: "available" }
    ],
    amenities: "30 Ft Tar Roads, Water Pipeline, Electricity, Solar Street Lights",
    amenitiesList: [
      { name: "30 Feet Wide Tar Roads", description: "Layout Road 9.0m and 7.2m wide heavy-duty blacktop roads with proper curbs", iconName: "Route" },
      { name: "Direct Siruvani Water Pipeline", description: "Pure municipal Siruvani drinking water pipe connection ready at every plot", iconName: "Droplets" },
      { name: "Electricity Connection", description: "Dedicated 3-phase EB poles and supply connection lines installed", iconName: "Zap" },
      { name: "Automatic Solar Street Lights", description: "Energy-saving eco solar street lighting along all internal layout roadways", iconName: "Sun" },
      { name: "Grand Gated Entrance", description: "Prominent archway with 24/7 security watch and clear boundary fencing", iconName: "Shield" },
      { name: "Avenue Tree Plantation", description: "Beautiful native avenue trees planted along the road borders", iconName: "Trees" }
    ],
    specs: {
      plotDimensions: "From 25' x 45' up to 40' x 50' (Customizable)",
      totalPlotArea: "17 Approved Plots (Total 28,237 Sq.Ft / 64.35 Cents)",
      builtUpArea: "Villa Construction Assistance Available (1,800 - 2,800 Sq.Ft)",
      carpetArea: "Optimal 80% Usable Carpet Area",
      facing: "East & North Vastu Compliant Facing Plots",
      roadWidth: "9.0m (30 Feet) & 7.2m (24 Feet) Wide Tar Roads",
      approvalNumber: "DTCP Approval No: 252/2026",
      pattaStatus: "100% Clear Title & Instant Sub-division Individual Patta",
      foundation: "Engineered RCC Isolated Column Footing suited for Coimbatore soil",
      superstructure: "First Grade Chamber Wire-cut Red Bricks",
      flooring: "Vitrified Glazed 4ft x 2ft Tiles",
      doorsWindows: "Seasoned Teak Wood Front Door & German UPVC Window Frames",
      electricalPlumbing: "Finolex Flame-Retardant Copper Cables & Jaquar Fixtures",
      waterDrainage: "Pure Siruvani Municipal Water Supply + Covered Underground Drains",
      ceilingHeight: "10 Feet 6 Inches Clear Ceiling Height"
    },
    originalPrice: 4800000,
    discountPercent: 40,
    offerPrice: 2880000,
    savingsAmount: 1920000,
    ratePerSqFtOriginal: 2900,
    ratePerSqFtOffer: 1740,
    deepavaliOfferValidUntil: "Limited Deepavali Season Celebration Offer",
    view360Image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    view360Title: "Sri Aanandham Avenue 360° Interactive Virtual Tour",
    description: "Sri Aanandham Avenue is a prestigious DTCP Approved residential layout (DTCP No: 252/2026) located right off Siruvani Main Road in Kalampalayam, Coimbatore. Featuring 17 prime plots ranging from 2.87 to 4.56 cents, complete with 30-feet wide tar roads, individual Siruvani water pipeline connections, complete electricity infrastructure, and eco-friendly solar street lights. Within minutes from Kikani School (5 mins), Kovai Kondattam (5 mins), Karunya University (10 mins), and Isha Yoga Center (15 mins).",
    highlights: [
      "DTCP Approved Layout No: 252/2026",
      "Exact Area Statement: 17 Plots (28,237 Sq.Ft total layout area)",
      "Status: 8 Available, 4 Booked, 5 Sold Out",
      "30 Feet wide tar roads with 9.0m and 7.2m layout roads",
      "Kikani School 5 mins • Kovai Kondattam 5 mins • Karunya 10 mins • Isha 15 mins",
      "Direct Siruvani drinking water pipeline & solar street lights"
    ]
  },
  {
    id: "kandhan-avenue",
    tag: "DTCP & Coimbatore LPA Approved",
    title: "Kandhan Avenue",
    location: "Near Pollachi Main Road / Othakkalmandapam, Coimbatore",
    type: "Gated Residential Community Plots",
    status: "available",
    dtcpApprovalNumber: "L.P/CLPA No: 256/2026 : 330/2026",
    surveyNumber: "S.F. NO - 408/2B, 407/2A, 407/3, 406/2B, 406/3",
    layoutMapImage: "/images/sites/kandhan-avenue-layout.png",
    layoutMapTitle: "Kandhan Avenue Official DTCP/LPA Approved Layout Plan",
    brochureImage: "/images/sites/kandhan-avenue-layout.png",
    img: "/images/sites/kandhan-avenue-layout.png",
    gallery: [
      "/images/sites/kandhan-avenue-layout.png",
      "https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80"
    ],
    plotsSummary: {
      total: 25,
      available: 11,
      booked: 6,
      sold: 8,
    },
    plotsList: [
      { plotNumber: 1, areaSqFt: 1850, areaCents: "4.25 Cent", dimensions: "41'-9\" x 42'-9\"", facing: "North", status: "sold" },
      { plotNumber: 2, areaSqFt: 1350, areaCents: "3.10 Cent", dimensions: "30' x 45'", facing: "North", status: "sold" },
      { plotNumber: 3, areaSqFt: 1350, areaCents: "3.10 Cent", dimensions: "30' x 45'", facing: "North", status: "available" },
      { plotNumber: 4, areaSqFt: 1350, areaCents: "3.10 Cent", dimensions: "30' x 45'", facing: "North", status: "booked" },
      { plotNumber: 5, areaSqFt: 1350, areaCents: "3.10 Cent", dimensions: "30' x 45'", facing: "North", status: "available" },
      { plotNumber: 6, areaSqFt: 1350, areaCents: "3.10 Cent", dimensions: "30' x 45'", facing: "North", status: "sold" },
      { plotNumber: 7, areaSqFt: 1350, areaCents: "3.10 Cent", dimensions: "30' x 45'", facing: "North", status: "booked" },
      { plotNumber: 8, areaSqFt: 1400, areaCents: "3.21 Cent", dimensions: "30' x 46'-9\"", facing: "North", status: "available" },
      { plotNumber: 9, areaSqFt: 1350, areaCents: "3.10 Cent", dimensions: "30' x 45'", facing: "South", status: "available" },
      { plotNumber: 10, areaSqFt: 1350, areaCents: "3.10 Cent", dimensions: "30' x 45'", facing: "South", status: "sold" },
      { plotNumber: 11, areaSqFt: 1485, areaCents: "3.41 Cent", dimensions: "33' x 45'", facing: "South", status: "available" },
      { plotNumber: 12, areaSqFt: 1590, areaCents: "3.65 Cent", dimensions: "30' x 53'", facing: "South", status: "sold" },
      { plotNumber: 13, areaSqFt: 1560, areaCents: "3.58 Cent", dimensions: "30' x 52'-3\"", facing: "South", status: "available" },
      { plotNumber: 14, areaSqFt: 1530, areaCents: "3.51 Cent", dimensions: "30' x 51'-6\"", facing: "South", status: "booked" },
      { plotNumber: 15, areaSqFt: 1420, areaCents: "3.26 Cent", dimensions: "30' x 45'-9\"", facing: "South", status: "available" },
      { plotNumber: 16, areaSqFt: 1380, areaCents: "3.17 Cent", dimensions: "30' x 46'-9\"", facing: "East", status: "booked" },
      { plotNumber: 17, areaSqFt: 1380, areaCents: "3.17 Cent", dimensions: "30' x 46'", facing: "East", status: "available" },
      { plotNumber: 18, areaSqFt: 1300, areaCents: "2.98 Cent", dimensions: "30' x 43'-3\"", facing: "East", status: "sold" },
      { plotNumber: 19, areaSqFt: 1250, areaCents: "2.87 Cent", dimensions: "30' x 40'", facing: "East", status: "available" },
      { plotNumber: 20, areaSqFt: 1650, areaCents: "3.79 Cent", dimensions: "30' x 55'", facing: "East", status: "booked" },
      { plotNumber: 21, areaSqFt: 1700, areaCents: "3.90 Cent", dimensions: "27'-6\" x 61'-9\"", facing: "West", status: "sold" },
      { plotNumber: 22, areaSqFt: 1550, areaCents: "3.56 Cent", dimensions: "27'-6\" x 57'", facing: "West", status: "available" },
      { plotNumber: 23, areaSqFt: 1980, areaCents: "4.55 Cent", dimensions: "40'-3\" x 71'-9\"", facing: "West", status: "sold" },
      { plotNumber: 24, areaSqFt: 2400, areaCents: "5.51 Cent", dimensions: "40'-3\" x 60'-9\"", facing: "West", status: "booked" },
      { plotNumber: 25, areaSqFt: 2600, areaCents: "5.97 Cent", dimensions: "57' x 48'-3\"", facing: "Corner Main Road", status: "available" }
    ],
    amenities: "12m Panchayat Tar Road, 9m Internal Road, EB, Sweet Water",
    amenitiesList: [
      { name: "12.0m Wide Panchayat Tar Road", description: "Direct access to wide 40-foot main Panchayat bitumen road", iconName: "Route" },
      { name: "Coimbatore LPA & DTCP Sanction", description: "Approved Layout L.P/CLPA No: 256/2026 with full legal clearances", iconName: "Shield" },
      { name: "Round-the-clock Water Pipeline", description: "Dedicated sweet drinking water pipelines laid to each plot frontage", iconName: "Droplets" },
      { name: "3-Phase Power & Streetlighting", description: "Underground electric cabling ducts and modern street luminaries", iconName: "Zap" },
      { name: "Lush Tree Avenue & Greenery", description: "Planned park space and tree-lined walkways for peaceful living", iconName: "Trees" }
    ],
    specs: {
      plotDimensions: "30' x 45', 30' x 55', and Corner Plots up to 57' x 48'",
      totalPlotArea: "25 Approved Plots (From 2.87 Cents to 5.97 Cents)",
      builtUpArea: "Ideal for 2BHK, 3BHK & 4BHK Custom Architect Villas",
      carpetArea: "100% Usable Residential Space",
      facing: "North, South, East & Main Road Corner Facings",
      roadWidth: "12.0m (40 Ft) Panchayat Road & 9.0m / 7.2m Layout Roads",
      approvalNumber: "L.P/CLPA No: 256/2026 : 330/2026",
      pattaStatus: "Clear Title Deed, Verified by Senior High Court Advocate",
      foundation: "Deep Trench RCC Column Structure spec approved",
      superstructure: "Solid Concrete Blocks & Chamber Burnt Red Clay Bricks",
      flooring: "Vitrified Nano Polished Tiles",
      doorsWindows: "Burma Teak Entrance & Heavy UPVC Sliding Windows",
      electricalPlumbing: "Concealed Fire-Resistant Cabling & Ashirvad Pipes",
      waterDrainage: "Direct Sweet Water Well Connection + Rainwater Trenches",
      ceilingHeight: "10 Feet 6 Inches"
    },
    originalPrice: 5200000,
    discountPercent: 40,
    offerPrice: 3120000,
    savingsAmount: 2080000,
    ratePerSqFtOriginal: 2800,
    ratePerSqFtOffer: 1680,
    deepavaliOfferValidUntil: "Limited Deepavali Season Celebration Offer",
    view360Image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80",
    view360Title: "Kandhan Avenue 360° Layout Panorama",
    description: "Kandhan Avenue is an approved residential development certified under Coimbatore LPA and DTCP (L.P/CLPA No: 256/2026 : 330/2026). Situated abutting a 12.0-meter wide Panchayat Tar Road, Kandhan Avenue offers 25 well-demarcated residential plots with 9.0m and 7.20m internal roads, underground water connections, and rapid connectivity towards Pollachi Main Road and Othakkalmandapam.",
    highlights: [
      "DTCP / Coimbatore LPA Sanctioned Layout (256/2026 : 330/2026)",
      "Abutting 12.0m (40 Feet) Main Panchayat Tar Road",
      "Total 25 Plots: 11 Available, 6 Booked, 8 Sold",
      "Clear sub-division Patta ready for instant SRO registration",
      "Bank loan pre-approval ready with SBI, HDFC & Canara Bank",
      "High-growth area connecting Pollachi road corridor"
    ]
  },
  {
    id: "siruvani-phase-1-2",
    tag: "Phase 1 Inhabited • Phase 2 Open",
    title: "Siruvani Enclave (Phase 1 & Phase 2)",
    location: "Siruvani Main Road, Kalampalayam, Coimbatore",
    type: "Integrated Gated Community Plots",
    status: "available",
    dtcpApprovalNumber: "DTCP: 188/2025 | Panchayat Sanctioned",
    surveyNumber: "S.F. NO - 267/3A1, 267/3A3, 267/3B, 267/1B1, 267/2A, 267/2B",
    layoutMapImage: "/images/sites/phase1-phase2-layout.png",
    layoutMapTitle: "Siruvani Enclave Phase 1 & Phase 2 Layout Plan",
    brochureImage: "/images/sites/phase1-phase2-layout.png",
    img: "/images/sites/phase1-phase2-layout.png",
    gallery: [
      "/images/sites/phase1-phase2-layout.png",
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80"
    ],
    plotsSummary: {
      total: 56,
      available: 18,
      booked: 12,
      sold: 26,
    },
    plotsList: [
      // Phase 2 Plots (Plots 1 to 12 in the newly released sector)
      { plotNumber: "P2-1", areaSqFt: 1750, areaCents: "4.02 Cent", dimensions: "29'-9\" x 41'-9\"", facing: "East", status: "available" },
      { plotNumber: "P2-2", areaSqFt: 1850, areaCents: "4.25 Cent", dimensions: "25' x 43'-6\"", facing: "East", status: "available" },
      { plotNumber: "P2-3", areaSqFt: 1800, areaCents: "4.13 Cent", dimensions: "30' x 42'", facing: "East", status: "available" },
      { plotNumber: "P2-4", areaSqFt: 1720, areaCents: "3.95 Cent", dimensions: "35' x 49'", facing: "East", status: "available" },
      { plotNumber: "P2-5", areaSqFt: 1950, areaCents: "4.48 Cent", dimensions: "35' x 51'-3\"", facing: "North-East Corner", status: "booked" },
      { plotNumber: "P2-6", areaSqFt: 1800, areaCents: "4.13 Cent", dimensions: "30' x 60'", facing: "North", status: "available" },
      { plotNumber: "P2-7", areaSqFt: 1800, areaCents: "4.13 Cent", dimensions: "30' x 60'", facing: "North", status: "available" },
      { plotNumber: "P2-8", areaSqFt: 1800, areaCents: "4.13 Cent", dimensions: "30' x 60'", facing: "North", status: "available" },
      { plotNumber: "P2-9", areaSqFt: 1900, areaCents: "4.36 Cent", dimensions: "31'-9\" x 61'-3\"", facing: "North", status: "available" },
      { plotNumber: "P2-10", areaSqFt: 1600, areaCents: "3.67 Cent", dimensions: "42' x 32'-3\"", facing: "West", status: "booked" },
      { plotNumber: "P2-11", areaSqFt: 1550, areaCents: "3.56 Cent", dimensions: "26'-9\" x 26'-6\"", facing: "South", status: "available" },
      { plotNumber: "P2-12", areaSqFt: 1650, areaCents: "3.79 Cent", dimensions: "30'-3\" x 22'-3\"", facing: "South", status: "available" },
      // Phase 1 Sample plots representing the 44 plots in Phase 1
      { plotNumber: "P1-1", areaSqFt: 1500, areaCents: "3.44 Cent", facing: "East", status: "sold" },
      { plotNumber: "P1-2", areaSqFt: 1500, areaCents: "3.44 Cent", facing: "East", status: "sold" },
      { plotNumber: "P1-3", areaSqFt: 1500, areaCents: "3.44 Cent", facing: "East", status: "sold" },
      { plotNumber: "P1-4", areaSqFt: 1500, areaCents: "3.44 Cent", facing: "East", status: "sold" },
      { plotNumber: "P1-5", areaSqFt: 1500, areaCents: "3.44 Cent", facing: "East", status: "sold" },
      { plotNumber: "P1-6", areaSqFt: 1600, areaCents: "3.67 Cent", facing: "West", status: "sold" },
      { plotNumber: "P1-7", areaSqFt: 1600, areaCents: "3.67 Cent", facing: "West", status: "sold" },
      { plotNumber: "P1-8", areaSqFt: 1600, areaCents: "3.67 Cent", facing: "West", status: "sold" },
      { plotNumber: "P1-9", areaSqFt: 1600, areaCents: "3.67 Cent", facing: "West", status: "sold" },
      { plotNumber: "P1-10", areaSqFt: 1600, areaCents: "3.67 Cent", facing: "West", status: "sold" },
      { plotNumber: "P1-11", areaSqFt: 1700, areaCents: "3.90 Cent", facing: "North", status: "booked" },
      { plotNumber: "P1-12", areaSqFt: 1700, areaCents: "3.90 Cent", facing: "North", status: "sold" },
      { plotNumber: "P1-13", areaSqFt: 1700, areaCents: "3.90 Cent", facing: "North", status: "sold" },
      { plotNumber: "P1-14", areaSqFt: 1700, areaCents: "3.90 Cent", facing: "North", status: "sold" },
      { plotNumber: "P1-15", areaSqFt: 1700, areaCents: "3.90 Cent", facing: "North", status: "sold" },
      { plotNumber: "P1-16", areaSqFt: 1700, areaCents: "3.90 Cent", facing: "North", status: "booked" },
      { plotNumber: "P1-17", areaSqFt: 1800, areaCents: "4.13 Cent", facing: "South", status: "sold" },
      { plotNumber: "P1-18", areaSqFt: 1800, areaCents: "4.13 Cent", facing: "South", status: "sold" },
      { plotNumber: "P1-19", areaSqFt: 1800, areaCents: "4.13 Cent", facing: "South", status: "available" },
      { plotNumber: "P1-20", areaSqFt: 1800, areaCents: "4.13 Cent", facing: "South", status: "available" },
      { plotNumber: "P1-21", areaSqFt: 1850, areaCents: "4.25 Cent", facing: "East", status: "sold" },
      { plotNumber: "P1-22", areaSqFt: 1850, areaCents: "4.25 Cent", facing: "East", status: "sold" },
      { plotNumber: "P1-23", areaSqFt: 1850, areaCents: "4.25 Cent", facing: "East", status: "sold" },
      { plotNumber: "P1-24", areaSqFt: 1900, areaCents: "4.36 Cent", facing: "East", status: "booked" },
      { plotNumber: "P1-25", areaSqFt: 1500, areaCents: "3.44 Cent", facing: "West", status: "sold" },
      { plotNumber: "P1-26", areaSqFt: 1500, areaCents: "3.44 Cent", facing: "West", status: "sold" },
      { plotNumber: "P1-27", areaSqFt: 1600, areaCents: "3.67 Cent", facing: "West", status: "available" },
      { plotNumber: "P1-28", areaSqFt: 1600, areaCents: "3.67 Cent", facing: "West", status: "sold" },
      { plotNumber: "P1-29", areaSqFt: 1600, areaCents: "3.67 Cent", facing: "West", status: "available" },
      { plotNumber: "P1-30", areaSqFt: 1600, areaCents: "3.67 Cent", facing: "West", status: "sold" },
      { plotNumber: "P1-31", areaSqFt: 1650, areaCents: "3.79 Cent", facing: "West", status: "booked" },
      { plotNumber: "P1-32", areaSqFt: 1700, areaCents: "3.90 Cent", facing: "North", status: "available" },
      { plotNumber: "P1-33", areaSqFt: 1700, areaCents: "3.90 Cent", facing: "North", status: "booked" },
      { plotNumber: "P1-34", areaSqFt: 1700, areaCents: "3.90 Cent", facing: "North", status: "available" },
      { plotNumber: "P1-35", areaSqFt: 1700, areaCents: "3.90 Cent", facing: "North", status: "available" },
      { plotNumber: "P1-36", areaSqFt: 1700, areaCents: "3.90 Cent", facing: "North", status: "booked" },
      { plotNumber: "P1-37", areaSqFt: 1750, areaCents: "4.02 Cent", facing: "South", status: "available" },
      { plotNumber: "P1-38", areaSqFt: 1750, areaCents: "4.02 Cent", facing: "South", status: "sold" },
      { plotNumber: "P1-39", areaSqFt: 1750, areaCents: "4.02 Cent", facing: "South", status: "booked" },
      { plotNumber: "P1-40", areaSqFt: 1750, areaCents: "4.02 Cent", facing: "South", status: "booked" },
      { plotNumber: "P1-41", areaSqFt: 1800, areaCents: "4.13 Cent", facing: "North", status: "sold" },
      { plotNumber: "P1-42", areaSqFt: 1800, areaCents: "4.13 Cent", facing: "North", status: "booked" },
      { plotNumber: "P1-43", areaSqFt: 1800, areaCents: "4.13 Cent", facing: "North", status: "sold" },
      { plotNumber: "P1-44", areaSqFt: 1850, areaCents: "4.25 Cent", facing: "North", status: "sold" }
    ],
    amenities: "10m Main Road, 9m/7.2m Internal Roads, Pure Siruvani Water, Solar Lights",
    amenitiesList: [
      { name: "10.0m Wide Main Layout Road", description: "Grand 33-foot central spine road connecting Phase 1 and Phase 2", iconName: "Route" },
      { name: "Dual Water Connection (Siruvani)", description: "Direct municipal Siruvani connection + high yield community borewell", iconName: "Droplets" },
      { name: "Complete Solar Street Lighting", description: "Automated dusk-to-dawn LED solar illumination on every pole", iconName: "Sun" },
      { name: "Clear Title & Instant Patta", description: "Verified by legal team with 100% encumbrance free history", iconName: "Shield" },
      { name: "Avenue Tree Borders", description: "Shady native green trees along all layout roads for temperature control", iconName: "Trees" }
    ],
    specs: {
      plotDimensions: "30' x 50', 35' x 50', and Corner Plot Options",
      totalPlotArea: "56 Plots Total across Phase 1 & Phase 2",
      builtUpArea: "Villa Construction Package Available",
      carpetArea: "Optimal Gated Layout Configuration",
      facing: "North, East, West & Corner Options",
      roadWidth: "10.0m (33 Ft), 9.0m (30 Ft) & 7.2m (24 Ft) Tar Roads",
      approvalNumber: "DTCP: 188/2025 | Panchayat Certified",
      pattaStatus: "Clear Mother Deed with Individual Sub-division Patta for Each Plot",
      foundation: "Reinforced Concrete Isolated Footing",
      superstructure: "Wire Cut Chamber Clay Bricks",
      flooring: "Kajaria 4x2 Vitrified Tiles",
      doorsWindows: "Teak Main Door & UPVC Sliding Windows",
      electricalPlumbing: "Finolex Cables & Jaquar Fixtures",
      waterDrainage: "Siruvani Tap + Concealed Underground Drainage",
      ceilingHeight: "10 Feet 6 Inches"
    },
    originalPrice: 4200000,
    discountPercent: 40,
    offerPrice: 2520000,
    savingsAmount: 1680000,
    ratePerSqFtOriginal: 2400,
    ratePerSqFtOffer: 1440,
    deepavaliOfferValidUntil: "Limited Deepavali Season Celebration Offer",
    view360Image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80",
    view360Title: "Siruvani Enclave Phase 1 & 2 Panorama",
    description: "Siruvani Enclave is a premier gated community layout divided into Phase 1 and Phase 2. Phase 1 has witnessed tremendous buyer enthusiasm with over 26 plots sold and handed over. Phase 2 brings freshly sanctioned residential plots with 10.0m wide main roads, direct Siruvani drinking water connections, and complete solar lighting infrastructure.",
    highlights: [
      "Phase 1 & Phase 2 Layout with 56 Total Plots",
      "Status: 18 Available, 12 Booked, 26 Sold Out",
      "Wide 10.0m, 9.0m, and 7.2m tar roads",
      "Direct Siruvani drinking water pipeline with individual taps",
      "Immediate registration ready with verified Patta",
      "40% Deepavali discount active on Phase 2 introductory inventory"
    ]
  }
];

// Compatibility aliases for legacy IDs
const idAliases: Record<string, string> = {
  "kalampalayam-area": "sri-aanandham-avenue",
  "green-fields-layout": "kandhan-avenue",
  "coimbatore-region-plots": "siruvani-phase-1-2",
  "royal-palms-residency-plot-14": "sri-aanandham-avenue",
  "grand-orchard-plot-08": "kandhan-avenue",
  "ananya-gardens-phase-1": "siruvani-phase-1-2",
  "siruvani-meadows-layout": "siruvani-phase-1-2",
};

export function getProjectById(id: string): Project | undefined {
  const resolvedId = idAliases[id] || id;
  return projects.find((p) => p.id === resolvedId || p.id === id);
}

export const getSiteById = getProjectById;

export function getAllSites(): Project[] {
  return projects;
}

export function getAvailableProjects(): Project[] {
  return projects.filter((p) => p.status === "available");
}
export const getAvailableSites = getAvailableProjects;

export function getBookedProjects(): Project[] {
  return projects.filter(
    (p) => p.status === "booked" || (p.plotsSummary && p.plotsSummary.booked > 0)
  );
}
export const getBookedSites = getBookedProjects;

export function getSoldProjects(): Project[] {
  return projects.filter(
    (p) => p.status === "sold" || (p.plotsSummary && p.plotsSummary.sold > 0)
  );
}
export const getSoldSites = getSoldProjects;
