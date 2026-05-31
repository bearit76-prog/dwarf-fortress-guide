import { Coffee, Download, FileDown, ScrollText } from 'lucide-react';
import Button from '../components/Button.jsx';
import ChapterCard from '../components/ChapterCard.jsx';
import FeatureCard from '../components/FeatureCard.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { chapters, features } from '../data/chapters.js';
import heroImage from '../assets/fortress-hero.png';

export default function Home() {
  return (
    <main>
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImage}
          alt=""
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-coal/60 via-coal/80 to-coal" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-coal to-transparent" />

        <div className="mx-auto flex min-h-[76svh] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-4xl fade-in">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-brass">
              Modern Dwarven Engineering
            </p>
            <h1 className="mt-5 max-w-4xl font-heading text-5xl font-extrabold leading-tight text-text sm:text-6xl lg:text-7xl">
              Dwarf Fortress Strategy Guide
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-text/90">
              Build Strongholds. Survive Chaos. Strike the Earth.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button to="/interface-controls" icon={ScrollText}>Read the Guide</Button>
            <Button href="/Dwarf_Fortress_Strategy_Guide_V3.pdf" variant="secondary" icon={Download}>Download PDF</Button>
              <Button to="/support" variant="ghost" icon={Coffee}>Support the Project</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brass">Guide Overview</p>
            <h2 className="mt-4 font-heading text-3xl font-bold text-text sm:text-4xl">
              A fortress plan you can actually read while everything is on fire.
            </h2>
          </div>
          <p className="text-base leading-8 text-muted">
            Dwarf Fortress is famous for complexity: overlapping jobs, moods, stockpiles, water pressure,
            military schedules, and dwarves with very strong opinions about missing socks. This guide keeps the
            focus beginner-friendly and Steam UI focused, with practical fortress management topics that help new
            overseers build clean layouts, dependable industries, safer engineering systems, and defenses that do
            not collapse the moment the first siege arrives.
          </p>
        </div>
      </section>

      <section className="border-y border-steel/20 bg-panel/30 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Chapters" title="From wagon dust to magma industry">
            Each chapter is written as a practical field manual with systems, layouts, warnings, and repeatable
            decisions you can bring into the next fortress.
          </SectionHeading>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {chapters.map((chapter) => (
              <ChapterCard key={chapter.slug} chapter={chapter} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Highlights" title="Readable systems for stubborn worlds" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-steel/20 bg-panel/30 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brass">PDF Edition</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-text">Keep the guide beside the fortress.</h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-muted">
              The PDF version is designed for offline reading, second-monitor planning, and quick reference during
              long fortress sessions where switching tabs feels like tempting fate.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4 rounded-lg border border-steel/20 bg-coal/70 p-6 sm:min-w-80">
            <FileDown aria-hidden="true" className="h-10 w-10 text-brass" />
            <Button href="/Dwarf_Fortress_Strategy_Guide_V3.pdf" icon={Download}>Download PDF</Button>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brass">Support</p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-text">A free guide, made with care.</h2>
          <p className="mt-5 text-base leading-8 text-muted">
            This guide is completely free and was created as a passion project while learning AI-assisted tools and
            web development.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="https://www.buymeacoffee.com/dfguide" variant="secondary" icon={Coffee}>Buy Me a Coffee</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
