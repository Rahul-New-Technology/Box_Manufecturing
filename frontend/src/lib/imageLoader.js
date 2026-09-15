// Dynamic image loading utility for category-based product images
// This is a static site, so the safest approach is to keep an explicit
// manifest of the real files that exist in public/images/products/{category-slug}/.

// Placeholder image for categories without images
export const PLACEHOLDER_IMAGE = "https://images.pexels.com/photos/4498176/pexels-photo-4498176.jpeg?auto=compress&cs=tinysrgb&w=1200";

// Category-specific placeholder images (more relevant fallbacks)
export const CATEGORY_PLACEHOLDERS = {
  "wooden-pallet": "https://images.pexels.com/photos/4483866/pexels-photo-4483866.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "corrugated-boxes": "https://images.pexels.com/photos/4498136/pexels-photo-4498136.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "wooden-crate": "https://images.pexels.com/photos/4483941/pexels-photo-4483941.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "wooden-box": "/images/products/wooden-box/wooden-box1.jpeg",
  "gift-box": "https://images.pexels.com/photos/5025533/pexels-photo-5025533.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "corrugated-rolls": "/images/products/corrugated-rolls/corrugated-rolls1.jpg",
  "corrugated-sheets": "/images/products/corrugated-sheets/Corrugated Sheets1.jpg",
  "packers-movers": "/images/products/packers-movers/Packers & Movers1.jpg",
};

export const PRODUCT_CATEGORIES = [
  // PRIORITY 1 — BOX PRODUCTS (highest priority)
  "corrugated-boxes",
  "custom-size-box",
  "customized-premium-box",
  "fruit-box",
  "handle-box",
  "gift-box",
  "shoes-box",
  "white-duplex-box",
  "lock-punched-box",
  "imported-high-duty-pallet-box",
  "corrugated-rolls",
  
  // PRIORITY 2 — SHEET / BOARD PRODUCTS
  "corrugated-sheets",
  "honeycomb-sheet",
  "l-shape-edge-cardboard",
  
  // PRIORITY 3 — WOODEN PRODUCTS
  "wooden-pallet",
  "wooden-crate",
  "wooden-box",
  
  // PRIORITY 4 — OTHER PACKAGING PRODUCTS
  "packers-movers"
];

const CATEGORY_IMAGE_FILES = {
  "wooden-pallet": [
    "wooden-pallet1.jpg",
    "wooden-pallet2.jpg",
    "wooden-pallet3.jpg",
  ],
  "l-shape-edge-cardboard": [
    "l-shape-image1.jpg",
    "l-shape-image2.jpg",
    "l-shape-image3.jpg",
  ],
  "handle-box": [
    "handle-box1.jpg",
    "handle-box2.jpg",
    "handle-box3.jpg",
  ],
  "wooden-crate": [
    "wooden-crate1.jpg",
    "wooden-crate2.jpg",
    "wooden-crate3.jpg",
  ],
  "wooden-box": [
    "wooden-box1.jpeg",
    "wooden-box2.jpeg",
  ],
  "corrugated-boxes": [
    "corrugated-boxes1.jpg",
    "corrugated-boxes2.jpg",
    "corrugated-boxes3.jpg",
  ],
  "lock-punched-box": [
    "lock-images1.jpg",
    "lock-images2.jpg",
  ],
  "gift-box": [
    "gift1.jpg",
    "gift2.jpg",
    "gift3.jpg",
    "gift5.jpg",
  ],
  "honeycomb-sheet": [
    "honeycomb1.jpg",
    "honeycomb2.jpg",
  ],
  "shoes-box": [
    "shoes-box1.jpg",
    "shoes-box2.jpg",
    "shoes-box3.jpg",
  ],
  "fruit-box": [
    "fruit-box1.jpg",
    "fruit-box2.jpg",
    "fruit-box3.jpg",
  ],
  "customized-premium-box": [
    "customized-premium-box1.jpg",
    "customized-premium-box2.jpg",
    "customized-premium-box3.jpg",
    "customized-premium-box4.jpg",
  ],
  "imported-high-duty-pallet-box": [
    "imported-high-duty-pallet-box1.jpg",
    "imported-high-duty-pallet-box2.jpg",
    "imported-high-duty-pallet-box3.jpg",
    "imported-high-duty-pallet-box4.jpg",
  ],
  "white-duplex-box": [
    "white-duplex1.jpg",
    "white-duplex2.jpg",
    "white-duplex3.jpg",
  ],
  "custom-size-box": [
    "custom-size-box1.jpg",
    "custom-size-box2.jpg",
    "custom-size-box3.jpg",
    "custom-size-box4.jpg",
  ],
  "corrugated-rolls": [
    "corrugated-rolls1.jpg",
    "corrugated-rolls2.jpg",
    "corrugated-rolls3.jpg",
  ],
  "corrugated-sheets": [
    "Corrugated Sheets1.jpg",
    "Corrugated Sheets2.webp",
    "Corrugated Sheets3.jpg",
  ],
  "packers-movers": [
    "Packers & Movers1.jpg",
    "Packers & Movers2.jpg",
    "Packers & Movers3.jpg",
  ],
};

export const getCategoryPlaceholder = (categorySlug) => {
  return CATEGORY_PLACEHOLDERS[categorySlug] || PLACEHOLDER_IMAGE;
};

export const getCategoryImages = (categorySlug) => {
  const files = CATEGORY_IMAGE_FILES[categorySlug] || [];
  return files.map((fileName) => `/images/products/${categorySlug}/${fileName}`);
};

// Get default image for a category
export const getCategoryDefaultImage = (categorySlug) => {
  const [firstImage] = getCategoryImages(categorySlug);
  return firstImage || getCategoryPlaceholder(categorySlug);
};

// Get first available image for a category
export const getFirstAvailableImage = (categorySlug) => {
  const [firstImage] = getCategoryImages(categorySlug);
  return firstImage || getCategoryPlaceholder(categorySlug);
};

// Check if an image exists (fallback to placeholder)
export const getImageWithFallback = (imagePath, fallbackImage) => {
  return imagePath || fallbackImage;
};

// Dynamically load images that actually exist in a category folder
export const getAvailableCategoryImages = async (categorySlug) => {
  const knownFiles = CATEGORY_IMAGE_FILES[categorySlug] || [];
  const availableImages = [];
  
  for (const fileName of knownFiles) {
    const imagePath = `/images/products/${categorySlug}/${fileName}`;
    const exists = await validateImage(imagePath);
    if (exists) {
      availableImages.push(imagePath);
    }
  }
  
  return availableImages;
};

// Validate if an image exists
export const validateImage = (imagePath) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = imagePath;
  });
};
