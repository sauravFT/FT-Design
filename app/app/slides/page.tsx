'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

/* ═══════════════════════════════════════════════════════════════════════════
   Fyscal Slide Deck — 22 slides, keyboard navigation, fullscreen 16:9
   ═══════════════════════════════════════════════════════════════════════════ */

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12l4 4L19 6"/>
  </svg>
);

const CrossIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--danger)" strokeWidth="3" strokeLinecap="round">
    <path d="M6 6l12 12M18 6L6 18"/>
  </svg>
);

const SuccessCheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12l4 4L19 6"/>
  </svg>
);

const UserPlaceholder = () => (
  <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
    <circle cx="12" cy="9" r="4"/>
    <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"/>
  </svg>
);

/* ── Inline slide CSS ────────────────────────────────────────────────────── */
const SLIDE_CSS = `
  .deck-wrap { width: 100vw; height: 100vh; background: #06070f; display: flex; align-items: center; justify-content: center; overflow: hidden; position: relative; }
  .deck-stage { position: relative; overflow: hidden; }
  .slide { width: 100%; height: 100%; font-family: var(--font-active); background: var(--surface); color: var(--fg); overflow: hidden; position: absolute; inset: 0; -webkit-font-smoothing: antialiased; }
  .slide * { box-sizing: border-box; border-radius: 0 !important; }
  .s-pad { box-sizing: border-box; padding: 7% 8%; height: 100%; display: flex; flex-direction: column; }
  .s-pad.tight { padding: 6% 7%; }
  .s-center { justify-content: center; align-items: center; text-align: center; }
  .s-fill-h { flex: 1; min-height: 0; }
  .blue-fill { background: #352eff !important; color: #fff !important; }
  .ink-fill { background: #0a0b14 !important; color: #fff !important; }
  .grad-fill { background: linear-gradient(125deg,#352eff 0%,#1b1fae 55%,#0a0b40 100%) !important; color: #fff !important; }
  .soft-fill { background: #f1f3ff !important; }
  .s-eyebrow { display: inline-flex; align-items: center; gap: 12px; font-size: 1.3em; font-weight: 700; letter-spacing: .2em; text-transform: uppercase; color: var(--primary); }
  .s-eyebrow::before { content: ""; width: 40px; height: 2px; background: currentColor; flex-shrink: 0; }
  .s-eyebrow::after { content: ""; width: 11px; height: 11px; background: #ff00ff; display: inline-block; flex-shrink: 0; }
  .s-eyebrow.on-dark { color: rgba(255,255,255,.8); }
  .s-kicker { font-size: 1.3em; font-weight: 700; letter-spacing: .22em; text-transform: uppercase; color: var(--primary); }
  .s-kicker.on-dark { color: rgba(255,255,255,.75); }
  .s-display { font-size: clamp(60px, 9vw, 150px); font-weight: 600; letter-spacing: -.045em; line-height: .92; }
  .s-h-hero { font-size: clamp(50px, 7.5vw, 124px); font-weight: 600; letter-spacing: -.04em; line-height: .96; }
  .s-h1 { font-size: clamp(42px, 5.5vw, 88px); font-weight: 600; letter-spacing: -.035em; line-height: 1.0; }
  .s-h2 { font-size: clamp(30px, 4vw, 62px); font-weight: 600; letter-spacing: -.03em; line-height: 1.05; }
  .s-h3 { font-size: clamp(22px, 2.5vw, 38px); font-weight: 600; letter-spacing: -.02em; line-height: 1.15; }
  .s-lead { font-size: clamp(16px, 2vw, 33px); line-height: 1.5; color: var(--mono-500); font-weight: 400; }
  .s-body { font-size: clamp(14px, 1.6vw, 26px); line-height: 1.55; color: var(--mono-500); }
  .s-small { font-size: clamp(13px, 1.4vw, 24px); line-height: 1.5; color: var(--mono-400); }
  .s-mono { font-family: var(--font-mono); font-variant-numeric: tabular-nums; }
  .s-grad { color: var(--primary); }
  .s-pageno { position: absolute; top: 4%; right: 8%; font: 600 1.1em var(--font-mono); color: var(--mono-300); letter-spacing: .1em; }
  .s-pageno::before { content: ""; width: 11px; height: 11px; background: #ff00ff; display: inline-block; margin-right: 10px; vertical-align: middle; }
  .s-tag-tl { position: absolute; top: 3.5%; left: 8%; font-size: 1.1em; font-weight: 700; letter-spacing: .2em; text-transform: uppercase; color: var(--mono-300); }
  .s-tag-tl::after { content: ""; width: 11px; height: 11px; background: #ff00ff; display: inline-block; margin-left: 12px; vertical-align: middle; }
  .s-wm { position: absolute; top: 3.5%; left: 8%; height: 30px; width: auto; display: block; opacity: .92; }
  .s-foot { display: flex; align-items: center; justify-content: space-between; font-size: 1.1em; color: var(--mono-400); letter-spacing: .01em; margin-top: auto; }
  .s-row { display: flex; gap: 4%; }
  .s-col { flex: 1; min-width: 0; }
  .s-between { justify-content: space-between; }
  .s-items-center { align-items: center; }
  .s-items-end { align-items: flex-end; }
  .s-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 2.5%; }
  .s-grid-3 { display: grid; grid-template-columns: repeat(3,1fr); gap: 2%; }
  .s-grid-4 { display: grid; grid-template-columns: repeat(4,1fr); gap: 1.8%; }
  .s-grid-12 { display: grid; grid-template-columns: repeat(12,1fr); gap: 2%; }
  .s-card { background: var(--surface); box-shadow: inset 0 0 0 1px var(--border); padding: 2.5%; display: flex; flex-direction: column; gap: 1.2%; }
  .s-card.soft { background: #f1f3ff; box-shadow: none; }
  .s-card.accent { box-shadow: inset 0 0 0 2px var(--primary); }
  .s-card.dark { background: #11131f; box-shadow: inset 0 0 0 1px rgba(255,255,255,.1); color: #fff; }
  .s-card h4 { font-size: 1.8em; font-weight: 600; letter-spacing: -.01em; }
  .s-card p { font-size: 1.3em; line-height: 1.5; color: var(--mono-500); }
  .s-card.dark p { color: rgba(255,255,255,.6); }
  .s-topline { height: 4px; width: 64px; background: var(--primary); margin-bottom: 4px; }
  .s-icf { width: 5%; aspect-ratio: 1; display: grid; place-items: center; background: #e8ebff; flex-shrink: 0; }
  .s-icf.lite { background: rgba(255,255,255,.14); }
  .s-icf.line { background: transparent; box-shadow: inset 0 0 0 2px var(--primary); }
  .s-icf.lg { width: 7.5%; }
  .s-metric .n { font: 600 clamp(40px,6.5vw,104px)/.95 var(--font-mono); letter-spacing: -.04em; color: var(--primary); }
  .s-metric .l { font-size: 1.4em; color: var(--mono-500); margin-top: 0.8em; line-height: 1.35; }
  .s-metric .d { font-size: 1.1em; font-weight: 600; color: var(--success); margin-top: 0.5em; font-family: var(--font-mono); }
  .s-bul { display: flex; flex-direction: column; gap: 1.8%; }
  .s-bul li { list-style: none; display: flex; gap: 1.4%; align-items: flex-start; font-size: 1.8em; line-height: 1.42; }
  .s-dot { flex-shrink: 0; width: 2.4%; aspect-ratio: 1; background: var(--primary); color: #fff; display: grid; place-items: center; font: 600 1.15em var(--font-mono); margin-top: 3px; }
  .s-tick { flex-shrink: 0; width: 1.9%; aspect-ratio: 1; display: grid; place-items: center; background: var(--success-soft); margin-top: 3px; }
  .s-cross { flex-shrink: 0; width: 1.9%; aspect-ratio: 1; display: grid; place-items: center; background: var(--danger-soft); margin-top: 3px; }
  .s-agenda-item { display: flex; align-items: baseline; gap: 3%; padding: 2.3% 0; border-bottom: 2px solid var(--border); }
  .s-agenda-item:first-child { border-top: 2px solid var(--border); }
  .s-agenda-item .no { font: 600 2.3em var(--font-mono); color: var(--primary); width: 6%; }
  .s-agenda-item .t { font-size: 2.8em; font-weight: 600; letter-spacing: -.02em; flex: 1; }
  .s-agenda-item .m { font-size: 1.4em; color: var(--mono-400); }
  .s-slot { position: relative; overflow: hidden; background: #eef1ff; display: grid; place-items: center; color: var(--mono-400); }
  .s-slot.blue { background: linear-gradient(135deg,#352eff,#1b1fae); }
  .s-slot.soft { background: #f1f3ff; box-shadow: inset 0 0 0 1px var(--border); }
  .s-ph { display: flex; flex-direction: column; align-items: center; gap: 1em; font-size: 1.4em; font-weight: 600; }
  .s-node { background: var(--surface); box-shadow: inset 0 0 0 2px var(--primary); padding: 1.5% 2%; font-size: 1.6em; font-weight: 600; text-align: center; }
  .s-node.fill { background: var(--primary); color: #fff; box-shadow: none; }
  .s-conn { flex: 1; height: 2px; background: var(--primary); position: relative; align-self: center; min-width: 40px; }
  .s-conn::after { content: ""; position: absolute; right: 0; top: 50%; transform: translateY(-50%); border-left: 12px solid var(--primary); border-top: 8px solid transparent; border-bottom: 8px solid transparent; }
  .s-bars { display: flex; align-items: flex-end; gap: 1.4%; height: 35%; }
  .s-bar { flex: 1; background: var(--primary-soft); position: relative; display: flex; justify-content: center; }
  .s-bar.hi { background: var(--primary); }
  .s-bar-val { position: absolute; top: -2.5em; font: 600 1.5em var(--font-mono); color: var(--fg); white-space: nowrap; }
  .s-bar-lbl { position: absolute; bottom: -2.3em; font-style: normal; font-size: 1.2em; color: var(--mono-400); }
  .s-quote { font-size: clamp(26px, 4vw, 64px); font-weight: 600; letter-spacing: -.025em; line-height: 1.16; }
  .s-bigmark { font-size: clamp(70px, 10.5vw, 170px); line-height: .5; color: #ff00ff; opacity: .55; font-weight: 700; }
  .s-chip { display: inline-flex; align-items: center; gap: 10px; font-size: 1.2em; font-weight: 600; padding: 0.5% 1.1%; background: var(--primary-soft); color: var(--primary); }
  .s-chip.out { background: transparent; box-shadow: inset 0 0 0 2px var(--border); color: var(--mono-500); }
  .s-chip.popular { background: var(--primary); color: #fff; }
  .s-tl { display: flex; position: relative; }
  .s-tl::before { content: ""; position: absolute; top: 3.5%; left: 6%; right: 6%; height: 2px; background: var(--border); }
  .s-step { flex: 1; display: flex; flex-direction: column; align-items: center; text-align: center; gap: 1.5%; z-index: 1; }
  .s-step .mk { width: 4.2%; aspect-ratio: 1; background: var(--primary); color: #fff; display: grid; place-items: center; font: 600 1.5em var(--font-mono); }
  .s-step.future .mk { background: var(--surface); box-shadow: inset 0 0 0 2px var(--border); color: var(--mono-400); }
  .s-tier { background: var(--surface); box-shadow: inset 0 0 0 1px var(--border); padding: 3%; display: flex; flex-direction: column; gap: 1.4%; }
  .s-tier.hi { box-shadow: inset 0 0 0 2px var(--primary); }
  .s-tier .tname { font-size: 1.4em; font-weight: 700; letter-spacing: .04em; text-transform: uppercase; color: var(--mono-400); }
  .s-tier .price { font: 600 clamp(28px, 4.7vw, 76px)/1 var(--font-mono); letter-spacing: -.03em; color: var(--fg); }
  .s-tier .price small { font-size: 1.6em; color: var(--mono-400); }
  .s-tier .tf { display: flex; align-items: center; gap: 0.9%; font-size: 1.5em; color: var(--mono-600); }
  .s-tf-tick { width: 30px; height: 30px; display: grid; place-items: center; background: var(--success-soft); flex-shrink: 0; }
  .s-rule { height: 2px; background: var(--border); width: 100%; }
  .s-bento { display: grid; grid-template-columns: repeat(12,1fr); grid-auto-rows: 1fr; gap: 1.8%; }
  .s-bstat { font: 600 clamp(36px,5vw,80px)/.95 var(--font-mono); letter-spacing: -.04em; color: var(--primary); }
  .s-logo { display: flex; align-items: center; }
  .s-brandbar { display: flex; align-items: center; gap: 1.2%; }
  .s-nav-counter { position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%); background: rgba(0,0,0,.8); color: #fff; padding: 8px 20px; font: 600 13px var(--font-mono); letter-spacing: .1em; z-index: 100; border-radius: 9999px; backdrop-filter: blur(8px); }
  .s-nav-btn { position: fixed; top: 50%; transform: translateY(-50%); background: rgba(255,255,255,.15); border: none; cursor: pointer; color: #fff; width: 44px; height: 44px; display: grid; place-items: center; font-size: 20px; z-index: 100; border-radius: 9999px; transition: background .15s; }
  .s-nav-btn:hover { background: rgba(255,255,255,.3); }
  .s-nav-prev { left: 20px; }
  .s-nav-next { right: 20px; }
`;

