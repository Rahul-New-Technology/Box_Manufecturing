import { useEffect, useState, memo } from "react";
import { PLACEHOLDER_IMAGE, getCategoryPlaceholder } from "@/lib/imageLoader";

const ImageWithFallback = ({ src, alt, className, categorySlug, loading = "lazy", ...props }) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setImgSrc(src);
    setHasError(false);
  }, [src]);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      // Use category-specific placeholder if available, otherwise generic placeholder
      const fallback = categorySlug ? getCategoryPlaceholder(categorySlug) : PLACEHOLDER_IMAGE;
      setImgSrc(fallback);
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      loading={loading}
      onError={handleError}
      {...props}
    />
  );
};

export default memo(ImageWithFallback);
