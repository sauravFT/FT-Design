/* Fyscal Website UI Kit — Component Library (atomic components).
   Mobile-first, zero-radius, brand tokens. Exports a `Lib` namespace + helpers.
   Grouped: Navigation, Content, Actions, Forms, Feedback, Containers, Data. */
const { useState, useRef, useEffect } = React;

/* ════ shared atoms ════════════════════════════════════════════════════════ */
function UBtn({ children, variant = 'primary', size = 'md', full, onClick, type }) {
  const [h, setH] = useState(false);
  const pad = size === 'lg' ? '14px 24px' : size === 'sm' ? '8px 14px' : '11px 18px';
  const fs = size === 'lg' ? 15 : size === 'sm' ? 13 : 14;
  const V = {
    primary: { background: h ? 'var(--tertiary-2)' : 'var(--primary)', color: '#fff', border: '1.5px solid var(--primary)' },
    dark: { background: h ? '#000' : 'var(--ink)', color: '#fff', border: '1.5px solid var(--mono-900)' },
    ghost: { background: h ? 'var(--mono-100)' : 'transparent', color: 'var(--fg)', border: '1.5px solid var(--border-input)' },
    danger: { background: h ? '#c81e1e' : 'var(--danger)', color: '#fff', border: '1.5px solid var(--danger)' },
    light: { background: h ? 'rgba(255,255,255,.88)' : '#fff', color: 'var(--primary)', border: '1.5px solid #fff' },
    outlineLight: { background: h ? 'rgba(255,255,255,.14)' : 'transparent', color: '#fff', border: '1.5px solid rgba(255,255,255,.55)' },
  };
  return <button type={type} onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
    style={{ padding: pad, fontSize: fs, fontWeight: 600, fontFamily: 'var(--font-body)', borderRadius: 0, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, transition: '.15s', width: full ? '100%' : 'auto', letterSpacing: '-.01em', ...V[variant] }}>{children}</button>;
}

const card = { background: 'var(--surface)', border: '1px solid var(--border)', padding: 18 };
const lbl = { fontSize: 12, fontWeight: 600, marginBottom: 6, display: 'block', color: 'var(--fg)' };

/* ════ NAVIGATION ══════════════════════════════════════════════════════════ */
function Breadcrumbs({ items = ['Home', 'Personal', 'Cards', 'Virtual card'] }) {
  return (
    <nav style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', fontSize: 13 }}>
      {items.map((it, i) => (
        <span key={it} style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          <a href="#" style={{ color: i === items.length - 1 ? 'var(--fg)' : 'var(--mono-500)', fontWeight: i === items.length - 1 ? 600 : 500, textDecoration: 'none' }}>{it}</a>
          {i < items.length - 1 && <SIcons.chevR size={13} stroke="var(--mono-300)" />}
        </span>
      ))}
    </nav>
  );
}

function Tabs({ tabs = ['Overview', 'Transactions', 'Cards', 'Settings'] }) {
  const [a, setA] = useState(0);
  return (
    <div style={{ borderBottom: '1px solid var(--border)', display: 'flex', gap: 4, overflowX: 'auto' }}>
      {tabs.map((t, i) => (
        <button key={t} onClick={() => setA(i)} style={{ padding: '10px 14px', fontSize: 13.5, fontWeight: a === i ? 600 : 500, fontFamily: 'var(--font-body)', color: a === i ? 'var(--primary)' : 'var(--mono-500)', background: 'none', border: 'none', borderBottom: a === i ? '2px solid var(--primary)' : '2px solid transparent', marginBottom: -1, cursor: 'pointer', whiteSpace: 'nowrap' }}>{t}</button>
      ))}
    </div>
  );
}

function Segments({ options = ['Day', 'Week', 'Month', 'Year'] }) {
  const [a, setA] = useState(1);
  return (
    <div style={{ display: 'inline-flex', padding: 3, background: 'var(--surface-soft)', border: '1px solid var(--border)' }}>
      {options.map((o, i) => (
        <button key={o} onClick={() => setA(i)} style={{ padding: '7px 16px', fontSize: 13, fontWeight: 600, fontFamily: 'var(--font-body)', color: a === i ? '#fff' : 'var(--mono-600)', background: a === i ? 'var(--primary)' : 'transparent', border: 'none', cursor: 'pointer', transition: '.12s' }}>{o}</button>
      ))}
    </div>
  );
}

