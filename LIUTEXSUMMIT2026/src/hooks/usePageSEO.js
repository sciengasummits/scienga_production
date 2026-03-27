import { useEffect } from 'react';

const SITE_NAME = 'LIUTEX2026';
const BASE_URL = 'https://liutex2026.com';
const DEFAULT_IMAGE = `${BASE_URL}/og-image.png`;
const DEFAULT_DESC =
  'International Conference on Liutex Theory and Applications in Vortex Identification and Vortex Dynamics. December 14–16, 2026 · Outram, Singapore.';

/**
 * usePageSEO – sets <title>, meta description, and Open Graph / Twitter
 * tags dynamically for each page via DOM mutation.
 *
 * @param {{ title?: string, description?: string, image?: string, canonical?: string }} options
 */
const usePageSEO = ({ title, description, image, canonical } = {}) => {
    useEffect(() => {
        const fullTitle = title
            ? `${title} | ${SITE_NAME}`
            : `${SITE_NAME} | International Conference on Liutex Theory & Vortex Dynamics – Singapore`;
        const desc = description || DEFAULT_DESC;
        const img = image || DEFAULT_IMAGE;
        const canon = canonical || BASE_URL + '/';

        // ── <title>
        document.title = fullTitle;

        const setMeta = (selector, attr, value) => {
            let el = document.querySelector(selector);
            if (!el) {
                el = document.createElement('meta');
                const [key, val] = selector.replace(/[\[\]]/g, '').split('=');
                el.setAttribute(key, val.replace(/"/g, ''));
                document.head.appendChild(el);
            }
            el.setAttribute(attr, value);
        };

        // ── Primary
        setMeta('meta[name="description"]', 'content', desc);

        // ── Open Graph
        setMeta('meta[property="og:title"]', 'content', fullTitle);
        setMeta('meta[property="og:description"]', 'content', desc);
        setMeta('meta[property="og:image"]', 'content', img);
        setMeta('meta[property="og:url"]', 'content', canon);

        // ── Twitter
        setMeta('meta[name="twitter:title"]', 'content', fullTitle);
        setMeta('meta[name="twitter:description"]', 'content', desc);
        setMeta('meta[name="twitter:image"]', 'content', img);

        // ── Canonical
        let canonEl = document.querySelector('link[rel="canonical"]');
        if (!canonEl) {
            canonEl = document.createElement('link');
            canonEl.setAttribute('rel', 'canonical');
            document.head.appendChild(canonEl);
        }
        canonEl.setAttribute('href', canon);
    }, [title, description, image, canonical]);
};

export default usePageSEO;
