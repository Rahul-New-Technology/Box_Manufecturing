// Central data source — INDUSTRIAL PACKAGING ONLY.
// Every product carries 4–8 images for gallery zoom. User-uploaded photos used where available.

import { getCategoryDefaultImage, getCategoryImages, PRODUCT_CATEGORIES } from "./imageLoader";

export const COMPANY = {
  name: "GN Packaging",
  tagline: "All Types of Packaging Solutions",
  hero_headline_lines: ["Complete", "Industrial", "Packaging"],
  hero_kicker: "Manufacturer of Corrugated Boxes, Sheets, Rolls, Paper Packaging & Custom Industrial Packaging.",
  address_lines: [
    "Gala No. 18/A, Rahisunnisha Estate",
    "Near Jangleshwar Mandir, JMT Road",
    "Asalpha, Ghatkopar (W), Mumbai — 400084",
  ],
  contacts: [
    { name: "Firoz Khan", phone: "9224622911", role: "New & Old Corrugated Boxes, Imported Boxes, Paper Rolls, Sheets & Packing Materials" },
    { name: "Moinuddin Khan", phone: "9699362465", role: "Sales & Custom Packaging" },
  ],
  email: "gnpackaging786@gmail.com",
  gstin: "27AOKPK4980P1Z2", // GST registered in 2017
  hours: "Mon – Sun · 10:00 AM – 10:00 PM · Open Every Day",
  whatsapp_number: "9699362465",
  call_number: "9699362465",
  logo: "https://customer-assets-lqy194kg.emergentagent.net/job_industrial-pack-pro-2/artifacts/m5h6r5mf_image.png",
  map_embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124043.04756615449!2d72.90684348583822!3d19.092412871944198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c71085448b17%3A0xf54053046229b7e8!2sGN%20Packaging!5e0!3m2!1sen!2sin!4v1785843072069!5m2!1sen!2sin",
};

// --- HIGH-QUALITY EXTERNAL PRODUCT IMAGES ---
const LOCAL_IMAGES = {
  // Corrugated Boxes
  "corrugated-boxes": [
    "https://images.unsplash.com/photo-1607166452427-7e4477079cb9?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80",
    "https://images.pexels.com/photos/4498136/pexels-photo-4498136.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/4498135/pexels-photo-4498135.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/5025512/pexels-photo-5025512.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/5025533/pexels-photo-5025533.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/4498137/pexels-photo-4498137.jpeg?auto=compress&cs=tinysrgb&w=1200"
  ],
  // Sheets & Rolls
  "sheets-rolls": [
    "https://images.pexels.com/photos/4498221/pexels-photo-4498221.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/6169050/pexels-photo-6169050.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/4483775/pexels-photo-4483775.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/8291837/pexels-photo-8291837.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/5025497/pexels-photo-5025497.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/4482896/pexels-photo-4482896.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/4497734/pexels-photo-4497734.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/5025497/pexels-photo-5025497.jpeg?auto=compress&cs=tinysrgb&w=1200"
  ],
  // Wooden Crates
  "wooden-crates": [
    "https://images.pexels.com/photos/4483941/pexels-photo-4483941.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/4483866/pexels-photo-4483866.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/4483609/pexels-photo-4483609.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/4498138/pexels-photo-4498138.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/5025542/pexels-photo-5025542.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/6169055/pexels-photo-6169055.jpeg?auto=compress&cs=tinysrgb&w=1200"
  ],
  "wooden-box": [
    "/images/products/wooden-box/wooden-box1.jpeg",
    "/images/products/wooden-box/wooden-box2.jpeg",
  ],
  "wooden-pallet": [
    "/images/products/wooden-pallet/wooden-pallet1.jpg",
    "/images/products/wooden-pallet/wooden-pallet2.jpg",
    "/images/products/wooden-pallet/wooden-pallet3.jpg",
  ],
  "corrugated-rolls": [
    "/images/products/corrugated-rolls/corrugated-rolls1.jpg",
    "/images/products/corrugated-rolls/corrugated-rolls2.jpg",
    "/images/products/corrugated-rolls/corrugated-rolls3.jpg",
  ],
  // Honeycomb & Pallets
  "honeycomb": [
    "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80",
    "https://images.pexels.com/photos/4498135/pexels-photo-4498135.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/5025512/pexels-photo-5025512.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/4483866/pexels-photo-4483866.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/4483941/pexels-photo-4483941.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/4483609/pexels-photo-4483609.jpeg?auto=compress&cs=tinysrgb&w=1200"
  ],
  // Edge Protectors
  "protection": [
    "https://images.pexels.com/photos/5025533/pexels-photo-5025533.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/4498137/pexels-photo-4498137.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/6169056/pexels-photo-6169056.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/4498135/pexels-photo-4498135.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/5025512/pexels-photo-5025512.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/4498136/pexels-photo-4498136.jpeg?auto=compress&cs=tinysrgb&w=1200"
  ],
  // Heavy Duty & Export
  "heavy-duty": [
    "https://images.pexels.com/photos/6169055/pexels-photo-6169055.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/4498138/pexels-photo-4498138.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/5025542/pexels-photo-5025542.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/4498176/pexels-photo-4498176.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/4481323/pexels-photo-4481323.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg?auto=compress&cs=tinysrgb&w=1200"
  ],
  // E-commerce & Shipping
  "shipping": [
    "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/4498176/pexels-photo-4498176.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/4481323/pexels-photo-4481323.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/6169188/pexels-photo-6169188.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/4497734/pexels-photo-4497734.jpeg?auto=compress&cs=tinysrgb&w=1200"
  ],
  // Printed & Custom
  "printed": [
    "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1607166452427-7e4477079cb9?auto=format&fit=crop&w=1200&q=80",
    "https://images.pexels.com/photos/4498136/pexels-photo-4498136.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/4498135/pexels-photo-4498135.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/5025512/pexels-photo-5025512.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/5025533/pexels-photo-5025533.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/4498137/pexels-photo-4498137.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80"
  ],
  // Packaging Materials
  "materials": [
    "https://images.pexels.com/photos/6169050/pexels-photo-6169050.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/4498221/pexels-photo-4498221.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/4483775/pexels-photo-4483775.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/8291837/pexels-photo-8291837.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/5025497/pexels-photo-5025497.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/4482896/pexels-photo-4482896.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/4497734/pexels-photo-4497734.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/6169188/pexels-photo-6169188.jpeg?auto=compress&cs=tinysrgb&w=1200"
  ],
  // Industrial (uses corrugated boxes images)
  "industrial": [
    "https://images.unsplash.com/photo-1607166452427-7e4477079cb9?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1200&q=80"
  ],
};

