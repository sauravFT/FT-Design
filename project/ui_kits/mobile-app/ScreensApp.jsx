/* MaV Mobile UI Kit — Home & Send screens */

function Home({ onNav, onAction, balance }) {
  const txns = [
    { name: 'Salary — GTBank', meta: 'Transfer · Today, 09:14', amount: '350,000', kind: 'credit', status: 'Credit' },
    { name: 'Airtime — MTN', meta: 'Bill payment · Today, 11:45', amount: '2,000', kind: 'debit', status: 'Debit' },
    { name: 'P2P — James K.', meta: 'Send money · Yesterday, 14:33', amount: '20,000', kind: 'debit', status: 'Pending' },
    { name: 'Freelance — Ahmad R.', meta: 'Transfer · Sun Dec 17', amount: '50,000', kind: 'credit', status: 'Credit' },
  ];
  const spend = [40, 55, 30, 70, 85, 50, 20];
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  return (
    <>
      <StatusBar />
      <div style={{ position: 'absolute', inset: 0, borderRadius: 52, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <div style={{ flex: 1, overflowY: 'auto', paddingTop: 54, paddingBottom: 96 }}>
          {/* top bar */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 20px 8px' }}>
            <div>
              <div style={{ fontSize: 12, color: 'var(--fg-muted)', fontWeight: 500 }}>Good morning,</div>
              <div style={{ fontSize: 18, fontWeight: 800, letterSpacing: '-.02em', whiteSpace: 'nowrap' }}>Alex Kim 👋</div>
            </div>
            <div style={{ width: 38, height: 38, borderRadius: 0, background: 'var(--gradient-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, color: '#fff' }}>AK</div>
          </div>
          {/* balance */}
          <div style={{ padding: '0 20px 20px' }}><BalanceCard amount={balance} onAction={onAction} /></div>
          {/* stats */}
          <div style={{ display: 'flex', gap: 10, padding: '0 20px 20px' }}>
            <StatWidget icon={<Icons.trendUp size={18} stroke="var(--success)" />} tint="var(--success-soft)" label="Income" value="+₦350K" color="var(--success)" />
            <StatWidget icon={<Icons.trendDown size={18} stroke="var(--danger)" />} tint="var(--danger-soft)" label="Spent" value="−₦197K" color="var(--danger)" />
          </div>
          {/* quick actions */}
          <SecHeader title="Quick Actions" />
          <div style={{ display: 'flex', gap: 10, padding: '0 20px 24px' }}>
            <QuickAction label="Transfer" tint="var(--primary-soft)" icon={<Icons.send size={20} stroke="var(--primary)" />} onClick={() => onAction('send')} />
            <QuickAction label="Receive" tint="var(--success-soft)" icon={<Icons.credit size={20} stroke="var(--success)" />} />
            <QuickAction label="Pay Bills" tint="var(--primary-soft)" icon={<Icons.card size={20} stroke="var(--primary)" />} />
            <QuickAction label="Scan" tint="var(--bg-secondary)" icon={<Icons.scan size={20} stroke="var(--fg-muted)" />} />
          </div>
          {/* weekly spend */}
          <div style={{ margin: '0 20px 24px', padding: 16, borderRadius: 0, background: 'var(--bg)', border: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
              <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--fg-muted)', textTransform: 'uppercase', letterSpacing: '.06em' }}>Weekly Spend</span>
              <span style={{ font: '700 12px var(--font-mono)' }}>₦ 68,000</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 56 }}>
              {spend.map((h, k) => <div key={k} style={{ flex: 1, height: `${h}%`, borderRadius: 0, background: k === 4 ? 'var(--primary)' : 'var(--border)' }} />)}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
              {days.map((d, k) => <span key={k} style={{ fontSize: 10, color: k === 4 ? 'var(--primary)' : 'var(--fg-muted)', fontWeight: k === 4 ? 700 : 500 }}>{d}</span>)}
            </div>
          </div>
          {/* transactions */}
          <SecHeader title="Recent Transactions" action="See all" />
          <div style={{ padding: '0 20px' }}>{txns.map((t, k) => <TxnRow key={k} {...t} />)}</div>
        </div>
        <BottomNav active="home" onNav={onNav} />
      </div>
    </>
  );
}

function StatWidget({ icon, tint, label, value, color }) {
  return (
    <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 10, padding: 12, borderRadius: 0, border: '1px solid var(--border)' }}>
      <div style={{ width: 36, height: 36, borderRadius: 0, background: tint, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{icon}</div>
      <div>
        <div style={{ fontSize: 11, color: 'var(--fg-muted)', marginBottom: 2, fontWeight: 500 }}>{label}</div>
        <div style={{ font: '700 15px var(--font-mono)', color }}>{value}</div>
      </div>
    </div>
  );
}

function QuickAction({ label, tint, icon, onClick }) {
  return (
    <button onClick={onClick} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 7, padding: '14px 8px', borderRadius: 0, background: 'var(--bg)', border: '1px solid var(--border)', cursor: 'pointer', fontFamily: 'var(--font-body)' }}>
      <div style={{ width: 40, height: 40, borderRadius: 0, background: tint, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{icon}</div>
      <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--fg)' }}>{label}</span>
    </button>
  );
}

const SecHeader = ({ title, action }) => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px 12px' }}>
    <span style={{ fontSize: 15, fontWeight: 700, letterSpacing: '-.01em' }}>{title}</span>
    {action && <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--primary)' }}>{action}</span>}
  </div>
);

/* ── Send money flow ─────────────────────────────────────────────────────── */
function Send({ onBack, onDone, balance }) {
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('James K.');
  const num = amount.replace(/\D/g, '');
  const display = num ? Number(num).toLocaleString() : '';
  const chips = ['5,000', '10,000', '20,000', '50,000'];
  return (
    <>
      <StatusBar />
      <ScreenBody pad="68px 24px 32px">
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
          <div onClick={onBack} style={{ cursor: 'pointer', width: 40, height: 40, borderRadius: 0, border: '1px solid var(--border)', display: 'grid', placeItems: 'center' }}><Icons.back size={20} stroke="var(--fg)" /></div>
          <h1 style={{ fontSize: 20, fontWeight: 800, letterSpacing: '-.02em' }}>Send money</h1>
        </div>
        {/* recipient */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 14, borderRadius: 0, border: '1px solid var(--border)', marginBottom: 22 }}>
          <div style={{ width: 44, height: 44, borderRadius: 0, background: 'var(--gradient-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 15 }}>JK</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 600 }}>{recipient}</div>
            <div style={{ fontSize: 12, color: 'var(--fg-muted)', marginTop: 2, fontFamily: 'var(--font-mono)' }}>0123 4567 89 · GTBank</div>
          </div>
          <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--success)', background: 'var(--success-soft)', padding: '3px 8px', borderRadius: 0 }}>Verified</span>
        </div>
        {/* amount */}
        <div style={{ textAlign: 'center', padding: '8px 0 4px' }}>
          <div style={{ fontSize: 12, color: 'var(--fg-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: 8 }}>Amount</div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4 }}>
            <span style={{ font: '700 32px var(--font-mono)', color: display ? 'var(--fg)' : 'var(--mono-300)' }}>₦</span>
            <input autoFocus value={display} onChange={e => setAmount(e.target.value)} inputMode="numeric" placeholder="0"
              style={{ border: 'none', outline: 'none', background: 'transparent', font: '700 44px var(--font-mono)', letterSpacing: '-.02em', color: display ? 'var(--fg)' : 'var(--mono-300)', width: '100%', textAlign: 'center' }} />
          </div>
          <div style={{ fontSize: 12, color: 'var(--fg-muted)', marginTop: 6 }}>Balance: ₦ {balance}.00</div>
        </div>
        <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap', margin: '20px 0' }}>
          {chips.map(c => (
            <button key={c} onClick={() => setAmount(c.replace(/\D/g, ''))} style={{ padding: '7px 14px', borderRadius: 0, border: '1px solid var(--border-input)', background: 'var(--bg)', fontSize: 13, fontWeight: 600, color: 'var(--fg)', cursor: 'pointer', fontFamily: 'var(--font-mono)' }}>₦{c}</button>
          ))}
        </div>
        <div style={{ marginTop: 'auto' }}><Button disabled={!num} onClick={onDone}>{num ? `Send ₦ ${display}` : 'Enter an amount'}</Button></div>
      </ScreenBody>
    </>
  );
}

/* ── Success sheet ───────────────────────────────────────────────────────── */
function SuccessOverlay({ onDone, amount }) {
  return (
    <div style={{ position: 'absolute', inset: 0, borderRadius: 52, background: 'rgba(23,23,23,.4)', display: 'flex', alignItems: 'flex-end', zIndex: 200 }}>
      <div style={{ width: '100%', background: '#fff', borderRadius: '0 0 52px 52px', padding: '28px 24px 48px', textAlign: 'center' }}>
        <div style={{ width: 64, height: 64, borderRadius: 0, background: 'var(--success-soft)', display: 'grid', placeItems: 'center', margin: '0 auto 16px' }}><Icons.check size={32} stroke="var(--success)" /></div>
        <h2 style={{ fontSize: 20, fontWeight: 800, letterSpacing: '-.02em' }}>Transfer complete</h2>
        <p style={{ fontSize: 14, color: 'var(--fg-muted)', marginTop: 6, marginBottom: 24 }}>₦ {amount} sent to James K.</p>
        <Button onClick={onDone}>Done</Button>
      </div>
    </div>
  );
}

Object.assign(window, { Home, StatWidget, QuickAction, SecHeader, Send, SuccessOverlay });
