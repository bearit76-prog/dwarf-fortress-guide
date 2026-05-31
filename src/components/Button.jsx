import { Link } from 'react-router-dom';

const base =
  'inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-coal';

const variants = {
  primary:
    'bg-brass text-coal shadow-glow hover:-translate-y-0.5 hover:bg-[#d4a15f] hover:shadow-[0_0_34px_rgba(197,139,69,0.28)]',
  secondary:
    'border border-brass/40 bg-panel/70 text-text hover:-translate-y-0.5 hover:border-brass hover:bg-brass/10',
  ghost:
    'border border-steel/25 bg-coal/40 text-muted hover:border-steel/60 hover:text-text',
};

export default function Button({ children, to, href, variant = 'primary', icon: Icon }) {
  const className = `${base} ${variants[variant]}`;
  const isExternal = href?.startsWith('http');
  const content = (
    <>
      {Icon ? <Icon aria-hidden="true" className="h-4 w-4" /> : null}
      {children}
    </>
  );

  if (href) {
    return (
      <a className={className} href={href} rel={isExternal ? 'noreferrer' : undefined} target={isExternal ? '_blank' : undefined}>
        {content}
      </a>
    );
  }

  return (
    <Link className={className} to={to}>
      {content}
    </Link>
  );
}
