/* MaV Mobile UI Kit — line icons (1.8px stroke, round caps, Lucide-adjacent) */
const Icon = ({ d, size = 22, stroke = 'currentColor', sw = 1.8, fill = 'none', vb = 24, children, ...rest }) => (
  <svg width={size} height={size} viewBox={`0 0 ${vb} ${vb}`} fill={fill}
       stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" {...rest}>
    {d ? <path d={d} /> : children}
  </svg>
);

const Icons = {
  plus:    (p) => <Icon {...p} d="M12 5v14M5 12h14" sw={2} />,
  send:    (p) => <Icon {...p}><path d="M20 12H4" /><path d="M12 5l-7 7 7 7" /></Icon>,
  card:    (p) => <Icon {...p}><rect x="2" y="5" width="20" height="14" rx="2.5" /><path d="M2 10h20" /></Icon>,
  clock:   (p) => <Icon {...p}><circle cx="12" cy="12" r="8" /><path d="M12 8v4l3 2" /></Icon>,
  credit:  (p) => <Icon {...p} d="M14 7L7 14M12 14H6V8" />,
  debit:   (p) => <Icon {...p} d="M7 14L14 7M9 7H15V13" />,
  search:  (p) => <Icon {...p}><circle cx="11" cy="11" r="7" /><path d="M17 17l4 4" /></Icon>,
  bell:    (p) => <Icon {...p}><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.7 21a2 2 0 0 1-3.4 0" /></Icon>,
  user:    (p) => <Icon {...p}><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4.4 3.6-8 8-8s8 3.6 8 8" /></Icon>,
  home:    (p) => <Icon {...p}><path d="M3 10l9-7 9 7v10h-6v-6H9v6H3z" /></Icon>,
  chevron: (p) => <Icon {...p} d="M9 6l6 6-6 6" />,
  chevronDown: (p) => <Icon {...p} d="M6 9l6 6 6-6" />,
  back:    (p) => <Icon {...p} d="M15 6l-6 6 6 6" />,
  check:   (p) => <Icon {...p} d="M5 12l4 4 10-10" sw={2.2} />,
  trendUp: (p) => <Icon {...p} d="M3 16l4-4 3 3 7-8" />,
  trendDown:(p) => <Icon {...p} d="M3 8l4 4 3-3 7 8" />,
  pay:     (p) => <Icon {...p}><rect x="2" y="5" width="20" height="14" rx="2.5" /><path d="M2 10h20" /></Icon>,
  scan:    (p) => <Icon {...p}><path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3" /><path d="M3 12h18" /></Icon>,
  shield:  (p) => <Icon {...p}><path d="M12 3l8 3v6c0 4.5-3.3 7.5-8 9-4.7-1.5-8-4.5-8-9V6z" /></Icon>,
};

const BrandMark = ({ size = 18, color = '#fff' }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill={color}>
    <rect x="2" y="2" width="7" height="7" rx="2" />
    <rect x="11" y="2" width="7" height="7" rx="2" />
    <rect x="2" y="11" width="7" height="7" rx="2" />
    <rect x="11" y="11" width="7" height="7" rx="2" opacity="0.4" />
  </svg>
);

const AppleIcon = () => <svg width="16" height="18" viewBox="0 0 16 18" fill="#171717"><path d="M13.24 9.55c-.02-2.2 1.8-3.28 1.88-3.34-1.03-1.5-2.62-1.7-3.18-1.72-1.35-.14-2.64.8-3.32.8-.69 0-1.74-.78-2.87-.76-1.47.02-2.83.86-3.59 2.17-1.53 2.65-.4 6.57 1.1 8.72.73 1.05 1.6 2.23 2.74 2.19 1.1-.04 1.52-.71 2.85-.71 1.33 0 1.71.71 2.87.69 1.18-.02 1.93-1.07 2.65-2.13a9.6 9.6 0 001.2-2.46c-.03-.01-2.31-.89-2.33-3.45zM11.06 3c.61-.73 1.02-1.74.91-2.76-.88.04-1.94.59-2.57 1.3-.56.64-1.06 1.67-.93 2.66 1 .07 2.01-.5 2.59-1.2z"/></svg>;
const GoogleIcon = () => <svg width="18" height="18" viewBox="0 0 18 18"><path d="M17.64 9.2A10.3 10.3 0 0017.52 8H9v2.64h4.84A4.14 4.14 0 0112.1 13l2.57 2c1.52-1.4 2.4-3.47 2.4-5.8z" fill="#4285F4"/><path d="M9 18c2.43 0 4.47-.8 5.96-2.17L12.1 13A5.44 5.44 0 019 14a5.4 5.4 0 01-5.1-3.73L1.23 12.4A9 9 0 009 18z" fill="#34A853"/><path d="M3.9 10.27A5.43 5.43 0 013.58 9c0-.45.08-.88.22-1.27L1.23 5.6A9 9 0 000 9c0 1.45.35 2.82.97 4.04z" fill="#FBBC05"/><path d="M9 3.6c1.32 0 2.5.45 3.44 1.35L14.97 2.43A9 9 0 009 0 9 9 0 001.23 5.6L3.9 7.73A5.4 5.4 0 019 3.6z" fill="#EA4335"/></svg>;

Object.assign(window, { Icon, Icons, BrandMark, AppleIcon, GoogleIcon });
