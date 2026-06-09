/* Fyscal Web UI Kit — app shell (browser chrome, sidebar w/ sub-nav, top bar) */
const { useState } = React;

function BrowserChrome({ url = 'app.fyscaltech.com/dashboard', children }) {
  return (
    <div style={{ width: 1200, borderRadius: 12, background: '#fff', boxShadow: '0 24px 64px rgba(0,0,0,.15)', overflow: 'hidden', border: '1px solid var(--border)' }}>
      {children}
    </div>
  );
}

const MAIN_NAV = [
  { k: 'dashboard', label: 'Dashboard', icon: WIcons.list, sub: ['Overview', 'KPIs', 'Activity'] },
  { k: 'analytics', label: 'Analytics', icon: WIcons.analytics, sub: ['Active Users', 'Retention', 'Funnels'] },
  { k: 'revenue', label: 'Revenue', icon: WIcons.mail, sub: ['MRR', 'Subscriptions', 'Invoices'] },
  { k: 'users', label: 'Users', icon: WIcons.user, sub: ['All Users', 'Segments', 'Roles'] },
];
const SUPPORT_NAV = [
  { k: 'settings', label: 'Settings', icon: WIcons.gear },
  { k: 'help', label: 'Help', icon: WIcons.help },
];
const TEAM = [
  { name: 'Sofia Rossi', initials: 'SR', role: 'Admin', tint: 'linear-gradient(135deg,#352eff,#7c9dff)' },
  { name: 'Liam O\u2019Brien', initials: 'LO', role: 'Finance', tint: 'linear-gradient(135deg,#0053ff,#00b4d8)' },
  { name: 'Noah Williams', initials: 'NW', role: 'Observer', tint: 'linear-gradient(135deg,#7b2ff7,#f107a3)' },
  { name: 'David Park', initials: 'DP', role: 'Compliance', tint: 'linear-gradient(135deg,#171717,#4a4a4a)' },
];

/* role tier pill — shared by sidebar Teams + the subscriber table */
const ROLE_STYLE = {
  Admin:      ['var(--primary-soft)', 'var(--primary)'],
  Finance:    ['var(--success-soft)', 'var(--success)'],
  Compliance: ['var(--warning-soft)', 'var(--warning)'],
  Observer:   ['var(--bg-secondary)', 'var(--mono-500)'],
};
function RolePill({ role }) {
  const s = ROLE_STYLE[role] || ROLE_STYLE.Observer;
  return <span style={{ fontSize: 9.5, fontWeight: 700, padding: '2px 7px', borderRadius: 9999, background: s[0], color: s[1], letterSpacing: '.02em', whiteSpace: 'nowrap' }}>{role}</span>;
}

const SectionLabel = ({ children }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, fontWeight: 700, color: 'var(--mono-500)', padding: '14px 10px 6px' }}>
    {children}<WIcons.chevronDown size={12} stroke="var(--mono-300)" />
  </div>
);

