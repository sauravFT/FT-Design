/* MaV Web UI Kit — line icons (Lucide-adjacent, 2px stroke on 24 viewbox) */
const WIcon = ({ size = 16, sw = 2, children, fill = 'none', ...rest }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="currentColor"
       strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" {...rest}>{children}</svg>
);
const WIcons = {
  grid:   (p) => <WIcon {...p}><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></WIcon>,
  search: (p) => <WIcon {...p}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></WIcon>,
  heart:  (p) => <WIcon {...p}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></WIcon>,
  bell:   (p) => <WIcon {...p}><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></WIcon>,
  gear:   (p) => <WIcon {...p}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></WIcon>,
  wallet: (p) => <WIcon {...p}><path d="M19 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0 0 4h14a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5"/><path d="M16 12h.01"/></WIcon>,
  send:   (p) => <WIcon {...p}><path d="M22 2 11 13"/><path d="M22 2 15 22l-4-9-9-4z"/></WIcon>,
  download:(p) => <WIcon {...p}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/></WIcon>,
  plus:   (p) => <WIcon {...p}><path d="M12 5v14M5 12h14"/></WIcon>,
  arrowUp:(p) => <WIcon {...p}><path d="M7 17L17 7M9 7H17V15"/></WIcon>,
  arrowDown:(p) => <WIcon {...p}><path d="M17 7L7 17M15 17H7V9"/></WIcon>,
  logout: (p) => <WIcon {...p}><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5"/><path d="M21 12H9"/></WIcon>,
  list:   (p) => <WIcon {...p}><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></WIcon>,
  analytics:(p) => <WIcon {...p}><path d="M3 3v18h18"/><rect x="7" y="11" width="3" height="6"/><rect x="12" y="7" width="3" height="10"/><rect x="17" y="13" width="3" height="4"/></WIcon>,
  mail:   (p) => <WIcon {...p}><rect x="3" y="5" width="18" height="14" rx="0"/><path d="M3 6l9 7 9-7"/></WIcon>,
  user:   (p) => <WIcon {...p}><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"/></WIcon>,
  help:   (p) => <WIcon {...p}><circle cx="12" cy="12" r="9"/><path d="M9.2 9.2a3 3 0 0 1 5.4 1.4c0 2-3 2.6-3 4"/><path d="M12 17h.01"/></WIcon>,
  calendar:(p) => <WIcon {...p}><rect x="3" y="4" width="18" height="17" rx="0"/><path d="M3 9h18M8 2v4M16 2v4"/></WIcon>,
  chevronDown:(p) => <WIcon {...p}><path d="M6 9l6 6 6-6"/></WIcon>,
  caretUp:(p) => <WIcon {...p} sw={2.4}><path d="M6 14l6-6 6 6"/></WIcon>,
  caretDown:(p) => <WIcon {...p} sw={2.4}><path d="M6 10l6 6 6-6"/></WIcon>,
};
const WBrandMark = ({ size = 16, color = '#fff' }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill={color}>
    <rect x="2" y="2" width="7" height="7" rx="2"/><rect x="11" y="2" width="7" height="7" rx="2"/>
    <rect x="2" y="11" width="7" height="7" rx="2"/><rect x="11" y="11" width="7" height="7" rx="2" opacity="0.4"/>
  </svg>
);
Object.assign(window, { WIcon, WIcons, WBrandMark });
