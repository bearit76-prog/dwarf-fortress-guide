import { Coffee, HeartHandshake } from 'lucide-react';
import Button from '../components/Button.jsx';

export default function Support() {
  return (
    <main className="px-4 py-20 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-4xl text-center fade-in">
        <HeartHandshake aria-hidden="true" className="mx-auto h-12 w-12 text-brass" />
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.28em] text-brass">Support</p>
        <h1 className="mt-4 font-heading text-4xl font-extrabold text-text sm:text-5xl">
          Support the project without making it weird.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted">
          This guide is completely free and was created as a passion project while learning AI-assisted tools and web
          development. If it helped you save a fortress, plan a cleaner workshop level, or recover from a flood with
          dignity intact, a small coffee is appreciated.
        </p>
        <div className="mt-9 flex justify-center">
          <Button href="https://www.buymeacoffee.com/dfguide" icon={Coffee}>Buy Me a Coffee</Button>
        </div>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-6 text-steel">
          Support is optional, and the guide stays free either way. Stripe approval may still be pending on Buy Me a
          Coffee while the page finishes going live.
        </p>
      </section>
    </main>
  );
}
