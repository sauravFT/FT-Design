'use client';

import { useRef, useEffect } from 'react';
import NavBar from './Nav';
import { Bolt, Shield, Globe, Api, Users, Swap, Card, Chart, ArrowR } from './Icons';
import { mountFlutedGlass } from '../../lib/fluted-glass';

const GLASS_OPTS = {
  colorOne: '#352EFF',
  colorTwo: '#6B8CFF',
  bgColor: '#ffffff',
  columns: 9,
  noise: 0.42,
  gloss: 0.4,
  widthVariation: 1.7,
  hover: true,
  hoverIntensity: 2.0,
  mode: 'columns' as const,
};

function GlassCards() {
  return (
    <div className="glass-stack">
      <div className="glass-card balance">
        <div className="gc-label">Total balance</div>
        <div className="gc-amount">₦2,450,000<span>.00</span></div>
        <div className="gc-row">
          <span className="gc-chip up">▲ +12.4%</span>
          <span className="gc-sub">this month</span>
        </div>
        <div className="gc-actions">
          {([['Send', Swap], ['Pay', Card], ['Save', Chart]] as const).map(([l, I], i) => (
            <div key={i} className="gc-act">
              <I size={16} stroke="#fff" />{l}
            </div>
          ))}
        </div>
      </div>
      <div className="glass-card txn">
        <div className="gc-txn">
          <div className="gc-ico"><Bolt size={16} stroke="var(--primary)" /></div>
          <div className="gc-txn-body">
            <div className="gc-txn-name">Instant transfer</div>
            <div className="gc-txn-meta">James K. · just now</div>
          </div>
          <div className="gc-txn-amt">−₦20,000</div>
        </div>
        <div className="gc-progress"><span style={{ width: '74%' }}></span></div>
        <div className="gc-txn-foot">Settles in <strong>2s</strong> · cleared</div>
      </div>
    </div>
  );
}

export default function Hero() {
  const features: [string, React.FC<{ size?: number; stroke?: string }>][] = [
    ['Instant transfers', Bolt],
    ['Bank-grade security', Shield],
    ['Multi-currency', Globe],
    ['Developer API', Api],
    ['24/7 support', Users],
  ];

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const handle = mountFlutedGlass(canvasRef.current, GLASS_OPTS);
    return () => handle.destroy();
  }, []);

  return (
    <section className="herob">
      <div className="hero-bg" aria-hidden="true">
        <canvas ref={canvasRef} className="fluted-glass-canvas" />
        <div className="hero-scrim" />
      </div>

      <NavBar />

      <div className="hero-inner">
        <div className="hero-copy">
          <div className="hero-badge">
            <span className="dot" />
            New · Instant cross-border transfers
          </div>
          <h1 className="hero-h1">
            Money that moves<br />
            at the <span className="grad">speed of light.</span>
          </h1>
          <p className="hero-sub">
            Send, spend, and grow across 18 African markets from one account — instant, secure, and built for how money really moves.
          </p>
          <div className="hero-ctas">
            <button className="hbtn light">
              Open free account <ArrowR size={17} />
            </button>
            <button className="hbtn ghost">Book a demo</button>
          </div>
          <div className="hero-feats">
            {features.map(([label, I], i) => (
              <div key={i} className="hfeat">
                <I size={17} stroke="var(--primary)" />{label}
              </div>
            ))}
          </div>
        </div>
        <GlassCards />
      </div>
    </section>
  );
}
