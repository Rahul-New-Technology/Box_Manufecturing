import { Link } from "react-router-dom";
import { ArrowUpRight, Award, Heart, Lightbulb, Leaf, Users, Check } from "lucide-react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { MaskLine, Reveal, StaggerContainer, StaggerItem } from "@/components/Reveal";
import { STATS, COMPANY, GALLERY } from "@/lib/data";

const VALUES = [
  { icon: Award, name: "Quality" },
  { icon: Heart, name: "Integrity" },
  { icon: Lightbulb, name: "Innovation" },
  { icon: Leaf, name: "Sustainability" },
  { icon: Users, name: "Customer Satisfaction" },
];

const JOURNEY = [
  { year: "1994", title: "Company Established", desc: "GN Packaging founded in Ghatkopar, Mumbai." },
  { year: "2012", title: "New Setup", desc: "Expanded to a larger manufacturing unit with corrugation line." },
  { year: "2016", title: "Advanced Machinery Added", desc: "Introduced flexo & offset printing capabilities." },
  { year: "2017", title: "GST Registration", desc: "Officially registered under GST with GSTIN 27AOKPK4980P1Z2." },
  { year: "2019", title: "Expanded Production", desc: "Added die-cutting, wire-stitching and QC lab." },
  { year: "2025", title: "500+ Happy Clients", desc: "Serving procurement teams across India & export markets." },
];

const STRENGTHS = [
  "Owner-led B2B support",
  "Custom manufacturing to drawing",
  "Fair, honest delivery timelines",
  "Small-batch and bulk orders welcome",
  "PAN-India shipping",
  "Proper tax invoice with every order",
];

export default function About() {
  return (
    <>
      <SEO title="About GN Packaging" description="Since 1994, GN Packaging has manufactured corrugated boxes, sheets, rolls and custom packaging for 500+ B2B clients across India." />

      <section className="pt-36 pb-14 bg-navy-dark relative overflow-hidden">
        <img src={GALLERY.factory[0]} alt="About" className="absolute inset-0 w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/40 via-navy-dark/70 to-navy-dark" />
        <div className="relative max-w-[1400px] mx-auto px-5 md:px-10">
          <Breadcrumbs items={[{ label: "About" }]} />
          <h1 className="mt-6 font-display font-semibold text-4xl md:text-6xl leading-[1.05] tracking-tight text-white">
            <MaskLine onLoad>About Us</MaskLine>
          </h1>
          <p className="mt-4 max-w-2xl text-white/75">
            Mumbai-based manufacturer of industrial packaging — established with a vision to deliver honest quality at competitive prices.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="bg-paper text-navy-dark py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 grid md:grid-cols-12 gap-10 items-center">
          <Reveal className="md:col-span-6">
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">About GN Packaging</div>
            <h2 className="font-display font-semibold text-3xl md:text-4xl leading-tight">
              One of Mumbai's most trusted industrial packaging manufacturers.
            </h2>
            <p className="mt-5 text-navy-dark/75 leading-relaxed">
              <strong>GN Packaging</strong> is one of the leading manufacturers of corrugated boxes and packaging solutions. Established in 1994 with a vision to provide high-quality packaging at competitive prices, we've grown into a full-scale manufacturing house supplying auto, pharma, electronics, food, FMCG and export clients across India.
            </p>
            <p className="mt-4 text-navy-dark/75 leading-relaxed">
              We believe in quality, innovation and customer satisfaction. Our advanced infrastructure and skilled team ensure that we deliver the best packaging solution for your business.
            </p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {STRENGTHS.map((s) => (
                <div key={s} className="flex items-start gap-2 text-sm">
                  <Check size={16} className="text-gold shrink-0 mt-0.5" /> {s}
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-6">
            <div className="rounded-2xl overflow-hidden card-shadow">
              <img src={GALLERY.factory[1]} alt="GN Packaging Factory" className="w-full h-full object-cover aspect-[5/4]" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white text-navy-dark py-12 border-y border-navy-dark/5">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((s, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="text-center">
                <div className="font-display text-4xl md:text-5xl text-navy-dark">{s.n}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.25em] text-navy-dark/60">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-paper text-navy-dark py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Our Values</div>
          <h2 className="font-display font-semibold text-3xl md:text-4xl leading-tight">What we stand for</h2>

          <StaggerContainer className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-4">
            {VALUES.map((v) => (
              <StaggerItem key={v.name}>
                <div className="bg-white rounded-2xl p-6 text-center border border-navy-dark/5 card-shadow">
                  <div className="w-14 h-14 rounded-2xl bg-navy-dark text-gold mx-auto flex items-center justify-center">
                    <v.icon size={22} />
                  </div>
                  <div className="mt-3 font-display text-base text-navy-dark">{v.name}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="bg-white text-navy-dark py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Our Journey</div>
          <h2 className="font-display font-semibold text-3xl md:text-4xl leading-tight">From 1994 to now</h2>

          <div className="mt-12 relative">
            <div className="hidden md:block absolute left-0 right-0 top-6 h-px bg-navy-dark/15" />
            <StaggerContainer className="grid md:grid-cols-5 gap-6">
              {JOURNEY.map((j, i) => (
                <StaggerItem key={j.year}>
                  <div className="relative">
                    <div className="w-4 h-4 rounded-full bg-gold border-4 border-white shadow-lg relative z-10" />
                    <div className="mt-4 md:mt-6">
                      <div className="font-display text-2xl text-navy-dark">{j.year}</div>
                      <div className="text-sm font-medium text-navy-dark mt-1">{j.title}</div>
                      <p className="text-xs text-navy-dark/60 mt-1">{j.desc}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="bg-paper text-navy-dark py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Meet the Team</div>
          <h2 className="font-display font-semibold text-3xl md:text-4xl leading-tight">The people behind GN Packaging</h2>

          <div className="mt-10 grid md:grid-cols-2 gap-5">
            {COMPANY.contacts.map((c) => (
              <div key={c.phone} className="bg-white rounded-2xl p-6 md:p-8 border border-navy-dark/5 card-shadow">
                <div className="text-xs uppercase tracking-[0.25em] text-gold">Partner</div>
                <h3 className="font-display text-2xl mt-2 text-navy-dark">{c.name}</h3>
                <p className="text-navy-dark/70 text-sm mt-3 leading-relaxed">{c.role}</p>
                <div className="mt-5">
                  <a href={`tel:+91${c.phone}`} className="inline-flex items-center gap-2 text-navy-dark font-medium hover:text-gold transition-colors">
                    +91 {c.phone} <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-dark">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-14 flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-2">Let's Build Stronger Together</div>
            <h3 className="font-display text-2xl md:text-3xl text-white">We are committed to your packaging needs.</h3>
          </div>
          <Link to="/contact" className="btn-gold">Get Message <ArrowUpRight size={18} /></Link>
        </div>
      </section>
    </>
  );
}
