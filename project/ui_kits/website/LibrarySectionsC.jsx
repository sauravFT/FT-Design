/* Fyscal Website UI Kit — Section layouts C (reference-matched).
   Testimonials, newsletter band, AI-model feature grid, bento feature grid.
   Theme-aware (var(--surface)/--fg/--border). Depends on Library.jsx + Icons.jsx. */
const { useState: uS6 } = React;
const cwrap = { background: 'var(--surface)', border: '1px solid var(--border)' };

const Eye = ({ icon, children }) => (
  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '7px 15px', borderRadius: 9999, background: 'var(--surface)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)', fontSize: 13, fontWeight: 600, color: 'var(--fg)' }}>
    {icon}{children}
  </span>
);
const Stars = ({ n = 4, size = 15 }) => (
  <div style={{ display: 'flex', gap: 3 }}>{[0, 1, 2, 3, 4].map(i => <SIcons.star key={i} size={size} stroke={i < n ? 'var(--primary)' : 'var(--mono-200)'} fill={i < n ? 'var(--primary)' : 'none'} sw={i < n ? 0 : 1.5} />)}</div>
);

/* 1 — Testimonials: featured quote + image, then 3 rating cards */
function TestimonialsSection() {
  const cards = [
    ['We needed intelligent automation — and they nailed it. Every step was collaborative, transparent, and focused on delivering the best outcome for us.', 'Brendan', 'Head of Operations', '#352eff'],
    ['Their team helped us identify key opportunities for AI, then built tools that boosted both our speed and accuracy. We\u2019re already seeing results.', 'Lanai', 'Head of Marketing', '#0053ff'],
    ['From ideation to final delivery, they were incredibly proactive and sharp. Our new AI-powered assistant reduced manual work and improved output.', 'Caren', 'Head of Product', '#7b2ff7'],
  ];
  return (
    <section style={{ padding: '8px 0' }}>
      <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 32px' }}>
        <Eye icon={<SIcons.star size={13} fill="var(--primary)" stroke="var(--primary)" sw={0} />}>Testimonials</Eye>
        <h2 style={{ fontSize: 'clamp(30px,5vw,48px)', fontWeight: 600, letterSpacing: '-.03em', lineHeight: 1.05, margin: '16px 0 10px', color: 'var(--fg)' }}>What Our Clients Say</h2>
        <p style={{ fontSize: 15.5, color: 'var(--mono-500)', lineHeight: 1.6 }}>Join forward-thinking companies that trust Fyscal to transform the way they move money — from instant payouts to automated reconciliation.</p>
      </div>
      {/* featured */}
      <div style={{ ...cwrap, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 0, padding: 16, marginBottom: 22, overflow: 'hidden' }}>
        <div style={{ padding: '24px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ fontSize: 'clamp(20px,2.8vw,26px)', fontWeight: 700, letterSpacing: '-.02em', lineHeight: 1.25, color: 'var(--fg)' }}>“We reduced payout time by 90% and doubled customer satisfaction.”</div>
          <p style={{ fontSize: 14, color: 'var(--mono-500)', lineHeight: 1.6, marginTop: 16, maxWidth: 380 }}>Transfers, bill payments, payroll — Fyscal handled it all from a single dashboard. Our customers get paid faster, and our team stays focused.</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 20 }}><Avatar initials="AO" size={42} /><div><div style={{ fontSize: 14, fontWeight: 700, color: 'var(--fg)' }}>Amara Okafor</div><div style={{ fontSize: 12.5, color: 'var(--mono-500)' }}>CFO, Kano Works</div></div></div>
        </div>
        <div style={{ minHeight: 240, background: 'var(--gradient-brand)', display: 'grid', placeItems: 'center', color: 'rgba(255,255,255,.7)', fontSize: 12.5, fontWeight: 600 }}>
          <div style={{ textAlign: 'center' }}><SIcons.users size={40} stroke="rgba(255,255,255,.8)" /><div style={{ marginTop: 8 }}>Customer photo</div></div>
        </div>
      </div>
      {/* 3 rating cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 16 }}>
        {cards.map(([q, n, r, c]) => (
          <div key={n} style={{ ...cwrap, padding: 22, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Stars n={4} />
            <p style={{ fontSize: 14, color: 'var(--mono-600)', lineHeight: 1.6, flex: 1 }}>{q}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}><Avatar initials={n.slice(0, 2)} size={40} tint={c} /><div><div style={{ fontSize: 14, fontWeight: 700, color: 'var(--fg)' }}>{n}</div><div style={{ fontSize: 12.5, color: 'var(--mono-500)' }}>{r}</div></div></div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* 2 — Newsletter band: soft blue gradient, headline, email + circular arrow */
function NewsletterBand() {
  const [f, setF] = uS6(false);
  return (
    <section style={{ borderRadius: 0, padding: '56px 28px', textAlign: 'center', background: 'linear-gradient(105deg, #c9d8ff 0%, var(--surface) 30%, var(--surface) 70%, #c9d8ff 100%)' }}>
      <h2 style={{ fontSize: 'clamp(28px,4.5vw,44px)', fontWeight: 600, letterSpacing: '-.03em', lineHeight: 1.05, color: 'var(--fg)' }}>Work Smarter &amp; Faster with Fyscal</h2>
      <p style={{ fontSize: 15.5, color: 'var(--mono-500)', lineHeight: 1.6, margin: '14px auto 0', maxWidth: 460 }}>Everything you need to move money in one place. Can't find what you're looking for? Reach out to our support team.</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, justifyContent: 'center', marginTop: 28 }}>
        <div style={{ display: 'flex', alignItems: 'center', flex: 1, maxWidth: 440, height: 56, padding: '0 22px', borderRadius: 9999, background: 'var(--surface)', border: '1px solid ' + (f ? 'var(--primary)' : 'var(--border)'), boxShadow: f ? 'var(--shadow-focus)' : 'var(--shadow-md)' }}>
          <input onFocus={() => setF(true)} onBlur={() => setF(false)} placeholder="Enter your email address" style={{ flex: 1, border: 'none', outline: 'none', background: 'transparent', fontSize: 14.5, fontFamily: 'var(--font-body)', color: 'var(--fg)' }} />
        </div>
        <button style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--primary)', border: 'none', cursor: 'pointer', display: 'grid', placeItems: 'center', boxShadow: '0 8px 20px rgba(53,46,255,.35)' }}><SIcons.arrowR size={20} stroke="#fff" style={{ transform: 'rotate(-45deg)' }} /></button>
      </div>
    </section>
  );
}

