import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Phone } from "lucide-react";
import { COMPANY } from "@/lib/data";
import { NAV } from "@/constants/testIds";

const LINKS = [
  { to: "/", label: "Home", id: NAV.linkHome },
  { to: "/products", label: "Products", id: NAV.linkProducts },
  { to: "/custom-packaging", label: "Custom", id: NAV.linkCustom },
  { to: "/industries", label: "Industries", id: NAV.linkIndustries },
  { to: "/manufacturing", label: "Manufacturing", id: NAV.linkManufacturing },
  { to: "/gallery", label: "Gallery", id: NAV.linkGallery },
  { to: "/about", label: "About", id: NAV.linkAbout },
  { to: "/blog", label: "Blog", id: NAV.linkBlog },
  { to: "/contact", label: "Contact", id: NAV.linkContact },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <>
      {/* Top strip: contact info */}
      <div className="fixed top-0 left-0 right-0 z-[51] bg-navy-dark text-white/85 text-xs h-8 hidden md:flex items-center">
        <div className="max-w-[1400px] mx-auto w-full px-5 md:px-10 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <a href={`tel:+91${COMPANY.contacts[0].phone}`} className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <Phone size={11} className="text-gold" /> +91 {COMPANY.contacts[0].phone} · Firoz Khan
            </a>
            <a href={`tel:+91${COMPANY.contacts[1].phone}`} className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <Phone size={11} className="text-gold" /> +91 {COMPANY.contacts[1].phone} · Moinuddin Khan
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href={`mailto:${COMPANY.email}`} className="hover:text-gold transition-colors">{COMPANY.email}</a>
            <span className="text-gold">GSTIN {COMPANY.gstin}</span>
          </div>
        </div>
      </div>

      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className={`fixed left-0 right-0 z-50 transition-all duration-500 bg-white border-b ${scrolled ? "top-0 shadow-md border-navy-dark/10" : "md:top-8 top-0 border-transparent"}`}
      >
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 h-[76px] flex items-center justify-between">
          <Link to="/" data-testid={NAV.logo} className="flex items-center gap-3 group">
            <img src={COMPANY.logo} alt="GN Packaging logo" className="h-20 w-auto object-contain" loading="eager" />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {LINKS.map((l) => (
              <NavLink key={l.to} to={l.to} data-testid={l.id} end={l.to === "/"}
                className={({ isActive }) =>
                  `relative px-3.5 py-2 text-sm font-medium transition-colors ${isActive ? "text-navy-dark" : "text-navy-dark/70 hover:text-navy-dark"}`
                }
                aria-label={`Navigate to ${l.label}`}
              >
                {({ isActive }) => (
                  <>
                    <span>{l.label}</span>
                    {isActive && <motion.span layoutId="nav-underline" className="absolute left-3.5 right-3.5 -bottom-0.5 h-[2px] bg-gold" />}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link to="/quote" data-testid={NAV.quoteBtn} className="hidden md:inline-flex btn-gold text-sm !py-2.5 !px-4">
              Get Quote <ArrowUpRight size={16} />
            </Link>
            <button onClick={() => setOpen(true)} data-testid={NAV.menuToggle} aria-label="Open menu"
              className="lg:hidden p-2 rounded-lg border border-navy-dark/15 text-navy-dark hover:bg-navy-dark/5 transition-colors">
              <Menu size={20} />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-white lg:hidden"
            >
              <div className="flex justify-between items-center px-5 h-[76px] border-b border-navy-dark/10">
                <img src={COMPANY.logo} alt="GN Packaging" className="h-16 w-auto object-contain" />
                <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2 text-navy-dark">
                  <X size={22} />
                </button>
              </div>
              <motion.nav
                initial="hidden" animate="show"
                variants={{ show: { transition: { staggerChildren: 0.05 } } }}
                className="px-6 pt-8 flex flex-col gap-1"
              >
                {LINKS.map((l) => (
                  <motion.div key={l.to} variants={{ hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0 } }}>
                    <Link to={l.to} className="block py-3 font-display font-semibold text-2xl text-navy-dark border-b border-navy-dark/10" aria-label={`Navigate to ${l.label}`}>{l.label}</Link>
                  </motion.div>
                ))}
                <Link to="/quote" className="btn-gold mt-6 justify-center">Get Free Quote</Link>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
