import { Link } from "react-router-dom";
import { COMPANY } from "@/lib/data";
import { waLink, callLink } from "@/lib/whatsapp";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-navy-dark text-white overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      {/* Giant statement */}
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 pt-20 pb-12">
        <h2 className="font-display font-semibold leading-[0.95] tracking-tight text-white text-4xl md:text-6xl xl:text-7xl">
          Let's build it together.
        </h2>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={waLink()} target="_blank" rel="noreferrer" className="btn-gold">
            <MessageCircle size={18} /> WhatsApp Now
          </a>
          <a href={callLink()} className="btn-ghost">
            <Phone size={18} /> Call {COMPANY.call_number}
          </a>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-5 md:px-10 pb-16 grid grid-cols-1 md:grid-cols-12 gap-10 border-t border-white/10 pt-14">
        <div className="md:col-span-4">
          <div className="bg-white rounded-2xl p-4 inline-block">
            <img src={COMPANY.logo} alt="GN Packaging logo" className="h-32 w-auto object-contain" loading="lazy" />
          </div>
          <div className="mt-4 text-xs text-gold uppercase tracking-[0.25em]">{COMPANY.tagline}</div>
          <p className="text-white/70 mt-6 text-sm leading-relaxed max-w-sm font-body">
            Mumbai-based manufacturer of corrugated boxes, sheets, rolls, honeycomb boards, edge protectors and custom industrial packaging. Serving 500+ B2B clients across India & export markets.
          </p>
          <div className="mt-6 space-y-2 text-sm text-white/80">
            <p className="font-body text-gold text-base font-medium">GSTIN · {COMPANY.gstin}</p>
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="text-xs uppercase tracking-[0.25em] text-gold mb-4">Quick Links</div>
          <ul className="space-y-2 text-white/75">
            <li><Link to="/products" className="hover:text-gold transition-colors" aria-label="View Products">Products</Link></li>
            <li><Link to="/custom-packaging" className="hover:text-gold transition-colors" aria-label="Custom Packaging">Custom Packaging</Link></li>
            <li><Link to="/industries" className="hover:text-gold transition-colors" aria-label="Industries We Serve">Industries</Link></li>
            <li><Link to="/manufacturing" className="hover:text-gold transition-colors" aria-label="Manufacturing Process">Manufacturing</Link></li>
            <li><Link to="/about" className="hover:text-gold transition-colors" aria-label="About Us">About</Link></li>
            <li><Link to="/gallery" className="hover:text-gold transition-colors" aria-label="Product Gallery">Gallery</Link></li>
            <li><Link to="/blog" className="hover:text-gold transition-colors" aria-label="Packaging Blog">Blog</Link></li>
            <li><Link to="/quote" className="hover:text-gold transition-colors" aria-label="Get a Quote">Get Quote</Link></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <div className="text-xs uppercase tracking-[0.25em] text-gold mb-4">Reach Us</div>
          <div className="space-y-4 text-sm text-white/80">
            <div className="flex gap-3">
              <MapPin size={16} className="text-gold shrink-0 mt-1" />
              <div>{COMPANY.address_lines.map((l, i) => <div key={i}>{l}</div>)}</div>
            </div>
            <div className="flex gap-3">
              <Phone size={16} className="text-gold shrink-0 mt-1" />
              <div className="space-y-1">
                {COMPANY.contacts.map((c) => (
                  <a key={c.phone} href={`tel:+91${c.phone}`} className="block hover:text-gold transition-colors">
                    +91 {c.phone} <span className="text-white/50 text-xs">· {c.name}</span>
                  </a>
                ))}
              </div>
            </div>
            <div className="flex gap-3">
              <Mail size={16} className="text-gold shrink-0 mt-1" />
              <a href={`mailto:${COMPANY.email}`} className="hover:text-gold transition-colors break-all">{COMPANY.email}</a>
            </div>
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="text-xs uppercase tracking-[0.25em] text-gold mb-4">Business Hours</div>
          <p className="text-sm text-white/80">{COMPANY.hours}</p>

          <div className="mt-6 text-xs uppercase tracking-[0.25em] text-gold mb-3">Firoz Khan Speciality</div>
          <p className="text-sm text-white/70 leading-relaxed">
            New &amp; Old Corrugated Boxes, Imported Boxes, Paper Rolls, Sheets &amp; Packing Materials.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          
          <div>
            © {new Date().getFullYear()} <strong className="text-white">GN Packaging</strong>. All Rights Reserved.
          </div>
      
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link
              to="/privacy"
              className="hover:text-white/80 transition-colors"
            >
              Privacy
            </Link>
      
            <Link
              to="/terms"
              className="hover:text-white/80 transition-colors"
            >
              Terms
            </Link>
      
            <span>ISO-friendly · Made in Mumbai</span>
          </div>
      
          <div className="text-center md:text-right">
            Designed & Developed by{" "}
            <span className="font-semibold text-white">Rahul Kumar</span>{" "}
            |{" "}
            <span className="font-semibold text-white">
              GrowthAdda Media Team
            </span>{" "}
            |{" "}
            <a
              href="tel:+916307795815"
              className="text-[#D4AF37] hover:text-yellow-300 transition-colors font-medium"
            >
              📞 +91 63077 95815
            </a>
          </div>
      
        </div>
      </div>
    </footer>
  );
}
