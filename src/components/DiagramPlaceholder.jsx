export default function DiagramPlaceholder({ label = 'Fortress schematic' }) {
  return (
    <div className="relative h-32 overflow-hidden rounded-md border border-steel/20 bg-coal/70 bg-ore-grid bg-[length:22px_22px]">
      <div className="absolute left-4 top-4 h-7 w-20 rounded-sm border border-brass/40 bg-brass/10" />
      <div className="absolute bottom-5 left-7 h-12 w-7 rounded-sm border border-steel/30 bg-steel/10" />
      <div className="absolute right-5 top-6 h-20 w-24 rounded-sm border border-forge/30 bg-forge/10" />
      <div className="absolute left-1/2 top-0 h-full w-px bg-brass/30" />
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-brass/40 to-transparent" />
      <span className="absolute bottom-3 right-3 rounded-sm border border-steel/20 bg-coal/80 px-2 py-1 text-[0.65rem] uppercase tracking-[0.18em] text-muted">
        {label}
      </span>
    </div>
  );
}
