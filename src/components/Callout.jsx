const styles = {
  tip: 'border-brass/40 bg-brass/10 text-brass',
  'pro-tip': 'border-brass/40 bg-brass/10 text-brass',
  warning: 'border-forge/50 bg-forge/10 text-forge',
  note: 'border-steel/40 bg-steel/10 text-steel',
  important: 'border-forge/50 bg-forge/10 text-forge',
  strategy: 'border-brass/40 bg-brass/10 text-brass',
};

export default function Callout({ type = 'note', label, icon: Icon, children }) {
  return (
    <aside className={`rounded-lg border p-5 ${styles[type] || styles.note}`}>
      <div className="flex items-center gap-3">
        {Icon ? <Icon aria-hidden="true" className="h-5 w-5" /> : null}
        <h3 className="font-heading text-lg font-bold text-text">{label}</h3>
      </div>
      <p className="mt-3 text-sm leading-7 text-muted">{children}</p>
    </aside>
  );
}