function SideNav({ items }) {
  const list = items || [
    { label: 'Dashboard', icon: SIcons.home }, { label: 'Payments', icon: SIcons.swap },
    { label: 'Cards', icon: SIcons.card }, { label: 'Analytics', icon: SIcons.chart }, { label: 'Settings', icon: SIcons.gear },
  ];
  const [a, setA] = useState(0);
  return (
    <div style={{ width: 200, border: '1px solid var(--border)', background: 'var(--surface)', padding: 8 }}>
      {list.map((it, i) => { const I = it.icon; return (
        <div key={it.label} onClick={() => setA(i)} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 10px', fontSize: 13, fontWeight: a === i ? 600 : 500, cursor: 'pointer', color: a === i ? 'var(--primary)' : 'var(--mono-600)', background: a === i ? 'var(--primary-soft)' : 'transparent', boxShadow: a === i ? 'inset 2px 0 0 var(--primary)' : 'none' }}>
          <I size={17} stroke={a === i ? 'var(--primary)' : 'var(--mono-500)'} />{it.label}
        </div>
      ); })}
    </div>
  );
}

function Menu() {
  const [open, setOpen] = useState(false);
  const items = ['Profile', 'Billing', 'Team', 'Sign out'];
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <UBtn variant="ghost" size="sm" onClick={() => setOpen(o => !o)}>Account <SIcons.chevD size={14} /></UBtn>
      {open && (
        <div style={{ position: 'absolute', top: '100%', left: 0, marginTop: 4, minWidth: 170, background: 'var(--surface)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-lg)', zIndex: 20 }}>
          {items.map((it, i) => (
            <div key={it} onClick={() => setOpen(false)} style={{ padding: '10px 14px', fontSize: 13, color: i === items.length - 1 ? 'var(--danger)' : 'var(--fg)', cursor: 'pointer', borderTop: i === items.length - 1 ? '1px solid var(--surface-soft)' : 'none' }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--surface-soft)'} onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>{it}</div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ════ CONTENT DISPLAY ═════════════════════════════════════════════════════ */
function Avatar({ initials = 'AK', size = 40, tint = 'var(--gradient-brand)' }) {
  return <div style={{ width: size, height: size, borderRadius: '50%', background: tint, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: size * 0.36, flexShrink: 0 }}>{initials}</div>;
}
function AvatarGroup() {
  const a = [['AK', '#352eff'], ['OO', '#0053ff'], ['NW', '#7b2ff7'], ['+5', 'var(--mono-300)']];
  return <div style={{ display: 'flex' }}>{a.map((x, i) => <div key={i} style={{ marginLeft: i ? -10 : 0, border: '2px solid #fff', borderRadius: '50%' }}><Avatar initials={x[0]} size={34} tint={x[1]} /></div>)}</div>;
}

function FeatureCard({ icon, title, body }) {
  const I = icon || SIcons.bolt;
  return (
    <div style={card}>
      <div style={{ width: 44, height: 44, background: 'var(--primary-soft)', color: 'var(--primary)', display: 'grid', placeItems: 'center', marginBottom: 14 }}><I size={22} /></div>
      <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 6 }}>{title || 'Instant transfers'}</div>
      <div style={{ fontSize: 13.5, color: 'var(--mono-500)', lineHeight: 1.55 }}>{body || 'Money lands in seconds, any bank, any time.'}</div>
    </div>
  );
}

function MediaBlock() {
  return (
    <div style={{ ...card, padding: 0, overflow: 'hidden' }}>
      <div style={{ aspectRatio: '16/9', background: 'var(--gradient-brand)', position: 'relative', display: 'grid', placeItems: 'center' }}>
        <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'rgba(255,255,255,.25)', border: '1px solid rgba(255,255,255,.5)', display: 'grid', placeItems: 'center' }}><SIcons.play size={20} stroke="#fff" fill="#fff" /></div>
      </div>
      <div style={{ padding: 16 }}>
        <div style={{ fontSize: 14, fontWeight: 700 }}>How Fyscal works</div>
        <div style={{ fontSize: 12.5, color: 'var(--mono-500)', marginTop: 4 }}>2 min · Product overview</div>
      </div>
    </div>
  );
}

function ListItem({ title, meta, amount, credit }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 0', borderBottom: '1px solid var(--surface-soft)' }}>
      <div style={{ width: 38, height: 38, background: 'var(--bg-secondary)', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
        <SIcons.swap size={18} stroke="var(--mono-500)" />
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 13.5, fontWeight: 600 }}>{title || 'Salary — GTBank'}</div>
        <div style={{ fontSize: 12, color: 'var(--mono-400)' }}>{meta || 'Today, 09:14'}</div>
      </div>
      <div style={{ font: '700 13.5px var(--font-mono)', color: credit ? 'var(--success)' : 'var(--fg)' }}>{amount || '+₦350,000'}</div>
    </div>
  );
}

function Thumb({ tint }) {
  return <div style={{ aspectRatio: '1', background: tint || 'var(--primary-soft)', border: '1px solid var(--border)', display: 'grid', placeItems: 'center' }}><SIcons.grid size={20} stroke="var(--primary)" /></div>;
}

/* ════ ACTIONS ═════════════════════════════════════════════════════════════ */
function Popover() {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <UBtn variant="ghost" size="sm" onClick={() => setOpen(o => !o)}>Info <SIcons.chevD size={14} /></UBtn>
      {open && (
        <div style={{ position: 'absolute', top: '100%', left: 0, marginTop: 6, width: 220, background: 'var(--ink)', color: '#fff', padding: 12, fontSize: 12.5, lineHeight: 1.5, zIndex: 20, boxShadow: 'var(--shadow-lg)' }}>
          Transfers settle instantly on weekdays. Weekend transfers may take up to 2 hours.
        </div>
      )}
    </div>
  );
}

