export interface InstagramReel {
  id: string;
  url: string;
  embedUrl: string;
  title: string;
  shortTitle: string;
  category: string;
  location: string;
  thumbnail: string;
  viewsBadge: string;
  highlight: string;
  isClientSatisfaction?: boolean;
}

export const instagramAccount = {
  name: "Latitude Properties",
  handle: "@latitude_properties",
  url: "https://www.instagram.com/latitude_properties/",
  reelsUrl: "https://www.instagram.com/latitude_properties/reels/",
};

/**
 * 8 Official Latitude Properties Instagram Reels:
 *
 * Ordered specifically so that when the carousel loads with activeIndex = 1:
 * - Central card (index 1): DdtXwmetl5a (Client Satisfaction: Malumichampatti Land Booking)
 * - First Left (index 0): Ddv4l1TN2Hp (Client Satisfaction: Customer Investment Review)
 * - First Right (index 2): DeCCc-6NYfE (Client Satisfaction: Madhampatti Site 15 Handover)
 *
 * Followed by project tours, villas, and launch reels:
 * - Db8X_DGN4rV: Malumichampatty Dream Land Tour
 * - DbigrPONjte: 2 BHK House from ₹5L On-Hand
 * - DaKupuWvKW_: Madhampatty Luxury Villas & Plots
 * - Dd_Zk4CtGc4: Rathna Residency Grand Launch
 * - DeJtr9btxao: Coimbatore Prime Land Investment Corridors
 */
