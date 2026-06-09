/* MaV Mobile UI Kit — primitives & finance modules */
const { useState, useRef, useEffect } = React;

/* ── iOS device frame (393×852, Dynamic Island) ─────────────────────────── */
function PhoneFrame({ children, dark }) {
  return (
    <div style={{
      width: 393, height: 852, borderRadius: 54, background: '#1c1c1e',
      position: 'relative', flexShrink: 0, overflow: 'hidden',
      boxShadow: '0 32px 80px rgba(0,0,0,.35), inset 0 0 0 2px #3a3a3c, inset 0 0 0 3px #1c1c1e',
    }}>
      <div style={{
        position: 'absolute', inset: 0, borderRadius: 52, overflow: 'hidden',
        background: dark ? '#171717' : '#fff', display: 'flex', flexDirection: 'column',
      }}>
        <div style={{ position: 'absolute', top: 14, left: '50%', transform: 'translateX(-50%)', width: 126, height: 37, background: '#000', borderRadius: 20, zIndex: 100 }} />
        {children}
        <div style={{ position: 'absolute', bottom: 10, left: '50%', transform: 'translateX(-50%)', width: 134, height: 5, background: dark ? '#fff' : '#000', borderRadius: 3, opacity: dark ? .3 : .2, zIndex: 99 }} />
      </div>
    </div>
  );
}

function StatusBar({ light }) {
  const c = light ? '#fff' : '#171717';
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 54, padding: '16px 28px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', zIndex: 99 }}>
      <span style={{ fontSize: 15, fontWeight: 600, color: c, paddingLeft: 8 }}>9:41</span>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, paddingRight: 8 }}>
        <svg width="17" height="12" viewBox="0 0 17 12" fill={c}><rect x="0" y="3" width="3" height="9" rx="1"/><rect x="4.5" y="2" width="3" height="10" rx="1"/><rect x="9" y="0" width="3" height="12" rx="1"/><rect x="13.5" y="1" width="3" height="11" rx="1" opacity=".4"/></svg>
        <svg width="25" height="12" viewBox="0 0 25 12"><rect x="0" y="1" width="21" height="10" rx="3" stroke={c} strokeWidth="1.5" fill="none"/><rect x="2" y="3" width="16" height="6" rx="1.5" fill={c}/><path d="M22.5 4.5v3a1.5 1.5 0 000-3z" fill={c}/></svg>
      </div>
    </div>
  );
}

/* ── Buttons ─────────────────────────────────────────────────────────────── */
function Button({ children, onClick, disabled, variant = 'primary', style }) {
  const [press, setPress] = useState(false);
  const base = {
    width: '100%', height: 48, borderRadius: 0, border: 'none', cursor: disabled ? 'not-allowed' : 'pointer',
    font: '600 14px var(--font-body)', letterSpacing: '-.01em', transition: 'opacity .15s, transform .1s, background .15s',
    transform: press && !disabled ? 'scale(.985)' : 'none', ...style,
  };
  const variants = {
    primary: { background: disabled ? 'var(--mono-200)' : (press ? 'var(--tertiary-2)' : 'var(--primary)'), color: disabled ? 'var(--mono-400)' : '#fff' },
    secondary: { background: 'transparent', border: '1px solid var(--border-input)', color: 'var(--fg)' },
    text: { background: 'transparent', color: 'var(--primary)', height: 'auto' },
  };
  return (
    <button onClick={disabled ? undefined : onClick} disabled={disabled}
      onMouseDown={() => setPress(true)} onMouseUp={() => setPress(false)} onMouseLeave={() => setPress(false)}
      style={{ ...base, ...variants[variant] }}>{children}</button>
  );
}

function SocialButton({ icon, children }) {
  const [h, setH] = useState(false);
  return (
    <button onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ width: '100%', height: 44, borderRadius: 0, border: '1px solid var(--border-input)', background: h ? 'var(--mono-100)' : '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, font: '600 13px var(--font-body)', color: 'var(--fg)', cursor: 'pointer', boxShadow: 'var(--shadow-input)', transition: 'background .15s' }}>
      {icon}{children}
    </button>
  );
}

/* ── Input ───────────────────────────────────────────────────────────────── */
function Field({ label, value, onChange, placeholder, type = 'text', error }) {
  const [focus, setFocus] = useState(false);
  return (
    <div style={{ marginBottom: 14 }}>
      {label && <label style={{ fontSize: 12, fontWeight: 600, marginBottom: 6, display: 'block' }}>{label}</label>}
      <input type={type} value={value} onChange={e => onChange && onChange(e.target.value)} placeholder={placeholder}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{ width: '100%', height: 48, padding: '0 4px', borderRadius: 0, font: '400 14px var(--font-body)', color: 'var(--fg)', background: 'transparent', outline: 'none', border: 'none', borderBottom: `2px solid ${error ? 'var(--danger)' : focus ? 'var(--primary)' : 'var(--mono-400)'}`, transition: 'border-color .15s' }} />
      {error && <div style={{ fontSize: 11, color: 'var(--danger)', marginTop: 5 }}>{error}</div>}
    </div>
  );
}

