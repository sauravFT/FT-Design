/* Fyscal Website UI Kit — Containers, Data-interaction, Mobile controls + full
   page Sections. Depends on Library.jsx (UBtn, Badge, etc) + Icons.jsx. */
const { useState: uS2 } = React;

/* ════ CONTAINERS ══════════════════════════════════════════════════════════ */
function Panel({ title = 'Account summary', children }) {
  return (
    <div style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 18px', borderBottom: '1px solid var(--border)' }}>
        <span style={{ fontSize: 14, fontWeight: 700 }}>{title}</span>
        <SIcons.dots size={18} stroke="var(--mono-400)" />
      </div>
      <div style={{ padding: 18 }}>{children || <div style={{ fontSize: 13.5, color: 'var(--mono-500)', lineHeight: 1.6 }}>Panels group related content under a titled header with an optional action menu.</div>}</div>
    </div>
  );
}

function Modal({ onClose }) {
  return (
    <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,16,40,.45)', display: 'grid', placeItems: 'center', zIndex: 30, padding: 20 }} onClick={onClose}>
      <div style={{ width: '100%', maxWidth: 380, background: 'var(--surface)', boxShadow: 'var(--shadow-lg)' }} onClick={e => e.stopPropagation()}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', borderBottom: '1px solid var(--border)' }}>
          <span style={{ fontSize: 15, fontWeight: 700 }}>Confirm transfer</span>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><SIcons.x size={18} stroke="var(--mono-500)" /></button>
        </div>
        <div style={{ padding: 20, fontSize: 14, color: 'var(--mono-600)', lineHeight: 1.6 }}>You're sending <strong style={{ color: 'var(--fg)' }}>₦50,000</strong> to James K. This can't be undone.</div>
        <div style={{ display: 'flex', gap: 10, padding: '0 20px 20px' }}>
          <UBtn variant="ghost" full onClick={onClose}>Cancel</UBtn>
          <UBtn full onClick={onClose}>Send ₦50,000</UBtn>
        </div>
      </div>
    </div>
  );
}

function Drawer({ onClose }) {
  const items = ['Dashboard', 'Payments', 'Cards', 'Savings', 'Settings'];
  return (
    <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,16,40,.45)', zIndex: 30, display: 'flex' }} onClick={onClose}>
      <div style={{ width: 250, height: '100%', background: 'var(--surface)', padding: '20px 0' }} onClick={e => e.stopPropagation()}>
        <div style={{ padding: '0 20px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <FyscalLogo height={18} />
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><SIcons.x size={18} stroke="var(--mono-500)" /></button>
        </div>
        {items.map((it, i) => <div key={it} style={{ padding: '13px 20px', fontSize: 15, fontWeight: i === 0 ? 600 : 500, color: i === 0 ? 'var(--primary)' : 'var(--fg)', background: i === 0 ? 'var(--primary-soft)' : 'transparent' }}>{it}</div>)}
      </div>
    </div>
  );
}

function GridDemo() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(90px,1fr))', gap: 8 }}>
      {Array.from({ length: 8 }).map((_, i) => <div key={i} style={{ aspectRatio: '1', background: i % 2 ? 'var(--primary-soft)' : 'var(--surface-soft)', border: '1px solid var(--border)', display: 'grid', placeItems: 'center', fontSize: 12, fontWeight: 600, color: 'var(--mono-400)', fontFamily: 'var(--font-mono)' }}>{i + 1}</div>)}
    </div>
  );
}

/* ════ DATA INTERACTION ════════════════════════════════════════════════════ */
function FilterSortBar() {
  const chips = ['All', 'Credit', 'Debit', 'Pending'];
  const [a, setA] = uS2(0);
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
      <div style={{ display: 'flex', gap: 6 }}>
        {chips.map((c, i) => <button key={c} onClick={() => setA(i)} style={{ padding: '6px 13px', fontSize: 12.5, fontWeight: 600, fontFamily: 'var(--font-body)', borderRadius: 9999, cursor: 'pointer', border: `1px solid ${a === i ? 'var(--primary)' : 'var(--border-input)'}`, background: a === i ? 'var(--primary)' : '#fff', color: a === i ? '#fff' : 'var(--mono-600)' }}>{c}</button>)}
      </div>
      <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
        <UBtn variant="ghost" size="sm"><SIcons.filter size={15} /> Filter</UBtn>
        <UBtn variant="ghost" size="sm"><SIcons.sort size={15} /> Sort</UBtn>
        <UBtn variant="ghost" size="sm"><SIcons.refresh size={15} /></UBtn>
      </div>
    </div>
  );
}

