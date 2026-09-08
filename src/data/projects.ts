export type PropertyStatus = "available" | "booked" | "sold";

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
};

export const projects: Project[] = [
  {
    id: "kalampalayam-area",
    tag: "Featured Premium Layout",
    title: "Kalampalayam Area",
    location: "Kalampalayam, Coimbatore",
    type: "Residential Plots & Independent Villas",
    status: "available",
    amenities: "Wide Roads, Water, Drainage, Solar Lights",
    amenitiesList: [
      { name: "33 Ft Wide Blacktop Road", description: "Heavy-duty tar road with concrete curb borders and storm water culverts", iconName: "Route" },
      { name: "Pure Siruvani Water Line", description: "Individual water tapping provision at every plot threshold", iconName: "Droplets" },
      { name: "Solar Street Lighting", description: "Energy-efficient automatic dusk-to-dawn LED solar lights on every street", iconName: "Sun" },
      { name: "24/7 CCTV & Security Gated Entry", description: "Grand entrance archway with manned boom barrier and surveillance", iconName: "Shield" },
      { name: "Underground Storm Drainage", description: "Concealed heavy-capacity RCC underground sewage and rainwater drainage channel", iconName: "Waves" },
      { name: "Children's Park & Tree Avenue", description: "Landscaped open park with tree-lined walkway and kids play equipment", iconName: "Trees" },
    ],
    img: "https://images.unsplash.com/photo-1524055988636-436cfa46e59e?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1524055988636-436cfa46e59e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
    ],
    specs: {
      plotDimensions: "30 Feet Frontage x 50 Feet Depth",
      totalPlotArea: "1,500 Sq.Ft (3.44 Cents)",
      builtUpArea: "2,250 Sq.Ft (Duplex Villa Option Available)",
      carpetArea: "1,880 Sq.Ft",
      facing: "100% East Facing (Vastu Compliant)",
      roadWidth: "33 Feet Tar Blacktop Road with Paver Footpath",
      approvalNumber: "DTCP: 142/2023 | RERA: TN/11/Layout/0291/2023",
      pattaStatus: "Clear Single-Owner Title & Instant Individual Patta Transfer",
      foundation: "Reinforced Cement Concrete (RCC) Isolated Column Footing down to Hard Rock Strata",
      superstructure: "9-inch First Grade Chamber Red Brick Exterior Walls & 4.5-inch Internal Partition Walls",
      flooring: "Kajaria 4ft x 2ft Polished Glazed Vitrified Tiles with 4-inch Matching Skirting",
      doorsWindows: "Seasoned Teak Wood 8ft Designer Front Door with Godrej 3-Way Lock & German UPVC Windows",
      electricalPlumbing: "Finolex Flame-Retardant Copper Concealed Wiring, Legrand Modular Switches & Jaquar Fittings",
      waterDrainage: "Direct Dedicated Siruvani Municipal Water Connection + Common 500ft Deep Sweet Water Borewell",
      ceilingHeight: "10 Feet 6 Inches Clear Ceiling Height with Weather-proof Double Ceramic Rooftop Tiles"
    },
    originalPrice: 5500000,
    discountPercent: 40,
    offerPrice: 3300000,
    savingsAmount: 2200000,
    ratePerSqFtOriginal: 3666,
    ratePerSqFtOffer: 2200,
    deepavaliOfferValidUntil: "Limited Deepavali Season Celebration Offer",
    view360Image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    view360Title: "Kalampalayam Area 360° Interactive Virtual Tour",
    description: "Nestled right off Siruvani Main Road in Kalampalayam, this premium layout represents the pinnacle of serene living with zero pollution and crystal-pure Siruvani drinking water. Approved under strict DTCP and TN RERA regulations, every plot is equipped with wide blacktop roads, individual water connection provisions, underground electricity conduits, and lush green avenue plantation. Claim our landmark 40% Deepavali festive discount now!",
    highlights: [
      "2 Minutes drive from Siruvani Main Road",
      "Direct Siruvani drinking water facility available",
      "Immediate house construction ready with 85% bank loan support",
      "DTCP and RERA certified clear legal documentation"
    ]
  },
  {
    id: "green-fields-layout",
    tag: "Residential Layout",
    title: "Green Fields Layout",
    location: "Coimbatore",
    type: "Gated Community Plots & Custom Villas",
    status: "available",
    amenities: "Planned Layout, Wide Roads, Connectivity",
    amenitiesList: [
      { name: "40 Ft Grand Entrance Boulevard", description: "Interlocking paver boulevard with royal palm trees and designer street lamps", iconName: "Route" },
      { name: "Underground Power Cabling", description: "No overhead electric wires; complete concealed three-phase electricity line", iconName: "Zap" },
      { name: "Residents Community Park & Arena", description: "Planned layout with open green park, children play zone and walking trails", iconName: "Grid3x3" },
      { name: "24-Hour Armed Security Patrol", description: "Smart RFID access gates, vehicle number plate recognition cameras", iconName: "Shield" },
      { name: "Pure Siruvani & Borewell Supply", description: "Dual pipeline system ensuring continuous round-the-clock water availability", iconName: "Droplets" },
      { name: "Eco-Park & Children Play Area", description: "Rubberized toddler play zone, senior citizen reflexology walkway", iconName: "Trees" }
    ],
    img: "https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80"
    ],
    specs: {
      plotDimensions: "40 Feet Frontage x 60 Feet Depth",
      totalPlotArea: "2,400 Sq.Ft (5.51 Cents)",
      builtUpArea: "3,100 Sq.Ft (Custom 4 BHK Luxury Villa Option)",
      carpetArea: "2,620 Sq.Ft",
      facing: "North-East Corner & North Facing Plots Available",
      roadWidth: "40 Feet Main Arterial Road & 30 Feet Cross Streets",
      approvalNumber: "DTCP: 88/2023 | RERA: TN/11/Layout/0188/2023",
      pattaStatus: "Clear Mother Deed, 30-Year Encumbrance Free with Individual Patta",
      foundation: "Heavy Framed RCC Structure with Fe550D TMT Steel & Ready Mix M25 Concrete",
      superstructure: "Solid Concrete Blocks with Double Coat Waterproof Sand Plastering",
      flooring: "Italian Marble Finish 5ft x 2.5ft Nano Vitrified Slab Flooring",
      doorsWindows: "Solid Burma Teak Entrance Frame with Keyless Biometric Smart Lock & Toughened Glass",
      electricalPlumbing: "Schneider Electric Switches, EV Charging Provision in Garage & Kohler Sanitaryware",
      waterDrainage: "Hydro-pneumatic pressurized water grid with decentralized rainwater harvesting trenches",
      ceilingHeight: "11 Feet Grand Ceiling Height with Double-Height Foyer Living Concept"
    },
    originalPrice: 7500000,
    discountPercent: 40,
    offerPrice: 4500000,
    savingsAmount: 3000000,
    ratePerSqFtOriginal: 3125,
    ratePerSqFtOffer: 1875,
    deepavaliOfferValidUntil: "Limited Deepavali Season Celebration Offer",
    view360Image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80",
    view360Title: "Green Fields Layout 360° Community Panorama",
    description: "An elite gated sanctuary designed for distinguished families desiring unmatched privacy, cool climate from the nearby Western Ghats, and rapid access to Coimbatore city center. Featuring 40-foot tree-shaded boulevards, underground electric distribution, grand clubhouse, and landscaped parks. Enjoy the unprecedented 40% Deepavali festive discount for immediate spot bookings.",
    highlights: [
      "100% Underground electric and internet cabling",
      "Vastu compliant corner and north-facing plots",
      "Instant loan pre-approval by SBI, HDFC & Canara Bank",
      "Huge Deepavali savings of ₹30,00,000 on selected inventory"
    ]
  },
  {
    id: "coimbatore-region-plots",
    tag: "Upcoming Opportunity",
    title: "Coimbatore Region Plots",
    location: "Coimbatore Region",
    type: "Land Investment & Hill-view Plots",
    status: "available",
    amenities: "Approval details available on request",
    amenitiesList: [
      { name: "Scenic Mountain Views", description: "Unobstructed scenic views of the misty green mountain range", iconName: "Compass" },
      { name: "Full Perimeter Fencing & Compound", description: "7-foot high security boundary wall with solar fencing around layout", iconName: "Shield" },
      { name: "30 Ft Blacktop Tar Roads", description: "Smooth motorable bitumen roads with reflective safety cat-eyes", iconName: "Route" },
      { name: "Sweet Drinking Water", description: "Sweet drinking water available at shallow 120ft aquifer depth", iconName: "Droplets" },
      { name: "Avenue Tree Plantation", description: "Every plot includes exotic fruit and medicinal shade trees", iconName: "Trees" },
      { name: "Round-the-Clock Solar Lighting", description: "Stand-alone micro-solar street lamp units along all roadways", iconName: "Sun" }
    ],
    img: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80"
    ],
    specs: {
      plotDimensions: "35 Feet Frontage x 55 Feet Depth",
      totalPlotArea: "1,925 Sq.Ft (4.42 Cents)",
      builtUpArea: "1,800 Sq.Ft (Farmhouse / Villa Spec)",
      carpetArea: "1,520 Sq.Ft",
      facing: "North & East Facing Vastu Options",
      roadWidth: "30 Feet Metal Blacktop Road",
      approvalNumber: "DTCP: 204/2023 | Panchayat Sanctioned",
      pattaStatus: "Single Registered Deed with Verified 40-Year Legal Certificate",
      foundation: "Deep Trench Stone Masonry + Heavy Grade RCC Plinth Beam",
      superstructure: "Engineered Clay Bricks with Moisture-Proof External Polymer Plaster",
      flooring: "Wooden-finish Matte Vitrified Designer Floor Tiles",
      doorsWindows: "Heavy Anodized Aluminium Sliding Windows with Mosquito Nets",
      electricalPlumbing: "Finolex Cables, Anchor Roma Switches, Ashirvad FlowGuard CPVC Pipes",
      waterDrainage: "Individual 2,000L Overhead Sintex Tank with Automatic Level Float System",
      ceilingHeight: "10 Feet Clear Ceiling with Insulated Clay Roof Shingles"
    },
    originalPrice: 4200000,
    discountPercent: 40,
    offerPrice: 2520000,
    savingsAmount: 1680000,
    ratePerSqFtOriginal: 2182,
    ratePerSqFtOffer: 1309,
    deepavaliOfferValidUntil: "Limited Deepavali Season Celebration Offer",
    view360Image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80",
    view360Title: "Coimbatore Region Plots 360° Scenic Mountain Panorama",
    description: "Experience the cool breeze and pure mountain air in the Coimbatore region. Ideal for retirement villas, weekend getaway homes, or high-yield land banking. Complete with wide tar roads, high boundary walls, and tree avenues. Take advantage of our massive 40% Deepavali discount to secure a high-growth asset at an unbeatable price point.",
    highlights: [
      "Breathtaking mountain view and serene calm surroundings",
      "Immediate registration ready with verified Patta",
      "40% Deepavali discount gives direct savings of ₹16,80,000",
      "Perfect for peaceful residence or high appreciation investment"
    ]
  },
  {
    id: "royal-palms-residency-plot-14",
    tag: "Token Received • Registration Pending",
    title: "Royal Palms Residency (Plot #14)",
    location: "Vadavalli - Thondamuthur Link Road, Coimbatore",
    type: "Premium Corner Villa Plot",
    status: "booked",
    amenities: "Corner Plot, 40ft Main Road, Underground Drainage, Park Facing",
    amenitiesList: [
      { name: "Dual Road Corner Access", description: "Front 40ft and Side 30ft two-way road access for premium ventilation", iconName: "Route" },
      { name: "Direct Park Facing", description: "Direct view of the 1-acre central community landscaped garden", iconName: "Trees" },
      { name: "Siruvani Water Tapping", description: "Metered Siruvani water connection active at site", iconName: "Droplets" },
      { name: "DTCP Approved Corner", description: "100% legal compliance with individual sub-division approval", iconName: "Shield" }
    ],
    img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80"
    ],
    specs: {
      plotDimensions: "45 Feet Frontage x 50 Feet Depth",
      totalPlotArea: "2,250 Sq.Ft (5.16 Cents)",
      builtUpArea: "Planned 2,800 Sq.Ft Contemporary Villa",
      carpetArea: "2,400 Sq.Ft",
      facing: "North-East Corner (Double Road Facing)",
      roadWidth: "40 Feet Main Road + 30 Feet Side Road",
      approvalNumber: "DTCP: 310/2023 | RERA: TN/11/Layout/0310/2023",
      pattaStatus: "Token Advance Paid • SRO Registration in Progress",
      foundation: "Heavy Column RCC Footing spec approved",
      superstructure: "Wire-cut Red Bricks",
      flooring: "Italian Marble finish vitrified tiles",
      doorsWindows: "First Quality Teak Wood & UPVC",
      electricalPlumbing: "Finolex / Jaquar Concealed systems",
      waterDrainage: "Siruvani Tap + Underground Drainage",
      ceilingHeight: "10 Feet 6 Inches"
    },
    originalPrice: 6200000,
    discountPercent: 40,
    offerPrice: 3720000,
    savingsAmount: 2480000,
    ratePerSqFtOriginal: 2755,
    ratePerSqFtOffer: 1653,
    deepavaliOfferValidUntil: "Booked under Deepavali Early-Bird Offer",
    view360Image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80",
    view360Title: "Royal Palms Plot #14 360° Virtual Tour",
    description: "A prime North-East corner plot facing the central park at Royal Palms Residency. This property has received a token advance booking under our 40% Deepavali festival pricing and is currently undergoing title deed registration at the Sub-Registrar Office.",
    highlights: [
      "Status: Booked (Token advance received)",
      "Customer: Dr. A. Senthil Kumar & Family",
      "Expected Handover/Registration Date: November 2026",
      "Join the waitlist if this deal doesn't conclude or for adjacent plots"
    ],
    bookedOrSoldNote: "Booked on Sep 2026. Registration process currently underway with HDFC Bank mortgage clearance.",
    handoverDate: "Nov 2026"
  },
  {
    id: "grand-orchard-plot-08",
    tag: "Token Received • Loan Processed",
    title: "Grand Orchard Greens (Plot #08)",
    location: "Kovaipudur Garden Zone, Coimbatore",
    type: "Residential Plot with G+1 Villa Plan",
    status: "booked",
    amenities: "30ft Tar Road, EB Connection, Fully Fenced, Siruvani Water",
    amenitiesList: [
      { name: "30 Ft Blacktop Road", description: "Direct connectivity to Kovaipudur main road", iconName: "Route" },
      { name: "Clear Legal Patta", description: "Single owner document verified by senior advocate", iconName: "Shield" },
      { name: "Borewell & Siruvani Water", description: "Dual water points ready at site", iconName: "Droplets" }
    ],
    img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80"
    ],
    specs: {
      plotDimensions: "30 Feet Frontage x 45 Feet Depth",
      totalPlotArea: "1,350 Sq.Ft (3.10 Cents)",
      builtUpArea: "1,850 Sq.Ft (Villa Blueprint Ready)",
      carpetArea: "1,550 Sq.Ft",
      facing: "East Facing",
      roadWidth: "30 Feet Bitumen Tar Road",
      approvalNumber: "DTCP: 119/2023 | RERA Certified",
      pattaStatus: "Token Advance Paid • Bank Loan Sanctioned",
      foundation: "RCC Footing Structure",
      superstructure: "Country Red Bricks",
      flooring: "Vitrified Glazed Tiles",
      doorsWindows: "Teak Main Door & UPVC",
      electricalPlumbing: "Concealed 3-Phase Havells",
      waterDrainage: "Siruvani + Borewell",
      ceilingHeight: "10 Feet"
    },
    originalPrice: 4800000,
    discountPercent: 40,
    offerPrice: 2880000,
    savingsAmount: 1920000,
    ratePerSqFtOriginal: 3555,
    ratePerSqFtOffer: 2133,
    deepavaliOfferValidUntil: "Locked under 40% Deepavali Campaign",
    view360Image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1600&q=80",
    view360Title: "Grand Orchard Plot #08 360° Virtual Walkthrough",
    description: "A fast-appreciating residential plot in the serene Kovaipudur micro-market, locked with a booking deposit by an NRI client taking advantage of the 40% Deepavali discount.",
    highlights: [
      "Status: Booked (SBI Home Loan Approved)",
      "Purchaser: Mr. Rajesh Kannan",
      "Registration timeline: Within 25 days",
      "Similar adjacent plots opening soon for Phase II"
    ],
    bookedOrSoldNote: "Booked with token advance. Bank loan documentation completed.",
    handoverDate: "Oct 2026"
  },
  {
    id: "ananya-gardens-phase-1",
    tag: "100% Sold Out & Handed Over",
    title: "Ananya Gardens (Phase 1)",
    location: "Siruvani Main Road, Kalampalayam, Coimbatore",
    type: "Completed Residential Gated Layout",
    status: "sold",
    amenities: "Fully Inhabited, Asphalt Roads, Streetlights, Parks, CCTV",
    amenitiesList: [
      { name: "Fully Occupied Gated Colony", description: "32 families already living and enjoying clean surroundings", iconName: "Shield" },
      { name: "Asphalt Roads & Streetlights", description: "Completed infrastructure fully handed over to local panchayat", iconName: "Route" },
      { name: "Active Resident Association", description: "Monthly maintenance and round-the-clock security surveillance", iconName: "Trees" }
    ],
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80"
    ],
    specs: {
      plotDimensions: "Various sizes from 3 Cents to 8 Cents",
      totalPlotArea: "32 Plots Total (Completed Project)",
      builtUpArea: "Multiple Custom Villas Built",
      carpetArea: "100% Occupied",
      facing: "East, North and North-East plots",
      roadWidth: "33 Feet Tar Road with street lighting",
      approvalNumber: "DTCP: 95/2021 | RERA Registered",
      pattaStatus: "100% Individual Pattas Transferred to All 32 Owners",
      foundation: "RCC Column Footing with engineered soil stabilization",
      superstructure: "Red Clay Chamber Bricks",
      flooring: "Vitrified Premium Floorings",
      doorsWindows: "Teak Wood & UPVC",
      electricalPlumbing: "Underground Three-Phase Line",
      waterDrainage: "Siruvani Water Network & Covered Storm Drains",
      ceilingHeight: "10 Feet 6 Inches"
    },
    originalPrice: 4200000,
    discountPercent: 40,
    offerPrice: 2520000,
    savingsAmount: 1680000,
    ratePerSqFtOriginal: 2800,
    ratePerSqFtOffer: 1680,
    deepavaliOfferValidUntil: "Sold Out Landmark Project",
    view360Image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    view360Title: "Ananya Gardens Phase 1 Completed Community 360° View",
    description: "An exceptional success story by Latitude Promoters. All 32 plots were sold out ahead of schedule with 100% on-time legal title transfer, individual patta handovers, and full infrastructure handover. Over 20 houses are now constructed with happy resident families.",
    highlights: [
      "100% Sold Out (32 out of 32 plots delivered)",
      "Zero legal disputes, 100% clean title track record",
      "Handed over to Resident Welfare Association",
      "Notice: Enquire for Phase 2 pre-launch notifications!"
    ],
    bookedOrSoldNote: "Successfully registered and handed over to buyers. 100% sold out.",
    handoverDate: "Completed & Fully Inhabited"
  },
  {
    id: "siruvani-meadows-layout",
    tag: "100% Sold Out & Delivered",
    title: "Siruvani Meadows Layout",
    location: "Theethipalayam / Kalampalayam, Coimbatore",
    type: "Premium Residential Villa Plots",
    status: "sold",
    amenities: "30ft Roads, Solar Lights, Water Connection, Park",
    amenitiesList: [
      { name: "30ft Bitumen Roads", description: "Tar roads with concrete side drains", iconName: "Route" },
      { name: "Siruvani Water", description: "Municipal drinking water connection line delivered", iconName: "Droplets" },
      { name: "Parks & Greenery", description: "Full landscaped area with recreational lawn", iconName: "Trees" }
    ],
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
    ],
    specs: {
      plotDimensions: "30 ft x 40 ft & 30 ft x 50 ft",
      totalPlotArea: "24 Villa Plots Total",
      builtUpArea: "Independent Villas Constructed",
      carpetArea: "100% Delivered",
      facing: "North and East Facing",
      roadWidth: "30 Feet Tar Road",
      approvalNumber: "DTCP: 74/2022 | RERA Approved",
      pattaStatus: "All 24 Registered Deeds with Sub-division Pattas Delivered",
      foundation: "Deep RCC Footing",
      superstructure: "Red Bricks",
      flooring: "Vitrified Tiles",
      doorsWindows: "First Quality Teak & UPVC",
      electricalPlumbing: "Finolex / Jaquar",
      waterDrainage: "Siruvani Connection",
      ceilingHeight: "10 Feet"
    },
    originalPrice: 3800000,
    discountPercent: 40,
    offerPrice: 2280000,
    savingsAmount: 1520000,
    ratePerSqFtOriginal: 2533,
    ratePerSqFtOffer: 1520,
    deepavaliOfferValidUntil: "Successfully Delivered Landmark Project",
    view360Image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
    view360Title: "Siruvani Meadows 360° Completed Layout Tour",
    description: "Siruvani Meadows was fully sold within 45 days of launch. All buyers received individual cleared Pattas, DTCP approvals, and direct access to Siruvani drinking water.",
    highlights: [
      "100% Sold Out (24/24 plots)",
      "High capital value appreciation (>35% in 2 years for early buyers)",
      "Completed infrastructure with tar roads and solar lights",
      "Contact us to receive priority notifications for Phase 2"
    ],
    bookedOrSoldNote: "100% Sold out. Handed over with completed registration and patta.",
    handoverDate: "Completed & Registered"
  }
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getAvailableProjects(): Project[] {
  return projects.filter((p) => p.status === "available");
}

export function getBookedProjects(): Project[] {
  return projects.filter((p) => p.status === "booked");
}

export function getSoldProjects(): Project[] {
  return projects.filter((p) => p.status === "sold");
}

