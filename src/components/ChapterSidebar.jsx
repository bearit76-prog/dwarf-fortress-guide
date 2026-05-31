import { ChevronRight, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { chapters } from '../data/chapters.js';

function ChapterLinks({ onNavigate }) {
  return (
    <nav aria-label="Chapter list" className="space-y-1">
      {chapters.map((chapter) => (
        <NavLink
          key={chapter.slug}
          to={`/${chapter.slug}`}
          onClick={onNavigate}
          className={({ isActive }) =>
            `group flex items-center justify-between rounded-md px-3 py-3 text-sm transition ${
              isActive
                ? 'border border-brass/30 bg-brass/10 text-brass'
                : 'border border-transparent text-muted hover:border-steel/20 hover:bg-panel hover:text-text'
            }`
          }
        >
          <span>
            <span className="mr-3 font-semibold text-steel">{chapter.number}</span>
            {chapter.title}
          </span>
          <ChevronRight aria-hidden="true" className="h-4 w-4 opacity-60 transition group-hover:translate-x-0.5" />
        </NavLink>
      ))}
    </nav>
  );
}

export default function ChapterSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="mb-5 inline-flex min-h-11 items-center gap-2 rounded-md border border-steel/25 bg-panel px-4 py-2 text-sm font-semibold text-text lg:hidden"
        onClick={() => setOpen(true)}
      >
        <Menu aria-hidden="true" className="h-4 w-4" />
        Chapters
      </button>

      <aside className="hidden lg:block lg:w-72 lg:shrink-0">
        <div className="sticky top-24 rounded-lg border border-steel/20 bg-panel/60 p-4">
          <p className="mb-4 px-3 text-xs font-semibold uppercase tracking-[0.24em] text-brass">Guide Chapters</p>
          <ChapterLinks />
        </div>
      </aside>

      {open ? (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <button
            type="button"
            aria-label="Close chapter menu"
            className="absolute inset-0 bg-coal/80 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <aside className="absolute left-0 top-0 h-full w-[min(22rem,88vw)] overflow-y-auto border-r border-steel/20 bg-coal p-5 shadow-2xl">
            <div className="mb-5 flex items-center justify-between">
              <p className="font-heading text-lg font-bold text-text">Chapters</p>
              <button
                type="button"
                aria-label="Close chapter menu"
                className="flex h-10 w-10 items-center justify-center rounded-md border border-steel/20 text-text"
                onClick={() => setOpen(false)}
              >
                <X aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>
            <ChapterLinks onNavigate={() => setOpen(false)} />
          </aside>
        </div>
      ) : null}
    </>
  );
}
