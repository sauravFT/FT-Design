/* MaV Web UI Kit — Metricly product-analytics dashboard + Explore/Settings views */
const { useState } = React;

/* ── Section heading ─────────────────────────────────────────────────────── */
const SectionTitle = ({ children, right }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '4px 0 16px' }}>
    <h2 style={{ fontSize: 17, fontWeight: 700, letterSpacing: '-.01em', color: 'var(--fg)' }}>{children}</h2>
    {right}
  </div>
);

const DeltaChip = ({ delta, up }) => (
  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 2, fontSize: 11.5, fontWeight: 700, color: up ? 'var(--success)' : 'var(--danger)' }}>
    {up ? <WIcons.caretUp size={11} stroke={'var(--success)'} /> : <WIcons.caretDown size={11} stroke={'var(--danger)'} />}{delta}
  </span>
);

/* ── KPI card ────────────────────────────────────────────────────────────── */
function KpiCard({ label, value, delta, up }) {
  return (
    <div style={{ background: '#fff', borderRadius: 0, padding: '16px 18px', border: '1px solid var(--border)' }}>
      <div style={{ fontSize: 12, fontWeight: 500, color: 'var(--mono-500)', marginBottom: 10 }}>{label}</div>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 6 }}>
        <span style={{ font: '700 26px var(--font-mono)', letterSpacing: '-.03em', color: 'var(--fg)' }}>{value}</span>
        <DeltaChip delta={delta} up={up} />
      </div>
      <div style={{ fontSize: 11, color: 'var(--mono-300)', marginTop: 8 }}>vs last period</div>
    </div>
  );
}

function DateDropdown({ value, onClick }) {
  return (
    <button onClick={onClick} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '6px 12px', borderRadius: 9999, border: '1px solid var(--border-input)', background: '#fff', fontSize: 12.5, fontWeight: 600, color: 'var(--mono-700)', cursor: 'pointer', fontFamily: 'var(--font-body)' }}>
      <WIcons.calendar size={13} stroke="var(--mono-500)" />{value}<WIcons.chevronDown size={12} stroke="var(--mono-300)" />
    </button>
  );
}

/* ── Analytics chart card (titled, bordered, footer slot) ────────────────── */
function MiniCard({ title, children, footer }) {
  return (
    <div style={{ background: '#fff', borderRadius: 0, border: '1px solid var(--border)', padding: 18, display: 'flex', flexDirection: 'column' }}>
      <div style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--mono-700)', marginBottom: 14 }}>{title}</div>
      <div style={{ flex: 1 }}>{children}</div>
      {footer && <div style={{ marginTop: 14, paddingTop: 12, borderTop: '1px solid var(--surface-soft)' }}>{footer}</div>}
    </div>
  );
}

const YAxis = ({ labels }) => (
  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: 132, paddingRight: 8, textAlign: 'right' }}>
    {labels.map((l, i) => <span key={i} style={{ fontSize: 9.5, color: 'var(--mono-300)', fontFamily: 'var(--font-mono)', lineHeight: 1 }}>{l}</span>)}
  </div>
);

/* Daily vs Monthly active users — tall primary bar + short muted bar per day */
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