function Reorder() {
  const [items, setItems] = uS2(['Checking account', 'Savings — Japa Fund', 'Dollar card', 'Bills wallet']);
  const move = (i, d) => { const n = [...items]; const j = i + d; if (j < 0 || j >= n.length) return; [n[i], n[j]] = [n[j], n[i]]; setItems(n); };
  return (
    <div style={{ border: '1px solid var(--border)', background: 'var(--surface)' }}>
      {items.map((it, i) => (
        <div key={it} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '11px 14px', borderTop: i ? '1px solid var(--surface-soft)' : 'none' }}>
          <SIcons.drag size={18} stroke="var(--mono-300)" />
          <span style={{ flex: 1, fontSize: 13.5, fontWeight: 500 }}>{it}</span>
          <button onClick={() => move(i, -1)} style={{ border: 'none', background: 'none', cursor: 'pointer', padding: 2 }}><SIcons.chevD size={16} stroke="var(--mono-400)" style={{ transform: 'rotate(180deg)' }} /></button>
          <button onClick={() => move(i, 1)} style={{ border: 'none', background: 'none', cursor: 'pointer', padding: 2 }}><SIcons.chevD size={16} stroke="var(--mono-400)" /></button>
        </div>
      ))}
    </div>
  );
}

function InfiniteScroll() {
  const [n, setN] = uS2(4);
  const [loading, setLoading] = uS2(false);
  const more = () => { setLoading(true); setTimeout(() => { setN(x => x + 3); setLoading(false); }, 700); };
  return (
    <div>
      <div style={{ border: '1px solid var(--border)', background: 'var(--surface)', maxHeight: 220, overflowY: 'auto' }}>
        {Array.from({ length: n }).map((_, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '11px 14px', borderTop: i ? '1px solid var(--surface-soft)' : 'none' }}>
            <Avatar initials={'U' + (i + 1)} size={32} tint={i % 2 ? '#0053ff' : '#352eff'} />
            <div style={{ flex: 1, fontSize: 13.5, fontWeight: 500 }}>Transaction #{1000 + i}</div>
            <span style={{ font: '600 12.5px var(--font-mono)', color: 'var(--mono-500)' }}>₦{((i + 1) * 12).toLocaleString()}k</span>
          </div>
        ))}
        {loading && <div style={{ display: 'grid', placeItems: 'center', padding: 14 }}><Spinner size={22} /></div>}
      </div>
      <div style={{ marginTop: 10 }}><UBtn variant="ghost" size="sm" full onClick={more}>Load more</UBtn></div>
    </div>
  );
}

