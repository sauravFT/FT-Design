'use client';

import { useState } from 'react';
import { FyscalLogo, Swap, Card, Bolt, Chart, Api, Users, Globe, Lock, Menu, X, ArrowR } from './Icons';

interface WBtnProps {
  children: React.ReactNode;
  variant?: 'primary' | 'dark' | 'ghost' | 'light' | 'outlineLight';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  full?: boolean;
}

function WBtn({ children, variant = 'primary', size = 'md', onClick, full }: WBtnProps) {
  const [h, setH] = useState(false);
  const pad = size === 'lg' ? '15px 28px' : size === 'sm' ? '8px 16px' : '12px 22px';
  const fs = size === 'lg' ? 15 : size === 'sm' ? 13 : 14;
  const variants: Record<string, React.CSSProperties> = {
    primary: { background: h ? 'var(--tertiary-2)' : 'var(--primary)', color: '#fff', border: '1.5px solid var(--primary)' },
    dark: { background: h ? '#000' : 'var(--ink)', color: '#fff', border: '1.5px solid var(--mono-900)' },
    ghost: { background: h ? 'var(--mono-100)' : 'transparent', color: 'var(--fg)', border: '1.5px solid var(--border-input)' },
    light: { background: h ? 'rgba(255,255,255,.85)' : '#fff', color: 'var(--primary)', border: '1.5px solid #fff' },
    outlineLight: { background: h ? 'rgba(255,255,255,.12)' : 'transparent', color: '#fff', border: '1.5px solid rgba(255,255,255,.5)' },
  };
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        padding: pad, fontSize: fs, fontWeight: 600, fontFamily: 'var(--font-body)',
        borderRadius: 0, cursor: 'pointer', display: 'inline-flex', alignItems: 'center',
        justifyContent: 'center', gap: 8, transition: '.15s',
        width: full ? '100%' : 'auto', letterSpacing: '-.01em',
        ...variants[variant]
      }}
    >
      {children}
    </button>
  );
}

const Caret = () => (
  <svg
    className="nav-caret"
    width="11" height="11"
    viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.4"
    strokeLinecap="round" strokeLinejoin="round"
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);

type IconComponent = React.FC<{ size?: number; stroke?: string }>;

const NAV_ITEMS: Array<{
  label: string;
  menu?: Array<{ t: string; d: string; icon: IconComponent }>;
}> = [
  { label: 'Personal', menu: [
    { t: 'Send money', d: 'Instant transfers, anywhere', icon: Swap },
    { t: 'Pay bills', d: 'Airtime, data, electricity, TV', icon: Card },
    { t: 'Cards', d: 'Virtual & physical, global spend', icon: Bolt },
    { t: 'Savings', d: 'Goals that lock and earn', icon: Chart },
  ]},
  { label: 'Business', menu: [
    { t: 'Payments API', d: 'Accept and send at scale', icon: Api },
    { t: 'Payroll', d: 'Bulk payouts in minutes', icon: Users },
    { t: 'Invoicing', d: 'Bill clients, get paid faster', icon: Card },
    { t: 'Treasury', d: 'Multi-currency balances', icon: Globe },
  ]},
  { label: 'Developers', menu: [
    { t: 'Documentation', d: 'Guides and quickstarts', icon: Api },
    { t: 'API reference', d: 'Every endpoint, with examples', icon: Lock },
    { t: 'Status', d: 'Live uptime and incidents', icon: Bolt },
    { t: 'Changelog', d: "What's new this week", icon: Globe },
  ]},
  { label: 'Company' },
  { label: 'Pricing' },
];

const NAV_LABELS = ['Personal', 'Business', 'Developers', 'Company', 'Pricing'];

export default function NavBar({ onCta }: { onCta?: () => void }) {
  const [open, setOpen] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(255,255,255,.9)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border)'
    }}>
      <div
        className="nav-row"
        style={{
          maxWidth: 1200, margin: '0 auto', padding: '0 20px',
          height: 64, display: 'flex', alignItems: 'center', gap: 24
        }}
      >
        <FyscalLogo height={20} />
        <nav className="nav-links" style={{ display: 'flex', gap: 6, flex: 1 }}>
          {NAV_ITEMS.map(it => it.menu ? (
            <div
              key={it.label}
              className={'nav-item' + (open === it.label ? ' open' : '')}
              onMouseEnter={() => setOpen(it.label)}
              onMouseLeave={() => setOpen(null)}
            >
              <button
                className="nav-trigger"
                onFocus={() => setOpen(it.label)}
                aria-haspopup="true"
                aria-expanded={open === it.label}
              >
                {it.label}<Caret />
              </button>
              <div className="nav-panel" role="menu">
                {it.menu.map((m, i) => {
                  const IconComp = m.icon;
                  return (
                    <a
                      key={m.t}
                      href="#"
                      className="nav-link-row"
                      role="menuitem"
                      style={{ transitionDelay: (i * 45) + 'ms' }}
                    >
                      <span className="nav-link-ic">
                        <IconComp size={18} stroke="var(--primary)" />
                      </span>
                      <span className="nav-link-tx">
                        <span className="nav-link-t">{m.t}</span>
                        <span className="nav-link-d">{m.d}</span>
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          ) : (
            <a key={it.label} href="#" className="nav-plain">{it.label}</a>
          ))}
        </nav>
        <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <a href="#" style={{ fontSize: 14, fontWeight: 600, color: 'var(--fg)', textDecoration: 'none' }}>Sign in</a>
          <WBtn size="sm" onClick={onCta}>Open account</WBtn>
        </div>
        <button
          className="nav-burger"
          onClick={() => setMenuOpen(m => !m)}
          aria-label="Menu"
          style={{
            display: 'none', width: 42, height: 42, placeItems: 'center',
            border: '1px solid var(--border-input)', background: 'var(--surface)',
            cursor: 'pointer', marginLeft: 'auto'
          }}
        >
          {menuOpen ? <X size={20} stroke="var(--fg)" /> : <Menu size={20} stroke="var(--fg)" />}
        </button>
      </div>
      {menuOpen && (
        <div
          className="nav-mobile"
          style={{
            borderTop: '1px solid var(--border)', padding: '12px 20px 20px',
            display: 'flex', flexDirection: 'column', gap: 4, background: 'var(--surface)'
          }}
        >
          {NAV_LABELS.map(l => (
            <a
              key={l} href="#"
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: 16, fontWeight: 500, color: 'var(--fg)', textDecoration: 'none',
                padding: '12px 4px', borderBottom: '1px solid var(--surface-soft)'
              }}
            >{l}</a>
          ))}
          <a href="#" style={{ fontSize: 15, fontWeight: 600, color: 'var(--fg)', textDecoration: 'none', padding: '14px 4px 8px' }}>Sign in</a>
          <WBtn full onClick={onCta}>Open account</WBtn>
        </div>
      )}
    </header>
  );
}

export { WBtn };
