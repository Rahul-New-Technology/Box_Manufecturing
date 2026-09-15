import { useState } from "react";
import { toast } from "sonner";
import { ArrowUpRight, ShieldCheck, Clock, Award } from "lucide-react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { MaskLine, Reveal } from "@/components/Reveal";
import { PRODUCTS } from "@/lib/data";
import { waLink } from "@/lib/whatsapp";
import { QUOTE } from "@/constants/testIds";
import { submitQuoteForm } from "@/lib/googleSheets";

// WhatsApp SVG icon for better branding
const WhatsAppIcon = () => (
  <svg 
    width="18" 
    height="18" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function Quote() {
  const [form, setForm] = useState({ name: "", company: "", phone: "", email: "", city: "", product: "Corrugated Boxes", quantity: "", message: "" });
  const [loading, setLoading] = useState(false);
  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error("Name and phone are required.");
      return;
    }
    setLoading(true);
    try {
      await submitQuoteForm({ ...form, subject: `Quote: ${form.product}` });
      toast.success("Quote request received. Our team will call within 24 hrs.");
      
      // Google Ads conversion tracking
      if (typeof window.gtag_report_conversion === 'function') {
        window.gtag_report_conversion();
      }
      
      setForm({ name: "", company: "", phone: "", email: "", city: "", product: "Corrugated Boxes", quantity: "", message: "" });
    } catch (err) {
      toast.error("Could not send. Please try again or WhatsApp us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEO title="Get Free Quote" description="Request a free B2B packaging quotation from GN Packaging Mumbai — corrugated boxes, sheets, rolls, custom packaging." />

      <section className="pt-36 pb-14 bg-navy-dark">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <Breadcrumbs items={[{ label: "Get Quote" }]} />
          <h1 className="mt-8 font-display font-semibold text-4xl md:text-6xl leading-[1.05] tracking-tight">
            <MaskLine onLoad>Request a Free Quote.</MaskLine>
          </h1>
          <p className="mt-6 max-w-xl text-white/70 font-body">Fill in the details below — we'll respond within 24 hours with best-in-class pricing.</p>
        </div>
      </section>

      <section className="bg-paper text-navy-dark py-16">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 grid lg:grid-cols-12 gap-10">
          <Reveal className="lg:col-span-7">
            <form onSubmit={submit} className="bg-white card-shadow rounded-3xl p-6 md:p-10 border border-navy-dark/5 space-y-4">
              <div className="grid md:grid-cols-2 gap-3">
                <Field id={QUOTE.name} label="Your Name *" value={form.name} onChange={(v) => set("name", v)} />
                <Field id={QUOTE.email} label="Email Address" type="email" value={form.email} onChange={(v) => set("email", v)} />
                <Field id={QUOTE.company} label="Company Name" value={form.company} onChange={(v) => set("company", v)} />
                <Field id={QUOTE.phone} label="Phone Number *" type="tel" value={form.phone} onChange={(v) => set("phone", v)} />
                <div className="md:col-span-2">
                  <label className="text-xs uppercase tracking-[0.2em] text-navy-dark/60">Product Type *</label>
                  <select
                    data-testid={QUOTE.product}
                    value={form.product}
                    onChange={(e) => set("product", e.target.value)}
                    className="mt-2 w-full bg-paper border border-navy-dark/15 rounded-xl px-4 py-3 text-navy-dark focus:outline-none focus:border-gold transition-colors"
                  >
                    {PRODUCTS.map((p) => <option key={p.slug}>{p.name}</option>)}
                    <option>Other / Custom</option>
                  </select>
                </div>
                <Field id={QUOTE.quantity} label="Quantity (Pieces)" value={form.quantity} onChange={(v) => set("quantity", v)} />
                <Field label="City" value={form.city} onChange={(v) => set("city", v)} />
              </div>

              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-navy-dark/60">Additional Requirements</label>
                <textarea
                  data-testid={QUOTE.message}
                  value={form.message}
                  onChange={(e) => set("message", e.target.value)}
                  rows={5}
                  className="mt-2 w-full bg-paper border border-navy-dark/15 rounded-2xl px-4 py-3 text-navy-dark focus:outline-none focus:border-gold transition-colors"
                  placeholder="Size (L × W × H), ply, GSM, printing, timeline…"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                data-testid={QUOTE.submit}
                className="btn-gold w-full justify-center disabled:opacity-60 !py-4"
              >
                {loading ? "Submitting…" : "Submit Request"} <ArrowUpRight size={16} />
              </button>

              <div className="text-xs text-navy-dark/60 text-center flex items-center justify-center gap-2">
                <ShieldCheck size={14} /> Your details are safe with us.
              </div>
            </form>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-5 space-y-6">
            <div className="bg-navy-dark text-white rounded-3xl p-8 card-shadow">
              <div className="text-xs uppercase tracking-[0.35em] text-gold mb-3">Why GN Packaging</div>
              <ul className="space-y-3 text-sm">
                <Bullet icon={<Award size={16} />}>Best Quality Products</Bullet>
                <Bullet icon={<Award size={16} />}>Competitive Prices</Bullet>
                <Bullet icon={<Clock size={16} />}>On-Time Delivery</Bullet>
                <Bullet icon={<Award size={16} />}>100% Custom Solutions</Bullet>
                <Bullet icon={<ShieldCheck size={16} />}>Customer Satisfaction</Bullet>
              </ul>

              <div className="mt-6 pt-6 border-t border-white/10">
                <a href={waLink()} target="_blank" rel="noreferrer" className="btn-gold w-full justify-center">
                  <WhatsAppIcon /> Or WhatsApp Us Now
                </a>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 card-shadow border border-navy-dark/5">
              <div className="text-xs uppercase tracking-[0.3em] text-gold mb-2">Response Time</div>
              <h3 className="font-display text-2xl">Under 24 hours</h3>
              <p className="text-sm text-navy-dark/70 mt-2">Our sales team responds to every B2B inquiry within one business day — usually much sooner.</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({ id, label, value, onChange, type = "text" }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-[0.2em] text-navy-dark/60">{label}</label>
      <input
        data-testid={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type={type}
        className="mt-2 w-full bg-paper border border-navy-dark/15 rounded-xl px-4 py-3 text-navy-dark focus:outline-none focus:border-gold transition-colors"
      />
    </div>
  );
}

function Bullet({ icon, children }) {
  return (
    <li className="flex items-center gap-3">
      <span className="text-gold">{icon}</span>
      <span className="text-white/85">{children}</span>
    </li>
  );
}
