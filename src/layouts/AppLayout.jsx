import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import { getPageMeta, SITE_NAME } from '../utils/seo.js';

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

function upsertCanonical(href) {
  let element = document.head.querySelector('link[rel="canonical"]');

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);
}

export default function AppLayout() {
  const location = useLocation();

  useEffect(() => {
    const meta = getPageMeta(location.pathname);

    document.title = meta.title;
    upsertMeta('meta[name="description"]', { name: 'description', content: meta.description });
    upsertCanonical(meta.canonical);
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: meta.title });
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: meta.description });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: meta.canonical });
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: meta.type });
    upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: SITE_NAME });
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: meta.image });
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: meta.title });
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: meta.description });
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: meta.image });

    if (window.gtag && window.GA_MEASUREMENT_ID) {
      window.gtag('config', window.GA_MEASUREMENT_ID, {
        page_path: `${location.pathname}${location.search}`,
        page_title: meta.title,
      });
    }
  }, [location.pathname, location.search]);

  return (
    <div className="min-h-screen bg-coal text-text">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
