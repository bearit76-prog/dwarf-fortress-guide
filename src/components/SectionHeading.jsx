export default function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brass">{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 font-heading text-3xl font-bold text-text sm:text-4xl">{title}</h2>
      {children ? <p className="mt-5 text-base leading-8 text-muted">{children}</p> : null}
    </div>
  );
}
