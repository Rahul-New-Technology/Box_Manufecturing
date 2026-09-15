# Image Management System

This directory contains a well-organized structure for managing all images across the website. The structure is designed to be scalable and easy to maintain without requiring code changes.

## Directory Structure

```
public/images/
├── products/              # Product category images
│   ├── corrugated-boxes/     # Corrugated box product images
│   ├── sheets-rolls/         # Sheets and rolls product images
│   ├── wooden-crates/        # Wooden crate product images
│   ├── honeycomb-pallets/    # Honeycomb and pallet product images
│   ├── edge-rotectors/       # Edge protector product images
│   ├── heavy-duty-export/    # Heavy duty and export packaging images
│   ├── e-commerce-shipping/ # E-commerce and shipping packaging images
│   └── printed-custom/       # Printed and custom packaging images
├── industries/            # Industry-specific images
├── manufacturing/         # Manufacturing process and facility images
├── gallery/              # Gallery showcase images
├── about/                # About section images (team, facilities, company)
├── blog/                 # Blog post featured images
├── custom/               # Custom solution images
├── icons/                # UI icons and small graphics
├── logos/                # Company logos and branding
├── banners/              # Hero banners and promotional banners
└── thumbnails/           # Thumbnail versions of images
```

## Usage Guidelines

### Adding New Images

1. **Identify the appropriate folder** based on the image's purpose
2. **Use descriptive filenames** (e.g., `corrugated-box-hero.jpg` instead of `img1.jpg`)
3. **Use lowercase letters and hyphens** for filenames
4. **Use web-optimized formats** (WebP for photos, SVG for icons/logos)
5. **Maintain consistent dimensions** within each category

### Recommended File Naming Convention

- **Products**: `{product-name}-{view}.{ext}` (e.g., `corrugated-box-front.jpg`)
- **Banners**: `{section}-{purpose}.{ext}` (e.g., `home-hero-banner.jpg`)
- **Gallery**: `{description}-{number}.{ext}` (e.g., `manufacturing-facility-01.jpg`)
- **Blog**: `{post-slug}-featured.{ext}` (e.g., `sustainable-packaging-featured.jpg`)

### Image Optimization

- **Product images**: 800-1200px width, WebP/JPEG format
- **Banners**: 1920px width, WebP/JPEG format
- **Thumbnails**: 300-400px width, WebP format
- **Icons**: SVG format for scalability
- **Logos**: SVG format (primary), PNG fallback

### Accessing Images in React

```javascript
// Import images
import heroImage from '/images/banners/home-hero.jpg';
import productImage from '/images/products/corrugated-boxes/box-01.jpg';

// Or use direct paths
<img src="/images/banners/home-hero.jpg" alt="Hero Banner" />
```

## Maintenance

- **Regular cleanup**:Remove unused images periodically
- **Backup**: Keep backups of original high-resolution images
- **Version control**: Consider using a CDN for production deployments
- **Alt text**: Always include descriptive alt text for accessibility

## Scalability

This structure allows for:
- Easy addition of new product categories
- Simple reorganization without code changes
- Clear separation of concerns
- Efficient image management workflows
