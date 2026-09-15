import { Link } from "react-router-dom";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { MaskLine, StaggerContainer, StaggerItem } from "@/components/Reveal";
import { INDUSTRIES } from "@/lib/data";
import { waLink } from "@/lib/whatsapp";

export default function Industries() {
  return (
    <>
      <SEO title="Industries We Serve" description="Corrugated packaging for automobile, electronics, pharma, FMCG, textile, e-commerce, export & more. 20 industries served across India." />

      <section className="pt-36 pb-14 bg-navy-dark relative overflow-hidden">
        <img src="https://images.pexels.com/photos/4498176/pexels-photo-4498176.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Packaging" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/40 via-navy-dark/70 to-navy-dark" />
        <div className="relative max-w-[1400px] mx-auto px-5 md:px-10">
          <Breadcrumbs items={[{ label: "Industries" }]} />
          <h1 className="mt-6 font-display font-semibold text-4xl md:text-6xl leading-[1.05] tracking-tight text-white">
            <MaskLine onLoad>Industries We Serve</MaskLine>
          </h1>
          <p className="mt-4 max-w-2xl text-white/75">
            From automobile to marine — one supplier. We engineer, manufacture and deliver packaging trusted by industries across India.
          </p>
        </div>
      </section>

      <section className="bg-paper text-navy-dark py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {INDUSTRIES.map((ind) => (
              <StaggerItem key={ind.name}>
                <div className="group bg-white rounded-2xl overflow-hidden border border-navy-dark/5 card-shadow h-full flex flex-col">
                  <div className="aspect-[4/3] overflow-hidden bg-paper">
                    <img src={ind.image} alt={`${ind.name} packaging`} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="font-display text-lg text-navy-dark leading-tight">{ind.name}</div>
                    <p className="mt-2 text-sm text-navy-dark/65 flex-1">{ind.desc}</p>
                    <Link to="/quote" className="mt-4 text-sm font-medium text-navy-dark hover:text-gold transition-colors inline-flex items-center gap-1 self-start">
                      Get Quote <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="mt-14 bg-navy-dark text-white rounded-2xl p-8 md:p-10 flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-gold mb-2">Looking for packaging for your industry?</div>
              <h3 className="font-display text-2xl md:text-3xl">We have the perfect solution for your business.</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/quote" className="btn-gold">Send Message <ArrowUpRight size={18} /></Link>
              <a href={waLink()} target="_blank" rel="noreferrer" className="btn-ghost"><MessageCircle size={18} /> WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
