/* Fyscal Website UI Kit — Extras: the components/sections that complete a robust
   DS. Depends on Library.jsx (UBtn, TextInput, Select, Badge, Avatar, Toggle,
   card, lbl) + Icons.jsx (SIcons). All export to window. */
const { useState: uS3 } = React;
const xcard = { background: 'var(--surface)', border: '1px solid var(--border)', padding: 18 };
const xlbl = { fontSize: 12, fontWeight: 600, marginBottom: 6, display: 'block', color: 'var(--fg)' };

/* ════ DISCLOSURE ══════════════════════════════════════════════════════════ */
function Accordion() {
  const items = [
    ['What is Fyscal?', 'A modern money platform — send, spend, save, and build in one account.'],
    ['How long does a transfer take?', 'Most transfers settle instantly, 24/7, to any bank.'],
    ['Is my money protected?', 'Yes — deposits are held with CBN-licensed partners and monitored in real time.'],
  ];
  const [open, setOpen] = uS3(0);
  return (
    <div style={{ border: '1px solid var(--border)', background: 'var(--surface)' }}>
      {items.map(([q, a], i) => (
        <div key={q} style={{ borderTop: i ? '1px solid var(--surface-soft)' : 'none' }}>
          <button onClick={() => setOpen(open === i ? -1 : i)} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, padding: '13px 16px', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-body)', fontSize: 13.5, fontWeight: 600, color: 'var(--fg)', textAlign: 'left' }}>
            {q}<span style={{ display: 'inline-flex', transition: 'transform .22s', transform: open === i ? 'rotate(180deg)' : 'none' }}><SIcons.chevD size={16} stroke="var(--mono-400)" /></span>
          </button>
          <div style={{ overflow: 'hidden', maxHeight: open === i ? 120 : 0, transition: 'max-height .25s ease' }}>
            <div style={{ padding: '0 16px 14px', fontSize: 13, color: 'var(--mono-500)', lineHeight: 1.55 }}>{a}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ════ NAVIGATION (more) ═══════════════════════════════════════════════════ */
function Pagination() {
  const [p, setP] = uS3(3);
  const pages = [1, 2, 3, 4, 5];
  const cell = (on) => ({ minWidth: 34, height: 34, display: 'grid', placeItems: 'center', border: '1px solid ' + (on ? 'var(--primary)' : 'var(--border-input)'), background: on ? 'var(--primary)' : '#fff', color: on ? '#fff' : 'var(--mono-600)', fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: 'var(--font-body)' });
  return (
    <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
      <button style={cell(false)} onClick={() => setP(Math.max(1, p - 1))}><SIcons.chevR size={14} stroke="var(--mono-500)" style={{ transform: 'rotate(180deg)' }} /></button>
      {pages.map(n => <button key={n} style={cell(n === p)} onClick={() => setP(n)}>{n}</button>)}
      <span style={{ color: 'var(--mono-400)', padding: '0 2px' }}>…</span>
      <button style={cell(false)} onClick={() => setP(12)}>12</button>
      <button style={cell(false)} onClick={() => setP(Math.min(12, p + 1))}><SIcons.chevR size={14} stroke="var(--mono-500)" /></button>
    </div>
  );
}
function Stepper() {
  const steps = ['Account', 'Identity', 'Funding', 'Done'];
  const cur = 2;
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {steps.map((s, i) => (
        <React.Fragment key={s}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 30, height: 30, borderRadius: '50%', display: 'grid', placeItems: 'center', fontSize: 12, fontWeight: 700, background: i < cur ? 'var(--primary)' : i === cur ? 'var(--primary-soft)' : '#fff', color: i < cur ? '#fff' : i === cur ? 'var(--primary)' : 'var(--mono-400)', border: '1.5px solid ' + (i <= cur ? 'var(--primary)' : 'var(--border-input)') }}>
              {i < cur ? <SIcons.check size={15} stroke="#fff" sw={3} /> : i + 1}
            </div>
            <span style={{ fontSize: 11, fontWeight: 600, color: i <= cur ? 'var(--fg)' : 'var(--mono-400)' }}>{s}</span>
          </div>
          {i < steps.length - 1 && <div style={{ flex: 1, height: 2, background: i < cur ? 'var(--primary)' : 'var(--border)', margin: '0 6px', marginBottom: 18 }} />}
        </React.Fragment>
      ))}
    </div>
  );
}
function VerticalTabs() {
  const tabs = ['Profile', 'Security', 'Billing', 'Notifications'];
  const [a, setA] = uS3(1);
  return (
    <div style={{ display: 'flex', gap: 0, border: '1px solid var(--border)', background: 'var(--surface)', minHeight: 150 }}>
      <div style={{ width: 130, borderRight: '1px solid var(--border)', padding: 6 }}>
        {tabs.map((t, i) => <div key={t} onClick={() => setA(i)} style={{ padding: '9px 10px', fontSize: 12.5, fontWeight: a === i ? 600 : 500, cursor: 'pointer', color: a === i ? 'var(--primary)' : 'var(--mono-600)', background: a === i ? 'var(--primary-soft)' : 'transparent', boxShadow: a === i ? 'inset 2px 0 0 var(--primary)' : 'none' }}>{t}</div>)}
      </div>
      <div style={{ flex: 1, padding: 18, fontSize: 13, color: 'var(--mono-500)', lineHeight: 1.6 }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--fg)', marginBottom: 6 }}>{tabs[a]}</div>
        Settings for the {tabs[a].toLowerCase()} section appear in this panel.
      </div>
    </div>
  );
}
function Toolbar() {
  const tools = [SIcons.doc, SIcons.grid, SIcons.filter, SIcons.sort, SIcons.refresh];
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 4, padding: 6, border: '1px solid var(--border)', background: 'var(--surface)' }}>
      {tools.map((I, i) => <button key={i} style={{ width: 34, height: 34, display: 'grid', placeItems: 'center', border: 'none', background: i === 0 ? 'var(--primary-soft)' : 'transparent', cursor: 'pointer' }}><I size={17} stroke={i === 0 ? 'var(--primary)' : 'var(--mono-600)'} /></button>)}
      <div style={{ width: 1, height: 22, background: 'var(--border)', margin: '0 4px' }} />
      <div style={{ marginLeft: 'auto' }}><UBtn size="sm">Share</UBtn></div>
    </div>
  );
}