/* Returning users over time — line W1..W8 */
function LineReturning() {
  const pts = [88, 80, 73, 67, 71, 79, 84, 86];
  const w = 280, h = 120, max = 95, min = 58;
  const x = i => 12 + i * ((w - 24) / (pts.length - 1));
  const y = v => h - 8 - ((v - min) / (max - min)) * (h - 24);
  const line = pts.map((v, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)} ${y(v).toFixed(1)}`).join(' ');
  return (
    <div>
      <div style={{ display: 'flex', gap: 4 }}>
        <YAxis labels={['90%', '76%', '68%', '60%']} />
        <svg viewBox={`0 0 ${w} ${h}`} width="100%" height="132" preserveAspectRatio="none" style={{ borderLeft: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <path d={line} fill="none" stroke="var(--mono-900)" strokeWidth="2" vectorEffect="non-scaling-stroke" strokeLinejoin="round" strokeLinecap="round" />
          {pts.map((v, i) => <circle key={i} cx={x(i)} cy={y(v)} r="3" fill="#fff" stroke="var(--primary)" strokeWidth="2" vectorEffect="non-scaling-stroke" />)}
        </svg>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 4px 0 32px' }}>
        {['W1','W2','W3','W4','W5','W6','W7','W8'].map(d => <span key={d} style={{ fontSize: 9.5, color: 'var(--mono-300)', fontFamily: 'var(--font-mono)' }}>{d}</span>)}
      </div>
    </div>
  );
}

/* Users leaving this period — muted bars Oct..Mar */
function BarsLeaving() {
  const months = ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'];
  const vals = [1.6, 1.4, 1.5, 2.0, 1.9, 2.4];
  return (
    <div>
      <div style={{ display: 'flex', gap: 4 }}>
        <YAxis labels={['3%', '2.25%', '1.5%', '0.75%', '0%']} />
        <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', gap: 12, height: 132, borderLeft: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '0 6px 0 8px' }}>
          {months.map((m, i) => <div key={m} style={{ flex: 1, height: `${vals[i] / 3 * 100}%`, background: 'var(--tertiary-1)' }} />)}
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 6px 0 40px' }}>
        {months.map(m => <span key={m} style={{ fontSize: 9.5, color: 'var(--mono-300)', fontFamily: 'var(--font-mono)' }}>{m}</span>)}
      </div>
    </div>
  );
}

/* Monthly Recurring Revenue — area chart Oct..Mar */
function RevenueArea() {
  const pts = [58, 60, 62, 66, 71, 84];
  const months = ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'];
  const w = 560, h = 230, max = 100, min = 0;
  const x = i => 6 + i * ((w - 12) / (pts.length - 1));
  const y = v => h - 10 - ((v - min) / (max - min)) * (h - 26);
  const line = pts.map((v, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)} ${y(v).toFixed(1)}`).join(' ');
  const area = `${line} L${x(pts.length - 1).toFixed(1)} ${h} L${x(0).toFixed(1)} ${h} Z`;
  return (
    <div style={{ background: '#fff', borderRadius: 0, border: '1px solid var(--border)', padding: 22 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 18 }}>
        <div>
          <div style={{ fontSize: 15, fontWeight: 700, letterSpacing: '-.01em' }}>Monthly Recurring Revenue</div>
          <div style={{ fontSize: 12, color: 'var(--mono-300)', marginTop: 2 }}>MRR growth over the last 6 months</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ font: '700 24px var(--font-mono)', letterSpacing: '-.02em' }}>$84.2k</div>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 2, marginTop: 4, padding: '2px 8px', borderRadius: 9999, background: 'var(--primary-soft)', color: 'var(--primary)', fontSize: 11, fontWeight: 700 }}><WIcons.caretUp size={10} stroke="var(--primary)" />+9.7% MoM</span>
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
            {pts.map((v, i) => <circle key={i} cx={x(i)} cy={y(v)} r="3.5" fill="var(--primary)" vectorEffect="non-scaling-stroke" />)}
          </svg>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
            {months.map(m => <span key={m} style={{ fontSize: 10, color: 'var(--mono-300)', fontFamily: 'var(--font-mono)' }}>{m}</span>)}
          </div>
        </div>
      </div>
    </div>
  );
}

