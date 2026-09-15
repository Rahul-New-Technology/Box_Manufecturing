import { useState } from "react";
import { toast } from "sonner";
import { MessageCircle, Phone, Mail, MapPin, Clock, ArrowUpRight, ShieldCheck } from "lucide-react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { MaskLine, Reveal } from "@/components/Reveal";
import { COMPANY } from "@/lib/data";
import { waLink } from "@/lib/whatsapp";
import { CONTACT } from "@/constants/testIds";
import { submitContactForm } from "@/lib/googleSheets";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.message) {
      toast.error("Please fill name, phone and message.");
      return;
    }
    setLoading(true);
    try {
      await submitContactForm(form);
      toast.success("Message received — we'll be in touch shortly.");
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      
      // Google Ads conversion tracking
      if (typeof window.gtag_report_conversion === 'function') {
        window.gtag_report_conversion();
      }
    } catch (err) {
      toast.error("Could not send. Please WhatsApp us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEO title="Contact" description="Contact GN Packaging Mumbai — WhatsApp 9699362465, factory address in Ghatkopar (W), and business hours." />

      <section className="pt-36 pb-14 bg-navy-dark relative overflow-hidden">
        <img src="https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Contact" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/40 via-navy-dark/70 to-navy-dark" />
        <div className="relative max-w-[1400px] mx-auto px-5 md:px-10">
          <Breadcrumbs items={[{ label: "Contact" }]} />
          <h1 className="mt-6 font-display font-semibold text-4xl md:text-6xl leading-[1.05] tracking-tight text-white">
            <MaskLine onLoad>Contact Us</MaskLine>
          </h1>
          <p className="mt-4 max-w-2xl text-white/75">
            We are here to answer your queries and provide the best packaging solutions.
          </p>
        </div>
      </section>

      <section className="bg-paper text-navy-dark py-16">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 grid lg:grid-cols-12 gap-8">
          {/* Left — Contact cards */}
          <Reveal className="lg:col-span-5 space-y-4">
            <div className="text-xs uppercase tracking-[0.3em] text-gold">Get In Touch</div>
            <h2 className="font-display font-semibold text-2xl md:text-3xl leading-tight">We would love to hear from you.</h2>

            <ContactCard icon={<Phone size={20} className="text-gold" />} title="Phone">
              {COMPANY.contacts.map((c) => (
                <div key={c.phone}>
                  <a href={`tel:+91${c.phone}`} className="text-navy-dark hover:text-gold transition-colors font-medium">+91 {c.phone}</a>
                  <div className="text-xs text-navy-dark/55">{c.name}</div>
                </div>
              ))}
            </ContactCard>

            <ContactCard icon={<Mail size={20} className="text-gold" />} title="Email">
              <a href={`mailto:${COMPANY.email}`} className="hover:text-gold transition-colors font-medium">{COMPANY.email}</a>
            </ContactCard>

            <ContactCard icon={<MapPin size={20} className="text-gold" />} title="Address">
              {COMPANY.address_lines.map((l, i) => <div key={i} className="text-sm">{l}</div>)}
              <div className="text-xs text-navy-dark/55 mt-1">GSTIN · {COMPANY.gstin}</div>
            </ContactCard>

            <ContactCard icon={<Clock size={20} className="text-gold" />} title="Working Hours">
              <div className="text-sm">Mon – Sun · 10:00 AM – 10:00 PM</div>
              <div className="text-xs text-navy-dark/55 mt-1">Open Every Day</div>
            </ContactCard>

            <a href={waLink()} target="_blank" rel="noreferrer" className="btn-gold w-full justify-center mt-4">
              <MessageCircle size={18} /> WhatsApp Us
            </a>
          </Reveal>

          {/* Right — Form */}
          <Reveal delay={0.1} className="lg:col-span-7">
            <form onSubmit={submit} className="bg-white card-shadow rounded-2xl p-6 md:p-10 border border-navy-dark/5 space-y-4">
              <div className="text-xs uppercase tracking-[0.3em] text-gold">Send Message</div>
              <h2 className="font-display font-semibold text-2xl md:text-3xl leading-tight">Tell us what you need.</h2>

              <Field id={CONTACT.name} label="Your Name *" value={form.name} onChange={(v) => set("name", v)} />
              <Field id={CONTACT.email} label="Your Email" type="email" value={form.email} onChange={(v) => set("email", v)} />
              <Field id={CONTACT.phone} label="Phone Number *" type="tel" value={form.phone} onChange={(v) => set("phone", v)} />
              <Field id={CONTACT.subject} label="Subject" value={form.subject} onChange={(v) => set("subject", v)} />

              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-navy-dark/60">Your Message *</label>
                <textarea
                  data-testid={CONTACT.message}
                  value={form.message}
                  onChange={(e) => set("message", e.target.value)}
                  rows={5}
                  className="mt-2 w-full bg-paper border border-navy-dark/15 rounded-xl px-4 py-3 text-navy-dark focus:outline-none focus:border-gold transition-colors"
                  placeholder="Product, size, quantity, timeline…"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                data-testid={CONTACT.submit}
                className="btn-gold w-full justify-center disabled:opacity-60 !py-4"
              >
                {loading ? "Sending…" : "Send Message"} <ArrowUpRight size={16} />
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="bg-paper pb-20">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Our Location</div>
          <h3 className="font-display font-semibold text-2xl md:text-3xl mb-6 text-navy-dark">Visit our factory</h3>
          <div className="rounded-2xl overflow-hidden border border-navy-dark/10 card-shadow">
            <iframe 
              title="GN Packaging Location" 
              src={COMPANY.map_embed} 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="strict-origin-when-cross-origin" 
            />
          </div>
        </div>
      </section>

      {/* Trust footer */}
      <section className="bg-navy-dark">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-8 flex flex-wrap items-center justify-center gap-3 text-white/70">
          <ShieldCheck size={16} className="text-gold" />
          <span className="text-sm">We respect your information. Your details are safe with us.</span>
        </div>
      </section>
    </>
  );
}

function ContactCard({ icon, title, children }) {
  return (
    <div className="bg-white rounded-2xl p-5 border border-navy-dark/5 card-shadow flex gap-4">
      <div className="w-11 h-11 rounded-xl bg-navy-dark/5 flex items-center justify-center shrink-0">{icon}</div>
      <div>
        <div className="text-xs uppercase tracking-[0.25em] text-navy-dark/60">{title}</div>
        <div className="text-navy-dark text-sm mt-1 leading-relaxed">{children}</div>
      </div>
    </div>
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
