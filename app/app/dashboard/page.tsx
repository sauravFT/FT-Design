'use client';

import { useState } from 'react';
import Image from 'next/image';

/* ── Icon primitives ──────────────────────────────────────────────────────── */
interface IconProps {
  size?: number;
  stroke?: string;
}

const WIcon = ({ size = 16, stroke = 'currentColor', children }: IconProps & { children: React.ReactNode }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', flexShrink: 0 }}>
    {children}
  </svg>
);

const WIcons = {
  list: (p: IconProps) => <WIcon {...p}><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></WIcon>,
  analytics: (p: IconProps) => <WIcon {...p}><path d="M3 3v18h18"/><rect x="7" y="10" width="3" height="8"/><rect x="12" y="7" width="3" height="11"/><rect x="17" y="4" width="3" height="14"/></WIcon>,
  mail: (p: IconProps) => <WIcon {...p}><rect x="3" y="5" width="18" height="14" rx="0"/><path d="M3 6l9 7 9-7"/></WIcon>,
  user: (p: IconProps) => <WIcon {...p}><circle cx="12" cy="9" r="4"/><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"/></WIcon>,
  gear: (p: IconProps) => <WIcon {...p}><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/></WIcon>,
  help: (p: IconProps) => <WIcon {...p}><circle cx="12" cy="12" r="9"/><path d="M9 9a3 3 0 1 1 4.5 2.6c-.5.3-.5.8-.5 1.4"/><circle cx="12" cy="17" r=".5" fill="currentColor"/></WIcon>,
  search: (p: IconProps) => <WIcon {...p}><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/></WIcon>,
  chevronDown: (p: IconProps) => <WIcon {...p}><path d="M6 9l6 6 6-6"/></WIcon>,
  calendar: (p: IconProps) => <WIcon {...p}><rect x="3" y="5" width="18" height="16"/><path d="M3 10h18M8 3v4M16 3v4"/></WIcon>,
  caretUp: (p: IconProps) => <WIcon {...p}><path d="M18 15l-6-6-6 6"/></WIcon>,
  caretDown: (p: IconProps) => <WIcon {...p}><path d="M6 9l6 6 6-6"/></WIcon>,
};

/* ── Role pill ────────────────────────────────────────────────────────────── */
const ROLE_STYLE: Record<string, [string, string]> = {
  Admin:      ['var(--primary-soft)', 'var(--primary)'],
  Finance:    ['var(--success-soft)', 'var(--success)'],
  Compliance: ['var(--warning-soft)', 'var(--warning)'],
  Observer:   ['var(--bg-secondary)', 'var(--mono-500)'],
};

function RolePill({ role }: { role: string }) {
  const s = ROLE_STYLE[role] || ROLE_STYLE.Observer;
  return (
    <span style={{ fontSize: 9.5, fontWeight: 700, padding: '2px 7px', borderRadius: 9999, background: s[0], color: s[1], letterSpacing: '.02em', whiteSpace: 'nowrap' }}>
      {role}
    </span>
  );
}

/* ── Nav data ─────────────────────────────────────────────────────────────── */
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
  { name: "Liam O'Brien", initials: 'LO', role: 'Finance', tint: 'linear-gradient(135deg,#0053ff,#00b4d8)' },
  { name: 'Noah Williams', initials: 'NW', role: 'Observer', tint: 'linear-gradient(135deg,#7b2ff7,#f107a3)' },
  { name: 'David Park', initials: 'DP', role: 'Compliance', tint: 'linear-gradient(135deg,#171717,#4a4a4a)' },
];