/* ════ FORMS (more) ════════════════════════════════════════════════════════ */
function Textarea({ label = 'Message' }) {
  const [f, setF] = uS3(false);
  return (
    <div>
      <label style={xlbl}>{label}</label>
      <textarea rows="3" placeholder="Write a note…" onFocus={() => setF(true)} onBlur={() => setF(false)}
        style={{ width: '100%', padding: '10px 12px', borderRadius: 0, resize: 'vertical', background: 'var(--surface)', outline: 'none', fontSize: 14, fontFamily: 'var(--font-body)', color: 'var(--fg)', border: '1px solid ' + (f ? 'var(--primary)' : 'var(--border-input)'), boxShadow: f ? 'var(--shadow-focus)' : 'none' }} />
    </div>
  );
}
function OTP() {
  const [v, setV] = uS3('48');
  return (
    <div>
      <label style={xlbl}>Verification code</label>
      <div style={{ display: 'flex', gap: 8 }}>
        {[0, 1, 2, 3, 4, 5].map(i => <div key={i} style={{ width: 44, height: 48, display: 'grid', placeItems: 'center', border: '1px solid ' + (v[i] ? 'var(--ink)' : 'var(--border-input)'), fontFamily: 'var(--font-mono)', fontSize: 18, color: 'var(--fg)' }}>{v[i] || ''}</div>)}
      </div>
    </div>
  );
}
function PhoneInput() {
  const [f, setF] = uS3(false);
  return (
    <div>
      <label style={xlbl}>Phone number</label>
      <div style={{ display: 'flex', height: 46, border: '1px solid ' + (f ? 'var(--primary)' : 'var(--border-input)'), boxShadow: f ? 'var(--shadow-focus)' : 'none', background: 'var(--surface)' }}>
        <button style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '0 10px', border: 'none', borderRight: '1px solid var(--border-input)', background: 'transparent', cursor: 'pointer', fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 600 }}>🇳🇬 +234 <SIcons.chevD size={11} stroke="var(--mono-400)" /></button>
        <input onFocus={() => setF(true)} onBlur={() => setF(false)} placeholder="812 0000 000" style={{ flex: 1, border: 'none', outline: 'none', padding: '0 12px', fontSize: 14, fontFamily: 'var(--font-body)', color: 'var(--fg)' }} />
      </div>
    </div>
  );
}
function Quantity() {
  const [n, setN] = uS3(2);
  const btn = { width: 38, height: 38, display: 'grid', placeItems: 'center', border: '1px solid var(--border-input)', background: 'var(--surface)', cursor: 'pointer', fontSize: 18, fontWeight: 600, color: 'var(--fg)', fontFamily: 'var(--font-body)' };
  return (
    <div>
      <label style={xlbl}>Quantity</label>
      <div style={{ display: 'inline-flex' }}>
        <button style={btn} onClick={() => setN(Math.max(0, n - 1))}>−</button>
        <div style={{ minWidth: 48, height: 38, display: 'grid', placeItems: 'center', borderTop: '1px solid var(--border-input)', borderBottom: '1px solid var(--border-input)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>{n}</div>
        <button style={btn} onClick={() => setN(n + 1)}>+</button>
      </div>
    </div>
  );
}
function FileUpload() {
  const [over, setOver] = uS3(false);
  return (
    <div>
      <label style={xlbl}>Upload document</label>
      <div onDragOver={e => { e.preventDefault(); setOver(true); }} onDragLeave={() => setOver(false)} onDrop={e => { e.preventDefault(); setOver(false); }}
        style={{ border: '1.5px dashed ' + (over ? 'var(--primary)' : 'var(--border-input)'), background: over ? 'var(--primary-soft)' : 'var(--surface-soft)', padding: '24px 16px', textAlign: 'center', cursor: 'pointer' }}>
        <div style={{ width: 40, height: 40, margin: '0 auto 10px', display: 'grid', placeItems: 'center', background: 'var(--surface)', border: '1px solid var(--border)' }}><SIcons.doc size={20} stroke="var(--primary)" /></div>
        <div style={{ fontSize: 13, fontWeight: 600 }}>Drop a file or <span style={{ color: 'var(--primary)' }}>browse</span></div>
        <div style={{ fontSize: 11.5, color: 'var(--mono-400)', marginTop: 3 }}>PDF, PNG or JPG · max 5MB</div>
      </div>
    </div>
  );
}
function DateField() {
  const [f, setF] = uS3(false);
  return (
    <div>
      <label style={xlbl}>Date of birth</label>
      <div style={{ display: 'flex', alignItems: 'center', height: 46, padding: '0 12px', border: '1px solid ' + (f ? 'var(--primary)' : 'var(--border-input)'), boxShadow: f ? 'var(--shadow-focus)' : 'none', background: 'var(--surface)', gap: 10 }}>
        <input type="text" onFocus={() => setF(true)} onBlur={() => setF(false)} defaultValue="12 / 03 / 1996" style={{ flex: 1, border: 'none', outline: 'none', fontSize: 14, fontFamily: 'var(--font-mono)', color: 'var(--fg)' }} />
        <SIcons.calendar size={17} stroke="var(--mono-400)" />
      </div>
    </div>
  );
}
function TagInput() {
  const [tags, setTags] = uS3(['Payments', 'Cards', 'API']);
  return (
    <div>
      <label style={xlbl}>Topics (multi-select)</label>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, alignItems: 'center', minHeight: 46, padding: '7px 10px', border: '1px solid var(--border-input)', background: 'var(--surface)' }}>
        {tags.map(t => (
          <span key={t} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12.5, fontWeight: 600, padding: '4px 6px 4px 10px', borderRadius: 9999, background: 'var(--primary-soft)', color: 'var(--primary)' }}>
            {t}<button onClick={() => setTags(tags.filter(x => x !== t))} style={{ border: 'none', background: 'none', cursor: 'pointer', display: 'grid', placeItems: 'center', padding: 0 }}><SIcons.x size={12} stroke="var(--primary)" /></button>
          </span>
        ))}
        <input placeholder="Add…" style={{ flex: 1, minWidth: 60, border: 'none', outline: 'none', fontSize: 13, fontFamily: 'var(--font-body)', color: 'var(--fg)' }} />
      </div>
    </div>
  );
}

