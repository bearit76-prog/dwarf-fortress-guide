import { Link } from 'react-router-dom';

const links = [
  ['Home', '/'],
  ['Embark Tool', '/embark-calculator'],
  ['Download PDF', '/download-pdf'],
  ['About', '/about'],
  ['Support', '/support'],
];

export default function Footer() {
  return (
    <footer className="border-t border-steel/20 bg-coal/80">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-heading text-lg font-bold text-text">Dwarf Fortress Strategy Guide</p>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
              Unofficial fan-made guide for Dwarf Fortress. Not affiliated with Bay 12 Games or Kitfox Games.
            </p>
          </div>
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-4 text-sm text-muted">
            {links.map(([label, to]) => (
              <Link key={to} to={to} className="transition hover:text-brass">
                {label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="mt-8 text-xs text-steel">
          Copyright 2026 Fan-made Dwarf Fortress Strategy Guide. Built as a static, dark-mode knowledge resource.
        </p>
      </div>
    </footer>
  );
}