/* 3 — AI-style feature grid: 6 cards, icon tile + dots menu + title + body */
function ModelFeatureGrid() {
  const models = [
    ['Instant Transfers', 'Send to any bank in seconds, 24/7. No queues, no cut-off times — money moves the moment you tap.', SIcons.bolt, '#352eff'],
    ['Smart Insights', 'Automatic categories and weekly summaries show exactly where every naira goes, so you stay in control.', SIcons.chart, '#0053ff'],
    ['Bill Payments', 'Airtime, data, electricity, TV and more — settle every bill from one balance in a couple of taps.', SIcons.card, '#1f8a5b'],
    ['Multi-Currency', 'Hold and convert NGN, USD, GBP and EUR at rates you can actually see, with no hidden spread.', SIcons.globe, '#7b2ff7'],
    ['Bank-Grade Security', 'Biometric login, real-time fraud monitoring and CBN-licensed deposit protection on every account.', SIcons.shield, '#ff00ff'],
    ['Developer API', 'A clean REST API and SDKs to embed payments, payouts and KYC into your own product in hours.', SIcons.api, '#0053ff'],
  ];
  return (
    <section style={{ padding: '8px 0' }}>
      <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 32px' }}>
        <Eye icon={<SIcons.bolt size={13} fill="var(--primary)" stroke="var(--primary)" sw={0} />}>Features</Eye>
        <h2 style={{ fontSize: 'clamp(28px,4.5vw,44px)', fontWeight: 600, letterSpacing: '-.03em', lineHeight: 1.05, margin: '16px 0 10px', color: 'var(--fg)' }}>Everything You Need in One Place</h2>
        <p style={{ fontSize: 15.5, color: 'var(--mono-500)', lineHeight: 1.6 }}>Access the full Fyscal money platform through a single, seamless app. Move money, pay bills, and grow your balance — all from one account.</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 16 }}>
        {models.map(([t, d, I, c]) => (
          <div key={t} style={{ ...cwrap, padding: 22, boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--surface)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)', display: 'grid', placeItems: 'center' }}><I size={22} stroke={c} /></div>
              <SIcons.dots size={18} stroke="var(--mono-300)" />
            </div>
            <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: '-.01em', margin: '26px 0 8px', color: 'var(--fg)' }}>{t}</div>
            <p style={{ fontSize: 13.5, color: 'var(--mono-500)', lineHeight: 1.6 }}>{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* 4 — Bento feature grid: mixed tiles with embedded mini-UI motifs */
function BentoFeatures() {
  const tools = [['Send Money', SIcons.swap], ['Pay a Bill', SIcons.card], ['Convert FX', SIcons.refresh]];
  const bars = Array.from({ length: 40 });
  return (
    <section style={{ padding: '8px 0', display: 'flex', flexDirection: 'column', gap: 16 }}>
      {/* row 1 */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 16 }}>
        <div style={{ ...cwrap, padding: 20 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10, marginBottom: 22 }}>
            {tools.map(([t, I]) => (
              <div key={t} style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)', padding: '16px 8px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--surface)', boxShadow: 'var(--shadow-sm)', display: 'grid', placeItems: 'center' }}><I size={18} stroke="var(--primary)" /></div>
                <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--fg)', textAlign: 'center' }}>{t}</span>
                <span style={{ fontSize: 10, fontWeight: 700, color: 'var(--primary)', border: '1px solid var(--border)', padding: '2px 8px', background: 'var(--surface)' }}>Try now</span>
              </div>
            ))}
          </div>
          <div style={{ fontSize: 19, fontWeight: 700, letterSpacing: '-.01em', color: 'var(--fg)' }}>Quick Actions</div>
          <p style={{ fontSize: 13.5, color: 'var(--mono-500)', lineHeight: 1.6, marginTop: 6 }}>Launch the things you do most — send, pay, and convert — straight from your home screen in a single tap.</p>
        </div>
        <div style={{ ...cwrap, padding: 20 }}>
          <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)', height: 130, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, padding: '0 16px', marginBottom: 22 }}>
            {bars.map((_, i) => { const h = 20 + Math.abs(Math.sin(i * 0.5)) * 70; return <div key={i} style={{ width: 3, height: h + '%', background: i % 7 === 0 ? 'var(--primary)' : 'color-mix(in srgb, var(--primary) 35%, transparent)' }} />; })}
          </div>
          <div style={{ fontSize: 19, fontWeight: 700, letterSpacing: '-.01em', color: 'var(--fg)' }}>Voice Transfers</div>
          <p style={{ fontSize: 13.5, color: 'var(--mono-500)', lineHeight: 1.6, marginTop: 6 }}>Send money or check a balance just by speaking — ideal for hands-free banking when you're on the move.</p>
        </div>
      </div>
      {/* row 2 */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 16 }}>
        <div style={{ ...cwrap, padding: 20 }}>
          <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)', padding: 14, marginBottom: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><div style={{ width: 26, height: 26, borderRadius: '50%', background: 'var(--primary)', display: 'grid', placeItems: 'center', flexShrink: 0 }}><SIcons.bolt size={13} stroke="#fff" fill="#fff" /></div><div style={{ fontSize: 11, background: 'var(--surface)', border: '1px solid var(--border)', padding: '6px 9px', color: 'var(--fg)' }}>Your salary just landed 🎉</div></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexDirection: 'row-reverse' }}><Avatar initials="AK" size={26} /><div style={{ fontSize: 11, background: 'var(--primary)', color: '#fff', padding: '6px 9px' }}>Move ₦50k to savings</div></div>
          </div>
          <div style={{ fontSize: 17, fontWeight: 700, letterSpacing: '-.01em', color: 'var(--fg)' }}>Smart Assistant</div>
          <p style={{ fontSize: 13, color: 'var(--mono-500)', lineHeight: 1.55, marginTop: 6 }}>Ask about spending, schedule a transfer, or split a bill in plain language.</p>
        </div>
        <div style={{ ...cwrap, padding: 20 }}>
          <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)', padding: 14, marginBottom: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'var(--surface)', border: '1px solid var(--border)', padding: '7px 10px', marginBottom: 10 }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--mono-400)" strokeWidth="2"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg><div style={{ flex: 1, height: 6, background: 'color-mix(in srgb,var(--primary) 20%,transparent)' }} /></div>
            <div style={{ height: 6, background: 'var(--primary)', width: '70%', marginBottom: 7 }} /><div style={{ height: 6, background: 'color-mix(in srgb,var(--primary) 35%,transparent)', width: '50%' }} />
          </div>
          <div style={{ fontSize: 17, fontWeight: 700, letterSpacing: '-.01em', color: 'var(--fg)' }}>Transaction Search</div>
          <p style={{ fontSize: 13, color: 'var(--mono-500)', lineHeight: 1.55, marginTop: 6 }}>Find any payment instantly by name, amount, date or category.</p>
        </div>
        <div style={{ ...cwrap, padding: 20 }}>
          <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)', height: 118, display: 'grid', placeItems: 'center', marginBottom: 20 }}><div style={{ width: 54, height: 54, borderRadius: 14, background: 'var(--primary)', display: 'grid', placeItems: 'center', boxShadow: '0 8px 20px rgba(53,46,255,.3)' }}><SIcons.card size={26} stroke="#fff" /></div></div>
          <div style={{ fontSize: 17, fontWeight: 700, letterSpacing: '-.01em', color: 'var(--fg)' }}>Virtual Cards</div>
          <p style={{ fontSize: 13, color: 'var(--mono-500)', lineHeight: 1.55, marginTop: 6 }}>Spin up a single-use or recurring card for safer online spend in seconds.</p>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { TestimonialsSection, NewsletterBand, ModelFeatureGrid, BentoFeatures });