/* ════ PAGE SECTIONS ═══════════════════════════════════════════════════════ */
function AnnouncementBar() {
  return (
    <div style={{ background: 'var(--ink)', color: '#fff', padding: '10px 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, fontSize: 13, flexWrap: 'wrap', textAlign: 'center' }}>
      <Badge kind="primary">New</Badge>
      <span style={{ opacity: .9 }}>Instant cross-border transfers are live in 18 markets.</span>
      <a href="#" style={{ color: '#ff8aff', fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 4 }}>Learn more <SIcons.arrowR size={13} /></a>
    </div>
  );
}

function IntroSection() {
  return (
    <section style={{ padding: '56px 28px', textAlign: 'center', background: '#352eff', color: '#fff' }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <span style={{ fontSize: 11, fontWeight: 700, padding: '4px 11px', borderRadius: 9999, background: 'rgba(255,255,255,.18)', color: '#fff', letterSpacing: '.04em' }}>Above the fold</span>
        <h1 style={{ fontSize: 'clamp(32px,6vw,52px)', fontWeight: 600, letterSpacing: '-.035em', lineHeight: 1.05, margin: '18px 0 0', color: '#fff' }}>Banking that moves at the speed of you</h1>
        <p style={{ fontSize: 'clamp(15px,2.5vw,18px)', color: 'rgba(255,255,255,.82)', lineHeight: 1.6, margin: '16px auto 0', maxWidth: 480 }}>Send, spend and grow your money in one account built for how Africa moves.</p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 28, flexWrap: 'wrap' }}>
          <UBtn size="lg" variant="light">Open free account <SIcons.arrowR size={18} /></UBtn>
          <UBtn size="lg" variant="outlineLight">Watch demo</UBtn>
        </div>
      </div>
    </section>
  );
}

function FeatureGridSection() {
  const f = [[SIcons.bolt, 'Instant transfers'], [SIcons.shield, 'Bank-grade security'], [SIcons.card, 'Cards everywhere'], [SIcons.chart, 'Smart insights'], [SIcons.globe, 'Multi-currency'], [SIcons.api, 'Developer API']];
  return (
    <section style={{ padding: '24px 0' }}>
      <h2 style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-.02em', marginBottom: 16 }}>Everything in one place</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: 14 }}>
        {f.map(([I, t], i) => <FeatureCard key={i} icon={I} title={t} body="A short supporting line that explains the benefit in plain language." />)}
      </div>
    </section>
  );
}

function SearchFilterSection() {
  return (
    <section style={{ padding: '24px 0' }}>
      <h2 style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-.02em', marginBottom: 14 }}>Find anything</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <SearchBar />
        <FilterSortBar />
        <div style={{ ...card, padding: '6px 18px' }}>
          <ListItem title="Salary — GTBank" meta="Today" amount="+₦350,000" credit />
          <ListItem title="Airtime — MTN" meta="Today" amount="−₦2,000" />
          <ListItem title="James K." meta="Yesterday" amount="−₦20,000" />
        </div>
      </div>
    </section>
  );
}

function ContentSection() {
  return (
    <section style={{ padding: '24px 0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 28, alignItems: 'center' }}>
      <div>
        <Badge kind="neutral">Story</Badge>
        <h2 style={{ fontSize: 26, fontWeight: 700, letterSpacing: '-.02em', margin: '12px 0' }}>Your whole financial life, in your pocket</h2>
        <p style={{ fontSize: 15, color: 'var(--mono-500)', lineHeight: 1.65, marginBottom: 16 }}>Long-form content blocks carry articles, product detail, and landing-page storytelling. Body copy stays at a comfortable measure for reading on any screen.</p>
        <a href="#" style={{ color: 'var(--primary)', fontWeight: 600, fontSize: 14, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>Read the story <SIcons.arrowR size={16} /></a>
      </div>
      <MediaBlock />
    </section>
  );
}

function FormSection() {
  return (
    <section style={{ padding: '24px 0', maxWidth: 460 }}>
      <h2 style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-.02em', marginBottom: 4 }}>Create your account</h2>
      <p style={{ fontSize: 14, color: 'var(--mono-500)', marginBottom: 18 }}>Two minutes, no paperwork.</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <TextInput label="Full name" placeholder="Jane Doe" />
        <TextInput label="Email" placeholder="jane@email.com" />
        <Select label="Country" />
        <Checks label="Preferences" options={['Email receipts', 'Product updates']} />
        <UBtn full size="lg">Open account <SIcons.arrowR size={18} /></UBtn>
      </div>
    </section>
  );
}

function RelatedLinks() {
  const links = [['Pricing', 'Compare plans and fees'], ['Developer API', 'Build with Fyscal'], ['Security', 'How we protect you'], ['Help center', 'Guides and FAQs']];
  return (
    <section style={{ padding: '24px 0' }}>
      <h2 style={{ fontSize: 18, fontWeight: 700, letterSpacing: '-.01em', marginBottom: 14 }}>Keep exploring</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: 12 }}>
        {links.map(([t, d]) => (
          <a key={t} href="#" style={{ ...card, textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
            <span><span style={{ display: 'block', fontSize: 14, fontWeight: 700, color: 'var(--fg)' }}>{t}</span><span style={{ fontSize: 12.5, color: 'var(--mono-500)' }}>{d}</span></span>
            <SIcons.chevR size={18} stroke="var(--mono-300)" />
          </a>
        ))}
      </div>
    </section>
  );
}

/* ════ UTILITY STRIP (system state + quick links) ═════════════════════════ */
function UtilityStrip() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '8px 16px', background: 'var(--surface-soft)', borderBottom: '1px solid var(--border)', fontSize: 12.5, flexWrap: 'wrap' }}>
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--success)', fontWeight: 600 }}><span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--success)' }} />All systems operational</span>
      <span style={{ color: 'var(--mono-400)' }}>·</span>
      <a href="#" style={{ color: 'var(--mono-600)', textDecoration: 'none', fontWeight: 500 }}>Status</a>
      <a href="#" style={{ color: 'var(--mono-600)', textDecoration: 'none', fontWeight: 500 }}>Help</a>
      <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 14 }}>
        <a href="#" style={{ color: 'var(--mono-600)', textDecoration: 'none', fontWeight: 500 }}>NGN ₦</a>
        <a href="#" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 600 }}>Sign in</a>
      </div>
    </div>
  );
}