/* Subscription Plans — segmented donut + legend table */
function SubscriptionDonut() {
  const segs = [
    { label: 'Free', count: '68,420', pct: '54.8%', color: 'var(--mono-200)', dash: '104 86' },
    { label: 'Pro', count: '42,180', pct: '33.8%', color: 'var(--primary)', dash: '64 126', off: -104 },
    { label: 'Enterprise', count: '14,232', pct: '11.4%', color: 'var(--secondary)', dash: '22 168', off: -168 },
  ];
  const C = 60; // circumference approx for r=30 -> 188.4; use 188 scale
  return (
    <div style={{ background: '#fff', borderRadius: 0, border: '1px solid var(--border)', padding: 22 }}>
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
        {segs.map(s => (
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

/* Subscribed users table */
function SubscribedTable() {
  const rows = [
    { name: 'Sofia Rossi', email: 'sofia@acme.io', plan: 'Enterprise', mrr: '$1,200', status: 'Active', since: 'Jan 2025', role: 'Admin', tint: 'linear-gradient(135deg,#352eff,#7c9dff)', ini: 'SR' },
    { name: 'Liam O\u2019Brien', email: 'liam@northsea.co', plan: 'Pro', mrr: '$49', status: 'Active', since: 'Mar 2025', role: 'Finance', tint: 'linear-gradient(135deg,#0053ff,#00b4d8)', ini: 'LO' },
    { name: 'Noah Williams', email: 'noah@brightlabs.dev', plan: 'Pro', mrr: '$49', status: 'Trialing', since: 'May 2026', role: 'Observer', tint: 'linear-gradient(135deg,#7b2ff7,#f107a3)', ini: 'NW' },
    { name: 'David Park', email: 'david@parkstudio.kr', plan: 'Free', mrr: '$0', status: 'Active', since: 'Nov 2024', role: 'Compliance', tint: 'linear-gradient(135deg,#171717,#4a4a4a)', ini: 'DP' },
    { name: 'Amara Okafor', email: 'amara@kanoworks.ng', plan: 'Enterprise', mrr: '$1,200', status: 'Past due', since: 'Feb 2025', role: 'Admin', tint: 'linear-gradient(135deg,#1f8a5b,#a1ff5b)', ini: 'AO' },
  ];
  const statusStyle = { Active: ['var(--success-soft)', 'var(--success)'], Trialing: ['var(--primary-soft)', 'var(--primary)'], 'Past due': ['var(--danger-soft)', 'var(--danger)'] };
  const th = { fontSize: 10.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--mono-300)', textAlign: 'left', padding: '0 16px 12px' };
  const td = { fontSize: 13, color: 'var(--fg)', padding: '13px 16px', borderTop: '1px solid var(--surface-soft)' };
  return (
    <div style={{ background: '#fff', borderRadius: 0, border: '1px solid var(--border)', overflow: 'hidden' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead><tr style={{ background: 'var(--surface-soft)' }}>
          <th style={{ ...th, paddingTop: 13 }}>Customer</th><th style={{ ...th, paddingTop: 13 }}>Role</th><th style={{ ...th, paddingTop: 13 }}>Plan</th>
          <th style={{ ...th, paddingTop: 13 }}>MRR</th><th style={{ ...th, paddingTop: 13 }}>Status</th><th style={{ ...th, paddingTop: 13 }}>Member since</th>
        </tr></thead>
        <tbody>
          {rows.map(r => (
            <tr key={r.email}>
              <td style={td}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
                  <div style={{ width: 32, height: 32, borderRadius: '50%', background: r.tint, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, color: '#fff', flexShrink: 0 }}>{r.ini}</div>
                  <div><div style={{ fontWeight: 600 }}>{r.name}</div><div style={{ fontSize: 11.5, color: 'var(--mono-300)' }}>{r.email}</div></div>
                </div>
              </td>
              <td style={td}><RolePill role={r.role} /></td>
              <td style={td}>{r.plan}</td>
              <td style={{ ...td, fontFamily: 'var(--font-mono)', fontWeight: 600 }}>{r.mrr}</td>
              <td style={td}><span style={{ fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 9999, background: statusStyle[r.status][0], color: statusStyle[r.status][1] }}>{r.status}</span></td>
              <td style={{ ...td, color: 'var(--mono-500)' }}>{r.since}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ── Dashboard ───────────────────────────────────────────────────────────── */
function Dashboard() {
  return (
    <div style={{ padding: '24px 28px', background: '#fff' }}>
      {/* KPI Summary */}
      <SectionTitle right={<DateDropdown value="Last 7 days" />}>KPI Summary</SectionTitle>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 14, marginBottom: 34 }}>
        <KpiCard label="Total Users" value="124,832" delta="8.2%" up />
        <KpiCard label="New Signups" value="3,471" delta="12.4%" up />
        <KpiCard label="Active Users" value="48,209" delta="5.1%" up />
        <KpiCard label="Churn Rate" value="2.4%" delta="0.3%" up={false} />
        <KpiCard label="MRR" value="$84,210" delta="0.3%" up={false} />
      </div>

      {/* Monthly Analytics */}
      <SectionTitle>Monthly Analytics</SectionTitle>
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

      {/* Revenue and Subscription Plan */}
      <SectionTitle>Revenue and Subscription Plan</SectionTitle>
      <div style={{ display: 'grid', gridTemplateColumns: '1.9fr 1fr', gap: 14, marginBottom: 34 }}>
        <RevenueArea />
        <SubscriptionDonut />
      </div>

      {/* Subscribed Users */}
      <SectionTitle>Subscribed Users</SectionTitle>
      <SubscribedTable />
    </div>
  );
}

/* ── Explore (component / foundation library) ────────────────────────────── */
function Explore() {
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'Components', 'Foundations', 'Tokens', 'iOS', 'Android', 'Web', 'Dark Mode'];
  const featured = [
    { title: 'Buttons', meta: '8 variants · 3 sizes', tag: 'Component', preview: 'btn' },
    { title: 'Inputs', meta: '6 states · 2 sizes', tag: 'Component', preview: 'input' },
    { title: 'Color System', meta: '6 palettes · 8 shades each', tag: 'Foundation', preview: 'swatches' },
  ];
  const resources = [
    { icon: '📝', title: 'Typography', sub: 'FT Sans — 4 weights, 8 sizes' },
    { icon: '📐', title: 'Spacing', sub: '4px base grid — 16 steps' },
    { icon: '🔢', title: 'OTP Component', sub: '6-digit code input with states' },
    { icon: '💳', title: 'Finance Modules', sub: 'Balance, transactions, budget ring' },
    { icon: '🏷️', title: 'Badges & Tags', sub: 'Status pills, counters, labels' },
    { icon: '🧭', title: 'Navigation', sub: 'Tab bars, sidebars, breadcrumbs' },
  ];
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', padding: '16px 24px', background: '#fff', borderBottom: '1px solid var(--border)', gap: 12 }}>
        <div style={{ flex: 1, position: 'relative' }}>
          <span style={{ position: 'absolute', left: 11, top: '50%', transform: 'translateY(-50%)', color: 'var(--mono-300)', display: 'flex' }}><WIcons.search size={14} /></span>
          <input defaultValue="button" placeholder="Search components, tokens, screens…"
            style={{ width: '100%', padding: '9px 14px 9px 36px', borderRadius: 0, border: 'none', borderBottom: '2px solid var(--mono-400)', fontSize: 13, fontFamily: 'var(--font-body)', color: 'var(--fg)', outline: 'none', background: 'transparent' }} />
        </div>
        <BtnSm primary>Search</BtnSm>
      </div>
      <div style={{ padding: '20px 24px' }}>
        <div style={{ display: 'flex', gap: 8, marginBottom: 20, overflowX: 'auto', paddingBottom: 4 }}>
          {filters.map(f => (
            <button key={f} onClick={() => setFilter(f)} style={{ padding: '6px 14px', borderRadius: 0, fontSize: 12, fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap', fontFamily: 'var(--font-body)', transition: '.12s',
              border: `1.5px solid ${filter === f ? 'var(--primary)' : 'var(--mono-100)'}`, background: filter === f ? 'var(--primary)' : '#fff', color: filter === f ? '#fff' : 'var(--mono-700)' }}>{f}</button>
          ))}
        </div>
        <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 12 }}>Featured</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14, marginBottom: 24 }}>
          {featured.map(c => <FeaturedCard key={c.title} {...c} />)}
        </div>
        <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 12 }}>All Resources</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 14 }}>
          {resources.map(r => (
            <div key={r.title} style={{ background: '#fff', borderRadius: 0, border: '1px solid var(--border)', padding: 16, display: 'flex', alignItems: 'center', gap: 14, cursor: 'pointer' }}>
              <div style={{ width: 44, height: 44, borderRadius: 0, background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>{r.icon}</div>
              <div style={{ flex: 1 }}><div style={{ fontSize: 13, fontWeight: 700 }}>{r.title}</div><div style={{ fontSize: 11, color: 'var(--mono-300)' }}>{r.sub}</div></div>
              <span style={{ color: 'var(--mono-200)', fontSize: 18 }}>›</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function FeaturedCard({ title, meta, tag, preview }) {
  const tagColor = tag === 'Foundation' ? { bg: 'var(--success-soft)', fg: 'var(--success)' } : { bg: 'var(--primary-soft)', fg: 'var(--primary)' };
  return (
    <div style={{ background: '#fff', borderRadius: 0, border: '1px solid var(--border)', overflow: 'hidden', cursor: 'pointer' }}>
      <div style={{ height: 100, background: 'var(--surface-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, padding: 12 }}>
        {preview === 'btn' && <>
          <span style={{ background: 'var(--primary)', color: '#fff', fontSize: 11, fontWeight: 600, padding: '6px 12px' }}>Primary</span>
          <span style={{ border: '1.5px solid var(--mono-100)', color: 'var(--mono-700)', fontSize: 11, fontWeight: 600, padding: '6px 12px' }}>Ghost</span>
        </>}
        {preview === 'input' && <div style={{ width: '70%', borderBottom: '2px solid var(--mono-400)', fontSize: 12, color: 'var(--mono-300)', paddingBottom: 6 }}>Input field…</div>}
        {preview === 'swatches' && <div style={{ display: 'flex', gap: 4 }}>{['#352eff', '#0053ff', '#7c9dff', '#629c28', '#ff8400', '#ff0000'].map(c => <div key={c} style={{ width: 20, height: 36, background: c }} />)}</div>}
      </div>
      <div style={{ padding: 12 }}>
        <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 3 }}>{title}</div>
        <div style={{ fontSize: 11, color: 'var(--mono-300)' }}>{meta}</div>
        <span style={{ display: 'inline-block', marginTop: 6, padding: '2px 8px', borderRadius: 0, fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.06em', background: tagColor.bg, color: tagColor.fg }}>{tag}</span>
      </div>
    </div>
  );
}

/* ── Settings (profile + notification prefs) ─────────────────────────────── */
function Settings() {
  const [navItem, setNavItem] = useState('Profile');
  const [tog, setTog] = useState({ comp: true, token: true, digest: false, marketing: false });
  const groups = [
    { label: 'Account', items: ['Profile', 'Security', 'Billing'] },
    { label: 'Preferences', items: ['Appearance', 'Notifications', 'Language'] },
    { label: 'Developer', items: ['API Keys', 'Webhooks'] },
  ];
  const toggles = [
    { k: 'comp', label: 'Component updates', sub: 'When a component in your system changes' },
    { k: 'token', label: 'Token changes', sub: 'When design tokens are updated' },
    { k: 'digest', label: 'Weekly digest', sub: 'Summary of activity every Monday' },
    { k: 'marketing', label: 'Marketing emails', sub: 'Product updates and tips' },
  ];
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', minHeight: 620 }}>
      {/* settings sub-nav */}
      <div style={{ background: '#fff', borderRight: '1px solid var(--border)', padding: '20px 12px' }}>
        <div style={{ fontSize: 15, fontWeight: 800, padding: '0 8px', marginBottom: 16, letterSpacing: '-.01em' }}>Settings</div>
        {groups.map(g => (
          <div key={g.label} style={{ marginBottom: 4 }}>
            <div style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em', color: 'var(--mono-300)', padding: '8px 10px 3px' }}>{g.label}</div>
            {g.items.map(it => (
              <div key={it} onClick={() => setNavItem(it)} style={{ padding: '7px 10px', borderRadius: 0, fontSize: 12, fontWeight: navItem === it ? 600 : 500, cursor: 'pointer', transition: '.12s',
                color: navItem === it ? 'var(--primary)' : 'var(--mono-700)', background: navItem === it ? 'color-mix(in srgb, var(--primary) 8%, transparent)' : 'transparent' }}>{it}</div>
            ))}
          </div>
        ))}
        <div style={{ padding: '7px 10px', fontSize: 12, fontWeight: 500, color: 'var(--mono-700)', cursor: 'pointer', marginTop: 4 }}>Sign Out</div>
      </div>
      {/* settings content */}
      <div style={{ padding: '24px 28px', overflowY: 'auto' }}>
        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 16, fontWeight: 800, letterSpacing: '-.01em', marginBottom: 4 }}>Profile Settings</div>
          <div style={{ fontSize: 12, color: 'var(--mono-500)' }}>Manage your account details and public info</div>
        </div>
        {/* photo */}
        <SettingsCard title="Photo">
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ width: 64, height: 64, borderRadius: 0, background: 'var(--gradient-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, fontWeight: 800, color: '#fff', flexShrink: 0 }}>AK</div>
            <div>
              <div style={{ fontSize: 11, color: 'var(--mono-300)', marginBottom: 8 }}>JPG, PNG or GIF. Max 2MB.</div>
              <div style={{ display: 'flex', gap: 8 }}>
                <BtnSm primary>Upload Photo</BtnSm><BtnSm>Remove</BtnSm>
              </div>
            </div>
          </div>
        </SettingsCard>
        {/* basic info */}
        <SettingsCard title="Basic Information">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <SettingsField label="First Name" value="Alex" />
            <SettingsField label="Last Name" value="Kim" />
          </div>
          <SettingsField label="Username" value="alexkim" />
          <SettingsField label="Email" value="alex@mavdesign.io" />
          <SettingsField label="Bio" value="Building the MaV design system — modular tokens, accessible components, and cross-platform screens." />
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10, paddingTop: 8 }}>
            <BtnSm>Cancel</BtnSm><BtnSm primary>Save Changes</BtnSm>
          </div>
        </SettingsCard>
        {/* notifications */}
        <SettingsCard title="Notification Preferences" action="Edit all">
          {toggles.map((t, i) => (
            <div key={t.k} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 0', borderBottom: i < toggles.length - 1 ? '1px solid var(--surface-soft)' : 'none' }}>
              <div><div style={{ fontSize: 13, fontWeight: 500 }}>{t.label}</div><div style={{ fontSize: 11, color: 'var(--mono-300)', marginTop: 2 }}>{t.sub}</div></div>
              <div onClick={() => setTog(s => ({ ...s, [t.k]: !s[t.k] }))} style={{ width: 40, height: 22, borderRadius: 9999, position: 'relative', cursor: 'pointer', transition: 'background .2s', background: tog[t.k] ? 'var(--primary)' : 'var(--mono-100)', flexShrink: 0 }}>
                <div style={{ width: 18, height: 18, borderRadius: '50%', background: '#fff', position: 'absolute', top: 2, left: tog[t.k] ? 20 : 2, transition: 'left .2s', boxShadow: '0 1px 3px rgba(0,0,0,.2)' }} />
              </div>
            </div>
          ))}
        </SettingsCard>
      </div>
    </div>
  );
}

function SettingsCard({ title, action, children }) {
  return (
    <div style={{ background: '#fff', borderRadius: 0, border: '1px solid var(--border)', padding: 20, marginBottom: 16 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, paddingBottom: 12, borderBottom: '1px solid var(--surface-soft)' }}>
        <span style={{ fontSize: 13, fontWeight: 700 }}>{title}</span>
        {action && <button style={{ fontSize: 12, fontWeight: 600, color: 'var(--primary)', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-body)' }}>{action}</button>}
      </div>
      {children}
    </div>
  );
}

function SettingsField({ label, value }) {
  const [focus, setFocus] = useState(false);
  return (
    <div style={{ marginBottom: 14 }}>
      <label style={{ fontSize: 11, fontWeight: 600, color: 'var(--mono-700)', marginBottom: 5, display: 'block', textTransform: 'uppercase', letterSpacing: '.04em' }}>{label}</label>
      <input defaultValue={value} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{ width: '100%', padding: '9px 4px', borderRadius: 0, border: 'none', borderBottom: `2px solid ${focus ? 'var(--primary)' : 'var(--mono-400)'}`, fontSize: 13, fontFamily: 'var(--font-body)', color: 'var(--fg)', outline: 'none', background: 'transparent', transition: 'border-color .15s' }} />
    </div>
  );
}

Object.assign(window, { SectionTitle, DeltaChip, KpiCard, DateDropdown, MiniCard, GroupedBars, LineReturning, BarsLeaving, RevenueArea, SubscriptionDonut, SubscribedTable, Dashboard, Explore, FeaturedCard, Settings, SettingsCard, SettingsField });
