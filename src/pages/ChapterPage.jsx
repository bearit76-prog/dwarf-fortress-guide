import { AlertTriangle, ArrowLeft, ArrowRight, Info, ShieldAlert, Sparkles, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import Callout from '../components/Callout.jsx';
import ChapterSidebar from '../components/ChapterSidebar.jsx';
import DiagramPlaceholder from '../components/DiagramPlaceholder.jsx';
import { chapterCallouts, chapters } from '../data/chapters.js';
import { chapterContent } from '../data/chapterContent.js';

function neighboringChapters(slug) {
  const index = chapters.findIndex((chapter) => chapter.slug === slug);
  return {
    previous: index > 0 ? chapters[index - 1] : null,
    next: index < chapters.length - 1 ? chapters[index + 1] : null,
  };
}

const calloutIcons = {
  note: Info,
  warning: AlertTriangle,
  important: ShieldAlert,
  strategy: Target,
  'pro-tip': Sparkles,
  tip: Sparkles,
};

function DataTable({ table }) {
  return (
    <div className="mt-6 overflow-hidden rounded-lg border border-steel/20">
      <div className="border-b border-steel/20 bg-coal/60 px-4 py-3">
        <h3 className="font-heading text-lg font-bold text-text">{table.caption}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-[44rem] w-full text-left text-sm">
          <thead className="bg-panel/80 text-xs uppercase tracking-[0.18em] text-steel">
            <tr>
              {table.columns.map((column) => (
                <th key={column} scope="col" className="px-4 py-3 font-semibold">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-steel/20">
            {table.rows.map((row) => (
              <tr key={row.join('-')} className="bg-panel/30">
                {row.map((cell, index) => (
                  <td
                    key={`${cell}-${index}`}
                    className={`px-4 py-4 align-top leading-6 ${
                      index === 1 ? 'whitespace-nowrap font-semibold text-brass' : 'text-muted'
                    } ${index === 0 ? 'font-semibold text-text' : ''}`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function FigureImage({ src, label }) {
  return (
    <figure className="mt-6 overflow-hidden rounded-lg border border-steel/20 bg-coal/70">
      <img src={src} alt={label} className="w-full object-cover" loading="lazy" />
      <figcaption className="border-t border-steel/20 px-4 py-3 text-xs uppercase tracking-[0.18em] text-muted">
        {label}
      </figcaption>
    </figure>
  );
}

function InfoCards({ cards }) {
  return (
    <div className="mt-6 grid gap-4 sm:grid-cols-3">
      {cards.map((card) => (
        <article key={card.title} className="rounded-lg border border-steel/20 bg-panel/40 p-4">
          <h3 className="font-heading text-lg font-bold text-text">{card.title}</h3>
          <p className="mt-3 text-sm leading-7 text-muted">{card.body}</p>
        </article>
      ))}
    </div>
  );
}

function Subsection({ item }) {
  return (
    <section className="rounded-lg border border-steel/20 bg-panel/30 p-5">
      <h3 className="font-heading text-xl font-bold text-text">{item.title}</h3>
      {item.steps ? (
        <ol className="mt-4 space-y-3">
          {item.steps.map((step, index) => (
            <li key={step} className="flex gap-4 text-sm leading-7 text-muted">
              <span className="font-heading text-sm font-bold text-brass">{String(index + 1).padStart(2, '0')}</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      ) : null}
      {item.bullets ? (
        <ul className="mt-4 space-y-3">
          {item.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3 text-sm leading-7 text-muted">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brass" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}

function GuideSection({ section }) {
  return (
    <section id={section.id} className="scroll-mt-24">
      <h2 className="font-heading text-3xl font-bold text-text">{section.title}</h2>
      {section.paragraphs?.map((paragraph) => (
        <p key={paragraph} className="mt-4 text-base leading-8 text-muted">
          {paragraph}
        </p>
      ))}
      {section.cards ? <InfoCards cards={section.cards} /> : null}
      {section.tables?.map((table) => (
        <DataTable key={table.caption} table={table} />
      ))}
      {section.code ? (
        <div className="mt-6 overflow-hidden rounded-lg border border-steel/20 bg-coal/70">
          <div className="border-b border-steel/20 px-4 py-3">
            <h3 className="font-heading text-lg font-bold text-text">{section.codeTitle}</h3>
          </div>
          <pre className="overflow-x-auto p-4 text-xs leading-6 text-muted">
            <code>{section.code.join('\n')}</code>
          </pre>
        </div>
      ) : null}
      {section.subsections ? (
        <div className="mt-6 grid gap-4">
          {section.subsections.map((item) => (
            <Subsection key={item.title} item={item} />
          ))}
        </div>
      ) : null}
      {section.callouts ? (
        <div className="mt-6 grid gap-4">
          {section.callouts.map((callout) => (
            <Callout
              key={`${callout.label}-${callout.body}`}
              type={callout.type}
              label={callout.label}
              icon={calloutIcons[callout.type]}
            >
              {callout.body}
            </Callout>
          ))}
        </div>
      ) : null}
      {section.diagram ? (
        <div className="mt-6">
          {section.image ? <FigureImage src={section.image} label={section.diagram} /> : <DiagramPlaceholder label={section.diagram} />}
        </div>
      ) : null}
    </section>
  );
}

function PlaceholderContent({ chapter }) {
  return (
    <>
      <section className="fade-in">
        <h2 className="font-heading text-3xl font-bold text-text">Strategic Objective</h2>
        <p className="mt-4 text-base leading-8 text-muted">
          This chapter turns a high-pressure fortress system into a set of repeatable decisions. The goal is
          not to remove Dwarf Fortress chaos. The goal is to build enough structure that the chaos has to work
          harder to reach anything important.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-3xl font-bold text-text">Core Systems</h2>
        <ul className="mt-5 space-y-4">
          {chapter.sections.map((section) => (
            <li key={section} className="flex gap-4 rounded-lg border border-steel/20 bg-panel/50 p-4">
              <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-brass shadow-forge" />
              <span className="text-base leading-7 text-muted">{section}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="font-heading text-3xl font-bold text-text">Working Blueprint</h2>
        <p className="mt-4 text-base leading-8 text-muted">
          Start with a main stair spine, keep noisy or dangerous work on predictable levels, and reserve a
          clean central path for hauling. Every industry block should have an input stockpile, a workshop lane,
          and an output stockpile close enough that dwarves spend more time producing than wandering.
        </p>
        <div className="mt-6">
          <DiagramPlaceholder label={chapter.blueprint} />
        </div>
      </section>

      <section className="grid gap-5">
        <Callout type="tip" label={chapterCallouts.tip.label} icon={chapterCallouts.tip.icon}>
          {chapterCallouts.tip.body}
        </Callout>
        <Callout type="warning" label={chapterCallouts.warning.label} icon={chapterCallouts.warning.icon}>
          {chapterCallouts.warning.body}
        </Callout>
        <Callout type="note" label={chapterCallouts.note.label} icon={chapterCallouts.note.icon}>
          {chapterCallouts.note.body}
        </Callout>
      </section>
    </>
  );
}

export default function ChapterPage({ chapter }) {
  const Icon = chapter.icon;
  const { previous, next } = neighboringChapters(chapter.slug);
  const content = chapterContent[chapter.slug];
  const onThisPage = content?.sections?.map((section) => section.title) || [
    'Strategic Objective',
    'Core Systems',
    'Working Blueprint',
    'Callouts',
    'Fortress Checklist',
  ];

  return (
    <main className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl gap-10">
        <ChapterSidebar />

        <article className="min-w-0 flex-1">
          <header className="overflow-hidden rounded-xl border border-steel/20 bg-panel/60">
            <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_22rem] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brass">
                  Chapter {chapter.number}
                </p>
                <h1 className="mt-4 font-heading text-4xl font-extrabold text-text sm:text-5xl">
                  {chapter.title}
                </h1>
                {content?.subtitle ? (
                  <p className="mt-3 font-heading text-2xl font-bold text-brass">{content.subtitle}</p>
                ) : null}
                <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">{chapter.summary}</p>
              </div>
              <div className="overflow-hidden rounded-lg border border-steel/20 bg-coal/50">
                {chapter.image ? (
                  <img
                    src={chapter.image}
                    alt=""
                    width="1200"
                    height="640"
                    decoding="async"
                    className="h-44 w-full object-cover"
                  />
                ) : null}
                <div className="p-5">
                  <Icon aria-hidden="true" className="h-10 w-10 text-brass" />
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.24em] text-steel">
                    Blueprint Focus
                  </p>
                  <p className="mt-2 text-base font-semibold text-text">{chapter.blueprint}</p>
                </div>
              </div>
            </div>
          </header>

          <div className="mt-8 grid gap-8 xl:grid-cols-[minmax(0,1fr)_18rem]">
            <div className="max-w-3xl space-y-10">
              {content ? (
                <>
                  <section className="fade-in">
                    <h2 className="font-heading text-3xl font-bold text-text">Chapter Overview</h2>
                    {content.introduction.map((paragraph) => (
                      <p key={paragraph} className="mt-4 text-base leading-8 text-muted">
                        {paragraph}
                      </p>
                    ))}
                  </section>
                  {content.sections.map((section) => (
                    <GuideSection key={section.id} section={section} />
                  ))}
                </>
              ) : (
                <PlaceholderContent chapter={chapter} />
              )}

              <section>
                <h2 className="font-heading text-3xl font-bold text-text">Fortress Checklist</h2>
                <div className="mt-5 overflow-hidden rounded-lg border border-steel/20">
                  {(content?.checklist || [
                    'Name important zones, stockpiles, squads, and levers before the fort becomes large.',
                    'Leave expansion space around workshops, bedrooms, farms, hospitals, and defense gates.',
                    'Create a fallback plan for interruptions: siege, mood demand, tantrum spiral, flood, or trade rush.',
                    'Review alerts and job cancellations at the end of every season.',
                  ]).map((item, index) => (
                    <div
                      key={item}
                      className="flex gap-4 border-b border-steel/20 bg-panel/30 p-4 last:border-b-0"
                    >
                      <span className="font-heading text-sm font-bold text-brass">{String(index + 1).padStart(2, '0')}</span>
                      <p className="text-sm leading-7 text-muted">{item}</p>
                    </div>
                  ))}
                </div>
              </section>

              <nav className="grid gap-3 border-t border-steel/20 pt-8 sm:grid-cols-2" aria-label="Chapter navigation">
                {previous ? (
                  <Link
                    to={`/${previous.slug}`}
                    className="flex min-h-16 items-center gap-3 rounded-lg border border-steel/20 bg-panel/40 px-4 py-3 text-sm text-muted transition hover:border-brass/40 hover:text-text"
                  >
                    <ArrowLeft aria-hidden="true" className="h-4 w-4 text-brass" />
                    <span>
                      <span className="block text-xs uppercase tracking-[0.2em] text-steel">Previous</span>
                      {previous.title}
                    </span>
                  </Link>
                ) : <span />}
                {next ? (
                  <Link
                    to={`/${next.slug}`}
                    className="flex min-h-16 items-center justify-between gap-3 rounded-lg border border-steel/20 bg-panel/40 px-4 py-3 text-sm text-muted transition hover:border-brass/40 hover:text-text sm:text-right"
                  >
                    <span>
                      <span className="block text-xs uppercase tracking-[0.2em] text-steel">Next</span>
                      {next.title}
                    </span>
                    <ArrowRight aria-hidden="true" className="h-4 w-4 text-brass" />
                  </Link>
                ) : null}
              </nav>
            </div>

            <aside className="hidden xl:block">
              <div className="sticky top-24 rounded-lg border border-steel/20 bg-panel/50 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brass">On This Page</p>
                <div className="mt-5 space-y-3 text-sm text-muted">
                  <p>Chapter Overview</p>
                  {onThisPage.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                  <p>Fortress Checklist</p>
                </div>
              </div>
            </aside>
          </div>
        </article>
      </div>
    </main>
  );
}
