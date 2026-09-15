import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { ArrowUpRight, Phone, MessageCircle, ChevronRight, ShieldCheck, Sparkles, Factory, TrendingUp, Check } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SEO from "@/components/SEO";
import Marquee from "@/components/Marquee";
import { Reveal, MaskLine, StaggerContainer, StaggerItem } from "@/components/Reveal";
import { COMPANY, CATEGORIES, PRODUCTS, INDUSTRIES, MANUFACTURING_STEPS, STATS, TESTIMONIALS, FAQS, BLOG_POSTS } from "@/lib/data";
import { waLink, callLink } from "@/lib/whatsapp";
import { HERO } from "@/constants/testIds";

const HERO_IMG = "https://images.pexels.com/photos/4498176/pexels-photo-4498176.jpeg?auto=compress&cs=tinysrgb&w=1800";

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const yImg = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  const trustSignals = [
    "GST Registered (27AOKPK4980P1Z2)",
    "Owner-led B2B Support",
    "Custom Manufacturing to Drawing",
    "Fair, Honest Delivery Timelines",
    "Proper Tax Invoice with Every Order",
    "Small-batch to Bulk Orders",
    "Support in English, Hindi & Marathi",
    "PAN-India Dispatch",
  ];

  return (
    <>
      <SEO
        title="Complete Industrial Packaging Solutions"
        description="Manufacturer of corrugated boxes, sheets, rolls, wooden crates, honeycomb boards, edge protectors & custom industrial packaging. Mumbai. Serving 500+ B2B clients across India & export markets."
      />

      {/* ---------- HERO ---------- */}
      <section ref={heroRef} className="relative min-h-[100svh] overflow-hidden bg-navy-dark pt-28 pb-16">
        {/* Parallax image */}
        <motion.div style={{ y: yImg }} className="absolute inset-0 -z-10">
          <img
            src={HERO_IMG}
            alt="Corrugated packaging boxes manufactured by GN Packaging Mumbai"
            className="w-full h-full object-cover opacity-45"
            loading="eager"
            width="1920"
            height="1080"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/50 via-navy-dark/30 to-navy-dark" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/85 via-navy-dark/30 to-transparent" />
        </motion.div>

        <div className="relative max-w-[1400px] mx-auto px-5 md:px-10 min-h-[calc(100svh-112px)] flex flex-col justify-center">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <MaskLine onLoad className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-gold mb-6" delay={0.1}>
                GST Registered · Mumbai-based Manufacturer · GSTIN {COMPANY.gstin}
              </MaskLine>

              <h1 className="font-display text-white leading-[0.95] tracking-tight text-4xl sm:text-5xl md:text-6xl xl:text-7xl mb-6 md:mb-8">
                <MaskLine onLoad delay={0.2}>Industrial Packaging</MaskLine>
                <MaskLine onLoad delay={0.35} className="text-gold">Manufacturer in Mumbai</MaskLine>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85, duration: 0.9 }}
                className="max-w-2xl text-white/85 text-base md:text-lg leading-relaxed mb-8"
              >
                <strong>GN Packaging</strong> manufactures corrugated boxes, sheets, rolls, wooden crates, honeycomb boards, edge protectors and 100% custom industrial packaging — supplied directly from our Ghatkopar (W) factory to 500+ B2B clients across India.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.9 }}
                className="flex flex-wrap gap-3"
              >
                <Link to="/quote" data-testid={HERO.quoteBtn} className="btn-gold">
                  Get a Quote <ArrowUpRight size={18} />
                </Link>
                <a href={waLink()} target="_blank" rel="noreferrer" data-testid={HERO.whatsappBtn} className="btn-ghost">
                  <MessageCircle size={18} /> WhatsApp Now
                </a>
                <a href={callLink()} data-testid={HERO.callBtn} className="btn-ghost">
                  <Phone size={18} /> Call +91 {COMPANY.call_number}
                </a>
              </motion.div>

              {/* Trust bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.9 }}
                className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/60"
              >
                <span className="flex items-center gap-2"><Check size={14} className="text-gold" /> GST Registered</span>
                <span className="flex items-center gap-2"><Check size={14} className="text-gold" /> Custom Manufacturing</span>
                <span className="flex items-center gap-2"><Check size={14} className="text-gold" /> Quality Focused</span>
                <span className="flex items-center gap-2"><Check size={14} className="text-gold" /> Direct Owner Support</span>
              </motion.div>
            </div>

            {/* Boxes image — responsive across all breakpoints */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 order-1 lg:order-2 relative flex justify-center lg:justify-end mb-4 lg:mb-0"
            >
              {/* Ambient glows */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-3/4 h-3/4 bg-gold/25 blur-[80px] rounded-full" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-full h-full bg-navy-light/30 blur-[100px] rounded-full" />
              </div>

              <motion.img
                src="https://customer-assets-lqy194kg.emergentagent.net/job_industrial-pack-pro-2/artifacts/fp5lai06_image.png"
                alt="Corrugated boxes stack manufactured by GN Packaging Mumbai"
                loading="eager"
                width="540"
                height="540"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                style={{ mixBlendMode: "screen", filter: "brightness(1.05) contrast(1.15)" }}
                className="relative w-[75%] sm:w-[60%] md:w-[50%] lg:w-full max-w-[540px] object-contain"
              />

              {/* Floating badge — years experience */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute left-2 sm:left-6 md:left-16 lg:left-0 top-2 md:top-6 bg-white text-navy-dark rounded-2xl px-4 py-2.5 md:px-5 md:py-3 shadow-2xl border-l-4 border-gold"
              >
                <div className="font-display font-bold text-xl md:text-2xl leading-none">30+</div>
                <div className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-navy-dark/60 mt-1">Years of Manufacturing</div>
              </motion.div>

              {/* Floating badge — products */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute right-2 sm:right-6 md:right-16 lg:right-0 bottom-2 md:bottom-8 bg-gold text-navy-dark rounded-2xl px-4 py-2.5 md:px-5 md:py-3 shadow-2xl"
              >
                <div className="font-display font-bold text-xl md:text-2xl leading-none">40+</div>
                <div className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] mt-1 font-medium">Products</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ---------- STATS BAND ---------- */}
      <section className="relative bg-navy border-y border-white/10">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="text-center md:text-left">
                <div className="font-display text-4xl md:text-5xl text-gold leading-none">{s.n}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.25em] text-white/60">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- MARQUEE ---------- */}
      <section className="bg-navy-dark">
        <Marquee items={["Corrugated Boxes", "Wooden Crates", "Honeycomb Board", "Edge Protectors", "Export Packaging", "Custom Die Cut", "Kraft Paper Roll", "Printed Cartons"]} accent />
      </section>

      {/* ---------- WHY CHOOSE US ---------- */}
      <section className="bg-paper text-navy-dark py-20 md:py-24">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="grid md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-6">
              <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Why Buyers Choose Us</div>
              <h2 className="font-display font-semibold text-3xl md:text-5xl leading-[1.05] tracking-tight">
                Straightforward, verifiable trust signals.
              </h2>
            </div>
            <div className="md:col-span-6">
              <p className="text-navy-dark/70 text-base leading-relaxed">
                We keep our claims honest. Here is exactly what you can expect when you buy from GN Packaging.
              </p>
              <div className="mt-4 text-sm text-navy-dark/80">
                <div><strong>GSTIN:</strong> {COMPANY.gstin}</div>
                <div><strong>Owners:</strong> Firoz Khan · Moinuddin Khan</div>
              </div>
            </div>
          </div>

          <StaggerContainer className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-3">
            {trustSignals.map((t) => (
              <StaggerItem key={t}>
                <div className="bg-white rounded-2xl p-5 border border-navy-dark/5 card-shadow flex items-start gap-3">
                  <Check size={18} className="text-gold shrink-0 mt-0.5" />
                  <span className="text-sm text-navy-dark leading-snug">{t}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ---------- PRODUCT CATEGORIES ---------- */}
      <section className="relative bg-navy-dark py-20 md:py-24">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Our Products</div>
              <h2 className="font-display font-semibold text-3xl md:text-5xl leading-[1.05] tracking-tight text-white max-w-3xl">
                10 categories. 40+ products. Custom manufacturing.
              </h2>
            </div>
            <Link to="/products" className="btn-gold">View all <ArrowUpRight size={18} /></Link>
          </div>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {CATEGORIES.map((c) => (
              <StaggerItem key={c.slug}>
                <Link
                  to={`/products?category=${c.slug}`}
                  data-testid={`home-category-${c.slug}`}
                  className="group block bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-gold transition-colors"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-white/5">
                    <img src={c.cover} alt={c.name} loading="lazy" className="w-full h-full object-contain" width="400" height="300" />
                  </div>
                  <div className="p-4">
                    <div className="text-[10px] uppercase tracking-[0.25em] text-gold">Category</div>
                    <div className="font-display text-lg text-white mt-1 leading-tight">{c.name}</div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ---------- CUSTOM PACKAGING CTA ---------- */}
      <section className="relative bg-paper text-navy-dark py-20 md:py-24 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 grid md:grid-cols-12 gap-10 items-center">
          <Reveal className="md:col-span-6">
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Custom Manufacturing</div>
            <h2 className="font-display font-semibold text-3xl md:text-5xl leading-[1.05] tracking-tight">
              We manufacture packaging exactly as you specify.
            </h2>
            <p className="mt-5 max-w-lg text-navy-dark/70 leading-relaxed">
              Length, Width, Height. 3 to 13 ply. Plain, 1-colour, 2-colour or 4-colour offset print. Configure it visually — we send the quote directly on WhatsApp.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/custom-packaging" className="btn-gold">Open Configurator <ArrowUpRight size={18} /></Link>
              <a href={waLink()} target="_blank" rel="noreferrer" className="btn-ghost !text-navy-dark !border-navy-dark/30"><MessageCircle size={18} /> Talk to Us</a>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="md:col-span-6">
            <div className="grid grid-cols-2 gap-3">
              {["3 Ply", "5 Ply", "7 Ply", "9 Ply", "11 Ply", "13 Ply"].map((label, i) => (
                <motion.div
                  key={label}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white rounded-2xl p-5 border border-navy-dark/5 card-shadow"
                >
                  <div className="text-xs uppercase tracking-[0.25em] text-gold">Option {String(i + 1).padStart(2, "0")}</div>
                  <div className="font-display text-3xl mt-2 text-navy-dark">{label}</div>
                  <div className="mt-2 text-xs text-navy-dark/60">Kraft · Virgin / Recycled</div>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- INDUSTRIES ---------- */}
      <section className="bg-navy-dark py-20 md:py-24">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Industries We Serve</div>
          <h2 className="font-display font-semibold text-3xl md:text-5xl leading-[1.05] tracking-tight text-white max-w-3xl">
            From automobile to export — one supplier.
          </h2>

          <StaggerContainer className="mt-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {INDUSTRIES.slice(0, 10).map((ind) => (
              <StaggerItem key={ind.name}>
                <Link to="/industries" className="group relative block overflow-hidden rounded-2xl border border-white/10">
                  <div className="aspect-square overflow-hidden">
                    <img src={ind.image} alt={ind.name} loading="lazy" className="w-full h-full object-contain" width="400" height="400" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/30 to-transparent" />
                  </div>
                  <div className="absolute inset-0 p-4 flex flex-col justify-end text-white">
                    <div className="font-display text-base md:text-lg">{ind.name}</div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="mt-10 text-center">
            <Link to="/industries" className="inline-flex items-center gap-2 text-white font-medium hover:text-gold transition-colors">
              See all 20 industries <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- MANUFACTURING TIMELINE ---------- */}
      <section className="bg-paper text-navy-dark py-20 md:py-24">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Manufacturing Process</div>
              <h2 className="font-display font-semibold text-3xl md:text-5xl leading-[1.05] tracking-tight max-w-3xl">
                From kraft roll to dispatch — in ten steps.
              </h2>
            </div>
            <Link to="/manufacturing" className="btn-gold">Tour the factory <ArrowUpRight size={18} /></Link>
          </div>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-5 gap-3">
            {MANUFACTURING_STEPS.map((s) => (
              <StaggerItem key={s.n} className="bg-white rounded-2xl p-5 border border-navy-dark/5 card-shadow">
                <div className="text-gold font-display text-3xl">{s.n}</div>
                <div className="font-display text-lg mt-2 text-navy-dark">{s.title}</div>
                <p className="text-xs text-navy-dark/60 mt-2 leading-relaxed">{s.desc}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ---------- MANIFESTO CHAPTERS ---------- */}
      <section className="bg-navy-dark py-20 md:py-24">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Why GN Packaging</div>
          <h2 className="font-display font-semibold text-3xl md:text-5xl leading-[1.05] tracking-tight text-white max-w-3xl">
            Why serious brands choose us.
          </h2>

          <div className="mt-12 grid md:grid-cols-2 gap-4">
            {[
              { n: "01", icon: Factory, title: "Owned Manufacturing", body: "Our Ghatkopar factory runs corrugators, offset & flexo presses, die-cutters and finishing lines. No middlemen, no delays." },
              { n: "02", icon: ShieldCheck, title: "Consistent Quality", body: "Every batch is tested for bursting strength, ECT, GSM and moisture — because your product's first impression starts with the box." },
              { n: "03", icon: TrendingUp, title: "Scale Without Waiting", body: "From 300-piece startup orders to 100,000-piece corporate runs, we ship on time. 98% on-time dispatch across 18 years." },
              { n: "04", icon: Sparkles, title: "Genuine Customisation", body: "Any size, any ply, any print — plus embossing, foil, UV & spot varnish for premium retail SKUs." },
            ].map((c) => (
              <Reveal key={c.n}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="font-display text-4xl text-gold">{c.n}</div>
                    <c.icon size={26} className="text-white/70" />
                  </div>
                  <h3 className="font-display text-2xl text-white leading-tight">{c.title}</h3>
                  <p className="mt-3 text-white/70 leading-relaxed text-sm">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- TESTIMONIALS ---------- */}
      <section className="bg-navy-dark py-20 md:py-24">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Client Voices</div>
          <h2 className="font-display font-semibold text-3xl md:text-5xl leading-[1.05] tracking-tight text-white max-w-3xl">
            Trusted by procurement teams across India.
          </h2>

          <StaggerContainer className="mt-12 grid md:grid-cols-2 gap-4">
            {TESTIMONIALS.map((t, i) => (
              <StaggerItem key={i}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 h-full flex flex-col">
                  <p className="text-lg md:text-xl leading-snug text-white">"{t.text}"</p>
                  <div className="mt-5 pt-5 border-t border-white/10">
                    <div className="font-display text-base text-white">{t.name}</div>
                    <div className="text-xs text-white/60">{t.role}</div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ---------- BLOG ---------- */}
      <section className="bg-paper text-navy-dark py-20 md:py-24">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Knowledge Hub</div>
              <h2 className="font-display font-semibold text-3xl md:text-5xl leading-[1.05] tracking-tight">Latest from the blog</h2>
            </div>
            <Link to="/blog" className="btn-gold">All articles <ArrowUpRight size={18} /></Link>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {BLOG_POSTS.slice(0, 3).map((p) => (
              <Link key={p.slug} to={`/blog/${p.slug}`} className="group block bg-white rounded-2xl overflow-hidden border border-navy-dark/5 card-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-contain" width="400" height="300" />
                </div>
                <div className="p-5">
                  <div className="text-xs uppercase tracking-[0.25em] text-gold">{p.category} · {p.date}</div>
                  <h3 className="font-display text-lg mt-2 leading-tight group-hover:text-gold transition-colors">{p.title}</h3>
                  <p className="mt-2 text-sm text-navy-dark/60 line-clamp-2">{p.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="bg-navy-dark py-20 md:py-24">
        <div className="max-w-[900px] mx-auto px-5 md:px-10">
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3 text-center">FAQ</div>
          <h2 className="font-display font-semibold text-3xl md:text-5xl leading-[1.05] tracking-tight text-white text-center">
            Questions, answered.
          </h2>

          <Accordion type="single" collapsible className="mt-10">
            {FAQS.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-white/10">
                <AccordionTrigger className="text-left font-display text-lg md:text-xl text-white hover:text-gold transition-colors py-5">{f.q}</AccordionTrigger>
                <AccordionContent className="text-white/70 text-base leading-relaxed pb-6">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ---------- MAP + CONTACT ---------- */}
      <section className="bg-paper text-navy-dark">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-16 grid md:grid-cols-12 gap-8">
          <div className="md:col-span-5">
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Visit Us</div>
            <h3 className="font-display font-semibold text-3xl md:text-4xl leading-tight">Mumbai factory & sales office</h3>
            <p className="mt-5 text-navy-dark/75 leading-relaxed">{COMPANY.address_lines.join(", ")}</p>
            <div className="mt-5 space-y-1 text-sm text-navy-dark">
              {COMPANY.contacts.map((c) => (
                <a key={c.phone} href={`tel:+91${c.phone}`} className="block hover:text-gold transition-colors font-medium">+91 {c.phone} · {c.name}</a>
              ))}
              <a href={`mailto:${COMPANY.email}`} className="block hover:text-gold transition-colors">{COMPANY.email}</a>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-gold">Send Inquiry <ArrowUpRight size={18} /></Link>
              <a href={waLink()} target="_blank" rel="noreferrer" className="btn-ghost !text-navy-dark !border-navy-dark/30"><MessageCircle size={18} /> WhatsApp</a>
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="rounded-2xl overflow-hidden border border-navy-dark/10 card-shadow">
              <iframe 
                src={COMPANY.map_embed} 
                title="GN Packaging Location Mumbai" 
                width="100%" 
                height="440" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
