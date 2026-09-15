import { Helmet } from "react-helmet-async";

export default function SEO({ title, description, image, canonical, type = "website", schema, noIndex = false }) {
  const siteUrl = "https://www.gnpackaging.in";
  
  const t = title ? `${title} · GN Packaging` : "GN Packaging — Industrial Packaging Manufacturer, Mumbai India";
  const d = description || "Mumbai-based manufacturer of corrugated boxes, sheets, rolls, honeycomb boards & custom industrial packaging.";
  const img = image || "https://customer-assets.emergentagent.com/job_c136d1c0-ef78-4bbd-8071-dc8849bf1193/artifacts/54d2i8f7_image.png";
  const canonicalUrl = canonical || siteUrl;

  return (
    <Helmet>
      <title>{t}</title>
      <meta name="description" content={d} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={t} />
      <meta property="og:description" content={d} />
      <meta property="og:image" content={img} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="GN Packaging" />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={t} />
      <meta name="twitter:description" content={d} />
      <meta name="twitter:image" content={img} />
      <meta name="twitter:site" content="@gnpackaging" />
      
      {/* Additional SEO */}
      <meta name="keywords" content="corrugated box manufacturer Mumbai, packaging box manufacturer India, corrugated sheet supplier, corrugated roll manufacturer, industrial packaging, export packaging box, custom packaging, printed corrugated box, die cut box manufacturer, paper packaging manufacturer, honeycomb board, edge protector, wooden crate manufacturer, packaging company Mumbai" />
      <meta name="author" content="GN Packaging" />
      <meta name="theme-color" content="#082B63" />
      
      {/* Structured Data */}
      {schema && <script type="application/ld+json">{JSON.stringify(schema)}</script>}
    </Helmet>
  );
}
