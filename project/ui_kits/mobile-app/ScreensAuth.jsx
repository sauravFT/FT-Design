/* MaV Mobile UI Kit — screens */
const ScreenBody = ({ children, pad = '68px 24px 32px', style }) => (
  <div style={{ position: 'absolute', inset: 0, borderRadius: 52, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
    <div style={{ flex: 1, overflowY: 'auto', padding: pad, display: 'flex', flexDirection: 'column', ...style }}>{children}</div>
  </div>
);

const LogoRow = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 28 }}>
    <div style={{ width: 40, height: 40, borderRadius: 0, background: 'var(--primary)', display: 'grid', placeItems: 'center' }}><BrandMark size={18} /></div>
    <span style={{ fontSize: 20, fontWeight: 800, letterSpacing: '-.02em' }}>MaV</span>
  </div>
);

/* ── Onboarding ──────────────────────────────────────────────────────────── */
const SLIDES = [
  { big1: 'Send money', big2: 'in seconds', body: "Transfer to anyone, anywhere. No queues, no branches — just tap and it's done." },
  { big1: 'Pay every bill', big2: 'in one place', body: 'Airtime, data, electricity, TV — all your bills, settled from one balance.' },
  { big1: 'Track every', big2: 'naira', body: 'See where your money goes with a clear weekly breakdown of spend and income.' },
];
function Onboarding({ onNext, onLogin }) {
  const [i, setI] = useState(0);
  const s = SLIDES[i];
  return (
    <>
      <StatusBar light />
      <div style={{ position: 'absolute', inset: 0, borderRadius: 52, display: 'flex', flexDirection: 'column' }}>
        <div style={{ height: 300, background: 'var(--gradient-brand)', borderRadius: '52px 52px 0 0', padding: '70px 28px 0', color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingBottom: 26 }}>
          <div style={{ fontSize: 12, opacity: .75, fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase' }}>Total balance</div>
          <div style={{ font: '800 40px var(--font-mono)', letterSpacing: '-.02em', marginTop: 4 }}>₦2,450,000</div>
          <div style={{ display: 'flex', gap: 10, marginTop: 18 }}>
            {[['Add', Icons.plus], ['Send', Icons.send], ['Pay', Icons.card], ['History', Icons.clock]].map(([l, I], k) => (
              <div key={k} style={{ flex: 1, padding: '10px 0', borderRadius: 0, background: 'rgba(255,255,255,.16)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5, fontSize: 11, fontWeight: 600 }}><I size={18} stroke="#fff" />{l}</div>
            ))}
          </div>
        </div>
        <div style={{ flex: 1, padding: '36px 32px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <h1 style={{ fontSize: 32, fontWeight: 800, letterSpacing: '-.03em', lineHeight: 1.1 }}>{s.big1}<br /><span style={{ color: 'var(--primary)' }}>{s.big2}</span></h1>
          <p style={{ fontSize: 16, color: 'var(--fg-muted)', lineHeight: 1.6, marginTop: 14, maxWidth: 280 }}>{s.body}</p>
          <div style={{ display: 'flex', gap: 6, marginTop: 26 }}>
            {SLIDES.map((_, k) => <div key={k} style={{ width: k === i ? 22 : 7, height: 7, borderRadius: 0, background: k === i ? 'var(--primary)' : 'var(--mono-200)', transition: '.2s' }} />)}
          </div>
        </div>
        <div style={{ padding: '0 28px 44px' }}>
          <Button onClick={() => i < SLIDES.length - 1 ? setI(i + 1) : onNext()}>{i < SLIDES.length - 1 ? 'Next' : 'Get started'}</Button>
          <div onClick={onLogin} style={{ textAlign: 'center', marginTop: 16, fontSize: 14, fontWeight: 700, color: 'var(--fg)', cursor: 'pointer' }}>I already have an account</div>
        </div>
      </div>
    </>
  );
}

/* ── Phone login ─────────────────────────────────────────────────────────── */
function PhoneLogin({ onContinue }) {
  const [num, setNum] = useState('');
  const valid = num.replace(/\D/g, '').length >= 6;
  return (
    <>
      <StatusBar />
      <ScreenBody>
        <LogoRow />
        <h1 style={{ fontSize: 24, fontWeight: 800, letterSpacing: '-.03em', lineHeight: 1.15, marginBottom: 5 }}>Enter your phone number</h1>
        <p style={{ fontSize: 14, color: 'var(--fg-muted)', lineHeight: 1.5, marginBottom: 24 }}>We'll send a verification code. New users will be asked to create a profile.</p>
        <label style={{ fontSize: 12, fontWeight: 600, marginBottom: 6, display: 'block' }}>Phone number</label>
        <div style={{ display: 'flex', height: 48, borderRadius: 0, border: '1px solid var(--border-input)', overflow: 'hidden', background: '#fff', boxShadow: 'var(--shadow-input)', marginBottom: 16 }}>
          <button style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '0 10px', border: 'none', background: 'transparent', cursor: 'pointer', borderRight: '1px solid var(--border-input)', fontFamily: 'var(--font-body)' }}>
            <span style={{ fontSize: 18 }}>🇳🇬</span><span style={{ fontSize: 13, fontWeight: 600 }}>+234</span><Icons.chevronDown size={10} stroke="var(--mono-400)" />
          </button>
          <input value={num} onChange={e => setNum(e.target.value)} inputMode="numeric" placeholder="812 0000 0000"
            style={{ flex: 1, border: 'none', background: 'transparent', padding: '0 12px', font: '400 14px var(--font-body)', color: 'var(--fg)', outline: 'none' }} />
        </div>
        <Button disabled={!valid} onClick={onContinue}>Continue</Button>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, margin: '18px 0' }}>
          <span style={{ flex: 1, height: 1, background: 'var(--border-input)' }} /><span style={{ fontSize: 11, color: 'var(--mono-400)', fontWeight: 500 }}>or continue with</span><span style={{ flex: 1, height: 1, background: 'var(--border-input)' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <SocialButton icon={<AppleIcon />}>Continue with Apple</SocialButton>
          <SocialButton icon={<GoogleIcon />}>Continue with Google</SocialButton>
        </div>
      </ScreenBody>
    </>
  );
}

/* ── OTP verify ──────────────────────────────────────────────────────────── */
function OTPVerify({ onVerify, onBack }) {
  const [code, setCode] = useState('');
  useEffect(() => { if (code.length === 6) { const t = setTimeout(onVerify, 450); return () => clearTimeout(t); } }, [code]);
  return (
    <>
      <StatusBar />
      <ScreenBody>
        <div onClick={onBack} style={{ marginBottom: 24, cursor: 'pointer', width: 40, height: 40, borderRadius: 0, border: '1px solid var(--border)', display: 'grid', placeItems: 'center' }}><Icons.back size={20} stroke="var(--fg)" /></div>
        <h1 style={{ fontSize: 24, fontWeight: 800, letterSpacing: '-.03em', marginBottom: 5 }}>Verify your number</h1>
        <p style={{ fontSize: 14, color: 'var(--fg-muted)', lineHeight: 1.5, marginBottom: 28 }}>Enter the 6-digit code we sent to <strong style={{ color: 'var(--fg)' }}>+234 812 0000 0000</strong></p>
        <OTPInput value={code} onChange={setCode} />
        <div style={{ marginTop: 24, fontSize: 13, color: 'var(--fg-muted)' }}>Didn't get a code? <span style={{ color: 'var(--primary)', fontWeight: 600 }}>Resend code</span> · 0:24</div>
        <div style={{ marginTop: 'auto', paddingTop: 24 }}><Button disabled={code.length < 6} onClick={onVerify}>Verify</Button></div>
      </ScreenBody>
    </>
  );
}

Object.assign(window, { ScreenBody, LogoRow, Onboarding, PhoneLogin, OTPVerify });