/* ── OTP input ───────────────────────────────────────────────────────────── */
function OTPInput({ length = 6, value, onChange }) {
  const refs = useRef([]);
  const set = (i, v) => {
    const d = v.replace(/\D/g, '').slice(-1);
    const arr = value.split('');
    arr[i] = d; const next = arr.join('').slice(0, length);
    onChange(next);
    if (d && i < length - 1) refs.current[i + 1]?.focus();
  };
  const key = (i, e) => { if (e.key === 'Backspace' && !value[i] && i > 0) refs.current[i - 1]?.focus(); };
  return (
    <div style={{ display: 'flex', gap: 8 }}>
      {Array.from({ length }).map((_, i) => (
        <input key={i} ref={el => refs.current[i] = el} inputMode="numeric" maxLength="1" value={value[i] || ''}
          onChange={e => set(i, e.target.value)} onKeyDown={e => key(i, e)}
          style={{ width: 48, height: 48, borderRadius: 0, textAlign: 'center', font: '500 18px var(--font-mono)', color: 'var(--fg)', background: '#fff', outline: 'none', border: `1px solid ${value[i] ? 'var(--mono-900)' : 'var(--border-input)'}`, transition: 'border-color .15s, box-shadow .15s' }}
          onFocus={e => e.target.style.boxShadow = 'var(--shadow-focus)'} onBlur={e => e.target.style.boxShadow = 'none'} />
      ))}
    </div>
  );
}

/* ── Balance card (signature gradient + glow) ────────────────────────────── */
function BalanceCard({ amount = '284,500', cents = '00', onAction }) {
  const acts = [
    { k: 'add', label: 'Add Money', icon: <Icons.plus size={18} stroke="#fff" /> },
    { k: 'send', label: 'Send', icon: <Icons.send size={18} stroke="#fff" /> },
    { k: 'pay', label: 'Pay', icon: <Icons.card size={18} stroke="#fff" /> },
    { k: 'history', label: 'History', icon: <Icons.clock size={18} stroke="#fff" /> },
  ];
  return (
    <div style={{ background: 'var(--gradient-brand)', borderRadius: 0, padding: 24, color: '#fff', boxShadow: 'var(--shadow-brand)' }}>
      <div style={{ fontSize: 12, opacity: .7, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '.08em' }}>Available Balance</div>
      <div style={{ font: '700 34px var(--font-mono)', letterSpacing: '-.02em', margin: '6px 0 2px' }}>₦ {amount}<span style={{ fontSize: 22, opacity: .7 }}>.{cents}</span></div>
      <div style={{ fontSize: 12, opacity: .6, marginBottom: 20 }}>Last updated: just now</div>
      <div style={{ display: 'flex', gap: 10 }}>
        {acts.map(a => (
          <button key={a.k} onClick={() => onAction && onAction(a.k)}
            style={{ flex: 1, padding: '10px 8px', borderRadius: 0, background: 'rgba(255,255,255,.18)', border: '1px solid rgba(255,255,255,.25)', color: '#fff', fontSize: 11, fontWeight: 600, cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5, fontFamily: 'var(--font-body)' }}>
            {a.icon}{a.label}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ── Transaction row ─────────────────────────────────────────────────────── */
function TxnRow({ name, meta, amount, kind, status }) {
  const credit = kind === 'credit';
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 0', borderBottom: '1px solid var(--border)' }}>
      <div style={{ width: 42, height: 42, borderRadius: 0, background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        {credit ? <Icons.credit size={20} stroke="var(--success)" sw={1.5} /> : <Icons.debit size={20} stroke="var(--danger)" sw={1.5} />}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 14, fontWeight: 600 }}>{name}</div>
        <div style={{ fontSize: 12, color: 'var(--fg-muted)', marginTop: 2 }}>{meta}</div>
      </div>
      <div style={{ textAlign: 'right' }}>
        <div style={{ font: '700 15px var(--font-mono)', color: credit ? 'var(--success)' : 'var(--danger)' }}>{credit ? '+' : '−'}₦ {amount}</div>
        <div style={{ fontSize: 11, color: 'var(--fg-muted)', marginTop: 2 }}>{status}</div>
      </div>
    </div>
  );
}

/* ── Bottom nav ──────────────────────────────────────────────────────────── */
function BottomNav({ active = 'home', onNav, dark }) {
  const items = [
    { k: 'home', label: 'Home', icon: Icons.home },
    { k: 'explore', label: 'Explore', icon: Icons.search },
    { k: 'pay', label: 'Pay', icon: Icons.pay },
    { k: 'alerts', label: 'Alerts', icon: Icons.bell },
    { k: 'profile', label: 'Profile', icon: Icons.user },
  ];
  return (
    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: dark ? '#1f1f1f' : '#fff', borderTop: '1px solid var(--border)', padding: '8px 0 28px', display: 'flex', zIndex: 50 }}>
      {items.map(it => {
        const on = it.k === active; const I = it.icon;
        return (
          <button key={it.k} onClick={() => onNav && onNav(it.k)} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, padding: '4px 0', border: 'none', background: 'none', cursor: 'pointer' }}>
            <I size={22} stroke={on ? 'var(--primary)' : 'var(--fg-muted)'} fill={on ? 'var(--primary)' : 'none'} sw={on ? 0 : 1.8} />
            <span style={{ fontSize: 10, fontWeight: 600, color: on ? 'var(--primary)' : 'var(--fg-muted)' }}>{it.label}</span>
            {on && <div style={{ width: 4, height: 4, borderRadius: 0, background: 'var(--primary)' }} />}
          </button>
        );
      })}
    </div>
  );
}

Object.assign(window, { PhoneFrame, StatusBar, Button, SocialButton, Field, OTPInput, BalanceCard, TxnRow, BottomNav });