/* ── Slides data ──────────────────────────────────────────────────────────── */
type SlideRenderer = () => React.ReactNode;

function Slide01Cover(): React.ReactNode {
  return (
    <div className="slide ink-fill">
      <div className="s-pad">
        <div className="s-row s-between s-items-center" style={{ marginBottom: '4%' }}>
          <div className="s-logo"><Image src="/assets/fyscal-logo-white.svg" alt="Fyscal" width={180} height={40} style={{ height: 40, width: 'auto' }} /></div>
          <span className="s-kicker on-dark">Series B · 2026</span>
        </div>
        <div className="s-fill-h" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div className="s-eyebrow on-dark" style={{ marginBottom: '2.4%' }}>Investor Brief</div>
          <h1 className="s-display">Money that moves<br />at the <span style={{ color: '#7c9dff' }}>speed of you.</span></h1>
          <p className="s-lead" style={{ marginTop: '2.7%', maxWidth: '65%', color: 'rgba(255,255,255,.7)' }}>The modern money platform for Africa — send, spend, and grow in one account.</p>
        </div>
        <div className="s-foot">
          <div className="s-brandbar"><span style={{ fontSize: '1.1em', color: 'rgba(255,255,255,.6)' }}>Fyscal Technologies</span></div>
          <span className="s-mono" style={{ fontSize: '1em' }}>01 / 22</span>
        </div>
      </div>
    </div>
  );
}

