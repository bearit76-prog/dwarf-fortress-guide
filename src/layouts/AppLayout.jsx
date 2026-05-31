import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import { chapters } from '../data/chapters.js';

const descriptions = {
  '/': 'A modern fan-made Dwarf Fortress strategy guide for Steam players, covering embark planning, industry, engineering, defense, morale, and endgame systems.',
  '/about': 'Learn about the fan-made Dwarf Fortress Strategy Guide and its beginner-friendly Steam UI focus.',
  '/support': 'Support the free fan-made Dwarf Fortress Strategy Guide passion project.',
  '/download-pdf': 'Download the free PDF version of the fan-made Dwarf Fortress Strategy Guide.',
};

function usePageMeta() {
  const { pathname } = useLocation();
  const chapter = chapters.find((item) => `/${item.slug}` === pathname);

  if (chapter) {
    return {
      title: `${chapter.title} | Dwarf Fortress Strategy Guide`,
      description: chapter.summary,
    };
  }

  const labels = {
    '/': 'Dwarf Fortress Strategy Guide',
    '/about': 'About | Dwarf Fortress Strategy Guide',
    '/support': 'Support | Dwarf Fortress Strategy Guide',
    '/download-pdf': 'Download PDF | Dwarf Fortress Strategy Guide',
  };

  return {
    title: labels[pathname] || 'Dwarf Fortress Strategy Guide',
    description: descriptions[pathname] || descriptions['/'],
  };
}

export default function AppLayout() {
  const meta = usePageMeta();
  document.title = meta.title;
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute('content', meta.description);

  return (
    <div className="min-h-screen bg-coal text-text">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
