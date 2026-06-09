import React from 'react';
import { Bolt, Shield, Card, Chart, Globe, Api, Check, Star, ArrowR } from './Icons';
import { FyscalLogo } from './Icons';

function Section({
  children,
  bg = 'var(--surface)',
  pad = '88px 32px',
  style,
}: {
  children: React.ReactNode;
  bg?: string;
  pad?: string;
  style?: React.CSSProperties;
}) {
  return (
    <section className="sec" style={{ background: bg, padding: pad, ...style }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>{children}</div>
    </section>
  );
}

function Eyebrow({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 700,
      textTransform: 'uppercase', letterSpacing: '.12em',
      color: light ? 'rgba(255,255,255,.7)' : 'var(--primary)', marginBottom: 18
    }}>
      <span style={{ width: 24, height: 2, background: light ? 'rgba(255,255,255,.5)' : 'var(--primary)' }} />
      {children}
    </div>
  );
}

export function LogoStrip() {
  const logos = ['Paystack', 'Flutterwave', 'Interswitch', 'Kuda', 'Carbon', 'PiggyVest'];
  return (
    <Section bg="var(--surface)" pad="44px 32px">
      <div style={{ textAlign: 'center', fontSize: 12.5, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.1em', color: 'var(--mono-300)', marginBottom: 28 }}>
        Trusted by teams across the continent
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 24 }}>
        {logos.map(l => (
          <span key={l} style={{ fontSize: 22, fontWeight: 800, color: 'var(--mono-200)', letterSpacing: '-.02em' }}>{l}</span>
        ))}
      </div>
    </Section>
  );
}

