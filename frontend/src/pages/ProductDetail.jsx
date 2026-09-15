import { useParams, Link, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle, Phone, Download, Check, ZoomIn } from "lucide-react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { MaskLine, Reveal } from "@/components/Reveal";
import { PRODUCTS, CATEGORIES } from "@/lib/data";
import { productInquiry, callLink } from "@/lib/whatsapp";

export default function ProductDetail() {
  const { slug } = useParams();
  const product = PRODUCTS.find((p) => p.slug === slug);
  const [active, setActive] = useState(0);
  const [zoom, setZoom] = useState(false);

  useEffect(() => {
    setActive(0);
    setZoom(false);
  }, [slug]);

  if (!product) return <Navigate to="/products" replace />;

  const category = CATEGORIES.find((c) => c.slug === product.category);
  const related = PRODUCTS.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 4);

  const specs = [
    { k: "Material", v: "Virgin Kraft Paper / Recycled Kraft" },
    { k: "Ply Options", v: product.ply },
    { k: "Available Sizes", v: "Custom (as per requirement)" },
    { k: "Printing", v: "Plain / 1-Color / 2-Color / 4-Color Offset & Flexo" },
    { k: "GSM Range", v: "80 – 300 GSM" },
    { k: "Bursting Strength", v: "8 – 25 kg/cm²" },
    { k: "Customization", v: "100% custom sizes & prints" },
    { k: "MOQ", v: product.moq },
    { k: "Delivery Time", v: product.delivery },
    { k: "Origin", v: "Made in Mumbai, India" },
  ];

  const features = [
    "High load-bearing capacity",
    "Custom sizes available",
    "Eco-friendly & recyclable",
    "Multi-color printing",
    "Water-resistant options",
    "GMP & food-grade variants available",
  ];

  const applications = ["Shipping", "Storage", "Export", "E-commerce", "Retail", "Warehousing"];
  const industries = ["Automobile", "Electronics", "Pharmaceutical", "FMCG", "Engineering", "Export"];
  const activeImage = product.images[active] || product.images[0];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.images,
    description: product.short,
    brand: { "@type": "Brand", name: "GN Packaging" },
    manufacturer: { "@type": "Organization", name: "GN Packaging" },
    offers: { "@type": "Offer", availability: "https://schema.org/InStock", priceCurrency: "INR" },
  };

  return (
    <>
      <SEO title={product.name} description={`${product.short} Ply: ${product.ply}. MOQ: ${product.moq}. Delivery: ${product.delivery}.`} image={product.images[0]} schema={schema} />

      <section className="pt-36 pb-6 bg-navy-dark">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <Breadcrumbs items={[{ label: "Products", to: "/products" }, { label: product.name }]} />
        </div>
      </section>

      <section className="bg-navy-dark pb-20">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 grid md:grid-cols-12 gap-10">
          {/* Gallery */}
          <div className="md:col-span-6">
            <motion.div
              className="relative bg-white rounded-2xl overflow-hidden aspect-square cursor-zoom-in card-shadow"
              onClick={() => setZoom(!zoom)}
              data-testid="product-image-zoom"
            >
              <motion.img
                key={`${slug}-${active}`}
                src={activeImage}
                alt={`${product.name} manufactured by GN Packaging Mumbai`}
                initial={{ opacity: 0.6, scale: 1 }}
                animate={{ opacity: 1, scale: zoom ? 1.6 : 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full object-contain"
              />
              <div className="absolute bottom-3 right-3 flex items-center gap-2 text-xs bg-navy-dark/85 text-white px-3 py-1.5 rounded-full backdrop-blur">
                <ZoomIn size={14} /> {zoom ? "Click to unzoom" : "Click to zoom"}
              </div>
            </motion.div>

            {product.images.length > 1 && (
              <div className="grid grid-cols-5 gap-2 mt-3">
                {product.images.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => { setActive(i); setZoom(false); }}
                    className={`aspect-square overflow-hidden rounded-lg transition-all ${active === i ? "ring-2 ring-gold" : "opacity-70 hover:opacity-100"}`}
                  >
                    <img src={src} alt={`${product.name} view ${i + 1}`} loading="lazy" className="w-full h-full object-contain" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="md:col-span-6">
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">{category?.name || "Product"}</div>
            <h1 className="font-display font-semibold text-4xl md:text-5xl leading-[1.05] tracking-tight text-white">
              <MaskLine onLoad>{product.name}</MaskLine>
            </h1>
            <p className="mt-5 text-white/75 leading-relaxed">{product.short}</p>

            <div className="mt-6 grid grid-cols-3 gap-2 text-sm">
              <StatCell label="Ply" value={product.ply} />
              <StatCell label="MOQ" value={product.moq} />
              <StatCell label="Delivery" value={product.delivery} />
            </div>

            <div className="mt-8 grid grid-cols-2 gap-2">
              {features.map((f) => (
                <div key={f} className="flex items-start gap-2 text-sm text-white/85">
                  <Check size={16} className="text-gold shrink-0 mt-1" /><span>{f}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a href={productInquiry(product.name)} target="_blank" rel="noreferrer" data-testid="product-inquiry-btn" className="btn-gold">
                Request Quote <ArrowUpRight size={18} />
              </a>
              <a href={productInquiry(product.name)} target="_blank" rel="noreferrer" data-testid="product-whatsapp-btn" className="btn-ghost">
                <MessageCircle size={18} /> WhatsApp
              </a>
              <a href={callLink()} className="btn-ghost"><Phone size={18} /> Call</a>
              <button className="btn-ghost" onClick={() => window.print()}>
                <Download size={16} /> Print Spec
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="bg-paper text-navy-dark py-20">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Specifications</div>
            <h2 className="font-display font-semibold text-3xl md:text-4xl leading-tight">Technical details</h2>
            <p className="mt-4 text-navy-dark/70 text-sm">All specifications are indicative — every order is manufactured to your exact requirement.</p>
          </div>
          <div className="md:col-span-8">
            <div className="rounded-2xl overflow-hidden bg-white card-shadow border border-navy-dark/5">
              <table className="w-full text-sm">
                <tbody>
                  {specs.map((s) => (
                    <tr key={s.k} className="border-b border-navy-dark/10 last:border-0">
                      <td className="py-4 px-6 font-medium text-navy-dark/80 w-1/3">{s.k}</td>
                      <td className="py-4 px-6 text-navy-dark">{s.v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Applications + Industries */}
      <section className="bg-paper text-navy-dark pb-20">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 grid md:grid-cols-2 gap-6">
          <Reveal>
            <div className="bg-navy-dark text-white rounded-2xl p-8 card-shadow">
              <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Applications</div>
              <div className="flex flex-wrap gap-2 mt-4">
                {applications.map((a) => <span key={a} className="px-4 py-2 rounded-full bg-white/10 border border-white/15 text-sm">{a}</span>)}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="bg-white rounded-2xl p-8 card-shadow border border-navy-dark/5">
              <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Industries</div>
              <div className="flex flex-wrap gap-2 mt-4">
                {industries.map((i) => <span key={i} className="px-4 py-2 rounded-full bg-paper border border-navy-dark/10 text-sm text-navy-dark">{i}</span>)}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Related products */}
      {related.length > 0 && (
        <section className="bg-navy-dark py-20">
          <div className="max-w-[1400px] mx-auto px-5 md:px-10">
            <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
              <h3 className="font-display font-semibold text-3xl md:text-4xl text-white">Related products</h3>
              <Link to="/products" className="btn-ghost">All products <ArrowUpRight size={18} /></Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {related.map((p) => (
                <Link key={p.slug} to={`/products/${p.slug}`} className="group block bg-white/5 rounded-2xl overflow-hidden border border-white/10">
                  <div className="aspect-[4/5] overflow-hidden bg-white/5">
                    <img src={p.images[0]} alt={p.name} loading="lazy" className="w-full h-full object-contain" />
                  </div>
                  <div className="p-4">
                    <div className="font-display text-lg text-white">{p.name}</div>
                    <div className="text-xs text-white/50 mt-1">{p.ply}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

function StatCell({ label, value }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-3">
      <div className="text-[10px] uppercase tracking-[0.2em] text-white/50">{label}</div>
      <div className="text-white text-sm mt-1 font-medium">{value}</div>
    </div>
  );
}
