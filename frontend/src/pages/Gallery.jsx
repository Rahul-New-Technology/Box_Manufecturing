import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { MaskLine } from "@/components/Reveal";
import { GALLERY } from "@/lib/data";
import { Link } from "react-router-dom";

const TABS = [
  { key: "all", label: "All" },
  { key: "factory", label: "Factory" },
  { key: "products", label: "Products" },
];

export default function Gallery() {
  const [tab, setTab] = useState("all");
  const [lightbox, setLightbox] = useState(null);
  const images =
    tab === "all"
      ? [...GALLERY.factory, ...GALLERY.products]
      : GALLERY[tab] || [];

  return (
    <>
      <SEO title="Gallery" description="Inside look at GN Packaging — factory floor, machinery, products, warehouse & wooden crate manufacturing." />

      <section className="pt-36 pb-12 bg-navy-dark relative overflow-hidden">
        <img src={GALLERY.factory[0]} alt="Gallery" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/40 via-navy-dark/70 to-navy-dark" />
        <div className="relative max-w-[1400px] mx-auto px-5 md:px-10">
          <Breadcrumbs items={[{ label: "Gallery" }]} />
          <h1 className="mt-6 font-display font-semibold text-4xl md:text-6xl leading-[1.05] tracking-tight text-white">
            <MaskLine onLoad>Gallery</MaskLine>
          </h1>

          <div className="mt-8 flex flex-wrap gap-2">
            {TABS.map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                data-testid={`gallery-tab-${t.key}`}
                className={`px-5 py-2 rounded-full text-sm border transition-colors ${tab === t.key ? "bg-gold text-navy-dark border-gold" : "border-white/20 text-white/80 hover:border-white/50"}`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper text-navy-dark py-14">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {images.map((src, i) => (
              <button
                key={`${src}-${i}`}
                onClick={() => setLightbox(src)}
                className={`group overflow-hidden rounded-2xl aspect-square bg-white/5 card-shadow border border-navy-dark/5`}
              >
                <img src={src} alt={`${tab} ${i}`} loading="lazy" className="w-full h-full object-cover" />
              </button>
            ))}
          </motion.div>

          <div className="mt-14 bg-navy-dark text-white rounded-2xl p-8 md:p-10 text-center">
            <h3 className="font-display text-2xl md:text-3xl">Want to see more?</h3>
            <p className="text-white/70 mt-3 max-w-xl mx-auto">Visit our factory and see our production process live.</p>
            <Link to="/contact" className="btn-gold mt-6 inline-flex">Contact Us</Link>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 bg-navy-dark/95 backdrop-blur-xl z-[100] flex items-center justify-center p-6"
          >
            <button onClick={() => setLightbox(null)} className="absolute top-6 right-6 p-2 text-white/80 hover:text-white" aria-label="Close">
              <X size={24} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4 }}
              src={lightbox}
              alt="Enlarged"
              className="max-w-full max-h-full rounded-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
