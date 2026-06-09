/* Fyscal Website UI Kit — Marketing section extras. Depends on Library.jsx +
   LibraryExtras.jsx (Accordion) + Icons.jsx. Exports to window. */
const { useState: uS4 } = React;
const mcard = { background: 'var(--surface)', border: '1px solid var(--border)', padding: 18 };

function PricingTable() {
  const tiers = [
    { name: 'Personal', price: '₦0', per: '/forever', feats: ['Free transfers', 'Virtual card', 'Savings goals'], hi: false },
    { name: 'Premium', price: '₦2,500', per: '/month', feats: ['Everything in Personal', 'Higher limits', 'Lounge access', '2 physical cards'], hi: true },
    { name: 'Business', price: 'Custom', per: '', feats: ['Payments API', 'Payroll', 'Dedicated manager'], hi: false },
  ];
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(190px,1fr))', gap: 14 }}>
      {tiers.map(t => (
        <div key={t.name} style={{ border: t.hi ? '1.5px solid var(--primary)' : '1px solid var(--border)', background: t.hi ? 'var(--ink)' : '#fff', color: t.hi ? '#fff' : 'var(--fg)', padding: 22, position: 'relative' }}>
          {t.hi && <div style={{ position: 'absolute', top: 0, right: 0, background: 'var(--primary)', color: '#fff', fontSize: 10, fontWeight: 700, padding: '4px 10px', textTransform: 'uppercase', letterSpacing: '.06em' }}>Popular</div>}
          <div style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.06em', color: t.hi ? 'rgba(255,255,255,.6)' : 'var(--mono-400)' }}>{t.name}</div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, margin: '12px 0 14px' }}><span style={{ font: '700 30px var(--font-mono)', letterSpacing: '-.03em' }}>{t.price}</span><span style={{ fontSize: 13, color: t.hi ? 'rgba(255,255,255,.5)' : 'var(--mono-400)' }}>{t.per}</span></div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 9, marginBottom: 18 }}>
            {t.feats.map(f => <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: 13 }}><SIcons.check size={15} stroke={t.hi ? 'var(--secondary)' : 'var(--primary)'} sw={2.5} />{f}</div>)}
          </div>
          <UBtn full variant={t.hi ? 'light' : 'ghost'}>Choose {t.name}</UBtn>
        </div>
      ))}
    </div>
  );
}

function TestimonialBlock() {
  return (
    <div style={{ background: 'var(--surface-soft)', padding: '32px 24px', textAlign: 'center' }}>
      <div style={{ display: 'flex', gap: 3, justifyContent: 'center', marginBottom: 16 }}>{[0, 1, 2, 3, 4].map(i => <SIcons.star key={i} size={18} fill="var(--warning)" sw={0} />)}</div>
      <p style={{ fontSize: 'clamp(18px,3vw,24px)', fontWeight: 500, lineHeight: 1.4, letterSpacing: '-.02em', maxWidth: 640, margin: '0 auto' }}>“We moved payroll to Fyscal and cut payout time from two days to ten minutes.”</p>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginTop: 22 }}>
        <Avatar initials="NO" size={44} />
        <div style={{ textAlign: 'left' }}><div style={{ fontSize: 14, fontWeight: 700 }}>Ngozi Okonkwo</div><div style={{ fontSize: 12.5, color: 'var(--mono-500)' }}>Head of Finance, Carbon</div></div>
      </div>
    </div>
  );
}

function StatsBand() {
  const s = [['2.4M+', 'Accounts'], ['₦480B', 'Processed'], ['99.99%', 'Uptime'], ['18', 'Markets']];
  return (
    <div style={{ background: 'var(--ink)', color: '#fff', padding: '32px 20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(120px,1fr))', gap: 20 }}>
      {s.map(([v, l]) => <div key={l} style={{ textAlign: 'center' }}><div style={{ font: '700 32px var(--font-mono)', letterSpacing: '-.03em' }}>{v}</div><div style={{ fontSize: 13, color: 'rgba(255,255,255,.55)', marginTop: 4 }}>{l}</div></div>)}
    </div>
  );
}

function FAQSection() {
  return (
    <div>
      <h2 style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-.02em', marginBottom: 14 }}>Frequently asked questions</h2>
      <Accordion />
    </div>
  );
}

function CTABanner() {
  return (
    <div style={{ background: '#352eff', color: '#fff', padding: '40px 28px', textAlign: 'center' }}>
      <h2 style={{ fontSize: 'clamp(24px,4vw,34px)', fontWeight: 600, letterSpacing: '-.03em', lineHeight: 1.1 }}>Ready to move your money forward?</h2>
      <p style={{ fontSize: 15.5, opacity: .8, marginTop: 12, maxWidth: 420, marginInline: 'auto' }}>Open a free account in two minutes — no paperwork.</p>
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 22, flexWrap: 'wrap' }}>
        <UBtn variant="light" size="lg">Open free account</UBtn>
        <UBtn variant="outlineLight" size="lg">Book a demo</UBtn>
      </div>
    </div>
  );
}

function Newsletter() {
  const [f, setF] = uS4(false);
  return (
    <div style={{ ...mcard, display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 460 }}>
      <div><div style={{ fontSize: 16, fontWeight: 700, letterSpacing: '-.01em' }}>Get the Fyscal brief</div><div style={{ fontSize: 13, color: 'var(--mono-500)', marginTop: 3 }}>Product updates and money tips, monthly. No spam.</div></div>
      <div style={{ display: 'flex', gap: 8 }}>
        <input onFocus={() => setF(true)} onBlur={() => setF(false)} placeholder="you@email.com" style={{ flex: 1, height: 46, padding: '0 14px', border: '1px solid ' + (f ? 'var(--primary)' : 'var(--border-input)'), boxShadow: f ? 'var(--shadow-focus)' : 'none', outline: 'none', fontSize: 14, fontFamily: 'var(--font-body)', color: 'var(--fg)' }} />
        <UBtn>Subscribe</UBtn>
      </div>
    </div>
  );
}

function LogoCloud() {
  const logos = ['Paystack', 'Flutterwave', 'Interswitch', 'Kuda', 'Carbon', 'PiggyVest'];
  return (
    <div>
      <div style={{ textAlign: 'center', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.1em', color: 'var(--mono-300)', marginBottom: 20 }}>Trusted by teams across the continent</div>
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
        {logos.map(l => <span key={l} style={{ fontSize: 'clamp(15px,2.4vw,20px)', fontWeight: 800, color: 'var(--mono-200)', letterSpacing: '-.02em' }}>{l}</span>)}
      </div>
    </div>
  );
}

Object.assign(window, { PricingTable, TestimonialBlock, StatsBand, FAQSection, CTABanner, Newsletter, LogoCloud });
