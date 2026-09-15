// Advanced dynamic image loader that can scan folders and auto-populate categories
// This is a more sophisticated version for future enhancement

export const loadCategoryImages = async (categorySlug) => {
  // This would typically require a backend API to scan directories
  // For now, we'll use the static approach with fallbacks
  
  const images = [];
  for (let i = 1; i <= 8; i++) {
    const imagePath = `/images/products/${categorySlug}/image${i}.jpg`;
    images.push(imagePath);
  }
  
  return images;
};

export const validateImage = (imagePath) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = imagePath;
  });
};

export const getAvailableCategoryImages = async (categorySlug) => {
  const allImages = await loadCategoryImages(categorySlug);
  const availableImages = [];
  
  for (const imagePath of allImages) {
    const exists = await validateImage(imagePath);
    if (exists) {
      availableImages.push(imagePath);
    }
  }
  
  return availableImages;
};
