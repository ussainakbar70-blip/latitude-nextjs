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

export type NeighborhoodCategory = {
  category: string;
  iconName: "Route" | "GraduationCap" | "Briefcase" | "HeartPulse" | "Landmark" | "School";
  items: {
    name: string;
    distanceTime: string;
  }[];
};

export type ProjectInstagramReel = {
  id: string;
  url: string;
  embedUrl: string;
  title: string;
  shortTitle: string;
  category: string;
  thumbnail: string;
  viewsBadge?: string;
  highlight: string;
  isClientSatisfaction?: boolean;
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
  instagramReels?: ProjectInstagramReel[];
  // Transparent Pricing Details
  originalPrice?: number;
  discountPercent?: number;
  offerPrice: number;
  savingsAmount?: number;
  ratePerSqFtOriginal?: number;
  ratePerSqFtOffer: number;
  offerValidUntil?: string;
  startingPriceLabel?: string;
  houseStartingPrice?: string;
  plotRatePerCent?: string;
  onHandAmount?: string;
  bankLoanAssistance?: string;
  launchOfferTitle?: string;
  neighborhoodConnectivity?: NeighborhoodCategory[];
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
    tag: "Grand Launch • Madhampatty",
    title: "Sri Aanandham Avenue",
    location: "Madhampatty (700m from Main Bus Stop), Siruvani Main Road, Coimbatore",
    type: "DTCP Approved Residential Plots & Luxury Duplex Villas",
    status: "available",
    dtcpApprovalNumber: "DTCP Approval No. 252/2026",
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
    amenities: "700m Bus Stop, 1.8km Ring Road, 30 Ft Tar Roads, Siruvani Water, EB, Solar Street Lights",
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
      builtUpArea: "Build Luxury 2 BHK Duplex with Car Parking for Just ₹45 Lakhs",
      carpetArea: "Optimal 80% Usable Carpet Area with Vastu Compliance",
      facing: "East & North Vastu Compliant Facing Plots",
      roadWidth: "9.0m (30 Feet) & 7.2m (24 Feet) Wide Tar Roads",
      approvalNumber: "DTCP Approval No. 252/2026",
      pattaStatus: "100% Clear Title & Instant Sub-division Individual Patta",
      foundation: "Engineered RCC Isolated Column Footing suited for Coimbatore soil",
      superstructure: "First Grade Chamber Wire-cut Red Bricks",
      flooring: "Vitrified Glazed 4ft x 2ft Tiles",
      doorsWindows: "Seasoned Teak Wood Front Door & German UPVC Window Frames",
      electricalPlumbing: "Finolex Flame-Retardant Copper Cables & Jaquar Fixtures",
      waterDrainage: "Pure Siruvani Municipal Water Supply + Covered Underground Drains",
      ceilingHeight: "10 Feet 6 Inches Clear Ceiling Height"
    },
    offerPrice: 3415300,
    ratePerSqFtOffer: 2732,
    startingPriceLabel: "Launch Price: ₹11.90 Lakhs / Cent",
    houseStartingPrice: "Build Luxury 2 BHK Duplex from ₹45 LAKHS",
    plotRatePerCent: "₹11.90 LAKHS per Cent",
    bankLoanAssistance: "Up to 80%-85% Bank Loan Assistance Available*",
    launchOfferTitle: "GRAND LAUNCH OFFER",
    neighborhoodConnectivity: [
      {
        category: "Easy Connectivity",
        iconName: "Route",
        items: [
          { name: "Madhampatty Main Bus Stop", distanceTime: "700 m (1 min)" },
          { name: "Western Ring Road", distanceTime: "1.8 km (3 mins)" },
          { name: "Palakkad Road", distanceTime: "12 km (15 mins)" },
          { name: "Coimbatore Junction Railway Station", distanceTime: "14 km (20 mins)" },
          { name: "Gandhipuram Bus Stand", distanceTime: "15 km (25 mins)" }
        ]
      },
      {
        category: "Top Educational Institutions Nearby",
        iconName: "GraduationCap",
        items: [
          { name: "Kikani Vidhya Mandir / School", distanceTime: "5 mins" },
          { name: "Sri Krishna College of Engineering & Technology", distanceTime: "8–10 mins" },
          { name: "Karunya University", distanceTime: "10 mins" }
        ]
      },
      {
        category: "Leisure & Landmarks",
        iconName: "Landmark",
        items: [
          { name: "Kovai Kondattam", distanceTime: "5 km (5 mins)" },
          { name: "Isha Yoga Center", distanceTime: "15 mins" }
        ]
      }
    ],
    description: "Own your dream plot in Sri Aanandham Avenue, a prestigious DTCP-approved gated layout (Approval No. 252/2026) located in prime Madhampatty, Siruvani Main Road, Coimbatore. Situated only 700 meters from Madhampatty Main Bus Stop and just 1.8 km from the upcoming Western Ring Road. Offering a limited launch price of just ₹11.90 Lakhs per Cent, with an exclusive package to build a luxury 2 BHK duplex with car parking for just ₹45 Lakhs. Featuring 30-ft wide tar roads, direct municipal Siruvani drinking water pipeline, 3-phase electricity, and automated solar street lights. Perfect for first-time home buyers and investors seeking prime connectivity and high future appreciation.",
    highlights: [
      "DTCP Approved Layout – Approval No. 252/2026",
      "Launch Price: Just ₹11.90 Lakhs per Cent",
      "Build a Luxury 2 BHK Duplex with Car Parking for Just ₹45 Lakhs",
      "Only 700 m from Madhampatty Main Bus Stop & 1.8 km from Western Ring Road",
      "Near Kikani School, Sri Krishna College, Kovai Kondattam & Karunya University",
      "Direct Municipal Siruvani Drinking Water Pipeline & Solar Street Lights",
      "14 km to Coimbatore Junction Railway Station & 15 km to Gandhipuram",
      "Perfect for First-Time Home Buyers with High Future Appreciation Potential"
    ],
    instagramReels: [
      {
        id: "DaKupuWvKW_",
        url: "https://www.instagram.com/reel/DaKupuWvKW_/?stkn=MXU0MWVjbjBrYXZvZA==",
        embedUrl: "https://www.instagram.com/reel/DaKupuWvKW_/embed/",
        title: "Madhampatty 2 BHK (₹45L) & 3 BHK (₹49L) | 700m from Bus Stop & Western Ring Road",
        shortTitle: "Madhampatty Villas & DTCP Plots",
        category: "Site Tour",
        thumbnail: "/images/reels/DaKupuWvKW_.jpg",
        viewsBadge: "Site Walkthrough",
        highlight: "DTCP plots and premium villas near Western Ring Road, 30ft tar road, sweet Siruvani water, and peaceful green surroundings."
      },
      {
        id: "DeCCc-6NYfE",
        url: "https://www.instagram.com/reel/DeCCc-6NYfE/?stkn=eWhxbXR4ZW40eHp0",
        embedUrl: "https://www.instagram.com/reel/DeCCc-6NYfE/embed/",
        title: "Madhampatti Site 15 Client Handover & Happiness",
        shortTitle: "Madhampatti Site 15 Handover",
        category: "Client Satisfaction",
        thumbnail: "/images/reels/DeCCc-6NYfE.jpg",
        viewsBadge: "Client Review",
        highlight: "Happy buyer receiving clear Patta documents and immediate possession for Site 15 with Latitude Properties.",
        isClientSatisfaction: true
      }
    ]
  },
  {
    id: "kandhan-avenue",
    tag: "Grand Launch Offer",
    title: "Kandhan Avenue – Elur, Arisipalayam",
    location: "Elur, Arisipalayam, Near Pollachi Highway, Coimbatore",
    type: "Premium 2 BHK Individual Houses & DTCP Approved Plots",
    status: "available",
    dtcpApprovalNumber: "DTCP Approval No. 256/2026",
    surveyNumber: "S.F. NO - 408/2B, 407/2A, 407/3, 406/2B, 406/3",
    layoutMapImage: "/images/sites/kandhan-avenue-layout.png",
    layoutMapTitle: "Kandhan Avenue Official DTCP Approved Layout Plan",
    brochureImage: "/images/sites/kandhan-avenue-layout.png",
    img: "/images/sites/kandhan-avenue-layout.png",
    gallery: [
      "/images/sites/kandhan-avenue-layout.png",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
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
    amenities: "Pollachi Highway 1.5 km, 12m Tar Road, EB, Sweet Water, Green Layout",
    amenitiesList: [
      { name: "Direct Pollachi Highway Access", description: "Just 1.5 km (2 mins) from Pollachi Highway with excellent transport connectivity", iconName: "Route" },
      { name: "DTCP Sanctioned Layout", description: "Approved Layout Approval No: 256/2026 with 100% clear titles & immediate Patta", iconName: "Shield" },
      { name: "Round-the-clock Sweet Water", description: "Dedicated sweet drinking water pipelines laid to each plot and villa frontage", iconName: "Droplets" },
      { name: "3-Phase Power & Street Lighting", description: "TANGEDCO power connection ready with modern streetlights", iconName: "Zap" },
      { name: "Peaceful & Green Environment", description: "Clean air, quiet residential ambiance, and lush tree plantations throughout", iconName: "Trees" }
    ],
    specs: {
      plotDimensions: "30' x 45', 30' x 55', and Corner Plots up to 57' x 48'",
      totalPlotArea: "25 Approved Plots & Individual Houses (From 2.87 Cents to 5.97 Cents)",
      builtUpArea: "Premium 2 BHK Individual Houses (Starting from JUST ₹29 LAKHS Onwards)",
      carpetArea: "100% Usable Residential Space with Vastu Compliance",
      facing: "North, South, East & Main Road Corner Facings",
      roadWidth: "12.0m (40 Ft) Panchayat Road & 9.0m / 7.2m Layout Roads",
      approvalNumber: "DTCP Approval No. 256/2026",
      pattaStatus: "Clear Title Deed, 100% Legally Verified & Instant Sub-division Individual Patta",
      foundation: "Deep Trench RCC Column Footing engineered for maximum structural life",
      superstructure: "Solid Concrete Blocks & Chamber Burnt Red Clay Bricks",
      flooring: "Vitrified Nano Polished Tiles",
      doorsWindows: "Burma Teak Entrance & Heavy UPVC Sliding Windows",
      electricalPlumbing: "Concealed Fire-Resistant Cabling & Ashirvad Pipes",
      waterDrainage: "Direct Sweet Water Supply + Covered Underground Drains",
      ceilingHeight: "10 Feet 6 Inches"
    },
    offerPrice: 2900000,
    ratePerSqFtOffer: 1420,
    startingPriceLabel: "Starting from JUST ₹29 LAKHS Onwards",
    houseStartingPrice: "Starting from JUST ₹29 LAKHS Onwards",
    plotRatePerCent: "₹6.20 LAKHS per Cent",
    onHandAmount: "Only ₹5 LAKHS On-Hand",
    bankLoanAssistance: "Up to 80% Bank Loan Assistance Available*",
    launchOfferTitle: "GRAND LAUNCH OFFER",
    neighborhoodConnectivity: [
      {
        category: "Easy Connectivity",
        iconName: "Route",
        items: [
          { name: "Pollachi Highway", distanceTime: "1.5 km (2 mins)" },
          { name: "Kinathukadavu Bus Stand", distanceTime: "3–5 mins" },
          { name: "Kinathukadavu Railway Station", distanceTime: "3–5 mins" }
        ]
      },
      {
        category: "Top Schools Nearby",
        iconName: "School",
        items: [
          { name: "Vivek Vidyalaya Matric Hr. Sec. School", distanceTime: "2–3 mins" },
          { name: "Noyyal Public School", distanceTime: "3–4 mins" },
          { name: "Akshaya Academy", distanceTime: "8–10 mins" }
        ]
      },
      {
        category: "Leading Colleges Nearby",
        iconName: "GraduationCap",
        items: [
          { name: "VSB College of Engineering & Technical Campus", distanceTime: "3–5 mins" },
          { name: "Sri Eshwar College of Engineering", distanceTime: "5–7 mins" },
          { name: "Amrita Vishwa Vidyapeetham", distanceTime: "5–7 mins" },
          { name: "Hindusthan College of Engineering & Technology", distanceTime: "10–15 mins" },
          { name: "Karpagam Academy of Higher Education", distanceTime: "20–25 mins" }
        ]
      },
      {
        category: "Employment Hubs Nearby",
        iconName: "Briefcase",
        items: [
          { name: "ELGi ACP", distanceTime: "5–7 mins" },
          { name: "200-Acre SIDCO Industrial Estate", distanceTime: "10–15 mins" },
          { name: "L&T IT Park", distanceTime: "10–15 mins" },
          { name: "Rathinam Tech Park", distanceTime: "15–20 mins" }
        ]
      },
      {
        category: "Healthcare Nearby",
        iconName: "HeartPulse",
        items: [
          { name: "Sri Venkateswara Hospital", distanceTime: "5–10 mins" },
          { name: "Karpagam Medical College Hospital", distanceTime: "10–15 mins" }
        ]
      },
      {
        category: "Popular Landmarks",
        iconName: "Landmark",
        items: [
          { name: "Eachanari Vinayagar Temple", distanceTime: "20 mins" },
          { name: "Aliyar Dam", distanceTime: "40 mins" }
        ]
      }
    ],
    description: "Kandhan Avenue at Elur, Arisipalayam is a DTCP Approved Layout (Approval No. 256/2026) featuring Premium 2 BHK Individual Houses starting from just ₹29 Lakhs onwards and residential plots at ₹6.20 Lakhs per cent. Situated only 1.5 km (2 mins) from Pollachi Highway and 3–5 mins from Kinathukadavu bus stand & railway station. With only ₹5 Lakhs on-hand and up to 80% bank loan assistance, Kandhan Avenue provides peaceful and green community living with rapid access to premier educational institutions (VSB, Sri Eshwar, Amrita, Karpagam) and major industrial and IT employment corridors (SIDCO Industrial Estate, ELGi ACP, L&T IT Park).",
    highlights: [
      "DTCP Approved Layout – Approval No. 256/2026",
      "Premium 2 BHK Individual Houses from JUST ₹29 LAKHS Onwards",
      "Residential Plots at ₹6.20 LAKHS per Cent",
      "Only ₹5 LAKHS On-Hand • Up to 80% Bank Loan Assistance Available*",
      "Pollachi Highway – 1.5 km (2 mins) • Kinathukadavu Bus Stand 3–5 mins",
      "Close to Vivek Vidyalaya, VSB, Sri Eshwar, Amrita & Karpagam",
      "Minutes from ELGi ACP, 200-Acre SIDCO Industrial Estate & L&T IT Park",
      "Peaceful & Green Environment with High Future Appreciation Potential"
    ],
    instagramReels: [
      {
        id: "DbigrPONjte",
        url: "https://www.instagram.com/reel/DbigrPONjte/?stkn=emo3cXVncGZ1aHo4",
        embedUrl: "https://www.instagram.com/reel/DbigrPONjte/embed/",
        title: "₹5 லட்சத்தில் உங்கள் சொந்த 2 BHK வீடு - 80% Bank Loan Assistance",
        shortTitle: "₹5L On-Hand 2 BHK Individual House",
        category: "House Walkthrough",
        thumbnail: "/images/reels/DbigrPONjte.jpg",
        viewsBadge: "Value Deal",
        highlight: "Stop paying rent! Own a 2 BHK individual house starting from just ₹5 Lakhs on-hand with 80% bank loan assistance."
      },
      {
        id: "Ddv4l1TN2Hp",
        url: "https://www.instagram.com/reel/Ddv4l1TN2Hp/?stkn=MWU3MTVhOHF3N3R6cg==",
        embedUrl: "https://www.instagram.com/reel/Ddv4l1TN2Hp/embed/",
        title: "Customer Site Review & Real Land Investment Experience",
        shortTitle: "Customer Review: Investment Experience",
        category: "Client Satisfaction",
        thumbnail: "/images/reels/Ddv4l1TN2Hp.jpg",
        viewsBadge: "Client Review",
        highlight: "Direct buyer feedback on spot documentation, DTCP sanction, and hassle-free clear title handover at Kandhan Avenue.",
        isClientSatisfaction: true
      }
    ]
  },
  {
    id: "rathna-residency",
    tag: "Grand Launch • Future Corporation Limit",
    title: "Rathna Residency",
    location: "Behind Karpagam University, Malumichampatty (Future Corporation Limit), Coimbatore",
    type: "DTCP-Approved Gated Community Plots",
    status: "available",
    dtcpApprovalNumber: "DTCP-Approved Layouts",
    surveyNumber: "Malumichampatty Prime Survey Extension",
    img: "/images/official-layout-plan.png",
    gallery: [
      "/images/official-layout-plan.png",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524055988636-436cfa46e59e?auto=format&fit=crop&w=1200&q=80"
    ],
    plotsSummary: {
      total: 36,
      available: 26,
      booked: 6,
      sold: 4,
    },
    plotsList: [
      { plotNumber: 1, areaSqFt: 1307, areaCents: "3.00 Cent", dimensions: "30' x 43'-7\"", facing: "East", status: "available" },
      { plotNumber: 2, areaSqFt: 1307, areaCents: "3.00 Cent", dimensions: "30' x 43'-7\"", facing: "East", status: "available" },
      { plotNumber: 3, areaSqFt: 1307, areaCents: "3.00 Cent", dimensions: "30' x 43'-7\"", facing: "East", status: "booked" },
      { plotNumber: 4, areaSqFt: 1089, areaCents: "2.50 Cent", dimensions: "25' x 43'-7\"", facing: "East", status: "available" },
      { plotNumber: 5, areaSqFt: 1089, areaCents: "2.50 Cent", dimensions: "25' x 43'-7\"", facing: "East", status: "sold" },
      { plotNumber: 6, areaSqFt: 1307, areaCents: "3.00 Cent", dimensions: "30' x 43'-7\"", facing: "East", status: "available" },
      { plotNumber: 7, areaSqFt: 1525, areaCents: "3.50 Cent", dimensions: "35' x 43'-7\"", facing: "North-East Corner", status: "available" },
      { plotNumber: 8, areaSqFt: 1742, areaCents: "4.00 Cent", dimensions: "40' x 43'-7\"", facing: "North", status: "available" },
      { plotNumber: 9, areaSqFt: 1307, areaCents: "3.00 Cent", dimensions: "30' x 43'-7\"", facing: "North", status: "booked" },
      { plotNumber: 10, areaSqFt: 1307, areaCents: "3.00 Cent", dimensions: "30' x 43'-7\"", facing: "North", status: "available" },
      { plotNumber: 11, areaSqFt: 1307, areaCents: "3.00 Cent", dimensions: "30' x 43'-7\"", facing: "South", status: "available" },
      { plotNumber: 12, areaSqFt: 1307, areaCents: "3.00 Cent", dimensions: "30' x 43'-7\"", facing: "South", status: "sold" },
      { plotNumber: 13, areaSqFt: 1089, areaCents: "2.50 Cent", dimensions: "25' x 43'-7\"", facing: "South", status: "available" },
      { plotNumber: 14, areaSqFt: 1525, areaCents: "3.50 Cent", dimensions: "35' x 43'-7\"", facing: "South", status: "booked" },
      { plotNumber: 15, areaSqFt: 1742, areaCents: "4.00 Cent", dimensions: "40' x 43'-7\"", facing: "West", status: "available" },
      { plotNumber: 16, areaSqFt: 1307, areaCents: "3.00 Cent", dimensions: "30' x 43'-7\"", facing: "West", status: "available" },
      { plotNumber: 17, areaSqFt: 1307, areaCents: "3.00 Cent", dimensions: "30' x 43'-7\"", facing: "West", status: "sold" },
      { plotNumber: 18, areaSqFt: 1089, areaCents: "2.50 Cent", dimensions: "25' x 43'-7\"", facing: "West", status: "available" },
      { plotNumber: 19, areaSqFt: 1307, areaCents: "3.00 Cent", dimensions: "30' x 43'-7\"", facing: "West", status: "booked" },
      { plotNumber: 20, areaSqFt: 2178, areaCents: "5.00 Cent", dimensions: "50' x 43'-7\"", facing: "Corner Main Road", status: "available" },
    ],
    amenities: "Grand Entrance Arch, Fully Gated Community, 33-ft Blacktop Roads, Individual Water Connection, Electricity, Solar Street Lights",
    amenitiesList: [
      { name: "DTCP-Approved Layouts", description: "Sanctioned DTCP residential layout with 100% legal clearance & instant Patta", iconName: "Shield" },
      { name: "Grand Entrance Arch & Gated Community", description: "Secured perimeter wall with designer entrance arch and peaceful residential atmosphere", iconName: "Shield" },
      { name: "33-ft Blacktop Roads", description: "Wide 33-feet heavy-duty blacktop roads with concrete stormwater drains", iconName: "Route" },
      { name: "Individual Water & Electricity", description: "Dedicated individual water tap lines and TANGEDCO power connections ready for every plot", iconName: "Droplets" },
      { name: "Solar Street Lights & Greenery", description: "Eco-friendly solar illumination and tranquil environment with high appreciation potential", iconName: "Zap" }
    ],
    specs: {
      plotDimensions: "25' x 43'-7\", 30' x 43'-7\", 35' x 43'-7\", 40' x 43'-7\" & Corner Plots",
      totalPlotArea: "DTCP Approved Residential Plots from 2.50 Cents to 5.00+ Cents",
      builtUpArea: "Ideal for Custom Independent Villas, Rental Income & Long-Term Investment",
      carpetArea: "100% Clear Vastu-Compliant Residential Plots",
      facing: "East, North, West, South & Dual-Road Corner Facings",
      roadWidth: "33-ft Heavy Duty Blacktop Layout Roads",
      approvalNumber: "DTCP-Approved Layouts",
      pattaStatus: "100% Clear Title Deeds with Instant Individual Sub-division Patta Transfer",
      foundation: "High-density natural gravel soil with excellent bearing capacity",
      superstructure: "Vastu compliant individual villa construction permitted immediately",
      flooring: "N/A (Ready for Custom Villa Construction)",
      doorsWindows: "N/A (Ready for Construction)",
      electricalPlumbing: "Individual Water Pipeline + Direct Electricity Connection",
      waterDrainage: "Individual Water Connection + Underground Stormwater Drains",
      ceilingHeight: "Customizable"
    },
    offerPrice: 3125000,
    ratePerSqFtOffer: 2870,
    startingPriceLabel: "Launch Price: Just ₹12.5 Lakhs per Cent",
    plotRatePerCent: "Just ₹12.5 Lakhs per Cent",
    launchOfferTitle: "GRAND LAUNCH – FUTURE CORPORATION LIMIT",
    neighborhoodConnectivity: [
      {
        category: "Prime Connectivity",
        iconName: "Route",
        items: [
          { name: "Pollachi Road", distanceTime: "650 m" },
          { name: "Future 6-Track L&T Bypass", distanceTime: "1.2 km" },
          { name: "L&T IT Park", distanceTime: "2.2 km" },
          { name: "Rathinam Tech Park", distanceTime: "3 km" },
          { name: "Eachanari Vinayagar Temple", distanceTime: "2.5 km" },
          { name: "Podanur Railway Station", distanceTime: "10–15 mins" },
          { name: "Coimbatore Railway Station", distanceTime: "15–20 mins" },
          { name: "Ukkadam Bus Stand", distanceTime: "15–20 mins" },
          { name: "Gandhipuram Bus Stand", distanceTime: "20–25 mins" }
        ]
      },
      {
        category: "Surrounded by Top Educational Institutions",
        iconName: "GraduationCap",
        items: [
          { name: "Karpagam University", distanceTime: "Just Behind" },
          { name: "Karpagam Medical College & Hospital", distanceTime: "3–5 mins" },
          { name: "Hindusthan College of Arts & Science", distanceTime: "5–7 mins" },
          { name: "Rathinam University", distanceTime: "5–8 mins" },
          { name: "Coimbatore Marine College", distanceTime: "5–8 mins" },
          { name: "Christ The King Polytechnic College", distanceTime: "7–10 mins" },
          { name: "GEDEE Public School", distanceTime: "5–7 mins" },
          { name: "Zion Model Public School", distanceTime: "5–8 mins" },
          { name: "Avatar Public School", distanceTime: "8–10 mins" },
          { name: "Genius Kids International School", distanceTime: "8–10 mins" }
        ]
      },
      {
        category: "Near Major Employment Hubs",
        iconName: "Briefcase",
        items: [
          { name: "SIDCO Industrial Estate", distanceTime: "5–8 mins" },
          { name: "L&T IT Park", distanceTime: "2.2 km (5 mins)" },
          { name: "Rathinam Tech Park", distanceTime: "3 km (6 mins)" },
          { name: "Coimbatore Golf Club", distanceTime: "8–10 mins" }
        ]
      },
      {
        category: "Healthcare & Landmarks",
        iconName: "HeartPulse",
        items: [
          { name: "Karpagam Medical College & Hospital", distanceTime: "3–5 mins" },
          { name: "Eachanari Vinayagar Temple", distanceTime: "2.5 km (5 mins)" }
        ]
      }
    ],
    description: "Own your dream plot in Rathna Residency, a premium DTCP-approved gated community located in one of Coimbatore's fastest-growing residential and IT corridors. Situated behind Karpagam University in Malumichampatty (Future Corporation Limit) and only 650 meters from Pollachi Road. Featuring 33-ft blacktop roads, grand entrance arch, individual water and electricity connections, and solar street lights, Rathna Residency offers exceptional connectivity to the future 6-track L&T Bypass, L&T IT Park, Rathinam Tech Park, and prestigious educational institutions. With its Future Corporation Limit status, this project offers high future appreciation potential at a launch price of just ₹12.5 Lakhs per Cent.",
    highlights: [
      "Prime Location in the Future Corporation Limit (Behind Karpagam University)",
      "Launch Price: Just ₹12.5 Lakhs per Cent",
      "DTCP-Approved Gated Layout with Grand Entrance Arch",
      "33-ft Wide Blacktop Roads with Stormwater Drainage",
      "Individual Water Connection & Electricity Connection",
      "Solar Street Lights & Peaceful Residential Environment",
      "Pollachi Road – 650 m • Future 6-Track L&T Bypass – 1.2 km",
      "Minutes from L&T IT Park (2.2 km), Rathinam Tech Park (3 km) & SIDCO Industrial Estate",
      "Surrounded by Karpagam, Hindusthan, Rathinam & Top Public Schools",
      "Ideal for Dream Home, Rental Income & Long-Term Investment with High Appreciation"
    ],
    instagramReels: [
      {
        id: "Db8X_DGN4rV",
        url: "https://www.instagram.com/reel/Db8X_DGN4rV/?stkn=ZnBnaXVqc3B4Nmtp",
        embedUrl: "https://www.instagram.com/reel/Db8X_DGN4rV/embed/",
        title: "Malumichampatty-la Ungaloda Dream Land! Prime Location & Great Connectivity",
        shortTitle: "Malumichampatty Dream Land Tour",
        category: "Site Tour",
        thumbnail: "/images/reels/Db8X_DGN4rV.jpg",
        viewsBadge: "Site Walkthrough",
        highlight: "Prime location behind Karpagam University, future corporation limit, 33-ft wide blacktop roads, and high appreciation potential."
      },
      {
        id: "DdtXwmetl5a",
        url: "https://www.instagram.com/reel/DdtXwmetl5a/?stkn=MXF3bmI5Njc2M3Ftbg==",
        embedUrl: "https://www.instagram.com/reel/DdtXwmetl5a/embed/",
        title: "Malumichampatti DTCP Site Booking Celebration",
        shortTitle: "Malumichampatti Land Booking",
        category: "Client Satisfaction",
        thumbnail: "/images/reels/DdtXwmetl5a.jpg",
        viewsBadge: "Client Review",
        highlight: "Delighted homebuyers celebrating their DTCP approved plot booking in prime Malumichampatti at Rathna Residency.",
        isClientSatisfaction: true
      }
    ]
  }
];

// Compatibility aliases for legacy IDs
const idAliases: Record<string, string> = {
  "kalampalayam-area": "sri-aanandham-avenue",
  "green-fields-layout": "kandhan-avenue",
  "royal-palms-residency-plot-14": "sri-aanandham-avenue",
  "grand-orchard-plot-08": "kandhan-avenue",
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
