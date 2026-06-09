/* Fyscal Website UI Kit — HeroBeam: hero with an animated FROSTED-COLUMNS canvas
   background (blue columns rising from white, film grain, hover lift) — see
   fluted-glass.js. Light theme: dark ink foreground over the columns. */
const { useState, useRef, useEffect } = React;

const GLASS_OPTS = Object.assign({
  colorOne: '#352EFF', colorTwo: '#6B8CFF', bgColor: '#ffffff',
  columns: 9, noise: 0.42, gloss: 0.4, widthVariation: 1.7,
  hover: true, hoverIntensity: 2.0, mode: 'columns'
}, (typeof window !== 'undefined' && window.__HERO_OPTS) || {});

function BeamNav() {
  const links = ['Personal', 'Business', 'Developers', 'Pricing'];
  const [active, setActive] = useState('Personal');
  return (
    <header className="bnav">
      <FyscalLogo height={22} />
      <nav className="bnav-pills">
        {links.map(l => (
          <button key={l} className={'bnav-pill' + (active === l ? ' on' : '')} onClick={() => setActive(l)}>{l}</button>
        ))}
      </nav>
      <div className="bnav-actions">
        <button className="bnav-icon" aria-label="Search"><SIcons.globe size={18} stroke="var(--fg)" /></button>
        <button className="bnav-cta">Open account</button>
      </div>
    </header>
  );
}

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
          {[['Send', SIcons.swap], ['Pay', SIcons.card], ['Save', SIcons.chart]].map(([l, I], i) => (
            <div key={i} className="gc-act"><I size={16} stroke="#fff" />{l}</div>
          ))}
        </div>
      </div>
      <div className="glass-card txn">
        <div className="gc-txn">
          <div className="gc-ico"><SIcons.bolt size={16} stroke="var(--primary)" /></div>
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

function HeroBeam() {
  const features = [
    ['Instant transfers', SIcons.bolt],
    ['Bank-grade security', SIcons.shield],
    ['Multi-currency', SIcons.globe],
    ['Developer API', SIcons.api],
    ['24/7 support', SIcons.users],
  ];
  const canvasRef = useRef(null);
  useEffect(() => {
    let h, t;
    const start = () => { if (window.FlutedGlass && canvasRef.current) { h = window.FlutedGlass.mount(canvasRef.current, GLASS_OPTS); return true; } return false; };
    if (!start()) { t = setInterval(() => { if (start()) clearInterval(t); }, 60); setTimeout(() => clearInterval(t), 4000); }
    return () => { if (h) h.destroy(); if (t) clearInterval(t); };
  }, []);
  return (
    <section className="herob">
      {/* animated fluted-glass background */}
      <div className="hero-bg" aria-hidden="true">
        <canvas ref={canvasRef} className="fluted-glass-canvas"></canvas>
        <div className="hero-scrim"></div>
      </div>

      <NavBar onCta={() => {}} />

      <div className="hero-inner">
        <div className="hero-copy">
          <div className="hero-badge"><span className="dot"></span>New · Instant cross-border transfers</div>
          <h1 className="hero-h1">Money that moves<br />at the <span className="grad">speed of light.</span></h1>
          <p className="hero-sub">Send, spend, and grow across 18 African markets from one account — instant, secure, and built for how money really moves.</p>
          <div className="hero-ctas">
            <button className="hbtn light">Open free account <SIcons.arrowR size={17} /></button>
            <button className="hbtn ghost">Book a demo</button>
          </div>
          <div className="hero-feats">
            {features.map(([label, I], i) => (
              <div key={i} className="hfeat"><I size={17} stroke="var(--primary)" />{label}</div>
            ))}
          </div>
        </div>
        <GlassCards />
      </div>
    </section>
  );
}

Object.assign(window, { HeroBeam, BeamNav, GlassCards });
