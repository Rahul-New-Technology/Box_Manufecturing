import { Link } from "react-router-dom";
import { ArrowUpRight, MessageCircle, Boxes, Scissors, Printer, Layers, Wrench, ShieldCheck, PackageCheck, Truck, Check } from "lucide-react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { MaskLine, Reveal, StaggerContainer, StaggerItem } from "@/components/Reveal";
import { GALLERY } from "@/lib/data";
import { waLink } from "@/lib/whatsapp";

const MANUFACTURING_IMAGES = [
  "/images/manufacturing/Corrugation Line.jpg",
  "/images/manufacturing/Flexo Printer.jpg",
  "/images/manufacturing/Offset Press.jpg",
  "/images/manufacturing/Auto Die-Cutter.jpg",
  "/images/manufacturing/Auto Gluer.jpg",
  "/images/manufacturing/Pin Stitcher.jpg"
];

const PROCESS = [
  { icon: Boxes, title: "Raw Material Selection", desc: "Virgin kraft paper reels sourced from certified Indian mills." },
  { icon: Scissors, title: "Cutting", desc: "Sheets & rolls cut to precise dimensions." },
  { icon: Printer, title: "Printing", desc: "Flexographic and offset up to 6-colour." },
  { icon: Layers, title: "Slotting", desc: "Slotters cut flaps & scores with tight tolerances." },
  { icon: Wrench, title: "Die Cutting", desc: "Precision die-cutting for complex shapes." },
  { icon: PackageCheck, title: "Pasting", desc: "Automatic gluers ensure clean, strong bonds." },
  { icon: ShieldCheck, title: "Quality Check", desc: "Bursting, ECT, GSM & moisture checks per batch." },
  { icon: Truck, title: "Packing & Delivery", desc: "Owned fleet & partner logistics — PAN-India." },
];

const MACHINERY = [
  { name: "Corrugation Line", img: MANUFACTURING_IMAGES[0] },
  { name: "Flexo Printer", img: MANUFACTURING_IMAGES[1] },
  { name: "Offset Press", img: MANUFACTURING_IMAGES[2] },
  { name: "Auto Die-Cutter", img: MANUFACTURING_IMAGES[3] },
  { name: "Auto Gluer", img: MANUFACTURING_IMAGES[4] },
  { name: "Pin Stitcher", img: MANUFACTURING_IMAGES[5] },
];

const HIGHLIGHTS = [
  "High-Speed Machines",
  "Precision Engineering",
  "Quality Raw Material",
  "Strict Quality Control",
  "In-house Manufacturing",
  "Timely Delivery",
];

export default function Manufacturing() {
  return (
    <>
      <SEO title="Our Manufacturing" description="From raw kraft paper to dispatch — GN Packaging's manufacturing process, quality control and machinery showcase." />

      <section className="pt-36 pb-14 bg-navy-dark relative overflow-hidden">
        <img src={MANUFACTURING_IMAGES[0]} alt="Factory" className="absolute inset-0 w-full h-full object-cover opacity-25" width="1920" height="1080" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/40 via-navy-dark/70 to-navy-dark" />
        <div className="relative max-w-[1400px] mx-auto px-5 md:px-10">
          <Breadcrumbs items={[{ label: "Manufacturing" }]} />
          <h1 className="mt-6 font-display font-semibold text-4xl md:text-6xl leading-[1.05] tracking-tight text-white">
            <MaskLine onLoad>Our Manufacturing</MaskLine>
          </h1>
          <p className="mt-4 max-w-2xl text-white/75">
            From raw kraft paper to dispatch dock — every step engineered for consistency, strength and honest lead times.
          </p>
        </div>
      </section>

      {/* Advanced Manufacturing Unit */}
      <section className="bg-paper text-navy-dark py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <div className="rounded-2xl overflow-hidden card-shadow">
              <img src={MANUFACTURING_IMAGES[1]} alt="Advanced Manufacturing Unit" className="w-full h-full object-cover aspect-[5/4]" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Advanced Manufacturing Unit</div>
            <h2 className="font-display font-semibold text-3xl md:text-4xl leading-tight">
              A state-of-the-art facility with automated machinery and skilled professionals.
            </h2>
            <p className="mt-4 text-navy-dark/70 leading-relaxed">
              We have a state-of-the-art manufacturing setup equipped with advanced machinery and skilled professionals to deliver the best-quality packaging products consistently at scale.
            </p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {HIGHLIGHTS.map((h) => (
                <div key={h} className="flex items-start gap-2 text-sm text-navy-dark">
                  <Check size={16} className="text-gold shrink-0 mt-0.5" /> {h}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process flow */}
      <section className="bg-white text-navy-dark py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="text-center mb-10">
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Our Process</div>
            <h2 className="font-display font-semibold text-3xl md:text-5xl leading-tight">Our Manufacturing Process</h2>
            <p className="mt-3 text-navy-dark/65 max-w-2xl mx-auto">Eight documented steps — every batch traceable end-to-end.</p>
          </div>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {PROCESS.map((s, i) => (
              <StaggerItem key={s.title}>
                <div className="bg-paper rounded-2xl p-6 text-center card-shadow border border-navy-dark/5 h-full">
                  <div className="w-16 h-16 rounded-2xl bg-navy-dark text-gold mx-auto flex items-center justify-center">
                    <s.icon size={26} />
                  </div>
                  <div className="mt-3 text-[10px] uppercase tracking-[0.25em] text-gold">Step {String(i + 1).padStart(2, "0")}</div>
                  <div className="mt-1 font-display text-lg leading-tight text-navy-dark">{s.title}</div>
                  <p className="mt-2 text-xs text-navy-dark/60">{s.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Machinery */}
      <section className="bg-paper text-navy-dark py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Our Machinery</div>
          <h2 className="font-display font-semibold text-3xl md:text-5xl leading-tight">Built to run 24×7.</h2>

          <StaggerContainer className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
            {MACHINERY.map((m) => (
              <StaggerItem key={m.name}>
                <div className="group bg-white rounded-2xl overflow-hidden border border-navy-dark/5 card-shadow">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={m.img} alt={m.name} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5">
                    <div className="font-display text-lg text-navy-dark">{m.name}</div>
                    <div className="text-[10px] uppercase tracking-[0.25em] text-gold mt-1">In-house</div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-dark">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-14 flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-2">Need Bulk Packaging Solution?</div>
            <h3 className="font-display text-2xl md:text-3xl text-white">We are ready to fulfil your large volume requirements.</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/quote" className="btn-gold">Book a Bulk Order <ArrowUpRight size={18} /></Link>
            <a href={waLink()} target="_blank" rel="noreferrer" className="btn-ghost"><MessageCircle size={18} /> WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}