// --- CURATED, PACKAGING-ONLY IMAGE BANK (stable Unsplash + Pexels URLs) ---
const IMG = {
  // Corrugated boxes / cartons — brown corrugated
  box1: "https://images.unsplash.com/photo-1607166452427-7e4477079cb9?auto=format&fit=crop&w=1200&q=80",
  box2: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1200&q=80",
  box3: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80",
  box4: "https://images.pexels.com/photos/4498136/pexels-photo-4498136.jpeg?auto=compress&cs=tinysrgb&w=1200",
  box5: "https://images.pexels.com/photos/4498135/pexels-photo-4498135.jpeg?auto=compress&cs=tinysrgb&w=1200",
  box6: "https://images.pexels.com/photos/5025512/pexels-photo-5025512.jpeg?auto=compress&cs=tinysrgb&w=1200",
  box7: "https://images.pexels.com/photos/5025533/pexels-photo-5025533.jpeg?auto=compress&cs=tinysrgb&w=1200",
  box8: "https://images.pexels.com/photos/4498137/pexels-photo-4498137.jpeg?auto=compress&cs=tinysrgb&w=1200",
  box9: "https://images.pexels.com/photos/6169056/pexels-photo-6169056.jpeg?auto=compress&cs=tinysrgb&w=1200",
  box10: "https://images.pexels.com/photos/6169055/pexels-photo-6169055.jpeg?auto=compress&cs=tinysrgb&w=1200",
  box11: "https://images.pexels.com/photos/4498138/pexels-photo-4498138.jpeg?auto=compress&cs=tinysrgb&w=1200",
  box12: "https://images.pexels.com/photos/5025542/pexels-photo-5025542.jpeg?auto=compress&cs=tinysrgb&w=1200",
  // Stacks / warehouse
  stack1: "https://images.pexels.com/photos/4498176/pexels-photo-4498176.jpeg?auto=compress&cs=tinysrgb&w=1200",
  stack2: "https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=1200",
  stack3: "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1200",
  warehouse1: "https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg?auto=compress&cs=tinysrgb&w=1200",
  warehouse2: "https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=1200",
  warehouse3: "https://images.pexels.com/photos/4481323/pexels-photo-4481323.jpeg?auto=compress&cs=tinysrgb&w=1200",
  // Paper / kraft rolls
  roll1: "https://images.pexels.com/photos/4498221/pexels-photo-4498221.jpeg?auto=compress&cs=tinysrgb&w=1200",
  roll2: "https://images.pexels.com/photos/6169050/pexels-photo-6169050.jpeg?auto=compress&cs=tinysrgb&w=1200",
  roll3: "https://images.pexels.com/photos/4483775/pexels-photo-4483775.jpeg?auto=compress&cs=tinysrgb&w=1200",
  // Corrugated sheets flat
  sheet1: "https://images.pexels.com/photos/8291837/pexels-photo-8291837.jpeg?auto=compress&cs=tinysrgb&w=1200",
  sheet2: "https://images.pexels.com/photos/5025497/pexels-photo-5025497.jpeg?auto=compress&cs=tinysrgb&w=1200",
  sheet3: "https://images.pexels.com/photos/4482896/pexels-photo-4482896.jpeg?auto=compress&cs=tinysrgb&w=1200",
  // Factory / machinery
  factory1: "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1200",
  factory2: "https://images.pexels.com/photos/236710/pexels-photo-236710.jpeg?auto=compress&cs=tinysrgb&w=1200",
  factory3: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1200",
  factory4: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1200",
  factory5: "https://images.pexels.com/photos/3862627/pexels-photo-3862627.jpeg?auto=compress&cs=tinysrgb&w=1200",
  factory6: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1200",
  // Palletized loads
  pallet1: "https://images.pexels.com/photos/4483866/pexels-photo-4483866.jpeg?auto=compress&cs=tinysrgb&w=1200",
  pallet2: "https://images.pexels.com/photos/4483941/pexels-photo-4483941.jpeg?auto=compress&cs=tinysrgb&w=1200",
  pallet3: "https://images.pexels.com/photos/4483609/pexels-photo-4483609.jpeg?auto=compress&cs=tinysrgb&w=1200",
  // Stretch film & bubble wrap
  wrap1: "https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=1200",
  wrap2: "https://images.pexels.com/photos/6169188/pexels-photo-6169188.jpeg?auto=compress&cs=tinysrgb&w=1200",
  wrap3: "https://images.pexels.com/photos/4497734/pexels-photo-4497734.jpeg?auto=compress&cs=tinysrgb&w=1200",
  // People / hero
  hero: "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1600",
};

// Categories (top-level groups shown on Products page)
// Ordered by business priority: Box Products → Sheet/Board Products → Wooden Products → Other Packaging
export const CATEGORIES = [
  // PRIORITY 1 — BOX PRODUCTS (highest priority)
  { slug: "corrugated-boxes", name: "Corrugated Boxes", cover: getCategoryDefaultImage("corrugated-boxes"), desc: "3, 5, 7, 9-ply corrugated boxes in any custom size." },
  { slug: "custom-size-box", name: "Custom Size Box", cover: getCategoryDefaultImage("custom-size-box"), desc: "Boxes manufactured to your exact specifications." },
  { slug: "customized-premium-box", name: "Customized Premium Design Box", cover: getCategoryDefaultImage("customized-premium-box"), desc: "High-end custom designed boxes with premium finishes." },
  { slug: "fruit-box", name: "Fruit Box", cover: getCategoryDefaultImage("fruit-box"), desc: "Ventilated boxes for fresh fruit and produce packaging." },
  { slug: "handle-box", name: "Handle Box / Hold Box", cover: getCategoryDefaultImage("handle-box"), desc: "Convenient boxes with built-in handles for easy carrying." },
  { slug: "gift-box", name: "Gift Box", cover: getCategoryDefaultImage("gift-box"), desc: "Premium printed gift boxes for retail and special occasions." },
  { slug: "shoes-box", name: "Shoes Box", cover: getCategoryDefaultImage("shoes-box"), desc: "Specialized boxes for footwear packaging and display." },
  { slug: "white-duplex-box", name: "White Duplex Box", cover: getCategoryDefaultImage("white-duplex-box"), desc: "White duplex boxes for clean, professional packaging." },
  { slug: "lock-punched-box", name: "Lock Punched Box", cover: getCategoryDefaultImage("lock-punched-box"), desc: "Self-locking boxes with punched designs for secure closure." },
  { slug: "imported-high-duty-pallet-box", name: "Imported High Duty Pallet Box", cover: getCategoryDefaultImage("imported-high-duty-pallet-box"), desc: "Heavy-duty imported pallet boxes for international shipping." },
  { slug: "corrugated-rolls", name: "Corrugated Rolls", cover: getCategoryDefaultImage("corrugated-rolls"), desc: "Kraft paper rolls and corrugated sheets for various industrial applications." },
  
  // PRIORITY 2 — SHEET / BOARD PRODUCTS
  { slug: "corrugated-sheets", name: "Corrugated Sheets", cover: getCategoryDefaultImage("corrugated-sheets"), desc: "Corrugated sheets for packaging, dividers, and protective layers." },
  { slug: "honeycomb-sheet", name: "Honeycomb Sheet", cover: getCategoryDefaultImage("honeycomb-sheet"), desc: "Flexible honeycomb sheets for various packaging applications." },
  { slug: "l-shape-edge-cardboard", name: "L Shape Edge Cardboard / Angle Board", cover: getCategoryDefaultImage("l-shape-edge-cardboard"), desc: "Protective edge guards and angle boards for corner protection." },
  
  // PRIORITY 3 — WOODEN PRODUCTS
  { slug: "wooden-pallet", name: "Wooden Pallet", cover: getCategoryDefaultImage("wooden-pallet"), desc: "Sturdy wooden pallets for heavy-duty storage and transportation." },
  { slug: "wooden-crate", name: "Wooden Crate", cover: getCategoryDefaultImage("wooden-crate"), desc: "Heavy-duty wooden crates for machinery and export packaging." },
  { slug: "wooden-box", name: "Wooden Box", cover: getCategoryDefaultImage("wooden-box"), desc: "Sturdy wooden boxes for storage and packaging solutions." },
  
  // PRIORITY 4 — OTHER PACKAGING PRODUCTS
  { slug: "packers-movers", name: "Packers & Movers", cover: getCategoryDefaultImage("packers-movers"), desc: "Heavy-duty boxes for relocation and moving services." },
];

