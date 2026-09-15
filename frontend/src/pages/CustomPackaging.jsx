import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle, Check } from "lucide-react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { MaskLine, Reveal } from "@/components/Reveal";
import { customPackagingWA } from "@/lib/whatsapp";
import { CUSTOM } from "@/constants/testIds";

const PLYS = ["3 Ply", "5 Ply", "7 Ply", "9 Ply", "11 Ply", "13 Ply"];
const GSMS = ["100 GSM", "120 GSM", "150 GSM", "200 GSM", "250 GSM", "350 GSM", "400 GSM"];
const PRINTING = ["Plain", "1 Color", "2 Color", "4 Color", "Offset Premium"];

export default function CustomPackaging() {
  const [form, setForm] = useState({ length: "", width: "", height: "", gsm: "200 GSM", ply: "5 Ply", printing: "Plain", quantity: "", remarks: "" });
  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const send = () => {
    // Google Ads conversion tracking
    if (typeof window.gtag_report_conversion === 'function') {
      window.gtag_report_conversion();
    }
    window.open(customPackagingWA(form), "_blank");
  };

  return (
    <>
      <SEO title="Custom Packaging Configurator" description="Configure custom corrugated boxes — Length, Width, Height, Ply, GSM, printing and quantity. Get instant quotation on WhatsApp." />

      <section className="pt-36 pb-16 bg-navy-dark">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <Breadcrumbs items={[{ label: "Custom Packaging" }]} />
          <div className="mt-8 grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-8">
              <div className="text-xs uppercase tracking-[0.35em] text-gold mb-4">Configurator · Direct to WhatsApp</div>
              <h1 className="font-display font-semibold text-4xl md:text-6xl leading-[1.05] tracking-tight text-white">
                <MaskLine onLoad>We manufacture</MaskLine>
                <MaskLine onLoad delay={0.12} className="text-gold">as per your requirement.</MaskLine>
              </h1>
            </div>
            <div className="md:col-span-4">
              <p className="text-white/70 font-body leading-relaxed">Pick your dimensions, ply and finishing. On submit, WhatsApp opens with your specifications pre-filled — no forms, no delays.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper text-navy-dark py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 grid lg:grid-cols-12 gap-8">
          {/* Configurator */}
          <div className="lg:col-span-8 space-y-8">
            {/* Dimensions */}
            <Reveal>
              <Panel step="01" title="Dimensions" subtitle="Length × Width × Height (in inches or mm — mention below)">
                <div className="grid grid-cols-3 gap-3">
                  {[["length", "L"], ["width", "W"], ["height", "H"]].map(([k, label]) => (
                    <div key={k} className="relative">
                      <input
                        type="text"
                        value={form[k]}
                        onChange={(e) => set(k, e.target.value)}
                        data-testid={CUSTOM[k]}
                        placeholder={label}
                        className="w-full bg-white border border-navy-dark/15 rounded-2xl px-5 py-6 text-3xl font-display text-navy-dark focus:outline-none focus:border-gold transition-colors"
                      />
                      <div className="absolute right-4 top-3 text-xs text-navy-dark/40 uppercase tracking-[0.25em]">{label}</div>
                    </div>
                  ))}
                </div>
              </Panel>
            </Reveal>

            <Reveal>
              <Panel step="02" title="Paper GSM" subtitle="Kraft paper weight per square metre">
                <ChipGroup options={GSMS} value={form.gsm} onChange={(v) => set("gsm", v)} testIdBase={CUSTOM.gsm} />
              </Panel>
            </Reveal>

            <Reveal>
              <Panel step="03" title="Ply" subtitle="Number of layers determines strength">
                <ChipGroup options={PLYS} value={form.ply} onChange={(v) => set("ply", v)} testIdBase={CUSTOM.ply} />
              </Panel>
            </Reveal>

            <Reveal>
              <Panel step="04" title="Printing" subtitle="Plain, flexo colours or offset premium">
                <ChipGroup options={PRINTING} value={form.printing} onChange={(v) => set("printing", v)} testIdBase={CUSTOM.printing} />
              </Panel>
            </Reveal>

            <Reveal>
              <Panel step="05" title="Quantity & Remarks">
                <div className="grid md:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Quantity (e.g. 5000 pcs)"
                    value={form.quantity}
                    onChange={(e) => set("quantity", e.target.value)}
                    data-testid={CUSTOM.quantity}
                    className="w-full bg-white border border-navy-dark/15 rounded-2xl px-5 py-4 text-navy-dark focus:outline-none focus:border-gold transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Remarks (e.g. brown/white kraft, dieline needed)"
                    value={form.remarks}
                    onChange={(e) => set("remarks", e.target.value)}
                    data-testid={CUSTOM.remarks}
                    className="w-full bg-white border border-navy-dark/15 rounded-2xl px-5 py-4 text-navy-dark focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
              </Panel>
            </Reveal>
          </div>

          {/* Sticky summary */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 bg-navy-dark text-white rounded-3xl p-8 card-shadow">
              <div className="text-xs uppercase tracking-[0.35em] text-gold mb-4">Your Configuration</div>
              <h3 className="font-display text-3xl leading-tight">Custom Corrugated Box</h3>

              <div className="mt-6 space-y-3 text-sm">
                <SummaryLine label="Size (L × W × H)" value={`${form.length || "-"} × ${form.width || "-"} × ${form.height || "-"}`} />
                <SummaryLine label="Paper GSM" value={form.gsm} />
                <SummaryLine label="Ply" value={form.ply} />
                <SummaryLine label="Printing" value={form.printing} />
                <SummaryLine label="Quantity" value={form.quantity || "—"} />
                <SummaryLine label="Remarks" value={form.remarks || "—"} />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={send}
                data-testid={CUSTOM.submit}
                className="mt-8 w-full btn-gold justify-center !py-4"
              >
                <MessageCircle size={18} /> Send to WhatsApp <ArrowUpRight size={16} />
              </motion.button>

              <p className="mt-4 text-xs text-white/50">Opens WhatsApp with your configuration pre-filled. Our team responds within business hours.</p>

              <ul className="mt-6 pt-6 border-t border-white/10 space-y-2 text-xs text-white/70">
                {["Genuine custom sizes — no fixed SKUs", "Dieline PDF supported (send after WhatsApp opens)", "GST invoice for B2B"].map((l) => (
                  <li key={l} className="flex items-start gap-2"><Check size={14} className="text-gold mt-0.5" />{l}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Panel({ step, title, subtitle, children }) {
  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 card-shadow border border-navy-dark/5">
      <div className="flex items-start justify-between mb-5">
        <div>
          <div className="text-xs uppercase tracking-[0.35em] text-gold">Step {step}</div>
          <h4 className="font-display text-2xl md:text-3xl mt-2">{title}</h4>
          {subtitle && <p className="text-sm text-navy-dark/60 mt-1">{subtitle}</p>}
        </div>
      </div>
      {children}
    </div>
  );
}

function ChipGroup({ options, value, onChange, testIdBase }) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => (
        <button
          key={o}
          onClick={() => onChange(o)}
          data-testid={`${testIdBase}-${o.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase()}`}
          className={`px-5 py-3 rounded-full border text-sm font-medium transition-colors ${value === o ? "bg-navy-dark text-white border-navy-dark" : "bg-paper text-navy-dark border-navy-dark/15 hover:border-gold"}`}
        >
          {o}
        </button>
      ))}
    </div>
  );
}

function SummaryLine({ label, value }) {
  return (
    <div className="flex justify-between gap-3 border-b border-white/10 pb-2">
      <span className="text-white/50">{label}</span>
      <span className="text-white text-right break-all">{value || "—"}</span>
    </div>
  );
}