export function Features() {
  const feats = [
    { icon: Bolt, title: 'Instant transfers', body: 'Money lands in seconds, 24/7 — to any bank or Fyscal account, at home or abroad.' },
    { icon: Shield, title: 'Bank-grade security', body: 'Biometric login, real-time fraud monitoring, and CBN-licensed deposit protection.' },
    { icon: Card, title: 'Cards that work everywhere', body: 'Virtual and physical cards for online, in-store, and international spend.' },
    { icon: Chart, title: 'Smart insights', body: 'See where every naira goes with automatic categories and weekly summaries.' },
    { icon: Globe, title: 'Multi-currency', body: 'Hold and convert NGN, USD, GBP and EUR at rates you can actually see.' },
    { icon: Api, title: 'Built for developers', body: 'A clean REST API and SDKs to embed payments into your own product in hours.' },
  ];
  return (
    <Section bg="var(--surface-soft)">
      <div style={{ maxWidth: 620, marginBottom: 52 }}>
        <Eyebrow>Everything in one place</Eyebrow>
        <h2 className="sec-title" style={{ fontSize: 40, fontWeight: 600, letterSpacing: '-.03em', lineHeight: 1.1, color: 'var(--fg)' }}>
          One account for every kind of money move
        </h2>
      </div>
      <div
        className="feat-grid"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 0, border: '1px solid var(--border)', background: 'var(--border)' }}
      >
        {feats.map((f, i) => {
          const I = f.icon;
          return (
            <div key={i} style={{ background: 'var(--surface)', padding: 32 }}>
              <div style={{ width: 48, height: 48, background: 'var(--primary-soft)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                <I size={24} />
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700, letterSpacing: '-.01em', marginBottom: 8 }}>{f.title}</h3>
              <p style={{ fontSize: 14.5, color: 'var(--mono-500)', lineHeight: 1.6 }}>{f.body}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

export function ProductSplit() {
  const points = [
    'Open an account in under 2 minutes',
    'Free transfers to any Nigerian bank',
    'Set savings goals that lock and earn',
    'Spending caps and instant card freeze',
  ];
  return (
    <Section bg="var(--surface)">
      <div className="split-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
        <div>
          <Eyebrow>For individuals</Eyebrow>
          <h2 className="sec-title" style={{ fontSize: 38, fontWeight: 600, letterSpacing: '-.03em', lineHeight: 1.12, color: 'var(--fg)', marginBottom: 18 }}>
            Your whole financial life, in your pocket
          </h2>
          <p style={{ fontSize: 16.5, color: 'var(--mono-500)', lineHeight: 1.6, marginBottom: 28 }}>
            Fyscal brings spending, saving, and sending into one clean app — so you always know where you stand.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 34 }}>
            {points.map(p => (
              <div key={p} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 24, height: 24, background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Check size={15} stroke="#fff" sw={2.5} />
                </div>
                <span style={{ fontSize: 15.5, color: 'var(--fg)', fontWeight: 500 }}>{p}</span>
              </div>
            ))}
          </div>
          <button style={{
            padding: '15px 28px', fontSize: 15, fontWeight: 600,
            fontFamily: 'var(--font-body)', borderRadius: 0, cursor: 'pointer',
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'var(--primary)', color: '#fff', border: '1.5px solid var(--primary)'
          }}>
            Get the app <ArrowR size={18} />
          </button>
        </div>
        <div className="split-panel" style={{ background: 'var(--gradient-brand)', padding: 48, minHeight: 420, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 18, color: '#fff' }}>
          <div style={{ background: 'rgba(255,255,255,.12)', border: '1px solid rgba(255,255,255,.2)', padding: 22 }}>
            <div style={{ fontSize: 12, opacity: .7, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.08em' }}>Savings goal · Japa Fund</div>
            <div style={{ font: '700 28px var(--font-mono)', margin: '8px 0' }}>₦1,840,000 <span style={{ fontSize: 15, opacity: .6 }}>/ ₦2,500,000</span></div>
            <div style={{ height: 8, background: 'rgba(255,255,255,.2)', marginTop: 6 }}>
              <div style={{ width: '74%', height: '100%', background: 'var(--surface)' }} />
            </div>
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

export function Stats() {
  const stats: [string, string][] = [
    ['2.4M+', 'Accounts opened'],
    ['₦480B', 'Processed in 2025'],
    ['99.99%', 'Uptime'],
    ['18', 'African markets'],
  ];
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

export function Pricing() {
  const tiers = [
    { name: 'Personal', price: '₦0', per: '/forever', desc: 'Everything you need to manage money day to day.', feats: ['Free bank transfers', 'Virtual dollar card', 'Savings goals', 'Spending insights'], cta: 'Open account', highlight: false },
    { name: 'Premium', price: '₦2,500', per: '/month', desc: 'For people who move serious money.', feats: ['Everything in Personal', 'Higher transfer limits', 'Airport lounge access', 'Priority support', '2 physical cards'], cta: 'Start free trial', highlight: true },
    { name: 'Business', price: 'Custom', per: '', desc: 'Payments, payroll, and treasury for teams.', feats: ['Payments API access', 'Multi-user roles', 'Bulk payouts & payroll', 'Dedicated manager'], cta: 'Contact sales', highlight: false },
  ];
  return (
    <Section bg="var(--surface)">
      <div style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto 52px' }}>
        <Eyebrow>Pricing</Eyebrow>
        <h2 className="sec-title" style={{ fontSize: 40, fontWeight: 600, letterSpacing: '-.03em', lineHeight: 1.1, color: 'var(--fg)' }}>
          Simple plans, no surprises
        </h2>
      </div>
      <div className="price-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
        {tiers.map(t => (
          <div key={t.name} style={{
            border: t.highlight ? '1.5px solid var(--primary)' : '1px solid var(--border)',
            background: t.highlight ? 'var(--ink)' : 'var(--surface)',
            color: t.highlight ? '#fff' : 'var(--fg)',
            padding: 32, position: 'relative', display: 'flex', flexDirection: 'column'
          }}>
            {t.highlight && (
              <div style={{
                position: 'absolute', top: 0, right: 0,
                background: 'var(--primary)', color: '#fff',
                fontSize: 11, fontWeight: 700, padding: '5px 12px',
                textTransform: 'uppercase', letterSpacing: '.06em'
              }}>Popular</div>
            )}
            <div style={{ fontSize: 14, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.06em', color: t.highlight ? 'rgba(255,255,255,.6)' : 'var(--mono-300)' }}>{t.name}</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, margin: '14px 0 6px' }}>
              <span style={{ font: '700 38px var(--font-mono)', letterSpacing: '-.03em' }}>{t.price}</span>
              <span style={{ fontSize: 14, color: t.highlight ? 'rgba(255,255,255,.5)' : 'var(--mono-300)' }}>{t.per}</span>
            </div>
            <p style={{ fontSize: 13.5, color: t.highlight ? 'rgba(255,255,255,.6)' : 'var(--mono-500)', lineHeight: 1.5, marginBottom: 24, minHeight: 40 }}>{t.desc}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 28, flex: 1 }}>
              {t.feats.map(f => (
                <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13.5 }}>
                  <Check size={16} stroke={t.highlight ? 'var(--secondary)' : 'var(--primary)'} sw={2.5} />{f}
                </div>
              ))}
            </div>
            <button style={{
              padding: '15px 28px', fontSize: 15, fontWeight: 600, fontFamily: 'var(--font-body)',
              borderRadius: 0, cursor: 'pointer', display: 'inline-flex', alignItems: 'center',
              justifyContent: 'center', gap: 8, width: '100%',
              background: t.highlight ? '#fff' : 'transparent',
              color: t.highlight ? 'var(--primary)' : 'var(--fg)',
              border: t.highlight ? '1.5px solid #fff' : '1.5px solid var(--border-input)',
            }}>
              {t.cta}
            </button>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Testimonial() {
  return (
    <Section bg="var(--surface-soft)" pad="80px 32px">
      <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
        <div style={{ display: 'flex', gap: 3, justifyContent: 'center', color: 'var(--warning)', marginBottom: 24 }}>
          {[0, 1, 2, 3, 4].map(i => (
            <Star key={i} size={20} fill="var(--warning)" sw={0} />
          ))}
        </div>
        <p className="quote" style={{ fontSize: 30, fontWeight: 500, lineHeight: 1.35, letterSpacing: '-.02em', color: 'var(--fg)' }}>
          &ldquo;We switched our entire payroll to Fyscal and cut payout time from two days to ten minutes. The API was live in an afternoon.&rdquo;
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

export function FinalCTA() {
  return (
    <section style={{ background: 'var(--gradient-brand)', padding: '88px 32px', color: '#fff' }}>
      <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
        <h2 className="cta-title" style={{ fontSize: 46, fontWeight: 600, letterSpacing: '-.03em', lineHeight: 1.08 }}>
          Ready to move your money forward?
        </h2>
        <p style={{ fontSize: 18, opacity: .8, lineHeight: 1.6, marginTop: 18, maxWidth: 480, marginInline: 'auto' }}>
          Open a free Fyscal account in two minutes. No paperwork, no minimum balance.
        </p>
        <div className="cta-btns" style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 32 }}>
          <button style={{
            padding: '15px 28px', fontSize: 15, fontWeight: 600,
            fontFamily: 'var(--font-body)', borderRadius: 0, cursor: 'pointer',
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#fff', color: 'var(--primary)', border: '1.5px solid #fff'
          }}>
            Open free account
          </button>
          <button style={{
            padding: '15px 28px', fontSize: 15, fontWeight: 600,
            fontFamily: 'var(--font-body)', borderRadius: 0, cursor: 'pointer',
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'transparent', color: '#fff', border: '1.5px solid rgba(255,255,255,.5)'
          }}>
            Book a demo
          </button>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const cols = [
    { h: 'Personal', items: ['Send money', 'Pay bills', 'Cards', 'Savings', 'Rewards'] },
    { h: 'Business', items: ['Payments API', 'Payroll', 'Invoicing', 'Treasury'] },
    { h: 'Developers', items: ['Documentation', 'API reference', 'Status', 'Changelog'] },
    { h: 'Company', items: ['About', 'Careers', 'Press', 'Contact'] },
  ];
  return (
    <footer style={{ background: 'var(--ink)', color: '#fff', padding: '64px 32px 40px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '1.6fr repeat(4, 1fr)', gap: 40, paddingBottom: 48, borderBottom: '1px solid rgba(255,255,255,.12)' }}>
          <div>
            <FyscalLogo height={22} variant="white" />
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,.55)', lineHeight: 1.6, marginTop: 18, maxWidth: 240 }}>
              The modern money platform for Africa — send, spend, and grow in one place.
            </p>
            <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
              {['𝕏', 'in', 'f', '◎'].map(s => (
                <div key={s} style={{
                  width: 34, height: 34, border: '1px solid rgba(255,255,255,.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 13, color: 'rgba(255,255,255,.7)', cursor: 'pointer'
                }}>{s}</div>
              ))}
            </div>
          </div>
          {cols.map(c => (
            <div key={c.h}>
              <div style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.08em', color: 'rgba(255,255,255,.45)', marginBottom: 16 }}>{c.h}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
                {c.items.map(i => (
                  <a key={i} href="#" style={{ fontSize: 13.5, color: 'rgba(255,255,255,.75)', textDecoration: 'none' }}>{i}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="footer-bottom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 28, flexWrap: 'wrap', gap: 12 }}>
          <span style={{ fontSize: 12.5, color: 'rgba(255,255,255,.45)' }}>© 2026 Fyscal Technologies. Licensed by the Central Bank of Nigeria.</span>
          <div style={{ display: 'flex', gap: 22 }}>
            {['Privacy', 'Terms', 'Security', 'Cookies'].map(l => (
              <a key={l} href="#" style={{ fontSize: 12.5, color: 'rgba(255,255,255,.55)', textDecoration: 'none' }}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
