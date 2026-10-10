// Inline SVG sprite for the Lumora-design pages. <Sprite /> is rendered once by LxShell;
// <Icon name="arrow" /> references a symbol from it and takes the current text colour.

const stroke = { fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round' }

export function Sprite() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" focusable="false">
      <symbol id="i-logo" viewBox="0 0 48 48"><path fill="currentColor" d="M24 2c2.2 13.8 7.9 19.6 22 22-14.1 2.4-19.8 8.2-22 22-2.2-13.8-7.9-19.6-22-22 14.1-2.4 19.8-8.2 22-22Z" /></symbol>
      <symbol id="i-arrow" viewBox="0 0 24 24"><path {...stroke} strokeWidth="2" d="M5 12h14M13 6l6 6-6 6" /></symbol>
      <symbol id="i-arrow-ur" viewBox="0 0 24 24"><path {...stroke} strokeWidth="2" d="M7 17 17 7M8 7h9v9" /></symbol>
      <symbol id="i-star" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2.5l2.9 5.88 6.49.94-4.7 4.58 1.11 6.46L12 17.9l-5.8 3.05 1.1-6.46-4.69-4.58 6.49-.94L12 2.5z" /></symbol>
      <symbol id="i-globe" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="12" cy="12" r="9.25" /><path d="M12 2.75c2.6 2.3 4 5.8 4 9.25s-1.4 6.95-4 9.25c-2.6-2.3-4-5.8-4-9.25s1.4-6.95 4-9.25zM2.75 12h18.5" /></g></symbol>
      <symbol id="i-x" viewBox="0 0 24 24"><path {...stroke} strokeWidth="2" d="M4 4l16 16M20 4 4 20" /></symbol>
      <symbol id="i-dot" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.6" /><circle cx="12" cy="12" r="3.2" fill="currentColor" /></symbol>
      <symbol id="i-grid" viewBox="0 0 24 24"><path {...stroke} strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></symbol>
      <symbol id="i-check" viewBox="0 0 24 24"><path {...stroke} strokeWidth="2" d="M5 12.5l4.5 4.5L19 7" /></symbol>
      <symbol id="i-plus" viewBox="0 0 24 24"><path {...stroke} strokeWidth="2" d="M12 5v14M5 12h14" /></symbol>
      <symbol id="i-mail" viewBox="0 0 24 24"><g {...stroke} strokeWidth="1.6"><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="m4 7 8 6 8-6" /></g></symbol>
      <symbol id="i-chat" viewBox="0 0 24 24"><path {...stroke} strokeWidth="1.6" d="M4 19.5l1.2-3.6A8 8 0 1 1 8.4 19L4 19.5z" /></symbol>
      <symbol id="i-cal" viewBox="0 0 24 24"><g {...stroke} strokeWidth="1.6"><rect x="3.5" y="5" width="17" height="15" rx="2.5" /><path d="M3.5 10h17M8 3v4M16 3v4" /></g></symbol>
      <symbol id="i-briefcase" viewBox="0 0 24 24"><g {...stroke} strokeWidth="1.6"><rect x="3" y="7" width="18" height="13" rx="2.5" /><path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7M3 12.5h18" /></g></symbol>
      <symbol id="i-pin" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z" /><circle cx="12" cy="10" r="2.4" /></g></symbol>
      {/* Hero card: one icon per highlight */}
      <symbol id="i-frame" viewBox="0 0 24 24"><g {...stroke} strokeWidth="1.6"><rect x="3" y="4" width="18" height="16" rx="3" /><circle cx="9" cy="9.5" r="1.8" /><path d="m21 15.5-4.6-4.6a1.5 1.5 0 0 0-2.1 0L5 20" /></g></symbol>
      <symbol id="i-chart" viewBox="0 0 24 24"><g {...stroke} strokeWidth="1.6"><path d="M4 20h16" /><rect x="5.5" y="11" width="3" height="6.5" rx="1" /><rect x="10.5" y="7" width="3" height="10.5" rx="1" /><rect x="15.5" y="13.5" width="3" height="4" rx="1" /><path d="M5 7.5 9 5l4 2 5-3.5" /></g></symbol>
      <symbol id="i-store" viewBox="0 0 24 24"><g {...stroke} strokeWidth="1.6"><path d="M4 9.5 5.6 4.5h12.8L20 9.5" /><path d="M4 9.5a2.67 2.67 0 0 0 5.33 0 2.67 2.67 0 0 0 5.34 0 2.67 2.67 0 0 0 5.33 0" /><path d="M5.5 12v7.5h13V12" /><path d="M10 19.5v-4h4v4" /></g></symbol>
      {/* Brand marks for the social links */}
      <symbol id="i-linkedin" viewBox="0 0 24 24"><path fill="currentColor" d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" /></symbol>
      <symbol id="i-instagram" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4.2" /></g><circle cx="17.4" cy="6.6" r="1.25" fill="currentColor" /></symbol>
      <symbol id="i-upwork" viewBox="0 0 24 24"><path fill="currentColor" d="M18.56 13.16c-1.1 0-2.14-.47-3.07-1.23l.23-1.08.01-.04c.2-1.14.85-3.06 2.84-3.06a2.7 2.7 0 0 1 0 5.4zm0-8.14c-2.54 0-4.51 1.65-5.31 4.37-1.22-1.84-2.15-4.04-2.69-5.9H7.83v7.11a2.55 2.55 0 0 1-5.09 0V3.49H0v7.11a5.29 5.29 0 0 0 10.56 0V9.41c.53 1.11 1.19 2.23 1.98 3.22l-1.67 7.88h2.8l1.21-5.71c1.06.68 2.28 1.11 3.68 1.11a5.44 5.44 0 0 0 0-10.89z" /></symbol>
      <symbol id="i-download" viewBox="0 0 24 24"><path {...stroke} strokeWidth="2" d="M12 4v11M7 10l5 5 5-5M5 20h14" /></symbol>
    </svg>
  )
}

export function Icon({ name, className = 'i', ...rest }) {
  return <svg className={className} aria-hidden="true" {...rest}><use href={`#i-${name}`} /></svg>
}

export function Stars() {
  return <>{[0, 1, 2, 3, 4].map(i => <Icon key={i} name="star" />)}</>
}

// Pill button / link from the design. `arrow` is 'right' | 'up-right' | 'download' | null.
export function Pill({ href, variant = 'dark', arrow = 'right', children, external, className = '', ...rest }) {
  const badge = arrow && (
    <span className={`pill__badge${arrow === 'up-right' ? ' ur' : ''}`}>
      <Icon name={arrow === 'up-right' ? 'arrow-ur' : arrow === 'download' ? 'download' : 'arrow'} />
    </span>
  )
  const cls = `pill pill--${variant}${arrow ? ' has-arrow' : ''} ${className}`.trim()
  const inner = <span className="pill__in">{children}{badge}</span>
  if (href) {
    return <a className={cls} href={href} {...(external ? { target: '_blank', rel: 'noopener' } : {})} {...rest}>{inner}</a>
  }
  return <button type="button" className={cls} {...rest}>{inner}</button>
}