function Slide02Agenda(): React.ReactNode {
  return (
    <div className="slide">
      <span className="s-pageno">02 / 22</span>
      <div className="s-pad">
        <div className="s-eyebrow" style={{ marginBottom: '0.5%' }}>Agenda</div>
        <div className="s-fill-h" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          {[
            ['01', 'The opportunity', 'Why now'],
            ['02', 'Product & platform', 'What we built'],
            ['03', 'Traction & metrics', 'The numbers'],
            ['04', 'Model & roadmap', "What's next"],
          ].map(([no, t, m]) => (
            <div key={no} className="s-agenda-item">
              <span className="no s-mono">{no}</span>
              <span className="t">{t}</span>
              <span className="m">{m}</span>
            </div>
          ))}
        </div>
        <div className="s-foot">
          <div className="s-logo"><Image src="/assets/fyscal-logo.svg" alt="Fyscal" width={100} height={20} style={{ height: 20, width: 'auto' }} /></div>
          <span className="s-mono" style={{ fontSize: '1em' }}>Confidential</span>
        </div>
      </div>
    </div>
  );
}

function Slide03Section(): React.ReactNode {
  return (
    <div className="slide blue-fill">
      <span className="s-tag-tl" style={{ color: 'rgba(255,255,255,.6)' }}>Fyscal</span>
      <div className="s-pad s-center" style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <div className="s-mono" style={{ fontSize: 'clamp(60px,12vw,200px)', fontWeight: 600, letterSpacing: '-.05em', opacity: .5, lineHeight: .8 }}>01</div>
        <h1 className="s-h-hero" style={{ marginTop: '1.2%', maxWidth: '85%' }}>The opportunity in front of us</h1>
        <p className="s-lead" style={{ marginTop: '2%', maxWidth: '62%', color: 'rgba(255,255,255,.85)' }}>400 million Africans are underserved by legacy banking. The rails to fix it finally exist.</p>
        <div className="s-foot" style={{ marginTop: 'auto', width: '100%' }}>
          <span style={{ color: 'rgba(255,255,255,.7)' }}>Section 01 of 04</span>
          <span className="s-mono" style={{ fontSize: '1em' }}>03 / 22</span>
        </div>
      </div>
    </div>
  );
}

function Slide04Statement(): React.ReactNode {
  return (
    <div className="slide">
      <span className="s-pageno">04 / 22</span>
      <Image className="s-wm" src="/assets/fyscal-logo.svg" alt="Fyscal" width={100} height={30} style={{ position: 'absolute', top: '3.5%', left: '8%', height: 30, width: 'auto' }} />
      <div className="s-pad s-center" style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <div className="s-eyebrow" style={{ marginBottom: '2.2%' }}>Our belief</div>
        <h1 className="s-display" style={{ maxWidth: '97%' }}>Banking should feel like <span className="s-grad">sending a message.</span></h1>
        <p className="s-lead" style={{ marginTop: '2.5%', maxWidth: '61%' }}>Instant. Effortless. Always in your pocket. That&apos;s the bar we build to — nothing less.</p>
      </div>
    </div>
  );
}