// PRODUCTS — each has multiple gallery images
export const PRODUCTS = [
  // Corrugated Boxes
  { slug: "corrugated-boxes", name: "Corrugated Boxes", category: "corrugated-boxes", images: [LOCAL_IMAGES["corrugated-boxes"][0], LOCAL_IMAGES["corrugated-boxes"][1]], short: "High-strength corrugated boxes engineered for shipping, storage & industrial packing.", ply: "3 / 5 / 7 / 9 Ply", moq: "500 pcs", delivery: "5–10 days" },
  { slug: "rsc-box", name: "Regular Slotted Container (RSC)", category: "corrugated-boxes", images: [LOCAL_IMAGES["corrugated-boxes"][1], LOCAL_IMAGES["corrugated-boxes"][2]], short: "Standard RSC boxes — the most common corrugated box style for shipping.", ply: "3 / 5 / 7 Ply", moq: "500 pcs", delivery: "5–8 days" },
  { slug: "hsc-box", name: "Half Slotted Container (HSC)", category: "corrugated-boxes", images: [LOCAL_IMAGES["corrugated-boxes"][2], LOCAL_IMAGES["corrugated-boxes"][3]], short: "Half-slotted containers with separate lid for easy access packaging.", ply: "3 / 5 Ply", moq: "500 pcs", delivery: "5–8 days" },
  { slug: "fol-box", name: "Full Overlap Box (FOL)", category: "corrugated-boxes", images: [LOCAL_IMAGES["corrugated-boxes"][3], LOCAL_IMAGES["corrugated-boxes"][4]], short: "Full overlap design provides extra strength for heavy items.", ply: "5 / 7 Ply", moq: "300 pcs", delivery: "7–10 days" },
  { slug: "die-cut-box", name: "Die-Cut Boxes", category: "corrugated-boxes", images: [LOCAL_IMAGES["corrugated-boxes"][4], LOCAL_IMAGES["corrugated-boxes"][5]], short: "Precision die-cut boxes for custom shapes and specialized packaging.", ply: "3 / 5 Ply", moq: "300 pcs", delivery: "8–14 days" },
  { slug: "telescope-box", name: "Telescope Boxes", category: "corrugated-boxes", images: [LOCAL_IMAGES["corrugated-boxes"][5], LOCAL_IMAGES["corrugated-boxes"][6]], short: "Two-piece telescoping design for tall or delicate items.", ply: "3 / 5 Ply", moq: "300 pcs", delivery: "7–12 days" },
  { slug: "fpf-box", name: "Five Panel Folder (FPF)", category: "corrugated-boxes", images: [LOCAL_IMAGES["corrugated-boxes"][6], LOCAL_IMAGES["corrugated-boxes"][7]], short: "Single-piece design for flat items like books and documents.", ply: "3 / 5 Ply", moq: "500 pcs", delivery: "5–8 days" },
  { slug: "opf-box", name: "One Piece Folder (OPF)", category: "corrugated-boxes", images: [LOCAL_IMAGES["corrugated-boxes"][0], LOCAL_IMAGES["corrugated-boxes"][1]], short: "One-piece folder boxes for small flat items and samples.", ply: "3 Ply", moq: "500 pcs", delivery: "5–7 days" },
  { slug: "corrugated-mailer", name: "Corrugated Mailer Boxes", category: "shipping", images: [LOCAL_IMAGES["shipping"][0], LOCAL_IMAGES["shipping"][1]], short: "Self-locking mailer boxes for secure shipping without tape.", ply: "3 / 5 Ply", moq: "500 pcs", delivery: "5–8 days" },
  { slug: "pizza-box", name: "Pizza Boxes", category: "corrugated-boxes", images: [LOCAL_IMAGES["corrugated-boxes"][2], LOCAL_IMAGES["corrugated-boxes"][3]], short: "Food-grade pizza boxes with grease-resistant coating.", ply: "3 Ply", moq: "1000 pcs", delivery: "5–7 days" },
  { slug: "moving-box", name: "Moving Boxes", category: "corrugated-boxes", images: [LOCAL_IMAGES["corrugated-boxes"][3], LOCAL_IMAGES["corrugated-boxes"][4]], short: "Heavy-duty moving boxes in various sizes for household relocation.", ply: "5 / 7 Ply", moq: "200 pcs", delivery: "5–10 days" },
  { slug: "3-ply-corrugated-box", name: "3 Ply Corrugated Box", category: "corrugated-boxes", images: [LOCAL_IMAGES["corrugated-boxes"][4], LOCAL_IMAGES["corrugated-boxes"][5]], short: "Lightweight 3-ply cartons for internal packing, retail dispatch & documentation.", ply: "3 Ply", moq: "500 pcs", delivery: "5–7 days" },
  { slug: "5-ply-corrugated-box", name: "5 Ply Corrugated Box", category: "corrugated-boxes", images: [LOCAL_IMAGES["corrugated-boxes"][5], LOCAL_IMAGES["corrugated-boxes"][6]], short: "Standard 5-ply corrugated cartons — the workhorse for e-commerce & storage.", ply: "5 Ply", moq: "500 pcs", delivery: "5–8 days" },
  { slug: "7-ply-corrugated-box", name: "7 Ply Corrugated Box", category: "corrugated-boxes", images: [LOCAL_IMAGES["corrugated-boxes"][6], LOCAL_IMAGES["corrugated-boxes"][7]], short: "7-ply reinforced boxes for domestic transport, machinery parts & bulk storage.", ply: "7 Ply", moq: "300 pcs", delivery: "7–10 days" },

  // Shipping & Export Boxes
  { slug: "export-corrugated-box", name: "Export Corrugated Boxes", category: "heavy-duty", images: [LOCAL_IMAGES["heavy-duty"][0], LOCAL_IMAGES["heavy-duty"][1]], short: "Export-quality corrugated boxes meeting international shipping standards.", ply: "7 / 9 Ply", moq: "300 pcs", delivery: "10–15 days" },
  { slug: "heavy-duty-corrugated-box", name: "Heavy Duty Corrugated Boxes", category: "heavy-duty", images: [LOCAL_IMAGES["heavy-duty"][1], LOCAL_IMAGES["heavy-duty"][2]], short: "Extra-strength heavy-duty boxes for heavy industrial loads.", ply: "9 / 11 Ply", moq: "200 pcs", delivery: "10–14 days" },
  { slug: "double-wall-box", name: "Double Wall Boxes", category: "heavy-duty", images: [LOCAL_IMAGES["heavy-duty"][2], LOCAL_IMAGES["heavy-duty"][3]], short: "Double-wall construction for superior strength and durability.", ply: "5 / 7 Ply", moq: "300 pcs", delivery: "7–12 days" },
  { slug: "triple-wall-box", name: "Triple Wall Boxes", category: "heavy-duty", images: [LOCAL_IMAGES["heavy-duty"][3], LOCAL_IMAGES["heavy-duty"][4]], short: "Triple-wall boxes for extremely heavy loads and export.", ply: "9 / 11 Ply", moq: "100 pcs", delivery: "12–18 days" },
  { slug: "pallet-box", name: "Pallet Boxes", category: "heavy-duty", images: [LOCAL_IMAGES["heavy-duty"][4], LOCAL_IMAGES["heavy-duty"][5]], short: "Large pallet-sized boxes for bulk storage and shipping.", ply: "7 / 9 Ply", moq: "50 pcs", delivery: "10–15 days" },
  { slug: "container-shipping-box", name: "Container Shipping Boxes", category: "heavy-duty", images: [LOCAL_IMAGES["heavy-duty"][5], LOCAL_IMAGES["heavy-duty"][6]], short: "Container-ready boxes optimized for sea freight shipping.", ply: "9 / 11 / 13 Ply", moq: "100 pcs", delivery: "15–20 days" },
  { slug: "9-ply-corrugated-box", name: "9 Ply Corrugated Box", category: "heavy-duty", images: [LOCAL_IMAGES["heavy-duty"][6], LOCAL_IMAGES["heavy-duty"][7]], short: "9-ply heavy-duty cartons for export freight, automotive & engineering loads.", ply: "9 Ply", moq: "200 pcs", delivery: "10–14 days" },
  { slug: "11-ply-heavy-duty-box", name: "11 Ply Heavy Duty Box", category: "heavy-duty", images: [LOCAL_IMAGES["heavy-duty"][7], LOCAL_IMAGES["heavy-duty"][0]], short: "11-ply extra-strength cartons for very heavy machinery & inter-continental export.", ply: "11 Ply", moq: "100 pcs", delivery: "12–15 days" },
  { slug: "13-ply-super-heavy-box", name: "13 Ply Super Heavy Box", category: "heavy-duty", images: [LOCAL_IMAGES["heavy-duty"][0], LOCAL_IMAGES["heavy-duty"][1]], short: "13-ply reinforced structural cartons — engineered for the toughest export duty.", ply: "13 Ply", moq: "50 pcs", delivery: "15–20 days" },

  // E-commerce Boxes
  { slug: "e-commerce-mailer-box", name: "E-commerce Mailer Boxes", category: "shipping", images: [LOCAL_IMAGES["shipping"][0], LOCAL_IMAGES["shipping"][1]], short: "Self-locking e-commerce mailer boxes for quick assembly.", ply: "3 / 5 Ply", moq: "500 pcs", delivery: "5–8 days" },
  { slug: "subscription-box", name: "Subscription Boxes", category: "shipping", images: [LOCAL_IMAGES["shipping"][1], LOCAL_IMAGES["shipping"][2]], short: "Custom subscription boxes for recurring delivery services.", ply: "3 / 5 Ply", moq: "300 pcs", delivery: "7–12 days" },
  { slug: "flip-top-box", name: "Flip Top Boxes", category: "shipping", images: [LOCAL_IMAGES["shipping"][2], LOCAL_IMAGES["shipping"][3]], short: "Flip-top boxes with hinged lid for easy opening.", ply: "3 / 5 Ply", moq: "300 pcs", delivery: "7–12 days" },
  { slug: "self-locking-box", name: "Self Locking Boxes", category: "shipping", images: [LOCAL_IMAGES["shipping"][3], LOCAL_IMAGES["shipping"][4]], short: "Self-locking design eliminates need for tape.", ply: "3 / 5 Ply", moq: "500 pcs", delivery: "5–8 days" },
  { slug: "return-mailer-box", name: "Return Mailer Boxes", category: "shipping", images: [LOCAL_IMAGES["shipping"][4], LOCAL_IMAGES["shipping"][5]], short: "Easy-return mailer boxes for reverse logistics.", ply: "3 Ply", moq: "500 pcs", delivery: "5–8 days" },
  { slug: "e-commerce-box", name: "E-commerce Box", category: "shipping", images: [LOCAL_IMAGES["shipping"][5], LOCAL_IMAGES["shipping"][6]], short: "Sturdy self-locking e-commerce shipping boxes.", ply: "3 / 5 Ply", moq: "500 pcs", delivery: "5–8 days" },
  { slug: "shipping-box", name: "Shipping Box", category: "shipping", images: [LOCAL_IMAGES["shipping"][6], LOCAL_IMAGES["shipping"][0]], short: "Durable shipping cartons for domestic & export freight.", ply: "5 / 7 Ply", moq: "300 pcs", delivery: "6–10 days" },
  { slug: "export-box", name: "Export Box", category: "heavy-duty", images: [LOCAL_IMAGES["heavy-duty"][1], LOCAL_IMAGES["heavy-duty"][2]], short: "Heavy-duty export cartons — 7 to 13 ply with ISPM-15 palletising.", ply: "7 / 9 / 11 Ply", moq: "300 pcs", delivery: "10–15 days" },

  // Printed & Custom Boxes
  { slug: "custom-printed-box", name: "Custom Printed Boxes", category: "printed", images: [LOCAL_IMAGES["printed"][0], LOCAL_IMAGES["printed"][1]], short: "Fully custom printed boxes with your brand design.", ply: "3 / 5 / 7 Ply", moq: "500 pcs", delivery: "10–15 days" },
  { slug: "offset-printed-box", name: "Offset Printed Boxes", category: "printed", images: [LOCAL_IMAGES["printed"][1], LOCAL_IMAGES["printed"][2]], short: "High-quality offset printing for premium packaging.", ply: "Any", moq: "1000 pcs", delivery: "12–18 days" },
  { slug: "flexo-printed-box", name: "Flexo Printed Boxes", category: "printed", images: [LOCAL_IMAGES["printed"][2], LOCAL_IMAGES["printed"][3]], short: "Flexographic printing for cost-effective branded packaging.", ply: "3 / 5 / 7 Ply", moq: "500 pcs", delivery: "7–12 days" },
  { slug: "brand-packaging-box", name: "Brand Packaging Boxes", category: "printed", images: [LOCAL_IMAGES["printed"][3], LOCAL_IMAGES["printed"][4]], short: "Custom brand packaging for retail and e-commerce.", ply: "Any", moq: "300 pcs", delivery: "10–15 days" },
  { slug: "retail-display-box", name: "Retail Display Boxes", category: "printed", images: [LOCAL_IMAGES["printed"][4], LOCAL_IMAGES["printed"][5]], short: "Display-ready boxes for retail shelf presentation.", ply: "Any", moq: "500 pcs", delivery: "10–15 days" },
  { slug: "industrial-packaging-box", name: "Industrial Packaging Boxes", category: "printed", images: [LOCAL_IMAGES["printed"][5], LOCAL_IMAGES["printed"][6]], short: "Industrial packaging with custom printing for B2B.", ply: "5 / 7 Ply", moq: "300 pcs", delivery: "10–15 days" },
  { slug: "machine-packaging-box", name: "Machine Packaging Boxes", category: "printed", images: [LOCAL_IMAGES["printed"][6], LOCAL_IMAGES["printed"][7]], short: "Machine-grade boxes for automated packaging lines.", ply: "3 / 5 Ply", moq: "1000 pcs", delivery: "7–12 days" },
  { slug: "printed-box", name: "Printed Corrugated Box", category: "printed", images: [LOCAL_IMAGES["printed"][7], LOCAL_IMAGES["printed"][0]], short: "Flexo & offset multi-colour printed corrugated boxes.", ply: "3 / 5 / 7 Ply", moq: "500 pcs", delivery: "7–12 days" },
  { slug: "mono-carton", name: "Mono Carton", category: "printed", images: [LOCAL_IMAGES["printed"][0], LOCAL_IMAGES["printed"][1]], short: "Single-ply printed mono cartons for retail shelf-ready packaging.", ply: "—", moq: "1000 pcs", delivery: "10–14 days" },
  { slug: "duplex-box", name: "Duplex Box", category: "printed", images: [LOCAL_IMAGES["printed"][1], LOCAL_IMAGES["printed"][2]], short: "Coated duplex mono-carton boxes for retail packaging.", ply: "—", moq: "1000 pcs", delivery: "7–12 days" },
  { slug: "custom-packaging-box", name: "Custom Packaging Box", category: "printed", images: [LOCAL_IMAGES["printed"][2], LOCAL_IMAGES["printed"][3]], short: "Made-to-spec packaging in any size, ply, print & finish.", ply: "Any", moq: "300 pcs", delivery: "10–15 days" },

  // Industrial Packaging Boxes
  { slug: "automotive-parts-box", name: "Automotive Parts Boxes", category: "industrial", images: [LOCAL_IMAGES["industrial"][0], LOCAL_IMAGES["industrial"][1]], short: "Specialized boxes for automotive components and parts.", ply: "5 / 7 / 9 Ply", moq: "200 pcs", delivery: "10–15 days" },
  { slug: "electronics-packaging-box", name: "Electronics Packaging Boxes", category: "industrial", images: [LOCAL_IMAGES["shipping"][0], LOCAL_IMAGES["shipping"][1]], short: "ESD-safe packaging for electronics and appliances.", ply: "5 / 7 Ply", moq: "300 pcs", delivery: "10–15 days" },
  { slug: "pharmaceutical-box", name: "Pharmaceutical Boxes", category: "industrial", images: [LOCAL_IMAGES["printed"][3], LOCAL_IMAGES["printed"][4]], short: "GMP-compliant pharmaceutical packaging boxes.", ply: "—", moq: "1000 pcs", delivery: "10–14 days" },
  { slug: "food-grade-box", name: "Food Grade Boxes", category: "industrial", images: [LOCAL_IMAGES["corrugated-boxes"][2], LOCAL_IMAGES["corrugated-boxes"][3]], short: "Food-safe packaging for food and beverage industry.", ply: "3 / 5 Ply", moq: "500 pcs", delivery: "7–10 days" },

  // Specialty Boxes
  { slug: "partition-box", name: "Partition Boxes", category: "protection", images: [LOCAL_IMAGES["protection"][0], LOCAL_IMAGES["protection"][1]], short: "Internal partitions for separating items in boxes.", ply: "3 / 5 Ply", moq: "500 pcs", delivery: "6–10 days" },
  { slug: "divider-box", name: "Divider Boxes", category: "protection", images: [LOCAL_IMAGES["protection"][1], LOCAL_IMAGES["protection"][2]], short: "Divider boxes for organizing multiple products.", ply: "3 / 5 Ply", moq: "300 pcs", delivery: "6–10 days" },
  { slug: "archive-storage-box", name: "Archive Storage Boxes", category: "corrugated-boxes", images: [LOCAL_IMAGES["corrugated-boxes"][3], LOCAL_IMAGES["corrugated-boxes"][4]], short: "Document storage boxes for archiving and records.", ply: "3 / 5 Ply", moq: "100 pcs", delivery: "5–7 days" },
  { slug: "file-storage-box", name: "File Storage Boxes", category: "corrugated-boxes", images: [LOCAL_IMAGES["corrugated-boxes"][4], LOCAL_IMAGES["corrugated-boxes"][5]], short: "File storage boxes for office and document management.", ply: "3 Ply", moq: "100 pcs", delivery: "5–7 days" },
  { slug: "gift-box", name: "Gift Boxes", category: "printed", images: [LOCAL_IMAGES["printed"][4], LOCAL_IMAGES["printed"][5]], short: "Premium gift boxes with custom printing and finishes.", ply: "Any", moq: "300 pcs", delivery: "10–15 days" },
  { slug: "fruit-vegetable-box", name: "Fruit & Vegetable Boxes", category: "corrugated-boxes", images: [LOCAL_IMAGES["corrugated-boxes"][5], LOCAL_IMAGES["corrugated-boxes"][6]], short: "Ventilated boxes for fresh produce packaging.", ply: "3 / 5 Ply", moq: "500 pcs", delivery: "5–7 days" },
  { slug: "bottle-box", name: "Bottle Boxes", category: "protection", images: [LOCAL_IMAGES["protection"][2], LOCAL_IMAGES["protection"][3]], short: "Protective boxes for bottles and glass containers.", ply: "3 / 5 Ply", moq: "300 pcs", delivery: "6–10 days" },
  { slug: "garment-box", name: "Garment Boxes", category: "corrugated-boxes", images: [LOCAL_IMAGES["corrugated-boxes"][6], LOCAL_IMAGES["corrugated-boxes"][7]], short: "Garment boxes for clothing and textile packaging.", ply: "3 / 5 Ply", moq: "300 pcs", delivery: "7–10 days" },

  // Heavy Duty Boxes
  { slug: "heavy-duty-carton", name: "Heavy Duty Cartons", category: "heavy-duty", images: [LOCAL_IMAGES["heavy-duty"][2], LOCAL_IMAGES["heavy-duty"][3]], short: "Extra-heavy cartons for industrial and export use.", ply: "9 / 11 Ply", moq: "200 pcs", delivery: "10–14 days" },
  { slug: "jumbo-corrugated-box", name: "Jumbo Corrugated Boxes", category: "heavy-duty", images: [LOCAL_IMAGES["heavy-duty"][3], LOCAL_IMAGES["heavy-duty"][4]], short: "Large jumbo boxes for bulk and oversized items.", ply: "7 / 9 Ply", moq: "50 pcs", delivery: "12–18 days" },
  { slug: "high-compression-box", name: "High Compression Boxes", category: "heavy-duty", images: [LOCAL_IMAGES["heavy-duty"][4], LOCAL_IMAGES["heavy-duty"][5]], short: "High-compression boxes for stacked storage.", ply: "9 / 11 Ply", moq: "100 pcs", delivery: "10–15 days" },
  { slug: "waterproof-corrugated-box", name: "Waterproof Corrugated Boxes", category: "heavy-duty", images: [LOCAL_IMAGES["heavy-duty"][5], LOCAL_IMAGES["heavy-duty"][6]], short: "Water-resistant boxes for moisture-sensitive goods.", ply: "5 / 7 Ply", moq: "300 pcs", delivery: "10–15 days" },

  // Corrugated Sheets & Rolls
  { slug: "single-face-sheet", name: "Single Face Sheets", category: "sheets-rolls", images: [LOCAL_IMAGES["sheets-rolls"][0], LOCAL_IMAGES["sheets-rolls"][1]], short: "Single-face corrugated sheets for wrapping and padding.", ply: "2 Ply", moq: "1000 sqft", delivery: "3–5 days" },
  { slug: "3-ply-sheet", name: "3 Ply Sheets", category: "sheets-rolls", images: [LOCAL_IMAGES["sheets-rolls"][1], LOCAL_IMAGES["sheets-rolls"][2]], short: "3-ply corrugated sheets for dividers and liners.", ply: "3 Ply", moq: "1000 sqft", delivery: "3–7 days" },
  { slug: "5-ply-sheet", name: "5 Ply Sheets", category: "sheets-rolls", images: [LOCAL_IMAGES["sheets-rolls"][2], LOCAL_IMAGES["sheets-rolls"][3]], short: "5-ply sheets for heavy-duty applications.", ply: "5 Ply", moq: "1000 sqft", delivery: "5–10 days" },
  { slug: "7-ply-sheet", name: "7 Ply Sheets", category: "sheets-rolls", images: [LOCAL_IMAGES["sheets-rolls"][3], LOCAL_IMAGES["sheets-rolls"][4]], short: "7-ply sheets for industrial strength applications.", ply: "7 Ply", moq: "500 sqft", delivery: "7–12 days" },
  { slug: "corrugated-roll", name: "Corrugated Rolls", category: "sheets-rolls", images: [LOCAL_IMAGES["sheets-rolls"][4], LOCAL_IMAGES["sheets-rolls"][5]], short: "Continuous corrugated rolls for flexible packaging.", ply: "2 / 3 Ply", moq: "50 kg", delivery: "3–5 days" },
  { slug: "corrugated-sheet", name: "Corrugated Sheet", category: "sheets-rolls", images: [LOCAL_IMAGES["sheets-rolls"][5], LOCAL_IMAGES["sheets-rolls"][6]], short: "Multi-ply corrugated sheets for liners, dividers & inner packaging.", ply: "3 / 5 / 7 Ply", moq: "1000 sqft", delivery: "3–7 days" },
  { slug: "kraft-paper-roll", name: "Kraft Paper Roll", category: "sheets-rolls", images: [LOCAL_IMAGES["sheets-rolls"][6], LOCAL_IMAGES["sheets-rolls"][7]], short: "Virgin kraft paper rolls — 80 to 300 GSM.", ply: "—", moq: "1 ton", delivery: "7–10 days" },
  { slug: "paper-roll", name: "Paper Roll", category: "corrugated-rolls", images: [LOCAL_IMAGES["corrugated-rolls"][0], LOCAL_IMAGES["corrugated-rolls"][1]], short: "Kraft paper reels for corrugation, wrapping & lamination lines.", ply: "—", moq: "1 ton", delivery: "7–10 days" },
  { slug: "paper-core-tube", name: "Paper Core / Tube", category: "sheets-rolls", images: [LOCAL_IMAGES["sheets-rolls"][0], LOCAL_IMAGES["sheets-rolls"][1]], short: "Rigid paper cores & tubes for textiles, films & luxury packaging.", ply: "—", moq: "500 pcs", delivery: "8–12 days" },

  // Honeycomb Packaging
  { slug: "honeycomb-panel", name: "Honeycomb Panels", category: "honeycomb", images: [LOCAL_IMAGES["honeycomb"][0], LOCAL_IMAGES["honeycomb"][1]], short: "Lightweight honeycomb panels for structural applications.", ply: "—", moq: "50 sqm", delivery: "10–14 days" },
  { slug: "honeycomb-pallet", name: "Honeycomb Pallets", category: "honeycomb", images: [LOCAL_IMAGES["honeycomb"][1], LOCAL_IMAGES["honeycomb"][2]], short: "Eco-friendly honeycomb pallets — a wooden pallet alternative.", ply: "—", moq: "20 pcs", delivery: "10–14 days" },
  { slug: "honeycomb-box", name: "Honeycomb Boxes", category: "honeycomb", images: [LOCAL_IMAGES["honeycomb"][2], LOCAL_IMAGES["honeycomb"][3]], short: "Honeycomb boxes for lightweight yet strong packaging.", ply: "—", moq: "50 pcs", delivery: "10–14 days" },
  { slug: "honeycomb-cushion-pad", name: "Honeycomb Cushion Pads", category: "honeycomb", images: [LOCAL_IMAGES["honeycomb"][3], LOCAL_IMAGES["honeycomb"][4]], short: "Cushion pads for shock absorption in packaging.", ply: "—", moq: "100 pcs", delivery: "7–10 days" },
  { slug: "honeycomb-board", name: "Honeycomb Board", category: "honeycomb", images: [LOCAL_IMAGES["honeycomb"][4], LOCAL_IMAGES["honeycomb"][5]], short: "Eco-friendly honeycomb boards — light, strong & recyclable.", ply: "—", moq: "50 sqm", delivery: "10–14 days" },
  { slug: "corrugated-pallet", name: "Corrugated Pallet", category: "honeycomb", images: [LOCAL_IMAGES["honeycomb"][5], LOCAL_IMAGES["honeycomb"][0]], short: "Lightweight corrugated pallets for export & one-way shipping.", ply: "—", moq: "20 pcs", delivery: "10–14 days" },

  // Wooden Packaging
  { slug: "wooden-box", name: "Wooden Boxes", category: "wooden-box", images: [LOCAL_IMAGES["wooden-box"][0], LOCAL_IMAGES["wooden-box"][1]], short: "Custom wooden boxes for heavy-duty packaging.", ply: "—", moq: "10 pcs", delivery: "10–15 days" },
  { slug: "wooden-crate", name: "Wooden Crates", category: "wooden-crate", images: [LOCAL_IMAGES["wooden-crates"][3], LOCAL_IMAGES["wooden-crates"][4]], short: "Custom-built wooden crates for machinery, spare parts & heavy industrial exports.", ply: "—", moq: "10 pcs", delivery: "10–20 days" },
  { slug: "wooden-pallet", name: "Wooden Pallets", category: "wooden-pallet", images: [LOCAL_IMAGES["wooden-crates"][1], LOCAL_IMAGES["wooden-crates"][2]], short: "4-way entry wooden pallets — heat-treated, ISPM-15 compatible.", ply: "—", moq: "20 pcs", delivery: "10–15 days" },
  { slug: "export-wooden-crate", name: "Export Wooden Crates", category: "wooden-crate", images: [LOCAL_IMAGES["wooden-crates"][2], LOCAL_IMAGES["wooden-crates"][3]], short: "ISPM-15 compliant export wooden crates for international shipping.", ply: "—", moq: "10 pcs", delivery: "15–20 days" },
  { slug: "wooden-crates", name: "Wooden Crates", category: "wooden-crates", images: [LOCAL_IMAGES["wooden-crates"][3], LOCAL_IMAGES["wooden-crates"][4]], short: "Custom-built wooden crates for machinery, spare parts & heavy industrial exports.", ply: "—", moq: "10 pcs", delivery: "10–20 days" },
  { slug: "plywood-box", name: "Plywood Box", category: "wooden-crates", images: [LOCAL_IMAGES["wooden-crates"][4], LOCAL_IMAGES["wooden-crates"][5]], short: "Plywood-sided export boxes with wooden frame reinforcement.", ply: "—", moq: "10 pcs", delivery: "12–18 days" },

  // Edge Protection
  { slug: "paper-edge-protector", name: "Paper Edge Protectors", category: "protection", images: [LOCAL_IMAGES["protection"][0], LOCAL_IMAGES["protection"][1]], short: "Paper edge protectors for pallet and carton protection.", ply: "—", moq: "1000 pcs", delivery: "6–10 days" },
  { slug: "corner-protector", name: "Corner Protectors", category: "protection", images: [LOCAL_IMAGES["protection"][1], LOCAL_IMAGES["protection"][2]], short: "Corner guards for protecting box edges and corners.", ply: "—", moq: "1000 pcs", delivery: "6–10 days" },
  { slug: "angle-board", name: "Angle Boards", category: "protection", images: [LOCAL_IMAGES["protection"][2], LOCAL_IMAGES["protection"][3]], short: "Load-stabilising rigid paper angle boards during transport.", ply: "—", moq: "1000 pcs", delivery: "6–10 days" },
  { slug: "edge-protector", name: "L-Shape Edge Protector", category: "protection", images: [LOCAL_IMAGES["protection"][3], LOCAL_IMAGES["protection"][4]], short: "Rigid L-shape paper edge protectors for pallet & carton edge protection.", ply: "—", moq: "1000 pcs", delivery: "6–10 days" },
  { slug: "paper-angle", name: "Paper Angle Guard", category: "protection", images: [LOCAL_IMAGES["protection"][4], LOCAL_IMAGES["protection"][5]], short: "Corner protection for corrugated cartons & palletised freight.", ply: "—", moq: "1000 pcs", delivery: "6–10 days" },
  { slug: "corrugated-partition", name: "Corrugated Partition", category: "protection", images: [LOCAL_IMAGES["protection"][5], LOCAL_IMAGES["protection"][0]], short: "Custom partitions & inserts for bottles, jars & fragile goods.", ply: "3 / 5 Ply", moq: "500 pcs", delivery: "6–10 days" },

  // Packaging Materials
  { slug: "bubble-wrap", name: "Bubble Wrap", category: "materials", images: [LOCAL_IMAGES["materials"][0], LOCAL_IMAGES["materials"][1]], short: "Air-bubble cushioning film in single & double layer.", ply: "—", moq: "1 roll", delivery: "3–5 days" },
  { slug: "stretch-film", name: "Stretch Film", category: "materials", images: [LOCAL_IMAGES["materials"][1], LOCAL_IMAGES["materials"][2]], short: "LLDPE stretch wrap film — machine & hand grade.", ply: "—", moq: "1 carton", delivery: "3–5 days" },
  { slug: "bopp-packaging-tape", name: "BOPP Packaging Tape", category: "materials", images: [LOCAL_IMAGES["materials"][2], LOCAL_IMAGES["materials"][3]], short: "BOPP self-adhesive packaging tape — clear & printed.", ply: "—", moq: "1 carton", delivery: "3–5 days" },
  { slug: "strapping-roll", name: "Strapping Roll", category: "materials", images: [LOCAL_IMAGES["materials"][3], LOCAL_IMAGES["materials"][4]], short: "PP & PET strapping rolls for palletising & bundling.", ply: "—", moq: "1 roll", delivery: "3–5 days" },
  { slug: "pp-strap", name: "PP Straps", category: "materials", images: [LOCAL_IMAGES["materials"][4], LOCAL_IMAGES["materials"][5]], short: "Polypropylene strapping for light to medium bundling.", ply: "—", moq: "1 roll", delivery: "3–5 days" },
  { slug: "pet-strap", name: "PET Straps", category: "materials", images: [LOCAL_IMAGES["materials"][5], LOCAL_IMAGES["materials"][6]], short: "PET strapping for heavy-duty palletising applications.", ply: "—", moq: "1 roll", delivery: "3–5 days" },
  { slug: "air-bubble-pouch", name: "Air Bubble Pouches", category: "materials", images: [LOCAL_IMAGES["materials"][6], LOCAL_IMAGES["materials"][7]], short: "Pre-formed bubble pouches for individual item protection.", ply: "—", moq: "1000 pcs", delivery: "5–7 days" },
  { slug: "foam-sheet", name: "Foam Sheets", category: "materials", images: [LOCAL_IMAGES["materials"][7], LOCAL_IMAGES["materials"][0]], short: "Protective foam sheets for cushioning and padding.", ply: "—", moq: "100 sheets", delivery: "5–7 days" },
  { slug: "epe-foam-roll", name: "EPE Foam Rolls", category: "materials", images: [LOCAL_IMAGES["materials"][0], LOCAL_IMAGES["materials"][1]], short: "Expanded polyethylene foam rolls for wrapping.", ply: "—", moq: "1 roll", delivery: "5–7 days" },
  { slug: "kraft-paper-roll", name: "Kraft Paper Rolls", category: "materials", images: [LOCAL_IMAGES["materials"][1], LOCAL_IMAGES["materials"][2]], short: "Kraft paper rolls for wrapping and interleaving.", ply: "—", moq: "1 roll", delivery: "3–5 days" },
  { slug: "packing-paper", name: "Packing Paper", category: "materials", images: [LOCAL_IMAGES["materials"][2], LOCAL_IMAGES["materials"][3]], short: "Newsprint and kraft packing paper for void fill.", ply: "—", moq: "10 kg", delivery: "3–5 days" },
  { slug: "corrugated-paper-roll", name: "Corrugated Paper Rolls", category: "corrugated-rolls", images: [LOCAL_IMAGES["corrugated-rolls"][1], LOCAL_IMAGES["corrugated-rolls"][2]], short: "Corrugated paper rolls for wrapping and protection.", ply: "—", moq: "1 roll", delivery: "3–5 days" },
  { slug: "dunnage-bag", name: "Dunnage Bags", category: "materials", images: [LOCAL_IMAGES["materials"][4], LOCAL_IMAGES["materials"][5]], short: "Inflatable dunnage bags for void fill in containers.", ply: "—", moq: "50 pcs", delivery: "7–10 days" },
  { slug: "packing-label", name: "Packing Labels", category: "materials", images: [LOCAL_IMAGES["materials"][5], LOCAL_IMAGES["materials"][6]], short: "Custom packing labels for identification and branding.", ply: "—", moq: "1000 pcs", delivery: "5–7 days" },
  { slug: "shrink-wrap", name: "Shrink Wrap", category: "materials", images: [LOCAL_IMAGES["materials"][6], LOCAL_IMAGES["materials"][7]], short: "PVC & POF shrink wrap film for retail bundling.", ply: "—", moq: "1 roll", delivery: "3–5 days" },
  { slug: "packaging-tape", name: "Packaging Tape", category: "materials", images: [LOCAL_IMAGES["materials"][7], LOCAL_IMAGES["materials"][0]], short: "BOPP self-adhesive packaging tape — clear & printed.", ply: "—", moq: "1 carton", delivery: "3–5 days" },
  { slug: "shrink-film", name: "Shrink Film", category: "materials", images: [LOCAL_IMAGES["materials"][0], LOCAL_IMAGES["materials"][1]], short: "PVC & POF shrink wrap film for retail bundling.", ply: "—", moq: "1 roll", delivery: "3–5 days" },
  { slug: "packaging-accessories", name: "Packaging Accessories", category: "materials", images: [LOCAL_IMAGES["materials"][1], LOCAL_IMAGES["materials"][2]], short: "Complete range of packaging accessories and tools.", ply: "—", moq: "100 pcs", delivery: "5–7 days" },

  // Industrial (specialty)
  { slug: "automobile-packaging", name: "Automobile Part Packaging", category: "industrial", images: [LOCAL_IMAGES["industrial"][0], LOCAL_IMAGES["industrial"][1]], short: "Reinforced multi-ply boxes for auto components & spares.", ply: "7 / 9 / 11 Ply", moq: "200 pcs", delivery: "10–15 days" },
  { slug: "engineering-packaging", name: "Engineering Component Packaging", category: "industrial", images: [LOCAL_IMAGES["wooden-crates"][0], LOCAL_IMAGES["wooden-crates"][1]], short: "Custom crated packaging for engineering components & machinery.", ply: "7 / 9 Ply", moq: "100 pcs", delivery: "10–15 days" },
  { slug: "pharma-carton", name: "Pharma Carton", category: "industrial", images: [LOCAL_IMAGES["printed"][0], LOCAL_IMAGES["printed"][1]], short: "GMP-friendly pharmaceutical cartons with tamper-evident options.", ply: "—", moq: "1000 pcs", delivery: "10–14 days" },
  { slug: "electronics-packaging", name: "Electronics Packaging", category: "industrial", images: [LOCAL_IMAGES["shipping"][0], LOCAL_IMAGES["shipping"][1]], short: "Custom-fit inserts & cartons for electronics & appliances.", ply: "5 / 7 Ply", moq: "300 pcs", delivery: "10–15 days" },
];

