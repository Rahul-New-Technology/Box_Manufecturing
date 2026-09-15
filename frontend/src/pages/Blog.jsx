import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { MaskLine, StaggerContainer, StaggerItem } from "@/components/Reveal";
import { BLOG_POSTS } from "@/lib/data";

const PER_PAGE = 6;

export default function Blog() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(BLOG_POSTS.length / PER_PAGE);
  const start = (page - 1) * PER_PAGE;
  const items = BLOG_POSTS.slice(start, start + PER_PAGE);

  return (
    <>
      <SEO title="Packaging Blog & Insights" description="SEO articles on corrugated boxes, honeycomb boards, export packaging, printed cartons & sustainable materials — B2B packaging knowledge." />

      <section className="pt-36 pb-14 bg-navy-dark relative overflow-hidden">
        <img src="https://images.pexels.com/photos/4498176/pexels-photo-4498176.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Blog" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/40 via-navy-dark/70 to-navy-dark" />
        <div className="relative max-w-[1400px] mx-auto px-5 md:px-10">
          <Breadcrumbs items={[{ label: "Blog" }]} />
          <h1 className="mt-6 font-display font-semibold text-4xl md:text-6xl leading-[1.05] tracking-tight text-white">
            <MaskLine onLoad>Blog & Insights</MaskLine>
          </h1>
          <p className="mt-4 max-w-2xl text-white/75">
            Practical B2B packaging knowledge for buyers, procurement managers and brand founders.
          </p>
        </div>
      </section>

      <section className="bg-paper text-navy-dark py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <StaggerContainer key={page} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((p) => (
              <StaggerItem key={p.slug}>
                <Link to={`/blog/${p.slug}`} className="group block bg-white rounded-2xl overflow-hidden border border-navy-dark/5 card-shadow h-full">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-contain" />
                  </div>
                  <div className="p-6">
                    <div className="text-[10px] uppercase tracking-[0.3em] text-gold">{p.category} · {p.date}</div>
                    <h3 className="font-display text-lg mt-2 leading-tight group-hover:text-gold transition-colors">{p.title}</h3>
                    <p className="mt-2 text-sm text-navy-dark/65 line-clamp-3">{p.excerpt}</p>
                    <div className="mt-4 text-sm text-navy-dark font-medium inline-flex items-center gap-1">Read More <ArrowUpRight size={14} /></div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {totalPages > 1 && (
            <div className="mt-12 flex justify-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setPage(i + 1); window.scrollTo({ top: 0 }); }}
                  className={`w-10 h-10 rounded-full font-medium text-sm transition-colors ${page === i + 1 ? "bg-navy-dark text-white" : "bg-white border border-navy-dark/15 text-navy-dark hover:border-gold"}`}
                >
                  {i + 1}
                </button>
              ))}
              {page < totalPages && (
                <button
                  onClick={() => { setPage(page + 1); window.scrollTo({ top: 0 }); }}
                  className="px-4 h-10 rounded-full font-medium text-sm bg-white border border-navy-dark/15 text-navy-dark hover:border-gold"
                >
                  Next
                </button>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
