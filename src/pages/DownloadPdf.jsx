import { Download, FileDown, ScrollText } from 'lucide-react';
import Button from '../components/Button.jsx';

export default function DownloadPdf() {
  return (
    <main className="px-4 py-20 sm:px-6 lg:px-8">
      <section className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_24rem] lg:items-center">
        <div className="fade-in">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brass">Download PDF</p>
          <h1 className="mt-4 font-heading text-4xl font-extrabold text-text sm:text-5xl">
            A portable guide for long fortress sessions.
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted">
            The PDF edition is planned as an offline companion with chapter summaries, blueprints, checklists, and
            engineering notes that can sit beside the game while you manage the next crisis.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/Dwarf_Fortress_Strategy_Guide_V3.pdf" icon={Download}>Download PDF</Button>
            <Button to="/interface-controls" variant="secondary" icon={ScrollText}>Read Online</Button>
          </div>
        </div>
        <aside className="rounded-lg border border-brass/25 bg-panel/80 p-8 shadow-glow">
          <FileDown aria-hidden="true" className="h-14 w-14 text-brass" />
          <h2 className="mt-6 font-heading text-2xl font-bold text-text">PDF Edition</h2>
          <p className="mt-4 text-sm leading-7 text-muted">
            The complete source guide is available as a static PDF download. Cloudflare Pages will serve it directly from
            the published site.
          </p>
        </aside>
      </section>
    </main>
  );
}