export const INDUSTRIES = [
  { name: "Automobile", image: "/images/industries/Automobile.jpg", desc: "Reinforced packaging for auto components & spare parts." },
  { name: "Electronics", image: "/images/industries/Electronics.jpg", desc: "Anti-static, custom-fit boxes for gadgets & appliances." },
  { name: "Pharmaceutical", image: "/images/industries/Pharmaceutical.jpg", desc: "GMP-friendly, tamper-evident pharma packaging." },
  { name: "FMCG", image: "/images/industries/FMCG.jpg", desc: "Shelf-ready printed cartons for daily-use consumer goods." },
  { name: "Textile", image: "/images/industries/Textile.jpg", desc: "Bulk textile bales, roll cores & garment cartons." },
  { name: "E-commerce", image: "/images/industries/E-commerce.jpg", desc: "Durable, brandable shipping mailers & self-lock boxes." },
  { name: "Furniture", image: "/images/industries/Furniture.jpg", desc: "Heavy-ply protective packaging for flat-pack furniture." },
  { name: "Chemical", image: "/images/industries/Chemical.jpg", desc: "Compliance-grade cartons for lubricants & chemicals." },
];

export const MANUFACTURING_STEPS = [
  { n: "01", title: "Raw Material", desc: "Virgin kraft paper reels sourced from certified Indian mills." },
  { n: "02", title: "Corrugation", desc: "High-speed corrugators produce 3 to 13-ply corrugated boards." },
  { n: "03", title: "Printing", desc: "Flexographic and offset printing — up to 6-colour." },
  { n: "04", title: "Die Cutting", desc: "Precision die-cutting for complex shapes and custom inserts." },
  { n: "05", title: "Pasting", desc: "Automatic gluers ensure clean, strong bonds on every seam." },
  { n: "06", title: "Slotting", desc: "Slotters cut flaps & scores with tight tolerances." },
  { n: "07", title: "Stitching", desc: "Wire-stitching for heavy-duty and export cartons." },
  { n: "08", title: "Quality Check", desc: "Bursting strength, ECT, GSM & moisture checks on every batch." },
  { n: "09", title: "Warehouse", desc: "Organised warehousing keeps stock ready for JIT dispatch." },
  { n: "10", title: "Dispatch", desc: "Owned fleet & partner logistics — Mumbai and PAN-India." },
];

