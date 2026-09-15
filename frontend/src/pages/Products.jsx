import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, MessageCircle, FolderOpen, Grid3X3, ChevronDown } from "lucide-react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { MaskLine, StaggerContainer, StaggerItem } from "@/components/Reveal";
import ImageWithFallback from "@/components/ImageWithFallback";
import { CATEGORIES, PRODUCTS } from "@/lib/data";
import { getCategoryImages, getAvailableCategoryImages } from "@/lib/imageLoader";
import { waLink } from "@/lib/whatsapp";

export default function Products() {
  const [view, setView] = useState("categories"); // 'categories' or 'category-detail'
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCategoryImages, setSelectedCategoryImages] = useState([]);
  const [isLoadingImages, setIsLoadingImages] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const selectedCategoryData = selectedCategory
    ? CATEGORIES.find((c) => c.slug === selectedCategory)
    : null;
  const selectedCategoryProducts = selectedCategory
    ? PRODUCTS.filter((product) => product.category === selectedCategory || product.slug === selectedCategory)
    : [];

  // Load images dynamically when category changes
  useEffect(() => {
    const loadImages = async () => {
      if (selectedCategory) {
        setIsLoadingImages(true);
        try {
          const availableImages = await getAvailableCategoryImages(selectedCategory);
          setSelectedCategoryImages(availableImages);
        } catch (error) {
          // Fallback to static list if dynamic loading fails
          setSelectedCategoryImages(getCategoryImages(selectedCategory));
        } finally {
          setIsLoadingImages(false);
        }
      } else {
        setSelectedCategoryImages([]);
      }
    };

    loadImages();
  }, [selectedCategory]);

  const handleCategoryClick = (categorySlug) => {
    // Prevent duplicate clicks
    if (selectedCategory === categorySlug) {
      return; // Don't reload if already selected
    }
    
    // Reset images before setting new category to ensure fresh load
    setSelectedCategoryImages([]);
    setSelectedCategory(categorySlug);
    setView("category-detail");
  };

  // Scroll to category images section when view changes to category-detail
  useEffect(() => {
    if (view === "category-detail" && selectedCategory) {
      const scrollToImages = () => {
        const categorySection = document.getElementById('category-images-section');
        if (categorySection) {
          categorySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };
      
      // Single efficient scroll attempt with appropriate delay
      setTimeout(scrollToImages, 300);
    }
  }, [view, selectedCategory]);

  const handleBackToCategories = () => {
    setSelectedCategoryImages([]);
    setSelectedCategory(null);
    setView("categories");
  };

  return (
    <>
      <SEO title="Products · Industrial Packaging Catalogue" description="Browse corrugated boxes, wooden crates, honeycomb boards, edge protectors & custom packaging manufactured by GN Packaging Mumbai." />

      {/* Hero */}
      <section className="pt-36 pb-14 bg-navy-dark relative overflow-hidden">
        <img src="https://images.pexels.com/photos/4498176/pexels-photo-4498176.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Packaging" className="absolute inset-0 w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/40 via-navy-dark/60 to-navy-dark" />
        <div className="relative max-w-[1400px] mx-auto px-5 md:px-10">
          <Breadcrumbs items={[{ label: "Products" }]} />
          <h1 className="mt-6 font-display font-semibold text-4xl md:text-6xl leading-[1.05] tracking-tight text-white">
            <MaskLine onLoad>Our Products</MaskLine>
          </h1>
          <p className="mt-4 max-w-2xl text-white/75">
            Complete catalogue of corrugated & industrial packaging — every product manufactured to your specification.
          </p>
        </div>
      </section>

      <section className="bg-paper text-navy-dark py-14">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 grid lg:grid-cols-12 gap-8">
          {/* Left Sidebar - Hidden on mobile */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-navy-dark/5 card-shadow">
                <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Product Categories</div>
                <nav className="space-y-1">
                  {CATEGORIES.map((c) => (
                    <button
                      key={c.slug}
                      onClick={() => handleCategoryClick(c.slug)}
                      data-testid={`filter-${c.slug}`}
                      className={`w-full text-left px-4 py-2.5 rounded-lg transition-colors flex items-center justify-between ${selectedCategory === c.slug ? "bg-navy-dark text-white" : "hover:bg-paper text-navy-dark"}`}
                    >
                      <span className="text-sm font-medium">{c.name}</span>
                      <span className="text-xs opacity-70">View Images</span>
                    </button>
                  ))}
                </nav>
              </div>

              <div className="bg-navy-dark text-white rounded-2xl p-6 card-shadow">
                <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Need Help?</div>
                <div className="font-display text-xl leading-tight">Talk to our team</div>
                <p className="text-white/70 text-sm mt-2">Get instant response on WhatsApp for pricing, MOQ or custom sizes.</p>
                <a href={waLink()} target="_blank" rel="noreferrer" className="btn-gold mt-4 !py-2.5 !text-sm w-full justify-center">
                  <MessageCircle size={16} /> WhatsApp Now
                </a>
              </div>
            </div>
          </aside>

          {/* Right Content */}
          <div className="lg:col-span-9">
            {/* Mobile Category Dropdown */}
            <div className="lg:hidden mb-6">
              <div className="relative">
                <button
                  onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 bg-white border border-navy-dark/10 rounded-lg text-left"
                >
                  <span className="font-medium text-navy-dark">
                    {selectedCategory ? selectedCategoryData?.name : "Select Category"}
                  </span>
                  <ChevronDown 
                    size={20} 
                    className={`text-navy-dark transition-transform ${mobileDropdownOpen ? 'rotate-180' : ''}`} 
                  />
                </button>
                
                {mobileDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-navy-dark/10 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
                    <button
                      onClick={() => { setSelectedCategory(null); setMobileDropdownOpen(false); }}
                      className="w-full text-left px-4 py-3 hover:bg-paper border-b border-navy-dark/5"
                    >
                      All Categories
                    </button>
                    {CATEGORIES.map((c) => (
                      <button
                        key={c.slug}
                        onClick={() => { handleCategoryClick(c.slug); setMobileDropdownOpen(false); }}
                        className={`w-full text-left px-4 py-3 hover:bg-paper border-b border-navy-dark/5 ${selectedCategory === c.slug ? "bg-navy-dark text-white" : ""}`}
                      >
                        {c.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* View Toggle & Search */}
            <div className="hidden md:flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="font-display text-2xl md:text-3xl">
                  {view === "categories" ? "Product Categories" : 
                   selectedCategory ? selectedCategoryData?.name : "All Products"}
                </h2>
                <div className="flex items-center gap-3 mt-2">
                  <button
                    onClick={handleBackToCategories}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${view === "categories" ? "bg-navy-dark text-white" : "hover:bg-paper text-navy-dark"}`}
                  >
                    <FolderOpen size={16} />
                    <span className="text-sm font-medium">Categories</span>
                  </button>
                  <button
                    onClick={() => { setSelectedCategoryImages([]); setView("category-detail"); setSelectedCategory(null); }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${view === "category-detail" ? "bg-navy-dark text-white" : "hover:bg-paper text-navy-dark"}`}
                  >
                    <Grid3X3 size={16} />
                    <span className="text-sm font-medium">All Products</span>
                  </button>
                </div>
                <p className="text-navy-dark/60 text-sm mt-2">
                  {view === "categories" ? `${CATEGORIES.length} product categories` : 
                   selectedCategory ? `${isLoadingImages ? 'Loading...' : `${selectedCategoryImages.length} image${selectedCategoryImages.length === 1 ? "" : "s"} in this category`}` : `${CATEGORIES.length} categories with products`}
                </p>
              </div>
            </div>

            {/* Categories View */}
            {view === "categories" && (
              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {CATEGORIES.map((category) => (
                  <StaggerItem key={category.slug}>
                    <button
                      onClick={() => handleCategoryClick(category.slug)}
                      className="group bg-white rounded-2xl overflow-hidden border border-navy-dark/5 card-shadow h-full flex flex-col text-left hover:border-gold/30 transition-all duration-300"
                    >
                      <div className="aspect-[4/3] overflow-hidden bg-paper relative">
                        <ImageWithFallback 
                          src={category.cover} 
                          alt={category.name} 
                          categorySlug={category.slug}
                          loading="lazy" 
                          className="w-full h-full object-contain" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="text-white text-sm font-medium inline-flex items-center gap-1">
                            View Images <ArrowUpRight size={14} />
                          </span>
                        </div>
                      </div>
                      <div className="p-5 flex-1 flex flex-col">
                        <div className="text-[10px] uppercase tracking-[0.25em] text-gold mb-2">Category</div>
                        <div className="font-display text-lg text-navy-dark leading-tight">{category.name}</div>
                        <p className="mt-2 text-sm text-navy-dark/60 line-clamp-2 flex-1">{category.desc}</p>
                        <div className="mt-4 flex items-center justify-between">
                          <span className="text-xs font-medium text-navy-dark/70">
                            Click to view images
                          </span>
                        </div>
                      </div>
                    </button>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            )}

            {/* Category Detail View - Shows images for selected category */}
            {view === "category-detail" && selectedCategory && (
              <div id="category-images-section">
                <button
                  onClick={handleBackToCategories}
                  className="mb-4 text-sm font-medium text-navy-dark hover:text-gold transition-colors inline-flex items-center gap-1"
                >
                  ← Back to Categories
                </button>
                {isLoadingImages ? (
                  <div className="bg-white rounded-2xl border border-navy-dark/5 card-shadow p-8 text-center text-navy-dark/70">
                    Loading images...
                  </div>
                ) : selectedCategoryImages.length > 0 ? (
                  <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {selectedCategoryImages.map((imagePath, index) => (
                      <StaggerItem key={imagePath}>
                        <div className="group bg-white rounded-2xl overflow-hidden border border-navy-dark/5 card-shadow">
                          <div className="aspect-[4/3] overflow-hidden bg-paper">
                            <ImageWithFallback
                              src={imagePath}
                              alt={`${selectedCategoryData?.name} ${index + 1}`}
                              categorySlug={selectedCategory}
                              loading="lazy"
                              className="w-full h-full object-contain"
                            />
                          </div>
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                ) : (
                  <div className="bg-white rounded-2xl border border-navy-dark/5 card-shadow p-8 text-center text-navy-dark/70">
                    No images are saved in this category folder yet.
                  </div>
                )}


              </div>
            )}

            {/* All Products View - Shows all categories */}
            {view === "category-detail" && !selectedCategory && (
              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {CATEGORIES.map((category) => (
                  <StaggerItem key={category.slug}>
                    <button
                      onClick={() => handleCategoryClick(category.slug)}
                      className="group bg-white rounded-2xl overflow-hidden border border-navy-dark/5 card-shadow h-full flex flex-col text-left hover:border-gold/30 transition-all duration-300"
                    >
                      <div className="aspect-[4/3] overflow-hidden bg-paper relative">
                        <ImageWithFallback 
                          src={category.cover} 
                          alt={category.name} 
                          categorySlug={category.slug}
                          loading="lazy" 
                          className="w-full h-full object-contain" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="text-white text-sm font-medium inline-flex items-center gap-1">
                            View Images <ArrowUpRight size={14} />
                          </span>
                        </div>
                      </div>
                      <div className="p-5 flex-1 flex flex-col">
                        <div className="text-[10px] uppercase tracking-[0.25em] text-gold mb-2">Category</div>
                        <div className="font-display text-lg text-navy-dark leading-tight">{category.name}</div>
                        <p className="mt-2 text-sm text-navy-dark/60 line-clamp-2 flex-1">{category.desc}</p>
                        <div className="mt-4 flex items-center justify-between">
                          <span className="text-xs font-medium text-navy-dark/70">
                            Click to view images
                          </span>
                        </div>
                      </div>
                    </button>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            )}



            {/* Category CTA */}
            <div className="mt-10 bg-navy-dark text-white rounded-2xl p-6 md:p-8 flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-gold mb-2">Need Custom Requirement?</div>
                <h3 className="font-display text-xl md:text-2xl">We manufacture as per your specification.</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link to="/quote" className="btn-gold">Get Free Quote <ArrowUpRight size={18} /></Link>
                <a href={waLink()} target="_blank" rel="noreferrer" className="btn-ghost"><MessageCircle size={18} /> WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
