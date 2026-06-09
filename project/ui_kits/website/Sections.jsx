/* Fyscal Website UI Kit — marketing page sections */

const Section = ({ children, bg = 'var(--surface)', pad = '88px 32px', style }) => (
  <section className="sec" style={{ background: bg, padding: pad, ...style }}>
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>{children}</div>
  </section>
);

const Eyebrow = ({ children, light }) => (
  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.12em', color: light ? 'rgba(255,255,255,.7)' : 'var(--primary)', marginBottom: 18 }}>
    <span style={{ width: 24, height: 2, background: light ? 'rgba(255,255,255,.5)' : 'var(--primary)' }} />{children}
  </div>
);

/* ── Hero ────────────────────────────────────────────────────────────────── */
function Hero({ onCta }) {
  return (
    <section style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)', overflow: 'hidden' }}>
      <div className="hero-grid" style={{ maxWidth: 1200, margin: '0 auto', padding: '72px 32px 0', display: 'grid', gridTemplateColumns: '1.05fr .95fr', gap: 48, alignItems: 'center' }}>
        <div className="hero-copy" style={{ paddingBottom: 72 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 12px', border: '1px solid var(--border-input)', fontSize: 12.5, fontWeight: 600, color: 'var(--mono-700)', marginBottom: 26 }}>
            <span style={{ width: 7, height: 7, background: 'var(--success)', display: 'inline-block' }} />New · Instant cross-border transfers
          </div>
          <h1 className="hero-title" style={{ fontSize: 58, fontWeight: 600, lineHeight: 1.04, letterSpacing: '-.035em', color: 'var(--fg)' }}>
            Money that moves<br />as fast as <span style={{ color: 'var(--primary)' }}>you do.</span>
          </h1>
          <p style={{ fontSize: 18, color: 'var(--mono-500)', lineHeight: 1.6, marginTop: 22, maxWidth: 460 }}>
            Send, spend, and grow your money in one account. No queues, no hidden fees — just banking built for how Africa actually moves.
          </p>
          <div className="hero-btns" style={{ display: 'flex', gap: 12, marginTop: 32 }}>
            <WBtn size="lg" onClick={onCta}>Open free account <SIcons.arrowR size={18} /></WBtn>
            <WBtn size="lg" variant="ghost">Talk to sales</WBtn>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 22, marginTop: 34 }}>
            <div style={{ display: 'flex' }}>
              {['#352eff', '#0053ff', '#7c9dff', '#171717'].map((c, i) => (
                <div key={i} style={{ width: 34, height: 34, borderRadius: '50%', background: c, border: '2px solid var(--surface)', marginLeft: i ? -10 : 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 12, fontWeight: 700 }}>{['A', 'O', 'K', 'M'][i]}</div>
              ))}
            </div>
            <div>
              <div style={{ display: 'flex', gap: 2, color: 'var(--warning)' }}>{[0,1,2,3,4].map(i => <SIcons.star key={i} size={14} fill="var(--warning)" sw={0} />)}</div>
              <div style={{ fontSize: 13, color: 'var(--mono-500)', marginTop: 3 }}><strong style={{ color: 'var(--fg)' }}>2.4M+</strong> accounts opened</div>
            </div>
          </div>
        </div>
        {/* phone mock */}
        <div className="hero-visual" style={{ position: 'relative', alignSelf: 'end', display: 'flex', justifyContent: 'center' }}>
          <div style={{ position: 'absolute', bottom: 0, width: 380, height: 380, background: 'var(--gradient-brand)', borderRadius: '50%', filter: 'blur(8px)', opacity: .12 }} />
          <div style={{ position: 'relative', width: 290, background: '#000', padding: 8, paddingBottom: 0, borderRadius: '32px 32px 0 0', boxShadow: '0 30px 70px rgba(53,46,255,.18)' }}>
            <div style={{ background: 'var(--gradient-brand)', borderRadius: '26px 26px 0 0', padding: '26px 22px 30px', color: '#fff' }}>
              <div style={{ fontSize: 11, opacity: .7, fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase' }}>Total balance</div>
              <div style={{ font: '700 34px var(--font-mono)', letterSpacing: '-.02em', margin: '6px 0 2px' }}>₦2,450,000</div>
              <div style={{ fontSize: 12, opacity: .6, marginBottom: 22 }}>+12.4% this month</div>
              <div style={{ display: 'flex', gap: 8 }}>
                {[['Send', SIcons.swap], ['Pay', SIcons.card], ['Save', SIcons.chart]].map(([l, I], k) => (
                  <div key={k} style={{ flex: 1, padding: '10px 0', background: 'rgba(255,255,255,.16)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, fontSize: 11, fontWeight: 600 }}><I size={18} stroke="#fff" />{l}</div>
                ))}
              </div>
            </div>
            <div style={{ background: 'var(--surface)', padding: '18px 18px 26px', display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[['Salary — GTBank', '+₦350,000', 'var(--success)'], ['Airtime — MTN', '−₦2,000', 'var(--fg)'], ['James K.', '−₦20,000', 'var(--fg)']].map(([n, a, c], k) => (
                <div key={k} style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
                  <div style={{ width: 34, height: 34, background: 'var(--bg-secondary)' }} />
                  <div style={{ flex: 1, fontSize: 12.5, fontWeight: 600 }}>{n}</div>
                  <div style={{ font: '700 13px var(--font-mono)', color: c }}>{a}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Logo strip ──────────────────────────────────────────────────────────── */
function LogoStrip() {
  const logos = ['Paystack', 'Flutterwave', 'Interswitch', 'Kuda', 'Carbon', 'PiggyVest'];
  return (
    <Section bg="var(--surface)" pad="44px 32px">
      <div style={{ textAlign: 'center', fontSize: 12.5, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.1em', color: 'var(--mono-300)', marginBottom: 28 }}>Trusted by teams across the continent</div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 24 }}>
        {logos.map(l => <span key={l} style={{ fontSize: 22, fontWeight: 800, color: 'var(--mono-200)', letterSpacing: '-.02em' }}>{l}</span>)}
      </div>
    </Section>
  );
}

/* ── Features grid ───────────────────────────────────────────────────────── */
function Features() {
  const feats = [
    { icon: SIcons.bolt, title: 'Instant transfers', body: 'Money lands in seconds, 24/7 — to any bank or Fyscal account, at home or abroad.' },
    { icon: SIcons.shield, title: 'Bank-grade security', body: 'Biometric login, real-time fraud monitoring, and CBN-licensed deposit protection.' },
    { icon: SIcons.card, title: 'Cards that work everywhere', body: 'Virtual and physical cards for online, in-store, and international spend.' },
    { icon: SIcons.chart, title: 'Smart insights', body: 'See where every naira goes with automatic categories and weekly summaries.' },
    { icon: SIcons.globe, title: 'Multi-currency', body: 'Hold and convert NGN, USD, GBP and EUR at rates you can actually see.' },
    { icon: SIcons.api, title: 'Built for developers', body: 'A clean REST API and SDKs to embed payments into your own product in hours.' },
  ];
  return (
    <Section bg="var(--surface-soft)">
      <div style={{ maxWidth: 620, marginBottom: 52 }}>
        <Eyebrow>Everything in one place</Eyebrow>
        <h2 className="sec-title" style={{ fontSize: 40, fontWeight: 600, letterSpacing: '-.03em', lineHeight: 1.1, color: 'var(--fg)' }}>One account for every kind of money move</h2>
      </div>
      <div className="feat-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 0, border: '1px solid var(--border)', background: 'var(--border)' }}>
        {feats.map((f, i) => {
          const I = f.icon;
          return (
            <div key={i} style={{ background: 'var(--surface)', padding: 32 }}>
              <div style={{ width: 48, height: 48, background: 'var(--primary-soft)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}><I size={24} /></div>
              <h3 style={{ fontSize: 18, fontWeight: 700, letterSpacing: '-.01em', marginBottom: 8 }}>{f.title}</h3>
              <p style={{ fontSize: 14.5, color: 'var(--mono-500)', lineHeight: 1.6 }}>{f.body}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

/* ── Product split ───────────────────────────────────────────────────────── */
function ProductSplit() {
  const points = ['Open an account in under 2 minutes', 'Free transfers to any Nigerian bank', 'Set savings goals that lock and earn', 'Spending caps and instant card freeze'];
  return (
    <Section bg="var(--surface)">
      <div className="split-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
        <div>
          <Eyebrow>For individuals</Eyebrow>
          <h2 className="sec-title" style={{ fontSize: 38, fontWeight: 600, letterSpacing: '-.03em', lineHeight: 1.12, color: 'var(--fg)', marginBottom: 18 }}>Your whole financial life, in your pocket</h2>
          <p style={{ fontSize: 16.5, color: 'var(--mono-500)', lineHeight: 1.6, marginBottom: 28 }}>Fyscal brings spending, saving, and sending into one clean app — so you always know where you stand.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 34 }}>
            {points.map(p => (
              <div key={p} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 24, height: 24, background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><SIcons.check size={15} stroke="#fff" sw={2.5} /></div>
                <span style={{ fontSize: 15.5, color: 'var(--fg)', fontWeight: 500 }}>{p}</span>
              </div>
            ))}
          </div>
          <WBtn size="lg">Get the app <SIcons.arrowR size={18} /></WBtn>
        </div>
        <div className="split-panel" style={{ background: 'var(--gradient-brand)', padding: 48, minHeight: 420, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 18, color: '#fff' }}>
          <div style={{ background: 'rgba(255,255,255,.12)', border: '1px solid rgba(255,255,255,.2)', padding: 22 }}>
            <div style={{ fontSize: 12, opacity: .7, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.08em' }}>Savings goal · Japa Fund</div>
            <div style={{ font: '700 28px var(--font-mono)', margin: '8px 0' }}>₦1,840,000 <span style={{ fontSize: 15, opacity: .6 }}>/ ₦2,500,000</span></div>
            <div style={{ height: 8, background: 'rgba(255,255,255,.2)', marginTop: 6 }}><div style={{ width: '74%', height: '100%', background: 'var(--surface)' }} /></div>
          </div>
          <div style={{ display: 'flex', gap: 16 }}>
            <div style={{ flex: 1, background: 'rgba(255,255,255,.12)', border: '1px solid rgba(255,255,255,.2)', padding: 18 }}>
              <div style={{ fontSize: 11, opacity: .7, fontWeight: 600 }}>This week</div>
              <div style={{ font: '700 20px var(--font-mono)', marginTop: 4 }}>−₦68,000</div>
            </div>
            <div style={{ flex: 1, background: 'rgba(255,255,255,.12)', border: '1px solid rgba(255,255,255,.2)', padding: 18 }}>
              <div style={{ fontSize: 11, opacity: .7, fontWeight: 600 }}>Earned</div>
              <div style={{ font: '700 20px var(--font-mono)', marginTop: 4 }}>+₦12,400</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ── Stats band ──────────────────────────────────────────────────────────── */
function Stats() {
  const stats = [['2.4M+', 'Accounts opened'], ['₦480B', 'Processed in 2025'], ['99.99%', 'Uptime'], ['18', 'African markets']];
  return (
    <Section bg="var(--ink)" pad="64px 32px">
      <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }}>
        {stats.map(([v, l], i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div style={{ font: '700 44px var(--font-mono)', color: '#fff', letterSpacing: '-.03em' }}>{v}</div>
            <div style={{ fontSize: 14, color: 'rgba(255,255,255,.55)', marginTop: 6 }}>{l}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ── Pricing ─────────────────────────────────────────────────────────────── */
function Pricing({ onCta }) {
  const tiers = [
    { name: 'Personal', price: '₦0', per: '/forever', desc: 'Everything you need to manage money day to day.', feats: ['Free bank transfers', 'Virtual dollar card', 'Savings goals', 'Spending insights'], cta: 'Open account', highlight: false },
    { name: 'Premium', price: '₦2,500', per: '/month', desc: 'For people who move serious money.', feats: ['Everything in Personal', 'Higher transfer limits', 'Airport lounge access', 'Priority support', '2 physical cards'], cta: 'Start free trial', highlight: true },
    { name: 'Business', price: 'Custom', per: '', desc: 'Payments, payroll, and treasury for teams.', feats: ['Payments API access', 'Multi-user roles', 'Bulk payouts & payroll', 'Dedicated manager'], cta: 'Contact sales', highlight: false },
  ];
  return (
    <Section bg="var(--surface)">
      <div style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto 52px' }}>
        <Eyebrow>Pricing</Eyebrow>
        <h2 className="sec-title" style={{ fontSize: 40, fontWeight: 600, letterSpacing: '-.03em', lineHeight: 1.1, color: 'var(--fg)' }}>Simple plans, no surprises</h2>
      </div>
      <div className="price-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
        {tiers.map(t => (
          <div key={t.name} style={{ border: t.highlight ? '1.5px solid var(--primary)' : '1px solid var(--border)', background: t.highlight ? 'var(--ink)' : 'var(--surface)', color: t.highlight ? '#fff' : 'var(--fg)', padding: 32, position: 'relative', display: 'flex', flexDirection: 'column' }}>
            {t.highlight && <div style={{ position: 'absolute', top: 0, right: 0, background: 'var(--primary)', color: '#fff', fontSize: 11, fontWeight: 700, padding: '5px 12px', textTransform: 'uppercase', letterSpacing: '.06em' }}>Popular</div>}
            <div style={{ fontSize: 14, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.06em', color: t.highlight ? 'rgba(255,255,255,.6)' : 'var(--mono-300)' }}>{t.name}</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, margin: '14px 0 6px' }}>
              <span style={{ font: '700 38px var(--font-mono)', letterSpacing: '-.03em' }}>{t.price}</span>
              <span style={{ fontSize: 14, color: t.highlight ? 'rgba(255,255,255,.5)' : 'var(--mono-300)' }}>{t.per}</span>
            </div>
            <p style={{ fontSize: 13.5, color: t.highlight ? 'rgba(255,255,255,.6)' : 'var(--mono-500)', lineHeight: 1.5, marginBottom: 24, minHeight: 40 }}>{t.desc}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 28, flex: 1 }}>
              {t.feats.map(f => (
                <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13.5 }}>
                  <SIcons.check size={16} stroke={t.highlight ? 'var(--secondary)' : 'var(--primary)'} sw={2.5} />{f}
                </div>
              ))}
            </div>
            <WBtn full variant={t.highlight ? 'light' : 'ghost'} onClick={onCta}>{t.cta}</WBtn>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ── Testimonial ─────────────────────────────────────────────────────────── */
function Testimonial() {
  return (
    <Section bg="var(--surface-soft)" pad="80px 32px">
      <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
        <div style={{ display: 'flex', gap: 3, justifyContent: 'center', color: 'var(--warning)', marginBottom: 24 }}>{[0,1,2,3,4].map(i => <SIcons.star key={i} size={20} fill="var(--warning)" sw={0} />)}</div>
        <p className="quote" style={{ fontSize: 30, fontWeight: 500, lineHeight: 1.35, letterSpacing: '-.02em', color: 'var(--fg)' }}>
          “We switched our entire payroll to Fyscal and cut payout time from two days to ten minutes. The API was live in an afternoon.”
        </p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, marginTop: 32 }}>
          <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--gradient-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700 }}>NO</div>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: 15, fontWeight: 700 }}>Ngozi Okonkwo</div>
            <div style={{ fontSize: 13, color: 'var(--mono-500)' }}>Head of Finance, Carbon</div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ── Final CTA ───────────────────────────────────────────────────────────── */
function FinalCTA({ onCta }) {
  return (
    <section style={{ background: 'var(--gradient-brand)', padding: '88px 32px', color: '#fff' }}>
      <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
        <h2 className="cta-title" style={{ fontSize: 46, fontWeight: 600, letterSpacing: '-.03em', lineHeight: 1.08 }}>Ready to move your money forward?</h2>
        <p style={{ fontSize: 18, opacity: .8, lineHeight: 1.6, marginTop: 18, maxWidth: 480, marginInline: 'auto' }}>Open a free Fyscal account in two minutes. No paperwork, no minimum balance.</p>
        <div className="cta-btns" style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 32 }}>
          <WBtn size="lg" variant="light" onClick={onCta}>Open free account</WBtn>
          <WBtn size="lg" variant="outlineLight">Book a demo</WBtn>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Section, Eyebrow, Hero, LogoStrip, Features, ProductSplit, Stats, Pricing, Testimonial, FinalCTA });