export const STATS = [
  { n: "30+", label: "Years of Manufacturing" },
  { n: "500+", label: "B2B Clients Served" },
  { n: "70M+", label: "Boxes Delivered" },
  { n: "98%", label: "On-Time Dispatch" },
];

export const TESTIMONIALS = [
  { name: "Rakesh Menon", role: "Procurement, Auto Components Ltd.", text: "GN Packaging supplies our heavy-duty export cartons. Their 9-ply cartons have held up across three continents. Zero rejections in 4 years." },
  { name: "Ankit Shah", role: "Founder, E-commerce Brand", text: "We switched to GN's custom die-cut boxes and saw a measurable drop in transit damage. The team is responsive and honest." },
  { name: "Dr. Farhan Ali", role: "Supply Chain, Pharma Co.", text: "Consistent GSM, clean printing, tamper-evident options — exactly what pharma packaging demands." },
  { name: "Nikhil Patil", role: "Ops Head, Engineering Firm", text: "Their wooden crates and edge protectors travel PAN-India without damage. Solid manufacturing." },
];

export const FAQS = [
  { q: "What is your minimum order quantity (MOQ)?", a: "MOQ varies by product — from 300 to 1,000 pieces for corrugated boxes. For sheets, rolls and materials, we ship from 50 kg / 1000 sqft." },
  { q: "Do you offer custom sizes and printing?", a: "Yes. We manufacture 100% custom sizes, ply combinations, colours and finishes — including offset & flexo printing up to 6 colours." },
  { q: "How fast is your typical delivery timeline?", a: "Stock items ship in 3–5 days. Custom orders take 7–15 days depending on ply, printing complexity and quantity." },
  { q: "Do you ship outside Mumbai?", a: "Yes — we ship PAN-India through our own fleet + trusted logistics partners. Export shipments are handled with ISPM-15 compatible crating." },
  { q: "Can you supply GMP-grade packaging?", a: "Yes — GMP-compatible pharma cartons are a core offering, with tamper-evident and validated construction available." },
  { q: "Do you provide brochures / catalogue?", a: "Yes. Request our PDF catalogue via WhatsApp or the contact form and our team will share it within 24 hours." },
];

