import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Reusable SEO component to dynamically manage document head metadata.
 * Injecting matching keywords, near semantic LSI keywords, and structured JSON-LD schemas.
 */
export default function SEO({
  title,
  description,
  keywords = [],
  canonical,
  ogType = 'website',
  ogImage = 'https://sciengasummits.com/assets/images/logo-og.jpg', // Default fallback OG image
  schema
}) {
  const location = useLocation();

  useEffect(() => {
    // 1. Title Settings
    const formattedTitle = title ? `${title} | Scienga Global Summits` : 'Scienga Global Summits';
    document.title = formattedTitle;

    // Helper to update or create meta tags
    const updateMeta = (attr, attrVal, content) => {
      if (content === undefined || content === null) return;
      let el = document.querySelector(`meta[${attr}="${attrVal}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, attrVal);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // Helper to update canonical link
    const updateCanonical = () => {
      let el = document.querySelector('link[rel="canonical"]');
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', 'canonical');
        document.head.appendChild(el);
      }
      const baseUrl = 'https://sciengasummits.com';
      const path = canonical || (location.pathname === '/' ? '' : location.pathname);
      const fullUrl = path.startsWith('http') ? path : `${baseUrl}${path}`;
      el.setAttribute('href', fullUrl);
    };

    // 2. Standard Meta Tags
    updateMeta('name', 'description', description);
    
    // Process keywords - exact keywords + LSI near keywords
    const keywordsString = Array.isArray(keywords) ? keywords.join(', ') : keywords;
    updateMeta('name', 'keywords', keywordsString);
    updateMeta('name', 'robots', 'index, follow');

    // 3. Open Graph Tags (Facebook & Search Engines)
    updateMeta('property', 'og:title', formattedTitle);
    updateMeta('property', 'og:description', description);
    updateMeta('property', 'og:type', ogType);
    updateMeta('property', 'og:image', ogImage);
    const baseUrl = 'https://sciengasummits.com';
    updateMeta('property', 'og:url', `${baseUrl}${location.pathname}`);
    updateMeta('property', 'og:site_name', 'Scienga Global Summits');

    // 4. Twitter Card Tags
    updateMeta('name', 'twitter:card', 'summary_large_image');
    updateMeta('name', 'twitter:title', formattedTitle);
    updateMeta('name', 'twitter:description', description);
    updateMeta('name', 'twitter:image', ogImage);

    // 5. Canonical link update
    updateCanonical();

    // 6. Schema JSON-LD Script tag Injection
    let schemaScript = document.getElementById('seo-schema-script');
    if (schema) {
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.setAttribute('type', 'application/ld+json');
        schemaScript.setAttribute('id', 'seo-schema-script');
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(schema);
    } else {
      if (schemaScript) {
        schemaScript.remove();
      }
    }

    // Cleanup logic for dynamic meta/scripts on unmount (to avoid pollution between page navigation)
    return () => {
      // We don't remove standard tags to avoid blinking, but we remove the schema script if it was temporary
      const tempScript = document.getElementById('seo-schema-script');
      if (tempScript) {
        tempScript.remove();
      }
    };
  }, [title, description, keywords, canonical, ogType, ogImage, schema, location.pathname]);

  return null;
}
