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
}

export const products: Product[] = [
  {
    id: "la-signature-ivoire",
    name: "La Signature Ivoire",
    collection: "La Signature",
    price: "£ 240",
    tier: "Signature · Core Icon",
    image: "/images/bag-ivory-teal.png",
    alt: "ZIRUVA La Signature Ivoire — Ivory with Teal Handles",
    bg: "#ECEAE7",
    category: "Signature",
    specs: {
      material: "Grade A Full-Grain Calfskin",
      hardware: "Bespoke Solid Brass",
      dimensions: "28cm x 22cm x 12cm",
      origin: "Tuscany, Italy",
      serial: "ZR.SI-001.IV"
    },
    narrative: "The definitive ZIRUVA silhouette. Designed for the modern observer, La Signature Ivoire balances architectural rigidity with the soft tactile character of handcrafted leather."
  },
  {
    id: "l-edition-noire",
    name: "L'Édition Noire",
    collection: "L'Édition",
    price: "£ 420",
    tier: "L'Édition · Limited",
    image: "/images/bag-ivory-black.png",
    alt: "ZIRUVA L'Édition Noire — Ivory & Black Structured Tote",
    bg: "#E6E3DF",
    category: "Limited",
    specs: {
      material: "Smooth Box Calf Leather",
      hardware: "Brushed Gunmetal Brass",
      dimensions: "34cm x 26cm x 14cm",
      origin: "Veneto, Italy",
      serial: "ZR.ED-002.BK"
    },
    narrative: "A study in monochromatic contrast. L'Édition Noire represents the peak of our atelier's structural experimentation, featuring triple-painted edges and a seamless handle transition."
  },
  {
    id: "la-croco-fauve",
    name: "La Croco Fauve",
    collection: "L'Édition",
    price: "£ 480",
    tier: "L'Édition · 30 Pieces",
    image: "/images/bag-brown-croc.png",
    alt: "ZIRUVA La Croco Fauve — Brown Crocodile Leather",
    bg: "#EDE7DC",
    category: "Limited",
    specs: {
      material: "Croc-Embossed Vachetta",
      hardware: "Antique Polished Brass",
      dimensions: "30cm x 24cm x 13cm",
      origin: "Tuscany, Italy",
      serial: "ZR.CR-003.BR"
    },
    narrative: "Exotic texture meets traditional form. The Croco Fauve is limited to just 30 pieces worldwide, each hand-cut to ensure perfect pattern alignment across the body."
  },
  {
    id: "le-cabas-classique",
    name: "Le Cabas Classique",
    collection: "La Signature",
    price: "£ 310",
    tier: "Signature · Essential",
    image: "/images/bag-ivory-teal.png",
    alt: "ZIRUVA Le Cabas Classique",
    bg: "#F2F0ED",
    category: "Signature",
    specs: {
      material: "Milled Pebble Leather",
      hardware: "Rose Gold Brass",
      dimensions: "40cm x 30cm x 18cm",
      origin: "Tuscany, Italy",
      serial: "ZR.CC-004.CL"
    },
    narrative: "The expansive day tote redefined. Le Cabas provides generous volume without sacrificing the signature ZIRUVA silhouette."
  },
  {
    id: "l-enveloppe-soiree",
    name: "L'Enveloppe Soirée",
    collection: "L'Édition",
    price: "£ 180",
    tier: "Signature · Night",
    image: "/images/story-detail.png",
    alt: "ZIRUVA L'Enveloppe Soirée — Minimalist Evening Clutch",
    bg: "#E8E6E3",
    category: "Signature",
    specs: {
      material: "Satin-Finish Nappa Leather",
      hardware: "Discreet Magnetic Closure",
      dimensions: "22cm x 14cm x 2cm",
      origin: "Florence, Italy",
      serial: "ZR.ES-005.NV"
    },
    narrative: "A study in sleek minimalism. L'Enveloppe Soirée is designed for the transition from afternoon gallery visits to late-night soirées."
  },
  {
    id: "le-portefeuille-archiviste",
    name: "Le Portefeuille Archiviste",
    collection: "La Maison",
    price: "£ 120",
    tier: "Archive · Essential",
    image: "/images/bag-ivory-black.png",
    alt: "ZIRUVA Le Portefeuille Archiviste",
    bg: "#F0EFEB",
    category: "Signature",
    specs: {
      material: "Smooth Grain Bovine Leather",
      hardware: "Signature Foil Stamp",
      dimensions: "19cm x 10cm x 1cm",
      origin: "Tuscany, Italy",
      serial: "ZR.PA-006.ES"
    },
    narrative: "Precision engineering applied to personal carry. Eight card slots and dual cash compartments in a profile less than 1cm thick."
  },
  {
    id: "le-petit-sac-structure",
    name: "Le Petit Sac Structure",
    collection: "L'Édition",
    price: "£ 360",
    tier: "Edition · Limited Release",
    image: "/images/bag-brown-croc.png",
    alt: "ZIRUVA Le Petit Sac Structure",
    bg: "#EBE8E3",
    category: "Limited",
    specs: {
      material: "Reinforced Textured Calfskin",
      hardware: "Polished Gold Pillars",
      dimensions: "18cm x 15cm x 10cm",
      origin: "Veneto, Italy",
      serial: "ZR.PS-007.LR"
    },
    narrative: "Micro-proportions with macro-presence. Designed as an architectural object first, and a vessel second."
  }
];