function Sidebar({ active, onNav }) {
  return (
    <div style={{ background: 'color-mix(in srgb, var(--primary) 4%, #fff)', borderRight: '1px solid var(--border)', display: 'flex', flexDirection: 'column' }}>
      {/* brand — real Fyscal Technologies logo */}
      <div style={{ padding: '18px 16px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
        <img src={(window.__resources && window.__resources.fyscalLogo) || "../../assets/fyscal-logo.svg"} alt="Fyscal Technologies" style={{ height: 22, display: 'block' }} />
      </div>
      {/* search */}
      <div style={{ padding: '0 12px 6px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 10px', background: 'var(--surface-soft)', border: '1px solid var(--border)', borderRadius: 0 }}>
          <WIcons.search size={14} stroke="var(--mono-300)" />
          <span style={{ flex: 1, fontSize: 12.5, color: 'var(--mono-300)' }}>Search</span>
          <span style={{ fontSize: 10.5, fontWeight: 600, color: 'var(--mono-300)', fontFamily: 'var(--font-mono)' }}>⌘F</span>
        </div>
      </div>
      <div style={{ flex: 1, padding: '0 8px', overflowY: 'auto' }}>
        <SectionLabel>Main Menu</SectionLabel>
        {MAIN_NAV.map(it => <SidebarItem key={it.k} item={it} active={active === it.k} onClick={() => onNav(it.k)} />)}
        <SectionLabel>Teams</SectionLabel>
        {TEAM.map(t => (
          <div key={t.name} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '7px 10px', cursor: 'pointer', borderRadius: 0 }}>
            <div style={{ width: 26, height: 26, borderRadius: '50%', background: t.tint, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 700, color: '#fff', flexShrink: 0 }}>{t.initials}</div>
            <span style={{ fontSize: 13, fontWeight: 500, color: 'var(--mono-700)', flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{t.name}</span>
            <RolePill role={t.role} />
          </div>
        ))}
        <SectionLabel>Support</SectionLabel>
        {SUPPORT_NAV.map(it => <SidebarItem key={it.k} item={it} active={active === it.k} onClick={() => onNav(it.k)} />)}
      </div>
    </div>
  );
}

function SidebarItem({ item, active, onClick }) {
  const [h, setH] = useState(false);
  const [open, setOpen] = useState(item.k === 'dashboard');
  const hasSub = item.sub && item.sub.length;
  const I = item.icon;
  const handle = () => { onClick(); if (hasSub) setOpen(o => !o); };
  return (
    <div>
      <div onClick={handle} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
        style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 10px', borderRadius: 0, fontSize: 13, fontWeight: active ? 600 : 500, cursor: 'pointer', transition: '.12s',
          color: active ? 'var(--fg)' : (h ? 'var(--fg)' : 'var(--mono-500)'),
          background: active ? 'var(--surface-soft)' : (h ? '#f7f7f8' : 'transparent'),
          boxShadow: active ? 'inset 2px 0 0 var(--primary)' : 'none' }}>
        <I size={16} stroke={active ? 'var(--primary)' : 'currentColor'} />{item.label}
        {hasSub && (
          <span style={{ marginLeft: 'auto', display: 'inline-flex', transition: 'transform .24s cubic-bezier(.2,.7,.2,1)', transform: open ? 'rotate(180deg)' : 'none' }}>
            <WIcons.chevronDown size={13} stroke="var(--mono-300)" />
          </span>
        )}
      </div>
      {hasSub && (
        <div style={{ overflow: 'hidden', maxHeight: open ? (item.sub.length * 34) + 'px' : '0', opacity: open ? 1 : 0, transition: 'max-height .28s cubic-bezier(.2,.7,.2,1), opacity .2s ease' }}>
          {item.sub.map((s, i) => <SubItem key={s} label={s} first={i === 0 && active} />)}
        </div>
      )}
    </div>
  );
}

function SubItem({ label, first }) {
  const [h, setH] = useState(false);
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '7px 10px 7px 38px', fontSize: 12.5, cursor: 'pointer', position: 'relative',
        fontWeight: first ? 600 : 500, color: first ? 'var(--primary)' : (h ? 'var(--fg)' : 'var(--mono-500)'),
        background: h ? '#f7f7f8' : 'transparent', transition: '.12s' }}>
      <span style={{ position: 'absolute', left: 22, width: 5, height: 5, borderRadius: '50%', background: first ? 'var(--primary)' : 'var(--mono-200)' }} />
      {label}
    </div>
  );
}

function TopBar({ title, children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', padding: '16px 24px', background: '#fff', borderBottom: '1px solid var(--border)', gap: 16 }}>
      <span style={{ fontSize: 15, fontWeight: 700, flex: 1, letterSpacing: '-.01em' }}>{title}</span>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>{children}</div>
    </div>
  );
}

function BtnSm({ children, primary, onClick }) {
  const [h, setH] = useState(false);
  return (
    <button onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ padding: '7px 14px', borderRadius: 0, fontSize: 12, fontWeight: 600, fontFamily: 'var(--font-body)', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 6, transition: '.12s',
        border: primary ? 'none' : '1.5px solid var(--mono-100)',
        background: primary ? 'var(--primary)' : (h ? '#f5f5f5' : 'transparent'),
        color: primary ? '#fff' : 'var(--mono-700)', opacity: primary && h ? .9 : 1 }}>{children}</button>
  );
}

Object.assign(window, { BrowserChrome, Sidebar, TopBar, BtnSm, RolePill, MAIN_NAV, SUPPORT_NAV, TEAM });
