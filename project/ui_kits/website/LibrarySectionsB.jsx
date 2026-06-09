/* Fyscal Website UI Kit — additional section LAYOUTS. Depends on Library.jsx
   (UBtn, Badge, Avatar, card) + Icons.jsx (SIcons) + Nav.jsx (FyscalLogo). */
const { useState: uS5 } = React;

const swrap = { background: 'var(--surface)', border: '1px solid var(--border)' };

/* Hero — split (copy left, visual right) */
function HeroSplit() {
  return (
    <div style={{ ...swrap, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', overflow: 'hidden' }}>
      <div style={{ padding: 28, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 14 }}>
        <Badge kind="primary">New</Badge>
        <h2 style={{ fontSize: 'clamp(24px,3.5vw,34px)', fontWeight: 600, letterSpacing: '-.03em', lineHeight: 1.08 }}>Move money at the speed of you</h2>
        <p style={{ fontSize: 15, color: 'var(--mono-500)', lineHeight: 1.6 }}>Send, spend and grow in one account built for how Africa moves.</p>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}><UBtn>Open account <SIcons.arrowR size={16} /></UBtn><UBtn variant="ghost">Talk to sales</UBtn></div>
      </div>
      <div style={{ background: 'var(--gradient-brand)', minHeight: 220, display: 'grid', placeItems: 'center', padding: 28 }}>
        <div style={{ background: 'rgba(255,255,255,.14)', border: '1px solid rgba(255,255,255,.25)', padding: 22, width: '100%', maxWidth: 240, color: '#fff' }}>
          <div style={{ fontSize: 11, opacity: .7, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.08em' }}>Balance</div>
          <div style={{ font: '700 28px var(--font-mono)', margin: '6px 0 2px' }}>₦2,450,000</div>
          <div style={{ fontSize: 12, opacity: .65 }}>+12.4% this month</div>
        </div>
      </div>
    </div>
  );
}

/* How it works — 3 numbered steps */
function HowItWorks() {
  const steps = [['Create account', 'Sign up in two minutes with just your phone.'], ['Add money', 'Fund instantly from any bank or card.'], ['Start sending', 'Pay anyone, anywhere, in seconds.']];
  return (
    <div style={{ padding: 24, ...swrap }}>
      <h2 style={{ fontSize: 20, fontWeight: 700, letterSpacing: '-.02em', marginBottom: 18 }}>How it works</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 18 }}>
        {steps.map(([t, d], i) => (
          <div key={t}>
            <div style={{ width: 38, height: 38, background: 'var(--primary)', color: '#fff', display: 'grid', placeItems: 'center', font: '700 16px var(--font-mono)', marginBottom: 12 }}>{i + 1}</div>
            <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 5 }}>{t}</div>
            <div style={{ fontSize: 13.5, color: 'var(--mono-500)', lineHeight: 1.55 }}>{d}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* Bento grid — mixed-size feature tiles */
function BentoGrid() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gridAutoRows: '92px', gap: 12 }}>
      <div style={{ ...swrap, gridColumn: 'span 2', gridRow: 'span 2', background: 'var(--gradient-brand)', color: '#fff', padding: 20, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
        <SIcons.bolt size={26} stroke="#fff" /><div style={{ fontSize: 17, fontWeight: 700, marginTop: 10 }}>Instant transfers</div><div style={{ fontSize: 12.5, opacity: .8 }}>24/7, any bank</div>
      </div>
      <div style={{ ...swrap, gridColumn: 'span 2', padding: 16, display: 'flex', alignItems: 'center', gap: 12 }}><div style={{ width: 38, height: 38, background: 'var(--primary-soft)', display: 'grid', placeItems: 'center' }}><SIcons.shield size={20} stroke="var(--primary)" /></div><div><div style={{ fontSize: 14, fontWeight: 700 }}>Bank-grade security</div><div style={{ fontSize: 12, color: 'var(--mono-500)' }}>CBN-licensed</div></div></div>
      <div style={{ ...swrap, padding: 16 }}><SIcons.card size={20} stroke="var(--primary)" /><div style={{ fontSize: 13, fontWeight: 700, marginTop: 8 }}>Cards</div></div>
      <div style={{ ...swrap, padding: 16 }}><SIcons.chart size={20} stroke="var(--primary)" /><div style={{ fontSize: 13, fontWeight: 700, marginTop: 8 }}>Insights</div></div>
      <div style={{ ...swrap, gridColumn: 'span 2', padding: 16, display: 'flex', alignItems: 'center', gap: 12 }}><div style={{ width: 38, height: 38, background: 'var(--success-soft)', display: 'grid', placeItems: 'center' }}><SIcons.globe size={20} stroke="var(--success)" /></div><div><div style={{ fontSize: 14, fontWeight: 700 }}>Multi-currency</div><div style={{ fontSize: 12, color: 'var(--mono-500)' }}>NGN · USD · GBP · EUR</div></div></div>
    </div>
  );
}

/* Alternating feature rows (zig-zag) */
function FeatureZigZag() {
  const rows = [['Spend smarter', 'Automatic categories and weekly summaries keep you in control.', false], ['Save automatically', 'Lock funds into goals that earn while you sleep.', true]];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      {rows.map(([t, d, flip], i) => (
        <div key={t} style={{ ...swrap, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', overflow: 'hidden' }}>
          <div style={{ padding: 24, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8, order: flip ? 2 : 1 }}>
            <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: '-.01em' }}>{t}</div>
            <div style={{ fontSize: 14, color: 'var(--mono-500)', lineHeight: 1.6 }}>{d}</div>
            <a href="#" style={{ color: 'var(--primary)', fontWeight: 600, fontSize: 13.5, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 5 }}>Learn more <SIcons.arrowR size={15} /></a>
          </div>
          <div style={{ background: i ? 'var(--success-soft)' : 'var(--primary-soft)', minHeight: 150, order: flip ? 1 : 2, display: 'grid', placeItems: 'center' }}>{i ? <SIcons.chart size={40} stroke="var(--success)" /> : <SIcons.swap size={40} stroke="var(--primary)" />}</div>
        </div>
      ))}
    </div>
  );
}

/* Comparison / feature table */
function ComparisonTable() {
  const rows = [['Free transfers', true, true], ['Dollar card', true, true], ['Higher limits', false, true], ['Lounge access', false, true], ['Priority support', false, true]];
  const cell = (on) => <td style={{ textAlign: 'center', padding: '11px 14px', borderTop: '1px solid var(--surface-soft)' }}>{on ? <SIcons.check size={17} stroke="var(--success)" sw={2.5} /> : <SIcons.x size={15} stroke="var(--mono-200)" />}</td>;
  return (
    <div style={{ ...swrap, overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead><tr style={{ background: 'var(--surface-soft)' }}><th style={{ textAlign: 'left', padding: '12px 14px', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--mono-400)' }}>Feature</th><th style={{ padding: '12px 14px', fontSize: 12.5, fontWeight: 700 }}>Personal</th><th style={{ padding: '12px 14px', fontSize: 12.5, fontWeight: 700, color: 'var(--primary)' }}>Premium</th></tr></thead>
        <tbody>{rows.map(r => <tr key={r[0]}><td style={{ padding: '11px 14px', fontSize: 13.5, fontWeight: 500, borderTop: '1px solid var(--surface-soft)' }}>{r[0]}</td>{cell(r[1])}{cell(r[2])}</tr>)}</tbody>
      </table>
    </div>
  );
}

/* Team grid */
function TeamGrid() {
  const team = [['Ada N.', 'CEO', '#352eff'], ['Tunde A.', 'CTO', '#0053ff'], ['Zainab M.', 'Design', '#7b2ff7'], ['Kwame O.', 'Eng', '#1f8a5b']];
  return (
    <div>
      <h2 style={{ fontSize: 20, fontWeight: 700, letterSpacing: '-.02em', marginBottom: 16 }}>Meet the team</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(140px,1fr))', gap: 14 }}>
        {team.map(([n, role, c]) => (
          <div key={n} style={{ ...swrap, padding: 18, textAlign: 'center' }}>
            <div style={{ margin: '0 auto 10px', width: 'fit-content' }}><Avatar initials={n.split(' ').map(x => x[0]).join('')} size={54} tint={c} /></div>
            <div style={{ fontSize: 14, fontWeight: 700 }}>{n}</div>
            <div style={{ fontSize: 12.5, color: 'var(--mono-500)' }}>{role}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* Banner strip (promo) */
function BannerStrip() {
  return (
    <div style={{ ...swrap, background: 'var(--ink)', color: '#fff', padding: '20px 24px', display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
      <div style={{ flex: 1, minWidth: 200 }}><div style={{ fontSize: 17, fontWeight: 700, letterSpacing: '-.01em' }}>Refer a friend, get ₦5,000</div><div style={{ fontSize: 13, opacity: .7, marginTop: 3 }}>For every friend who opens and funds an account.</div></div>
      <UBtn variant="light">Invite friends</UBtn>
    </div>
  );
}

/* Full footer */
function FooterFull() {
  const cols = [['Product', ['Personal', 'Business', 'Cards', 'API']], ['Company', ['About', 'Careers', 'Press', 'Contact']], ['Resources', ['Docs', 'Status', 'Blog', 'Help']], ['Legal', ['Privacy', 'Terms', 'Security', 'Cookies']]];
  return (
    <footer style={{ background: 'var(--ink)', color: '#fff', padding: '36px 28px 24px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.6fr repeat(4,1fr)', gap: 28, paddingBottom: 28, borderBottom: '1px solid rgba(255,255,255,.12)' }}>
        <div><FyscalLogo height={20} variant="white" /><p style={{ fontSize: 12.5, color: 'rgba(255,255,255,.55)', lineHeight: 1.6, marginTop: 14, maxWidth: 220 }}>The modern money platform for Africa.</p></div>
        {cols.map(([h, items]) => <div key={h}><div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.08em', color: 'rgba(255,255,255,.45)', marginBottom: 12 }}>{h}</div><div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>{items.map(it => <a key={it} href="#" style={{ fontSize: 13, color: 'rgba(255,255,255,.75)', textDecoration: 'none' }}>{it}</a>)}</div></div>)}
      </div>
      <div style={{ paddingTop: 18, fontSize: 12, color: 'rgba(255,255,255,.45)' }}>© 2026 Fyscal Technologies. Licensed by the CBN.</div>
    </footer>
  );
}

Object.assign(window, { HeroSplit, HowItWorks, BentoGrid, FeatureZigZag, ComparisonTable, TeamGrid, BannerStrip, FooterFull });