function Slide05Problem(): React.ReactNode {
  return (
    <div className="slide">
      <span className="s-pageno">05 / 22</span>
      <div className="s-pad">
        <div className="s-row s-fill-h s-items-center" style={{ gap: '5.5%' }}>
          <div className="s-col">
            <div className="s-eyebrow" style={{ marginBottom: '1.6%' }}>The problem</div>
            <h2 className="s-h2">Legacy banking wasn&apos;t built for how Africa moves money.</h2>
            <ul className="s-bul" style={{ marginTop: '3%' }}>
              {['Transfers take days and carry hidden fees.', 'Branches and paperwork gate every account.', 'Cross-border money loses value at every hop.'].map((text, i) => (
                <li key={i}>
                  <span className="s-dot">{i + 1}</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="s-col">
            <div className="s-slot" style={{ height: '70%', background: '#f1f3ff', boxShadow: 'inset 0 0 0 1px var(--border)', display: 'grid', placeItems: 'center', color: 'var(--mono-300)', fontSize: '1.4em' }}>
              Illustration / diagram
            </div>
          </div>
        </div>
        <div className="s-foot">
          <div className="s-logo"><Image src="/assets/fyscal-logo.svg" alt="Fyscal" width={100} height={20} style={{ height: 20, width: 'auto' }} /></div>
          <span className="s-mono" style={{ fontSize: '1em' }}>05 / 22</span>
        </div>
      </div>
    </div>
  );
}

function Slide06Solution(): React.ReactNode {
  const cards = [
    { title: 'Instant transfers', body: 'Money lands in seconds, 24/7, to any bank or Fyscal account.' },
    { title: 'Bank-grade security', body: 'Biometric login, real-time fraud monitoring, CBN-licensed protection.' },
    { title: 'Multi-currency', body: 'Hold and convert NGN, USD, GBP and EUR at rates you can see.' },
  ];
  return (
    <div className="slide soft-fill">
      <span className="s-pageno">06 / 22</span>
      <div className="s-pad">
        <div className="s-eyebrow" style={{ marginBottom: '1.1%' }}>What we built</div>
        <h2 className="s-h2" style={{ marginBottom: '4%', maxWidth: '75%' }}>One account for every kind of money move</h2>
        <div className="s-grid-3 s-fill-h">
          {cards.map((c, i) => (
            <div key={i} className="s-card">
              <div className="s-topline" />
              <div className="s-icf" style={{ width: '12%', aspectRatio: 1 }} />
              <h4 className="s-h3">{c.title}</h4>
              <p className="s-body">{c.body}</p>
            </div>
          ))}
        </div>
        <div className="s-foot" style={{ marginTop: '3.5%' }}>
          <div className="s-logo"><Image src="/assets/fyscal-logo.svg" alt="Fyscal" width={100} height={20} style={{ height: 20, width: 'auto' }} /></div>
          <span className="s-mono" style={{ fontSize: '1em' }}>06 / 22</span>
        </div>
      </div>
    </div>
  );
}

function Slide07Spotlight(): React.ReactNode {
  return (
    <div className="slide">
      <span className="s-pageno">07 / 22</span>
      <Image className="s-wm" src="/assets/fyscal-logo.svg" alt="Fyscal" width={100} height={30} style={{ position: 'absolute', top: '3.5%', left: '8%', height: 30, width: 'auto' }} />
      <div className="s-pad" style={{ paddingRight: 0 }}>
        <div className="s-row s-fill-h" style={{ gap: 0 }}>
          <div className="s-col" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingRight: '5.5%', maxWidth: '52%' }}>
            <span className="s-chip" style={{ alignSelf: 'flex-start', marginBottom: '1.8%', fontSize: '1.2em' }}>Product spotlight</span>
            <h2 className="s-h1">Your whole financial life, in one tap.</h2>
            <p className="s-lead" style={{ marginTop: '1.8%' }}>Balance, transfers, bills, cards and savings — unified in a single, fast interface.</p>
            <div className="s-row" style={{ marginTop: '3.3%', gap: '3.5%' }}>
              <div className="s-metric"><div className="n" style={{ fontSize: 'clamp(28px,4.5vw,72px)' }}>4.9★</div><div className="l">App Store rating</div></div>
              <div className="s-metric"><div className="n" style={{ fontSize: 'clamp(28px,4.5vw,72px)' }}>&lt;2min</div><div className="l">To open an account</div></div>
            </div>
          </div>
          <div className="s-col s-slot blue" style={{ alignSelf: 'stretch', display: 'grid', placeItems: 'center', color: 'rgba(255,255,255,.7)', fontSize: '1.4em' }}>
            App screenshot
          </div>
        </div>
      </div>
    </div>
  );
}

function Slide08HowItWorks(): React.ReactNode {
  return (
    <div className="slide">
      <span className="s-pageno">08 / 22</span>
      <div className="s-pad">
        <div className="s-eyebrow" style={{ marginBottom: '1.1%' }}>How it works</div>
        <h2 className="s-h2" style={{ marginBottom: '5.5%' }}>Three steps from download to done</h2>
        <div className="s-row s-items-center" style={{ gap: 0 }}>
          <div className="s-node fill">Open account</div>
          <div className="s-conn" />
          <div className="s-node">Add money</div>
          <div className="s-conn" />
          <div className="s-node">Send instantly</div>
        </div>
        <div className="s-grid-3" style={{ marginTop: '4.3%' }}>
          {[
            'Verify your identity in under two minutes — no branch, no paperwork.',
            'Top up by transfer, card, or cash agent across 18 markets.',
            'Pay anyone, settle bills, or convert currency in real time.',
          ].map((t, i) => <p key={i} className="s-body">{t}</p>)}
        </div>
        <div className="s-foot" style={{ marginTop: 'auto' }}>
          <div className="s-logo"><Image src="/assets/fyscal-logo.svg" alt="Fyscal" width={100} height={20} style={{ height: 20, width: 'auto' }} /></div>
          <span className="s-mono" style={{ fontSize: '1em' }}>08 / 22</span>
        </div>
      </div>
    </div>
  );
}

function Slide09Metrics(): React.ReactNode {
  const metrics = [
    { n: '2.4M+', l: 'Accounts opened', d: '↑ 38% YoY' },
    { n: '₦480B', l: 'Processed in 2025', d: '↑ 2.1× YoY' },
    { n: '99.99%', l: 'Platform uptime', d: '12-mo trailing' },
    { n: '18', l: 'African markets', d: '+8 planned' },
  ];
  return (
    <div className="slide ink-fill">
      <span className="s-pageno" style={{ color: 'rgba(255,255,255,.4)' }}>09 / 22</span>
      <Image src="/assets/fyscal-logo-white.svg" alt="Fyscal" width={100} height={30} style={{ position: 'absolute', top: '3.5%', left: '8%', height: 30, width: 'auto' }} />
      <div className="s-pad s-center" style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <div className="s-eyebrow on-dark" style={{ color: '#7c9dff', marginBottom: '4.3%' }}>Traction</div>
        <div className="s-grid-4" style={{ width: '100%' }}>
          {metrics.map((m, i) => (
            <div key={i} className="s-metric">
              <div className="n" style={{ color: '#7c9dff' }}>{m.n}</div>
              <div className="l" style={{ color: 'rgba(255,255,255,.55)' }}>{m.l}</div>
              <div className="d">{m.d}</div>
            </div>
          ))}
        </div>
        <div className="s-foot" style={{ marginTop: 'auto', width: '100%' }}>
          <span style={{ color: 'rgba(255,255,255,.5)' }}>Fyscal Technologies</span>
          <span className="s-mono" style={{ fontSize: '1em' }}>Confidential</span>
        </div>
      </div>
    </div>
  );
}

function Slide10Chart(): React.ReactNode {
  const bars = [
    { v: '₦41M', q: 'Q1\'25', h: '34%' },
    { v: '₦52M', q: 'Q2\'25', h: '46%' },
    { v: '₦63M', q: 'Q3\'25', h: '58%' },
    { v: '₦74M', q: 'Q4\'25', h: '70%' },
    { v: '₦84M', q: 'Q1\'26', h: '90%', hi: true },
  ];
  return (
    <div className="slide">
      <span className="s-pageno">10 / 22</span>
      <div className="s-pad">
        <div className="s-row s-between s-items-end" style={{ marginBottom: '3.7%' }}>
          <div>
            <div className="s-eyebrow" style={{ marginBottom: '1.1%' }}>Revenue</div>
            <h2 className="s-h2">Compounding, quarter over quarter</h2>
          </div>
          <div className="s-metric" style={{ textAlign: 'right' }}>
            <div className="n" style={{ fontSize: 'clamp(28px,5.2vw,84px)' }}>₦84M</div>
            <div className="l">Q1&apos;26 MRR · ↑ 9.7% MoM</div>
          </div>
        </div>
        <div className="s-bars s-fill-h" style={{ height: 'auto', flex: 1, paddingTop: '3%' }}>
          {bars.map((b, i) => (
            <div key={i} className={`s-bar${b.hi ? ' hi' : ''}`} style={{ height: b.h }}>
              <span className="s-bar-val s-mono">{b.v}</span>
              <em className="s-bar-lbl">{b.q}</em>
            </div>
          ))}
        </div>
        <div className="s-foot" style={{ marginTop: '4%' }}>
          <div className="s-logo"><Image src="/assets/fyscal-logo.svg" alt="Fyscal" width={100} height={20} style={{ height: 20, width: 'auto' }} /></div>
          <span className="s-mono" style={{ fontSize: '1em' }}>10 / 22</span>
        </div>
      </div>
    </div>
  );
}

function Slide11Comparison(): React.ReactNode {
  return (
    <div className="slide soft-fill">
      <span className="s-pageno">11 / 22</span>
      <div className="s-pad">
        <div className="s-eyebrow" style={{ marginBottom: '3.3%' }}>Old way vs. Fyscal</div>
        <div className="s-grid-2 s-fill-h" style={{ gap: '2.7%' }}>
          <div className="s-card soft" style={{ justifyContent: 'flex-start', gap: '2.1%' }}>
            <span className="s-chip out" style={{ fontSize: '1.2em' }}>Legacy bank</span>
            <ul className="s-bul" style={{ gap: '1.9%' }}>
              {['2–3 day transfers', 'Branch visits & paperwork', 'Opaque FX spreads', 'Hidden monthly fees'].map((t, i) => (
                <li key={i} style={{ fontSize: '1.8em' }}>
                  <span className="s-cross"><CrossIcon /></span> {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="s-card accent" style={{ justifyContent: 'flex-start', gap: '2.1%' }}>
            <span className="s-chip" style={{ fontSize: '1.2em' }}>Fyscal</span>
            <ul className="s-bul" style={{ gap: '1.9%' }}>
              {['Instant, 24/7 transfers', 'Account in 2 minutes', 'Live, transparent FX', 'Free everyday banking'].map((t, i) => (
                <li key={i} style={{ fontSize: '1.8em' }}>
                  <span className="s-tick"><SuccessCheckIcon /></span> {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="s-foot" style={{ marginTop: '3%' }}>
          <div className="s-logo"><Image src="/assets/fyscal-logo.svg" alt="Fyscal" width={100} height={20} style={{ height: 20, width: 'auto' }} /></div>
          <span className="s-mono" style={{ fontSize: '1em' }}>11 / 22</span>
        </div>
      </div>
    </div>
  );
}

function Slide12Bento(): React.ReactNode {
  return (
    <div className="slide">
      <span className="s-pageno">12 / 22</span>
      <div className="s-pad">
        <div className="s-eyebrow" style={{ marginBottom: '2.8%' }}>The platform</div>
        <div className="s-grid-12 s-fill-h" style={{ gridAutoRows: '1fr' }}>
          <div className="s-card" style={{ gridColumn: 'span 7', justifyContent: 'space-between' }}>
            <div className="s-icf" style={{ width: '10%', aspectRatio: 1 }} />
            <div><h4 className="s-h3">Send &amp; receive</h4><p className="s-body">P2P, bank transfers, requests and split bills — all instant.</p></div>
          </div>
          <div className="s-card dark" style={{ gridColumn: 'span 5', justifyContent: 'space-between' }}>
            <div className="s-icf lite" style={{ width: '10%', aspectRatio: 1 }} />
            <div><h4 className="s-h3">Cards</h4><p className="s-body" style={{ color: 'rgba(255,255,255,.6)' }}>Virtual &amp; physical, frozen in a tap.</p></div>
          </div>
          <div className="s-card" style={{ gridColumn: 'span 5', justifyContent: 'space-between' }}>
            <div className="s-icf" style={{ width: '10%', aspectRatio: 1 }} />
            <div><h4 className="s-h3">Bills</h4><p className="s-body">Airtime, data, power, TV.</p></div>
          </div>
          <div className="s-card soft" style={{ gridColumn: 'span 4', justifyContent: 'space-between' }}>
            <div className="s-icf line" style={{ width: '10%', aspectRatio: 1 }} />
            <div><h4 className="s-h3">Savings</h4><p className="s-body">Goal-based, earning yield.</p></div>
          </div>
          <div className="s-card accent" style={{ gridColumn: 'span 3', justifyContent: 'space-between' }}>
            <div className="s-icf" style={{ width: '10%', aspectRatio: 1 }} />
            <div><h4 className="s-h3">API</h4><p className="s-body">Build on Fyscal.</p></div>
          </div>
        </div>
        <div className="s-foot" style={{ marginTop: '3%' }}>
          <div className="s-logo"><Image src="/assets/fyscal-logo.svg" alt="Fyscal" width={100} height={20} style={{ height: 20, width: 'auto' }} /></div>
          <span className="s-mono" style={{ fontSize: '1em' }}>12 / 22</span>
        </div>
      </div>
    </div>
  );
}

function Slide13BentoCards(): React.ReactNode {
  return (
    <div className="slide">
      <span className="s-pageno">13 / 22</span>
      <Image src="/assets/fyscal-logo.svg" alt="Fyscal" width={100} height={30} style={{ position: 'absolute', top: '3.5%', left: '8%', height: 30, width: 'auto' }} />
      <div className="s-pad tight">
        <div className="s-eyebrow" style={{ marginBottom: '2.5%' }}>Why Fyscal wins</div>
        <div className="s-bento s-fill-h">
          <div className="s-card accent" style={{ gridColumn: 'span 6', gridRow: 'span 2', justifyContent: 'space-between' }}>
            <div className="s-icf lg" style={{ width: '14%', aspectRatio: 1 }} />
            <div>
              <h4 style={{ fontSize: 'clamp(22px,2.9vw,46px)', fontWeight: 600 }}>Instant by default</h4>
              <p className="s-body" style={{ marginTop: '0.6%' }}>Every transfer settles in seconds, 24/7 — across banks, borders and currencies. No queues, no cut-off times.</p>
            </div>
            <div className="s-bstat">&lt; 5s</div>
          </div>
          <div className="s-card dark" style={{ gridColumn: 'span 6', justifyContent: 'space-between' }}>
            <div className="s-icf lite" style={{ width: '10%', aspectRatio: 1 }} />
            <div>
              <h4 className="s-h3">Secure &amp; licensed</h4>
              <p className="s-body" style={{ color: 'rgba(255,255,255,.6)' }}>CBN-licensed, biometric, real-time fraud monitoring.</p>
            </div>
          </div>
          <div className="s-card soft" style={{ gridColumn: 'span 3', justifyContent: 'space-between' }}>
            <div className="s-icf line" style={{ width: '10%', aspectRatio: 1 }} />
            <h4 className="s-h3">4 currencies</h4>
          </div>
          <div className="s-card" style={{ gridColumn: 'span 3', justifyContent: 'space-between' }}>
            <div className="s-icf" style={{ width: '10%', aspectRatio: 1 }} />
            <h4 className="s-h3">All your bills</h4>
          </div>
        </div>
        <div className="s-foot" style={{ marginTop: '2.7%' }}>
          <div className="s-logo"><Image src="/assets/fyscal-logo.svg" alt="Fyscal" width={100} height={20} style={{ height: 20, width: 'auto' }} /></div>
          <span className="s-mono" style={{ fontSize: '1em' }}>13 / 22</span>
        </div>
      </div>
    </div>
  );
}

function Slide14KPI(): React.ReactNode {
  const kpis = [
    { n: '₦3,200', l: 'Avg. revenue per active user / yr' },
    { n: '71%', l: 'Gross margin' },
    { n: '4.8×', l: 'LTV / CAC ratio' },
    { n: '<6mo', l: 'CAC payback period' },
  ];
  return (
    <div className="slide soft-fill">
      <span className="s-pageno">14 / 22</span>
      <Image src="/assets/fyscal-logo.svg" alt="Fyscal" width={100} height={30} style={{ position: 'absolute', top: '3.5%', left: '8%', height: 30, width: 'auto' }} />
      <div className="s-pad">
        <div className="s-eyebrow" style={{ marginBottom: '1.1%' }}>Unit economics</div>
        <h2 className="s-h2" style={{ marginBottom: '3.7%' }}>Healthy, improving, and built to scale</h2>
        <div className="s-grid-2 s-fill-h" style={{ gap: '2%' }}>
          {kpis.map((k, i) => (
            <div key={i} className="s-card" style={{ flexDirection: 'row', alignItems: 'center', gap: '2.2%' }}>
              <div className="s-icf lg" style={{ width: '12%', aspectRatio: 1 }} />
              <div className="s-metric">
                <div className="n">{k.n}</div>
                <div className="l">{k.l}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="s-foot" style={{ marginTop: '3%' }}>
          <div className="s-logo"><Image src="/assets/fyscal-logo.svg" alt="Fyscal" width={100} height={20} style={{ height: 20, width: 'auto' }} /></div>
          <span className="s-mono" style={{ fontSize: '1em' }}>14 / 22</span>
        </div>
      </div>
    </div>
  );
}

function Slide15Market(): React.ReactNode {
  return (
    <div className="slide">
      <span className="s-pageno">15 / 22</span>
      <Image src="/assets/fyscal-logo.svg" alt="Fyscal" width={100} height={30} style={{ position: 'absolute', top: '3.5%', left: '8%', height: 30, width: 'auto' }} />
      <div className="s-pad">
        <div className="s-row s-fill-h s-items-center" style={{ gap: '6%' }}>
          <div className="s-col" style={{ maxWidth: '47%' }}>
            <div className="s-eyebrow" style={{ marginBottom: '1.6%' }}>The market</div>
            <h2 className="s-h1">A continent going digital, all at once.</h2>
            <p className="s-lead" style={{ marginTop: '1.8%' }}>Mobile-first money is the default for the next 400M banking users — and the rails to serve them finally exist.</p>
          </div>
          <div className="s-col" style={{ display: 'flex', flexDirection: 'column' }}>
            {[['Total addressable', '$180B'], ['Serviceable', '$42B'], ['Obtainable by 2030', '$6B']].map(([l, v]) => (
              <div key={l} className="s-row s-between s-items-end" style={{ padding: '2.1% 0', borderBottom: '2px solid var(--border)' }}>
                <span className="s-body" style={{ fontSize: 'clamp(14px,1.6vw,25px)' }}>{l}</span>
                <span className="s-mono" style={{ fontSize: 'clamp(28px,4vw,64px)', fontWeight: 600, letterSpacing: '-.03em', color: 'var(--primary)' }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="s-foot">
          <div className="s-logo"><Image src="/assets/fyscal-logo.svg" alt="Fyscal" width={100} height={20} style={{ height: 20, width: 'auto' }} /></div>
          <span className="s-mono" style={{ fontSize: '1em' }}>15 / 22</span>
        </div>
      </div>
    </div>
  );
}

function Slide16Pricing(): React.ReactNode {
  const tiers = [
    { name: 'Personal', price: '₦0', per: '/forever', feats: ['Free transfers', 'Virtual card', 'Savings goals'], hi: false },
    { name: 'Premium', price: '₦2,500', per: '/mo', feats: ['Everything in Personal', 'Higher limits', '2 physical cards'], hi: true },
    { name: 'Business', price: 'Custom', per: '', feats: ['Payments API', 'Payroll & payouts', 'Dedicated manager'], hi: false },
  ];
  return (
    <div className="slide soft-fill">
      <span className="s-pageno">16 / 22</span>
      <Image src="/assets/fyscal-logo.svg" alt="Fyscal" width={100} height={30} style={{ position: 'absolute', top: '3.5%', left: '8%', height: 30, width: 'auto' }} />
      <div className="s-pad">
        <div className="s-eyebrow" style={{ marginBottom: '1.1%' }}>Plans</div>
        <h2 className="s-h2" style={{ marginBottom: '3.5%' }}>Simple plans, no surprises</h2>
        <div className="s-grid-3 s-fill-h" style={{ gap: '1.7%' }}>
          {tiers.map(t => (
            <div key={t.name} className={`s-tier${t.hi ? ' hi' : ''}`}>
              <div className="s-row s-between s-items-center">
                <div className="tname">{t.name}</div>
                {t.hi && <span className="s-chip popular" style={{ fontSize: '1.1em' }}>Popular</span>}
              </div>
              <div className="price">{t.price}<small>{t.per}</small></div>
              <div className="s-rule" />
              {t.feats.map(f => (
                <div key={f} className="tf">
                  <span className="s-tf-tick"><CheckIcon /></span> {f}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="s-foot" style={{ marginTop: '3%' }}>
          <div className="s-logo"><Image src="/assets/fyscal-logo.svg" alt="Fyscal" width={100} height={20} style={{ height: 20, width: 'auto' }} /></div>
          <span className="s-mono" style={{ fontSize: '1em' }}>16 / 22</span>
        </div>
      </div>
    </div>
  );
}

function Slide17FullImage(): React.ReactNode {
  return (
    <div className="slide" style={{ background: '#0a0b14', color: '#fff' }}>
      <span className="s-pageno" style={{ color: 'rgba(255,255,255,.6)', zIndex: 2 }}>17 / 22</span>
      <Image src="/assets/fyscal-logo-white.svg" alt="Fyscal" width={100} height={30} style={{ position: 'absolute', top: '3.5%', left: '8%', height: 30, width: 'auto', zIndex: 3 }} />
      <div className="s-slot blue" style={{ height: '100%', position: 'relative', display: 'grid', placeItems: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(6,7,15,.1) 30%,rgba(6,7,15,.82) 100%)' }} />
        <div style={{ position: 'absolute', left: '8%', bottom: '7.5%', right: '8%', color: '#fff' }}>
          <div className="s-eyebrow on-dark" style={{ marginBottom: '1.6%' }}>In the field</div>
          <h2 className="s-h1" style={{ color: '#fff', maxWidth: '80%' }}>Built for the 400 million who bank on their phones first.</h2>
        </div>
        <div className="s-ph" style={{ opacity: .3, color: '#fff' }}>
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.2">
            <rect x="3" y="3" width="18" height="18"/>
            <circle cx="9" cy="9" r="2"/>
            <path d="m21 15-5-5L5 21"/>
          </svg>
          Full-bleed photo
        </div>
      </div>
    </div>
  );
}

function Slide18Quote(): React.ReactNode {
  return (
    <div className="slide grad-fill">
      <span className="s-pageno" style={{ color: 'rgba(255,255,255,.5)' }}>18 / 22</span>
      <Image src="/assets/fyscal-logo-white.svg" alt="Fyscal" width={100} height={30} style={{ position: 'absolute', top: '3.5%', left: '8%', height: 30, width: 'auto' }} />
      <div className="s-pad s-center" style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <div className="s-bigmark">&ldquo;</div>
        <p className="s-quote" style={{ maxWidth: '93%', marginTop: '-1.8%' }}>We moved our entire payroll to Fyscal and cut payout time from two days to ten minutes.</p>
        <div className="s-row s-items-center" style={{ gap: '1.5%', marginTop: '3.7%', flexWrap: 'wrap', justifyContent: 'center' }}>
          <div className="s-icf lite" style={{ width: 60, height: 60, font: '600 1.8em var(--font-mono)', color: '#fff', display: 'grid', placeItems: 'center' }}>NO</div>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: 'clamp(18px,1.9vw,30px)', fontWeight: 600 }}>Ngozi Okonkwo</div>
            <div className="s-mono" style={{ fontSize: 'clamp(14px,1.4vw,22px)', color: 'rgba(255,255,255,.7)' }}>Head of Finance · Carbon</div>
          </div>
        </div>
        <div className="s-foot" style={{ marginTop: 'auto', width: '100%' }}>
          <span style={{ color: 'rgba(255,255,255,.7)' }}>Customer story</span>
          <span className="s-mono" style={{ fontSize: '1em' }}>18 / 22</span>
        </div>
      </div>
    </div>
  );
}

function Slide19Logos(): React.ReactNode {
  const logos = ['Paystack', 'Flutterwave', 'Interswitch', 'Kuda', 'Carbon', 'PiggyVest'];
  return (
    <div className="slide">
      <span className="s-pageno">19 / 22</span>
      <div className="s-pad s-center" style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <div className="s-eyebrow" style={{ justifyContent: 'center', marginBottom: '4%' }}>Trusted by teams across the continent</div>
        <div className="s-grid-3" style={{ gap: 0, maxWidth: '87%', margin: '0 auto', width: '100%' }}>
          {logos.map(l => (
            <div key={l} className="s-slot soft" style={{ height: 'clamp(70px,12.5vw,200px)', boxShadow: 'inset 0 0 0 1px var(--border)', fontSize: 'clamp(18px,2.4vw,38px)', fontWeight: 800, color: 'var(--mono-300)', letterSpacing: '-.02em', display: 'grid', placeItems: 'center' }}>
              {l}
            </div>
          ))}
        </div>
        <div className="s-foot" style={{ marginTop: 'auto', width: '100%' }}>
          <div className="s-logo"><Image src="/assets/fyscal-logo.svg" alt="Fyscal" width={100} height={20} style={{ height: 20, width: 'auto' }} /></div>
          <span className="s-mono" style={{ fontSize: '1em' }}>19 / 22</span>
        </div>
      </div>
    </div>
  );
}

function Slide20Team(): React.ReactNode {
  const team = [
    { name: 'Adaeze N.', role: 'Co-founder & CEO' },
    { name: 'Tunde B.', role: 'Co-founder & CTO' },
    { name: 'Zainab K.', role: 'Head of Product' },
    { name: 'Ibrahim S.', role: 'Head of Risk' },
  ];
  return (
    <div className="slide">
      <span className="s-pageno">20 / 22</span>
      <div className="s-pad">
        <div className="s-eyebrow" style={{ marginBottom: '1.1%' }}>The team</div>
        <h2 className="s-h2" style={{ marginBottom: '4%' }}>Operators who&apos;ve built &amp; scaled fintech in Africa</h2>
        <div className="s-grid-4 s-fill-h">
          {team.map(t => (
            <div key={t.name} style={{ display: 'flex', flexDirection: 'column', gap: '1.4%' }}>
              <div className="s-slot soft" style={{ aspectRatio: 1, boxShadow: 'inset 0 0 0 1px var(--border)', display: 'grid', placeItems: 'center', color: 'var(--mono-300)' }}>
                <UserPlaceholder />
              </div>
              <div>
                <div className="s-h3">{t.name}</div>
                <div className="s-small">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="s-foot" style={{ marginTop: '3%' }}>
          <div className="s-logo"><Image src="/assets/fyscal-logo.svg" alt="Fyscal" width={100} height={20} style={{ height: 20, width: 'auto' }} /></div>
          <span className="s-mono" style={{ fontSize: '1em' }}>20 / 22</span>
        </div>
      </div>
    </div>
  );
}

function Slide21Roadmap(): React.ReactNode {
  const steps = [
    { q: 'Q2', title: 'Cards launch', sub: 'Virtual + physical, 4 markets', future: false },
    { q: 'Q3', title: 'Payments API', sub: 'Public beta for developers', future: false },
    { q: 'Q4', title: 'Savings & yield', sub: 'Goal-based, interest-earning', future: false },
    { q: 'Q1', title: '8 new markets', sub: 'Pan-African expansion', future: true },
  ];
  return (
    <div className="slide soft-fill">
      <span className="s-pageno">21 / 22</span>
      <div className="s-pad">
        <div className="s-eyebrow" style={{ marginBottom: '1.1%' }}>What&apos;s next</div>
        <h2 className="s-h2" style={{ marginBottom: '6%' }}>The 12-month roadmap</h2>
        <div className="s-tl s-fill-h" style={{ flex: 'none' }}>
          {steps.map((s, i) => (
            <div key={i} className={`s-step${s.future ? ' future' : ''}`}>
              <div className="mk s-mono">{s.q}</div>
              <div>
                <div className="s-h3">{s.title}</div>
                <p className="s-small" style={{ marginTop: '0.6%' }}>{s.sub}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="s-foot" style={{ marginTop: 'auto' }}>
          <div className="s-logo"><Image src="/assets/fyscal-logo.svg" alt="Fyscal" width={100} height={20} style={{ height: 20, width: 'auto' }} /></div>
          <span className="s-mono" style={{ fontSize: '1em' }}>21 / 22</span>
        </div>
      </div>
    </div>
  );
}

function Slide22Closing(): React.ReactNode {
  return (
    <div className="slide blue-fill">
      <div className="s-pad">
        <div className="s-logo" style={{ marginBottom: '4%' }}>
          <Image src="/assets/fyscal-logo-white.svg" alt="Fyscal" width={160} height={38} style={{ height: 38, width: 'auto' }} />
        </div>
        <div className="s-fill-h" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div className="s-eyebrow on-dark" style={{ marginBottom: '2.1%' }}>Let&apos;s talk</div>
          <h1 className="s-display">Let&apos;s build the future<br />of money in Africa.</h1>
          <p className="s-lead" style={{ marginTop: '2.3%', maxWidth: '62%', color: 'rgba(255,255,255,.85)' }}>
            We&apos;re raising our Series B to take Fyscal across the continent. Join us.
          </p>
          <div className="s-row" style={{ flex: 'none', gap: '5%', marginTop: '3.7%' }}>
            <div>
              <div className="s-kicker on-dark" style={{ marginBottom: '0.75%' }}>Email</div>
              <div className="s-mono" style={{ fontSize: 'clamp(16px,1.9vw,30px)', fontWeight: 500 }}>invest@fyscaltech.com</div>
            </div>
            <div>
              <div className="s-kicker on-dark" style={{ marginBottom: '0.75%' }}>Web</div>
              <div className="s-mono" style={{ fontSize: 'clamp(16px,1.9vw,30px)', fontWeight: 500 }}>fyscaltech.com</div>
            </div>
          </div>
        </div>
        <div className="s-foot">
          <span style={{ color: 'rgba(255,255,255,.7)' }}>Fyscal Technologies · Confidential</span>
          <span className="s-mono" style={{ fontSize: '1em' }}>22 / 22</span>
        </div>
      </div>
    </div>
  );
}

const SLIDES: SlideRenderer[] = [
  Slide01Cover, Slide02Agenda, Slide03Section, Slide04Statement, Slide05Problem,
  Slide06Solution, Slide07Spotlight, Slide08HowItWorks, Slide09Metrics, Slide10Chart,
  Slide11Comparison, Slide12Bento, Slide13BentoCards, Slide14KPI, Slide15Market,
  Slide16Pricing, Slide17FullImage, Slide18Quote, Slide19Logos, Slide20Team,
  Slide21Roadmap, Slide22Closing,
];

/* ── Main slides page ─────────────────────────────────────────────────────── */
export default function SlidesPage() {
  const [current, setCurrent] = useState(0);
  const total = SLIDES.length;

  const prev = useCallback(() => setCurrent(c => Math.max(0, c - 1)), []);
  const next = useCallback(() => setCurrent(c => Math.min(total - 1, c + 1)), [total]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next();
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') prev();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [next, prev]);

  const SlideComp = SLIDES[current];

  return (
    <>
      <style>{SLIDE_CSS}</style>
      <div className="deck-wrap">
        <div
          className="deck-stage"
          style={{
            width: 'min(100vw, calc(100vh * 16/9))',
            height: 'min(100vh, calc(100vw * 9/16))',
            fontSize: 'min(1.1vw, calc(100vh / 65))',
          }}
        >
          <SlideComp />
        </div>

        <button className="s-nav-btn s-nav-prev" onClick={prev} disabled={current === 0} aria-label="Previous slide">
          ←
        </button>
        <button className="s-nav-btn s-nav-next" onClick={next} disabled={current === total - 1} aria-label="Next slide">
          →
        </button>
        <div className="s-nav-counter">{current + 1} / {total}</div>
      </div>
    </>
  );
}