function ActionSheet({ onClose }) {
  const items = [['Share', SIcons.swap], ['Edit', SIcons.doc], ['Archive', SIcons.grid], ['Delete', SIcons.x]];
  return (
    <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,16,40,.4)', display: 'flex', alignItems: 'flex-end', zIndex: 30 }} onClick={onClose}>
      <div style={{ width: '100%', background: 'var(--surface)', padding: '8px 0 16px' }} onClick={e => e.stopPropagation()}>
        {items.map(([t, I], i) => (
          <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '15px 22px', fontSize: 15, fontWeight: 500, color: t === 'Delete' ? 'var(--danger)' : 'var(--fg)', borderTop: i ? '1px solid var(--surface-soft)' : 'none', cursor: 'pointer' }}>
            <I size={20} stroke={t === 'Delete' ? 'var(--danger)' : 'var(--mono-600)'} />{t}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ════ FORMS ═══════════════════════════════════════════════════════════════ */
function TextInput({ label = 'Full name', placeholder = 'Jane Doe', error }) {
  const [f, setF] = useState(false);
  return (
    <div>
      <label style={lbl}>{label}</label>
      <input placeholder={placeholder} onFocus={() => setF(true)} onBlur={() => setF(false)}
        style={{ width: '100%', height: 46, padding: '0 14px', borderRadius: 0, background: 'var(--surface)', outline: 'none', fontSize: 14, fontFamily: 'var(--font-body)', color: 'var(--fg)', border: `1px solid ${error ? 'var(--danger)' : f ? 'var(--primary)' : 'var(--border-input)'}`, boxShadow: f ? 'var(--shadow-focus)' : 'none', transition: '.15s' }} />
      {error && <div style={{ fontSize: 11.5, color: 'var(--danger)', marginTop: 5 }}>{error}</div>}
    </div>
  );
}
function Select({ label = 'Country', options = ['Nigeria', 'Ghana', 'Kenya', 'South Africa'] }) {
  return (
    <div>
      <label style={lbl}>{label}</label>
      <div style={{ position: 'relative' }}>
        <select style={{ width: '100%', height: 46, padding: '0 38px 0 14px', borderRadius: 0, background: 'var(--surface)', border: '1px solid var(--border-input)', fontSize: 14, fontFamily: 'var(--font-body)', color: 'var(--fg)', appearance: 'none', cursor: 'pointer', outline: 'none' }}>
          {options.map(o => <option key={o}>{o}</option>)}
        </select>
        <span style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}><SIcons.chevD size={16} stroke="var(--mono-400)" /></span>
      </div>
    </div>
  );
}
function Radios({ label = 'Plan', options = ['Personal', 'Premium', 'Business'] }) {
  const [v, setV] = useState(1);
  return (
    <div>
      <label style={lbl}>{label}</label>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {options.map((o, i) => (
          <label key={o} style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', fontSize: 14 }} onClick={() => setV(i)}>
            <span style={{ width: 20, height: 20, borderRadius: '50%', border: `2px solid ${v === i ? 'var(--primary)' : 'var(--border-input)'}`, display: 'grid', placeItems: 'center', flexShrink: 0 }}>{v === i && <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--primary)' }} />}</span>
            {o}
          </label>
        ))}
      </div>
    </div>
  );
}
function Checks({ label = 'Notifications', options = ['Email receipts', 'Push alerts', 'Weekly digest'] }) {
  const [s, setS] = useState({ 0: true });
  return (
    <div>
      <label style={lbl}>{label}</label>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {options.map((o, i) => (
          <label key={o} style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', fontSize: 14 }} onClick={() => setS(p => ({ ...p, [i]: !p[i] }))}>
            <span style={{ width: 20, height: 20, border: `2px solid ${s[i] ? 'var(--primary)' : 'var(--border-input)'}`, background: s[i] ? 'var(--primary)' : '#fff', display: 'grid', placeItems: 'center', flexShrink: 0 }}>{s[i] && <SIcons.check size={13} stroke="#fff" sw={3} />}</span>
            {o}
          </label>
        ))}
      </div>
    </div>
  );
}
function Toggle({ label = 'Face ID login', def = true }) {
  const [on, setOn] = useState(def);
  return (
    <label style={{ display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer', fontSize: 14 }} onClick={() => setOn(o => !o)}>
      <span style={{ width: 44, height: 26, borderRadius: 9999, background: on ? 'var(--primary)' : 'var(--mono-200)', position: 'relative', transition: '.18s', flexShrink: 0 }}>
        <span style={{ position: 'absolute', top: 3, left: on ? 21 : 3, width: 20, height: 20, borderRadius: '50%', background: 'var(--surface)', transition: '.18s', boxShadow: '0 1px 3px rgba(0,0,0,.25)' }} />
      </span>{label}
    </label>
  );
}
function RangeSlider({ label = 'Transfer limit' }) {
  const [v, setV] = useState(60);
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}><label style={{ ...lbl, marginBottom: 0 }}>{label}</label><span style={{ font: '700 13px var(--font-mono)', color: 'var(--primary)' }}>₦{(v * 5000).toLocaleString()}</span></div>
      <div style={{ position: 'relative', height: 22, display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', left: 0, right: 0, height: 4, background: 'var(--mono-100)' }} />
        <div style={{ position: 'absolute', left: 0, width: v + '%', height: 4, background: 'var(--primary)' }} />
        <div style={{ position: 'absolute', left: `calc(${v}% - 9px)`, width: 18, height: 18, borderRadius: '50%', background: 'var(--surface)', border: '2px solid var(--primary)', boxShadow: 'var(--shadow-sm)' }} />
        <input type="range" min="0" max="100" value={v} onChange={e => setV(+e.target.value)} style={{ position: 'absolute', inset: 0, width: '100%', opacity: 0, cursor: 'pointer', margin: 0 }} />
      </div>
    </div>
  );
}
function SearchBar({ placeholder = 'Search transactions, people…' }) {
  const [f, setF] = useState(false);
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, height: 46, padding: '0 14px', background: 'var(--surface)', border: `1px solid ${f ? 'var(--primary)' : 'var(--border-input)'}`, boxShadow: f ? 'var(--shadow-focus)' : 'none', transition: '.15s' }}>
      <SIcons.api style={{ display: 'none' }} />
      <span style={{ display: 'inline-flex' }}><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--mono-400)" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg></span>
      <input placeholder={placeholder} onFocus={() => setF(true)} onBlur={() => setF(false)} style={{ flex: 1, border: 'none', outline: 'none', background: 'transparent', fontSize: 14, fontFamily: 'var(--font-body)', color: 'var(--fg)' }} />
    </div>
  );
}