// GALLERY — packaging & factory only (no bottles, no food)
export const GALLERY = {
  factory: [
    "/images/manufacturing/Corrugation Line.jpg",
    "/images/manufacturing/Flexo Printer.jpg",
    "/images/manufacturing/Offset Press.jpg",
    "/images/manufacturing/Auto Die-Cutter.jpg",
    "/images/manufacturing/Auto Gluer.jpg",
    "/images/manufacturing/Pin Stitcher.jpg"
  ],
  products: [...PRODUCT_CATEGORIES.flatMap(category => getCategoryImages(category))],
};

export const BLOG_POSTS = [
  { slug: "how-to-choose-corrugated-box-for-shipping", title: "How to Choose the Right Corrugated Box for Shipping", excerpt: "Ply, GSM, flute profile and bursting strength — the four numbers every buyer must understand before ordering shipping cartons.", date: "Nov 18, 2025", read: "6 min", image: getCategoryImages("corrugated-boxes")[0], category: "Corrugated Boxes" },
  { slug: "benefits-of-corrugated-packaging", title: "10 Benefits of Corrugated Packaging for Businesses", excerpt: "From recyclability to load-bearing strength, corrugated packaging is the workhorse of Indian supply chains.", date: "Nov 12, 2025", read: "5 min", image: getCategoryImages("corrugated-boxes")[1], category: "Industry" },
  { slug: "sustainable-packaging-guide", title: "Sustainable Packaging — A Better Tomorrow", excerpt: "Honeycomb boards, recycled kraft, water-based inks — how brands are cutting carbon with smarter packaging.", date: "Nov 05, 2025", read: "7 min", image: getCategoryImages("honeycomb-sheet")[0], category: "Sustainability" },
  { slug: "packaging-trends-2026", title: "Latest Trends in Packaging Industry", excerpt: "Direct-to-consumer branding, protective mono-materials & the rise of edge-protectors in Indian logistics.", date: "Oct 28, 2025", read: "6 min", image: getCategoryImages("l-shape-edge-cardboard")[0], category: "Trends" },
  { slug: "export-packaging-checklist", title: "Export Packaging Checklist for Indian Manufacturers", excerpt: "ISPM-15, HS codes, edge protection & moisture-barrier films — a practical checklist before shipping abroad.", date: "Oct 20, 2025", read: "8 min", image: getCategoryImages("wooden-crate")[0], category: "Export" },
  { slug: "heavy-duty-packaging-guide", title: "Heavy Duty Packaging — When 7 Ply Isn't Enough", excerpt: "When to upgrade to 9-ply and 11-ply cartons for automobile, machinery & engineering exports.", date: "Oct 12, 2025", read: "6 min", image: getCategoryImages("imported-high-duty-pallet-box")[0], category: "Heavy Duty" },
  { slug: "honeycomb-board-vs-corrugated", title: "Honeycomb Board vs Corrugated — Which is Right?", excerpt: "A side-by-side comparison of strength, weight, cost and sustainability.", date: "Oct 04, 2025", read: "5 min", image: getCategoryImages("honeycomb-sheet")[1], category: "Honeycomb" },
  { slug: "printed-corrugated-box-guide", title: "Printed Corrugated Boxes — Flexo vs Offset", excerpt: "Understanding print methods, colour registration and cost economics for branded packaging.", date: "Sep 28, 2025", read: "7 min", image: getCategoryImages("customized-premium-box")[0], category: "Printing" },
  { slug: "die-cut-packaging-benefits", title: "Die-Cut Packaging — Precision Beyond the Standard Box", excerpt: "Why premium brands invest in die-cut structures and custom inserts for shelf differentiation.", date: "Sep 20, 2025", read: "6 min", image: getCategoryImages("custom-size-box")[0], category: "Custom" },
  { slug: "packaging-cost-optimisation", title: "How to Reduce Packaging Cost Without Losing Quality", excerpt: "Five real-world ways Indian SMEs cut 20–30% of packaging spend without compromising on protection.", date: "Sep 12, 2025", read: "8 min", image: getCategoryImages("custom-size-box")[1], category: "Business" },
  { slug: "edge-protector-uses", title: "Edge Protectors — The Unsung Hero of Palletisation", excerpt: "How L-shape edge protectors stabilise loads, prevent damage and cut freight claims.", date: "Sep 04, 2025", read: "5 min", image: getCategoryImages("l-shape-edge-cardboard")[1], category: "Protection" },
  { slug: "wooden-crate-vs-corrugated", title: "Wooden Crate vs Corrugated Carton — Which Should You Use?", excerpt: "When the load, distance or fragility justifies moving up from corrugated to wooden crate packaging.", date: "Aug 28, 2025", read: "7 min", image: getCategoryImages("wooden-crate")[1], category: "Wooden" },
];

// Small helper — get all images across all products of a category
export function categoryImages(categorySlug, limit = 20) {
  const items = PRODUCTS.filter((p) => p.category === categorySlug);
  const imgs = [];
  items.forEach((p) => p.images.forEach((i) => imgs.push(i)));
  return [...new Set(imgs)].slice(0, limit);
}
