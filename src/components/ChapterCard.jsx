import { Link } from 'react-router-dom';
import DiagramPlaceholder from './DiagramPlaceholder.jsx';

export default function ChapterCard({ chapter }) {
  const Icon = chapter.icon;

  return (
    <Link
      to={`/${chapter.slug}`}
      className="group block rounded-lg border border-steel/20 bg-panel/80 p-4 transition duration-300 hover:-translate-y-1 hover:border-brass/60 hover:shadow-glow"
    >
      {chapter.image ? (
        <div className="relative h-32 overflow-hidden rounded-md border border-steel/20 bg-coal">
          <img
            src={chapter.image}
            alt=""
            width="1200"
            height="640"
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-coal/75 via-transparent to-transparent" />
          <span className="absolute bottom-3 right-3 rounded-sm border border-steel/20 bg-coal/80 px-2 py-1 text-[0.65rem] uppercase tracking-[0.18em] text-muted">
            Chapter {chapter.number}
          </span>
        </div>
      ) : (
        <DiagramPlaceholder label={`Chapter ${chapter.number}`} />
      )}
      <div className="mt-5 flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-brass/30 bg-brass/10 text-brass">
          <Icon aria-hidden="true" className="h-5 w-5" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass">
            Chapter {chapter.number}
          </p>
          <h3 className="mt-2 font-heading text-xl font-bold text-text transition group-hover:text-brass">
            {chapter.title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-muted">{chapter.summary}</p>
        </div>
      </div>
    </Link>
  );
}