/* ── Sidebar ──────────────────────────────────────────────────────────────── */
function SidebarItem({
  item,
  active,
  onClick,
}: {
  item: typeof MAIN_NAV[0];
  active: boolean;
  onClick: () => void;
}) {
  const [h, setH] = useState(false);
  const [open, setOpen] = useState(item.k === 'dashboard');
  const hasSub = item.sub && item.sub.length;
  const I = item.icon;

  const handle = () => { onClick(); if (hasSub) setOpen(o => !o); };
  return (
    <div>
      <div
        onClick={handle}
        onMouseEnter={() => setH(true)}
        onMouseLeave={() => setH(false)}
        style={{
          display: 'flex', alignItems: 'center', gap: 10, padding: '9px 10px',
          fontSize: 13, fontWeight: active ? 600 : 500, cursor: 'pointer', transition: '.12s',
          color: active ? 'var(--fg)' : (h ? 'var(--fg)' : 'var(--mono-500)'),
          background: active ? 'var(--surface-soft)' : (h ? '#f7f7f8' : 'transparent'),
          boxShadow: active ? 'inset 2px 0 0 var(--primary)' : 'none',
        }}
      >
        <I size={16} stroke={active ? 'var(--primary)' : 'currentColor'} />
        {item.label}
        {hasSub && (
          <span style={{ marginLeft: 'auto', display: 'inline-flex', transition: 'transform .24s cubic-bezier(.2,.7,.2,1)', transform: open ? 'rotate(180deg)' : 'none' }}>
            <WIcons.chevronDown size={13} stroke="var(--mono-300)" />
          </span>
        )}
      </div>
      {hasSub && (
        <div style={{ overflow: 'hidden', maxHeight: open ? (item.sub!.length * 34) + 'px' : '0', opacity: open ? 1 : 0, transition: 'max-height .28s cubic-bezier(.2,.7,.2,1), opacity .2s ease' }}>
          {item.sub!.map((s, i) => (
            <div
              key={s}
              style={{
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '7px 10px 7px 38px', fontSize: 12.5, cursor: 'pointer',
                position: 'relative', fontWeight: i === 0 && active ? 600 : 500,
                color: i === 0 && active ? 'var(--primary)' : 'var(--mono-500)',
                transition: '.12s',
              }}
            >
              <span style={{ position: 'absolute', left: 22, width: 5, height: 5, borderRadius: '50%', background: i === 0 && active ? 'var(--primary)' : 'var(--mono-200)' }} />
              {s}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function Sidebar({ active, onNav }: { active: string; onNav: (k: string) => void }) {
  return (
    <div style={{ background: 'color-mix(in srgb, var(--primary) 4%, #fff)', borderRight: '1px solid var(--border)', display: 'flex', flexDirection: 'column', width: 220, flexShrink: 0 }}>
      <div style={{ padding: '18px 16px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
        <Image src="/assets/fyscal-logo.svg" alt="Fyscal Technologies" width={120} height={22} style={{ height: 22, width: 'auto', display: 'block' }} />
      </div>
      <div style={{ padding: '0 12px 6px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 10px', background: 'var(--surface-soft)', border: '1px solid var(--border)' }}>
          <WIcons.search size={14} stroke="var(--mono-300)" />
          <span style={{ flex: 1, fontSize: 12.5, color: 'var(--mono-300)' }}>Search</span>
          <span style={{ fontSize: 10.5, fontWeight: 600, color: 'var(--mono-300)', fontFamily: 'var(--font-mono)' }}>⌘F</span>
        </div>
      </div>
      <div style={{ flex: 1, padding: '0 8px', overflowY: 'auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, fontWeight: 700, color: 'var(--mono-500)', padding: '14px 10px 6px' }}>
          Main Menu <WIcons.chevronDown size={12} stroke="var(--mono-300)" />
        </div>
        {MAIN_NAV.map(it => (
          <SidebarItem key={it.k} item={it} active={active === it.k} onClick={() => onNav(it.k)} />
        ))}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, fontWeight: 700, color: 'var(--mono-500)', padding: '14px 10px 6px' }}>
          Teams <WIcons.chevronDown size={12} stroke="var(--mono-300)" />
        </div>
        {TEAM.map(t => (
          <div key={t.name} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '7px 10px', cursor: 'pointer' }}>
            <div style={{ width: 26, height: 26, borderRadius: '50%', background: t.tint, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 700, color: '#fff', flexShrink: 0 }}>
              {t.initials}
            </div>
            <span style={{ fontSize: 13, fontWeight: 500, color: 'var(--mono-700)', flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{t.name}</span>
            <RolePill role={t.role} />
          </div>
        ))}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, fontWeight: 700, color: 'var(--mono-500)', padding: '14px 10px 6px' }}>
          Support <WIcons.chevronDown size={12} stroke="var(--mono-300)" />
        </div>
        {SUPPORT_NAV.map(it => (
          <SidebarItem key={it.k} item={it as typeof MAIN_NAV[0]} active={active === it.k} onClick={() => onNav(it.k)} />
        ))}
      </div>
    </div>
  );
}

/* ── TopBar ───────────────────────────────────────────────────────────────── */
function TopBar({ title }: { title: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', padding: '16px 24px', background: '#fff', borderBottom: '1px solid var(--border)', gap: 16 }}>
      <span style={{ fontSize: 15, fontWeight: 700, flex: 1, letterSpacing: '-.01em' }}>{title}</span>
      <button style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '6px 12px', borderRadius: 9999, border: '1px solid var(--border-input)', background: '#fff', fontSize: 12.5, fontWeight: 600, color: 'var(--mono-700)', cursor: 'pointer', fontFamily: 'var(--font-body)' }}>
        <WIcons.calendar size={13} stroke="var(--mono-500)" /> Last 7 days <WIcons.chevronDown size={12} stroke="var(--mono-300)" />
      </button>
      <button style={{ padding: '7px 14px', fontSize: 12, fontWeight: 600, fontFamily: 'var(--font-body)', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 6, border: 'none', background: 'var(--primary)', color: '#fff' }}>
        Export
      </button>
    </div>
  );
}

/* ── KPI Card ─────────────────────────────────────────────────────────────── */
function KpiCard({ label, value, delta, up }: { label: string; value: string; delta: string; up: boolean }) {
  return (
    <div style={{ background: '#fff', padding: '16px 18px', border: '1px solid var(--border)' }}>
      <div style={{ fontSize: 12, fontWeight: 500, color: 'var(--mono-500)', marginBottom: 10 }}>{label}</div>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 6 }}>
        <span style={{ font: '700 26px var(--font-mono)', letterSpacing: '-.03em', color: 'var(--fg)' }}>{value}</span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 2, fontSize: 11.5, fontWeight: 700, color: up ? 'var(--success)' : 'var(--danger)' }}>
          {up ? <WIcons.caretUp size={11} stroke="var(--success)" /> : <WIcons.caretDown size={11} stroke="var(--danger)" />}
          {delta}
        </span>
      </div>
      <div style={{ fontSize: 11, color: 'var(--mono-300)', marginTop: 8 }}>vs last period</div>
    </div>
  );
}

/* ── Charts ───────────────────────────────────────────────────────────────── */
function YAxis({ labels }: { labels: string[] }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: 132, paddingRight: 8, textAlign: 'right' }}>
      {labels.map((l, i) => (
        <span key={i} style={{ fontSize: 9.5, color: 'var(--mono-300)', fontFamily: 'var(--font-mono)', lineHeight: 1 }}>{l}</span>
      ))}
    </div>
  );
}

