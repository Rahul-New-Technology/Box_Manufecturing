import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { MaskLine } from "@/components/Reveal";
import { BLOG_POSTS } from "@/lib/data";
import { waLink } from "@/lib/whatsapp";

export default function BlogDetail() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return <Navigate to="/blog" replace />;

  const others = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    image: post.image,
    datePublished: post.date,
    author: { "@type": "Organization", name: "GN Packaging" },
  };

  return (
    <>
      <SEO title={post.title} description={post.excerpt} image={post.image} type="article" schema={schema} />

      <section className="pt-36 pb-10 bg-navy-dark">
        <div className="max-w-[900px] mx-auto px-5 md:px-10">
          <Breadcrumbs items={[{ label: "Blog", to: "/blog" }, { label: post.category }]} />
          <div className="mt-6 text-xs uppercase tracking-[0.3em] text-gold">{post.category} · {post.date} · {post.read} read</div>
          <h1 className="mt-4 font-display font-semibold text-3xl md:text-5xl leading-[1.1] tracking-tight">
            <MaskLine onLoad>{post.title}</MaskLine>
          </h1>
        </div>
      </section>

      <div className="bg-navy-dark">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <div className="clip-frame overflow-hidden aspect-[16/8]">
            <img src={post.image} alt={post.title} className="w-full h-full object-contain" />
          </div>
        </div>
      </div>

      <article className="bg-paper text-navy-dark py-16">
        <div className="max-w-[820px] mx-auto px-5 md:px-10 prose prose-lg font-body">
          <p className="text-xl leading-relaxed text-navy-dark/85">{post.excerpt}</p>
          <p className="mt-6 text-navy-dark/75 leading-relaxed">In the Indian packaging industry, the decisions that seem small — ply choice, GSM, print method, MOQ — often decide whether a shipment arrives intact or ends up as a freight claim. This guide walks through the practical considerations we've refined across two decades of manufacturing corrugated packaging.</p>

          <h2 className="font-display text-3xl mt-10 mb-3">Why this matters</h2>
          <p className="text-navy-dark/75 leading-relaxed">Corrugated is not a commodity — the same "5-ply box" can vary dramatically in bursting strength, moisture resistance and stack-ability depending on the kraft paper, flute profile and glue quality. Buyers who understand these variables save 15–25% on total packaging cost while reducing transit damage.</p>

          <h2 className="font-display text-3xl mt-10 mb-3">Key decisions</h2>
          <ul className="list-disc pl-6 text-navy-dark/80 leading-relaxed space-y-2">
            <li><strong>Ply and flute:</strong> Choose 3-ply for light retail, 5-ply for e-commerce, 7-ply and above for heavy or export shipments.</li>
            <li><strong>GSM:</strong> Higher GSM kraft = more strength and price. Standard boxes use 120–180 GSM outer liners.</li>
            <li><strong>Printing:</strong> Flexo is cost-effective for 1-4 solid colours. Offset (via duplex/mono-carton) delivers premium retail finishes.</li>
            <li><strong>Custom die-cut:</strong> Invest in die-cut structures when packaging drives your unboxing experience.</li>
          </ul>

          <h2 className="font-display text-3xl mt-10 mb-3">The GN Packaging approach</h2>
          <p className="text-navy-dark/75 leading-relaxed">We test every batch for bursting strength, ECT (edge crush test) and moisture content — because a spec sheet is only as good as the actual box it describes. Every shipment ships with a QC report on request.</p>

          <div className="not-prose mt-12 bg-navy-dark text-white rounded-3xl p-8 md:p-10 flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-gold">Need this packaging?</div>
              <h3 className="font-display text-2xl md:text-3xl mt-2">Talk to our team.</h3>
            </div>
            <div className="flex gap-3">
              <a href={waLink()} target="_blank" rel="noreferrer" className="btn-gold"><MessageCircle size={18} /> WhatsApp</a>
              <Link to="/quote" className="btn-ghost">Get Quote <ArrowUpRight size={18} /></Link>
            </div>
          </div>
        </div>
      </article>

      {/* Related */}
      <section className="bg-paper text-navy-dark pb-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <h3 className="font-display text-3xl md:text-4xl">More reads</h3>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {others.map((p) => (
              <Link key={p.slug} to={`/blog/${p.slug}`} className="group block bg-white rounded-3xl overflow-hidden card-shadow border border-navy-dark/5">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-contain" />
                </div>
                <div className="p-5">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-gold">{p.category}</div>
                  <div className="font-display text-lg mt-2 group-hover:text-gold transition-colors">{p.title}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
