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
    lining: string;
    strap: string;
    closure: string;
    interior: string;
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
    alt: "ZIRUVA La Lune Luxury Leather Moon Bag — Handcrafted Cognac Genuine Calf Leather Handbag with 18k Gold Chain, Designed in London",
    bg: "#F2EDE8",
    category: "Limited",
    specs: {
      material: "Full-Grain Box Calf Leather in Heritage Cognac",
      hardware: "18k Gold-Plated Sculptural Interlocking Links",
      dimensions: "24cm x 18cm x 7cm",
      origin: "Florence, Italy · Atelier No. 4",
      serial: "ZR.ED-LN.001-A",
      lining: "Sustainable Mushroom-Derived Vegan Suede",
      strap: "Adjustable 18k Gold-Plated Chain (50cm drop)",
      closure: "Discreet Magnetic Arch Closure",
      interior: "One main compartment with a gold-foil embossed slip pocket"
    },
    narrative: "A lunar-inspired silhouette defined by its architectural curve and signature interlocking gold chain detail. La Lune represents the pinnacle of celestial minimalism, handcrafted from Grade-A heritage cognac calfskin that develops a rich patina over a lifetime.",
    variants: [
      { color: "#8B4513", image: "/images/la-lune-attached.jpg", label: "Heritage Cognac" },
      { color: "#1A1A1A", image: "/images/bag-ivory-black.png", label: "Noir Midnight" }
    ]
  },
  {
    id: "la-prisme",
    name: "La Prisme",
    collection: "Hero",
    price: "£ 425",
    tier: "Hero · 999 Numbered",
    image: "/images/la-prisme-new.png",
    alt: "ZIRUVA La Prisme Ivory Multi-Prism Leather Satchel — Limited Edition Luxury Handcrafted Tote Bag with 18k Gold Pillars",
    bg: "#FDFCFB",
    category: "Hero",
    specs: {
      material: "Hand-Cut Leather Intarsia on Box Calfskin Base",
      hardware: "18k Gold-Plated Architectural Pillars",
      dimensions: "28cm x 20cm x 10cm",
      origin: "Tuscany, Italy · Master Workshop",
      serial: "ZR.HR-PR.002-B",
      lining: "Nappa Leather Lining in Dusty Rose",
      strap: "Removable Tapered Leather Crossbody Strap",
      closure: "Signature Pillar Twist-Lock Mechanism",
      interior: "Two accordion compartments with a central zippered divider"
    },
    narrative: "A prismatic masterpiece of artisanal precision. La Prisme features an intricate intarsia of multi-colored leather triangles, each hand-cut and bonded to a heritage ivory base, creating a silhouette that is both avant-garde and timelessly structured.",
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
    alt: "ZIRUVA La Barre Two-Tone Teal and Ivory Designer Tote — Architectural Full-Grain Luxury Leather Handbag for Women",
    bg: "#FDFBFA",
    category: "Hero",
    specs: {
      material: "Pebbled & Smooth Calf Leather Dual-Tones",
      hardware: "18k Gold-Plated Vertical Handle Bars",
      dimensions: "32cm x 26cm x 12cm",
      origin: "Veneto, Italy · Specialized Tannery",
      serial: "ZR.HR-BR.003-C",
      lining: "Hand-Stitched Micro-Fiber Suede",
      strap: "Integrated Rigid Handle Bars & Slim Shoulder Strap",
      closure: "Recessed Magnetic Bridge",
      interior: "Expansion side panels with an internal smartphone pocket"
    },
    narrative: "A study in architectural verticality and color theory. La Barre pairs a pristine ivory body with deep teal pebbled leather accents, defined by its signature gold-plated pillar handles that bridge the gap between jewelry and accessory.",
    variants: [
      { color: "#004D4D", image: "/images/la-barre-attached.jpg", label: "Teal & Ivory" },
      { color: "#4E3629", image: "/images/la-douce-attached.jpg", label: "Earth & Sand" }
    ]
  },
  {
    id: "la-douce",
    name: "La Douce",
    collection: "La Signature",
    price: "£ 355",
    tier: "Signature · Essential",
    image: "/images/la-douce-attached.jpg",
    alt: "ZIRUVA La Douce Brown Croc-Embossed Tote Bag — Classic Cognac Luxury Vachetta Leather Shoulder Bag, Made in Italy",
    bg: "#F2EDE8",
    category: "Signature",
    specs: {
      material: "Cognac Croc-Embossed Vachetta Leather",
      hardware: "Polished Palladium Logo Plaque",
      dimensions: "36cm x 28cm x 15cm",
      origin: "Tuscany, Italy · Heritage Tannery",
      serial: "ZR.SI-DC.004-D",
      lining: "Raw Suede Interior Finish",
      strap: "Dual Flat Shoulder Straps (28cm drop)",
      closure: "Hand-Finished Leather Toggle",
      interior: "Spacious unlined interior with a removable leather zip pouch"
    },
    narrative: "A tactile masterpiece of classic sophistication. La Douce captures the essence of luxury with its rich cognac croc-embossed Vachetta leather and refined architectural silhouette, designed to be the ultimate companion for the discerning urbanite.",
    variants: [
      { color: "#4E3629", image: "/images/la-douce-attached.jpg", label: "Cognac Croc" },
      { color: "#1A1A1A", image: "/images/la-peau-attached.jpg", label: "Midnight Smooth" }
    ]
  },
  {
    id: "la-peau",
    name: "La Peau",
    collection: "La Signature",
    price: "£ 345",
    tier: "Signature · Essential",
    image: "/images/la-peau-attached.jpg",
    alt: "ZIRUVA La Peau Two-Tone Black and Ivory Tote — Premium Contrast Pebble Grain Leather Handbag with Gold-Foil Details",
    bg: "#FDFCFB",
    category: "Signature",
    specs: {
      material: "Contrast-Grain Pebbled Ivory & Noir Leather",
      hardware: "Artisanal 24k Gold-Foil Embossing",
      dimensions: "30cm x 24cm x 13cm",
      origin: "Tuscany, Italy · Small-Batch Studio",
      serial: "ZR.SI-PE.005-E",
      lining: "Noir Cotton-Silk Twill",
      strap: "Reinforced Leather Top Handles",
      closure: "Magnetic Tab Closure",
      interior: "Two slip pockets and one secure internal zip pocket"
    },
    narrative: "A visual definition of contrast. La Peau explores the interplay between light and dark, pairing a pristine ivory pebble-grain body with deep noir leather accents and artisanal gold-foil detailing that whispers luxury rather than shouting it.",
    variants: [
      { color: "#FFFFFF", image: "/images/la-peau-attached.jpg", label: "Contrast Ivory" },
      { color: "#2F4F4F", image: "/images/la-arc-attached.jpg", label: "Deep Slate" }
    ]
  },
  {
    id: "l-arc",
    name: "L'Arc",
    collection: "La Signature",
    price: "£ 325",
    tier: "Signature · Essential",
    image: "/images/la-arc-attached.jpg",
    alt: "ZIRUVA L'Arc Taupe Crescent Moon Bag — Minimalist Luxury Semi-Aniline Leather Crossbody with Integrated Pouch",
    bg: "#E8E4E1",
    category: "Signature",
    specs: {
      material: "Semi-Aniline Calfskin in Urban Taupe",
      hardware: "Brushed Nickel Zippers & Magnetic Closures",
      dimensions: "22cm x 16cm x 6cm",
      origin: "Veneto, Italy · Modernist Lab",
      serial: "ZR.SI-AR.006-F",
      lining: "Breathable Tech-Linen Lining",
      strap: "Adjustable Webbing & Leather Hybrid Strap",
      closure: "Industrial-Grade Dual Zip System",
      interior: "One main compartment with a built-in cardholder"
    },
    narrative: "The crescent redefined for the modern age. L'Arc balances a sleek, modern curve with a minimalist taupe aesthetic. This edition features an integrated strap pouch and brushed nickel hardware for seamless urban utility.",
    variants: [
      { color: "#9A8F85", image: "/images/la-arc-attached.jpg", label: "Urban Taupe" },
      { color: "#800000", image: "/images/la-toile-attached.jpg", label: "Royal Burgundy" }
    ]
  },
  {
    id: "la-toile",
    name: "La Toile",
    collection: "La Signature",
    price: "£ 310",
    tier: "Signature · Essential",
    image: "/images/la-toile-attached.jpg",
    alt: "ZIRUVA La Toile Deep Burgundy Leather Tote — Sophisticated Large Capacity Luxury Handbag with Gold-Plated Handles",
    bg: "#F2EDE8",
    category: "Signature",
    specs: {
      material: "Full-Grain Box Calf in Seasonal Burgundy",
      hardware: "Gold-Plated Handle Links & Protective Feet",
      dimensions: "40cm x 30cm x 18cm",
      origin: "Veneto, Italy · Tradition Studio",
      serial: "ZR.SI-TL.007-G",
      lining: "Burgundy Grosgrain Fabric",
      strap: "Circular Gold-Plated Metal Handles",
      closure: "Open-Top with Internal Security Clip",
      interior: "Large capacity interior with a suspended leather pocket"
    },
    narrative: "A study in depth and silhouette. La Toile is reimagined in a rich, seasonal deep burgundy leather, balancing a classic tote form with modern structural integrity and sophisticated gold-plated accents that catch the light with every step.",
    variants: [
      { color: "#800000", image: "/images/la-toile-attached.jpg", label: "Deep Burgundy" },
      { color: "#F2EDE8", image: "/images/la-lune-attached.jpg", label: "Classic Cream" }
    ]
  }
];