function GroupedBars() {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const dau = [44, 52, 50, 56, 48, 30, 22];
  const mau = [16, 14, 15, 13, 12, 14, 13];
  return (
    <div>
      <div style={{ display: 'flex', gap: 4 }}>
        <YAxis labels={['60k', '45k', '30k', '15k', '0k']} />
        <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', gap: 10, height: 132, borderLeft: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '0 4px 0 8px' }}>
          {days.map((d, i) => (
            <div key={d} style={{ flex: 1, display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: 3, height: '100%' }}>
              <div style={{ width: 8, height: `${dau[i] / 60 * 100}%`, background: 'var(--primary)' }} />
              <div style={{ width: 8, height: `${mau[i] / 60 * 100}%`, background: 'var(--mono-200)' }} />
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 4px 0 32px' }}>
        {days.map(d => <span key={d} style={{ fontSize: 9.5, color: 'var(--mono-300)', fontFamily: 'var(--font-mono)' }}>{d}</span>)}
      </div>
    </div>
  );
}

function LineReturning() {
  const pts = [88, 80, 73, 67, 71, 79, 84, 86];
  const w = 280, h = 120, max = 95, min = 58;
  const x = (i: number) => 12 + i * ((w - 24) / (pts.length - 1));
  const y = (v: number) => h - 8 - ((v - min) / (max - min)) * (h - 24);
  const line = pts.map((v, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)} ${y(v).toFixed(1)}`).join(' ');
  return (
    <div>
      <div style={{ display: 'flex', gap: 4 }}>
        <YAxis labels={['90%', '76%', '68%', '60%']} />
        <svg viewBox={`0 0 ${w} ${h}`} width="100%" height="132" preserveAspectRatio="none" style={{ borderLeft: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <path d={line} fill="none" stroke="var(--mono-900)" strokeWidth="2" vectorEffect="non-scaling-stroke" strokeLinejoin="round" strokeLinecap="round" />
          {pts.map((v, i) => (
            <circle key={i} cx={x(i)} cy={y(v)} r="3" fill="#fff" stroke="var(--primary)" strokeWidth="2" vectorEffect="non-scaling-stroke" />
          ))}
        </svg>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 4px 0 32px' }}>
        {['W1','W2','W3','W4','W5','W6','W7','W8'].map(d => (
          <span key={d} style={{ fontSize: 9.5, color: 'var(--mono-300)', fontFamily: 'var(--font-mono)' }}>{d}</span>
        ))}
      </div>
    </div>
  );
}

function BarsLeaving() {
  const months = ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'];
  const vals = [1.6, 1.4, 1.5, 2.0, 1.9, 2.4];
  return (
    <div>
      <div style={{ display: 'flex', gap: 4 }}>
        <YAxis labels={['3%', '2.25%', '1.5%', '0.75%', '0%']} />
        <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', gap: 12, height: 132, borderLeft: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '0 6px 0 8px' }}>
          {months.map((m, i) => (
            <div key={m} style={{ flex: 1, height: `${vals[i] / 3 * 100}%`, background: 'var(--tertiary-1)' }} />
          ))}
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 6px 0 40px' }}>
        {months.map(m => <span key={m} style={{ fontSize: 9.5, color: 'var(--mono-300)', fontFamily: 'var(--font-mono)' }}>{m}</span>)}
      </div>
    </div>
  );
}

function RevenueArea() {
  const pts = [58, 60, 62, 66, 71, 84];
  const months = ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'];
  const w = 560, h = 230, max = 100, min = 0;
  const x = (i: number) => 6 + i * ((w - 12) / (pts.length - 1));
  const y = (v: number) => h - 10 - ((v - min) / (max - min)) * (h - 26);
  const line = pts.map((v, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)} ${y(v).toFixed(1)}`).join(' ');
  const area = `${line} L${x(pts.length - 1).toFixed(1)} ${h} L${x(0).toFixed(1)} ${h} Z`;
  return (
    <div style={{ background: '#fff', border: '1px solid var(--border)', padding: 22 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 18 }}>
        <div>
          <div style={{ fontSize: 15, fontWeight: 700, letterSpacing: '-.01em' }}>Monthly Recurring Revenue</div>
          <div style={{ fontSize: 12, color: 'var(--mono-300)', marginTop: 2 }}>MRR growth over the last 6 months</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ font: '700 24px var(--font-mono)', letterSpacing: '-.02em' }}>$84.2k</div>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 2, marginTop: 4, padding: '2px 8px', borderRadius: 9999, background: 'var(--primary-soft)', color: 'var(--primary)', fontSize: 11, fontWeight: 700 }}>
            <WIcons.caretUp size={10} stroke="var(--primary)" />+9.7% MoM
          </span>
        </div>
      </div>
      <div style={{ display: 'flex', gap: 6 }}>
        <YAxis labels={['$100k', '$75k', '$50k', '$25k', '$0k']} />
        <div style={{ flex: 1 }}>
          <svg viewBox={`0 0 ${w} ${h}`} width="100%" height="230" preserveAspectRatio="none">
            <defs>
              <linearGradient id="mrrFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.22" />
                <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d={area} fill="url(#mrrFill)" />
            <path d={line} fill="none" stroke="var(--primary)" strokeWidth="2.5" vectorEffect="non-scaling-stroke" strokeLinejoin="round" strokeLinecap="round" />
            {pts.map((v, i) => (
              <circle key={i} cx={x(i)} cy={y(v)} r="3.5" fill="var(--primary)" vectorEffect="non-scaling-stroke" />
            ))}
          </svg>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
            {months.map(m => <span key={m} style={{ fontSize: 10, color: 'var(--mono-300)', fontFamily: 'var(--font-mono)' }}>{m}</span>)}
          </div>
        </div>
      </div>
    </div>
  );
}