/* ════ FEEDBACK ════════════════════════════════════════════════════════════ */
function Alert({ kind = 'info', title, body }) {
  const M = {
    info: ['var(--primary-soft)', 'var(--primary)', 'Heads up'],
    success: ['var(--success-soft)', 'var(--success)', 'Transfer complete'],
    danger: ['var(--danger-soft)', 'var(--danger)', 'Payment failed'],
    warning: ['var(--warning-soft)', 'var(--warning)', 'Action needed'],
  }[kind];
  return (
    <div style={{ display: 'flex', gap: 10, padding: '12px 14px', background: M[0] }}>
      <div style={{ width: 18, height: 18, borderRadius: '50%', background: M[1], color: '#fff', display: 'grid', placeItems: 'center', fontSize: 11, fontWeight: 700, flexShrink: 0 }}>!</div>
      <div><div style={{ fontSize: 13, fontWeight: 700, color: M[1] }}>{title || M[2]}</div><div style={{ fontSize: 12.5, color: M[1], opacity: .9, marginTop: 1 }}>{body || 'Your verification code was sent.'}</div></div>
    </div>
  );
}
function Badge({ children, kind = 'primary' }) {
  const M = { primary: ['var(--primary-soft)', 'var(--primary)'], success: ['var(--success-soft)', 'var(--success)'], danger: ['var(--danger-soft)', 'var(--danger)'], warning: ['var(--warning-soft)', 'var(--warning)'], neutral: ['var(--bg-secondary)', 'var(--mono-600)'] }[kind];
  return <span style={{ fontSize: 11, fontWeight: 700, padding: '3px 9px', borderRadius: 9999, background: M[0], color: M[1] }}>{children}</span>;
}
function Toast() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '13px 16px', background: 'var(--ink)', color: '#fff', boxShadow: 'var(--shadow-lg)', maxWidth: 340 }}>
      <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'var(--success)', display: 'grid', placeItems: 'center', flexShrink: 0 }}><SIcons.check size={14} stroke="#fff" sw={3} /></div>
      <div style={{ flex: 1, fontSize: 13 }}>Transfer of ₦50,000 sent</div>
      <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--secondary)', cursor: 'pointer' }}>Undo</span>
    </div>
  );
}
function Progress({ v = 68 }) {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 6 }}><span style={{ color: 'var(--mono-500)' }}>Japa Fund</span><span style={{ font: '700 12px var(--font-mono)' }}>{v}%</span></div>
      <div style={{ height: 8, background: 'var(--mono-100)' }}><div style={{ width: v + '%', height: '100%', background: 'var(--gradient-brand)' }} /></div>
    </div>
  );
}
function Spinner({ size = 28 }) {
  return (
    <div style={{ width: size, height: size, borderRadius: '50%', border: '3px solid var(--mono-100)', borderTopColor: 'var(--primary)', animation: 'ftspin .8s linear infinite' }} />
  );
}
function Skeleton() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {[100, 80, 90].map((w, i) => <div key={i} style={{ height: 12, width: w + '%', background: 'linear-gradient(90deg,var(--mono-100),var(--surface-soft),var(--mono-100))', backgroundSize: '200% 100%', animation: 'ftshimmer 1.3s linear infinite' }} />)}
    </div>
  );
}

Object.assign(window, {
  UBtn, card, lbl, Breadcrumbs, Tabs, Segments, SideNav, Menu,
  Avatar, AvatarGroup, FeatureCard, MediaBlock, ListItem, Thumb,
  Popover, ActionSheet, TextInput, Select, Radios, Checks, Toggle, RangeSlider, SearchBar,
  Alert, Badge, Toast, Progress, Spinner, Skeleton,
});
