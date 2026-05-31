export default function FeatureCard({ feature }) {
  const Icon = feature.icon;

  return (
    <article className="rounded-lg border border-steel/20 bg-panel/70 p-5 transition duration-300 hover:border-brass/40 hover:bg-panel">
      <div className="flex h-11 w-11 items-center justify-center rounded-md bg-coal text-brass">
        <Icon aria-hidden="true" className="h-5 w-5" />
      </div>
      <h3 className="mt-5 font-heading text-lg font-bold text-text">{feature.title}</h3>
      <p className="mt-3 text-sm leading-6 text-muted">{feature.copy}</p>
    </article>
  );
}