/* ════ DATA (more) ═════════════════════════════════════════════════════════ */
function DataTable() {
  const rows = [
    ['Sofia Rossi', 'Enterprise', '$1,200', 'Active'],
    ['Liam OBrien', 'Pro', '$49', 'Active'],
    ['Noah Williams', 'Pro', '$49', 'Trialing'],
  ];
  const sm = { Active: ['var(--success-soft)', 'var(--success)'], Trialing: ['var(--primary-soft)', 'var(--primary)'] };
  const th = { fontSize: 10.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--mono-400)', textAlign: 'left', padding: '11px 14px' };
  const td = { fontSize: 13, padding: '11px 14px', borderTop: '1px solid var(--surface-soft)' };
  return (
    <div style={{ border: '1px solid var(--border)', background: 'var(--surface)', overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead><tr style={{ background: 'var(--surface-soft)' }}><th style={th}>Customer</th><th style={th}>Plan</th><th style={th}>MRR</th><th style={th}>Status</th></tr></thead>
        <tbody>{rows.map(r => <tr key={r[0]}><td style={{ ...td, fontWeight: 600 }}>{r[0]}</td><td style={td}>{r[1]}</td><td style={{ ...td, fontFamily: 'var(--font-mono)', fontWeight: 600 }}>{r[2]}</td><td style={td}><span style={{ fontSize: 11, fontWeight: 700, padding: '3px 9px', borderRadius: 9999, background: sm[r[3]][0], color: sm[r[3]][1] }}>{r[3]}</span></td></tr>)}</tbody>
      </table>
    </div>
  );
}
function StatTile({ label = 'Total balance', value = '₦2.45M', delta = '+12.4%', up = true }) {
  return (
    <div style={xcard}>
      <div style={{ fontSize: 12, color: 'var(--mono-500)', fontWeight: 500 }}>{label}</div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 8 }}>
        <span style={{ font: '700 26px var(--font-mono)', letterSpacing: '-.03em' }}>{value}</span>
        <span style={{ fontSize: 12, fontWeight: 700, color: up ? 'var(--success)' : 'var(--danger)' }}>{delta}</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 3, height: 28, marginTop: 12 }}>
        {[40, 55, 48, 70, 62, 85, 78].map((h, i) => <div key={i} style={{ flex: 1, height: h + '%', background: i === 5 ? 'var(--primary)' : 'var(--primary-soft)' }} />)}
      </div>
    </div>
  );
}
function Timeline() {
  const items = [['Account created', 'Mar 2'], ['Identity verified', 'Mar 2'], ['First transfer sent', 'Mar 4'], ['Card activated', 'Mar 6']];
  return (
    <div style={{ paddingLeft: 4 }}>
      {items.map(([t, d], i) => (
        <div key={t} style={{ display: 'flex', gap: 12 }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: i === 0 ? 'var(--primary)' : '#fff', border: '2px solid var(--primary)' }} />
            {i < items.length - 1 && <div style={{ width: 2, flex: 1, background: 'var(--border)', minHeight: 24 }} />}
          </div>
          <div style={{ paddingBottom: 14 }}><div style={{ fontSize: 13.5, fontWeight: 600 }}>{t}</div><div style={{ fontSize: 12, color: 'var(--mono-400)' }}>{d}</div></div>
        </div>
      ))}
    </div>
  );
}
function Rating() {
  const [r, setR] = uS3(4);
  return (
    <div style={{ display: 'flex', gap: 4 }}>
      {[1, 2, 3, 4, 5].map(n => <button key={n} onClick={() => setR(n)} style={{ border: 'none', background: 'none', cursor: 'pointer', padding: 0 }}><SIcons.star size={24} stroke={n <= r ? 'var(--warning)' : 'var(--mono-200)'} fill={n <= r ? 'var(--warning)' : 'none'} sw={n <= r ? 0 : 1.5} /></button>)}
    </div>
  );
}
function Chips() {
  const [chips, setChips] = uS3(['Lagos', 'Verified', 'Premium', 'NGN']);
  const tones = ['primary', 'success', 'warning', 'neutral'];
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
      {chips.map((c, i) => { const M = { primary: ['var(--primary-soft)', 'var(--primary)'], success: ['var(--success-soft)', 'var(--success)'], warning: ['var(--warning-soft)', 'var(--warning)'], neutral: ['var(--bg-secondary)', 'var(--mono-600)'] }[tones[i % 4]];
        return <span key={c} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12.5, fontWeight: 600, padding: '5px 8px 5px 12px', borderRadius: 9999, background: M[0], color: M[1] }}>{c}<button onClick={() => setChips(chips.filter(x => x !== c))} style={{ border: 'none', background: 'none', cursor: 'pointer', padding: 0, display: 'grid', placeItems: 'center' }}><SIcons.x size={12} stroke={M[1]} /></button></span>;
      })}
    </div>
  );
}

