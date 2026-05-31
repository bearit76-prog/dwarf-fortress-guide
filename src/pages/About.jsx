import { Compass, Hammer, ScrollText } from 'lucide-react';

const values = [
  {
    icon: Compass,
    title: 'Beginner-first decisions',
    copy: 'The guide explains why a choice matters before asking you to memorize another menu path.',
  },
  {
    icon: Hammer,
    title: 'Systems over superstition',
    copy: 'Stockpiles, workshops, defenses, and waterworks are treated as connected engineering problems.',
  },
  {
    icon: ScrollText,
    title: 'Steam UI clarity',
    copy: 'Screens and workflows are framed around the modern release so advice is easier to apply in-game.',
  },
];

export default function About() {
  return (
    <main className="px-4 py-20 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-4xl fade-in">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brass">About</p>
        <h1 className="mt-4 font-heading text-4xl font-extrabold text-text sm:text-5xl">
          A practical field manual for beautiful disasters.
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted">
          This fan-made strategy guide is built for players who want the depth of Dwarf Fortress without feeling
          buried by the interface. It focuses on strong starting habits, readable fortress layouts, and the small
          engineering choices that turn chaos into a story you meant to tell.
        </p>
      </section>

      <section className="mx-auto mt-14 grid max-w-6xl gap-5 md:grid-cols-3">
        {values.map((value) => {
          const Icon = value.icon;
          return (
            <article key={value.title} className="rounded-lg border border-steel/20 bg-panel/70 p-6">
              <Icon aria-hidden="true" className="h-8 w-8 text-brass" />
              <h2 className="mt-5 font-heading text-xl font-bold text-text">{value.title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted">{value.copy}</p>
            </article>
          );
        })}
      </section>
    </main>
  );
}
