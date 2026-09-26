export const site = {
  name: "Latitude Properties",
  tagline: "Your Trusted Property Partner",
  phonePrimary: "93634 39993",
  phonePrimaryTel: "+919363439993",
  phoneAlternate: "96001 66116",
  phoneAlternateTel: "+919600166116",
  address: {
    line1: "2/350, Siruvani Main Road, Durga Nagar,",
    line2: "Kalampalayam, Coimbatore, Theethipalayam,",
    line3: "Tamil Nadu 641010",
    full: "Latitude Properties, 2/350, Siruvani Main Road, Durga Nagar, Kalampalayam, Coimbatore, Tamil Nadu 641010",
  },
  whatsappNumber: "919363439993",
  defaultWhatsappMessage:
    "Hello Latitude Properties, I visited your website and would like to know more about your available sites and layout plots in Coimbatore.",
};

export function buildWhatsappLink(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function buildMapsLink() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    site.address.full
  )}`;
}