export const officialReels: InstagramReel[] = [
  // 1. First Left (Index 0): Client Satisfaction
  {
    id: "Ddv4l1TN2Hp",
    url: "https://www.instagram.com/reel/Ddv4l1TN2Hp/?stkn=MWU3MTVhOHF3N3R6cg==",
    embedUrl: "https://www.instagram.com/reel/Ddv4l1TN2Hp/embed/",
    title: "Customer Site Review & Real Land Investment Experience",
    shortTitle: "Customer Review: Investment Experience",
    category: "Client Satisfaction",
    location: "Coimbatore Sites",
    thumbnail: "/images/reels/Ddv4l1TN2Hp.jpg",
    viewsBadge: "Client Satisfaction",
    highlight: "Direct buyer feedback on spot documentation, DTCP sanction, and hassle-free clear title handover.",
    isClientSatisfaction: true,
  },

  // 2. Center Card (Index 1): Client Satisfaction
  {
    id: "DdtXwmetl5a",
    url: "https://www.instagram.com/reel/DdtXwmetl5a/?stkn=MXF3bmI5Njc2M3Ftbg==",
    embedUrl: "https://www.instagram.com/reel/DdtXwmetl5a/embed/",
    title: "Malumichampatti DTCP Site Booking Celebration",
    shortTitle: "Malumichampatti Land Booking",
    category: "Client Satisfaction",
    location: "Malumichampatty, Coimbatore",
    thumbnail: "/images/reels/DdtXwmetl5a.jpg",
    viewsBadge: "Client Satisfaction",
    highlight: "Delighted homebuyers celebrating their DTCP approved plot booking in prime Malumichampatti.",
    isClientSatisfaction: true,
  },

  // 3. First Right (Index 2): Client Satisfaction
  {
    id: "DeCCc-6NYfE",
    url: "https://www.instagram.com/reel/DeCCc-6NYfE/?stkn=eWhxbXR4ZW40eHp0",
    embedUrl: "https://www.instagram.com/reel/DeCCc-6NYfE/embed/",
    title: "Madhampatti Site 15 Client Handover & Happiness",
    shortTitle: "Madhampatti Site 15 Handover",
    category: "Client Satisfaction",
    location: "Madhampatti, Coimbatore",
    thumbnail: "/images/reels/DeCCc-6NYfE.jpg",
    viewsBadge: "Client Satisfaction",
    highlight: "Happy buyer receiving clear Patta documents and immediate possession for Madhampatti Site 15.",
    isClientSatisfaction: true,
  },

  // 4. Index 3: Malumichampatty Dream Land Tour
  {
    id: "Db8X_DGN4rV",
    url: "https://www.instagram.com/reel/Db8X_DGN4rV/?stkn=ZnBnaXVqc3B4Nmtp",
    embedUrl: "https://www.instagram.com/reel/Db8X_DGN4rV/embed/",
    title: "Malumichampatty-la Ungaloda Dream Land! Prime Location & Great Connectivity",
    shortTitle: "Malumichampatty Dream Land Tour",
    category: "Site Tour",
    location: "Malumichampatty, Coimbatore",
    thumbnail: "/images/reels/Db8X_DGN4rV.jpg",
    viewsBadge: "Trending Tour",
    highlight: "Prime location, smart investment opportunity, wide blacktop roads, and Siruvani drinking water.",
  },

  // 5. Index 4: Budget Individual House
  {
    id: "DbigrPONjte",
    url: "https://www.instagram.com/reel/DbigrPONjte/?stkn=emo3cXVncGZ1aHo4",
    embedUrl: "https://www.instagram.com/reel/DbigrPONjte/embed/",
    title: "₹5 லட்சத்தில் உங்கள் சொந்த 2 BHK வீடு - 80% Bank Loan Assistance",
    shortTitle: "₹5L On-Hand 2 BHK Individual House",
    category: "Budget Homes",
    location: "Coimbatore Corridors",
    thumbnail: "/images/reels/DbigrPONjte.jpg",
    viewsBadge: "Value Deal",
    highlight: "Stop paying rent! Own a 2 BHK individual house starting from just ₹5 Lakhs on-hand with 80% loan assistance.",
  },

  // 6. Index 5: Madhampatti Luxury Villas & DTCP Plots
  {
    id: "DaKupuWvKW_",
    url: "https://www.instagram.com/reel/DaKupuWvKW_/?stkn=MXU0MWVjbjBrYXZvZA==",
    embedUrl: "https://www.instagram.com/reel/DaKupuWvKW_/embed/",
    title: "Madhampatty 2 BHK (₹45L) & 3 BHK (₹49L) | 700m from Bus Stop & Western Ring Road",
    shortTitle: "Madhampatty Villas & Plots",
    category: "Villa Walkthrough",
    location: "Madhampatti, Coimbatore",
    thumbnail: "/images/reels/DaKupuWvKW_.jpg",
    viewsBadge: "Popular",
    highlight: "Plots from ₹11.90L/cent, 2 BHK from ₹45L, 30ft tar road, solar lights, and Western Ring Road proximity.",
  },

  // 7. Index 6: Rathna Residency Grand Launch
  {
    id: "Dd_Zk4CtGc4",
    url: "https://www.instagram.com/reel/Dd_Zk4CtGc4/",
    embedUrl: "https://www.instagram.com/reel/Dd_Zk4CtGc4/embed/",
    title: "Rathna Residency Grand Launch behind Karpagam University - Just ₹12.5L/Cent",
    shortTitle: "Rathna Residency Launch Tour",
    category: "Grand Launch",
    location: "Malumichampatty, Future Corp Limit",
    thumbnail: "/images/reels/Dd_Zk4CtGc4.jpg",
    viewsBadge: "Grand Launch",
    highlight: "650m to Pollachi Road, 1.2km to 6-Track L&T Bypass, 33-ft blacktop roads, grand entrance arch, and solar lights.",
  },

  // 8. Index 7: Coimbatore Prime Land Locations Tour
  {
    id: "DeJtr9btxao",
    url: "https://www.instagram.com/reel/DeJtr9btxao/",
    embedUrl: "https://www.instagram.com/reel/DeJtr9btxao/embed/",
    title: "Coimbatore Top Prime Residential Land Investment Corridors",
    shortTitle: "Top Coimbatore Land Corridors",
    category: "Investment Guide",
    location: "Coimbatore Region",
    thumbnail: "/images/reels/DeJtr9btxao.jpg",
    viewsBadge: "Advisor Pick",
    highlight: "High-growth residential belts, rapid capital appreciation analysis, and 100% DTCP sanctioned land tours.",
  },
];
