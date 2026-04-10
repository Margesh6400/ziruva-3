export interface Product {
  id: string;
  name: string;
  collection: string;
  price: string;
  tier: string;
  image: string;
  alt: string;
  bg: string;
  category: string;
  specs: {
    material: string;
    hardware: string;
    dimensions: string;
    origin: string;
    serial: string;
  };
  narrative: string;
  variants?: {
    color: string;
    image: string;
    label: string;
  }[];
}

export const products: Product[] = [
  {
    id: "la-lune",
    name: "La Lune",
    collection: "L'Édition",
    price: "£ 445",
    tier: "L'Édition · Limited",
    image: "/images/la-lune-attached.jpg",
    alt: "ZIRUVA La Lune — Cognac Moon Bag with Gold Chain",
    bg: "#F2EDE8",
    category: "Limited",
    specs: {
      material: "Smooth Box Calf Leather in Cognac",
      hardware: "18k Gold Plated Interlocking Chain Links",
      dimensions: "24cm x 18cm x 7cm",
      origin: "Florence, Italy",
      serial: "ZR.ED-LN.001"
    },
    narrative: "A lunar-inspired silhouette defined by its architectural curve and signature interlocking gold chain detail. La Lune represents the pinnacle of celestial minimalism, now featured in a rich, heritage cognac leather."
  },
  {
    id: "la-prisme",
    name: "La Prisme",
    collection: "Hero",
    price: "£ 425",
    tier: "Hero · 999 Numbered",
    image: "/images/la-prisme-new.png",
    alt: "ZIRUVA La Prisme — Ivory Multi-Prism Satchel",
    bg: "#FDFCFB",
    category: "Hero",
    specs: {
      material: "Grade A Box Calfskin & Leather Intarsia",
      hardware: "18k Gold Plated Pillars",
      dimensions: "28cm x 20cm x 10cm",
      origin: "Tuscany, Italy",
      serial: "ZR.HR-PR.002"
    },
    narrative: "A prismatic masterpiece of artisanal precision. La Prisme features an intricate intarsia of multi-colored leather triangles on a heritage ivory base, creating a silhouette that is both avant-garde and timeless.",
    variants: [
      { color: "#FDFCFB", image: "/images/la-prisme-new.png", label: "Ivory Multi-Prism" },
      { color: "#1A1A1A", image: "/images/la-prisme1-new.png", label: "Noir Gold-Prism" }
    ]
  },
  {
    id: "la-barre",
    name: "La Barre",
    collection: "Hero",
    price: "£ 375",
    tier: "Hero · 999 Numbered",
    image: "/images/la-barre-attached.jpg",
    alt: "ZIRUVA La Barre — Two-Tone Teal & Ivory Tote",
    bg: "#FDFBFA",
    category: "Hero",
    specs: {
      material: "Full-Grain Pebbled & Smooth Calf Leather",
      hardware: "18k Gold Plated Pillar Accents",
      dimensions: "32cm x 26cm x 12cm",
      origin: "Veneto, Italy",
      serial: "ZR.HR-BR.003"
    },
    narrative: "A study in architectural verticality and color theory. La Barre pairs a pristine ivory body with deep teal pebbled leather accents, defined by its signature gold-plated pillar handles."
  },
  {
    id: "la-douce",
    name: "La Douce",
    collection: "La Signature",
    price: "£ 355",
    tier: "Signature · Essential",
    image: "/images/la-douce-attached.jpg",
    alt: "ZIRUVA La Douce — Brown Croc-Embossed Tote",
    bg: "#F2EDE8",
    category: "Signature",
    specs: {
      material: "Cognac Croc-Embossed Vachetta",
      hardware: "Polished Silver Logo Plaque",
      dimensions: "36cm x 28cm x 15cm",
      origin: "Tuscany, Italy",
      serial: "ZR.SI-DC.004"
    },
    narrative: "A tactile masterpiece of classic sophistication. La Douce captures the essence of luxury with its rich cognac croc-embossed Vachetta leather and refined architectural silhouette."
  },
  {
    id: "la-peau",
    name: "La Peau",
    collection: "La Signature",
    price: "£ 345",
    tier: "Signature · Essential",
    image: "/images/la-peau-attached.jpg",
    alt: "ZIRUVA La Peau — Two-Tone Black & Ivory Tote",
    bg: "#FDFCFB",
    category: "Signature",
    specs: {
      material: "Full-Grain Pebbled Ivory & Smooth Noir Leather",
      hardware: "Polished Gold-Foil Branding",
      dimensions: "30cm x 24cm x 13cm",
      origin: "Tuscany, Italy",
      serial: "ZR.SI-PE.005"
    },
    narrative: "A visual definition of contrast. La Peau explores the interplay between light and dark, pairing a pristine ivory pebble-grain body with deep noir leather accents and artisanal gold-foil detailing."
  },
  {
    id: "l-arc",
    name: "L'Arc",
    collection: "La Signature",
    price: "£ 325",
    tier: "Signature · Essential",
    image: "/images/l-arc-hero.jpg",
    alt: "ZIRUVA L'Arc — Taupe Crescent Moon Bag",
    bg: "#E8E4E1",
    category: "Signature",
    specs: {
      material: "Smooth Semi-Aniline Leather in Taupe",
      hardware: "Discrete Gold-Plated Zippers & Buckles",
      dimensions: "22cm x 16cm x 6cm",
      origin: "Veneto, Italy",
      serial: "ZR.SI-AR.006"
    },
    narrative: "The crescent redefined. L'Arc balances a sleek, modern curve with a minimalist taupe aesthetic. This edition features an integrated strap pouch for seamless urban utility."
  },
  {
    id: "la-toile",
    name: "La Toile",
    collection: "La Signature",
    price: "£ 310",
    tier: "Signature · Essential",
    image: "/images/la-toile-attached.jpg",
    alt: "ZIRUVA La Toile — Deep Burgundy Leather Tote",
    bg: "#F2EDE8",
    category: "Signature",
    specs: {
      material: "Full-Grain Box Calf Leather in Deep Burgundy",
      hardware: "Gold-Plated Handle Links",
      dimensions: "40cm x 30cm x 18cm",
      origin: "Veneto, Italy",
      serial: "ZR.SI-TL.007"
    },
    narrative: "A study in depth and silhouette. La Toile is reimagined in a rich, seasonal deep burgundy leather, balancing a classic tote form with modern structural integrity and sophisticated gold-plated accents."
  }
];
