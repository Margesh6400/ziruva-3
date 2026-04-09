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
    image: "/images/la-lune.png",
    alt: "ZIRUVA La Lune — Gold Hardware Moon Bag",
    bg: "#ECEAE7",
    category: "Limited",
    specs: {
      material: "Smooth Box Calf Leather",
      hardware: "18k Gold Plated Brass",
      dimensions: "24cm x 18cm x 7cm",
      origin: "Florence, Italy",
      serial: "ZR.ED-LN.001"
    },
    narrative: "A lunar-inspired silhouette defined by its architectural curve and signature gold-plated hardware. La Lune is a centerpiece of our limited L'Édition series, representing the pinnacle of celestial minimalism."
  },
  {
    id: "la-prisme",
    name: "La Prisme",
    collection: "Hero",
    price: "£ 395",
    tier: "Hero · 999 Numbered",
    image: "/images/la-prisme-teal.png",
    alt: "ZIRUVA La Prisme — Geometric Satchel",
    bg: "#F2F0ED",
    category: "Hero",
    specs: {
      material: "Grade A Box Calfskin",
      hardware: "Brushed Nickel Pillars",
      dimensions: "28cm x 20cm x 10cm",
      origin: "Tuscany, Italy",
      serial: "ZR.HR-PR.002"
    },
    narrative: "The architectural anchor of our Hero collection. La Prisme utilizes sharp geometric angles and a structured satchel form to create a silhouette that is both avant-garde and timeless.",
    variants: [
      { color: "#3A7D7E", image: "/images/la-prisme-teal.png", label: "Teal & Ivory" },
      { color: "#800020", image: "/images/la-prisme-burgundy.jpg", label: "Burgundy & Ivory" }
    ]
  },
  {
    id: "la-barre",
    name: "La Barre",
    collection: "Hero",
    price: "£ 375",
    tier: "Hero · 999 Numbered",
    image: "/images/la-barre.png",
    alt: "ZIRUVA La Barre — Structured Two-Tone Tote",
    bg: "#E6E3DF",
    category: "Hero",
    specs: {
      material: "Full-Grain Pebbled & Smooth Leather",
      hardware: "Subtle Gunmetal Accents",
      dimensions: "32cm x 26cm x 12cm",
      origin: "Veneto, Italy",
      serial: "ZR.HR-BR.003"
    },
    narrative: "A study in verticality and contrast. This structured two-tone tote features cleanly defined lines and a sophisticated interplay of ivory and charcoal leather tones."
  },
  {
    id: "la-douce",
    name: "La Douce",
    collection: "La Signature",
    price: "£ 355",
    tier: "Signature · Essential",
    image: "/images/la-douce.png",
    alt: "ZIRUVA La Douce — Soft Leather Tote",
    bg: "#F0EFEB",
    category: "Signature",
    specs: {
      material: "Milled Nappa Pebble Leather",
      hardware: "Discrete Magnetic Closure",
      dimensions: "36cm x 28cm x 15cm",
      origin: "Tuscany, Italy",
      serial: "ZR.SI-DC.004"
    },
    narrative: "Effortless elegance in every fold. La Douce is crafted from our softest milled pebble leather, designed to drape naturally while maintaining its sophisticated presence."
  },
  {
    id: "la-peau",
    name: "La Peau",
    collection: "La Signature",
    price: "£ 345",
    tier: "Signature · Essential",
    image: "/images/la-peau.png",
    alt: "ZIRUVA La Peau — Croc Embossed Tote",
    bg: "#EDE7DC",
    category: "Signature",
    specs: {
      material: "Croc-Embossed Vachetta",
      hardware: "Polished Antique Brass",
      dimensions: "30cm x 24cm x 13cm",
      origin: "Tuscany, Italy",
      serial: "ZR.SI-PE.005"
    },
    narrative: "Texture as a statement. La Peau features premium croc-embossed Vachetta leather in a deep espresso hue, bringing a rich tactile dimension to our classic tote silhouette."
  },
  {
    id: "l-arc",
    name: "L'Arc",
    collection: "La Signature",
    price: "£ 325",
    tier: "Signature · Essential",
    image: "/images/l-arc.png",
    alt: "ZIRUVA L'Arc — Crescent Moon Bag",
    bg: "#E8E6E3",
    category: "Signature",
    specs: {
      material: "Smooth Semi-Aniline Leather",
      hardware: "Minimalist Silver Clasp",
      dimensions: "22cm x 16cm x 6cm",
      origin: "Veneto, Italy",
      serial: "ZR.SI-AR.006"
    },
    narrative: "The crescent redefined. L'Arc balances a sleek, modern curve with a minimalist aesthetic, designed as the perfect companion for the transitioning urban landscape."
  },
  {
    id: "la-toile",
    name: "La Toile",
    collection: "La Signature",
    price: "£ 310",
    tier: "Signature · Essential",
    image: "/images/la-toile.png",
    alt: "ZIRUVA La Toile — Canvas Tote",
    bg: "#F2F0ED",
    category: "Signature",
    specs: {
      material: "Heavy-Weight Natural Canvas & Calfskin",
      hardware: "Reinforced Brass Rivets",
      dimensions: "40cm x 30cm x 18cm",
      origin: "Veneto, Italy",
      serial: "ZR.SI-TL.007"
    },
    narrative: "The intersection of durability and luxury. Our heavy-weight natural canvas is elevated with hand-painted leather trim, creating an essential piece for refined utility."
  }
];