function SubscriptionDonut() {
  return (
    <div style={{ background: '#fff', border: '1px solid var(--border)', padding: 22 }}>
      <div style={{ fontSize: 15, fontWeight: 700, letterSpacing: '-.01em' }}>Subscription Plans</div>
      <div style={{ fontSize: 12, color: 'var(--mono-300)', marginTop: 2, marginBottom: 18 }}>User distribution by plan</div>
      <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', marginBottom: 20 }}>
        <svg width="150" height="150" viewBox="0 0 80 80">
          <circle cx="40" cy="40" r="30" fill="none" stroke="var(--surface-soft)" strokeWidth="11" />
          <circle cx="40" cy="40" r="30" fill="none" stroke="var(--mono-200)" strokeWidth="11" strokeDasharray="103 86" strokeDashoffset="0" transform="rotate(-90 40 40)" />
          <circle cx="40" cy="40" r="30" fill="none" stroke="var(--primary)" strokeWidth="11" strokeDasharray="64 125" strokeDashoffset="-103" transform="rotate(-90 40 40)" />
          <circle cx="40" cy="40" r="30" fill="none" stroke="var(--secondary)" strokeWidth="11" strokeDasharray="21 168" strokeDashoffset="-167" transform="rotate(-90 40 40)" />
        </svg>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', textAlign: 'center' }}>
          <div style={{ fontSize: 11, color: 'var(--mono-300)' }}>Total</div>
          <div style={{ font: '700 22px var(--font-mono)', letterSpacing: '-.02em' }}>124.8k</div>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {[
          { label: 'Free', count: '68,420', pct: '54.8%', color: 'var(--mono-200)' },
          { label: 'Pro', count: '42,180', pct: '33.8%', color: 'var(--primary)' },
          { label: 'Enterprise', count: '14,232', pct: '11.4%', color: 'var(--secondary)' },
        ].map(s => (
          <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13 }}>
            <div style={{ width: 9, height: 9, borderRadius: '50%', background: s.color, flexShrink: 0 }} />
            <span style={{ color: 'var(--mono-700)', fontWeight: 500 }}>{s.label}</span>
            <span style={{ marginLeft: 'auto', font: '600 13px var(--font-mono)', color: 'var(--fg)' }}>{s.count}</span>
            <span style={{ width: 44, textAlign: 'right', fontSize: 12, color: 'var(--mono-300)', fontFamily: 'var(--font-mono)' }}>{s.pct}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Subscribed users table ───────────────────────────────────────────────── */
function SubscribedTable() {
  const rows = [
    { name: 'Sofia Rossi', email: 'sofia@acme.io', plan: 'Enterprise', mrr: '$1,200', status: 'Active', since: 'Jan 2025', role: 'Admin', tint: 'linear-gradient(135deg,#352eff,#7c9dff)', ini: 'SR' },
    { name: "Liam O'Brien", email: 'liam@northsea.co', plan: 'Pro', mrr: '$49', status: 'Active', since: 'Mar 2025', role: 'Finance', tint: 'linear-gradient(135deg,#0053ff,#00b4d8)', ini: 'LO' },
    { name: 'Noah Williams', email: 'noah@brightlabs.dev', plan: 'Pro', mrr: '$49', status: 'Trialing', since: 'May 2026', role: 'Observer', tint: 'linear-gradient(135deg,#7b2ff7,#f107a3)', ini: 'NW' },
    { name: 'David Park', email: 'david@parkstudio.kr', plan: 'Free', mrr: '$0', status: 'Active', since: 'Nov 2024', role: 'Compliance', tint: 'linear-gradient(135deg,#171717,#4a4a4a)', ini: 'DP' },
    { name: 'Amara Okafor', email: 'amara@kanoworks.ng', plan: 'Enterprise', mrr: '$1,200', status: 'Past due', since: 'Feb 2025', role: 'Admin', tint: 'linear-gradient(135deg,#1f8a5b,#a1ff5b)', ini: 'AO' },
  ];
  const statusStyle: Record<string, [string, string]> = {
    Active: ['var(--success-soft)', 'var(--success)'],
    Trialing: ['var(--primary-soft)', 'var(--primary)'],
    'Past due': ['var(--danger-soft)', 'var(--danger)'],
  };
  const th: React.CSSProperties = { fontSize: 10.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--mono-300)', textAlign: 'left', padding: '13px 16px 12px' };
  const td: React.CSSProperties = { fontSize: 13, color: 'var(--fg)', padding: '13px 16px', borderTop: '1px solid var(--surface-soft)' };
  return (
    <div style={{ background: '#fff', border: '1px solid var(--border)', overflow: 'hidden' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: 'var(--surface-soft)' }}>
            <th style={th}>Customer</th>
            <th style={th}>Role</th>
            <th style={th}>Plan</th>
            <th style={th}>MRR</th>
            <th style={th}>Status</th>
            <th style={th}>Member since</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(r => (
            <tr key={r.email}>
              <td style={td}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
                  <div style={{ width: 32, height: 32, borderRadius: '50%', background: r.tint, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, color: '#fff', flexShrink: 0 }}>
                    {r.ini}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600 }}>{r.name}</div>
                    <div style={{ fontSize: 11.5, color: 'var(--mono-300)' }}>{r.email}</div>
                  </div>
                </div>
              </td>
              <td style={td}><RolePill role={r.role} /></td>
              <td style={td}>{r.plan}</td>
              <td style={{ ...td, fontFamily: 'var(--font-mono)', fontWeight: 600 }}>{r.mrr}</td>
              <td style={td}>
                <span style={{ fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 9999, background: statusStyle[r.status][0], color: statusStyle[r.status][1] }}>
                  {r.status}
                </span>
              </td>
              <td style={{ ...td, color: 'var(--mono-500)' }}>{r.since}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ── Mini card wrapper ────────────────────────────────────────────────────── */
function MiniCard({ title, children, footer }: { title: string; children: React.ReactNode; footer?: React.ReactNode }) {
  return (
    <div style={{ background: '#fff', border: '1px solid var(--border)', padding: 18, display: 'flex', flexDirection: 'column' }}>
      <div style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--mono-700)', marginBottom: 14 }}>{title}</div>
      <div style={{ flex: 1 }}>{children}</div>
      {footer && (
        <div style={{ marginTop: 14, paddingTop: 12, borderTop: '1px solid var(--surface-soft)' }}>{footer}</div>
      )}
    </div>
  );
}

/* ── Dashboard content ────────────────────────────────────────────────────── */
function Dashboard() {
  return (
    <div style={{ padding: '24px 28px', background: '#fff', overflowY: 'auto', flex: 1 }}>
      {/* KPI Summary */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '4px 0 16px' }}>
        <h2 style={{ fontSize: 17, fontWeight: 700, letterSpacing: '-.01em', color: 'var(--fg)', flex: 1 }}>KPI Summary</h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 14, marginBottom: 34 }}>
        <KpiCard label="Total Users" value="124,832" delta="8.2%" up={true} />
        <KpiCard label="New Signups" value="3,471" delta="12.4%" up={true} />
        <KpiCard label="Active Users" value="48,209" delta="5.1%" up={true} />
        <KpiCard label="Churn Rate" value="2.4%" delta="0.3%" up={false} />
        <KpiCard label="MRR" value="$84,210" delta="0.3%" up={false} />
      </div>

      {/* Monthly Analytics */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '4px 0 16px' }}>
        <h2 style={{ fontSize: 17, fontWeight: 700, letterSpacing: '-.01em', color: 'var(--fg)' }}>Monthly Analytics</h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14, marginBottom: 34 }}>
        <MiniCard title="Daily vs Monthly Active Users" footer={
          <div style={{ display: 'flex', gap: 28 }}>
            <div><div style={{ fontSize: 10.5, color: 'var(--mono-300)' }}>Avg DAU</div><div style={{ font: '700 17px var(--font-mono)' }}>12.5k</div></div>
            <div><div style={{ fontSize: 10.5, color: 'var(--mono-300)' }}>MAU</div><div style={{ font: '700 17px var(--font-mono)' }}>48.2k</div></div>
          </div>
        }><GroupedBars /></MiniCard>
        <MiniCard title="Returning users over time" footer={
          <div style={{ fontSize: 11.5, color: 'var(--mono-500)' }}><strong style={{ color: 'var(--primary)' }}>80%</strong> of users returned in the last 8 weeks</div>
        }><LineReturning /></MiniCard>
        <MiniCard title="Users leaving this period" footer={
          <div style={{ fontSize: 11.5, color: 'var(--mono-500)' }}>~298 users left this month — review offboarding flow</div>
        }><BarsLeaving /></MiniCard>
      </div>

      {/* Revenue */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '4px 0 16px' }}>
        <h2 style={{ fontSize: 17, fontWeight: 700, letterSpacing: '-.01em', color: 'var(--fg)' }}>Revenue and Subscription Plan</h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1.9fr 1fr', gap: 14, marginBottom: 34 }}>
        <RevenueArea />
        <SubscriptionDonut />
      </div>

      {/* Users table */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '4px 0 16px' }}>
        <h2 style={{ fontSize: 17, fontWeight: 700, letterSpacing: '-.01em', color: 'var(--fg)' }}>Subscribed Users</h2>
      </div>
      <SubscribedTable />
    </div>
  );
}

/* ── Main dashboard page ──────────────────────────────────────────────────── */
export default function DashboardPage() {
  const [active, setActive] = useState('dashboard');

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden', fontFamily: 'var(--font-active)', fontSize: 14, color: 'var(--fg)', background: 'var(--surface-soft)' }}>
      <Sidebar active={active} onNav={setActive} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <TopBar title="Dashboard" />
        <Dashboard />
      </div>
    </div>
  );
}
