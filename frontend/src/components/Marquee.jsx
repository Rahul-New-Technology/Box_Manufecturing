export default function Marquee({ items, className = "", accent = false }) {
  const dup = [...items, ...items];
  return (
    <div className={`overflow-hidden whitespace-nowrap py-6 border-y border-white/10 ${className}`}>
      <div className="marquee-track">
        {dup.map((t, i) => (
          <span key={i} className="inline-flex items-center gap-6 font-display font-semibold text-3xl md:text-5xl leading-none tracking-tight">
            <span className={accent ? "text-gold" : "text-white"}>{t}</span>
            <span className="text-gold text-lg">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