/* ════ CONTENT-DISPLAY: card + plain list ═════════════════════════════════ */
function ContentCard() {
  return (
    <div style={{ ...card, padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <div style={{ aspectRatio: '16/10', background: 'var(--gradient-brand)', position: 'relative' }}>
        <span style={{ position: 'absolute', top: 10, left: 10 }}><Badge kind="neutral">Guide</Badge></span>
      </div>
      <div style={{ padding: 16 }}>
        <div style={{ fontSize: 15, fontWeight: 700, letterSpacing: '-.01em' }}>Set up your first transfer</div>
        <div style={{ fontSize: 13, color: 'var(--mono-500)', lineHeight: 1.55, margin: '6px 0 12px' }}>A 3-minute walkthrough of sending money to any bank.</div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 12, color: 'var(--mono-400)' }}>Mar 12 · 3 min read</span>
          <a href="#" style={{ color: 'var(--primary)', fontWeight: 600, fontSize: 13, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 4 }}>Read <SIcons.arrowR size={14} /></a>
        </div>
      </div>
    </div>
  );
}
function PlainList() {
  const rows = [['Accounts', '3 linked'], ['Cards', '2 active'], ['Beneficiaries', '14 saved'], ['Standing orders', '5 scheduled']];
  return (
    <div style={{ border: '1px solid var(--border)', background: 'var(--surface)' }}>
      {rows.map(([t, m], i) => (
        <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', borderTop: i ? '1px solid var(--surface-soft)' : 'none' }}>
          <span style={{ flex: 1, fontSize: 13.5, fontWeight: 500 }}>{t}</span>
          <span style={{ fontSize: 12.5, color: 'var(--mono-400)' }}>{m}</span>
          <SIcons.chevR size={16} stroke="var(--mono-300)" />
        </div>
      ))}
    </div>
  );
}

/* ════ FORM TYPES: signup · lead capture · checkout · settings · onboarding ═ */
const FormCard = ({ title, sub, children, cta }) => (
  <div style={{ ...card, display: 'flex', flexDirection: 'column', gap: 14 }}>
    <div><div style={{ fontSize: 15, fontWeight: 700, letterSpacing: '-.01em' }}>{title}</div>{sub && <div style={{ fontSize: 12.5, color: 'var(--mono-500)', marginTop: 3 }}>{sub}</div>}</div>
    {children}
    {cta && <UBtn full>{cta}</UBtn>}
  </div>
);

function SignupForm() {
  return (
    <FormCard title="Create your account" sub="Two minutes, no paperwork." cta="Open account">
      <TextInput label="Full name" placeholder="Jane Doe" />
      <TextInput label="Email" placeholder="jane@email.com" />
      <TextInput label="Password" placeholder="••••••••" />
      <Checks label="" options={['I agree to the Terms & Privacy Policy']} />
    </FormCard>
  );
}
function LeadCaptureForm() {
  return (
    <FormCard title="Talk to sales" sub="We'll reach out within one business day." cta="Request a demo">
      <TextInput label="Work email" placeholder="you@company.com" />
      <Select label="Company size" options={['1–10', '11–50', '51–200', '200+']} />
      <Select label="Use case" options={['Payments', 'Payroll', 'Treasury', 'Cards']} />
    </FormCard>
  );
}
function CheckoutForm() {
  return (
    <FormCard title="Checkout" sub="Premium plan · ₦2,500 / month" cta="Pay ₦2,500">
      <TextInput label="Card number" placeholder="4242 4242 4242 4242" />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <TextInput label="Expiry" placeholder="MM / YY" />
        <TextInput label="CVC" placeholder="123" />
      </div>
      <Toggle label="Save card for future payments" def={true} />
    </FormCard>
  );
}
function SettingsForm() {
  return (
    <FormCard title="Account settings" sub="Manage profile and preferences." cta="Save changes">
      <TextInput label="Display name" placeholder="Alex Kim" />
      <Select label="Language" options={['English', 'Français', 'Yorùbá', 'Hausa']} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <Toggle label="Two-factor authentication" def={true} />
        <Toggle label="Email receipts" def={false} />
      </div>
    </FormCard>
  );
}
function OnboardingForm() {
  return (
    <FormCard title="Welcome — step 2 of 4" cta="Continue">
      <Progress v={50} />
      <Radios label="What brings you to Fyscal?" options={['Personal banking', 'Run a business', 'Build with the API']} />
      <Select label="Country of residence" />
    </FormCard>
  );
}

Object.assign(window, {
  Panel, Modal, Drawer, GridDemo, FilterSortBar, Reorder, InfiniteScroll,
  AnnouncementBar, IntroSection, FeatureGridSection, SearchFilterSection, ContentSection, FormSection, RelatedLinks,
  UtilityStrip, ContentCard, PlainList, FormCard, SignupForm, LeadCaptureForm, CheckoutForm, SettingsForm, OnboardingForm,
});
