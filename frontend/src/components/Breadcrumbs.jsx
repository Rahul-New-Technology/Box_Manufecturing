import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumbs({ items = [] }) {
  const { pathname } = useLocation();
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/60">
      <Link to="/" className="flex items-center gap-1 hover:text-gold transition-colors">
        <Home size={12} /> Home
      </Link>
      {items.map((it, i) => (
        <span key={i} className="flex items-center gap-2">
          <ChevronRight size={12} className="text-white/30" />
          {it.to && i < items.length - 1 ? (
            <Link to={it.to} className="hover:text-gold transition-colors">{it.label}</Link>
          ) : (
            <span className="text-gold">{it.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