/* ════ OVERLAYS & STATUS ═══════════════════════════════════════════════════ */
function Tooltip() {
  const [show, setShow] = uS3(false);
  return (
    <div style={{ display: 'inline-block', position: 'relative', paddingTop: 34 }}>
      <button onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} style={{ padding: '8px 14px', border: '1px solid var(--border-input)', background: 'var(--surface)', cursor: 'pointer', fontSize: 13, fontWeight: 600, fontFamily: 'var(--font-body)' }}>Hover me</button>
      {show && <div style={{ position: 'absolute', bottom: '100%', left: '50%', transform: 'translateX(-50%)', marginBottom: 6, background: 'var(--ink)', color: '#fff', fontSize: 12, fontWeight: 500, padding: '6px 10px', whiteSpace: 'nowrap' }}>Settles instantly, 24/7</div>}
    </div>
  );
}
function EmptyState() {
  return (
    <div style={{ textAlign: 'center', padding: '24px 16px' }}>
      <div style={{ width: 52, height: 52, margin: '0 auto 14px', display: 'grid', placeItems: 'center', background: 'var(--surface-soft)', border: '1px solid var(--border)' }}><SIcons.doc size={24} stroke="var(--mono-300)" /></div>
      <div style={{ fontSize: 14, fontWeight: 700 }}>No transactions yet</div>
      <div style={{ fontSize: 12.5, color: 'var(--mono-500)', margin: '5px 0 16px', lineHeight: 1.5 }}>When you send or receive money, it'll show up here.</div>
      <UBtn size="sm">Send your first transfer</UBtn>
    </div>
  );
}
function CircularProgress({ v = 68 }) {
  const sz = 84, r = 34, C = 2 * Math.PI * r;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      <div style={{ position: 'relative', width: sz, height: sz, flexShrink: 0 }}>
        <svg width={sz} height={sz} viewBox={`0 0 ${sz} ${sz}`} style={{ display: 'block' }}>
          <circle cx={sz/2} cy={sz/2} r={r} fill="none" stroke="var(--mono-100)" strokeWidth="7" />
          <circle cx={sz/2} cy={sz/2} r={r} fill="none" stroke="var(--primary)" strokeWidth="7" strokeDasharray={C} strokeDashoffset={C * (1 - v / 100)} strokeLinecap="round" transform={`rotate(-90 ${sz/2} ${sz/2})`} />
        </svg>
        <div style={{ position: 'absolute', top: 0, left: 0, width: sz, height: sz, display: 'flex', alignItems: 'center', justifyContent: 'center', font: '700 16px var(--font-mono)', color: 'var(--fg)' }}>{v}%</div>
      </div>
      <div style={{ fontSize: 13, color: 'var(--mono-500)' }}>Profile completion</div>
    </div>
  );
}
function DismissBanner() {
  const [show, setShow] = uS3(true);
  if (!show) return <UBtn size="sm" variant="ghost" onClick={() => setShow(true)}>Show banner</UBtn>;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', background: 'var(--warning-soft)', borderLeft: '3px solid var(--warning)' }}>
      <SIcons.bell size={18} stroke="var(--warning)" />
      <div style={{ flex: 1, fontSize: 13, color: 'var(--warning)', fontWeight: 600 }}>Verify your identity to raise your transfer limit.</div>
      <button onClick={() => setShow(false)} style={{ border: 'none', background: 'none', cursor: 'pointer' }}><SIcons.x size={16} stroke="var(--warning)" /></button>
    </div>
  );
}
function CookieConsent() {
  const [show, setShow] = uS3(true);
  if (!show) return <UBtn size="sm" variant="ghost" onClick={() => setShow(true)}>Reset cookie banner</UBtn>;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: 16, background: 'var(--ink)', color: '#fff', flexWrap: 'wrap' }}>
      <div style={{ flex: 1, minWidth: 180, fontSize: 13, lineHeight: 1.5, opacity: .85 }}>We use cookies to improve your experience. See our <a href="#" style={{ color: 'var(--secondary)' }}>Cookie Policy</a>.</div>
      <div style={{ display: 'flex', gap: 8 }}>
        <button onClick={() => setShow(false)} style={{ padding: '8px 14px', border: '1px solid rgba(255,255,255,.3)', background: 'transparent', color: '#fff', cursor: 'pointer', fontSize: 12.5, fontWeight: 600, fontFamily: 'var(--font-body)' }}>Decline</button>
        <button onClick={() => setShow(false)} style={{ padding: '8px 14px', border: 'none', background: 'var(--primary)', color: '#fff', cursor: 'pointer', fontSize: 12.5, fontWeight: 600, fontFamily: 'var(--font-body)' }}>Accept all</button>
      </div>
    </div>
  );
}

Object.assign(window, {
  Accordion, Pagination, Stepper, VerticalTabs, Toolbar,
  Textarea, OTP, PhoneInput, Quantity, FileUpload, DateField, TagInput,
  DataTable, StatTile, Timeline, Rating, Chips,
  Tooltip, EmptyState, CircularProgress, DismissBanner, CookieConsent,
});
