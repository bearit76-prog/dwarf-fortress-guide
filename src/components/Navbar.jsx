import { Menu, Pickaxe, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { chapters } from '../data/chapters.js';

const links = [
  ['Home', '/'],
  ['Chapters', '/interface-controls'],
  ['Embark Tool', '/embark-calculator'],
  ['Download PDF', '/download-pdf'],
  ['About', '/about'],
  ['Support', '/support'],
];

function navClass({ isActive }) {
  return `rounded-md px-3 py-2 text-sm font-semibold transition ${
    isActive ? 'bg-brass/10 text-brass' : 'text-muted hover:bg-panel/70 hover:text-text'
  }`;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const isChapterPath = chapters.some((chapter) => pathname === `/${chapter.slug}`);

  return (
    <header className="sticky top-0 z-50 border-b border-steel/20 bg-coal/80 backdrop-blur-xl">
      <nav className="mx-auto flex min-h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-md border border-brass/30 bg-brass/10 text-brass">
            <Pickaxe aria-hidden="true" className="h-5 w-5" />
          </span>
          <span className="font-heading text-base font-bold text-text sm:text-lg">Strike the Earth</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map(([label, to]) => (
            <NavLink
              key={to}
              to={to}
              className={(state) => navClass(label === 'Chapters' && isChapterPath ? { isActive: true } : state)}
              end={to === '/'}
            >
              {label}
            </NavLink>
          ))}
        </div>

        <button
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-steel/20 text-text transition hover:border-brass/50 hover:text-brass md:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-steel/20 bg-coal/95 px-4 py-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {links.map(([label, to]) => (
              <NavLink
                key={to}
                to={to}
                className={(state) => navClass(label === 'Chapters' && isChapterPath ? { isActive: true } : state)}
                end={to === '/'}
                onClick={() => setOpen(false)}
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
