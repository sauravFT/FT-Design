/* @ds-bundle: {"format":3,"namespace":"MaVFyscalDesignSystem_e41a36","components":[],"sourceHashes":{"js/theme.js":"4f350b62263a","slides/Icons.jsx":"fb665ea1c37b","slides/deck-stage.js":"eac2199dccb4","ui_kits/mobile-app/Icons.jsx":"ba5df4014a71","ui_kits/mobile-app/Primitives.jsx":"c707c6193295","ui_kits/mobile-app/ScreensApp.jsx":"3683ffb540d6","ui_kits/mobile-app/ScreensAuth.jsx":"4435f4c0f56c","ui_kits/web-app/Icons.jsx":"e7ce0159001b","ui_kits/web-app/Shell.jsx":"00598429a26b","ui_kits/web-app/Widgets.jsx":"12276b1ffa55","ui_kits/website/HeroBeam.jsx":"740172245d21","ui_kits/website/Icons.jsx":"fb665ea1c37b","ui_kits/website/Library.jsx":"9d1b4de6cde5","ui_kits/website/LibraryExtras.jsx":"7d28ead6bbcb","ui_kits/website/LibraryMarketing.jsx":"d4424c686786","ui_kits/website/LibrarySections.jsx":"b6f536e772b4","ui_kits/website/LibrarySectionsB.jsx":"118af3888159","ui_kits/website/LibrarySectionsC.jsx":"ef364fa2d9a7","ui_kits/website/Nav.jsx":"701a9faf03d8","ui_kits/website/Sections.jsx":"86ae6e426bd6","ui_kits/website/fluted-glass.js":"00a700406cf3","ui_kits/website/theme-toggle.js":"34cd94bbebb8"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MaVFyscalDesignSystem_e41a36 = window.MaVFyscalDesignSystem_e41a36 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// js/theme.js
try { (() => {
/* MaV Design System — Theme + Global Nav */
(function () {
  var STORAGE_KEY = 'mav-theme';

  /* ── Full nav tree (all hrefs relative to project root) ──────────────── */
  var NAV = [{
    group: 'Getting Started'
  }, {
    href: 'index.html',
    label: 'Overview'
  }, {
    href: 'customiser.html',
    label: '✦ Live Customiser'
  }, {
    href: 'foundations/tokens.html',
    label: 'Token Architecture'
  }, {
    href: 'dev/css-variables.html',
    label: 'CSS Variables'
  }, {
    group: 'Foundations'
  }, {
    href: 'foundations/colors.html',
    label: 'Color System'
  }, {
    href: 'foundations/typography.html',
    label: 'Typography'
  }, {
    href: 'foundations/spacing.html',
    label: 'Spacing & Layout'
  }, {
    href: 'foundations/effects.html',
    label: 'Shadows & Effects'
  }, {
    href: 'foundations/dark-mode.html',
    label: 'Dark Mode'
  }, {
    group: 'Components'
  }, {
    href: 'components/buttons.html',
    label: 'Buttons'
  }, {
    href: 'components/inputs.html',
    label: 'Input Fields'
  }, {
    href: 'components/otp.html',
    label: 'OTP Input'
  }, {
    href: 'components/forms.html',
    label: 'Forms & Controls'
  }, {
    href: 'components/feedback.html',
    label: 'Alerts & Toasts'
  }, {
    href: 'components/badges.html',
    label: 'Badges & Chips'
  }, {
    href: 'components/navigation.html',
    label: 'Navigation'
  }, {
    href: 'components/chat.html',
    label: 'Chat Bubbles'
  }, {
    href: 'components/finance.html',
    label: 'Finance Modules'
  }, {
    href: 'components/all.html',
    label: 'Kitchen Sink'
  }, {
    group: 'iOS Screens'
  }, {
    href: 'ios/01-onboarding.html',
    label: 'Onboarding'
  }, {
    href: 'ios/02-login.html',
    label: 'Login'
  }, {
    href: 'ios/03-otp.html',
    label: 'OTP Verify'
  }, {
    href: 'ios/04-home.html',
    label: 'Home'
  }, {
    href: 'ios/05-profile.html',
    label: 'Profile'
  }, {
    href: 'ios/06-settings.html',
    label: 'Settings'
  }, {
    href: 'ios/07-notifications.html',
    label: 'Notifications'
  }, {
    href: 'ios/08-dark-mode.html',
    label: 'Dark Mode'
  }, {
    href: 'ios/09-explore.html',
    label: 'Explore'
  }, {
    href: 'ios/10-payment.html',
    label: 'Payment'
  }, {
    group: 'Android Screens'
  }, {
    href: 'android/01-onboarding.html',
    label: 'Onboarding'
  }, {
    href: 'android/02-login.html',
    label: 'Login'
  }, {
    href: 'android/03-otp.html',
    label: 'OTP Verify'
  }, {
    href: 'android/04-home.html',
    label: 'Home'
  }, {
    href: 'android/05-profile.html',
    label: 'Profile'
  }, {
    href: 'android/06-settings.html',
    label: 'Settings'
  }, {
    href: 'android/07-notifications.html',
    label: 'Notifications'
  }, {
    href: 'android/08-dark-mode.html',
    label: 'Dark Mode'
  }, {
    href: 'android/09-explore.html',
    label: 'Explore'
  }, {
    href: 'android/10-payment.html',
    label: 'Payment'
  }, {
    group: 'Web App'
  }, {
    href: 'web/01-landing.html',
    label: 'Landing'
  }, {
    href: 'web/02-login.html',
    label: 'Login'
  }, {
    href: 'web/03-dashboard.html',
    label: 'Dashboard'
  }, {
    href: 'web/04-explore.html',
    label: 'Explore'
  }, {
    href: 'web/05-profile.html',
    label: 'Profile'
  }, {
    href: 'web/06-settings.html',
    label: 'Settings'
  }, {
    href: 'web/07-notifications.html',
    label: 'Notifications'
  }, {
    href: 'web/08-dark-mode.html',
    label: 'Dark Mode'
  }, {
    href: 'web/09-checkout.html',
    label: 'Checkout'
  }, {
    href: 'web/10-playground.html',
    label: 'Component Playground'
  }, {
    group: 'Developer Reference'
  }, {
    href: 'dev/css-variables.html',
    label: 'CSS Variables'
  }, {
    href: 'dev/token-architecture.html',
    label: 'Token Architecture'
  }, {
    href: 'dev/otp-spec.html',
    label: 'OTP Spec'
  }, {
    href: 'dev/accessibility.html',
    label: 'Accessibility'
  }, {
    href: 'dev/grid-breakpoints.html',
    label: 'Grid & Breakpoints'
  }];

  /* ── Helpers ──────────────────────────────────────────────────────────── */
  function getPrefix() {
    var path = window.location.pathname;
    var dirs = ['components', 'foundations', 'ios', 'android', 'web', 'dev'];
    for (var i = 0; i < dirs.length; i++) {
      if (path.indexOf('/' + dirs[i] + '/') !== -1) return '../';
    }
    return '';
  }
  function isActive(href) {
    var path = window.location.pathname;
    if (href === 'index.html') {
      return path.endsWith('/') || path.endsWith('/index.html');
    }
    return path.indexOf('/' + href) !== -1;
  }
  function buildLinks(prefix, groupCls, linkCls) {
    var html = '';
    for (var i = 0; i < NAV.length; i++) {
      var item = NAV[i];
      if (item.group) {
        html += '<div class="' + groupCls + '">' + item.group + '</div>';
      } else {
        var cls = linkCls + (isActive(item.href) ? ' active' : '');
        html += '<a href="' + prefix + item.href + '" class="' + cls + '">' + item.label + '</a>';
      }
    }
    return html;
  }

  /* ── Nav injection (only runs on sub-pages with .doc-sidebar) ─────────── */
  function injectNav() {
    var prefix = getPrefix();
    if (!prefix) return; /* root index.html already has full nav */

    var sidebar = document.querySelector('.doc-sidebar');
    if (!sidebar) return;
    sidebar.innerHTML = '<div class="sidebar-logo">' + '<a href="' + prefix + 'index.html" class="sidebar-logo-mark">' + '<div class="sidebar-logo-icon">' + '<svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">' + '<rect x="1" y="1" width="5" height="5" rx="1"/>' + '<rect x="8" y="1" width="5" height="5" rx="1"/>' + '<rect x="1" y="8" width="5" height="5" rx="1"/>' + '<rect x="8" y="8" width="5" height="5" rx="1" opacity=".4"/>' + '</svg>' + '</div>' + '<span class="sidebar-logo-name">MaV Design System</span>' + '</a>' + '</div>' + buildLinks(prefix, 'sidebar-section-label', 'sidebar-link');
  }

  /* ── Theme ────────────────────────────────────────────────────────────── */
  function getTheme() {
    return localStorage.getItem(STORAGE_KEY) || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
    document.querySelectorAll('[data-theme-icon]').forEach(function (el) {
      el.textContent = theme === 'dark' ? '☀' : '☾';
    });
    document.querySelectorAll('[data-theme-label]').forEach(function (el) {
      el.textContent = theme === 'dark' ? 'Light mode' : 'Dark mode';
    });
  }
  function toggleTheme() {
    applyTheme(getTheme() === 'dark' ? 'light' : 'dark');
  }
  document.addEventListener('DOMContentLoaded', function () {
    injectNav(); /* inject full nav first so new buttons exist */
    applyTheme(getTheme()); /* then apply theme (updates any injected icons) */
    document.querySelectorAll('[data-theme-toggle]').forEach(function (el) {
      el.addEventListener('click', toggleTheme);
    });
  });
  window.mavTheme = {
    toggle: toggleTheme,
    apply: applyTheme,
    get: getTheme
  };

  /* ── Customiser bridge ─────────────────────────────────────────────────── */
  function applySync(data) {
    if (!data) return;
    var root = document.documentElement;
    if (data.theme) root.setAttribute('data-theme', data.theme);
    if (data.clearAll) {
      root.removeAttribute('style');
      return;
    }
    if (data.overrides) {
      Object.entries(data.overrides).forEach(function (entry) {
        if (entry[1] === null || entry[1] === undefined) root.style.removeProperty(entry[0]);else root.style.setProperty(entry[0], entry[1]);
      });
    }
  }

  /* Primary channel: localStorage storage event (works across same-origin iframes) */
  var stored = localStorage.getItem('mav-overrides');
  if (stored) {
    try {
      applySync(JSON.parse(stored));
    } catch (e) {}
  }
  window.addEventListener('storage', function (e) {
    if (e.key !== 'mav-overrides') return;
    try {
      applySync(JSON.parse(e.newValue));
    } catch (e2) {}
  });

  /* Fallback channel: postMessage */
  window.addEventListener('message', function (e) {
    if (!e.data || e.data.type !== 'mav-sync') return;
    applySync(e.data);
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "js/theme.js", error: String((e && e.message) || e) }); }

// slides/Icons.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Fyscal Website UI Kit — line icons (1.75px stroke, 24 viewbox) */
const SIcon = ({
  size = 24,
  sw = 1.75,
  children,
  fill = 'none',
  ...rest
}) => /*#__PURE__*/React.createElement("svg", _extends({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: fill,
  stroke: "currentColor",
  strokeWidth: sw,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, rest), children);
const SIcons = {
  bolt: p => /*#__PURE__*/React.createElement(SIcon, p, /*#__PURE__*/React.createElement("path", {
    d: "M13 2 4 14h7l-1 8 9-12h-7l1-8z"
  })),
  shield: p => /*#__PURE__*/React.createElement(SIcon, p, /*#__PURE__*/React.createElement("path", {
    d: "M12 3l8 3v6c0 4.5-3.3 7.6-8 9-4.7-1.4-8-4.5-8-9V6z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 12l2 2 4-4"
  })),
  globe: p => /*#__PURE__*/React.createElement(SIcon, p, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18"
  })),
  card: p => /*#__PURE__*/React.createElement(SIcon, p, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "5",
    width: "20",
    height: "14",
    rx: "0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 10h20"
  })),
  swap: p => /*#__PURE__*/React.createElement(SIcon, p, /*#__PURE__*/React.createElement("path", {
    d: "M7 4 3 8l4 4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 8h14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 20l4-4-4-4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 16H7"
  })),
  chart: p => /*#__PURE__*/React.createElement(SIcon, p, /*#__PURE__*/React.createElement("path", {
    d: "M3 3v18h18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 14l3-3 3 3 5-6"
  })),
  lock: p => /*#__PURE__*/React.createElement(SIcon, p, /*#__PURE__*/React.createElement("rect", {
    x: "4",
    y: "10",
    width: "16",
    height: "11",
    rx: "0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 10V7a4 4 0 0 1 8 0v3"
  })),
  users: p => /*#__PURE__*/React.createElement(SIcon, p, /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "8",
    r: "3.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 5a3.5 3.5 0 0 1 0 7M21 20c0-2.6-1.4-4.9-3.5-5.5"
  })),
  phone: p => /*#__PURE__*/React.createElement(SIcon, p, /*#__PURE__*/React.createElement("rect", {
    x: "6",
    y: "2",
    width: "12",
    height: "20",
    rx: "0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 18h2"
  })),
  api: p => /*#__PURE__*/React.createElement(SIcon, p, /*#__PURE__*/React.createElement("path", {
    d: "M8 7 3 12l5 5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 7l5 5-5 5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13 4l-2 16"
  })),
  check: p => /*#__PURE__*/React.createElement(SIcon, p, /*#__PURE__*/React.createElement("path", {
    d: "M4 12l5 5L20 6"
  })),
  arrowR: p => /*#__PURE__*/React.createElement(SIcon, p, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 6l6 6-6 6"
  })),
  star: p => /*#__PURE__*/React.createElement(SIcon, p, /*#__PURE__*/React.createElement("path", {
    d: "M12 3l2.6 5.3 5.9.9-4.2 4.1 1 5.9-5.3-2.8-5.3 2.8 1-5.9L3.5 9.2l5.9-.9z"
  })),
  menu: p => /*#__PURE__*/React.createElement(SIcon, p, /*#__PURE__*/React.createElement("path", {
    d: "M3 6h18M3 12h18M3 18h18"
  })),
  x: p => /*#__PURE__*/React.createElement(SIcon, p, /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12M18 6L6 18"
  })),
  naira: p => /*#__PURE__*/React.createElement(SIcon, p, /*#__PURE__*/React.createElement("path", {
    d: "M6 4v16M18 4v16M5 9h14M5 15h14M7 4l10 16"
  })),
  home: p => /*#__PURE__*/React.createElement(SIcon, p, /*#__PURE__*/React.createElement("path", {
    d: "M3 11l9-8 9 8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 10v10h14V10"
  })),
  chevD: p => /*#__PURE__*/React.createElement(SIcon, p, /*#__PURE__*/React.createElement("path", {
    d: "M6 9l6 6 6-6"
  })),
  chevR: p => /*#__PURE__*/React.createElement(SIcon, p, /*#__PURE__*/React.createElement("path", {
    d: "M9 6l6 6-6 6"
  })),
  bell: p => /*#__PURE__*/React.createElement(SIcon, p, /*#__PURE__*/React.createElement("path", {
    d: "M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.7 21a2 2 0 0 1-3.4 0"
  })),
  filter: p => /*#__PURE__*/React.createElement(SIcon, p, /*#__PURE__*/React.createElement("path", {
    d: "M3 5h18l-7 8v6l-4-2v-4z"
  })),
  sort: p => /*#__PURE__*/React.createElement(SIcon, p, /*#__PURE__*/React.createElement("path", {
    d: "M7 4v16M7 4l-3 4M7 4l3 4M17 20V4M17 20l-3-4M17 20l3-4"
  })),
  refresh: p => /*#__PURE__*/React.createElement(SIcon, p, /*#__PURE__*/React.createElement("path", {
    d: "M21 12a9 9 0 1 1-3-6.7L21 8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 4v4h-4"
  })),
  grid: p => /*#__PURE__*/React.createElement(SIcon, p, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "7",
    height: "7"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "3",
    width: "7",
    height: "7"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "14",
    width: "7",
    height: "7"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "14",
    width: "7",
    height: "7"
  })),
  play: p => /*#__PURE__*/React.createElement(SIcon, p, /*#__PURE__*/React.createElement("path", {
    d: "M7 4l13 8-13 8z"
  })),
  drag: p => /*#__PURE__*/React.createElement(SIcon, p, /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "6",
    r: "1.4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "12",
    r: "1.4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "18",
    r: "1.4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "15",
    cy: "6",
    r: "1.4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "15",
    cy: "12",
    r: "1.4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "15",
    cy: "18",
    r: "1.4"
  })),
  dots: p => /*#__PURE__*/React.createElement(SIcon, p, /*#__PURE__*/React.createElement("circle", {
    cx: "5",
    cy: "12",
    r: "1.6"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "1.6"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "12",
    r: "1.6"
  })),
  mail: p => /*#__PURE__*/React.createElement(SIcon, p, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "5",
    width: "18",
    height: "14",
    rx: "0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 6l9 7 9-7"
  })),
  doc: p => /*#__PURE__*/React.createElement(SIcon, p, /*#__PURE__*/React.createElement("path", {
    d: "M6 2h8l4 4v16H6z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 2v4h4"
  })),
  gear: p => /*#__PURE__*/React.createElement(SIcon, p, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"
  })),
  calendar: p => /*#__PURE__*/React.createElement(SIcon, p, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "5",
    width: "18",
    height: "16"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 10h18M8 3v4M16 3v4"
  }))
};

/* Real Fyscal logo (blue F mark + wordmark). variant: 'blue' | 'white' (full knockout) */
const FyscalLogo = ({
  height = 24,
  variant = 'blue'
}) => {
  const wordFill = variant === 'white' ? '#ffffff' : '#000000';
  const markFill = variant === 'white' ? '#ffffff' : '#352EFF';
  return /*#__PURE__*/React.createElement("svg", {
    height: height,
    viewBox: "0 0 253 43",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M58.6363 0L56.4009 13.0744H5.15625L7.40816 0H58.6363Z",
    fill: markFill
  }), /*#__PURE__*/React.createElement("path", {
    d: "M43.5695 42.9998H29.7661L34.2408 16.8239H48.0539L43.5695 42.9998Z",
    fill: markFill
  }), /*#__PURE__*/React.createElement("path", {
    d: "M27.6972 29.9672L4.37739 29.9072L15.7168 31.8338L13.8034 43H0L4.51065 16.824L29.9491 16.7959L27.6972 29.9672Z",
    fill: markFill
  }), /*#__PURE__*/React.createElement("path", {
    d: "M69.9214 16.8929L72.5129 0H82.0056L81.4107 3.87719H76.3052L75.8675 6.65771H80.6477L80.0757 10.3037H75.3184L74.3086 16.8918H69.9214V16.8929Z",
    fill: wordFill
  }), /*#__PURE__*/React.createElement("path", {
    d: "M84.9938 16.8908L86.1821 9.35685L81.4299 0H86.4592L88.305 4.3158C88.4053 4.5388 88.5065 4.79043 88.6108 5.07174C88.7151 5.35305 88.8163 5.65073 88.9166 5.96579C89.1242 5.48092 89.2919 5.10652 89.4187 4.84056C89.5455 4.57562 89.6478 4.38433 89.7245 4.26976L92.7238 0.00102394H97.9259L90.7164 9.40494L89.5404 16.8929H84.9958L84.9938 16.8908Z",
    fill: wordFill
  }), /*#__PURE__*/React.createElement("path", {
    d: "M97.8394 10.9506C98.5088 11.6761 99.1471 12.203 99.7536 12.5321C100.361 12.8613 100.988 13.0268 101.636 13.0268C102.174 13.0268 102.603 12.8953 102.923 12.6314C103.243 12.3675 103.403 12.0199 103.403 11.5885C103.403 11.0022 102.756 10.3693 101.461 9.68856C101.337 9.62234 101.239 9.57169 101.167 9.53469C99.9083 8.87541 99.0466 8.24242 98.5813 7.63476C98.1161 7.0271 97.883 6.287 97.883 5.41543C97.883 3.82615 98.4159 2.52707 99.4808 1.51625C100.546 0.50542 101.919 0 103.599 0C104.486 0 105.339 0.157769 106.158 0.472313C106.976 0.786857 107.749 1.25234 108.476 1.86682L106.643 5.04147C106.069 4.54385 105.545 4.1738 105.072 3.93229C104.599 3.69078 104.163 3.57003 103.763 3.57003C103.327 3.57003 102.963 3.69663 102.672 3.94885C102.381 4.20107 102.235 4.51075 102.235 4.8769C102.235 5.3307 102.781 5.84001 103.872 6.40385C104.257 6.60153 104.556 6.7632 104.767 6.88687C105.887 7.50914 106.665 8.14407 107.102 8.79263C107.538 9.4412 107.756 10.2514 107.756 11.2252C107.756 12.946 107.163 14.321 105.978 15.3494C104.792 16.3787 103.181 16.8929 101.144 16.8929C100.076 16.8929 99.0756 16.664 98.1441 16.2063C97.2127 15.7487 96.3731 15.0689 95.6245 14.1691L97.8394 10.9506Z",
    fill: wordFill
  }), /*#__PURE__*/React.createElement("path", {
    d: "M124.204 1.14374L123.488 5.58708C122.88 5.05177 122.218 4.64712 121.501 4.37216C120.785 4.09719 120.039 3.95971 119.265 3.95971C117.947 3.95971 116.862 4.42578 116.008 5.35599C115.154 6.28717 114.727 7.47479 114.727 8.91885C114.727 10.2245 115.085 11.2336 115.802 11.9484C116.518 12.6631 117.532 13.0209 118.842 13.0209C119.407 13.0209 119.987 12.9517 120.584 12.8123C121.181 12.6728 121.809 12.4642 122.468 12.1853L121.806 16.3537C121.263 16.5292 120.664 16.6637 120.008 16.7554C119.353 16.8471 118.645 16.8929 117.886 16.8929C115.62 16.8929 113.805 16.1821 112.44 14.7595C111.076 13.3368 110.394 11.4491 110.394 9.09533C110.394 7.95939 110.569 6.87611 110.92 5.84547C111.272 4.81581 111.787 3.87878 112.467 3.03536C113.263 2.0525 114.257 1.3017 115.448 0.781023C116.638 0.260341 117.971 0 119.448 0C120.288 0 121.102 0.095549 121.891 0.285685C122.681 0.476797 123.451 0.762494 124.204 1.14374Z",
    fill: wordFill
  }), /*#__PURE__*/React.createElement("path", {
    d: "M123.246 16.8929L131.77 0H137.468L141.085 16.8929H136.468L135.782 13.7083H129.829L128.201 16.8929H123.247H123.246ZM131.537 9.94667H135.13L134.35 5.99992C134.273 5.60811 134.214 5.25722 134.176 4.95032C134.137 4.6424 134.114 4.35391 134.106 4.08486C133.943 4.54624 133.794 4.95236 133.659 5.30223C133.522 5.65209 133.416 5.91195 133.339 6.08074L131.537 9.94667Z",
    fill: wordFill
  }), /*#__PURE__*/React.createElement("path", {
    d: "M141.851 16.8929L144.513 0H149.054L147.014 12.8541H152.592L151.959 16.8929H141.851Z",
    fill: wordFill
  }), /*#__PURE__*/React.createElement("path", {
    d: "M68.9785 42.9999L71.0461 30.0303H67.2363L67.8871 26.1071H79.896L79.2453 30.0303H75.6106L73.543 42.9999H68.9785Z",
    fill: wordFill
  }), /*#__PURE__*/React.createElement("path", {
    d: "M84.9084 39.2383H90.2438L89.6434 42.9999H79.7036L82.4235 26.1071H92.3633L91.7389 30.0067H86.4046L85.9693 32.7648H90.9151L90.3377 36.4343H85.3678L84.9084 39.2383Z",
    fill: wordFill
  }), /*#__PURE__*/React.createElement("path", {
    d: "M107.709 27.2508L106.983 31.6941C106.366 31.1588 105.694 30.7542 104.968 30.4792C104.242 30.2043 103.486 30.0668 102.701 30.0668C101.365 30.0668 100.264 30.5329 99.3982 31.4631C98.5325 32.3942 98.0992 33.5818 98.0992 35.0259C98.0992 36.3315 98.4622 37.3407 99.1894 38.0554C99.9155 38.7701 100.943 39.128 102.272 39.128C102.844 39.128 103.433 39.0588 104.038 38.9193C104.643 38.7799 105.28 38.5712 105.948 38.2923L105.277 42.4607C104.726 42.6362 104.119 42.7708 103.454 42.8625C102.79 42.9541 102.072 42.9999 101.302 42.9999C99.0049 42.9999 97.1652 42.2891 95.7812 40.8665C94.3983 39.4439 93.7063 37.5562 93.7063 35.2024C93.7063 34.0665 93.8839 32.9832 94.2402 31.9525C94.5964 30.9229 95.1185 29.9858 95.8086 29.1424C96.6157 28.1596 97.6229 27.4088 98.8302 26.8881C100.037 26.3674 101.389 26.1071 102.886 26.1071C103.737 26.1071 104.563 26.2026 105.363 26.3928C106.164 26.5839 106.944 26.8695 107.709 27.2508Z",
    fill: wordFill
  }), /*#__PURE__*/React.createElement("path", {
    d: "M108.284 42.9999L110.976 26.1071H115.57L114.51 32.6267H120.479L121.517 26.1071H126.122L123.417 42.9999H118.812L119.908 36.0998H113.962L112.866 42.9999H108.284Z",
    fill: wordFill
  }), /*#__PURE__*/React.createElement("path", {
    d: "M127.082 42.9989L129.752 26.1071H134.919L138.49 34.4491C138.521 34.5187 138.571 34.6374 138.641 34.8072C139.034 35.7227 139.307 36.5227 139.462 37.207V36.7804C139.462 36.4725 139.479 36.1329 139.514 35.7595C139.549 35.3862 139.601 34.935 139.67 34.4041L140.977 26.1081H145.496L142.825 42.9999H137.855L134.063 34.4041C133.785 33.7812 133.575 33.2656 133.433 32.8585C133.29 32.4513 133.168 32.0432 133.069 31.635V32.1076C133.069 32.4155 133.056 32.7408 133.029 33.0825C133.002 33.4252 132.954 33.8804 132.885 34.4502L131.602 42.9999H127.082V42.9989Z",
    fill: wordFill
  }), /*#__PURE__*/React.createElement("path", {
    d: "M155.804 42.9999C154.667 42.9999 153.633 42.842 152.703 42.527C151.772 42.2121 150.945 41.7392 150.221 41.1083C149.461 40.4336 148.866 39.6019 148.439 38.6122C148.011 37.6225 147.798 36.5704 147.798 35.4559C147.798 34.2537 147.981 33.1294 148.347 32.0851C148.713 31.0399 149.258 30.0931 149.983 29.2419C150.83 28.2298 151.864 27.4546 153.084 26.9154C154.304 26.3762 155.628 26.1071 157.055 26.1071C159.445 26.1071 161.377 26.8042 162.851 28.1966C164.324 29.59 165.061 31.4007 165.061 33.6296C165.061 34.8251 164.874 35.9483 164.502 37.0004C164.129 38.0525 163.584 39.0003 162.866 39.8437C161.99 40.8772 160.954 41.6622 159.759 42.1975C158.564 42.7328 157.246 42.9999 155.804 42.9999ZM156.782 30.0453C155.485 30.0453 154.399 30.5182 153.522 31.464C152.646 32.4098 152.208 33.5828 152.208 34.983C152.208 36.2223 152.557 37.212 153.256 37.9521C153.955 38.6931 154.887 39.0627 156.053 39.0627C157.327 39.0627 158.41 38.5732 159.3 37.5942C160.191 36.6153 160.636 35.4218 160.636 34.0148C160.636 32.8564 160.274 31.9048 159.55 31.1608C158.826 30.4168 157.902 30.0444 156.78 30.0444L156.782 30.0453Z",
    fill: wordFill
  }), /*#__PURE__*/React.createElement("path", {
    d: "M167.171 42.9999L169.833 26.1071H174.374L172.334 38.9611H177.912L177.279 42.9999H167.171Z",
    fill: wordFill
  }), /*#__PURE__*/React.createElement("path", {
    d: "M188.221 42.9999C187.083 42.9999 186.05 42.842 185.119 42.527C184.189 42.2121 183.362 41.7392 182.637 41.1083C181.877 40.4336 181.283 39.6019 180.855 38.6122C180.428 37.6225 180.215 36.5704 180.215 35.4559C180.215 34.2537 180.398 33.1294 180.764 32.0851C181.13 31.0399 181.675 30.0931 182.399 29.2419C183.247 28.2298 184.28 27.4546 185.501 26.9154C186.721 26.3762 188.045 26.1071 189.472 26.1071C191.862 26.1071 193.794 26.8042 195.268 28.1966C196.741 29.59 197.478 31.4007 197.478 33.6296C197.478 34.8251 197.291 35.9483 196.918 37.0004C196.546 38.0525 196.001 39.0003 195.283 39.8437C194.406 40.8772 193.371 41.6622 192.176 42.1975C190.98 42.7328 189.663 42.9999 188.221 42.9999ZM189.199 30.0453C187.902 30.0453 186.816 30.5182 185.939 31.464C185.063 32.4098 184.624 33.5828 184.624 34.983C184.624 36.2223 184.974 37.212 185.672 37.9521C186.372 38.6931 187.304 39.0627 188.469 39.0627C189.744 39.0627 190.827 38.5732 191.717 37.5942C192.608 36.6153 193.053 35.4218 193.053 34.0148C193.053 32.8564 192.691 31.9048 191.967 31.1608C191.242 30.4168 190.319 30.0444 189.197 30.0444L189.199 30.0453Z",
    fill: wordFill
  }), /*#__PURE__*/React.createElement("path", {
    d: "M209.318 33.8061L217.426 33.8168C217.359 36.6835 216.569 38.931 215.054 40.5584C213.539 42.1858 211.483 42.9999 208.887 42.9999C206.292 42.9999 204.307 42.3067 202.803 40.9211C201.299 39.5356 200.546 37.6761 200.546 35.3448C200.546 34.0616 200.778 32.8428 201.242 31.6883C201.705 30.5338 202.37 29.5198 203.239 28.6471C204.063 27.8261 205.039 27.1972 206.168 26.7613C207.297 26.3255 208.52 26.1071 209.836 26.1071C211.381 26.1071 212.73 26.4152 213.885 27.0305C215.039 27.6467 216.04 28.5925 216.886 29.8679L213.444 32.2109C213.039 31.4845 212.538 30.9424 211.938 30.5836C211.338 30.2247 210.638 30.0444 209.836 30.0444C208.482 30.0444 207.365 30.5319 206.482 31.5069C205.6 32.482 205.158 33.7135 205.158 35.2024C205.158 36.4339 205.507 37.4226 206.206 38.1666C206.905 38.9106 207.828 39.283 208.975 39.283C209.402 39.283 209.805 39.2333 210.183 39.1348C210.562 39.0363 210.913 38.891 211.237 38.6999C211.523 38.5244 211.77 38.3021 211.976 38.0349C212.182 37.7678 212.348 37.4538 212.473 37.095H208.799L209.318 33.8061Z",
    fill: wordFill
  }), /*#__PURE__*/React.createElement("path", {
    d: "M218.961 42.9999L221.641 26.1071H226.25L223.57 42.9999H218.961Z",
    fill: wordFill
  }), /*#__PURE__*/React.createElement("path", {
    d: "M232.526 39.2383H237.781L237.19 42.9999H227.4L230.079 26.1071H239.868L239.253 30.0067H234L233.571 32.7648H238.442L237.873 36.4343H232.979L232.526 39.2383Z",
    fill: wordFill
  }), /*#__PURE__*/React.createElement("path", {
    d: "M241.731 37.0577C242.411 37.7832 243.059 38.31 243.674 38.6392C244.291 38.9683 244.927 39.1339 245.584 39.1339C246.13 39.1339 246.566 39.0024 246.891 38.7385C247.216 38.4746 247.378 38.1269 247.378 37.6955C247.378 37.1093 246.721 36.4763 245.407 35.7956C245.281 35.7294 245.182 35.6788 245.108 35.6418C243.831 34.9825 242.956 34.3495 242.484 33.7418C242.012 33.1342 241.776 32.3941 241.776 31.5225C241.776 29.9332 242.316 28.6341 243.397 27.6233C244.478 26.6125 245.872 26.1071 247.577 26.1071C248.477 26.1071 249.343 26.2648 250.174 26.5794C251.004 26.8939 251.789 27.3594 252.527 27.9739L250.666 31.1485C250.083 30.6509 249.552 30.2809 249.072 30.0394C248.592 29.7979 248.15 29.6771 247.743 29.6771C247.3 29.6771 246.931 29.8037 246.636 30.0559C246.34 30.3081 246.193 30.6178 246.193 30.984C246.193 31.4378 246.747 31.9471 247.854 32.5109C248.245 32.7086 248.548 32.8702 248.762 32.9939C249.899 33.6162 250.689 34.2511 251.132 34.8997C251.575 35.5483 251.796 36.3585 251.796 37.3323C251.796 39.053 251.195 40.4281 249.991 41.4564C248.788 42.4858 247.153 42.9999 245.086 42.9999C244.001 42.9999 242.986 42.7711 242.041 42.3134C241.095 41.8557 240.243 41.176 239.483 40.2762L241.731 37.0577Z",
    fill: wordFill
  }));
};
Object.assign(window, {
  SIcon,
  SIcons,
  FyscalLogo
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/Icons.jsx", error: String((e && e.message) || e) }); }

// slides/deck-stage.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
/* BEGIN USAGE */
/**
 * <deck-stage> — reusable web component for HTML decks.
 *
 * Handles:
 *  (a) speaker notes — reads <script type="application/json" id="speaker-notes">
 *      and posts {slideIndexChanged: N} to the parent window on nav.
 *  (b) keyboard navigation — ←/→, PgUp/PgDn, Space, Home/End, number keys.
 *      On touch devices, tapping the left/right half of the stage goes
 *      prev/next — taps on links, buttons and other interactive slide
 *      content are left alone.
 *  (c) press R to reset to slide 0 (with a tasteful keyboard hint).
 *  (d) bottom-center overlay showing slide count + hints, fades out on idle.
 *  (e) auto-scaling — inner canvas is a fixed design size (default 1920×1080)
 *      scaled with `transform: scale()` to fit the viewport, letterboxed.
 *      Set the `noscale` attribute to render at authored size (1:1) — the
 *      PPTX exporter sets this so its DOM capture sees unscaled geometry.
 *  (f) print — `@media print` lays every slide out as its own page at the
 *      design size, so the browser's Print → Save as PDF produces a clean
 *      one-page-per-slide PDF with no extra setup.
 *  (g) thumbnail rail — resizable left-hand column of per-slide thumbnails
 *      (static clones). Click to navigate; ↑/↓ with a thumbnail focused to
 *      step between slides; drag to reorder; right-click for
 *      Skip / Move up / Move down / Delete (opens a Cancel/Delete confirm
 *      dialog). Drag the rail's right edge to resize; width persists to
 *      localStorage. Skipped slides carry `data-deck-skip`, are dimmed in
 *      the rail, omitted from prev/next navigation, and hidden at print.
 *      The rail is suppressed in presenting mode, in the host's Preview
 *      mode (ViewerMode='none'), on `noscale`, on narrow viewports
 *      (≤640px), and via the `no-rail` attribute. Rail mutations dispatch
 *      a `deckchange`
 *      CustomEvent on the element: detail = {action, from, to, slide}.
 *
 * Slides are HIDDEN, not unmounted. Non-active slides stay in the DOM with
 * `visibility: hidden` + `opacity: 0`, so their state (videos, iframes,
 * form inputs, React trees) is preserved across navigation.
 *
 * Lifecycle event — the component dispatches a `slidechange` CustomEvent on
 * itself whenever the active slide changes (including the initial mount).
 * The event bubbles and composes out of shadow DOM, so you can listen on
 * the <deck-stage> element or on document:
 *
 *   document.querySelector('deck-stage').addEventListener('slidechange', (e) => {
 *     e.detail.index         // new 0-based index
 *     e.detail.previousIndex // previous index, or -1 on init
 *     e.detail.total         // total slide count
 *     e.detail.slide         // the new active slide element
 *     e.detail.previousSlide // the prior slide element, or null on init
 *     e.detail.reason        // 'init' | 'keyboard' | 'click' | 'tap' | 'api'
 *   });
 *
 * Persistence: none at the deck level. The host app keeps the current slide
 * in its own URL (?slide=) and re-delivers it via location.hash on load, so a
 * bare load with no hash always starts at slide 1.
 *
 * Usage:
 *   <style>deck-stage:not(:defined){visibility:hidden}</style>
 *   <deck-stage width="1920" height="1080">
 *     <section data-label="Title">...</section>
 *     <section data-label="Agenda">...</section>
 *   </deck-stage>
 *   <script src="deck-stage.js"></script>
 *
 * The :not(:defined) rule prevents a flash of the first slide at its
 * authored styles before this script runs and attaches the shadow root.
 *
 * Slides are the direct element children of <deck-stage>. Each slide is
 * automatically tagged with:
 *   - data-screen-label="NN Label"   (1-indexed, for comment flow)
 *   - data-om-validate="no_overflowing_text,no_overlapping_text,slide_sized_text"
 *
 * Speaker notes stay in sync because the component posts {slideIndexChanged: N}
 * to the parent — just include the #speaker-notes script tag if asked for notes.
 *
 * Authoring guidance:
 *   - Write slide bodies as static HTML inside <deck-stage>, with sizing via
 *     CSS custom properties in a <style> block rather than JS constants.
 *     Static slide markup is what lets the user click a heading in edit mode
 *     and retype it directly; a slide rendered through <script type="text/babel">,
 *     React, or a loop over a JS array has to round-trip every tweak through a
 *     chat message instead. Reach for script-generated slides only when the
 *     content genuinely needs interactive behaviour static HTML can't express.
 *   - Do NOT set position/inset/width/height on the slide <section> elements —
 *     the component absolutely positions every slotted child for you.
 *   - Entrance animations: make the visible end-state the base style and
 *     animate *from* hidden, so print and reduced-motion show content.
 *     Gate the animation on [data-deck-active] and the motion query, e.g.
 *     `@media (prefers-reduced-motion:no-preference){ [data-deck-active] .x{animation:fade-in .5s both} }`.
 *     Avoid infinite decorative loops on slide content.
 */
/* END USAGE */

(() => {
  const DESIGN_W_DEFAULT = 1920;
  const DESIGN_H_DEFAULT = 1080;
  const OVERLAY_HIDE_MS = 1800;
  const VALIDATE_ATTR = 'no_overflowing_text,no_overlapping_text,slide_sized_text';
  const FINE_POINTER_MQ = matchMedia('(hover: hover) and (pointer: fine)');
  const NARROW_MQ = matchMedia('(max-width: 640px)');
  // Slide-authored controls that should keep a tap instead of it navigating.
  const INTERACTIVE_SEL = 'a[href], button, input, select, textarea, summary, label, video[controls], audio[controls], [role="button"], [onclick], [tabindex]:not([tabindex^="-"]), [contenteditable]:not([contenteditable="false" i])';
  const pad2 = n => String(n).padStart(2, '0');

  // Label precedence: data-label → data-screen-label (number stripped) → first heading → "Slide".
  const getSlideLabel = el => {
    const explicit = el.getAttribute('data-label');
    if (explicit) return explicit;
    const existing = el.getAttribute('data-screen-label');
    if (existing) return existing.replace(/^\s*\d+\s*/, '').trim() || existing;
    const h = el.querySelector('h1, h2, h3, [data-title]');
    const t = h && (h.textContent || '').trim().slice(0, 40);
    if (t) return t;
    return 'Slide';
  };
  const stylesheet = `
    :host {
      position: fixed;
      inset: 0;
      display: block;
      background: #000;
      color: #fff;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif;
      overflow: hidden;
      -webkit-tap-highlight-color: transparent;
    }
    /* connectedCallback holds this until document.fonts.ready (capped 2s) so
     * the first visible paint has the deck's real typography + final rail
     * layout. opacity (not visibility) so the active slide can't un-hide
     * itself via the ::slotted([data-deck-active]) visibility:visible rule.
     * Only the stage/rail hide — the black :host background stays, so the
     * iframe doesn't flash the page's default white. */
    :host([data-fonts-pending]) .stage,
    :host([data-fonts-pending]) .rail { opacity: 0; pointer-events: none; }

    .stage {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .canvas {
      position: relative;
      transform-origin: center center;
      flex-shrink: 0;
      background: #fff;
      will-change: transform;
    }

    /* Slides live in light DOM (via <slot>) so authored CSS still applies.
       We absolutely position each slotted child to stack them. */
    ::slotted(*) {
      position: absolute !important;
      inset: 0 !important;
      width: 100% !important;
      height: 100% !important;
      box-sizing: border-box !important;
      overflow: hidden;
      opacity: 0;
      pointer-events: none;
      visibility: hidden;
    }
    ::slotted([data-deck-active]) {
      opacity: 1;
      pointer-events: auto;
      visibility: visible;
    }

    .overlay {
      position: fixed;
      left: 50%;
      bottom: 22px;
      transform: translate(-50%, 6px) scale(0.92);
      filter: blur(6px);
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 4px;
      background: #000;
      color: #fff;
      border-radius: 999px;
      font-size: 12px;
      font-feature-settings: "tnum" 1;
      letter-spacing: 0.01em;
      opacity: 0;
      pointer-events: none;
      transition: opacity 260ms ease, transform 260ms cubic-bezier(.2,.8,.2,1), filter 260ms ease;
      transform-origin: center bottom;
      z-index: 2147483000;
      user-select: none;
    }
    .overlay[data-visible] {
      opacity: 1;
      pointer-events: auto;
      transform: translate(-50%, 0) scale(1);
      filter: blur(0);
    }

    .btn {
      appearance: none;
      -webkit-appearance: none;
      background: transparent;
      border: 0;
      margin: 0;
      padding: 0;
      color: inherit;
      font: inherit;
      cursor: default;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 28px;
      min-width: 28px;
      border-radius: 999px;
      color: rgba(255,255,255,0.72);
      transition: background 140ms ease, color 140ms ease;
      -webkit-tap-highlight-color: transparent;
    }
    .btn:hover { background: rgba(255,255,255,0.12); color: #fff; }
    .btn:active { background: rgba(255,255,255,0.18); }
    .btn:focus { outline: none; }
    .btn:focus-visible { outline: none; }
    .btn::-moz-focus-inner { border: 0; }
    .btn svg { width: 14px; height: 14px; display: block; }
    .btn.reset {
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 0.02em;
      padding: 0 10px 0 12px;
      gap: 6px;
      color: rgba(255,255,255,0.72);
    }
    .btn.reset .kbd {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 16px;
      height: 16px;
      padding: 0 4px;
      font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
      font-size: 10px;
      line-height: 1;
      color: rgba(255,255,255,0.88);
      background: rgba(255,255,255,0.12);
      border-radius: 4px;
    }

    .count {
      font-variant-numeric: tabular-nums;
      color: #fff;
      font-weight: 500;
      padding: 0 8px;
      min-width: 42px;
      text-align: center;
      font-size: 12px;
    }
    .count .sep { color: rgba(255,255,255,0.45); margin: 0 3px; font-weight: 400; }
    .count .total { color: rgba(255,255,255,0.55); }

    .divider {
      width: 1px;
      height: 14px;
      background: rgba(255,255,255,0.18);
      margin: 0 2px;
    }

    /* ── Thumbnail rail ──────────────────────────────────────────────────
       Fixed column on the left; each thumbnail is a static deep-clone of
       the light-DOM slide scaled into a 16:9 (or design-aspect) frame. The
       stage re-fits around it (see _fit); hidden during present / noscale
       / print so capture geometry and fullscreen output are unchanged. */
    .rail {
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      width: var(--deck-rail-w, 188px);
      background: #141414;
      border-right: 1px solid rgba(255,255,255,0.08);
      overflow-y: auto;
      overflow-x: hidden;
      padding: 12px 10px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: 12px;
      z-index: 2147482500;
      scrollbar-width: thin;
      scrollbar-color: rgba(255,255,255,0.18) transparent;
    }
    .rail::-webkit-scrollbar { width: 8px; }
    .rail::-webkit-scrollbar-track { background: transparent; margin: 2px; }
    .rail::-webkit-scrollbar-thumb {
      background: rgba(255,255,255,0.18);
      border-radius: 4px;
      border: 2px solid transparent;
      background-clip: content-box;
    }
    .rail::-webkit-scrollbar-thumb:hover {
      background: rgba(255,255,255,0.28);
      border: 2px solid transparent;
      background-clip: content-box;
    }
    :host([no-rail]) .rail,
    :host([noscale]) .rail { display: none; }
    .rail[data-presenting] { display: none; }
    @media (max-width: 640px) {
      .rail, .rail-resize { display: none; }
    }
    /* User-driven show/hide (the TweaksPanel toggle) slides instead of
       popping. Transitions are gated on :host([data-rail-anim]) — set only
       for the 200ms around the toggle — so window-resize and rail-width
       drag (which also call _fit) don't lag behind the cursor. */
    .rail[data-user-hidden] { transform: translateX(-100%); }
    :host([data-rail-anim]) .rail { transition: transform 200ms cubic-bezier(.3,.7,.4,1); }
    :host([data-rail-anim]) .stage { transition: left 200ms cubic-bezier(.3,.7,.4,1); }
    :host([data-rail-anim]) .canvas { transition: transform 200ms cubic-bezier(.3,.7,.4,1); }
    /* transition shorthand replaces rather than merges — repeat the base
       .overlay opacity/transform/filter transitions so visibility changes
       during the 200ms toggle window still fade instead of popping. */
    :host([data-rail-anim]) .overlay {
      transition: margin-left 200ms cubic-bezier(.3,.7,.4,1),
                  opacity 260ms ease,
                  transform 260ms cubic-bezier(.2,.8,.2,1),
                  filter 260ms ease;
    }

    .thumb {
      position: relative;
      display: flex;
      align-items: flex-start;
      gap: 8px;
      cursor: pointer;
      user-select: none;
    }
    .thumb .num {
      width: 16px;
      flex-shrink: 0;
      font-size: 11px;
      font-weight: 500;
      text-align: right;
      color: rgba(255,255,255,0.55);
      padding-top: 2px;
      font-variant-numeric: tabular-nums;
    }
    .thumb .frame {
      position: relative;
      flex: 1;
      min-width: 0;
      aspect-ratio: var(--deck-aspect);
      background: #fff;
      border-radius: 4px;
      outline: 2px solid transparent;
      outline-offset: 0;
      overflow: hidden;
      transition: outline-color 120ms ease;
    }
    .thumb:hover .frame { outline-color: rgba(255,255,255,0.25); }
    .thumb { outline: none; }
    .thumb:focus-visible .frame { outline-color: rgba(255,255,255,0.5); }
    .thumb[data-current] .num { color: #fff; }
    .thumb[data-current] .frame { outline-color: #D97757; }
    .thumb[data-dragging] { opacity: 0.35; }
    .thumb::before {
      content: '';
      position: absolute;
      left: 24px;
      right: 0;
      height: 3px;
      border-radius: 2px;
      background: #D97757;
      opacity: 0;
      pointer-events: none;
    }
    .thumb[data-drop="before"]::before { top: -8px; opacity: 1; }
    .thumb[data-drop="after"]::before { bottom: -8px; opacity: 1; }
    .thumb[data-skip] .frame { opacity: 0.35; }
    .thumb[data-skip] .frame::after {
      content: 'Skipped';
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0,0,0,0.45);
      color: #fff;
      font-size: 10px;
      font-weight: 500;
      letter-spacing: 0.04em;
    }

    .ctxmenu {
      position: fixed;
      min-width: 150px;
      padding: 4px;
      background: #242424;
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 7px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.45);
      z-index: 2147483100;
      display: none;
      font-size: 12px;
    }
    .ctxmenu[data-open] { display: block; }
    .ctxmenu button {
      display: block;
      width: 100%;
      appearance: none;
      border: 0;
      background: transparent;
      color: #e8e8e8;
      font: inherit;
      text-align: left;
      padding: 6px 10px;
      border-radius: 4px;
      cursor: pointer;
    }
    .ctxmenu button:hover:not(:disabled) { background: rgba(255,255,255,0.08); }
    .ctxmenu button:disabled { opacity: 0.35; cursor: default; }
    .ctxmenu hr {
      border: 0;
      border-top: 1px solid rgba(255,255,255,0.1);
      margin: 4px 2px;
    }

    .rail-resize {
      position: fixed;
      left: calc(var(--deck-rail-w, 188px) - 3px);
      top: 0;
      bottom: 0;
      width: 6px;
      cursor: col-resize;
      z-index: 2147482600;
      touch-action: none;
    }
    .rail-resize:hover,
    .rail-resize[data-dragging] { background: rgba(255,255,255,0.12); }
    :host([no-rail]) .rail-resize,
    :host([noscale]) .rail-resize,
    .rail[data-presenting] + .rail-resize,
    .rail[data-user-hidden] + .rail-resize { display: none; }

    /* Delete-confirm popup — matches the SPA's ConfirmDialog layout
       (title + message body, depressed footer with Cancel / Delete). */
    .confirm-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.45);
      z-index: 2147483200;
      display: none;
      align-items: center;
      justify-content: center;
    }
    .confirm-backdrop[data-open] { display: flex; }
    .confirm {
      width: 320px;
      max-width: calc(100vw - 32px);
      background: #2a2a2a;
      color: #e8e8e8;
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 12px;
      box-shadow: 0 12px 32px rgba(0,0,0,0.5);
      overflow: hidden;
      font-family: inherit;
      animation: deck-confirm-in 0.18s ease;
    }
    @keyframes deck-confirm-in {
      from { opacity: 0; transform: scale(0.96); }
      to { opacity: 1; transform: scale(1); }
    }
    .confirm .body { padding: 20px 20px 16px; }
    .confirm .title { font-size: 14px; font-weight: 600; margin-bottom: 4px; }
    .confirm .msg { font-size: 13px; line-height: 1.5; color: rgba(255,255,255,0.65); }
    .confirm .footer {
      padding: 14px 20px;
      background: #1f1f1f;
      border-top: 1px solid rgba(255,255,255,0.08);
      display: flex;
      justify-content: flex-end;
      gap: 8px;
    }
    .confirm button {
      appearance: none;
      font: inherit;
      font-size: 13px;
      font-weight: 500;
      padding: 8px 16px;
      border-radius: 8px;
      cursor: pointer;
    }
    .confirm .cancel {
      background: transparent;
      border: 0;
      color: rgba(255,255,255,0.8);
    }
    .confirm .cancel:hover { background: rgba(255,255,255,0.08); }
    .confirm .danger {
      background: #c96442;
      border: 1px solid rgba(0,0,0,0.15);
      color: #fff;
      box-shadow: 0 1px 3px rgba(166,50,68,0.3), 0 2px 6px rgba(166,50,68,0.18);
    }
    .confirm .danger:hover { background: #b5563a; }

    /* ── Print: one page per slide, no chrome ────────────────────────────
       The screen layout stacks every slide at inset:0 inside a scaled
       canvas; for print we want them in document flow at the authored
       design size so the browser paginates one slide per sheet. The
       @page size is set from the width/height attributes via the inline
       <style id="deck-stage-print-page"> that connectedCallback injects
       into <head> (the @page at-rule has no effect inside shadow DOM). */
    @media print {
      :host {
        position: static;
        inset: auto;
        background: none;
        overflow: visible;
        color: inherit;
      }
      .stage { position: static; display: block; }
      .canvas {
        transform: none !important;
        width: auto !important;
        height: auto !important;
        background: none;
        will-change: auto;
      }
      ::slotted(*) {
        position: relative !important;
        inset: auto !important;
        width: var(--deck-design-w) !important;
        height: var(--deck-design-h) !important;
        box-sizing: border-box !important;
        opacity: 1 !important;
        visibility: visible !important;
        pointer-events: auto;
        break-after: page;
        page-break-after: always;
        break-inside: avoid;
        overflow: hidden;
      }
      /* :last-child alone isn't enough once data-deck-skip hides the
         trailing slide(s) — the last *visible* slide still carries
         break-after:page and prints a blank sheet. _markLastVisible()
         maintains data-deck-last-visible on the last non-skipped slide. */
      ::slotted(*:last-child),
      ::slotted([data-deck-last-visible]) {
        break-after: auto;
        page-break-after: auto;
      }
      ::slotted([data-deck-skip]) { display: none !important; }
      .overlay, .rail, .rail-resize, .ctxmenu, .confirm-backdrop { display: none !important; }
    }
  `;
  class DeckStage extends HTMLElement {
    static get observedAttributes() {
      return ['width', 'height', 'noscale', 'no-rail'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._index = 0;
      this._slides = [];
      this._notes = [];
      this._hideTimer = null;
      this._mouseIdleTimer = null;
      this._menuIndex = -1;
      this._onKey = this._onKey.bind(this);
      this._onResize = this._onResize.bind(this);
      this._onSlotChange = this._onSlotChange.bind(this);
      this._onMouseMove = this._onMouseMove.bind(this);
      this._onTap = this._onTap.bind(this);
      this._onMessage = this._onMessage.bind(this);
      // Capture-phase close so a click anywhere dismisses the menu, but
      // ignore clicks that land inside the menu itself — otherwise the
      // capture handler runs before the menu's own (bubble) handler and
      // clears _menuIndex out from under it.
      this._onDocClick = e => {
        if (this._menu && e.composedPath && e.composedPath().includes(this._menu)) return;
        this._closeMenu();
      };
    }
    get designWidth() {
      return parseInt(this.getAttribute('width'), 10) || DESIGN_W_DEFAULT;
    }
    get designHeight() {
      return parseInt(this.getAttribute('height'), 10) || DESIGN_H_DEFAULT;
    }
    connectedCallback() {
      // Presenter-view popup loads deckUrl?_snthumb=...#N for its prev/cur/
      // next thumbnails — the rail has no business rendering inside those
      // (wrong scale, and it offsets the stage so the thumb shows a gutter).
      if (/[?&]_snthumb=/.test(location.search)) this.setAttribute('no-rail', '');
      this._render();
      this._loadNotes();
      this._syncPrintPageRule();
      window.addEventListener('keydown', this._onKey);
      window.addEventListener('resize', this._onResize);
      window.addEventListener('mousemove', this._onMouseMove, {
        passive: true
      });
      window.addEventListener('message', this._onMessage);
      window.addEventListener('click', this._onDocClick, true);
      this.addEventListener('click', this._onTap);
      // Print lays every slide out as its own page, so [data-deck-active]-
      // gated entrance styles need the attribute on every slide (not just
      // the current one) or their content prints at the hidden base style.
      // The transient freeze style lands BEFORE the attributes so any
      // attribute-keyed transition fires at 0s (changing transition-
      // duration after a transition has started doesn't affect it).
      this._onBeforePrint = () => {
        if (this._freezeStyle) this._freezeStyle.remove();
        this._freezeStyle = document.createElement('style');
        this._freezeStyle.textContent = '*,*::before,*::after{transition-duration:0s !important}';
        document.head.appendChild(this._freezeStyle);
        this._slides.forEach(s => s.setAttribute('data-deck-active', ''));
      };
      this._onAfterPrint = () => {
        this._applyIndex({
          showOverlay: false,
          broadcast: false
        });
        if (this._freezeStyle) {
          this._freezeStyle.remove();
          this._freezeStyle = null;
        }
      };
      window.addEventListener('beforeprint', this._onBeforePrint);
      window.addEventListener('afterprint', this._onAfterPrint);
      // Initial collection + layout happens via slotchange, which fires on mount.
      this._enableRail();
      // Hold the stage hidden until webfonts are ready so the first visible
      // paint has the deck's real typography — the :not(:defined) guard in
      // the page HTML only covers custom-element upgrade, not font load.
      // Capped so a 404'd font URL can't blank the deck indefinitely.
      this.setAttribute('data-fonts-pending', '');
      const reveal = () => this.removeAttribute('data-fonts-pending');
      // rAF first: fonts.ready is a pre-resolved promise until layout has
      // resolved the slotted text's font-family and pushed a FontFace into
      // 'loading'. Reading it here in connectedCallback (parse-time) would
      // settle the race in a microtask before any font fetch starts.
      requestAnimationFrame(() => {
        Promise.race([document.fonts ? document.fonts.ready : Promise.resolve(), new Promise(r => setTimeout(r, 2000))]).then(reveal, reveal);
      });
    }
    _enableRail() {
      // Idempotent — older host builds still post __omelette_rail_enabled.
      // no-rail guard keeps the observers/stylesheet walk off the cheap path
      // for presenter-popup thumbnail iframes (up to 9 per view).
      if (this._railEnabled || this.hasAttribute('no-rail')) return;
      this._railEnabled = true;
      // Per-viewer preference — restored alongside rail width. Default on;
      // only a stored '0' (from the TweaksPanel toggle) hides it.
      this._railVisible = true;
      try {
        if (localStorage.getItem('deck-stage.railVisible') === '0') this._railVisible = false;
      } catch (e) {}
      // Live thumbnail updates: watch the light-DOM slides for content
      // edits and re-clone just the affected thumb(s), debounced. Ignore
      // the data-deck-* / data-screen-label / data-om-validate attributes
      // this component itself writes so nav and skip don't trigger
      // spurious refreshes.
      const OWN_ATTRS = /^data-(deck-|screen-label$|om-validate$)/;
      this._liveDirty = new Set();
      this._liveObserver = new MutationObserver(records => {
        for (const r of records) {
          if (r.type === 'attributes' && OWN_ATTRS.test(r.attributeName || '')) continue;
          let n = r.target;
          while (n && n.parentElement !== this) n = n.parentElement;
          if (n && this._slideSet && this._slideSet.has(n)) this._liveDirty.add(n);
        }
        if (this._liveDirty.size && !this._liveTimer) {
          this._liveTimer = setTimeout(() => {
            this._liveTimer = null;
            this._liveDirty.forEach(s => this._refreshThumb(s));
            this._liveDirty.clear();
          }, 200);
        }
      });
      this._liveObserver.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      // Lazy thumbnail materialization — clone the slide only when its
      // frame scrolls into (or near) the rail viewport. rootMargin gives
      // ~4 thumbs of pre-load so fast scrolling doesn't flash blanks.
      this._railObserver = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting && e.target.__deckThumb) {
            this._materialize(e.target.__deckThumb);
          }
        });
      }, {
        root: this._rail,
        rootMargin: '400px 0px'
      });
      // Tweaks typically change CSS vars / attrs OUTSIDE <deck-stage>
      // (on <html>, <body>, a wrapper div, or a <style> tag), which
      // _liveObserver can't see. Re-snapshot author CSS (constructable
      // sheet is shared by reference, so one replaceSync updates every
      // thumb shadow root) and re-sync each thumb host's attrs + custom
      // properties. In-slide DOM mutations are _liveObserver's job.
      // Debounced so slider drags don't thrash.
      this._onTweakChange = () => {
        clearTimeout(this._tweakTimer);
        this._tweakTimer = setTimeout(() => {
          this._snapshotAuthorCss();
          // One getComputedStyle for the whole batch — each
          // getPropertyValue read below reuses the same computed style
          // as long as nothing invalidates layout between thumbs.
          const cs = getComputedStyle(this);
          (this._thumbs || []).forEach(t => {
            if (t.host) this._syncThumbHostAttrs(t.host, cs);
          });
        }, 120);
      };
      window.addEventListener('tweakchange', this._onTweakChange);
      this._snapshotAuthorCss();
      // Build the rail now that it's enabled — slotchange already fired,
      // so _renderRail's early-return skipped the initial build.
      this._syncRailHidden();
      this._renderRail();
      this._fit();
    }

    /** Snapshot document stylesheets into a constructable sheet that each
     *  thumbnail's nested shadow root adopts — so author CSS styles the
     *  cloned slide content without touching this component's chrome.
     *  Cross-origin sheets throw on .cssRules — skip them. Re-callable:
     *  the existing constructable sheet is reused via replaceSync so every
     *  already-adopted shadow root picks up the fresh CSS without re-adopt. */
    _snapshotAuthorCss() {
      // :root in an adopted sheet inside a shadow root matches nothing
      // (only the document root qualifies), so author rules like
      // `:root[data-voice="modern"] .serif` never reach the clones.
      // Rewrite :root → :host and mirror <html>'s data-*/class/lang onto
      // each thumb host (see _syncThumbHostAttrs) so the same selectors
      // match inside the thumbnail's shadow tree.
      const authorCss = Array.from(document.styleSheets).map(sh => {
        try {
          return Array.from(sh.cssRules).map(r => r.cssText).join('\n');
        } catch (e) {
          return '';
        }
      }).join('\n')
      // The shadow host is featureless outside the functional :host(...)
      // form, so any compound on :root — [attr], .class, #id, :pseudo —
      // must become :host(<compound>) not :host<compound>. Same for the
      // html type selector (Tailwind class-strategy dark mode emits
      // html.dark; Pico uses html[data-theme]), which has nothing to
      // match inside the thumb's shadow tree.
      .replace(/:root((?:\[[^\]]*\]|[.#][-\w]+|:[-\w]+(?:\([^)]*\))?)+)/g, ':host($1)').replace(/:root\b/g, ':host').replace(/(^|[\s,>~+(}])html((?:\[[^\]]*\]|[.#][-\w]+|:[-\w]+(?:\([^)]*\))?)+)(?![-\w])/g, '$1:host($2)').replace(/(^|[\s,>~+(}])html(?![-\w])/g, '$1:host');
      // Every custom property the author references. _syncThumbHostAttrs
      // mirrors each one's *computed* value at <deck-stage> onto the
      // thumb host so the live value wins over the :host default above
      // regardless of which ancestor the tweak wrote to (<html>, <body>,
      // a wrapper div, or the deck-stage element itself all inherit
      // down to getComputedStyle(this)).
      this._authorVars = new Set(authorCss.match(/--[\w-]+/g) || []);
      try {
        if (!this._adoptedSheet) this._adoptedSheet = new CSSStyleSheet();
        this._adoptedSheet.replaceSync(authorCss);
      } catch (e) {
        this._adoptedSheet = null;
        this._authorCss = authorCss;
      }
    }
    _syncThumbHostAttrs(host, cs) {
      const de = document.documentElement;
      // setAttribute overwrites but can't delete — an attr removed from
      // <html> (toggleAttribute off, classList emptied) would linger on
      // the host and :host([data-*]) / :host(.foo) rules would keep
      // matching. Remove stale mirrored attrs first; iterate backward
      // because removeAttribute mutates the live NamedNodeMap.
      for (let i = host.attributes.length - 1; i >= 0; i--) {
        const n = host.attributes[i].name;
        if ((n.startsWith('data-') || n === 'class' || n === 'lang') && !de.hasAttribute(n)) {
          host.removeAttribute(n);
        }
      }
      for (const a of de.attributes) {
        if (a.name.startsWith('data-') || a.name === 'class' || a.name === 'lang') {
          host.setAttribute(a.name, a.value);
        }
      }
      // The :root→:host rewrite in _snapshotAuthorCss pins each custom
      // property to its stylesheet default on the thumb host, shadowing
      // the live value that would otherwise inherit. Tweaks can write the
      // live value on any ancestor — <html>, <body>, a wrapper div, the
      // deck-stage element — so read it as the *computed* value at
      // <deck-stage> (which sees the whole inheritance chain) rather than
      // trying to guess which element the author wrote to. Inline on the
      // host beats the :host{} rule. remove-stale covers vars dropped
      // from the stylesheet between snapshots.
      const vars = this._authorVars || new Set();
      for (let i = host.style.length - 1; i >= 0; i--) {
        const p = host.style[i];
        if (p.startsWith('--') && !vars.has(p)) host.style.removeProperty(p);
      }
      const live = cs || getComputedStyle(this);
      vars.forEach(p => {
        const v = live.getPropertyValue(p);
        if (v) host.style.setProperty(p, v.trim());else host.style.removeProperty(p);
      });
    }
    disconnectedCallback() {
      window.removeEventListener('keydown', this._onKey);
      window.removeEventListener('resize', this._onResize);
      window.removeEventListener('mousemove', this._onMouseMove);
      window.removeEventListener('message', this._onMessage);
      window.removeEventListener('click', this._onDocClick, true);
      window.removeEventListener('beforeprint', this._onBeforePrint);
      window.removeEventListener('afterprint', this._onAfterPrint);
      if (this._freezeStyle) {
        this._freezeStyle.remove();
        this._freezeStyle = null;
      }
      this.removeEventListener('click', this._onTap);
      if (this._hideTimer) clearTimeout(this._hideTimer);
      if (this._mouseIdleTimer) clearTimeout(this._mouseIdleTimer);
      if (this._liveTimer) clearTimeout(this._liveTimer);
      if (this._tweakTimer) clearTimeout(this._tweakTimer);
      if (this._railAnimTimer) clearTimeout(this._railAnimTimer);
      if (this._scaleRaf) cancelAnimationFrame(this._scaleRaf);
      if (this._liveObserver) this._liveObserver.disconnect();
      if (this._railObserver) this._railObserver.disconnect();
      if (this._onTweakChange) window.removeEventListener('tweakchange', this._onTweakChange);
    }
    attributeChangedCallback() {
      if (this._canvas) {
        this._canvas.style.width = this.designWidth + 'px';
        this._canvas.style.height = this.designHeight + 'px';
        this._canvas.style.setProperty('--deck-design-w', this.designWidth + 'px');
        this._canvas.style.setProperty('--deck-design-h', this.designHeight + 'px');
        if (this._rail) {
          this._rail.style.setProperty('--deck-aspect', this.designWidth + '/' + this.designHeight);
        }
        this._fit();
        this._scaleThumbs();
        this._syncPrintPageRule();
      }
    }
    _render() {
      const style = document.createElement('style');
      style.textContent = stylesheet;
      const stage = document.createElement('div');
      stage.className = 'stage';
      const canvas = document.createElement('div');
      canvas.className = 'canvas';
      canvas.style.width = this.designWidth + 'px';
      canvas.style.height = this.designHeight + 'px';
      canvas.style.setProperty('--deck-design-w', this.designWidth + 'px');
      canvas.style.setProperty('--deck-design-h', this.designHeight + 'px');
      const slot = document.createElement('slot');
      slot.addEventListener('slotchange', this._onSlotChange);
      canvas.appendChild(slot);
      stage.appendChild(canvas);

      // Overlay: compact, solid black, with clickable controls.
      const overlay = document.createElement('div');
      overlay.className = 'overlay export-hidden';
      overlay.setAttribute('role', 'toolbar');
      overlay.setAttribute('aria-label', 'Deck controls');
      overlay.setAttribute('data-omelette-chrome', '');
      overlay.innerHTML = `
        <button class="btn prev" type="button" aria-label="Previous slide" title="Previous (←)">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 3L5 8l5 5"/></svg>
        </button>
        <span class="count" aria-live="polite"><span class="current">1</span><span class="sep">/</span><span class="total">1</span></span>
        <button class="btn next" type="button" aria-label="Next slide" title="Next (→)">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 3l5 5-5 5"/></svg>
        </button>
        <span class="divider"></span>
        <button class="btn reset" type="button" aria-label="Reset to first slide" title="Reset (R)">Reset<span class="kbd">R</span></button>
      `;
      overlay.querySelector('.prev').addEventListener('click', () => this._advance(-1, 'click'));
      overlay.querySelector('.next').addEventListener('click', () => this._advance(1, 'click'));
      overlay.querySelector('.reset').addEventListener('click', () => this._go(0, 'click'));

      // Thumbnail rail + context menu. Thumbnails are populated in
      // _renderRail() after _collectSlides().
      const rail = document.createElement('div');
      rail.className = 'rail export-hidden';
      rail.setAttribute('data-omelette-chrome', '');
      rail.style.setProperty('--deck-aspect', this.designWidth + '/' + this.designHeight);
      // Edge auto-scroll while dragging a thumb near the rail's top/bottom
      // so off-screen drop targets are reachable. Native dragover fires
      // continuously while the pointer is stationary, so a per-event nudge
      // (ramped by edge proximity) is enough — no rAF loop needed.
      rail.addEventListener('dragover', e => {
        if (this._dragFrom == null) return;
        const r = rail.getBoundingClientRect();
        const EDGE = 40;
        const dt = e.clientY - r.top;
        const db = r.bottom - e.clientY;
        if (dt < EDGE) rail.scrollTop -= Math.ceil((EDGE - dt) / 3);else if (db < EDGE) rail.scrollTop += Math.ceil((EDGE - db) / 3);
      });
      const menu = document.createElement('div');
      menu.className = 'ctxmenu export-hidden';
      menu.setAttribute('data-omelette-chrome', '');
      menu.innerHTML = `
        <button type="button" data-act="skip">Skip slide</button>
        <button type="button" data-act="up">Move up</button>
        <button type="button" data-act="down">Move down</button>
        <hr>
        <button type="button" data-act="delete">Delete slide</button>
      `;
      menu.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        const i = this._menuIndex;
        this._closeMenu();
        if (act === 'skip') this._toggleSkip(i);else if (act === 'up') this._moveSlide(i, i - 1);else if (act === 'down') this._moveSlide(i, i + 1);else if (act === 'delete') this._openConfirm(i);
      });
      menu.addEventListener('contextmenu', e => e.preventDefault());

      // Rail resize handle — drag to set --deck-rail-w, persisted to
      // localStorage so the width survives reloads.
      const resize = document.createElement('div');
      resize.className = 'rail-resize export-hidden';
      resize.setAttribute('data-omelette-chrome', '');
      resize.addEventListener('pointerdown', e => {
        e.preventDefault();
        resize.setPointerCapture(e.pointerId);
        resize.setAttribute('data-dragging', '');
        const move = ev => this._setRailWidth(ev.clientX);
        const up = () => {
          resize.removeEventListener('pointermove', move);
          resize.removeEventListener('pointerup', up);
          resize.removeEventListener('pointercancel', up);
          resize.removeAttribute('data-dragging');
          try {
            localStorage.setItem('deck-stage.railWidth', String(this._railPx));
          } catch (err) {}
        };
        resize.addEventListener('pointermove', move);
        resize.addEventListener('pointerup', up);
        resize.addEventListener('pointercancel', up);
      });

      // Delete-confirm dialog — mirrors the SPA's ConfirmDialog layout.
      const confirm = document.createElement('div');
      confirm.className = 'confirm-backdrop export-hidden';
      confirm.setAttribute('data-omelette-chrome', '');
      confirm.innerHTML = `
        <div class="confirm" role="dialog" aria-modal="true">
          <div class="body">
            <div class="title">Delete slide?</div>
            <div class="msg">This slide will be removed from the deck.</div>
          </div>
          <div class="footer">
            <button type="button" class="cancel">Cancel</button>
            <button type="button" class="danger">Delete</button>
          </div>
        </div>
      `;
      confirm.addEventListener('click', e => {
        if (e.target === confirm) this._closeConfirm();
      });
      confirm.querySelector('.cancel').addEventListener('click', () => this._closeConfirm());
      confirm.querySelector('.danger').addEventListener('click', () => {
        const i = this._confirmIndex;
        this._closeConfirm();
        this._deleteSlide(i);
      });
      this._root.append(style, rail, resize, stage, overlay, menu, confirm);
      this._canvas = canvas;
      this._stage = stage;
      this._slot = slot;
      this._overlay = overlay;
      this._rail = rail;
      this._resize = resize;
      this._menu = menu;
      this._confirm = confirm;
      this._countEl = overlay.querySelector('.current');
      this._totalEl = overlay.querySelector('.total');

      // Restore persisted rail width.
      let rw = 188;
      try {
        const s = localStorage.getItem('deck-stage.railWidth');
        if (s) rw = parseInt(s, 10) || rw;
      } catch (err) {}
      this._setRailWidth(rw);
      this._syncRailHidden();
    }
    _setRailWidth(px) {
      const w = Math.max(120, Math.min(360, Math.round(px)));
      this._railPx = w;
      this.style.setProperty('--deck-rail-w', w + 'px');
      this._fit();
      // _scaleThumbs forces a sync layout (frame.offsetWidth) then writes
      // N transforms. During a resize drag this runs per-pointermove;
      // coalesce to one per frame.
      if (!this._scaleRaf) {
        this._scaleRaf = requestAnimationFrame(() => {
          this._scaleRaf = null;
          this._scaleThumbs();
        });
      }
    }

    /** @page must live in the document stylesheet — it's a no-op inside
     *  shadow DOM. Inject/update a single <head> style tag so the print
     *  sheet matches the design size and Save-as-PDF yields one slide per
     *  page with no margins. */
    _syncPrintPageRule() {
      const id = 'deck-stage-print-page';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
        document.head.appendChild(tag);
      }
      tag.textContent = '@page { size: ' + this.designWidth + 'px ' + this.designHeight + 'px; margin: 0; } ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; overflow: visible !important; height: auto !important; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; } ' +
      // Jump authored animations/transitions to their end state so print
      // never captures mid-entrance — pairs with the beforeprint handler
      // in connectedCallback that sets data-deck-active on every slide.
      '*, *::before, *::after { animation-delay: -99s !important; animation-duration: .001s !important; ' + 'animation-iteration-count: 1 !important; animation-fill-mode: both !important; ' + 'animation-play-state: running !important; transition-duration: 0s !important; } }';
    }
    _onSlotChange() {
      // Rail mutations (delete/move) already reconcile synchronously and
      // emit slidechange with reason 'api'; skip the async slotchange that
      // would otherwise re-broadcast with reason 'init'.
      if (this._squelchSlotChange) {
        this._squelchSlotChange = false;
        return;
      }
      this._collectSlides();
      this._restoreIndex();
      this._applyIndex({
        showOverlay: false,
        broadcast: true,
        reason: 'init'
      });
      this._fit();
    }
    _collectSlides() {
      const assigned = this._slot.assignedElements({
        flatten: true
      });
      this._slides = assigned.filter(el => {
        // Skip template/style/script nodes even if someone slots them.
        const tag = el.tagName;
        return tag !== 'TEMPLATE' && tag !== 'SCRIPT' && tag !== 'STYLE';
      });
      this._slideSet = new Set(this._slides);
      this._slides.forEach((slide, i) => {
        const n = i + 1;
        slide.setAttribute('data-screen-label', `${pad2(n)} ${getSlideLabel(slide)}`);

        // Validation attribute for comment flow / auto-checks.
        if (!slide.hasAttribute('data-om-validate')) {
          slide.setAttribute('data-om-validate', VALIDATE_ATTR);
        }
        slide.setAttribute('data-deck-slide', String(i));
      });
      if (this._totalEl) this._totalEl.textContent = String(this._slides.length || 1);
      if (this._index >= this._slides.length) this._index = Math.max(0, this._slides.length - 1);
      this._markLastVisible();
      this._renderRail();
    }

    /** Tag the last non-skipped slide so print CSS can drop its
     *  break-after (see the @media print comment above — :last-child
     *  alone matches a hidden skipped slide). */
    _markLastVisible() {
      let last = null;
      this._slides.forEach(s => {
        s.removeAttribute('data-deck-last-visible');
        if (!s.hasAttribute('data-deck-skip')) last = s;
      });
      if (last) last.setAttribute('data-deck-last-visible', '');
    }
    _loadNotes() {
      const tag = document.getElementById('speaker-notes');
      if (!tag) {
        this._notes = [];
        return;
      }
      try {
        const parsed = JSON.parse(tag.textContent || '[]');
        if (Array.isArray(parsed)) this._notes = parsed;
      } catch (e) {
        console.warn('[deck-stage] Failed to parse #speaker-notes JSON:', e);
        this._notes = [];
      }
    }
    _restoreIndex() {
      // The host's ?slide= param is delivered as a #<int> hash (1-indexed) on
      // the iframe src. No hash → slide 1; the deck itself keeps no position
      // state across loads.
      const h = (location.hash || '').match(/^#(\d+)$/);
      if (h) {
        const n = parseInt(h[1], 10) - 1;
        if (n >= 0 && n < this._slides.length) this._index = n;
      }
    }
    _applyIndex({
      showOverlay = true,
      broadcast = true,
      reason = 'init'
    } = {}) {
      if (!this._slides.length) return;
      const prev = this._prevIndex == null ? -1 : this._prevIndex;
      const curr = this._index;
      // Keep the iframe's own hash in sync so an in-iframe location.reload()
      // (reload banner path in viewer-handle.ts) lands on the current slide,
      // not the stale deep-link hash from initial load.
      try {
        history.replaceState(null, '', '#' + (curr + 1));
      } catch (e) {}
      this._slides.forEach((s, i) => {
        if (i === curr) s.setAttribute('data-deck-active', '');else s.removeAttribute('data-deck-active');
      });
      if (this._countEl) this._countEl.textContent = String(curr + 1);
      // Follow-scroll on every navigation (init deep-link, keyboard, click,
      // tap, external goTo) — the only time we *don't* want the rail to
      // track current is after a rail-internal mutation, where _renderRail
      // has already restored the user's scroll position and yanking back to
      // current would undo it.
      this._syncRail(reason !== 'mutation');
      if (broadcast) {
        // (1) Legacy: host-window postMessage for speaker-notes renderers.
        try {
          window.postMessage({
            slideIndexChanged: curr,
            deckTotal: this._slides.length,
            deckSkipped: this._skippedIndices()
          }, '*');
        } catch (e) {}

        // (2) In-page CustomEvent on the <deck-stage> element itself.
        //     Bubbles and composes out of shadow DOM so slide code can listen:
        //       document.querySelector('deck-stage').addEventListener('slidechange', e => {
        //         e.detail.index, e.detail.previousIndex, e.detail.total, e.detail.slide, e.detail.reason
        //       });
        const detail = {
          index: curr,
          previousIndex: prev,
          total: this._slides.length,
          slide: this._slides[curr] || null,
          previousSlide: prev >= 0 ? this._slides[prev] || null : null,
          reason: reason // 'init' | 'keyboard' | 'click' | 'tap' | 'api'
        };
        this.dispatchEvent(new CustomEvent('slidechange', {
          detail,
          bubbles: true,
          composed: true
        }));
      }
      this._prevIndex = curr;
      if (showOverlay) this._flashOverlay();
    }
    _flashOverlay() {
      // Host posts __omelette_presenting while in fullscreen/tab presentation
      // mode — suppress the nav footer entirely (both hover and slide-change
      // flash) so the audience sees clean slides.
      if (!this._overlay || this._presenting) return;
      this._overlay.setAttribute('data-visible', '');
      if (this._hideTimer) clearTimeout(this._hideTimer);
      this._hideTimer = setTimeout(() => {
        this._overlay.removeAttribute('data-visible');
      }, OVERLAY_HIDE_MS);
    }
    _railWidth() {
      // State-based, no offsetWidth: the first _fit() can run before the
      // rail has had layout on some load paths, and a 0 there paints the
      // slide full-width for one frame before the post-slotchange _fit()
      // corrects it.
      if (!this._railEnabled || !this._railVisible || this.hasAttribute('no-rail') || this.hasAttribute('noscale') || this._presenting || this._previewMode || NARROW_MQ.matches) return 0;
      return this._railPx || 0;
    }
    _fit() {
      if (!this._canvas) return;
      const stage = this._canvas.parentElement;
      // PPTX export sets noscale so the DOM capture sees authored-size
      // geometry — the scaled canvas is in shadow DOM, so the exporter's
      // resetTransformSelector can't reach .canvas.style.transform directly.
      if (this.hasAttribute('noscale')) {
        this._canvas.style.transform = 'none';
        if (stage) stage.style.left = '0';
        if (this._overlay) this._overlay.style.marginLeft = '0';
        return;
      }
      const rw = this._railWidth();
      if (stage) stage.style.left = rw + 'px';
      // Overlay is centred on the viewport via left:50% + translate(-50%);
      // marginLeft shifts the centre by rw/2 so it lands in the middle of
      // the [rw, innerWidth] stage region.
      if (this._overlay) this._overlay.style.marginLeft = rw / 2 + 'px';
      const vw = window.innerWidth - rw;
      const vh = window.innerHeight;
      const s = Math.min(vw / this.designWidth, vh / this.designHeight);
      this._canvas.style.transform = `scale(${s})`;
    }
    _onResize() {
      this._fit();
      // Crossing the narrow-viewport breakpoint reveals the rail — rerun the
      // thumbnail scale the same way _setRailWidth does.
      if (!this._scaleRaf) {
        this._scaleRaf = requestAnimationFrame(() => {
          this._scaleRaf = null;
          this._scaleThumbs();
        });
      }
    }
    _onMouseMove() {
      // Keep overlay visible while mouse moves; hide after idle.
      this._flashOverlay();
    }
    _onMessage(e) {
      const d = e.data;
      if (d && typeof d.__omelette_presenting === 'boolean') {
        this._presenting = d.__omelette_presenting;
        if (this._presenting && this._overlay) {
          this._overlay.removeAttribute('data-visible');
          if (this._hideTimer) clearTimeout(this._hideTimer);
        }
        this._syncRailHidden();
        this._closeMenu();
        this._closeConfirm();
        this._fit();
        this._scaleThumbs();
      }
      // Host's Preview segment (ViewerMode='none'): the rail's drag-reorder /
      // right-click skip-delete affordances are editing chrome, so hide it
      // while the user is just looking at the deck. Same hard-hide path as
      // presenting; independent of the user's _railVisible preference so
      // returning to Edit restores whatever they had.
      if (d && typeof d.__omelette_preview_mode === 'boolean') {
        if (d.__omelette_preview_mode === this._previewMode) return;
        this._previewMode = d.__omelette_preview_mode;
        this._syncRailHidden();
        this._closeMenu();
        this._closeConfirm();
        this._fit();
        this._scaleThumbs();
      }
      // Per-viewer show/hide, driven by the TweaksPanel's auto-injected
      // "Thumbnail rail" toggle (or any author script). Independent of
      // whether the Tweaks panel itself is open — closing the panel
      // doesn't change rail visibility. Persists alongside rail width.
      if (d && d.type === '__deck_rail_visible' && typeof d.on === 'boolean') {
        if (d.on === this._railVisible) return;
        this._railVisible = d.on;
        try {
          localStorage.setItem('deck-stage.railVisible', d.on ? '1' : '0');
        } catch (e) {}
        // Arm the transition, commit it, then flip state — otherwise the
        // browser coalesces both writes and nothing animates on show.
        this.setAttribute('data-rail-anim', '');
        void (this._rail && this._rail.offsetHeight);
        this._syncRailHidden();
        this._fit();
        this._scaleThumbs();
        clearTimeout(this._railAnimTimer);
        this._railAnimTimer = setTimeout(() => this.removeAttribute('data-rail-anim'), 220);
      }
      if (d && d.type === '__omelette_rail_enabled') this._enableRail();
    }
    _syncRailHidden() {
      if (!this._rail) return;
      // data-presenting is the hard hide (display:none) for flag-off,
      // presentation mode, and the host's Preview segment — instant, no
      // transition. data-user-hidden is the soft hide (translateX(-100%))
      // for the viewer's rail toggle, so show/hide slides under
      // :host([data-rail-anim]).
      const hard = !this._railEnabled || this._presenting || this._previewMode;
      if (hard) this._rail.setAttribute('data-presenting', '');else this._rail.removeAttribute('data-presenting');
      if (!this._railVisible) this._rail.setAttribute('data-user-hidden', '');else this._rail.removeAttribute('data-user-hidden');
      // translateX hide leaves thumbs (tabIndex=0) in the tab order —
      // inert keeps them unfocusable while the rail is off-screen.
      this._rail.inert = hard || !this._railVisible;
    }
    _onTap(e) {
      // Touch-only — keyboard + the overlay toolbar cover nav on desktop.
      if (FINE_POINTER_MQ.matches) return;
      // Only taps that land on the stage (slide content or letterbox); the
      // overlay / rail / menus are siblings with their own click handlers.
      const path = e.composedPath();
      if (!this._stage || !path.includes(this._stage)) return;
      // Let interactive slide content keep the tap. composedPath (not
      // e.target.closest) so we see through open shadow roots — a <button>
      // inside a slide-authored custom element retargets e.target to the
      // host but still appears in the composed path.
      if (e.defaultPrevented) return;
      for (const n of path) {
        if (n === this._stage) break;
        if (n.matches && n.matches(INTERACTIVE_SEL)) return;
      }
      e.preventDefault();
      const rw = this._railWidth();
      const mid = rw + (window.innerWidth - rw) / 2;
      this._advance(e.clientX < mid ? -1 : 1, 'tap');
    }
    _onKey(e) {
      // Ignore when the user is typing.
      const t = e.target;
      if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
      // Confirm dialog swallows nav keys while open; Escape cancels. Enter
      // is left to the focused button's native activation so Tab→Cancel
      // →Enter activates Cancel, not the window-level confirm path.
      if (this._confirm && this._confirm.hasAttribute('data-open')) {
        if (e.key === 'Escape') {
          this._closeConfirm();
          e.preventDefault();
        }
        return;
      }
      if (e.key === 'Escape' && this._menu && this._menu.hasAttribute('data-open')) {
        this._closeMenu();
        e.preventDefault();
        return;
      }
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const key = e.key;
      let handled = true;
      if (key === 'ArrowRight' || key === 'PageDown' || key === ' ' || key === 'Spacebar') {
        this._advance(1, 'keyboard');
      } else if (key === 'ArrowLeft' || key === 'PageUp') {
        this._advance(-1, 'keyboard');
      } else if (key === 'Home') {
        this._go(0, 'keyboard');
      } else if (key === 'End') {
        this._go(this._slides.length - 1, 'keyboard');
      } else if (key === 'r' || key === 'R') {
        this._go(0, 'keyboard');
      } else if (/^[0-9]$/.test(key)) {
        // 1..9 jump to that slide; 0 jumps to 10.
        const n = key === '0' ? 9 : parseInt(key, 10) - 1;
        if (n < this._slides.length) this._go(n, 'keyboard');
      } else {
        handled = false;
      }
      if (handled) {
        e.preventDefault();
        this._flashOverlay();
      }
    }
    _go(i, reason = 'api') {
      if (!this._slides.length) return;
      const clamped = Math.max(0, Math.min(this._slides.length - 1, i));
      if (clamped === this._index) {
        this._flashOverlay();
        return;
      }
      this._index = clamped;
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason
      });
    }

    /** Step forward/back skipping any slide marked data-deck-skip. Falls
     *  back to _go's clamp-at-ends behaviour (flash overlay) when there's
     *  nothing further in that direction. */
    _advance(dir, reason) {
      if (!this._slides.length) return;
      let i = this._index + dir;
      while (i >= 0 && i < this._slides.length && this._slides[i].hasAttribute('data-deck-skip')) {
        i += dir;
      }
      if (i < 0 || i >= this._slides.length) {
        this._flashOverlay();
        return;
      }
      this._go(i, reason);
    }

    // ── Thumbnail rail ────────────────────────────────────────────────────
    //
    // Thumbs are keyed by slide element and reused across _renderRail()
    // calls, so a reorder/delete is an O(changed) DOM shuffle instead of an
    // O(N) teardown-and-re-clone. Each thumb starts as a lightweight shell
    // (num + empty frame); the clone is materialized lazily by an
    // IntersectionObserver when the frame scrolls into (or near) view, so
    // only visible-ish slides pay the clone + image-decode cost.

    _renderRail() {
      if (!this._rail || !this._railEnabled) {
        this._thumbs = [];
        return;
      }
      // FLIP: record each *materialized* thumb's top before the reconcile.
      // Off-screen (non-materialized) thumbs don't need the animation and
      // skipping their getBoundingClientRect saves a forced layout per
      // off-screen thumb on large decks.
      const prevTops = new Map();
      (this._thumbs || []).forEach(({
        thumb,
        slide,
        host
      }) => {
        if (host) prevTops.set(slide, thumb.getBoundingClientRect().top);
      });
      const st = this._rail.scrollTop;

      // Reconcile: reuse thumbs that already exist for a slide, create
      // shells for new slides, drop thumbs for removed slides.
      const bySlide = new Map();
      (this._thumbs || []).forEach(t => bySlide.set(t.slide, t));
      const next = [];
      this._slides.forEach(slide => {
        let t = bySlide.get(slide);
        if (t) bySlide.delete(slide);else t = this._makeThumb(slide);
        next.push(t);
      });
      // Orphans — slides removed since last render.
      bySlide.forEach(t => {
        if (this._railObserver) this._railObserver.unobserve(t.frame);
        t.thumb.remove();
      });
      // Put thumbs into document order to match _slides. insertBefore on
      // an already-correctly-placed node is a no-op, so this is cheap
      // when nothing moved.
      next.forEach((t, i) => {
        const want = t.thumb;
        const at = this._rail.children[i];
        if (at !== want) this._rail.insertBefore(want, at || null);
        t.i = i;
        t.num.textContent = String(i + 1);
        if (t.slide.hasAttribute('data-deck-skip')) t.thumb.setAttribute('data-skip', '');else t.thumb.removeAttribute('data-skip');
      });
      this._thumbs = next;
      this._rail.scrollTop = st;
      if (prevTops.size) {
        const moved = [];
        this._thumbs.forEach(({
          thumb,
          slide
        }) => {
          const old = prevTops.get(slide);
          if (old == null) return;
          const dy = old - thumb.getBoundingClientRect().top;
          if (Math.abs(dy) < 1) return;
          thumb.style.transition = 'none';
          thumb.style.transform = `translateY(${dy}px)`;
          moved.push(thumb);
        });
        if (moved.length) {
          // Commit the inverted positions before flipping the transition
          // on — otherwise the browser coalesces both style writes and
          // nothing animates.
          void this._rail.offsetHeight;
          moved.forEach(t => {
            t.style.transition = 'transform 180ms cubic-bezier(.2,.7,.3,1)';
            t.style.transform = '';
          });
          setTimeout(() => moved.forEach(t => {
            t.style.transition = '';
          }), 220);
        }
      }
      requestAnimationFrame(() => this._scaleThumbs());
      this._syncRail(false);
    }

    /** Create a lightweight thumb shell for one slide. The clone is
     *  materialized later by the IntersectionObserver. Event handlers
     *  look up the thumb's *current* index (via _thumbs.indexOf) so the
     *  same element can be reused across reorders. */
    _makeThumb(slide) {
      const thumb = document.createElement('div');
      thumb.className = 'thumb';
      thumb.tabIndex = 0;
      const num = document.createElement('div');
      num.className = 'num';
      const frame = document.createElement('div');
      frame.className = 'frame';
      thumb.append(num, frame);
      const entry = {
        thumb,
        num,
        frame,
        slide,
        clone: null,
        host: null,
        i: -1
      };
      // entry.i is refreshed on every _renderRail reconcile pass, so
      // handlers read the thumb's current position without an O(N) scan.
      const idx = () => entry.i;
      thumb.addEventListener('click', () => this._go(idx(), 'click'));
      // ↑/↓ step through the rail when a thumb has focus. _go clamps at the
      // ends and _applyIndex→_syncRail scrolls the new current thumb into
      // view; we move focus to it (preventScroll — _syncRail already
      // scrolled) so a held key walks the whole list. stopPropagation keeps
      // this out of the window-level _onKey nav handler.
      thumb.addEventListener('keydown', e => {
        if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') return;
        if (e.metaKey || e.ctrlKey || e.altKey) return;
        e.preventDefault();
        e.stopPropagation();
        this._go(idx() + (e.key === 'ArrowDown' ? 1 : -1), 'keyboard');
        const cur = this._thumbs && this._thumbs[this._index];
        if (cur) cur.thumb.focus({
          preventScroll: true
        });
      });
      thumb.addEventListener('contextmenu', e => {
        e.preventDefault();
        this._openMenu(idx(), e.clientX, e.clientY);
      });
      thumb.draggable = true;
      thumb.addEventListener('dragstart', e => {
        this._dragFrom = idx();
        thumb.setAttribute('data-dragging', '');
        e.dataTransfer.effectAllowed = 'move';
        try {
          e.dataTransfer.setData('text/plain', String(this._dragFrom));
        } catch (err) {}
      });
      thumb.addEventListener('dragend', () => {
        thumb.removeAttribute('data-dragging');
        this._clearDrop();
        this._dragFrom = null;
      });
      thumb.addEventListener('dragover', e => {
        if (this._dragFrom == null) return;
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        const r = thumb.getBoundingClientRect();
        this._setDrop(idx(), e.clientY < r.top + r.height / 2 ? 'before' : 'after');
      });
      thumb.addEventListener('drop', e => {
        if (this._dragFrom == null) return;
        e.preventDefault();
        const i = idx();
        const r = thumb.getBoundingClientRect();
        let to = e.clientY >= r.top + r.height / 2 ? i + 1 : i;
        if (this._dragFrom < to) to--;
        const from = this._dragFrom;
        this._clearDrop();
        this._dragFrom = null;
        if (to !== from) this._moveSlide(from, to);
      });
      if (this._railObserver) this._railObserver.observe(frame);
      frame.__deckThumb = entry;
      return entry;
    }

    /** Lazily build the clone for a thumb that has scrolled into view. */
    _materialize(entry) {
      if (entry.host) return;
      const dw = this.designWidth,
        dh = this.designHeight;
      let clone = entry.slide.cloneNode(true);
      clone.removeAttribute('id');
      clone.removeAttribute('data-deck-active');
      clone.querySelectorAll('[id]').forEach(el => el.removeAttribute('id'));
      // Neuter heavy media; replace <video> with its poster so the box
      // keeps a visual. <iframe>/<audio> become empty placeholders.
      clone.querySelectorAll('iframe, audio, object, embed').forEach(el => {
        el.removeAttribute('src');
        el.removeAttribute('srcdoc');
        el.removeAttribute('data');
        el.innerHTML = '';
      });
      clone.querySelectorAll('video').forEach(el => {
        if (!el.poster) {
          el.removeAttribute('src');
          el.innerHTML = '';
          return;
        }
        const img = document.createElement('img');
        img.src = el.poster;
        img.alt = '';
        img.style.cssText = el.style.cssText + ';object-fit:cover;width:100%;height:100%;';
        img.className = el.className;
        el.replaceWith(img);
      });
      // Images: defer decode and let the browser pick the smallest
      // srcset candidate for the ~140px thumb. Same-URL clones reuse the
      // slide's decoded bitmap (URL-keyed cache), so the remaining cost
      // is paint/composite — lazy+async keeps that off the main thread.
      clone.querySelectorAll('img').forEach(el => {
        el.loading = 'lazy';
        el.decoding = 'async';
        if (el.srcset) el.sizes = (this._railPx || 188) + 'px';
      });
      // Custom elements inside the slide would have their
      // connectedCallback fire when the clone is appended. Replace them
      // with inert boxes so a component-heavy deck doesn't run N copies
      // of each component's mount logic in the rail. Children are
      // preserved so layout-wrapper elements (<my-column><h2>…</h2>)
      // still show their authored content; the querySelectorAll NodeList
      // is static, so nested custom elements in the moved subtree are
      // still visited on later iterations.
      const neuter = el => {
        const box = document.createElement('div');
        box.style.cssText = (el.getAttribute('style') || '') + ';background:rgba(0,0,0,0.06);border:1px dashed rgba(0,0,0,0.15);';
        box.className = el.className;
        // Preserve theming/i18n hooks so [data-*] / :lang() / [dir]
        // descendant selectors still match the neutered root.
        for (const a of el.attributes) {
          const n = a.name;
          if (n.startsWith('data-') || n.startsWith('aria-') || n === 'lang' || n === 'dir' || n === 'role' || n === 'title') {
            box.setAttribute(n, a.value);
          }
        }
        while (el.firstChild) box.appendChild(el.firstChild);
        return box;
      };
      // querySelectorAll('*') returns descendants only — a custom-element
      // slide root (<my-slide>…</my-slide>) would slip through and upgrade
      // on append. Swap the root first.
      if (clone.tagName.includes('-')) clone = neuter(clone);
      clone.querySelectorAll('*').forEach(el => {
        if (el.tagName.includes('-')) el.replaceWith(neuter(el));
      });
      clone.style.cssText += ';position:absolute;top:0;left:0;transform-origin:0 0;' + 'pointer-events:none;width:' + dw + 'px;height:' + dh + 'px;' + 'box-sizing:border-box;overflow:hidden;visibility:visible;opacity:1;';
      const host = document.createElement('div');
      host.style.cssText = 'position:absolute;inset:0;';
      this._syncThumbHostAttrs(host);
      const sr = host.attachShadow({
        mode: 'open'
      });
      if (this._adoptedSheet) sr.adoptedStyleSheets = [this._adoptedSheet];else {
        const st = document.createElement('style');
        st.textContent = this._authorCss || '';
        sr.appendChild(st);
      }
      sr.appendChild(clone);
      entry.frame.appendChild(host);
      entry.host = host;
      entry.clone = clone;
      if (this._thumbScale) clone.style.transform = 'scale(' + this._thumbScale + ')';
      // Once materialized the IO callback is a no-op early-return —
      // unobserve so scroll doesn't keep firing it.
      if (this._railObserver) this._railObserver.unobserve(entry.frame);
    }

    /** Re-clone a single thumb (live-update path). No-op if the thumb
     *  hasn't been materialized yet — it'll pick up current content when
     *  it scrolls into view. */
    _refreshThumb(slide) {
      const entry = (this._thumbs || []).find(t => t.slide === slide);
      if (!entry || !entry.host) return;
      entry.host.remove();
      entry.host = entry.clone = null;
      this._materialize(entry);
    }
    _scaleThumbs() {
      if (!this._thumbs || !this._thumbs.length) return;
      // Every frame is the same width; if it reads 0 the rail is
      // display:none (noscale / no-rail / presenting / print) — leave the
      // clones as-is and re-run when the rail is revealed.
      const fw = this._thumbs[0].frame.offsetWidth;
      if (!fw) return;
      this._thumbScale = fw / this.designWidth;
      this._thumbs.forEach(({
        clone
      }) => {
        if (clone) clone.style.transform = 'scale(' + this._thumbScale + ')';
      });
    }
    _setDrop(i, where) {
      // dragover fires at pointer-event rate; touch only the previous
      // and new target rather than sweeping all N thumbs.
      const t = this._thumbs && this._thumbs[i];
      if (this._dropOn && this._dropOn !== t) {
        this._dropOn.thumb.removeAttribute('data-drop');
      }
      if (t) t.thumb.setAttribute('data-drop', where);
      this._dropOn = t || null;
    }
    _clearDrop() {
      if (this._dropOn) this._dropOn.thumb.removeAttribute('data-drop');
      this._dropOn = null;
    }
    _syncRail(follow) {
      if (!this._thumbs) return;
      this._thumbs.forEach(({
        thumb
      }, i) => {
        if (i === this._index) {
          thumb.setAttribute('data-current', '');
          if (follow && typeof thumb.scrollIntoView === 'function') {
            thumb.scrollIntoView({
              block: 'nearest'
            });
          }
        } else {
          thumb.removeAttribute('data-current');
        }
      });
    }
    _openMenu(i, x, y) {
      if (!this._menu) return;
      this._menuIndex = i;
      const slide = this._slides[i];
      const skip = slide && slide.hasAttribute('data-deck-skip');
      this._menu.querySelector('[data-act="skip"]').textContent = skip ? 'Unskip slide' : 'Skip slide';
      this._menu.querySelector('[data-act="up"]').disabled = i <= 0;
      this._menu.querySelector('[data-act="down"]').disabled = i >= this._slides.length - 1;
      this._menu.querySelector('[data-act="delete"]').disabled = this._slides.length <= 1;
      // Place, then clamp to viewport after it's measurable.
      this._menu.style.left = x + 'px';
      this._menu.style.top = y + 'px';
      this._menu.setAttribute('data-open', '');
      const r = this._menu.getBoundingClientRect();
      const nx = Math.min(x, window.innerWidth - r.width - 4);
      const ny = Math.min(y, window.innerHeight - r.height - 4);
      this._menu.style.left = Math.max(4, nx) + 'px';
      this._menu.style.top = Math.max(4, ny) + 'px';
    }
    _closeMenu() {
      if (this._menu) this._menu.removeAttribute('data-open');
      this._menuIndex = -1;
    }
    _openConfirm(i) {
      if (!this._confirm) return;
      this._confirmIndex = i;
      this._confirm.querySelector('.title').textContent = 'Delete slide ' + (i + 1) + '?';
      this._confirm.setAttribute('data-open', '');
      const btn = this._confirm.querySelector('.danger');
      if (btn && btn.focus) btn.focus();
    }
    _closeConfirm() {
      if (this._confirm) this._confirm.removeAttribute('data-open');
      this._confirmIndex = -1;
    }
    _emitDeckChange(detail) {
      this.dispatchEvent(new CustomEvent('deckchange', {
        detail,
        bubbles: true,
        composed: true
      }));
    }
    _deleteSlide(i) {
      const slide = this._slides[i];
      if (!slide || this._slides.length <= 1) return;
      const wasCurrent = i === this._index;
      if (i < this._index || wasCurrent && i === this._slides.length - 1) this._index--;
      this._squelchSlotChange = true;
      slide.remove();
      this._emitDeckChange({
        action: 'delete',
        from: i,
        slide
      });
      this._collectSlides();
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason: 'mutation'
      });
    }
    _toggleSkip(i) {
      const slide = this._slides[i];
      if (!slide) return;
      const on = !slide.hasAttribute('data-deck-skip');
      if (on) slide.setAttribute('data-deck-skip', '');else slide.removeAttribute('data-deck-skip');
      if (this._thumbs && this._thumbs[i]) {
        if (on) this._thumbs[i].thumb.setAttribute('data-skip', '');else this._thumbs[i].thumb.removeAttribute('data-skip');
      }
      this._markLastVisible();
      this._emitDeckChange({
        action: on ? 'skip' : 'unskip',
        from: i,
        slide
      });
      // Re-broadcast so the presenter popup's prev/next thumbnails re-pick
      // the nearest non-skipped slide without waiting for a nav event.
      try {
        window.postMessage({
          slideIndexChanged: this._index,
          deckTotal: this._slides.length,
          deckSkipped: this._skippedIndices()
        }, '*');
      } catch (e) {}
    }
    _skippedIndices() {
      const out = [];
      for (let i = 0; i < this._slides.length; i++) {
        if (this._slides[i].hasAttribute('data-deck-skip')) out.push(i);
      }
      return out;
    }
    _moveSlide(i, j) {
      if (j < 0 || j >= this._slides.length || j === i) return;
      const slide = this._slides[i];
      const ref = j < i ? this._slides[j] : this._slides[j].nextSibling;
      // Track the active slide across the reorder so the same content
      // stays on screen.
      const cur = this._index;
      if (cur === i) this._index = j;else if (i < cur && j >= cur) this._index = cur - 1;else if (i > cur && j <= cur) this._index = cur + 1;
      this._squelchSlotChange = true;
      this.insertBefore(slide, ref);
      this._emitDeckChange({
        action: 'move',
        from: i,
        to: j,
        slide
      });
      this._collectSlides();
      this._applyIndex({
        showOverlay: false,
        broadcast: true,
        reason: 'mutation'
      });
    }

    // Public API ------------------------------------------------------------

    /** Current slide index (0-based). */
    get index() {
      return this._index;
    }
    /** Total slide count. */
    get length() {
      return this._slides.length;
    }
    /** Programmatically navigate. */
    goTo(i) {
      this._go(i, 'api');
    }
    next() {
      this._advance(1, 'api');
    }
    prev() {
      this._advance(-1, 'api');
    }
    reset() {
      this._go(0, 'api');
    }
  }
  if (!customElements.get('deck-stage')) {
    customElements.define('deck-stage', DeckStage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/deck-stage.js", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/Icons.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* MaV Mobile UI Kit — line icons (1.8px stroke, round caps, Lucide-adjacent) */
const Icon = ({
  d,
  size = 22,
  stroke = 'currentColor',
  sw = 1.8,
  fill = 'none',
  vb = 24,
  children,
  ...rest
}) => /*#__PURE__*/React.createElement("svg", _extends({
  width: size,
  height: size,
  viewBox: `0 0 ${vb} ${vb}`,
  fill: fill,
  stroke: stroke,
  strokeWidth: sw,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, rest), d ? /*#__PURE__*/React.createElement("path", {
  d: d
}) : children);
const Icons = {
  plus: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    d: "M12 5v14M5 12h14",
    sw: 2
  })),
  send: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "M20 12H4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 5l-7 7 7 7"
  })),
  card: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "5",
    width: "20",
    height: "14",
    rx: "2.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 10h20"
  })),
  clock: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 8v4l3 2"
  })),
  credit: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    d: "M14 7L7 14M12 14H6V8"
  })),
  debit: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    d: "M7 14L14 7M9 7H15V13"
  })),
  search: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 17l4 4"
  })),
  bell: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.7 21a2 2 0 0 1-3.4 0"
  })),
  user: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "8",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 20c0-4.4 3.6-8 8-8s8 3.6 8 8"
  })),
  home: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "M3 10l9-7 9 7v10h-6v-6H9v6H3z"
  })),
  chevron: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    d: "M9 6l6 6-6 6"
  })),
  chevronDown: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    d: "M6 9l6 6 6-6"
  })),
  back: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    d: "M15 6l-6 6 6 6"
  })),
  check: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    d: "M5 12l4 4 10-10",
    sw: 2.2
  })),
  trendUp: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    d: "M3 16l4-4 3 3 7-8"
  })),
  trendDown: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    d: "M3 8l4 4 3-3 7 8"
  })),
  pay: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "5",
    width: "20",
    height: "14",
    rx: "2.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 10h20"
  })),
  scan: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 12h18"
  })),
  shield: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "M12 3l8 3v6c0 4.5-3.3 7.5-8 9-4.7-1.5-8-4.5-8-9V6z"
  }))
};
const BrandMark = ({
  size = 18,
  color = '#fff'
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 20 20",
  fill: color
}, /*#__PURE__*/React.createElement("rect", {
  x: "2",
  y: "2",
  width: "7",
  height: "7",
  rx: "2"
}), /*#__PURE__*/React.createElement("rect", {
  x: "11",
  y: "2",
  width: "7",
  height: "7",
  rx: "2"
}), /*#__PURE__*/React.createElement("rect", {
  x: "2",
  y: "11",
  width: "7",
  height: "7",
  rx: "2"
}), /*#__PURE__*/React.createElement("rect", {
  x: "11",
  y: "11",
  width: "7",
  height: "7",
  rx: "2",
  opacity: "0.4"
}));
const AppleIcon = () => /*#__PURE__*/React.createElement("svg", {
  width: "16",
  height: "18",
  viewBox: "0 0 16 18",
  fill: "#171717"
}, /*#__PURE__*/React.createElement("path", {
  d: "M13.24 9.55c-.02-2.2 1.8-3.28 1.88-3.34-1.03-1.5-2.62-1.7-3.18-1.72-1.35-.14-2.64.8-3.32.8-.69 0-1.74-.78-2.87-.76-1.47.02-2.83.86-3.59 2.17-1.53 2.65-.4 6.57 1.1 8.72.73 1.05 1.6 2.23 2.74 2.19 1.1-.04 1.52-.71 2.85-.71 1.33 0 1.71.71 2.87.69 1.18-.02 1.93-1.07 2.65-2.13a9.6 9.6 0 001.2-2.46c-.03-.01-2.31-.89-2.33-3.45zM11.06 3c.61-.73 1.02-1.74.91-2.76-.88.04-1.94.59-2.57 1.3-.56.64-1.06 1.67-.93 2.66 1 .07 2.01-.5 2.59-1.2z"
}));
const GoogleIcon = () => /*#__PURE__*/React.createElement("svg", {
  width: "18",
  height: "18",
  viewBox: "0 0 18 18"
}, /*#__PURE__*/React.createElement("path", {
  d: "M17.64 9.2A10.3 10.3 0 0017.52 8H9v2.64h4.84A4.14 4.14 0 0112.1 13l2.57 2c1.52-1.4 2.4-3.47 2.4-5.8z",
  fill: "#4285F4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 18c2.43 0 4.47-.8 5.96-2.17L12.1 13A5.44 5.44 0 019 14a5.4 5.4 0 01-5.1-3.73L1.23 12.4A9 9 0 009 18z",
  fill: "#34A853"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3.9 10.27A5.43 5.43 0 013.58 9c0-.45.08-.88.22-1.27L1.23 5.6A9 9 0 000 9c0 1.45.35 2.82.97 4.04z",
  fill: "#FBBC05"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 3.6c1.32 0 2.5.45 3.44 1.35L14.97 2.43A9 9 0 009 0 9 9 0 001.23 5.6L3.9 7.73A5.4 5.4 0 019 3.6z",
  fill: "#EA4335"
}));
Object.assign(window, {
  Icon,
  Icons,
  BrandMark,
  AppleIcon,
  GoogleIcon
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/Icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/Primitives.jsx
try { (() => {
/* MaV Mobile UI Kit — primitives & finance modules */
const {
  useState,
  useRef,
  useEffect
} = React;

/* ── iOS device frame (393×852, Dynamic Island) ─────────────────────────── */
function PhoneFrame({
  children,
  dark
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 393,
      height: 852,
      borderRadius: 54,
      background: '#1c1c1e',
      position: 'relative',
      flexShrink: 0,
      overflow: 'hidden',
      boxShadow: '0 32px 80px rgba(0,0,0,.35), inset 0 0 0 2px #3a3a3c, inset 0 0 0 3px #1c1c1e'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 52,
      overflow: 'hidden',
      background: dark ? '#171717' : '#fff',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 14,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 126,
      height: 37,
      background: '#000',
      borderRadius: 20,
      zIndex: 100
    }
  }), children, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 10,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 134,
      height: 5,
      background: dark ? '#fff' : '#000',
      borderRadius: 3,
      opacity: dark ? .3 : .2,
      zIndex: 99
    }
  })));
}
function StatusBar({
  light
}) {
  const c = light ? '#fff' : '#171717';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 54,
      padding: '16px 28px 0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      zIndex: 99
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: c,
      paddingLeft: 8
    }
  }, "9:41"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      paddingRight: 8
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12",
    fill: c
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "3",
    width: "3",
    height: "9",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.5",
    y: "2",
    width: "3",
    height: "10",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9",
    y: "0",
    width: "3",
    height: "12",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "13.5",
    y: "1",
    width: "3",
    height: "11",
    rx: "1",
    opacity: ".4"
  })), /*#__PURE__*/React.createElement("svg", {
    width: "25",
    height: "12",
    viewBox: "0 0 25 12"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "1",
    width: "21",
    height: "10",
    rx: "3",
    stroke: c,
    strokeWidth: "1.5",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "3",
    width: "16",
    height: "6",
    rx: "1.5",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22.5 4.5v3a1.5 1.5 0 000-3z",
    fill: c
  }))));
}

/* ── Buttons ─────────────────────────────────────────────────────────────── */
function Button({
  children,
  onClick,
  disabled,
  variant = 'primary',
  style
}) {
  const [press, setPress] = useState(false);
  const base = {
    width: '100%',
    height: 48,
    borderRadius: 0,
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    font: '600 14px var(--font-body)',
    letterSpacing: '-.01em',
    transition: 'opacity .15s, transform .1s, background .15s',
    transform: press && !disabled ? 'scale(.985)' : 'none',
    ...style
  };
  const variants = {
    primary: {
      background: disabled ? 'var(--mono-200)' : press ? 'var(--tertiary-2)' : 'var(--primary)',
      color: disabled ? 'var(--mono-400)' : '#fff'
    },
    secondary: {
      background: 'transparent',
      border: '1px solid var(--border-input)',
      color: 'var(--fg)'
    },
    text: {
      background: 'transparent',
      color: 'var(--primary)',
      height: 'auto'
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    onClick: disabled ? undefined : onClick,
    disabled: disabled,
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    onMouseLeave: () => setPress(false),
    style: {
      ...base,
      ...variants[variant]
    }
  }, children);
}
function SocialButton({
  icon,
  children
}) {
  const [h, setH] = useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      width: '100%',
      height: 44,
      borderRadius: 0,
      border: '1px solid var(--border-input)',
      background: h ? 'var(--mono-100)' : '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      font: '600 13px var(--font-body)',
      color: 'var(--fg)',
      cursor: 'pointer',
      boxShadow: 'var(--shadow-input)',
      transition: 'background .15s'
    }
  }, icon, children);
}

/* ── Input ───────────────────────────────────────────────────────────────── */
function Field({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  error
}) {
  const [focus, setFocus] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      marginBottom: 6,
      display: 'block'
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    type: type,
    value: value,
    onChange: e => onChange && onChange(e.target.value),
    placeholder: placeholder,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      height: 48,
      padding: '0 4px',
      borderRadius: 0,
      font: '400 14px var(--font-body)',
      color: 'var(--fg)',
      background: 'transparent',
      outline: 'none',
      border: 'none',
      borderBottom: `2px solid ${error ? 'var(--danger)' : focus ? 'var(--primary)' : 'var(--mono-400)'}`,
      transition: 'border-color .15s'
    }
  }), error && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--danger)',
      marginTop: 5
    }
  }, error));
}

/* ── OTP input ───────────────────────────────────────────────────────────── */
function OTPInput({
  length = 6,
  value,
  onChange
}) {
  const refs = useRef([]);
  const set = (i, v) => {
    const d = v.replace(/\D/g, '').slice(-1);
    const arr = value.split('');
    arr[i] = d;
    const next = arr.join('').slice(0, length);
    onChange(next);
    if (d && i < length - 1) refs.current[i + 1]?.focus();
  };
  const key = (i, e) => {
    if (e.key === 'Backspace' && !value[i] && i > 0) refs.current[i - 1]?.focus();
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, Array.from({
    length
  }).map((_, i) => /*#__PURE__*/React.createElement("input", {
    key: i,
    ref: el => refs.current[i] = el,
    inputMode: "numeric",
    maxLength: "1",
    value: value[i] || '',
    onChange: e => set(i, e.target.value),
    onKeyDown: e => key(i, e),
    style: {
      width: 48,
      height: 48,
      borderRadius: 0,
      textAlign: 'center',
      font: '500 18px var(--font-mono)',
      color: 'var(--fg)',
      background: '#fff',
      outline: 'none',
      border: `1px solid ${value[i] ? 'var(--mono-900)' : 'var(--border-input)'}`,
      transition: 'border-color .15s, box-shadow .15s'
    },
    onFocus: e => e.target.style.boxShadow = 'var(--shadow-focus)',
    onBlur: e => e.target.style.boxShadow = 'none'
  })));
}

/* ── Balance card (signature gradient + glow) ────────────────────────────── */
function BalanceCard({
  amount = '284,500',
  cents = '00',
  onAction
}) {
  const acts = [{
    k: 'add',
    label: 'Add Money',
    icon: /*#__PURE__*/React.createElement(Icons.plus, {
      size: 18,
      stroke: "#fff"
    })
  }, {
    k: 'send',
    label: 'Send',
    icon: /*#__PURE__*/React.createElement(Icons.send, {
      size: 18,
      stroke: "#fff"
    })
  }, {
    k: 'pay',
    label: 'Pay',
    icon: /*#__PURE__*/React.createElement(Icons.card, {
      size: 18,
      stroke: "#fff"
    })
  }, {
    k: 'history',
    label: 'History',
    icon: /*#__PURE__*/React.createElement(Icons.clock, {
      size: 18,
      stroke: "#fff"
    })
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--gradient-brand)',
      borderRadius: 0,
      padding: 24,
      color: '#fff',
      boxShadow: 'var(--shadow-brand)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      opacity: .7,
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '.08em'
    }
  }, "Available Balance"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 34px var(--font-mono)',
      letterSpacing: '-.02em',
      margin: '6px 0 2px'
    }
  }, "\u20A6 ", amount, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22,
      opacity: .7
    }
  }, ".", cents)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      opacity: .6,
      marginBottom: 20
    }
  }, "Last updated: just now"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, acts.map(a => /*#__PURE__*/React.createElement("button", {
    key: a.k,
    onClick: () => onAction && onAction(a.k),
    style: {
      flex: 1,
      padding: '10px 8px',
      borderRadius: 0,
      background: 'rgba(255,255,255,.18)',
      border: '1px solid rgba(255,255,255,.25)',
      color: '#fff',
      fontSize: 11,
      fontWeight: 600,
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 5,
      fontFamily: 'var(--font-body)'
    }
  }, a.icon, a.label))));
}

/* ── Transaction row ─────────────────────────────────────────────────────── */
function TxnRow({
  name,
  meta,
  amount,
  kind,
  status
}) {
  const credit = kind === 'credit';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '14px 0',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 42,
      height: 42,
      borderRadius: 0,
      background: 'var(--bg-secondary)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, credit ? /*#__PURE__*/React.createElement(Icons.credit, {
    size: 20,
    stroke: "var(--success)",
    sw: 1.5
  }) : /*#__PURE__*/React.createElement(Icons.debit, {
    size: 20,
    stroke: "var(--danger)",
    sw: 1.5
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--fg-muted)',
      marginTop: 2
    }
  }, meta)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 15px var(--font-mono)',
      color: credit ? 'var(--success)' : 'var(--danger)'
    }
  }, credit ? '+' : '−', "\u20A6 ", amount), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--fg-muted)',
      marginTop: 2
    }
  }, status)));
}

/* ── Bottom nav ──────────────────────────────────────────────────────────── */
function BottomNav({
  active = 'home',
  onNav,
  dark
}) {
  const items = [{
    k: 'home',
    label: 'Home',
    icon: Icons.home
  }, {
    k: 'explore',
    label: 'Explore',
    icon: Icons.search
  }, {
    k: 'pay',
    label: 'Pay',
    icon: Icons.pay
  }, {
    k: 'alerts',
    label: 'Alerts',
    icon: Icons.bell
  }, {
    k: 'profile',
    label: 'Profile',
    icon: Icons.user
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      background: dark ? '#1f1f1f' : '#fff',
      borderTop: '1px solid var(--border)',
      padding: '8px 0 28px',
      display: 'flex',
      zIndex: 50
    }
  }, items.map(it => {
    const on = it.k === active;
    const I = it.icon;
    return /*#__PURE__*/React.createElement("button", {
      key: it.k,
      onClick: () => onNav && onNav(it.k),
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 3,
        padding: '4px 0',
        border: 'none',
        background: 'none',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement(I, {
      size: 22,
      stroke: on ? 'var(--primary)' : 'var(--fg-muted)',
      fill: on ? 'var(--primary)' : 'none',
      sw: on ? 0 : 1.8
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        fontWeight: 600,
        color: on ? 'var(--primary)' : 'var(--fg-muted)'
      }
    }, it.label), on && /*#__PURE__*/React.createElement("div", {
      style: {
        width: 4,
        height: 4,
        borderRadius: 0,
        background: 'var(--primary)'
      }
    }));
  }));
}
Object.assign(window, {
  PhoneFrame,
  StatusBar,
  Button,
  SocialButton,
  Field,
  OTPInput,
  BalanceCard,
  TxnRow,
  BottomNav
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/Primitives.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/ScreensApp.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* MaV Mobile UI Kit — Home & Send screens */

function Home({
  onNav,
  onAction,
  balance
}) {
  const txns = [{
    name: 'Salary — GTBank',
    meta: 'Transfer · Today, 09:14',
    amount: '350,000',
    kind: 'credit',
    status: 'Credit'
  }, {
    name: 'Airtime — MTN',
    meta: 'Bill payment · Today, 11:45',
    amount: '2,000',
    kind: 'debit',
    status: 'Debit'
  }, {
    name: 'P2P — James K.',
    meta: 'Send money · Yesterday, 14:33',
    amount: '20,000',
    kind: 'debit',
    status: 'Pending'
  }, {
    name: 'Freelance — Ahmad R.',
    meta: 'Transfer · Sun Dec 17',
    amount: '50,000',
    kind: 'credit',
    status: 'Credit'
  }];
  const spend = [40, 55, 30, 70, 85, 50, 20];
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 52,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      paddingTop: 54,
      paddingBottom: 96
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '12px 20px 8px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--fg-muted)',
      fontWeight: 500
    }
  }, "Good morning,"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 800,
      letterSpacing: '-.02em',
      whiteSpace: 'nowrap'
    }
  }, "Alex Kim \uD83D\uDC4B")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 0,
      background: 'var(--gradient-brand)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 13,
      fontWeight: 700,
      color: '#fff'
    }
  }, "AK")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 20px 20px'
    }
  }, /*#__PURE__*/React.createElement(BalanceCard, {
    amount: balance,
    onAction: onAction
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      padding: '0 20px 20px'
    }
  }, /*#__PURE__*/React.createElement(StatWidget, {
    icon: /*#__PURE__*/React.createElement(Icons.trendUp, {
      size: 18,
      stroke: "var(--success)"
    }),
    tint: "var(--success-soft)",
    label: "Income",
    value: "+\u20A6350K",
    color: "var(--success)"
  }), /*#__PURE__*/React.createElement(StatWidget, {
    icon: /*#__PURE__*/React.createElement(Icons.trendDown, {
      size: 18,
      stroke: "var(--danger)"
    }),
    tint: "var(--danger-soft)",
    label: "Spent",
    value: "\u2212\u20A6197K",
    color: "var(--danger)"
  })), /*#__PURE__*/React.createElement(SecHeader, {
    title: "Quick Actions"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      padding: '0 20px 24px'
    }
  }, /*#__PURE__*/React.createElement(QuickAction, {
    label: "Transfer",
    tint: "var(--primary-soft)",
    icon: /*#__PURE__*/React.createElement(Icons.send, {
      size: 20,
      stroke: "var(--primary)"
    }),
    onClick: () => onAction('send')
  }), /*#__PURE__*/React.createElement(QuickAction, {
    label: "Receive",
    tint: "var(--success-soft)",
    icon: /*#__PURE__*/React.createElement(Icons.credit, {
      size: 20,
      stroke: "var(--success)"
    })
  }), /*#__PURE__*/React.createElement(QuickAction, {
    label: "Pay Bills",
    tint: "var(--primary-soft)",
    icon: /*#__PURE__*/React.createElement(Icons.card, {
      size: 20,
      stroke: "var(--primary)"
    })
  }), /*#__PURE__*/React.createElement(QuickAction, {
    label: "Scan",
    tint: "var(--bg-secondary)",
    icon: /*#__PURE__*/React.createElement(Icons.scan, {
      size: 20,
      stroke: "var(--fg-muted)"
    })
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '0 20px 24px',
      padding: 16,
      borderRadius: 0,
      background: 'var(--bg)',
      border: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--fg-muted)',
      textTransform: 'uppercase',
      letterSpacing: '.06em'
    }
  }, "Weekly Spend"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 12px var(--font-mono)'
    }
  }, "\u20A6 68,000")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 6,
      height: 56
    }
  }, spend.map((h, k) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      flex: 1,
      height: `${h}%`,
      borderRadius: 0,
      background: k === 4 ? 'var(--primary)' : 'var(--border)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 8
    }
  }, days.map((d, k) => /*#__PURE__*/React.createElement("span", {
    key: k,
    style: {
      fontSize: 10,
      color: k === 4 ? 'var(--primary)' : 'var(--fg-muted)',
      fontWeight: k === 4 ? 700 : 500
    }
  }, d)))), /*#__PURE__*/React.createElement(SecHeader, {
    title: "Recent Transactions",
    action: "See all"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 20px'
    }
  }, txns.map((t, k) => /*#__PURE__*/React.createElement(TxnRow, _extends({
    key: k
  }, t))))), /*#__PURE__*/React.createElement(BottomNav, {
    active: "home",
    onNav: onNav
  })));
}
function StatWidget({
  icon,
  tint,
  label,
  value,
  color
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: 12,
      borderRadius: 0,
      border: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 0,
      background: tint,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, icon), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--fg-muted)',
      marginBottom: 2,
      fontWeight: 500
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 15px var(--font-mono)',
      color
    }
  }, value)));
}
function QuickAction({
  label,
  tint,
  icon,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 7,
      padding: '14px 8px',
      borderRadius: 0,
      background: 'var(--bg)',
      border: '1px solid var(--border)',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 0,
      background: tint,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, icon), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--fg)'
    }
  }, label));
}
const SecHeader = ({
  title,
  action
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 20px 12px'
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontSize: 15,
    fontWeight: 700,
    letterSpacing: '-.01em'
  }
}, title), action && /*#__PURE__*/React.createElement("span", {
  style: {
    fontSize: 13,
    fontWeight: 600,
    color: 'var(--primary)'
  }
}, action));

/* ── Send money flow ─────────────────────────────────────────────────────── */
function Send({
  onBack,
  onDone,
  balance
}) {
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('James K.');
  const num = amount.replace(/\D/g, '');
  const display = num ? Number(num).toLocaleString() : '';
  const chips = ['5,000', '10,000', '20,000', '50,000'];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement(ScreenBody, {
    pad: "68px 24px 32px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onBack,
    style: {
      cursor: 'pointer',
      width: 40,
      height: 40,
      borderRadius: 0,
      border: '1px solid var(--border)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icons.back, {
    size: 20,
    stroke: "var(--fg)"
  })), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 20,
      fontWeight: 800,
      letterSpacing: '-.02em'
    }
  }, "Send money")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: 14,
      borderRadius: 0,
      border: '1px solid var(--border)',
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 0,
      background: 'var(--gradient-brand)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontWeight: 700,
      fontSize: 15
    }
  }, "JK"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600
    }
  }, recipient), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--fg-muted)',
      marginTop: 2,
      fontFamily: 'var(--font-mono)'
    }
  }, "0123 4567 89 \xB7 GTBank")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--success)',
      background: 'var(--success-soft)',
      padding: '3px 8px',
      borderRadius: 0
    }
  }, "Verified")), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '8px 0 4px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--fg-muted)',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '.06em',
      marginBottom: 8
    }
  }, "Amount"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 32px var(--font-mono)',
      color: display ? 'var(--fg)' : 'var(--mono-300)'
    }
  }, "\u20A6"), /*#__PURE__*/React.createElement("input", {
    autoFocus: true,
    value: display,
    onChange: e => setAmount(e.target.value),
    inputMode: "numeric",
    placeholder: "0",
    style: {
      border: 'none',
      outline: 'none',
      background: 'transparent',
      font: '700 44px var(--font-mono)',
      letterSpacing: '-.02em',
      color: display ? 'var(--fg)' : 'var(--mono-300)',
      width: '100%',
      textAlign: 'center'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--fg-muted)',
      marginTop: 6
    }
  }, "Balance: \u20A6 ", balance, ".00")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      justifyContent: 'center',
      flexWrap: 'wrap',
      margin: '20px 0'
    }
  }, chips.map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    onClick: () => setAmount(c.replace(/\D/g, '')),
    style: {
      padding: '7px 14px',
      borderRadius: 0,
      border: '1px solid var(--border-input)',
      background: 'var(--bg)',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--fg)',
      cursor: 'pointer',
      fontFamily: 'var(--font-mono)'
    }
  }, "\u20A6", c))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    disabled: !num,
    onClick: onDone
  }, num ? `Send ₦ ${display}` : 'Enter an amount'))));
}

/* ── Success sheet ───────────────────────────────────────────────────────── */
function SuccessOverlay({
  onDone,
  amount
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 52,
      background: 'rgba(23,23,23,.4)',
      display: 'flex',
      alignItems: 'flex-end',
      zIndex: 200
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      background: '#fff',
      borderRadius: '0 0 52px 52px',
      padding: '28px 24px 48px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: 0,
      background: 'var(--success-soft)',
      display: 'grid',
      placeItems: 'center',
      margin: '0 auto 16px'
    }
  }, /*#__PURE__*/React.createElement(Icons.check, {
    size: 32,
    stroke: "var(--success)"
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 20,
      fontWeight: 800,
      letterSpacing: '-.02em'
    }
  }, "Transfer complete"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--fg-muted)',
      marginTop: 6,
      marginBottom: 24
    }
  }, "\u20A6 ", amount, " sent to James K."), /*#__PURE__*/React.createElement(Button, {
    onClick: onDone
  }, "Done")));
}
Object.assign(window, {
  Home,
  StatWidget,
  QuickAction,
  SecHeader,
  Send,
  SuccessOverlay
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/ScreensApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/ScreensAuth.jsx
try { (() => {
/* MaV Mobile UI Kit — screens */
const ScreenBody = ({
  children,
  pad = '68px 24px 32px',
  style
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'absolute',
    inset: 0,
    borderRadius: 52,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    flex: 1,
    overflowY: 'auto',
    padding: pad,
    display: 'flex',
    flexDirection: 'column',
    ...style
  }
}, children));
const LogoRow = () => /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    marginBottom: 28
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    width: 40,
    height: 40,
    borderRadius: 0,
    background: 'var(--primary)',
    display: 'grid',
    placeItems: 'center'
  }
}, /*#__PURE__*/React.createElement(BrandMark, {
  size: 18
})), /*#__PURE__*/React.createElement("span", {
  style: {
    fontSize: 20,
    fontWeight: 800,
    letterSpacing: '-.02em'
  }
}, "MaV"));

/* ── Onboarding ──────────────────────────────────────────────────────────── */
const SLIDES = [{
  big1: 'Send money',
  big2: 'in seconds',
  body: "Transfer to anyone, anywhere. No queues, no branches — just tap and it's done."
}, {
  big1: 'Pay every bill',
  big2: 'in one place',
  body: 'Airtime, data, electricity, TV — all your bills, settled from one balance.'
}, {
  big1: 'Track every',
  big2: 'naira',
  body: 'See where your money goes with a clear weekly breakdown of spend and income.'
}];
function Onboarding({
  onNext,
  onLogin
}) {
  const [i, setI] = useState(0);
  const s = SLIDES[i];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StatusBar, {
    light: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 52,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 300,
      background: 'var(--gradient-brand)',
      borderRadius: '52px 52px 0 0',
      padding: '70px 28px 0',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      paddingBottom: 26
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      opacity: .75,
      fontWeight: 600,
      letterSpacing: '.08em',
      textTransform: 'uppercase'
    }
  }, "Total balance"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '800 40px var(--font-mono)',
      letterSpacing: '-.02em',
      marginTop: 4
    }
  }, "\u20A62,450,000"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 18
    }
  }, [['Add', Icons.plus], ['Send', Icons.send], ['Pay', Icons.card], ['History', Icons.clock]].map(([l, I], k) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      flex: 1,
      padding: '10px 0',
      borderRadius: 0,
      background: 'rgba(255,255,255,.16)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 5,
      fontSize: 11,
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement(I, {
    size: 18,
    stroke: "#fff"
  }), l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: '36px 32px 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 32,
      fontWeight: 800,
      letterSpacing: '-.03em',
      lineHeight: 1.1
    }
  }, s.big1, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--primary)'
    }
  }, s.big2)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      color: 'var(--fg-muted)',
      lineHeight: 1.6,
      marginTop: 14,
      maxWidth: 280
    }
  }, s.body), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      marginTop: 26
    }
  }, SLIDES.map((_, k) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      width: k === i ? 22 : 7,
      height: 7,
      borderRadius: 0,
      background: k === i ? 'var(--primary)' : 'var(--mono-200)',
      transition: '.2s'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 28px 44px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => i < SLIDES.length - 1 ? setI(i + 1) : onNext()
  }, i < SLIDES.length - 1 ? 'Next' : 'Get started'), /*#__PURE__*/React.createElement("div", {
    onClick: onLogin,
    style: {
      textAlign: 'center',
      marginTop: 16,
      fontSize: 14,
      fontWeight: 700,
      color: 'var(--fg)',
      cursor: 'pointer'
    }
  }, "I already have an account"))));
}

/* ── Phone login ─────────────────────────────────────────────────────────── */
function PhoneLogin({
  onContinue
}) {
  const [num, setNum] = useState('');
  const valid = num.replace(/\D/g, '').length >= 6;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement(ScreenBody, null, /*#__PURE__*/React.createElement(LogoRow, null), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 24,
      fontWeight: 800,
      letterSpacing: '-.03em',
      lineHeight: 1.15,
      marginBottom: 5
    }
  }, "Enter your phone number"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--fg-muted)',
      lineHeight: 1.5,
      marginBottom: 24
    }
  }, "We'll send a verification code. New users will be asked to create a profile."), /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      marginBottom: 6,
      display: 'block'
    }
  }, "Phone number"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: 48,
      borderRadius: 0,
      border: '1px solid var(--border-input)',
      overflow: 'hidden',
      background: '#fff',
      boxShadow: 'var(--shadow-input)',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      padding: '0 10px',
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      borderRight: '1px solid var(--border-input)',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18
    }
  }, "\uD83C\uDDF3\uD83C\uDDEC"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600
    }
  }, "+234"), /*#__PURE__*/React.createElement(Icons.chevronDown, {
    size: 10,
    stroke: "var(--mono-400)"
  })), /*#__PURE__*/React.createElement("input", {
    value: num,
    onChange: e => setNum(e.target.value),
    inputMode: "numeric",
    placeholder: "812 0000 0000",
    style: {
      flex: 1,
      border: 'none',
      background: 'transparent',
      padding: '0 12px',
      font: '400 14px var(--font-body)',
      color: 'var(--fg)',
      outline: 'none'
    }
  })), /*#__PURE__*/React.createElement(Button, {
    disabled: !valid,
    onClick: onContinue
  }, "Continue"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      margin: '18px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: 'var(--border-input)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--mono-400)',
      fontWeight: 500
    }
  }, "or continue with"), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: 'var(--border-input)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(SocialButton, {
    icon: /*#__PURE__*/React.createElement(AppleIcon, null)
  }, "Continue with Apple"), /*#__PURE__*/React.createElement(SocialButton, {
    icon: /*#__PURE__*/React.createElement(GoogleIcon, null)
  }, "Continue with Google"))));
}

/* ── OTP verify ──────────────────────────────────────────────────────────── */
function OTPVerify({
  onVerify,
  onBack
}) {
  const [code, setCode] = useState('');
  useEffect(() => {
    if (code.length === 6) {
      const t = setTimeout(onVerify, 450);
      return () => clearTimeout(t);
    }
  }, [code]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement(ScreenBody, null, /*#__PURE__*/React.createElement("div", {
    onClick: onBack,
    style: {
      marginBottom: 24,
      cursor: 'pointer',
      width: 40,
      height: 40,
      borderRadius: 0,
      border: '1px solid var(--border)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icons.back, {
    size: 20,
    stroke: "var(--fg)"
  })), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 24,
      fontWeight: 800,
      letterSpacing: '-.03em',
      marginBottom: 5
    }
  }, "Verify your number"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--fg-muted)',
      lineHeight: 1.5,
      marginBottom: 28
    }
  }, "Enter the 6-digit code we sent to ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--fg)'
    }
  }, "+234 812 0000 0000")), /*#__PURE__*/React.createElement(OTPInput, {
    value: code,
    onChange: setCode
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      fontSize: 13,
      color: 'var(--fg-muted)'
    }
  }, "Didn't get a code? ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--primary)',
      fontWeight: 600
    }
  }, "Resend code"), " \xB7 0:24"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 24
    }
  }, /*#__PURE__*/React.createElement(Button, {
    disabled: code.length < 6,
    onClick: onVerify
  }, "Verify"))));
}
Object.assign(window, {
  ScreenBody,
  LogoRow,
  Onboarding,
  PhoneLogin,
  OTPVerify
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/ScreensAuth.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web-app/Icons.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* MaV Web UI Kit — line icons (Lucide-adjacent, 2px stroke on 24 viewbox) */
const WIcon = ({
  size = 16,
  sw = 2,
  children,
  fill = 'none',
  ...rest
}) => /*#__PURE__*/React.createElement("svg", _extends({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: fill,
  stroke: "currentColor",
  strokeWidth: sw,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, rest), children);
const WIcons = {
  grid: p => /*#__PURE__*/React.createElement(WIcon, p, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "7",
    height: "7"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "3",
    width: "7",
    height: "7"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "14",
    width: "7",
    height: "7"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "14",
    width: "7",
    height: "7"
  })),
  search: p => /*#__PURE__*/React.createElement(WIcon, p, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 21-4.35-4.35"
  })),
  heart: p => /*#__PURE__*/React.createElement(WIcon, p, /*#__PURE__*/React.createElement("path", {
    d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
  })),
  bell: p => /*#__PURE__*/React.createElement(WIcon, p, /*#__PURE__*/React.createElement("path", {
    d: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.73 21a2 2 0 0 1-3.46 0"
  })),
  gear: p => /*#__PURE__*/React.createElement(WIcon, p, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
  })),
  wallet: p => /*#__PURE__*/React.createElement(WIcon, p, /*#__PURE__*/React.createElement("path", {
    d: "M19 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0 0 4h14a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 12h.01"
  })),
  send: p => /*#__PURE__*/React.createElement(WIcon, p, /*#__PURE__*/React.createElement("path", {
    d: "M22 2 11 13"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 2 15 22l-4-9-9-4z"
  })),
  download: p => /*#__PURE__*/React.createElement(WIcon, p, /*#__PURE__*/React.createElement("path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 10l5 5 5-5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 15V3"
  })),
  plus: p => /*#__PURE__*/React.createElement(WIcon, p, /*#__PURE__*/React.createElement("path", {
    d: "M12 5v14M5 12h14"
  })),
  arrowUp: p => /*#__PURE__*/React.createElement(WIcon, p, /*#__PURE__*/React.createElement("path", {
    d: "M7 17L17 7M9 7H17V15"
  })),
  arrowDown: p => /*#__PURE__*/React.createElement(WIcon, p, /*#__PURE__*/React.createElement("path", {
    d: "M17 7L7 17M15 17H7V9"
  })),
  logout: p => /*#__PURE__*/React.createElement(WIcon, p, /*#__PURE__*/React.createElement("path", {
    d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 17l5-5-5-5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 12H9"
  })),
  list: p => /*#__PURE__*/React.createElement(WIcon, p, /*#__PURE__*/React.createElement("path", {
    d: "M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"
  })),
  analytics: p => /*#__PURE__*/React.createElement(WIcon, p, /*#__PURE__*/React.createElement("path", {
    d: "M3 3v18h18"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "7",
    y: "11",
    width: "3",
    height: "6"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "12",
    y: "7",
    width: "3",
    height: "10"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "17",
    y: "13",
    width: "3",
    height: "4"
  })),
  mail: p => /*#__PURE__*/React.createElement(WIcon, p, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "5",
    width: "18",
    height: "14",
    rx: "0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 6l9 7 9-7"
  })),
  user: p => /*#__PURE__*/React.createElement(WIcon, p, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "8",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"
  })),
  help: p => /*#__PURE__*/React.createElement(WIcon, p, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.2 9.2a3 3 0 0 1 5.4 1.4c0 2-3 2.6-3 4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 17h.01"
  })),
  calendar: p => /*#__PURE__*/React.createElement(WIcon, p, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "4",
    width: "18",
    height: "17",
    rx: "0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 9h18M8 2v4M16 2v4"
  })),
  chevronDown: p => /*#__PURE__*/React.createElement(WIcon, p, /*#__PURE__*/React.createElement("path", {
    d: "M6 9l6 6 6-6"
  })),
  caretUp: p => /*#__PURE__*/React.createElement(WIcon, _extends({}, p, {
    sw: 2.4
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 14l6-6 6 6"
  })),
  caretDown: p => /*#__PURE__*/React.createElement(WIcon, _extends({}, p, {
    sw: 2.4
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 10l6 6 6-6"
  }))
};
const WBrandMark = ({
  size = 16,
  color = '#fff'
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 20 20",
  fill: color
}, /*#__PURE__*/React.createElement("rect", {
  x: "2",
  y: "2",
  width: "7",
  height: "7",
  rx: "2"
}), /*#__PURE__*/React.createElement("rect", {
  x: "11",
  y: "2",
  width: "7",
  height: "7",
  rx: "2"
}), /*#__PURE__*/React.createElement("rect", {
  x: "2",
  y: "11",
  width: "7",
  height: "7",
  rx: "2"
}), /*#__PURE__*/React.createElement("rect", {
  x: "11",
  y: "11",
  width: "7",
  height: "7",
  rx: "2",
  opacity: "0.4"
}));
Object.assign(window, {
  WIcon,
  WIcons,
  WBrandMark
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web-app/Icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web-app/Shell.jsx
try { (() => {
/* Fyscal Web UI Kit — app shell (browser chrome, sidebar w/ sub-nav, top bar) */
const {
  useState
} = React;
function BrowserChrome({
  url = 'app.fyscaltech.com/dashboard',
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1200,
      borderRadius: 12,
      background: '#fff',
      boxShadow: '0 24px 64px rgba(0,0,0,.15)',
      overflow: 'hidden',
      border: '1px solid var(--border)'
    }
  }, children);
}
const MAIN_NAV = [{
  k: 'dashboard',
  label: 'Dashboard',
  icon: WIcons.list,
  sub: ['Overview', 'KPIs', 'Activity']
}, {
  k: 'analytics',
  label: 'Analytics',
  icon: WIcons.analytics,
  sub: ['Active Users', 'Retention', 'Funnels']
}, {
  k: 'revenue',
  label: 'Revenue',
  icon: WIcons.mail,
  sub: ['MRR', 'Subscriptions', 'Invoices']
}, {
  k: 'users',
  label: 'Users',
  icon: WIcons.user,
  sub: ['All Users', 'Segments', 'Roles']
}];
const SUPPORT_NAV = [{
  k: 'settings',
  label: 'Settings',
  icon: WIcons.gear
}, {
  k: 'help',
  label: 'Help',
  icon: WIcons.help
}];
const TEAM = [{
  name: 'Sofia Rossi',
  initials: 'SR',
  role: 'Admin',
  tint: 'linear-gradient(135deg,#352eff,#7c9dff)'
}, {
  name: 'Liam O\u2019Brien',
  initials: 'LO',
  role: 'Finance',
  tint: 'linear-gradient(135deg,#0053ff,#00b4d8)'
}, {
  name: 'Noah Williams',
  initials: 'NW',
  role: 'Observer',
  tint: 'linear-gradient(135deg,#7b2ff7,#f107a3)'
}, {
  name: 'David Park',
  initials: 'DP',
  role: 'Compliance',
  tint: 'linear-gradient(135deg,#171717,#4a4a4a)'
}];

/* role tier pill — shared by sidebar Teams + the subscriber table */
const ROLE_STYLE = {
  Admin: ['var(--primary-soft)', 'var(--primary)'],
  Finance: ['var(--success-soft)', 'var(--success)'],
  Compliance: ['var(--warning-soft)', 'var(--warning)'],
  Observer: ['var(--bg-secondary)', 'var(--mono-500)']
};
function RolePill({
  role
}) {
  const s = ROLE_STYLE[role] || ROLE_STYLE.Observer;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9.5,
      fontWeight: 700,
      padding: '2px 7px',
      borderRadius: 9999,
      background: s[0],
      color: s[1],
      letterSpacing: '.02em',
      whiteSpace: 'nowrap'
    }
  }, role);
}
const SectionLabel = ({
  children
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    fontSize: 11,
    fontWeight: 700,
    color: 'var(--mono-500)',
    padding: '14px 10px 6px'
  }
}, children, /*#__PURE__*/React.createElement(WIcons.chevronDown, {
  size: 12,
  stroke: "var(--mono-300)"
}));
function Sidebar({
  active,
  onNav
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'color-mix(in srgb, var(--primary) 4%, #fff)',
      borderRight: '1px solid var(--border)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 16px 14px',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources && window.__resources.fyscalLogo || "../../assets/fyscal-logo.svg",
    alt: "Fyscal Technologies",
    style: {
      height: 22,
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 12px 6px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '8px 10px',
      background: 'var(--surface-soft)',
      border: '1px solid var(--border)',
      borderRadius: 0
    }
  }, /*#__PURE__*/React.createElement(WIcons.search, {
    size: 14,
    stroke: "var(--mono-300)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 12.5,
      color: 'var(--mono-300)'
    }
  }, "Search"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      fontWeight: 600,
      color: 'var(--mono-300)',
      fontFamily: 'var(--font-mono)'
    }
  }, "\u2318F"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: '0 8px',
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Main Menu"), MAIN_NAV.map(it => /*#__PURE__*/React.createElement(SidebarItem, {
    key: it.k,
    item: it,
    active: active === it.k,
    onClick: () => onNav(it.k)
  })), /*#__PURE__*/React.createElement(SectionLabel, null, "Teams"), TEAM.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.name,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '7px 10px',
      cursor: 'pointer',
      borderRadius: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 26,
      height: 26,
      borderRadius: '50%',
      background: t.tint,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 10,
      fontWeight: 700,
      color: '#fff',
      flexShrink: 0
    }
  }, t.initials), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      color: 'var(--mono-700)',
      flex: 1,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, t.name), /*#__PURE__*/React.createElement(RolePill, {
    role: t.role
  }))), /*#__PURE__*/React.createElement(SectionLabel, null, "Support"), SUPPORT_NAV.map(it => /*#__PURE__*/React.createElement(SidebarItem, {
    key: it.k,
    item: it,
    active: active === it.k,
    onClick: () => onNav(it.k)
  }))));
}
function SidebarItem({
  item,
  active,
  onClick
}) {
  const [h, setH] = useState(false);
  const [open, setOpen] = useState(item.k === 'dashboard');
  const hasSub = item.sub && item.sub.length;
  const I = item.icon;
  const handle = () => {
    onClick();
    if (hasSub) setOpen(o => !o);
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    onClick: handle,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '9px 10px',
      borderRadius: 0,
      fontSize: 13,
      fontWeight: active ? 600 : 500,
      cursor: 'pointer',
      transition: '.12s',
      color: active ? 'var(--fg)' : h ? 'var(--fg)' : 'var(--mono-500)',
      background: active ? 'var(--surface-soft)' : h ? '#f7f7f8' : 'transparent',
      boxShadow: active ? 'inset 2px 0 0 var(--primary)' : 'none'
    }
  }, /*#__PURE__*/React.createElement(I, {
    size: 16,
    stroke: active ? 'var(--primary)' : 'currentColor'
  }), item.label, hasSub && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      display: 'inline-flex',
      transition: 'transform .24s cubic-bezier(.2,.7,.2,1)',
      transform: open ? 'rotate(180deg)' : 'none'
    }
  }, /*#__PURE__*/React.createElement(WIcons.chevronDown, {
    size: 13,
    stroke: "var(--mono-300)"
  }))), hasSub && /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'hidden',
      maxHeight: open ? item.sub.length * 34 + 'px' : '0',
      opacity: open ? 1 : 0,
      transition: 'max-height .28s cubic-bezier(.2,.7,.2,1), opacity .2s ease'
    }
  }, item.sub.map((s, i) => /*#__PURE__*/React.createElement(SubItem, {
    key: s,
    label: s,
    first: i === 0 && active
  }))));
}
function SubItem({
  label,
  first
}) {
  const [h, setH] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '7px 10px 7px 38px',
      fontSize: 12.5,
      cursor: 'pointer',
      position: 'relative',
      fontWeight: first ? 600 : 500,
      color: first ? 'var(--primary)' : h ? 'var(--fg)' : 'var(--mono-500)',
      background: h ? '#f7f7f8' : 'transparent',
      transition: '.12s'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 22,
      width: 5,
      height: 5,
      borderRadius: '50%',
      background: first ? 'var(--primary)' : 'var(--mono-200)'
    }
  }), label);
}
function TopBar({
  title,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      padding: '16px 24px',
      background: '#fff',
      borderBottom: '1px solid var(--border)',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      flex: 1,
      letterSpacing: '-.01em'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, children));
}
function BtnSm({
  children,
  primary,
  onClick
}) {
  const [h, setH] = useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      padding: '7px 14px',
      borderRadius: 0,
      fontSize: 12,
      fontWeight: 600,
      fontFamily: 'var(--font-body)',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      transition: '.12s',
      border: primary ? 'none' : '1.5px solid var(--mono-100)',
      background: primary ? 'var(--primary)' : h ? '#f5f5f5' : 'transparent',
      color: primary ? '#fff' : 'var(--mono-700)',
      opacity: primary && h ? .9 : 1
    }
  }, children);
}
Object.assign(window, {
  BrowserChrome,
  Sidebar,
  TopBar,
  BtnSm,
  RolePill,
  MAIN_NAV,
  SUPPORT_NAV,
  TEAM
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web-app/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web-app/Widgets.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* MaV Web UI Kit — Metricly product-analytics dashboard + Explore/Settings views */
const {
  useState
} = React;

/* ── Section heading ─────────────────────────────────────────────────────── */
const SectionTitle = ({
  children,
  right
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    margin: '4px 0 16px'
  }
}, /*#__PURE__*/React.createElement("h2", {
  style: {
    fontSize: 17,
    fontWeight: 700,
    letterSpacing: '-.01em',
    color: 'var(--fg)'
  }
}, children), right);
const DeltaChip = ({
  delta,
  up
}) => /*#__PURE__*/React.createElement("span", {
  style: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 2,
    fontSize: 11.5,
    fontWeight: 700,
    color: up ? 'var(--success)' : 'var(--danger)'
  }
}, up ? /*#__PURE__*/React.createElement(WIcons.caretUp, {
  size: 11,
  stroke: 'var(--success)'
}) : /*#__PURE__*/React.createElement(WIcons.caretDown, {
  size: 11,
  stroke: 'var(--danger)'
}), delta);

/* ── KPI card ────────────────────────────────────────────────────────────── */
function KpiCard({
  label,
  value,
  delta,
  up
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 0,
      padding: '16px 18px',
      border: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 500,
      color: 'var(--mono-500)',
      marginBottom: 10
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 26px var(--font-mono)',
      letterSpacing: '-.03em',
      color: 'var(--fg)'
    }
  }, value), /*#__PURE__*/React.createElement(DeltaChip, {
    delta: delta,
    up: up
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--mono-300)',
      marginTop: 8
    }
  }, "vs last period"));
}
function DateDropdown({
  value,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      padding: '6px 12px',
      borderRadius: 9999,
      border: '1px solid var(--border-input)',
      background: '#fff',
      fontSize: 12.5,
      fontWeight: 600,
      color: 'var(--mono-700)',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement(WIcons.calendar, {
    size: 13,
    stroke: "var(--mono-500)"
  }), value, /*#__PURE__*/React.createElement(WIcons.chevronDown, {
    size: 12,
    stroke: "var(--mono-300)"
  }));
}

/* ── Analytics chart card (titled, bordered, footer slot) ────────────────── */
function MiniCard({
  title,
  children,
  footer
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 0,
      border: '1px solid var(--border)',
      padding: 18,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      fontWeight: 600,
      color: 'var(--mono-700)',
      marginBottom: 14
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      paddingTop: 12,
      borderTop: '1px solid var(--surface-soft)'
    }
  }, footer));
}
const YAxis = ({
  labels
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 132,
    paddingRight: 8,
    textAlign: 'right'
  }
}, labels.map((l, i) => /*#__PURE__*/React.createElement("span", {
  key: i,
  style: {
    fontSize: 9.5,
    color: 'var(--mono-300)',
    fontFamily: 'var(--font-mono)',
    lineHeight: 1
  }
}, l)));

/* Daily vs Monthly active users — tall primary bar + short muted bar per day */
function GroupedBars() {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const dau = [44, 52, 50, 56, 48, 30, 22];
  const mau = [16, 14, 15, 13, 12, 14, 13];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(YAxis, {
    labels: ['60k', '45k', '30k', '15k', '0k']
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'flex-end',
      gap: 10,
      height: 132,
      borderLeft: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      padding: '0 4px 0 8px'
    }
  }, days.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: d,
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
      gap: 3,
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 8,
      height: `${dau[i] / 60 * 100}%`,
      background: 'var(--primary)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 8,
      height: `${mau[i] / 60 * 100}%`,
      background: 'var(--mono-200)'
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '6px 4px 0 32px'
    }
  }, days.map(d => /*#__PURE__*/React.createElement("span", {
    key: d,
    style: {
      fontSize: 9.5,
      color: 'var(--mono-300)',
      fontFamily: 'var(--font-mono)'
    }
  }, d))));
}

/* Returning users over time — line W1..W8 */
function LineReturning() {
  const pts = [88, 80, 73, 67, 71, 79, 84, 86];
  const w = 280,
    h = 120,
    max = 95,
    min = 58;
  const x = i => 12 + i * ((w - 24) / (pts.length - 1));
  const y = v => h - 8 - (v - min) / (max - min) * (h - 24);
  const line = pts.map((v, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)} ${y(v).toFixed(1)}`).join(' ');
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(YAxis, {
    labels: ['90%', '76%', '68%', '60%']
  }), /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${w} ${h}`,
    width: "100%",
    height: "132",
    preserveAspectRatio: "none",
    style: {
      borderLeft: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: line,
    fill: "none",
    stroke: "var(--mono-900)",
    strokeWidth: "2",
    vectorEffect: "non-scaling-stroke",
    strokeLinejoin: "round",
    strokeLinecap: "round"
  }), pts.map((v, i) => /*#__PURE__*/React.createElement("circle", {
    key: i,
    cx: x(i),
    cy: y(v),
    r: "3",
    fill: "#fff",
    stroke: "var(--primary)",
    strokeWidth: "2",
    vectorEffect: "non-scaling-stroke"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '6px 4px 0 32px'
    }
  }, ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8'].map(d => /*#__PURE__*/React.createElement("span", {
    key: d,
    style: {
      fontSize: 9.5,
      color: 'var(--mono-300)',
      fontFamily: 'var(--font-mono)'
    }
  }, d))));
}

/* Users leaving this period — muted bars Oct..Mar */
function BarsLeaving() {
  const months = ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'];
  const vals = [1.6, 1.4, 1.5, 2.0, 1.9, 2.4];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(YAxis, {
    labels: ['3%', '2.25%', '1.5%', '0.75%', '0%']
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'flex-end',
      gap: 12,
      height: 132,
      borderLeft: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      padding: '0 6px 0 8px'
    }
  }, months.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: m,
    style: {
      flex: 1,
      height: `${vals[i] / 3 * 100}%`,
      background: 'var(--tertiary-1)'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '6px 6px 0 40px'
    }
  }, months.map(m => /*#__PURE__*/React.createElement("span", {
    key: m,
    style: {
      fontSize: 9.5,
      color: 'var(--mono-300)',
      fontFamily: 'var(--font-mono)'
    }
  }, m))));
}

/* Monthly Recurring Revenue — area chart Oct..Mar */
function RevenueArea() {
  const pts = [58, 60, 62, 66, 71, 84];
  const months = ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'];
  const w = 560,
    h = 230,
    max = 100,
    min = 0;
  const x = i => 6 + i * ((w - 12) / (pts.length - 1));
  const y = v => h - 10 - (v - min) / (max - min) * (h - 26);
  const line = pts.map((v, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)} ${y(v).toFixed(1)}`).join(' ');
  const area = `${line} L${x(pts.length - 1).toFixed(1)} ${h} L${x(0).toFixed(1)} ${h} Z`;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 0,
      border: '1px solid var(--border)',
      padding: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      letterSpacing: '-.01em'
    }
  }, "Monthly Recurring Revenue"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--mono-300)',
      marginTop: 2
    }
  }, "MRR growth over the last 6 months")), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 24px var(--font-mono)',
      letterSpacing: '-.02em'
    }
  }, "$84.2k"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 2,
      marginTop: 4,
      padding: '2px 8px',
      borderRadius: 9999,
      background: 'var(--primary-soft)',
      color: 'var(--primary)',
      fontSize: 11,
      fontWeight: 700
    }
  }, /*#__PURE__*/React.createElement(WIcons.caretUp, {
    size: 10,
    stroke: "var(--primary)"
  }), "+9.7% MoM"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(YAxis, {
    labels: ['$100k', '$75k', '$50k', '$25k', '$0k']
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${w} ${h}`,
    width: "100%",
    height: "230",
    preserveAspectRatio: "none"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "mrrFill",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "var(--primary)",
    stopOpacity: "0.22"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "var(--primary)",
    stopOpacity: "0"
  }))), /*#__PURE__*/React.createElement("path", {
    d: area,
    fill: "url(#mrrFill)"
  }), /*#__PURE__*/React.createElement("path", {
    d: line,
    fill: "none",
    stroke: "var(--primary)",
    strokeWidth: "2.5",
    vectorEffect: "non-scaling-stroke",
    strokeLinejoin: "round",
    strokeLinecap: "round"
  }), pts.map((v, i) => /*#__PURE__*/React.createElement("circle", {
    key: i,
    cx: x(i),
    cy: y(v),
    r: "3.5",
    fill: "var(--primary)",
    vectorEffect: "non-scaling-stroke"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 8
    }
  }, months.map(m => /*#__PURE__*/React.createElement("span", {
    key: m,
    style: {
      fontSize: 10,
      color: 'var(--mono-300)',
      fontFamily: 'var(--font-mono)'
    }
  }, m))))));
}

/* Subscription Plans — segmented donut + legend table */
function SubscriptionDonut() {
  const segs = [{
    label: 'Free',
    count: '68,420',
    pct: '54.8%',
    color: 'var(--mono-200)',
    dash: '104 86'
  }, {
    label: 'Pro',
    count: '42,180',
    pct: '33.8%',
    color: 'var(--primary)',
    dash: '64 126',
    off: -104
  }, {
    label: 'Enterprise',
    count: '14,232',
    pct: '11.4%',
    color: 'var(--secondary)',
    dash: '22 168',
    off: -168
  }];
  const C = 60; // circumference approx for r=30 -> 188.4; use 188 scale
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 0,
      border: '1px solid var(--border)',
      padding: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      letterSpacing: '-.01em'
    }
  }, "Subscription Plans"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--mono-300)',
      marginTop: 2,
      marginBottom: 18
    }
  }, "User distribution by plan"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      position: 'relative',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "150",
    height: "150",
    viewBox: "0 0 80 80"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "40",
    cy: "40",
    r: "30",
    fill: "none",
    stroke: "var(--surface-soft)",
    strokeWidth: "11"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "40",
    cy: "40",
    r: "30",
    fill: "none",
    stroke: "var(--mono-200)",
    strokeWidth: "11",
    strokeDasharray: "103 86",
    strokeDashoffset: "0",
    transform: "rotate(-90 40 40)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "40",
    cy: "40",
    r: "30",
    fill: "none",
    stroke: "var(--primary)",
    strokeWidth: "11",
    strokeDasharray: "64 125",
    strokeDashoffset: "-103",
    transform: "rotate(-90 40 40)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "40",
    cy: "40",
    r: "30",
    fill: "none",
    stroke: "var(--secondary)",
    strokeWidth: "11",
    strokeDasharray: "21 168",
    strokeDashoffset: "-167",
    transform: "rotate(-90 40 40)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--mono-300)'
    }
  }, "Total"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 22px var(--font-mono)',
      letterSpacing: '-.02em'
    }
  }, "124.8k"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, segs.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.label,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: s.color,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--mono-700)',
      fontWeight: 500
    }
  }, s.label), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      font: '600 13px var(--font-mono)',
      color: 'var(--fg)'
    }
  }, s.count), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      textAlign: 'right',
      fontSize: 12,
      color: 'var(--mono-300)',
      fontFamily: 'var(--font-mono)'
    }
  }, s.pct)))));
}

/* Subscribed users table */
function SubscribedTable() {
  const rows = [{
    name: 'Sofia Rossi',
    email: 'sofia@acme.io',
    plan: 'Enterprise',
    mrr: '$1,200',
    status: 'Active',
    since: 'Jan 2025',
    role: 'Admin',
    tint: 'linear-gradient(135deg,#352eff,#7c9dff)',
    ini: 'SR'
  }, {
    name: 'Liam O\u2019Brien',
    email: 'liam@northsea.co',
    plan: 'Pro',
    mrr: '$49',
    status: 'Active',
    since: 'Mar 2025',
    role: 'Finance',
    tint: 'linear-gradient(135deg,#0053ff,#00b4d8)',
    ini: 'LO'
  }, {
    name: 'Noah Williams',
    email: 'noah@brightlabs.dev',
    plan: 'Pro',
    mrr: '$49',
    status: 'Trialing',
    since: 'May 2026',
    role: 'Observer',
    tint: 'linear-gradient(135deg,#7b2ff7,#f107a3)',
    ini: 'NW'
  }, {
    name: 'David Park',
    email: 'david@parkstudio.kr',
    plan: 'Free',
    mrr: '$0',
    status: 'Active',
    since: 'Nov 2024',
    role: 'Compliance',
    tint: 'linear-gradient(135deg,#171717,#4a4a4a)',
    ini: 'DP'
  }, {
    name: 'Amara Okafor',
    email: 'amara@kanoworks.ng',
    plan: 'Enterprise',
    mrr: '$1,200',
    status: 'Past due',
    since: 'Feb 2025',
    role: 'Admin',
    tint: 'linear-gradient(135deg,#1f8a5b,#a1ff5b)',
    ini: 'AO'
  }];
  const statusStyle = {
    Active: ['var(--success-soft)', 'var(--success)'],
    Trialing: ['var(--primary-soft)', 'var(--primary)'],
    'Past due': ['var(--danger-soft)', 'var(--danger)']
  };
  const th = {
    fontSize: 10.5,
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '.06em',
    color: 'var(--mono-300)',
    textAlign: 'left',
    padding: '0 16px 12px'
  };
  const td = {
    fontSize: 13,
    color: 'var(--fg)',
    padding: '13px 16px',
    borderTop: '1px solid var(--surface-soft)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 0,
      border: '1px solid var(--border)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: 'var(--surface-soft)'
    }
  }, /*#__PURE__*/React.createElement("th", {
    style: {
      ...th,
      paddingTop: 13
    }
  }, "Customer"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...th,
      paddingTop: 13
    }
  }, "Role"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...th,
      paddingTop: 13
    }
  }, "Plan"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...th,
      paddingTop: 13
    }
  }, "MRR"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...th,
      paddingTop: 13
    }
  }, "Status"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...th,
      paddingTop: 13
    }
  }, "Member since"))), /*#__PURE__*/React.createElement("tbody", null, rows.map(r => /*#__PURE__*/React.createElement("tr", {
    key: r.email
  }, /*#__PURE__*/React.createElement("td", {
    style: td
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: '50%',
      background: r.tint,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 11,
      fontWeight: 700,
      color: '#fff',
      flexShrink: 0
    }
  }, r.ini), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600
    }
  }, r.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: 'var(--mono-300)'
    }
  }, r.email)))), /*#__PURE__*/React.createElement("td", {
    style: td
  }, /*#__PURE__*/React.createElement(RolePill, {
    role: r.role
  })), /*#__PURE__*/React.createElement("td", {
    style: td
  }, r.plan), /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      fontFamily: 'var(--font-mono)',
      fontWeight: 600
    }
  }, r.mrr), /*#__PURE__*/React.createElement("td", {
    style: td
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      padding: '3px 10px',
      borderRadius: 9999,
      background: statusStyle[r.status][0],
      color: statusStyle[r.status][1]
    }
  }, r.status)), /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      color: 'var(--mono-500)'
    }
  }, r.since))))));
}

/* ── Dashboard ───────────────────────────────────────────────────────────── */
function Dashboard() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 28px',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    right: /*#__PURE__*/React.createElement(DateDropdown, {
      value: "Last 7 days"
    })
  }, "KPI Summary"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5,1fr)',
      gap: 14,
      marginBottom: 34
    }
  }, /*#__PURE__*/React.createElement(KpiCard, {
    label: "Total Users",
    value: "124,832",
    delta: "8.2%",
    up: true
  }), /*#__PURE__*/React.createElement(KpiCard, {
    label: "New Signups",
    value: "3,471",
    delta: "12.4%",
    up: true
  }), /*#__PURE__*/React.createElement(KpiCard, {
    label: "Active Users",
    value: "48,209",
    delta: "5.1%",
    up: true
  }), /*#__PURE__*/React.createElement(KpiCard, {
    label: "Churn Rate",
    value: "2.4%",
    delta: "0.3%",
    up: false
  }), /*#__PURE__*/React.createElement(KpiCard, {
    label: "MRR",
    value: "$84,210",
    delta: "0.3%",
    up: false
  })), /*#__PURE__*/React.createElement(SectionTitle, null, "Monthly Analytics"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 14,
      marginBottom: 34
    }
  }, /*#__PURE__*/React.createElement(MiniCard, {
    title: "Daily vs Monthly Active Users",
    footer: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 28
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10.5,
        color: 'var(--mono-300)'
      }
    }, "Avg DAU"), /*#__PURE__*/React.createElement("div", {
      style: {
        font: '700 17px var(--font-mono)'
      }
    }, "12.5k")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10.5,
        color: 'var(--mono-300)'
      }
    }, "MAU"), /*#__PURE__*/React.createElement("div", {
      style: {
        font: '700 17px var(--font-mono)'
      }
    }, "48.2k")))
  }, /*#__PURE__*/React.createElement(GroupedBars, null)), /*#__PURE__*/React.createElement(MiniCard, {
    title: "Returning users over time",
    footer: /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: 'var(--mono-500)'
      }
    }, /*#__PURE__*/React.createElement("strong", {
      style: {
        color: 'var(--primary)'
      }
    }, "80%"), " of users returned in the last 8 weeks")
  }, /*#__PURE__*/React.createElement(LineReturning, null)), /*#__PURE__*/React.createElement(MiniCard, {
    title: "Users leaving this period",
    footer: /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: 'var(--mono-500)'
      }
    }, "~298 users left this month \u2014 review offboarding flow")
  }, /*#__PURE__*/React.createElement(BarsLeaving, null))), /*#__PURE__*/React.createElement(SectionTitle, null, "Revenue and Subscription Plan"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.9fr 1fr',
      gap: 14,
      marginBottom: 34
    }
  }, /*#__PURE__*/React.createElement(RevenueArea, null), /*#__PURE__*/React.createElement(SubscriptionDonut, null)), /*#__PURE__*/React.createElement(SectionTitle, null, "Subscribed Users"), /*#__PURE__*/React.createElement(SubscribedTable, null));
}

/* ── Explore (component / foundation library) ────────────────────────────── */
function Explore() {
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'Components', 'Foundations', 'Tokens', 'iOS', 'Android', 'Web', 'Dark Mode'];
  const featured = [{
    title: 'Buttons',
    meta: '8 variants · 3 sizes',
    tag: 'Component',
    preview: 'btn'
  }, {
    title: 'Inputs',
    meta: '6 states · 2 sizes',
    tag: 'Component',
    preview: 'input'
  }, {
    title: 'Color System',
    meta: '6 palettes · 8 shades each',
    tag: 'Foundation',
    preview: 'swatches'
  }];
  const resources = [{
    icon: '📝',
    title: 'Typography',
    sub: 'FT Sans — 4 weights, 8 sizes'
  }, {
    icon: '📐',
    title: 'Spacing',
    sub: '4px base grid — 16 steps'
  }, {
    icon: '🔢',
    title: 'OTP Component',
    sub: '6-digit code input with states'
  }, {
    icon: '💳',
    title: 'Finance Modules',
    sub: 'Balance, transactions, budget ring'
  }, {
    icon: '🏷️',
    title: 'Badges & Tags',
    sub: 'Status pills, counters, labels'
  }, {
    icon: '🧭',
    title: 'Navigation',
    sub: 'Tab bars, sidebars, breadcrumbs'
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      padding: '16px 24px',
      background: '#fff',
      borderBottom: '1px solid var(--border)',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 11,
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'var(--mono-300)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(WIcons.search, {
    size: 14
  })), /*#__PURE__*/React.createElement("input", {
    defaultValue: "button",
    placeholder: "Search components, tokens, screens\u2026",
    style: {
      width: '100%',
      padding: '9px 14px 9px 36px',
      borderRadius: 0,
      border: 'none',
      borderBottom: '2px solid var(--mono-400)',
      fontSize: 13,
      fontFamily: 'var(--font-body)',
      color: 'var(--fg)',
      outline: 'none',
      background: 'transparent'
    }
  })), /*#__PURE__*/React.createElement(BtnSm, {
    primary: true
  }, "Search")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 20,
      overflowX: 'auto',
      paddingBottom: 4
    }
  }, filters.map(f => /*#__PURE__*/React.createElement("button", {
    key: f,
    onClick: () => setFilter(f),
    style: {
      padding: '6px 14px',
      borderRadius: 0,
      fontSize: 12,
      fontWeight: 600,
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      fontFamily: 'var(--font-body)',
      transition: '.12s',
      border: `1.5px solid ${filter === f ? 'var(--primary)' : 'var(--mono-100)'}`,
      background: filter === f ? 'var(--primary)' : '#fff',
      color: filter === f ? '#fff' : 'var(--mono-700)'
    }
  }, f))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      marginBottom: 12
    }
  }, "Featured"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 14,
      marginBottom: 24
    }
  }, featured.map(c => /*#__PURE__*/React.createElement(FeaturedCard, _extends({
    key: c.title
  }, c)))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      marginBottom: 12
    }
  }, "All Resources"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 14
    }
  }, resources.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.title,
    style: {
      background: '#fff',
      borderRadius: 0,
      border: '1px solid var(--border)',
      padding: 16,
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 0,
      background: 'var(--bg-secondary)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 20,
      flexShrink: 0
    }
  }, r.icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700
    }
  }, r.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--mono-300)'
    }
  }, r.sub)), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--mono-200)',
      fontSize: 18
    }
  }, "\u203A"))))));
}
function FeaturedCard({
  title,
  meta,
  tag,
  preview
}) {
  const tagColor = tag === 'Foundation' ? {
    bg: 'var(--success-soft)',
    fg: 'var(--success)'
  } : {
    bg: 'var(--primary-soft)',
    fg: 'var(--primary)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 0,
      border: '1px solid var(--border)',
      overflow: 'hidden',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 100,
      background: 'var(--surface-soft)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6,
      padding: 12
    }
  }, preview === 'btn' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'var(--primary)',
      color: '#fff',
      fontSize: 11,
      fontWeight: 600,
      padding: '6px 12px'
    }
  }, "Primary"), /*#__PURE__*/React.createElement("span", {
    style: {
      border: '1.5px solid var(--mono-100)',
      color: 'var(--mono-700)',
      fontSize: 11,
      fontWeight: 600,
      padding: '6px 12px'
    }
  }, "Ghost")), preview === 'input' && /*#__PURE__*/React.createElement("div", {
    style: {
      width: '70%',
      borderBottom: '2px solid var(--mono-400)',
      fontSize: 12,
      color: 'var(--mono-300)',
      paddingBottom: 6
    }
  }, "Input field\u2026"), preview === 'swatches' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4
    }
  }, ['#352eff', '#0053ff', '#7c9dff', '#629c28', '#ff8400', '#ff0000'].map(c => /*#__PURE__*/React.createElement("div", {
    key: c,
    style: {
      width: 20,
      height: 36,
      background: c
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      marginBottom: 3
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--mono-300)'
    }
  }, meta), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      marginTop: 6,
      padding: '2px 8px',
      borderRadius: 0,
      fontSize: 9,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '.06em',
      background: tagColor.bg,
      color: tagColor.fg
    }
  }, tag)));
}

/* ── Settings (profile + notification prefs) ─────────────────────────────── */
function Settings() {
  const [navItem, setNavItem] = useState('Profile');
  const [tog, setTog] = useState({
    comp: true,
    token: true,
    digest: false,
    marketing: false
  });
  const groups = [{
    label: 'Account',
    items: ['Profile', 'Security', 'Billing']
  }, {
    label: 'Preferences',
    items: ['Appearance', 'Notifications', 'Language']
  }, {
    label: 'Developer',
    items: ['API Keys', 'Webhooks']
  }];
  const toggles = [{
    k: 'comp',
    label: 'Component updates',
    sub: 'When a component in your system changes'
  }, {
    k: 'token',
    label: 'Token changes',
    sub: 'When design tokens are updated'
  }, {
    k: 'digest',
    label: 'Weekly digest',
    sub: 'Summary of activity every Monday'
  }, {
    k: 'marketing',
    label: 'Marketing emails',
    sub: 'Product updates and tips'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '200px 1fr',
      minHeight: 620
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRight: '1px solid var(--border)',
      padding: '20px 12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 800,
      padding: '0 8px',
      marginBottom: 16,
      letterSpacing: '-.01em'
    }
  }, "Settings"), groups.map(g => /*#__PURE__*/React.createElement("div", {
    key: g.label,
    style: {
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '.1em',
      color: 'var(--mono-300)',
      padding: '8px 10px 3px'
    }
  }, g.label), g.items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it,
    onClick: () => setNavItem(it),
    style: {
      padding: '7px 10px',
      borderRadius: 0,
      fontSize: 12,
      fontWeight: navItem === it ? 600 : 500,
      cursor: 'pointer',
      transition: '.12s',
      color: navItem === it ? 'var(--primary)' : 'var(--mono-700)',
      background: navItem === it ? 'color-mix(in srgb, var(--primary) 8%, transparent)' : 'transparent'
    }
  }, it)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '7px 10px',
      fontSize: 12,
      fontWeight: 500,
      color: 'var(--mono-700)',
      cursor: 'pointer',
      marginTop: 4
    }
  }, "Sign Out")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 28px',
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 800,
      letterSpacing: '-.01em',
      marginBottom: 4
    }
  }, "Profile Settings"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--mono-500)'
    }
  }, "Manage your account details and public info")), /*#__PURE__*/React.createElement(SettingsCard, {
    title: "Photo"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: 0,
      background: 'var(--gradient-brand)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 22,
      fontWeight: 800,
      color: '#fff',
      flexShrink: 0
    }
  }, "AK"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--mono-300)',
      marginBottom: 8
    }
  }, "JPG, PNG or GIF. Max 2MB."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(BtnSm, {
    primary: true
  }, "Upload Photo"), /*#__PURE__*/React.createElement(BtnSm, null, "Remove"))))), /*#__PURE__*/React.createElement(SettingsCard, {
    title: "Basic Information"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(SettingsField, {
    label: "First Name",
    value: "Alex"
  }), /*#__PURE__*/React.createElement(SettingsField, {
    label: "Last Name",
    value: "Kim"
  })), /*#__PURE__*/React.createElement(SettingsField, {
    label: "Username",
    value: "alexkim"
  }), /*#__PURE__*/React.createElement(SettingsField, {
    label: "Email",
    value: "alex@mavdesign.io"
  }), /*#__PURE__*/React.createElement(SettingsField, {
    label: "Bio",
    value: "Building the MaV design system \u2014 modular tokens, accessible components, and cross-platform screens."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 10,
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement(BtnSm, null, "Cancel"), /*#__PURE__*/React.createElement(BtnSm, {
    primary: true
  }, "Save Changes"))), /*#__PURE__*/React.createElement(SettingsCard, {
    title: "Notification Preferences",
    action: "Edit all"
  }, toggles.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: t.k,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 0',
      borderBottom: i < toggles.length - 1 ? '1px solid var(--surface-soft)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 500
    }
  }, t.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--mono-300)',
      marginTop: 2
    }
  }, t.sub)), /*#__PURE__*/React.createElement("div", {
    onClick: () => setTog(s => ({
      ...s,
      [t.k]: !s[t.k]
    })),
    style: {
      width: 40,
      height: 22,
      borderRadius: 9999,
      position: 'relative',
      cursor: 'pointer',
      transition: 'background .2s',
      background: tog[t.k] ? 'var(--primary)' : 'var(--mono-100)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: '#fff',
      position: 'absolute',
      top: 2,
      left: tog[t.k] ? 20 : 2,
      transition: 'left .2s',
      boxShadow: '0 1px 3px rgba(0,0,0,.2)'
    }
  })))))));
}
function SettingsCard({
  title,
  action,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 0,
      border: '1px solid var(--border)',
      padding: 20,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 16,
      paddingBottom: 12,
      borderBottom: '1px solid var(--surface-soft)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700
    }
  }, title), action && /*#__PURE__*/React.createElement("button", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--primary)',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)'
    }
  }, action)), children);
}
function SettingsField({
  label,
  value
}) {
  const [focus, setFocus] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--mono-700)',
      marginBottom: 5,
      display: 'block',
      textTransform: 'uppercase',
      letterSpacing: '.04em'
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    defaultValue: value,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      padding: '9px 4px',
      borderRadius: 0,
      border: 'none',
      borderBottom: `2px solid ${focus ? 'var(--primary)' : 'var(--mono-400)'}`,
      fontSize: 13,
      fontFamily: 'var(--font-body)',
      color: 'var(--fg)',
      outline: 'none',
      background: 'transparent',
      transition: 'border-color .15s'
    }
  }));
}
Object.assign(window, {
  SectionTitle,
  DeltaChip,
  KpiCard,
  DateDropdown,
  MiniCard,
  GroupedBars,
  LineReturning,
  BarsLeaving,
  RevenueArea,
  SubscriptionDonut,
  SubscribedTable,
  Dashboard,
  Explore,
  FeaturedCard,
  Settings,
  SettingsCard,
  SettingsField
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web-app/Widgets.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HeroBeam.jsx
try { (() => {
/* Fyscal Website UI Kit — HeroBeam: hero with an animated FROSTED-COLUMNS canvas
   background (blue columns rising from white, film grain, hover lift) — see
   fluted-glass.js. Light theme: dark ink foreground over the columns. */
const {
  useState,
  useRef,
  useEffect
} = React;
const GLASS_OPTS = Object.assign({
  colorOne: '#352EFF',
  colorTwo: '#6B8CFF',
  bgColor: '#ffffff',
  columns: 9,
  noise: 0.42,
  gloss: 0.4,
  widthVariation: 1.7,
  hover: true,
  hoverIntensity: 2.0,
  mode: 'columns'
}, typeof window !== 'undefined' && window.__HERO_OPTS || {});
function BeamNav() {
  const links = ['Personal', 'Business', 'Developers', 'Pricing'];
  const [active, setActive] = useState('Personal');
  return /*#__PURE__*/React.createElement("header", {
    className: "bnav"
  }, /*#__PURE__*/React.createElement(FyscalLogo, {
    height: 22
  }), /*#__PURE__*/React.createElement("nav", {
    className: "bnav-pills"
  }, links.map(l => /*#__PURE__*/React.createElement("button", {
    key: l,
    className: 'bnav-pill' + (active === l ? ' on' : ''),
    onClick: () => setActive(l)
  }, l))), /*#__PURE__*/React.createElement("div", {
    className: "bnav-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "bnav-icon",
    "aria-label": "Search"
  }, /*#__PURE__*/React.createElement(SIcons.globe, {
    size: 18,
    stroke: "var(--fg)"
  })), /*#__PURE__*/React.createElement("button", {
    className: "bnav-cta"
  }, "Open account")));
}
function GlassCards() {
  return /*#__PURE__*/React.createElement("div", {
    className: "glass-stack"
  }, /*#__PURE__*/React.createElement("div", {
    className: "glass-card balance"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gc-label"
  }, "Total balance"), /*#__PURE__*/React.createElement("div", {
    className: "gc-amount"
  }, "\u20A62,450,000", /*#__PURE__*/React.createElement("span", null, ".00")), /*#__PURE__*/React.createElement("div", {
    className: "gc-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "gc-chip up"
  }, "\u25B2 +12.4%"), /*#__PURE__*/React.createElement("span", {
    className: "gc-sub"
  }, "this month")), /*#__PURE__*/React.createElement("div", {
    className: "gc-actions"
  }, [['Send', SIcons.swap], ['Pay', SIcons.card], ['Save', SIcons.chart]].map(([l, I], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "gc-act"
  }, /*#__PURE__*/React.createElement(I, {
    size: 16,
    stroke: "#fff"
  }), l)))), /*#__PURE__*/React.createElement("div", {
    className: "glass-card txn"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gc-txn"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gc-ico"
  }, /*#__PURE__*/React.createElement(SIcons.bolt, {
    size: 16,
    stroke: "var(--primary)"
  })), /*#__PURE__*/React.createElement("div", {
    className: "gc-txn-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gc-txn-name"
  }, "Instant transfer"), /*#__PURE__*/React.createElement("div", {
    className: "gc-txn-meta"
  }, "James K. \xB7 just now")), /*#__PURE__*/React.createElement("div", {
    className: "gc-txn-amt"
  }, "\u2212\u20A620,000")), /*#__PURE__*/React.createElement("div", {
    className: "gc-progress"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '74%'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "gc-txn-foot"
  }, "Settles in ", /*#__PURE__*/React.createElement("strong", null, "2s"), " \xB7 cleared")));
}
function HeroBeam() {
  const features = [['Instant transfers', SIcons.bolt], ['Bank-grade security', SIcons.shield], ['Multi-currency', SIcons.globe], ['Developer API', SIcons.api], ['24/7 support', SIcons.users]];
  const canvasRef = useRef(null);
  useEffect(() => {
    let h, t;
    const start = () => {
      if (window.FlutedGlass && canvasRef.current) {
        h = window.FlutedGlass.mount(canvasRef.current, GLASS_OPTS);
        return true;
      }
      return false;
    };
    if (!start()) {
      t = setInterval(() => {
        if (start()) clearInterval(t);
      }, 60);
      setTimeout(() => clearInterval(t), 4000);
    }
    return () => {
      if (h) h.destroy();
      if (t) clearInterval(t);
    };
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    className: "herob"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-bg",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("canvas", {
    ref: canvasRef,
    className: "fluted-glass-canvas"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero-scrim"
  })), /*#__PURE__*/React.createElement(NavBar, {
    onCta: () => {}
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-copy"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-badge"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "New \xB7 Instant cross-border transfers"), /*#__PURE__*/React.createElement("h1", {
    className: "hero-h1"
  }, "Money that moves", /*#__PURE__*/React.createElement("br", null), "at the ", /*#__PURE__*/React.createElement("span", {
    className: "grad"
  }, "speed of light.")), /*#__PURE__*/React.createElement("p", {
    className: "hero-sub"
  }, "Send, spend, and grow across 18 African markets from one account \u2014 instant, secure, and built for how money really moves."), /*#__PURE__*/React.createElement("div", {
    className: "hero-ctas"
  }, /*#__PURE__*/React.createElement("button", {
    className: "hbtn light"
  }, "Open free account ", /*#__PURE__*/React.createElement(SIcons.arrowR, {
    size: 17
  })), /*#__PURE__*/React.createElement("button", {
    className: "hbtn ghost"
  }, "Book a demo")), /*#__PURE__*/React.createElement("div", {
    className: "hero-feats"
  }, features.map(([label, I], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "hfeat"
  }, /*#__PURE__*/React.createElement(I, {
    size: 17,
    stroke: "var(--primary)"
  }), label)))), /*#__PURE__*/React.createElement(GlassCards, null)));
}
Object.assign(window, {
  HeroBeam,
  BeamNav,
  GlassCards
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HeroBeam.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Icons.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Fyscal Website UI Kit — line icons (1.75px stroke, 24 viewbox) */
const SIcon = ({
  size = 24,
  sw = 1.75,
  children,
  fill = 'none',
  ...rest
}) => /*#__PURE__*/React.createElement("svg", _extends({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: fill,
  stroke: "currentColor",
  strokeWidth: sw,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, rest), children);
const SIcons = {
  bolt: p => /*#__PURE__*/React.createElement(SIcon, p, /*#__PURE__*/React.createElement("path", {
    d: "M13 2 4 14h7l-1 8 9-12h-7l1-8z"
  })),
  shield: p => /*#__PURE__*/React.createElement(SIcon, p, /*#__PURE__*/React.createElement("path", {
    d: "M12 3l8 3v6c0 4.5-3.3 7.6-8 9-4.7-1.4-8-4.5-8-9V6z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 12l2 2 4-4"
  })),
  globe: p => /*#__PURE__*/React.createElement(SIcon, p, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18"
  })),
  card: p => /*#__PURE__*/React.createElement(SIcon, p, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "5",
    width: "20",
    height: "14",
    rx: "0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 10h20"
  })),
  swap: p => /*#__PURE__*/React.createElement(SIcon, p, /*#__PURE__*/React.createElement("path", {
    d: "M7 4 3 8l4 4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 8h14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 20l4-4-4-4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 16H7"
  })),
  chart: p => /*#__PURE__*/React.createElement(SIcon, p, /*#__PURE__*/React.createElement("path", {
    d: "M3 3v18h18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 14l3-3 3 3 5-6"
  })),
  lock: p => /*#__PURE__*/React.createElement(SIcon, p, /*#__PURE__*/React.createElement("rect", {
    x: "4",
    y: "10",
    width: "16",
    height: "11",
    rx: "0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 10V7a4 4 0 0 1 8 0v3"
  })),
  users: p => /*#__PURE__*/React.createElement(SIcon, p, /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "8",
    r: "3.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 5a3.5 3.5 0 0 1 0 7M21 20c0-2.6-1.4-4.9-3.5-5.5"
  })),
  phone: p => /*#__PURE__*/React.createElement(SIcon, p, /*#__PURE__*/React.createElement("rect", {
    x: "6",
    y: "2",
    width: "12",
    height: "20",
    rx: "0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 18h2"
  })),
  api: p => /*#__PURE__*/React.createElement(SIcon, p, /*#__PURE__*/React.createElement("path", {
    d: "M8 7 3 12l5 5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 7l5 5-5 5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13 4l-2 16"
  })),
  check: p => /*#__PURE__*/React.createElement(SIcon, p, /*#__PURE__*/React.createElement("path", {
    d: "M4 12l5 5L20 6"
  })),
  arrowR: p => /*#__PURE__*/React.createElement(SIcon, p, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 6l6 6-6 6"
  })),
  star: p => /*#__PURE__*/React.createElement(SIcon, p, /*#__PURE__*/React.createElement("path", {
    d: "M12 3l2.6 5.3 5.9.9-4.2 4.1 1 5.9-5.3-2.8-5.3 2.8 1-5.9L3.5 9.2l5.9-.9z"
  })),
  menu: p => /*#__PURE__*/React.createElement(SIcon, p, /*#__PURE__*/React.createElement("path", {
    d: "M3 6h18M3 12h18M3 18h18"
  })),
  x: p => /*#__PURE__*/React.createElement(SIcon, p, /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12M18 6L6 18"
  })),
  naira: p => /*#__PURE__*/React.createElement(SIcon, p, /*#__PURE__*/React.createElement("path", {
    d: "M6 4v16M18 4v16M5 9h14M5 15h14M7 4l10 16"
  })),
  home: p => /*#__PURE__*/React.createElement(SIcon, p, /*#__PURE__*/React.createElement("path", {
    d: "M3 11l9-8 9 8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 10v10h14V10"
  })),
  chevD: p => /*#__PURE__*/React.createElement(SIcon, p, /*#__PURE__*/React.createElement("path", {
    d: "M6 9l6 6 6-6"
  })),
  chevR: p => /*#__PURE__*/React.createElement(SIcon, p, /*#__PURE__*/React.createElement("path", {
    d: "M9 6l6 6-6 6"
  })),
  bell: p => /*#__PURE__*/React.createElement(SIcon, p, /*#__PURE__*/React.createElement("path", {
    d: "M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.7 21a2 2 0 0 1-3.4 0"
  })),
  filter: p => /*#__PURE__*/React.createElement(SIcon, p, /*#__PURE__*/React.createElement("path", {
    d: "M3 5h18l-7 8v6l-4-2v-4z"
  })),
  sort: p => /*#__PURE__*/React.createElement(SIcon, p, /*#__PURE__*/React.createElement("path", {
    d: "M7 4v16M7 4l-3 4M7 4l3 4M17 20V4M17 20l-3-4M17 20l3-4"
  })),
  refresh: p => /*#__PURE__*/React.createElement(SIcon, p, /*#__PURE__*/React.createElement("path", {
    d: "M21 12a9 9 0 1 1-3-6.7L21 8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 4v4h-4"
  })),
  grid: p => /*#__PURE__*/React.createElement(SIcon, p, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "7",
    height: "7"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "3",
    width: "7",
    height: "7"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "14",
    width: "7",
    height: "7"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "14",
    width: "7",
    height: "7"
  })),
  play: p => /*#__PURE__*/React.createElement(SIcon, p, /*#__PURE__*/React.createElement("path", {
    d: "M7 4l13 8-13 8z"
  })),
  drag: p => /*#__PURE__*/React.createElement(SIcon, p, /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "6",
    r: "1.4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "12",
    r: "1.4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "18",
    r: "1.4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "15",
    cy: "6",
    r: "1.4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "15",
    cy: "12",
    r: "1.4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "15",
    cy: "18",
    r: "1.4"
  })),
  dots: p => /*#__PURE__*/React.createElement(SIcon, p, /*#__PURE__*/React.createElement("circle", {
    cx: "5",
    cy: "12",
    r: "1.6"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "1.6"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "12",
    r: "1.6"
  })),
  mail: p => /*#__PURE__*/React.createElement(SIcon, p, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "5",
    width: "18",
    height: "14",
    rx: "0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 6l9 7 9-7"
  })),
  doc: p => /*#__PURE__*/React.createElement(SIcon, p, /*#__PURE__*/React.createElement("path", {
    d: "M6 2h8l4 4v16H6z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 2v4h4"
  })),
  gear: p => /*#__PURE__*/React.createElement(SIcon, p, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"
  })),
  calendar: p => /*#__PURE__*/React.createElement(SIcon, p, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "5",
    width: "18",
    height: "16"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 10h18M8 3v4M16 3v4"
  }))
};

/* Real Fyscal logo (blue F mark + wordmark). variant: 'blue' | 'white' (full knockout) */
const FyscalLogo = ({
  height = 24,
  variant = 'blue'
}) => {
  const wordFill = variant === 'white' ? '#ffffff' : '#000000';
  const markFill = variant === 'white' ? '#ffffff' : '#352EFF';
  return /*#__PURE__*/React.createElement("svg", {
    height: height,
    viewBox: "0 0 253 43",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M58.6363 0L56.4009 13.0744H5.15625L7.40816 0H58.6363Z",
    fill: markFill
  }), /*#__PURE__*/React.createElement("path", {
    d: "M43.5695 42.9998H29.7661L34.2408 16.8239H48.0539L43.5695 42.9998Z",
    fill: markFill
  }), /*#__PURE__*/React.createElement("path", {
    d: "M27.6972 29.9672L4.37739 29.9072L15.7168 31.8338L13.8034 43H0L4.51065 16.824L29.9491 16.7959L27.6972 29.9672Z",
    fill: markFill
  }), /*#__PURE__*/React.createElement("path", {
    d: "M69.9214 16.8929L72.5129 0H82.0056L81.4107 3.87719H76.3052L75.8675 6.65771H80.6477L80.0757 10.3037H75.3184L74.3086 16.8918H69.9214V16.8929Z",
    fill: wordFill
  }), /*#__PURE__*/React.createElement("path", {
    d: "M84.9938 16.8908L86.1821 9.35685L81.4299 0H86.4592L88.305 4.3158C88.4053 4.5388 88.5065 4.79043 88.6108 5.07174C88.7151 5.35305 88.8163 5.65073 88.9166 5.96579C89.1242 5.48092 89.2919 5.10652 89.4187 4.84056C89.5455 4.57562 89.6478 4.38433 89.7245 4.26976L92.7238 0.00102394H97.9259L90.7164 9.40494L89.5404 16.8929H84.9958L84.9938 16.8908Z",
    fill: wordFill
  }), /*#__PURE__*/React.createElement("path", {
    d: "M97.8394 10.9506C98.5088 11.6761 99.1471 12.203 99.7536 12.5321C100.361 12.8613 100.988 13.0268 101.636 13.0268C102.174 13.0268 102.603 12.8953 102.923 12.6314C103.243 12.3675 103.403 12.0199 103.403 11.5885C103.403 11.0022 102.756 10.3693 101.461 9.68856C101.337 9.62234 101.239 9.57169 101.167 9.53469C99.9083 8.87541 99.0466 8.24242 98.5813 7.63476C98.1161 7.0271 97.883 6.287 97.883 5.41543C97.883 3.82615 98.4159 2.52707 99.4808 1.51625C100.546 0.50542 101.919 0 103.599 0C104.486 0 105.339 0.157769 106.158 0.472313C106.976 0.786857 107.749 1.25234 108.476 1.86682L106.643 5.04147C106.069 4.54385 105.545 4.1738 105.072 3.93229C104.599 3.69078 104.163 3.57003 103.763 3.57003C103.327 3.57003 102.963 3.69663 102.672 3.94885C102.381 4.20107 102.235 4.51075 102.235 4.8769C102.235 5.3307 102.781 5.84001 103.872 6.40385C104.257 6.60153 104.556 6.7632 104.767 6.88687C105.887 7.50914 106.665 8.14407 107.102 8.79263C107.538 9.4412 107.756 10.2514 107.756 11.2252C107.756 12.946 107.163 14.321 105.978 15.3494C104.792 16.3787 103.181 16.8929 101.144 16.8929C100.076 16.8929 99.0756 16.664 98.1441 16.2063C97.2127 15.7487 96.3731 15.0689 95.6245 14.1691L97.8394 10.9506Z",
    fill: wordFill
  }), /*#__PURE__*/React.createElement("path", {
    d: "M124.204 1.14374L123.488 5.58708C122.88 5.05177 122.218 4.64712 121.501 4.37216C120.785 4.09719 120.039 3.95971 119.265 3.95971C117.947 3.95971 116.862 4.42578 116.008 5.35599C115.154 6.28717 114.727 7.47479 114.727 8.91885C114.727 10.2245 115.085 11.2336 115.802 11.9484C116.518 12.6631 117.532 13.0209 118.842 13.0209C119.407 13.0209 119.987 12.9517 120.584 12.8123C121.181 12.6728 121.809 12.4642 122.468 12.1853L121.806 16.3537C121.263 16.5292 120.664 16.6637 120.008 16.7554C119.353 16.8471 118.645 16.8929 117.886 16.8929C115.62 16.8929 113.805 16.1821 112.44 14.7595C111.076 13.3368 110.394 11.4491 110.394 9.09533C110.394 7.95939 110.569 6.87611 110.92 5.84547C111.272 4.81581 111.787 3.87878 112.467 3.03536C113.263 2.0525 114.257 1.3017 115.448 0.781023C116.638 0.260341 117.971 0 119.448 0C120.288 0 121.102 0.095549 121.891 0.285685C122.681 0.476797 123.451 0.762494 124.204 1.14374Z",
    fill: wordFill
  }), /*#__PURE__*/React.createElement("path", {
    d: "M123.246 16.8929L131.77 0H137.468L141.085 16.8929H136.468L135.782 13.7083H129.829L128.201 16.8929H123.247H123.246ZM131.537 9.94667H135.13L134.35 5.99992C134.273 5.60811 134.214 5.25722 134.176 4.95032C134.137 4.6424 134.114 4.35391 134.106 4.08486C133.943 4.54624 133.794 4.95236 133.659 5.30223C133.522 5.65209 133.416 5.91195 133.339 6.08074L131.537 9.94667Z",
    fill: wordFill
  }), /*#__PURE__*/React.createElement("path", {
    d: "M141.851 16.8929L144.513 0H149.054L147.014 12.8541H152.592L151.959 16.8929H141.851Z",
    fill: wordFill
  }), /*#__PURE__*/React.createElement("path", {
    d: "M68.9785 42.9999L71.0461 30.0303H67.2363L67.8871 26.1071H79.896L79.2453 30.0303H75.6106L73.543 42.9999H68.9785Z",
    fill: wordFill
  }), /*#__PURE__*/React.createElement("path", {
    d: "M84.9084 39.2383H90.2438L89.6434 42.9999H79.7036L82.4235 26.1071H92.3633L91.7389 30.0067H86.4046L85.9693 32.7648H90.9151L90.3377 36.4343H85.3678L84.9084 39.2383Z",
    fill: wordFill
  }), /*#__PURE__*/React.createElement("path", {
    d: "M107.709 27.2508L106.983 31.6941C106.366 31.1588 105.694 30.7542 104.968 30.4792C104.242 30.2043 103.486 30.0668 102.701 30.0668C101.365 30.0668 100.264 30.5329 99.3982 31.4631C98.5325 32.3942 98.0992 33.5818 98.0992 35.0259C98.0992 36.3315 98.4622 37.3407 99.1894 38.0554C99.9155 38.7701 100.943 39.128 102.272 39.128C102.844 39.128 103.433 39.0588 104.038 38.9193C104.643 38.7799 105.28 38.5712 105.948 38.2923L105.277 42.4607C104.726 42.6362 104.119 42.7708 103.454 42.8625C102.79 42.9541 102.072 42.9999 101.302 42.9999C99.0049 42.9999 97.1652 42.2891 95.7812 40.8665C94.3983 39.4439 93.7063 37.5562 93.7063 35.2024C93.7063 34.0665 93.8839 32.9832 94.2402 31.9525C94.5964 30.9229 95.1185 29.9858 95.8086 29.1424C96.6157 28.1596 97.6229 27.4088 98.8302 26.8881C100.037 26.3674 101.389 26.1071 102.886 26.1071C103.737 26.1071 104.563 26.2026 105.363 26.3928C106.164 26.5839 106.944 26.8695 107.709 27.2508Z",
    fill: wordFill
  }), /*#__PURE__*/React.createElement("path", {
    d: "M108.284 42.9999L110.976 26.1071H115.57L114.51 32.6267H120.479L121.517 26.1071H126.122L123.417 42.9999H118.812L119.908 36.0998H113.962L112.866 42.9999H108.284Z",
    fill: wordFill
  }), /*#__PURE__*/React.createElement("path", {
    d: "M127.082 42.9989L129.752 26.1071H134.919L138.49 34.4491C138.521 34.5187 138.571 34.6374 138.641 34.8072C139.034 35.7227 139.307 36.5227 139.462 37.207V36.7804C139.462 36.4725 139.479 36.1329 139.514 35.7595C139.549 35.3862 139.601 34.935 139.67 34.4041L140.977 26.1081H145.496L142.825 42.9999H137.855L134.063 34.4041C133.785 33.7812 133.575 33.2656 133.433 32.8585C133.29 32.4513 133.168 32.0432 133.069 31.635V32.1076C133.069 32.4155 133.056 32.7408 133.029 33.0825C133.002 33.4252 132.954 33.8804 132.885 34.4502L131.602 42.9999H127.082V42.9989Z",
    fill: wordFill
  }), /*#__PURE__*/React.createElement("path", {
    d: "M155.804 42.9999C154.667 42.9999 153.633 42.842 152.703 42.527C151.772 42.2121 150.945 41.7392 150.221 41.1083C149.461 40.4336 148.866 39.6019 148.439 38.6122C148.011 37.6225 147.798 36.5704 147.798 35.4559C147.798 34.2537 147.981 33.1294 148.347 32.0851C148.713 31.0399 149.258 30.0931 149.983 29.2419C150.83 28.2298 151.864 27.4546 153.084 26.9154C154.304 26.3762 155.628 26.1071 157.055 26.1071C159.445 26.1071 161.377 26.8042 162.851 28.1966C164.324 29.59 165.061 31.4007 165.061 33.6296C165.061 34.8251 164.874 35.9483 164.502 37.0004C164.129 38.0525 163.584 39.0003 162.866 39.8437C161.99 40.8772 160.954 41.6622 159.759 42.1975C158.564 42.7328 157.246 42.9999 155.804 42.9999ZM156.782 30.0453C155.485 30.0453 154.399 30.5182 153.522 31.464C152.646 32.4098 152.208 33.5828 152.208 34.983C152.208 36.2223 152.557 37.212 153.256 37.9521C153.955 38.6931 154.887 39.0627 156.053 39.0627C157.327 39.0627 158.41 38.5732 159.3 37.5942C160.191 36.6153 160.636 35.4218 160.636 34.0148C160.636 32.8564 160.274 31.9048 159.55 31.1608C158.826 30.4168 157.902 30.0444 156.78 30.0444L156.782 30.0453Z",
    fill: wordFill
  }), /*#__PURE__*/React.createElement("path", {
    d: "M167.171 42.9999L169.833 26.1071H174.374L172.334 38.9611H177.912L177.279 42.9999H167.171Z",
    fill: wordFill
  }), /*#__PURE__*/React.createElement("path", {
    d: "M188.221 42.9999C187.083 42.9999 186.05 42.842 185.119 42.527C184.189 42.2121 183.362 41.7392 182.637 41.1083C181.877 40.4336 181.283 39.6019 180.855 38.6122C180.428 37.6225 180.215 36.5704 180.215 35.4559C180.215 34.2537 180.398 33.1294 180.764 32.0851C181.13 31.0399 181.675 30.0931 182.399 29.2419C183.247 28.2298 184.28 27.4546 185.501 26.9154C186.721 26.3762 188.045 26.1071 189.472 26.1071C191.862 26.1071 193.794 26.8042 195.268 28.1966C196.741 29.59 197.478 31.4007 197.478 33.6296C197.478 34.8251 197.291 35.9483 196.918 37.0004C196.546 38.0525 196.001 39.0003 195.283 39.8437C194.406 40.8772 193.371 41.6622 192.176 42.1975C190.98 42.7328 189.663 42.9999 188.221 42.9999ZM189.199 30.0453C187.902 30.0453 186.816 30.5182 185.939 31.464C185.063 32.4098 184.624 33.5828 184.624 34.983C184.624 36.2223 184.974 37.212 185.672 37.9521C186.372 38.6931 187.304 39.0627 188.469 39.0627C189.744 39.0627 190.827 38.5732 191.717 37.5942C192.608 36.6153 193.053 35.4218 193.053 34.0148C193.053 32.8564 192.691 31.9048 191.967 31.1608C191.242 30.4168 190.319 30.0444 189.197 30.0444L189.199 30.0453Z",
    fill: wordFill
  }), /*#__PURE__*/React.createElement("path", {
    d: "M209.318 33.8061L217.426 33.8168C217.359 36.6835 216.569 38.931 215.054 40.5584C213.539 42.1858 211.483 42.9999 208.887 42.9999C206.292 42.9999 204.307 42.3067 202.803 40.9211C201.299 39.5356 200.546 37.6761 200.546 35.3448C200.546 34.0616 200.778 32.8428 201.242 31.6883C201.705 30.5338 202.37 29.5198 203.239 28.6471C204.063 27.8261 205.039 27.1972 206.168 26.7613C207.297 26.3255 208.52 26.1071 209.836 26.1071C211.381 26.1071 212.73 26.4152 213.885 27.0305C215.039 27.6467 216.04 28.5925 216.886 29.8679L213.444 32.2109C213.039 31.4845 212.538 30.9424 211.938 30.5836C211.338 30.2247 210.638 30.0444 209.836 30.0444C208.482 30.0444 207.365 30.5319 206.482 31.5069C205.6 32.482 205.158 33.7135 205.158 35.2024C205.158 36.4339 205.507 37.4226 206.206 38.1666C206.905 38.9106 207.828 39.283 208.975 39.283C209.402 39.283 209.805 39.2333 210.183 39.1348C210.562 39.0363 210.913 38.891 211.237 38.6999C211.523 38.5244 211.77 38.3021 211.976 38.0349C212.182 37.7678 212.348 37.4538 212.473 37.095H208.799L209.318 33.8061Z",
    fill: wordFill
  }), /*#__PURE__*/React.createElement("path", {
    d: "M218.961 42.9999L221.641 26.1071H226.25L223.57 42.9999H218.961Z",
    fill: wordFill
  }), /*#__PURE__*/React.createElement("path", {
    d: "M232.526 39.2383H237.781L237.19 42.9999H227.4L230.079 26.1071H239.868L239.253 30.0067H234L233.571 32.7648H238.442L237.873 36.4343H232.979L232.526 39.2383Z",
    fill: wordFill
  }), /*#__PURE__*/React.createElement("path", {
    d: "M241.731 37.0577C242.411 37.7832 243.059 38.31 243.674 38.6392C244.291 38.9683 244.927 39.1339 245.584 39.1339C246.13 39.1339 246.566 39.0024 246.891 38.7385C247.216 38.4746 247.378 38.1269 247.378 37.6955C247.378 37.1093 246.721 36.4763 245.407 35.7956C245.281 35.7294 245.182 35.6788 245.108 35.6418C243.831 34.9825 242.956 34.3495 242.484 33.7418C242.012 33.1342 241.776 32.3941 241.776 31.5225C241.776 29.9332 242.316 28.6341 243.397 27.6233C244.478 26.6125 245.872 26.1071 247.577 26.1071C248.477 26.1071 249.343 26.2648 250.174 26.5794C251.004 26.8939 251.789 27.3594 252.527 27.9739L250.666 31.1485C250.083 30.6509 249.552 30.2809 249.072 30.0394C248.592 29.7979 248.15 29.6771 247.743 29.6771C247.3 29.6771 246.931 29.8037 246.636 30.0559C246.34 30.3081 246.193 30.6178 246.193 30.984C246.193 31.4378 246.747 31.9471 247.854 32.5109C248.245 32.7086 248.548 32.8702 248.762 32.9939C249.899 33.6162 250.689 34.2511 251.132 34.8997C251.575 35.5483 251.796 36.3585 251.796 37.3323C251.796 39.053 251.195 40.4281 249.991 41.4564C248.788 42.4858 247.153 42.9999 245.086 42.9999C244.001 42.9999 242.986 42.7711 242.041 42.3134C241.095 41.8557 240.243 41.176 239.483 40.2762L241.731 37.0577Z",
    fill: wordFill
  }));
};
Object.assign(window, {
  SIcon,
  SIcons,
  FyscalLogo
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Library.jsx
try { (() => {
/* Fyscal Website UI Kit — Component Library (atomic components).
   Mobile-first, zero-radius, brand tokens. Exports a `Lib` namespace + helpers.
   Grouped: Navigation, Content, Actions, Forms, Feedback, Containers, Data. */
const {
  useState,
  useRef,
  useEffect
} = React;

/* ════ shared atoms ════════════════════════════════════════════════════════ */
function UBtn({
  children,
  variant = 'primary',
  size = 'md',
  full,
  onClick,
  type
}) {
  const [h, setH] = useState(false);
  const pad = size === 'lg' ? '14px 24px' : size === 'sm' ? '8px 14px' : '11px 18px';
  const fs = size === 'lg' ? 15 : size === 'sm' ? 13 : 14;
  const V = {
    primary: {
      background: h ? 'var(--tertiary-2)' : 'var(--primary)',
      color: '#fff',
      border: '1.5px solid var(--primary)'
    },
    dark: {
      background: h ? '#000' : 'var(--ink)',
      color: '#fff',
      border: '1.5px solid var(--mono-900)'
    },
    ghost: {
      background: h ? 'var(--mono-100)' : 'transparent',
      color: 'var(--fg)',
      border: '1.5px solid var(--border-input)'
    },
    danger: {
      background: h ? '#c81e1e' : 'var(--danger)',
      color: '#fff',
      border: '1.5px solid var(--danger)'
    },
    light: {
      background: h ? 'rgba(255,255,255,.88)' : '#fff',
      color: 'var(--primary)',
      border: '1.5px solid #fff'
    },
    outlineLight: {
      background: h ? 'rgba(255,255,255,.14)' : 'transparent',
      color: '#fff',
      border: '1.5px solid rgba(255,255,255,.55)'
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      padding: pad,
      fontSize: fs,
      fontWeight: 600,
      fontFamily: 'var(--font-body)',
      borderRadius: 0,
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      transition: '.15s',
      width: full ? '100%' : 'auto',
      letterSpacing: '-.01em',
      ...V[variant]
    }
  }, children);
}
const card = {
  background: 'var(--surface)',
  border: '1px solid var(--border)',
  padding: 18
};
const lbl = {
  fontSize: 12,
  fontWeight: 600,
  marginBottom: 6,
  display: 'block',
  color: 'var(--fg)'
};

/* ════ NAVIGATION ══════════════════════════════════════════════════════════ */
function Breadcrumbs({
  items = ['Home', 'Personal', 'Cards', 'Virtual card']
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      flexWrap: 'wrap',
      fontSize: 13
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("span", {
    key: it,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: i === items.length - 1 ? 'var(--fg)' : 'var(--mono-500)',
      fontWeight: i === items.length - 1 ? 600 : 500,
      textDecoration: 'none'
    }
  }, it), i < items.length - 1 && /*#__PURE__*/React.createElement(SIcons.chevR, {
    size: 13,
    stroke: "var(--mono-300)"
  }))));
}
function Tabs({
  tabs = ['Overview', 'Transactions', 'Cards', 'Settings']
}) {
  const [a, setA] = useState(0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: '1px solid var(--border)',
      display: 'flex',
      gap: 4,
      overflowX: 'auto'
    }
  }, tabs.map((t, i) => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => setA(i),
    style: {
      padding: '10px 14px',
      fontSize: 13.5,
      fontWeight: a === i ? 600 : 500,
      fontFamily: 'var(--font-body)',
      color: a === i ? 'var(--primary)' : 'var(--mono-500)',
      background: 'none',
      border: 'none',
      borderBottom: a === i ? '2px solid var(--primary)' : '2px solid transparent',
      marginBottom: -1,
      cursor: 'pointer',
      whiteSpace: 'nowrap'
    }
  }, t)));
}
function Segments({
  options = ['Day', 'Week', 'Month', 'Year']
}) {
  const [a, setA] = useState(1);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      padding: 3,
      background: 'var(--surface-soft)',
      border: '1px solid var(--border)'
    }
  }, options.map((o, i) => /*#__PURE__*/React.createElement("button", {
    key: o,
    onClick: () => setA(i),
    style: {
      padding: '7px 16px',
      fontSize: 13,
      fontWeight: 600,
      fontFamily: 'var(--font-body)',
      color: a === i ? '#fff' : 'var(--mono-600)',
      background: a === i ? 'var(--primary)' : 'transparent',
      border: 'none',
      cursor: 'pointer',
      transition: '.12s'
    }
  }, o)));
}
function SideNav({
  items
}) {
  const list = items || [{
    label: 'Dashboard',
    icon: SIcons.home
  }, {
    label: 'Payments',
    icon: SIcons.swap
  }, {
    label: 'Cards',
    icon: SIcons.card
  }, {
    label: 'Analytics',
    icon: SIcons.chart
  }, {
    label: 'Settings',
    icon: SIcons.gear
  }];
  const [a, setA] = useState(0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 200,
      border: '1px solid var(--border)',
      background: 'var(--surface)',
      padding: 8
    }
  }, list.map((it, i) => {
    const I = it.icon;
    return /*#__PURE__*/React.createElement("div", {
      key: it.label,
      onClick: () => setA(i),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '9px 10px',
        fontSize: 13,
        fontWeight: a === i ? 600 : 500,
        cursor: 'pointer',
        color: a === i ? 'var(--primary)' : 'var(--mono-600)',
        background: a === i ? 'var(--primary-soft)' : 'transparent',
        boxShadow: a === i ? 'inset 2px 0 0 var(--primary)' : 'none'
      }
    }, /*#__PURE__*/React.createElement(I, {
      size: 17,
      stroke: a === i ? 'var(--primary)' : 'var(--mono-500)'
    }), it.label);
  }));
}
function Menu() {
  const [open, setOpen] = useState(false);
  const items = ['Profile', 'Billing', 'Team', 'Sign out'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'inline-block'
    }
  }, /*#__PURE__*/React.createElement(UBtn, {
    variant: "ghost",
    size: "sm",
    onClick: () => setOpen(o => !o)
  }, "Account ", /*#__PURE__*/React.createElement(SIcons.chevD, {
    size: 14
  })), open && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '100%',
      left: 0,
      marginTop: 4,
      minWidth: 170,
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      boxShadow: 'var(--shadow-lg)',
      zIndex: 20
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: it,
    onClick: () => setOpen(false),
    style: {
      padding: '10px 14px',
      fontSize: 13,
      color: i === items.length - 1 ? 'var(--danger)' : 'var(--fg)',
      cursor: 'pointer',
      borderTop: i === items.length - 1 ? '1px solid var(--surface-soft)' : 'none'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'var(--surface-soft)',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent'
  }, it))));
}

/* ════ CONTENT DISPLAY ═════════════════════════════════════════════════════ */
function Avatar({
  initials = 'AK',
  size = 40,
  tint = 'var(--gradient-brand)'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      background: tint,
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 700,
      fontSize: size * 0.36,
      flexShrink: 0
    }
  }, initials);
}
function AvatarGroup() {
  const a = [['AK', '#352eff'], ['OO', '#0053ff'], ['NW', '#7b2ff7'], ['+5', 'var(--mono-300)']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex'
    }
  }, a.map((x, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      marginLeft: i ? -10 : 0,
      border: '2px solid #fff',
      borderRadius: '50%'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: x[0],
    size: 34,
    tint: x[1]
  }))));
}
function FeatureCard({
  icon,
  title,
  body
}) {
  const I = icon || SIcons.bolt;
  return /*#__PURE__*/React.createElement("div", {
    style: card
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      background: 'var(--primary-soft)',
      color: 'var(--primary)',
      display: 'grid',
      placeItems: 'center',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(I, {
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      marginBottom: 6
    }
  }, title || 'Instant transfers'), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: 'var(--mono-500)',
      lineHeight: 1.55
    }
  }, body || 'Money lands in seconds, any bank, any time.'));
}
function MediaBlock() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...card,
      padding: 0,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '16/9',
      background: 'var(--gradient-brand)',
      position: 'relative',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: '50%',
      background: 'rgba(255,255,255,.25)',
      border: '1px solid rgba(255,255,255,.5)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(SIcons.play, {
    size: 20,
    stroke: "#fff",
    fill: "#fff"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700
    }
  }, "How Fyscal works"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--mono-500)',
      marginTop: 4
    }
  }, "2 min \xB7 Product overview")));
}
function ListItem({
  title,
  meta,
  amount,
  credit
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 0',
      borderBottom: '1px solid var(--surface-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 38,
      background: 'var(--bg-secondary)',
      display: 'grid',
      placeItems: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(SIcons.swap, {
    size: 18,
    stroke: "var(--mono-500)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      fontWeight: 600
    }
  }, title || 'Salary — GTBank'), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--mono-400)'
    }
  }, meta || 'Today, 09:14')), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 13.5px var(--font-mono)',
      color: credit ? 'var(--success)' : 'var(--fg)'
    }
  }, amount || '+₦350,000'));
}
function Thumb({
  tint
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '1',
      background: tint || 'var(--primary-soft)',
      border: '1px solid var(--border)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(SIcons.grid, {
    size: 20,
    stroke: "var(--primary)"
  }));
}

/* ════ ACTIONS ═════════════════════════════════════════════════════════════ */
function Popover() {
  const [open, setOpen] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'inline-block'
    }
  }, /*#__PURE__*/React.createElement(UBtn, {
    variant: "ghost",
    size: "sm",
    onClick: () => setOpen(o => !o)
  }, "Info ", /*#__PURE__*/React.createElement(SIcons.chevD, {
    size: 14
  })), open && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '100%',
      left: 0,
      marginTop: 6,
      width: 220,
      background: 'var(--ink)',
      color: '#fff',
      padding: 12,
      fontSize: 12.5,
      lineHeight: 1.5,
      zIndex: 20,
      boxShadow: 'var(--shadow-lg)'
    }
  }, "Transfers settle instantly on weekdays. Weekend transfers may take up to 2 hours."));
}
function ActionSheet({
  onClose
}) {
  const items = [['Share', SIcons.swap], ['Edit', SIcons.doc], ['Archive', SIcons.grid], ['Delete', SIcons.x]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(10,16,40,.4)',
      display: 'flex',
      alignItems: 'flex-end',
      zIndex: 30
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      background: 'var(--surface)',
      padding: '8px 0 16px'
    },
    onClick: e => e.stopPropagation()
  }, items.map(([t, I], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '15px 22px',
      fontSize: 15,
      fontWeight: 500,
      color: t === 'Delete' ? 'var(--danger)' : 'var(--fg)',
      borderTop: i ? '1px solid var(--surface-soft)' : 'none',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(I, {
    size: 20,
    stroke: t === 'Delete' ? 'var(--danger)' : 'var(--mono-600)'
  }), t))));
}

/* ════ FORMS ═══════════════════════════════════════════════════════════════ */
function TextInput({
  label = 'Full name',
  placeholder = 'Jane Doe',
  error
}) {
  const [f, setF] = useState(false);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, label), /*#__PURE__*/React.createElement("input", {
    placeholder: placeholder,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      width: '100%',
      height: 46,
      padding: '0 14px',
      borderRadius: 0,
      background: 'var(--surface)',
      outline: 'none',
      fontSize: 14,
      fontFamily: 'var(--font-body)',
      color: 'var(--fg)',
      border: `1px solid ${error ? 'var(--danger)' : f ? 'var(--primary)' : 'var(--border-input)'}`,
      boxShadow: f ? 'var(--shadow-focus)' : 'none',
      transition: '.15s'
    }
  }), error && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: 'var(--danger)',
      marginTop: 5
    }
  }, error));
}
function Select({
  label = 'Country',
  options = ['Nigeria', 'Ghana', 'Kenya', 'South Africa']
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", {
    style: {
      width: '100%',
      height: 46,
      padding: '0 38px 0 14px',
      borderRadius: 0,
      background: 'var(--surface)',
      border: '1px solid var(--border-input)',
      fontSize: 14,
      fontFamily: 'var(--font-body)',
      color: 'var(--fg)',
      appearance: 'none',
      cursor: 'pointer',
      outline: 'none'
    }
  }, options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o
  }, o))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 12,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement(SIcons.chevD, {
    size: 16,
    stroke: "var(--mono-400)"
  }))));
}
function Radios({
  label = 'Plan',
  options = ['Personal', 'Premium', 'Business']
}) {
  const [v, setV] = useState(1);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, options.map((o, i) => /*#__PURE__*/React.createElement("label", {
    key: o,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      cursor: 'pointer',
      fontSize: 14
    },
    onClick: () => setV(i)
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: '50%',
      border: `2px solid ${v === i ? 'var(--primary)' : 'var(--border-input)'}`,
      display: 'grid',
      placeItems: 'center',
      flexShrink: 0
    }
  }, v === i && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--primary)'
    }
  })), o))));
}
function Checks({
  label = 'Notifications',
  options = ['Email receipts', 'Push alerts', 'Weekly digest']
}) {
  const [s, setS] = useState({
    0: true
  });
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, options.map((o, i) => /*#__PURE__*/React.createElement("label", {
    key: o,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      cursor: 'pointer',
      fontSize: 14
    },
    onClick: () => setS(p => ({
      ...p,
      [i]: !p[i]
    }))
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      border: `2px solid ${s[i] ? 'var(--primary)' : 'var(--border-input)'}`,
      background: s[i] ? 'var(--primary)' : '#fff',
      display: 'grid',
      placeItems: 'center',
      flexShrink: 0
    }
  }, s[i] && /*#__PURE__*/React.createElement(SIcons.check, {
    size: 13,
    stroke: "#fff",
    sw: 3
  })), o))));
}
function Toggle({
  label = 'Face ID login',
  def = true
}) {
  const [on, setOn] = useState(def);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      cursor: 'pointer',
      fontSize: 14
    },
    onClick: () => setOn(o => !o)
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 26,
      borderRadius: 9999,
      background: on ? 'var(--primary)' : 'var(--mono-200)',
      position: 'relative',
      transition: '.18s',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: on ? 21 : 3,
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: 'var(--surface)',
      transition: '.18s',
      boxShadow: '0 1px 3px rgba(0,0,0,.25)'
    }
  })), label);
}
function RangeSlider({
  label = 'Transfer limit'
}) {
  const [v, setV] = useState(60);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      ...lbl,
      marginBottom: 0
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 13px var(--font-mono)',
      color: 'var(--primary)'
    }
  }, "\u20A6", (v * 5000).toLocaleString())), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 22,
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      height: 4,
      background: 'var(--mono-100)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      width: v + '%',
      height: 4,
      background: 'var(--primary)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: `calc(${v}% - 9px)`,
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: 'var(--surface)',
      border: '2px solid var(--primary)',
      boxShadow: 'var(--shadow-sm)'
    }
  }), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "0",
    max: "100",
    value: v,
    onChange: e => setV(+e.target.value),
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      opacity: 0,
      cursor: 'pointer',
      margin: 0
    }
  })));
}
function SearchBar({
  placeholder = 'Search transactions, people…'
}) {
  const [f, setF] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      height: 46,
      padding: '0 14px',
      background: 'var(--surface)',
      border: `1px solid ${f ? 'var(--primary)' : 'var(--border-input)'}`,
      boxShadow: f ? 'var(--shadow-focus)' : 'none',
      transition: '.15s'
    }
  }, /*#__PURE__*/React.createElement(SIcons.api, {
    style: {
      display: 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "17",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--mono-400)",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 21-4.35-4.35"
  }))), /*#__PURE__*/React.createElement("input", {
    placeholder: placeholder,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontSize: 14,
      fontFamily: 'var(--font-body)',
      color: 'var(--fg)'
    }
  }));
}

/* ════ FEEDBACK ════════════════════════════════════════════════════════════ */
function Alert({
  kind = 'info',
  title,
  body
}) {
  const M = {
    info: ['var(--primary-soft)', 'var(--primary)', 'Heads up'],
    success: ['var(--success-soft)', 'var(--success)', 'Transfer complete'],
    danger: ['var(--danger-soft)', 'var(--danger)', 'Payment failed'],
    warning: ['var(--warning-soft)', 'var(--warning)', 'Action needed']
  }[kind];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      padding: '12px 14px',
      background: M[0]
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: M[1],
      color: '#fff',
      display: 'grid',
      placeItems: 'center',
      fontSize: 11,
      fontWeight: 700,
      flexShrink: 0
    }
  }, "!"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: M[1]
    }
  }, title || M[2]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: M[1],
      opacity: .9,
      marginTop: 1
    }
  }, body || 'Your verification code was sent.')));
}
function Badge({
  children,
  kind = 'primary'
}) {
  const M = {
    primary: ['var(--primary-soft)', 'var(--primary)'],
    success: ['var(--success-soft)', 'var(--success)'],
    danger: ['var(--danger-soft)', 'var(--danger)'],
    warning: ['var(--warning-soft)', 'var(--warning)'],
    neutral: ['var(--bg-secondary)', 'var(--mono-600)']
  }[kind];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      padding: '3px 9px',
      borderRadius: 9999,
      background: M[0],
      color: M[1]
    }
  }, children);
}
function Toast() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '13px 16px',
      background: 'var(--ink)',
      color: '#fff',
      boxShadow: 'var(--shadow-lg)',
      maxWidth: 340
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 22,
      height: 22,
      borderRadius: '50%',
      background: 'var(--success)',
      display: 'grid',
      placeItems: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(SIcons.check, {
    size: 14,
    stroke: "#fff",
    sw: 3
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontSize: 13
    }
  }, "Transfer of \u20A650,000 sent"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--secondary)',
      cursor: 'pointer'
    }
  }, "Undo"));
}
function Progress({
  v = 68
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 12,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--mono-500)'
    }
  }, "Japa Fund"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 12px var(--font-mono)'
    }
  }, v, "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      background: 'var(--mono-100)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: v + '%',
      height: '100%',
      background: 'var(--gradient-brand)'
    }
  })));
}
function Spinner({
  size = 28
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      border: '3px solid var(--mono-100)',
      borderTopColor: 'var(--primary)',
      animation: 'ftspin .8s linear infinite'
    }
  });
}
function Skeleton() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, [100, 80, 90].map((w, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      height: 12,
      width: w + '%',
      background: 'linear-gradient(90deg,var(--mono-100),var(--surface-soft),var(--mono-100))',
      backgroundSize: '200% 100%',
      animation: 'ftshimmer 1.3s linear infinite'
    }
  })));
}
Object.assign(window, {
  UBtn,
  card,
  lbl,
  Breadcrumbs,
  Tabs,
  Segments,
  SideNav,
  Menu,
  Avatar,
  AvatarGroup,
  FeatureCard,
  MediaBlock,
  ListItem,
  Thumb,
  Popover,
  ActionSheet,
  TextInput,
  Select,
  Radios,
  Checks,
  Toggle,
  RangeSlider,
  SearchBar,
  Alert,
  Badge,
  Toast,
  Progress,
  Spinner,
  Skeleton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Library.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/LibraryExtras.jsx
try { (() => {
/* Fyscal Website UI Kit — Extras: the components/sections that complete a robust
   DS. Depends on Library.jsx (UBtn, TextInput, Select, Badge, Avatar, Toggle,
   card, lbl) + Icons.jsx (SIcons). All export to window. */
const {
  useState: uS3
} = React;
const xcard = {
  background: 'var(--surface)',
  border: '1px solid var(--border)',
  padding: 18
};
const xlbl = {
  fontSize: 12,
  fontWeight: 600,
  marginBottom: 6,
  display: 'block',
  color: 'var(--fg)'
};

/* ════ DISCLOSURE ══════════════════════════════════════════════════════════ */
function Accordion() {
  const items = [['What is Fyscal?', 'A modern money platform — send, spend, save, and build in one account.'], ['How long does a transfer take?', 'Most transfers settle instantly, 24/7, to any bank.'], ['Is my money protected?', 'Yes — deposits are held with CBN-licensed partners and monitored in real time.']];
  const [open, setOpen] = uS3(0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--border)',
      background: 'var(--surface)'
    }
  }, items.map(([q, a], i) => /*#__PURE__*/React.createElement("div", {
    key: q,
    style: {
      borderTop: i ? '1px solid var(--surface-soft)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(open === i ? -1 : i),
    style: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      padding: '13px 16px',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 13.5,
      fontWeight: 600,
      color: 'var(--fg)',
      textAlign: 'left'
    }
  }, q, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      transition: 'transform .22s',
      transform: open === i ? 'rotate(180deg)' : 'none'
    }
  }, /*#__PURE__*/React.createElement(SIcons.chevD, {
    size: 16,
    stroke: "var(--mono-400)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'hidden',
      maxHeight: open === i ? 120 : 0,
      transition: 'max-height .25s ease'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px 14px',
      fontSize: 13,
      color: 'var(--mono-500)',
      lineHeight: 1.55
    }
  }, a)))));
}

/* ════ NAVIGATION (more) ═══════════════════════════════════════════════════ */
function Pagination() {
  const [p, setP] = uS3(3);
  const pages = [1, 2, 3, 4, 5];
  const cell = on => ({
    minWidth: 34,
    height: 34,
    display: 'grid',
    placeItems: 'center',
    border: '1px solid ' + (on ? 'var(--primary)' : 'var(--border-input)'),
    background: on ? 'var(--primary)' : '#fff',
    color: on ? '#fff' : 'var(--mono-600)',
    fontSize: 13,
    fontWeight: 600,
    cursor: 'pointer',
    fontFamily: 'var(--font-body)'
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: cell(false),
    onClick: () => setP(Math.max(1, p - 1))
  }, /*#__PURE__*/React.createElement(SIcons.chevR, {
    size: 14,
    stroke: "var(--mono-500)",
    style: {
      transform: 'rotate(180deg)'
    }
  })), pages.map(n => /*#__PURE__*/React.createElement("button", {
    key: n,
    style: cell(n === p),
    onClick: () => setP(n)
  }, n)), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--mono-400)',
      padding: '0 2px'
    }
  }, "\u2026"), /*#__PURE__*/React.createElement("button", {
    style: cell(false),
    onClick: () => setP(12)
  }, "12"), /*#__PURE__*/React.createElement("button", {
    style: cell(false),
    onClick: () => setP(Math.min(12, p + 1))
  }, /*#__PURE__*/React.createElement(SIcons.chevR, {
    size: 14,
    stroke: "var(--mono-500)"
  })));
}
function Stepper() {
  const steps = ['Account', 'Identity', 'Funding', 'Done'];
  const cur = 2;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: s
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: '50%',
      display: 'grid',
      placeItems: 'center',
      fontSize: 12,
      fontWeight: 700,
      background: i < cur ? 'var(--primary)' : i === cur ? 'var(--primary-soft)' : '#fff',
      color: i < cur ? '#fff' : i === cur ? 'var(--primary)' : 'var(--mono-400)',
      border: '1.5px solid ' + (i <= cur ? 'var(--primary)' : 'var(--border-input)')
    }
  }, i < cur ? /*#__PURE__*/React.createElement(SIcons.check, {
    size: 15,
    stroke: "#fff",
    sw: 3
  }) : i + 1), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: i <= cur ? 'var(--fg)' : 'var(--mono-400)'
    }
  }, s)), i < steps.length - 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 2,
      background: i < cur ? 'var(--primary)' : 'var(--border)',
      margin: '0 6px',
      marginBottom: 18
    }
  }))));
}
function VerticalTabs() {
  const tabs = ['Profile', 'Security', 'Billing', 'Notifications'];
  const [a, setA] = uS3(1);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 0,
      border: '1px solid var(--border)',
      background: 'var(--surface)',
      minHeight: 150
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 130,
      borderRight: '1px solid var(--border)',
      padding: 6
    }
  }, tabs.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    onClick: () => setA(i),
    style: {
      padding: '9px 10px',
      fontSize: 12.5,
      fontWeight: a === i ? 600 : 500,
      cursor: 'pointer',
      color: a === i ? 'var(--primary)' : 'var(--mono-600)',
      background: a === i ? 'var(--primary-soft)' : 'transparent',
      boxShadow: a === i ? 'inset 2px 0 0 var(--primary)' : 'none'
    }
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: 18,
      fontSize: 13,
      color: 'var(--mono-500)',
      lineHeight: 1.6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: 'var(--fg)',
      marginBottom: 6
    }
  }, tabs[a]), "Settings for the ", tabs[a].toLowerCase(), " section appear in this panel."));
}
function Toolbar() {
  const tools = [SIcons.doc, SIcons.grid, SIcons.filter, SIcons.sort, SIcons.refresh];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      padding: 6,
      border: '1px solid var(--border)',
      background: 'var(--surface)'
    }
  }, tools.map((I, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    style: {
      width: 34,
      height: 34,
      display: 'grid',
      placeItems: 'center',
      border: 'none',
      background: i === 0 ? 'var(--primary-soft)' : 'transparent',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(I, {
    size: 17,
    stroke: i === 0 ? 'var(--primary)' : 'var(--mono-600)'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 22,
      background: 'var(--border)',
      margin: '0 4px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement(UBtn, {
    size: "sm"
  }, "Share")));
}

/* ════ FORMS (more) ════════════════════════════════════════════════════════ */
function Textarea({
  label = 'Message'
}) {
  const [f, setF] = uS3(false);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: xlbl
  }, label), /*#__PURE__*/React.createElement("textarea", {
    rows: "3",
    placeholder: "Write a note\u2026",
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      width: '100%',
      padding: '10px 12px',
      borderRadius: 0,
      resize: 'vertical',
      background: 'var(--surface)',
      outline: 'none',
      fontSize: 14,
      fontFamily: 'var(--font-body)',
      color: 'var(--fg)',
      border: '1px solid ' + (f ? 'var(--primary)' : 'var(--border-input)'),
      boxShadow: f ? 'var(--shadow-focus)' : 'none'
    }
  }));
}
function OTP() {
  const [v, setV] = uS3('48');
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: xlbl
  }, "Verification code"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, [0, 1, 2, 3, 4, 5].map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      width: 44,
      height: 48,
      display: 'grid',
      placeItems: 'center',
      border: '1px solid ' + (v[i] ? 'var(--ink)' : 'var(--border-input)'),
      fontFamily: 'var(--font-mono)',
      fontSize: 18,
      color: 'var(--fg)'
    }
  }, v[i] || ''))));
}
function PhoneInput() {
  const [f, setF] = uS3(false);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: xlbl
  }, "Phone number"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: 46,
      border: '1px solid ' + (f ? 'var(--primary)' : 'var(--border-input)'),
      boxShadow: f ? 'var(--shadow-focus)' : 'none',
      background: 'var(--surface)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      padding: '0 10px',
      border: 'none',
      borderRight: '1px solid var(--border-input)',
      background: 'transparent',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 600
    }
  }, "\uD83C\uDDF3\uD83C\uDDEC +234 ", /*#__PURE__*/React.createElement(SIcons.chevD, {
    size: 11,
    stroke: "var(--mono-400)"
  })), /*#__PURE__*/React.createElement("input", {
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    placeholder: "812 0000 000",
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      padding: '0 12px',
      fontSize: 14,
      fontFamily: 'var(--font-body)',
      color: 'var(--fg)'
    }
  })));
}
function Quantity() {
  const [n, setN] = uS3(2);
  const btn = {
    width: 38,
    height: 38,
    display: 'grid',
    placeItems: 'center',
    border: '1px solid var(--border-input)',
    background: 'var(--surface)',
    cursor: 'pointer',
    fontSize: 18,
    fontWeight: 600,
    color: 'var(--fg)',
    fontFamily: 'var(--font-body)'
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: xlbl
  }, "Quantity"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: btn,
    onClick: () => setN(Math.max(0, n - 1))
  }, "\u2212"), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 48,
      height: 38,
      display: 'grid',
      placeItems: 'center',
      borderTop: '1px solid var(--border-input)',
      borderBottom: '1px solid var(--border-input)',
      fontFamily: 'var(--font-mono)',
      fontWeight: 600
    }
  }, n), /*#__PURE__*/React.createElement("button", {
    style: btn,
    onClick: () => setN(n + 1)
  }, "+")));
}
function FileUpload() {
  const [over, setOver] = uS3(false);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: xlbl
  }, "Upload document"), /*#__PURE__*/React.createElement("div", {
    onDragOver: e => {
      e.preventDefault();
      setOver(true);
    },
    onDragLeave: () => setOver(false),
    onDrop: e => {
      e.preventDefault();
      setOver(false);
    },
    style: {
      border: '1.5px dashed ' + (over ? 'var(--primary)' : 'var(--border-input)'),
      background: over ? 'var(--primary-soft)' : 'var(--surface-soft)',
      padding: '24px 16px',
      textAlign: 'center',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      margin: '0 auto 10px',
      display: 'grid',
      placeItems: 'center',
      background: 'var(--surface)',
      border: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement(SIcons.doc, {
    size: 20,
    stroke: "var(--primary)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600
    }
  }, "Drop a file or ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--primary)'
    }
  }, "browse")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: 'var(--mono-400)',
      marginTop: 3
    }
  }, "PDF, PNG or JPG \xB7 max 5MB")));
}
function DateField() {
  const [f, setF] = uS3(false);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: xlbl
  }, "Date of birth"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      height: 46,
      padding: '0 12px',
      border: '1px solid ' + (f ? 'var(--primary)' : 'var(--border-input)'),
      boxShadow: f ? 'var(--shadow-focus)' : 'none',
      background: 'var(--surface)',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    defaultValue: "12 / 03 / 1996",
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      fontSize: 14,
      fontFamily: 'var(--font-mono)',
      color: 'var(--fg)'
    }
  }), /*#__PURE__*/React.createElement(SIcons.calendar, {
    size: 17,
    stroke: "var(--mono-400)"
  })));
}
function TagInput() {
  const [tags, setTags] = uS3(['Payments', 'Cards', 'API']);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: xlbl
  }, "Topics (multi-select)"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6,
      alignItems: 'center',
      minHeight: 46,
      padding: '7px 10px',
      border: '1px solid var(--border-input)',
      background: 'var(--surface)'
    }
  }, tags.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 12.5,
      fontWeight: 600,
      padding: '4px 6px 4px 10px',
      borderRadius: 9999,
      background: 'var(--primary-soft)',
      color: 'var(--primary)'
    }
  }, t, /*#__PURE__*/React.createElement("button", {
    onClick: () => setTags(tags.filter(x => x !== t)),
    style: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      display: 'grid',
      placeItems: 'center',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(SIcons.x, {
    size: 12,
    stroke: "var(--primary)"
  })))), /*#__PURE__*/React.createElement("input", {
    placeholder: "Add\u2026",
    style: {
      flex: 1,
      minWidth: 60,
      border: 'none',
      outline: 'none',
      fontSize: 13,
      fontFamily: 'var(--font-body)',
      color: 'var(--fg)'
    }
  })));
}

/* ════ DATA (more) ═════════════════════════════════════════════════════════ */
function DataTable() {
  const rows = [['Sofia Rossi', 'Enterprise', '$1,200', 'Active'], ['Liam OBrien', 'Pro', '$49', 'Active'], ['Noah Williams', 'Pro', '$49', 'Trialing']];
  const sm = {
    Active: ['var(--success-soft)', 'var(--success)'],
    Trialing: ['var(--primary-soft)', 'var(--primary)']
  };
  const th = {
    fontSize: 10.5,
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '.06em',
    color: 'var(--mono-400)',
    textAlign: 'left',
    padding: '11px 14px'
  };
  const td = {
    fontSize: 13,
    padding: '11px 14px',
    borderTop: '1px solid var(--surface-soft)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--border)',
      background: 'var(--surface)',
      overflowX: 'auto'
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: 'var(--surface-soft)'
    }
  }, /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Customer"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Plan"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "MRR"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Status"))), /*#__PURE__*/React.createElement("tbody", null, rows.map(r => /*#__PURE__*/React.createElement("tr", {
    key: r[0]
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      fontWeight: 600
    }
  }, r[0]), /*#__PURE__*/React.createElement("td", {
    style: td
  }, r[1]), /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      fontFamily: 'var(--font-mono)',
      fontWeight: 600
    }
  }, r[2]), /*#__PURE__*/React.createElement("td", {
    style: td
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      padding: '3px 9px',
      borderRadius: 9999,
      background: sm[r[3]][0],
      color: sm[r[3]][1]
    }
  }, r[3])))))));
}
function StatTile({
  label = 'Total balance',
  value = '₦2.45M',
  delta = '+12.4%',
  up = true
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: xcard
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--mono-500)',
      fontWeight: 500
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 26px var(--font-mono)',
      letterSpacing: '-.03em'
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: up ? 'var(--success)' : 'var(--danger)'
    }
  }, delta)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 3,
      height: 28,
      marginTop: 12
    }
  }, [40, 55, 48, 70, 62, 85, 78].map((h, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      height: h + '%',
      background: i === 5 ? 'var(--primary)' : 'var(--primary-soft)'
    }
  }))));
}
function Timeline() {
  const items = [['Account created', 'Mar 2'], ['Identity verified', 'Mar 2'], ['First transfer sent', 'Mar 4'], ['Card activated', 'Mar 6']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingLeft: 4
    }
  }, items.map(([t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 12,
      height: 12,
      borderRadius: '50%',
      background: i === 0 ? 'var(--primary)' : '#fff',
      border: '2px solid var(--primary)'
    }
  }), i < items.length - 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 2,
      flex: 1,
      background: 'var(--border)',
      minHeight: 24
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      fontWeight: 600
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--mono-400)'
    }
  }, d)))));
}
function Rating() {
  const [r, setR] = uS3(4);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4
    }
  }, [1, 2, 3, 4, 5].map(n => /*#__PURE__*/React.createElement("button", {
    key: n,
    onClick: () => setR(n),
    style: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(SIcons.star, {
    size: 24,
    stroke: n <= r ? 'var(--warning)' : 'var(--mono-200)',
    fill: n <= r ? 'var(--warning)' : 'none',
    sw: n <= r ? 0 : 1.5
  }))));
}
function Chips() {
  const [chips, setChips] = uS3(['Lagos', 'Verified', 'Premium', 'NGN']);
  const tones = ['primary', 'success', 'warning', 'neutral'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, chips.map((c, i) => {
    const M = {
      primary: ['var(--primary-soft)', 'var(--primary)'],
      success: ['var(--success-soft)', 'var(--success)'],
      warning: ['var(--warning-soft)', 'var(--warning)'],
      neutral: ['var(--bg-secondary)', 'var(--mono-600)']
    }[tones[i % 4]];
    return /*#__PURE__*/React.createElement("span", {
      key: c,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        fontSize: 12.5,
        fontWeight: 600,
        padding: '5px 8px 5px 12px',
        borderRadius: 9999,
        background: M[0],
        color: M[1]
      }
    }, c, /*#__PURE__*/React.createElement("button", {
      onClick: () => setChips(chips.filter(x => x !== c)),
      style: {
        border: 'none',
        background: 'none',
        cursor: 'pointer',
        padding: 0,
        display: 'grid',
        placeItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(SIcons.x, {
      size: 12,
      stroke: M[1]
    })));
  }));
}

/* ════ OVERLAYS & STATUS ═══════════════════════════════════════════════════ */
function Tooltip() {
  const [show, setShow] = uS3(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-block',
      position: 'relative',
      paddingTop: 34
    }
  }, /*#__PURE__*/React.createElement("button", {
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    style: {
      padding: '8px 14px',
      border: '1px solid var(--border-input)',
      background: 'var(--surface)',
      cursor: 'pointer',
      fontSize: 13,
      fontWeight: 600,
      fontFamily: 'var(--font-body)'
    }
  }, "Hover me"), show && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginBottom: 6,
      background: 'var(--ink)',
      color: '#fff',
      fontSize: 12,
      fontWeight: 500,
      padding: '6px 10px',
      whiteSpace: 'nowrap'
    }
  }, "Settles instantly, 24/7"));
}
function EmptyState() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '24px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      margin: '0 auto 14px',
      display: 'grid',
      placeItems: 'center',
      background: 'var(--surface-soft)',
      border: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement(SIcons.doc, {
    size: 24,
    stroke: "var(--mono-300)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700
    }
  }, "No transactions yet"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--mono-500)',
      margin: '5px 0 16px',
      lineHeight: 1.5
    }
  }, "When you send or receive money, it'll show up here."), /*#__PURE__*/React.createElement(UBtn, {
    size: "sm"
  }, "Send your first transfer"));
}
function CircularProgress({
  v = 68
}) {
  const sz = 84,
    r = 34,
    C = 2 * Math.PI * r;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: sz,
      height: sz,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: sz,
    height: sz,
    viewBox: `0 0 ${sz} ${sz}`,
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: sz / 2,
    cy: sz / 2,
    r: r,
    fill: "none",
    stroke: "var(--mono-100)",
    strokeWidth: "7"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: sz / 2,
    cy: sz / 2,
    r: r,
    fill: "none",
    stroke: "var(--primary)",
    strokeWidth: "7",
    strokeDasharray: C,
    strokeDashoffset: C * (1 - v / 100),
    strokeLinecap: "round",
    transform: `rotate(-90 ${sz / 2} ${sz / 2})`
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: sz,
      height: sz,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: '700 16px var(--font-mono)',
      color: 'var(--fg)'
    }
  }, v, "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--mono-500)'
    }
  }, "Profile completion"));
}
function DismissBanner() {
  const [show, setShow] = uS3(true);
  if (!show) return /*#__PURE__*/React.createElement(UBtn, {
    size: "sm",
    variant: "ghost",
    onClick: () => setShow(true)
  }, "Show banner");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 14px',
      background: 'var(--warning-soft)',
      borderLeft: '3px solid var(--warning)'
    }
  }, /*#__PURE__*/React.createElement(SIcons.bell, {
    size: 18,
    stroke: "var(--warning)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontSize: 13,
      color: 'var(--warning)',
      fontWeight: 600
    }
  }, "Verify your identity to raise your transfer limit."), /*#__PURE__*/React.createElement("button", {
    onClick: () => setShow(false),
    style: {
      border: 'none',
      background: 'none',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(SIcons.x, {
    size: 16,
    stroke: "var(--warning)"
  })));
}
function CookieConsent() {
  const [show, setShow] = uS3(true);
  if (!show) return /*#__PURE__*/React.createElement(UBtn, {
    size: "sm",
    variant: "ghost",
    onClick: () => setShow(true)
  }, "Reset cookie banner");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: 16,
      background: 'var(--ink)',
      color: '#fff',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 180,
      fontSize: 13,
      lineHeight: 1.5,
      opacity: .85
    }
  }, "We use cookies to improve your experience. See our ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--secondary)'
    }
  }, "Cookie Policy"), "."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setShow(false),
    style: {
      padding: '8px 14px',
      border: '1px solid rgba(255,255,255,.3)',
      background: 'transparent',
      color: '#fff',
      cursor: 'pointer',
      fontSize: 12.5,
      fontWeight: 600,
      fontFamily: 'var(--font-body)'
    }
  }, "Decline"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setShow(false),
    style: {
      padding: '8px 14px',
      border: 'none',
      background: 'var(--primary)',
      color: '#fff',
      cursor: 'pointer',
      fontSize: 12.5,
      fontWeight: 600,
      fontFamily: 'var(--font-body)'
    }
  }, "Accept all")));
}
Object.assign(window, {
  Accordion,
  Pagination,
  Stepper,
  VerticalTabs,
  Toolbar,
  Textarea,
  OTP,
  PhoneInput,
  Quantity,
  FileUpload,
  DateField,
  TagInput,
  DataTable,
  StatTile,
  Timeline,
  Rating,
  Chips,
  Tooltip,
  EmptyState,
  CircularProgress,
  DismissBanner,
  CookieConsent
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/LibraryExtras.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/LibraryMarketing.jsx
try { (() => {
/* Fyscal Website UI Kit — Marketing section extras. Depends on Library.jsx +
   LibraryExtras.jsx (Accordion) + Icons.jsx. Exports to window. */
const {
  useState: uS4
} = React;
const mcard = {
  background: 'var(--surface)',
  border: '1px solid var(--border)',
  padding: 18
};
function PricingTable() {
  const tiers = [{
    name: 'Personal',
    price: '₦0',
    per: '/forever',
    feats: ['Free transfers', 'Virtual card', 'Savings goals'],
    hi: false
  }, {
    name: 'Premium',
    price: '₦2,500',
    per: '/month',
    feats: ['Everything in Personal', 'Higher limits', 'Lounge access', '2 physical cards'],
    hi: true
  }, {
    name: 'Business',
    price: 'Custom',
    per: '',
    feats: ['Payments API', 'Payroll', 'Dedicated manager'],
    hi: false
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(190px,1fr))',
      gap: 14
    }
  }, tiers.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.name,
    style: {
      border: t.hi ? '1.5px solid var(--primary)' : '1px solid var(--border)',
      background: t.hi ? 'var(--ink)' : '#fff',
      color: t.hi ? '#fff' : 'var(--fg)',
      padding: 22,
      position: 'relative'
    }
  }, t.hi && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      background: 'var(--primary)',
      color: '#fff',
      fontSize: 10,
      fontWeight: 700,
      padding: '4px 10px',
      textTransform: 'uppercase',
      letterSpacing: '.06em'
    }
  }, "Popular"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '.06em',
      color: t.hi ? 'rgba(255,255,255,.6)' : 'var(--mono-400)'
    }
  }, t.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 4,
      margin: '12px 0 14px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 30px var(--font-mono)',
      letterSpacing: '-.03em'
    }
  }, t.price), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: t.hi ? 'rgba(255,255,255,.5)' : 'var(--mono-400)'
    }
  }, t.per)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 9,
      marginBottom: 18
    }
  }, t.feats.map(f => /*#__PURE__*/React.createElement("div", {
    key: f,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement(SIcons.check, {
    size: 15,
    stroke: t.hi ? 'var(--secondary)' : 'var(--primary)',
    sw: 2.5
  }), f))), /*#__PURE__*/React.createElement(UBtn, {
    full: true,
    variant: t.hi ? 'light' : 'ghost'
  }, "Choose ", t.name))));
}
function TestimonialBlock() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-soft)',
      padding: '32px 24px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 3,
      justifyContent: 'center',
      marginBottom: 16
    }
  }, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement(SIcons.star, {
    key: i,
    size: 18,
    fill: "var(--warning)",
    sw: 0
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'clamp(18px,3vw,24px)',
      fontWeight: 500,
      lineHeight: 1.4,
      letterSpacing: '-.02em',
      maxWidth: 640,
      margin: '0 auto'
    }
  }, "\u201CWe moved payroll to Fyscal and cut payout time from two days to ten minutes.\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 12,
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: "NO",
    size: 44
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700
    }
  }, "Ngozi Okonkwo"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--mono-500)'
    }
  }, "Head of Finance, Carbon"))));
}
function StatsBand() {
  const s = [['2.4M+', 'Accounts'], ['₦480B', 'Processed'], ['99.99%', 'Uptime'], ['18', 'Markets']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ink)',
      color: '#fff',
      padding: '32px 20px',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(120px,1fr))',
      gap: 20
    }
  }, s.map(([v, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 32px var(--font-mono)',
      letterSpacing: '-.03em'
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'rgba(255,255,255,.55)',
      marginTop: 4
    }
  }, l))));
}
function FAQSection() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 22,
      fontWeight: 700,
      letterSpacing: '-.02em',
      marginBottom: 14
    }
  }, "Frequently asked questions"), /*#__PURE__*/React.createElement(Accordion, null));
}
function CTABanner() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#352eff',
      color: '#fff',
      padding: '40px 28px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'clamp(24px,4vw,34px)',
      fontWeight: 600,
      letterSpacing: '-.03em',
      lineHeight: 1.1
    }
  }, "Ready to move your money forward?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15.5,
      opacity: .8,
      marginTop: 12,
      maxWidth: 420,
      marginInline: 'auto'
    }
  }, "Open a free account in two minutes \u2014 no paperwork."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      justifyContent: 'center',
      marginTop: 22,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(UBtn, {
    variant: "light",
    size: "lg"
  }, "Open free account"), /*#__PURE__*/React.createElement(UBtn, {
    variant: "outlineLight",
    size: "lg"
  }, "Book a demo")));
}
function Newsletter() {
  const [f, setF] = uS4(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...mcard,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      maxWidth: 460
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      letterSpacing: '-.01em'
    }
  }, "Get the Fyscal brief"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--mono-500)',
      marginTop: 3
    }
  }, "Product updates and money tips, monthly. No spam.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("input", {
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    placeholder: "you@email.com",
    style: {
      flex: 1,
      height: 46,
      padding: '0 14px',
      border: '1px solid ' + (f ? 'var(--primary)' : 'var(--border-input)'),
      boxShadow: f ? 'var(--shadow-focus)' : 'none',
      outline: 'none',
      fontSize: 14,
      fontFamily: 'var(--font-body)',
      color: 'var(--fg)'
    }
  }), /*#__PURE__*/React.createElement(UBtn, null, "Subscribe")));
}
function LogoCloud() {
  const logos = ['Paystack', 'Flutterwave', 'Interswitch', 'Kuda', 'Carbon', 'PiggyVest'];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      fontSize: 12,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '.1em',
      color: 'var(--mono-300)',
      marginBottom: 20
    }
  }, "Trusted by teams across the continent"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 20
    }
  }, logos.map(l => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: {
      fontSize: 'clamp(15px,2.4vw,20px)',
      fontWeight: 800,
      color: 'var(--mono-200)',
      letterSpacing: '-.02em'
    }
  }, l))));
}
Object.assign(window, {
  PricingTable,
  TestimonialBlock,
  StatsBand,
  FAQSection,
  CTABanner,
  Newsletter,
  LogoCloud
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/LibraryMarketing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/LibrarySections.jsx
try { (() => {
/* Fyscal Website UI Kit — Containers, Data-interaction, Mobile controls + full
   page Sections. Depends on Library.jsx (UBtn, Badge, etc) + Icons.jsx. */
const {
  useState: uS2
} = React;

/* ════ CONTAINERS ══════════════════════════════════════════════════════════ */
function Panel({
  title = 'Account summary',
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface)',
      border: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '14px 18px',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 700
    }
  }, title), /*#__PURE__*/React.createElement(SIcons.dots, {
    size: 18,
    stroke: "var(--mono-400)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 18
    }
  }, children || /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: 'var(--mono-500)',
      lineHeight: 1.6
    }
  }, "Panels group related content under a titled header with an optional action menu.")));
}
function Modal({
  onClose
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(10,16,40,.45)',
      display: 'grid',
      placeItems: 'center',
      zIndex: 30,
      padding: 20
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 380,
      background: 'var(--surface)',
      boxShadow: 'var(--shadow-lg)'
    },
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 20px',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 700
    }
  }, "Confirm transfer"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(SIcons.x, {
    size: 18,
    stroke: "var(--mono-500)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      fontSize: 14,
      color: 'var(--mono-600)',
      lineHeight: 1.6
    }
  }, "You're sending ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--fg)'
    }
  }, "\u20A650,000"), " to James K. This can't be undone."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      padding: '0 20px 20px'
    }
  }, /*#__PURE__*/React.createElement(UBtn, {
    variant: "ghost",
    full: true,
    onClick: onClose
  }, "Cancel"), /*#__PURE__*/React.createElement(UBtn, {
    full: true,
    onClick: onClose
  }, "Send \u20A650,000"))));
}
function Drawer({
  onClose
}) {
  const items = ['Dashboard', 'Payments', 'Cards', 'Savings', 'Settings'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(10,16,40,.45)',
      zIndex: 30,
      display: 'flex'
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 250,
      height: '100%',
      background: 'var(--surface)',
      padding: '20px 0'
    },
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 20px 16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(FyscalLogo, {
    height: 18
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(SIcons.x, {
    size: 18,
    stroke: "var(--mono-500)"
  }))), items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: it,
    style: {
      padding: '13px 20px',
      fontSize: 15,
      fontWeight: i === 0 ? 600 : 500,
      color: i === 0 ? 'var(--primary)' : 'var(--fg)',
      background: i === 0 ? 'var(--primary-soft)' : 'transparent'
    }
  }, it))));
}
function GridDemo() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(90px,1fr))',
      gap: 8
    }
  }, Array.from({
    length: 8
  }).map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      aspectRatio: '1',
      background: i % 2 ? 'var(--primary-soft)' : 'var(--surface-soft)',
      border: '1px solid var(--border)',
      display: 'grid',
      placeItems: 'center',
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--mono-400)',
      fontFamily: 'var(--font-mono)'
    }
  }, i + 1)));
}

/* ════ DATA INTERACTION ════════════════════════════════════════════════════ */
function FilterSortBar() {
  const chips = ['All', 'Credit', 'Debit', 'Pending'];
  const [a, setA] = uS2(0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, chips.map((c, i) => /*#__PURE__*/React.createElement("button", {
    key: c,
    onClick: () => setA(i),
    style: {
      padding: '6px 13px',
      fontSize: 12.5,
      fontWeight: 600,
      fontFamily: 'var(--font-body)',
      borderRadius: 9999,
      cursor: 'pointer',
      border: `1px solid ${a === i ? 'var(--primary)' : 'var(--border-input)'}`,
      background: a === i ? 'var(--primary)' : '#fff',
      color: a === i ? '#fff' : 'var(--mono-600)'
    }
  }, c))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(UBtn, {
    variant: "ghost",
    size: "sm"
  }, /*#__PURE__*/React.createElement(SIcons.filter, {
    size: 15
  }), " Filter"), /*#__PURE__*/React.createElement(UBtn, {
    variant: "ghost",
    size: "sm"
  }, /*#__PURE__*/React.createElement(SIcons.sort, {
    size: 15
  }), " Sort"), /*#__PURE__*/React.createElement(UBtn, {
    variant: "ghost",
    size: "sm"
  }, /*#__PURE__*/React.createElement(SIcons.refresh, {
    size: 15
  }))));
}
function Reorder() {
  const [items, setItems] = uS2(['Checking account', 'Savings — Japa Fund', 'Dollar card', 'Bills wallet']);
  const move = (i, d) => {
    const n = [...items];
    const j = i + d;
    if (j < 0 || j >= n.length) return;
    [n[i], n[j]] = [n[j], n[i]];
    setItems(n);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--border)',
      background: 'var(--surface)'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: it,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '11px 14px',
      borderTop: i ? '1px solid var(--surface-soft)' : 'none'
    }
  }, /*#__PURE__*/React.createElement(SIcons.drag, {
    size: 18,
    stroke: "var(--mono-300)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 13.5,
      fontWeight: 500
    }
  }, it), /*#__PURE__*/React.createElement("button", {
    onClick: () => move(i, -1),
    style: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      padding: 2
    }
  }, /*#__PURE__*/React.createElement(SIcons.chevD, {
    size: 16,
    stroke: "var(--mono-400)",
    style: {
      transform: 'rotate(180deg)'
    }
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => move(i, 1),
    style: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      padding: 2
    }
  }, /*#__PURE__*/React.createElement(SIcons.chevD, {
    size: 16,
    stroke: "var(--mono-400)"
  })))));
}
function InfiniteScroll() {
  const [n, setN] = uS2(4);
  const [loading, setLoading] = uS2(false);
  const more = () => {
    setLoading(true);
    setTimeout(() => {
      setN(x => x + 3);
      setLoading(false);
    }, 700);
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--border)',
      background: 'var(--surface)',
      maxHeight: 220,
      overflowY: 'auto'
    }
  }, Array.from({
    length: n
  }).map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '11px 14px',
      borderTop: i ? '1px solid var(--surface-soft)' : 'none'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: 'U' + (i + 1),
    size: 32,
    tint: i % 2 ? '#0053ff' : '#352eff'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontSize: 13.5,
      fontWeight: 500
    }
  }, "Transaction #", 1000 + i), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 12.5px var(--font-mono)',
      color: 'var(--mono-500)'
    }
  }, "\u20A6", ((i + 1) * 12).toLocaleString(), "k"))), loading && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      placeItems: 'center',
      padding: 14
    }
  }, /*#__PURE__*/React.createElement(Spinner, {
    size: 22
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(UBtn, {
    variant: "ghost",
    size: "sm",
    full: true,
    onClick: more
  }, "Load more")));
}

/* ════ PAGE SECTIONS ═══════════════════════════════════════════════════════ */
function AnnouncementBar() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ink)',
      color: '#fff',
      padding: '10px 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      fontSize: 13,
      flexWrap: 'wrap',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    kind: "primary"
  }, "New"), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .9
    }
  }, "Instant cross-border transfers are live in 18 markets."), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: '#ff8aff',
      fontWeight: 700,
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4
    }
  }, "Learn more ", /*#__PURE__*/React.createElement(SIcons.arrowR, {
    size: 13
  })));
}
function IntroSection() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '56px 28px',
      textAlign: 'center',
      background: '#352eff',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      padding: '4px 11px',
      borderRadius: 9999,
      background: 'rgba(255,255,255,.18)',
      color: '#fff',
      letterSpacing: '.04em'
    }
  }, "Above the fold"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(32px,6vw,52px)',
      fontWeight: 600,
      letterSpacing: '-.035em',
      lineHeight: 1.05,
      margin: '18px 0 0',
      color: '#fff'
    }
  }, "Banking that moves at the speed of you"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'clamp(15px,2.5vw,18px)',
      color: 'rgba(255,255,255,.82)',
      lineHeight: 1.6,
      margin: '16px auto 0',
      maxWidth: 480
    }
  }, "Send, spend and grow your money in one account built for how Africa moves."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      justifyContent: 'center',
      marginTop: 28,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(UBtn, {
    size: "lg",
    variant: "light"
  }, "Open free account ", /*#__PURE__*/React.createElement(SIcons.arrowR, {
    size: 18
  })), /*#__PURE__*/React.createElement(UBtn, {
    size: "lg",
    variant: "outlineLight"
  }, "Watch demo"))));
}
function FeatureGridSection() {
  const f = [[SIcons.bolt, 'Instant transfers'], [SIcons.shield, 'Bank-grade security'], [SIcons.card, 'Cards everywhere'], [SIcons.chart, 'Smart insights'], [SIcons.globe, 'Multi-currency'], [SIcons.api, 'Developer API']];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '24px 0'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 22,
      fontWeight: 700,
      letterSpacing: '-.02em',
      marginBottom: 16
    }
  }, "Everything in one place"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))',
      gap: 14
    }
  }, f.map(([I, t], i) => /*#__PURE__*/React.createElement(FeatureCard, {
    key: i,
    icon: I,
    title: t,
    body: "A short supporting line that explains the benefit in plain language."
  }))));
}
function SearchFilterSection() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '24px 0'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 22,
      fontWeight: 700,
      letterSpacing: '-.02em',
      marginBottom: 14
    }
  }, "Find anything"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(SearchBar, null), /*#__PURE__*/React.createElement(FilterSortBar, null), /*#__PURE__*/React.createElement("div", {
    style: {
      ...card,
      padding: '6px 18px'
    }
  }, /*#__PURE__*/React.createElement(ListItem, {
    title: "Salary \u2014 GTBank",
    meta: "Today",
    amount: "+\u20A6350,000",
    credit: true
  }), /*#__PURE__*/React.createElement(ListItem, {
    title: "Airtime \u2014 MTN",
    meta: "Today",
    amount: "\u2212\u20A62,000"
  }), /*#__PURE__*/React.createElement(ListItem, {
    title: "James K.",
    meta: "Yesterday",
    amount: "\u2212\u20A620,000"
  }))));
}
function ContentSection() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '24px 0',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
      gap: 28,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    kind: "neutral"
  }, "Story"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 26,
      fontWeight: 700,
      letterSpacing: '-.02em',
      margin: '12px 0'
    }
  }, "Your whole financial life, in your pocket"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: 'var(--mono-500)',
      lineHeight: 1.65,
      marginBottom: 16
    }
  }, "Long-form content blocks carry articles, product detail, and landing-page storytelling. Body copy stays at a comfortable measure for reading on any screen."), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--primary)',
      fontWeight: 600,
      fontSize: 14,
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, "Read the story ", /*#__PURE__*/React.createElement(SIcons.arrowR, {
    size: 16
  }))), /*#__PURE__*/React.createElement(MediaBlock, null));
}
function FormSection() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '24px 0',
      maxWidth: 460
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 22,
      fontWeight: 700,
      letterSpacing: '-.02em',
      marginBottom: 4
    }
  }, "Create your account"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--mono-500)',
      marginBottom: 18
    }
  }, "Two minutes, no paperwork."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(TextInput, {
    label: "Full name",
    placeholder: "Jane Doe"
  }), /*#__PURE__*/React.createElement(TextInput, {
    label: "Email",
    placeholder: "jane@email.com"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Country"
  }), /*#__PURE__*/React.createElement(Checks, {
    label: "Preferences",
    options: ['Email receipts', 'Product updates']
  }), /*#__PURE__*/React.createElement(UBtn, {
    full: true,
    size: "lg"
  }, "Open account ", /*#__PURE__*/React.createElement(SIcons.arrowR, {
    size: 18
  }))));
}
function RelatedLinks() {
  const links = [['Pricing', 'Compare plans and fees'], ['Developer API', 'Build with Fyscal'], ['Security', 'How we protect you'], ['Help center', 'Guides and FAQs']];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '24px 0'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      letterSpacing: '-.01em',
      marginBottom: 14
    }
  }, "Keep exploring"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))',
      gap: 12
    }
  }, links.map(([t, d]) => /*#__PURE__*/React.createElement("a", {
    key: t,
    href: "#",
    style: {
      ...card,
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 14,
      fontWeight: 700,
      color: 'var(--fg)'
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: 'var(--mono-500)'
    }
  }, d)), /*#__PURE__*/React.createElement(SIcons.chevR, {
    size: 18,
    stroke: "var(--mono-300)"
  })))));
}

/* ════ UTILITY STRIP (system state + quick links) ═════════════════════════ */
function UtilityStrip() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '8px 16px',
      background: 'var(--surface-soft)',
      borderBottom: '1px solid var(--border)',
      fontSize: 12.5,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      color: 'var(--success)',
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: 'var(--success)'
    }
  }), "All systems operational"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--mono-400)'
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--mono-600)',
      textDecoration: 'none',
      fontWeight: 500
    }
  }, "Status"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--mono-600)',
      textDecoration: 'none',
      fontWeight: 500
    }
  }, "Help"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--mono-600)',
      textDecoration: 'none',
      fontWeight: 500
    }
  }, "NGN \u20A6"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--primary)',
      textDecoration: 'none',
      fontWeight: 600
    }
  }, "Sign in")));
}

/* ════ CONTENT-DISPLAY: card + plain list ═════════════════════════════════ */
function ContentCard() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...card,
      padding: 0,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '16/10',
      background: 'var(--gradient-brand)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 10,
      left: 10
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    kind: "neutral"
  }, "Guide"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      letterSpacing: '-.01em'
    }
  }, "Set up your first transfer"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--mono-500)',
      lineHeight: 1.55,
      margin: '6px 0 12px'
    }
  }, "A 3-minute walkthrough of sending money to any bank."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--mono-400)'
    }
  }, "Mar 12 \xB7 3 min read"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--primary)',
      fontWeight: 600,
      fontSize: 13,
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4
    }
  }, "Read ", /*#__PURE__*/React.createElement(SIcons.arrowR, {
    size: 14
  })))));
}
function PlainList() {
  const rows = [['Accounts', '3 linked'], ['Cards', '2 active'], ['Beneficiaries', '14 saved'], ['Standing orders', '5 scheduled']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--border)',
      background: 'var(--surface)'
    }
  }, rows.map(([t, m], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 14px',
      borderTop: i ? '1px solid var(--surface-soft)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 13.5,
      fontWeight: 500
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: 'var(--mono-400)'
    }
  }, m), /*#__PURE__*/React.createElement(SIcons.chevR, {
    size: 16,
    stroke: "var(--mono-300)"
  }))));
}

/* ════ FORM TYPES: signup · lead capture · checkout · settings · onboarding ═ */
const FormCard = ({
  title,
  sub,
  children,
  cta
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    ...card,
    display: 'flex',
    flexDirection: 'column',
    gap: 14
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 15,
    fontWeight: 700,
    letterSpacing: '-.01em'
  }
}, title), sub && /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 12.5,
    color: 'var(--mono-500)',
    marginTop: 3
  }
}, sub)), children, cta && /*#__PURE__*/React.createElement(UBtn, {
  full: true
}, cta));
function SignupForm() {
  return /*#__PURE__*/React.createElement(FormCard, {
    title: "Create your account",
    sub: "Two minutes, no paperwork.",
    cta: "Open account"
  }, /*#__PURE__*/React.createElement(TextInput, {
    label: "Full name",
    placeholder: "Jane Doe"
  }), /*#__PURE__*/React.createElement(TextInput, {
    label: "Email",
    placeholder: "jane@email.com"
  }), /*#__PURE__*/React.createElement(TextInput, {
    label: "Password",
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
  }), /*#__PURE__*/React.createElement(Checks, {
    label: "",
    options: ['I agree to the Terms & Privacy Policy']
  }));
}
function LeadCaptureForm() {
  return /*#__PURE__*/React.createElement(FormCard, {
    title: "Talk to sales",
    sub: "We'll reach out within one business day.",
    cta: "Request a demo"
  }, /*#__PURE__*/React.createElement(TextInput, {
    label: "Work email",
    placeholder: "you@company.com"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Company size",
    options: ['1–10', '11–50', '51–200', '200+']
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Use case",
    options: ['Payments', 'Payroll', 'Treasury', 'Cards']
  }));
}
function CheckoutForm() {
  return /*#__PURE__*/React.createElement(FormCard, {
    title: "Checkout",
    sub: "Premium plan \xB7 \u20A62,500 / month",
    cta: "Pay \u20A62,500"
  }, /*#__PURE__*/React.createElement(TextInput, {
    label: "Card number",
    placeholder: "4242 4242 4242 4242"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(TextInput, {
    label: "Expiry",
    placeholder: "MM / YY"
  }), /*#__PURE__*/React.createElement(TextInput, {
    label: "CVC",
    placeholder: "123"
  })), /*#__PURE__*/React.createElement(Toggle, {
    label: "Save card for future payments",
    def: true
  }));
}
function SettingsForm() {
  return /*#__PURE__*/React.createElement(FormCard, {
    title: "Account settings",
    sub: "Manage profile and preferences.",
    cta: "Save changes"
  }, /*#__PURE__*/React.createElement(TextInput, {
    label: "Display name",
    placeholder: "Alex Kim"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Language",
    options: ['English', 'Français', 'Yorùbá', 'Hausa']
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Toggle, {
    label: "Two-factor authentication",
    def: true
  }), /*#__PURE__*/React.createElement(Toggle, {
    label: "Email receipts",
    def: false
  })));
}
function OnboardingForm() {
  return /*#__PURE__*/React.createElement(FormCard, {
    title: "Welcome \u2014 step 2 of 4",
    cta: "Continue"
  }, /*#__PURE__*/React.createElement(Progress, {
    v: 50
  }), /*#__PURE__*/React.createElement(Radios, {
    label: "What brings you to Fyscal?",
    options: ['Personal banking', 'Run a business', 'Build with the API']
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Country of residence"
  }));
}
Object.assign(window, {
  Panel,
  Modal,
  Drawer,
  GridDemo,
  FilterSortBar,
  Reorder,
  InfiniteScroll,
  AnnouncementBar,
  IntroSection,
  FeatureGridSection,
  SearchFilterSection,
  ContentSection,
  FormSection,
  RelatedLinks,
  UtilityStrip,
  ContentCard,
  PlainList,
  FormCard,
  SignupForm,
  LeadCaptureForm,
  CheckoutForm,
  SettingsForm,
  OnboardingForm
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/LibrarySections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/LibrarySectionsB.jsx
try { (() => {
/* Fyscal Website UI Kit — additional section LAYOUTS. Depends on Library.jsx
   (UBtn, Badge, Avatar, card) + Icons.jsx (SIcons) + Nav.jsx (FyscalLogo). */
const {
  useState: uS5
} = React;
const swrap = {
  background: 'var(--surface)',
  border: '1px solid var(--border)'
};

/* Hero — split (copy left, visual right) */
function HeroSplit() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...swrap,
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 28,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    kind: "primary"
  }, "New"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'clamp(24px,3.5vw,34px)',
      fontWeight: 600,
      letterSpacing: '-.03em',
      lineHeight: 1.08
    }
  }, "Move money at the speed of you"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: 'var(--mono-500)',
      lineHeight: 1.6
    }
  }, "Send, spend and grow in one account built for how Africa moves."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(UBtn, null, "Open account ", /*#__PURE__*/React.createElement(SIcons.arrowR, {
    size: 16
  })), /*#__PURE__*/React.createElement(UBtn, {
    variant: "ghost"
  }, "Talk to sales"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--gradient-brand)',
      minHeight: 220,
      display: 'grid',
      placeItems: 'center',
      padding: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(255,255,255,.14)',
      border: '1px solid rgba(255,255,255,.25)',
      padding: 22,
      width: '100%',
      maxWidth: 240,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      opacity: .7,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '.08em'
    }
  }, "Balance"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 28px var(--font-mono)',
      margin: '6px 0 2px'
    }
  }, "\u20A62,450,000"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      opacity: .65
    }
  }, "+12.4% this month"))));
}

/* How it works — 3 numbered steps */
function HowItWorks() {
  const steps = [['Create account', 'Sign up in two minutes with just your phone.'], ['Add money', 'Fund instantly from any bank or card.'], ['Start sending', 'Pay anyone, anywhere, in seconds.']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      ...swrap
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      letterSpacing: '-.02em',
      marginBottom: 18
    }
  }, "How it works"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))',
      gap: 18
    }
  }, steps.map(([t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: t
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 38,
      background: 'var(--primary)',
      color: '#fff',
      display: 'grid',
      placeItems: 'center',
      font: '700 16px var(--font-mono)',
      marginBottom: 12
    }
  }, i + 1), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      marginBottom: 5
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: 'var(--mono-500)',
      lineHeight: 1.55
    }
  }, d)))));
}

/* Bento grid — mixed-size feature tiles */
function BentoGrid() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gridAutoRows: '92px',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...swrap,
      gridColumn: 'span 2',
      gridRow: 'span 2',
      background: 'var(--gradient-brand)',
      color: '#fff',
      padding: 20,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(SIcons.bolt, {
    size: 26,
    stroke: "#fff"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 700,
      marginTop: 10
    }
  }, "Instant transfers"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      opacity: .8
    }
  }, "24/7, any bank")), /*#__PURE__*/React.createElement("div", {
    style: {
      ...swrap,
      gridColumn: 'span 2',
      padding: 16,
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 38,
      background: 'var(--primary-soft)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(SIcons.shield, {
    size: 20,
    stroke: "var(--primary)"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700
    }
  }, "Bank-grade security"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--mono-500)'
    }
  }, "CBN-licensed"))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...swrap,
      padding: 16
    }
  }, /*#__PURE__*/React.createElement(SIcons.card, {
    size: 20,
    stroke: "var(--primary)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      marginTop: 8
    }
  }, "Cards")), /*#__PURE__*/React.createElement("div", {
    style: {
      ...swrap,
      padding: 16
    }
  }, /*#__PURE__*/React.createElement(SIcons.chart, {
    size: 20,
    stroke: "var(--primary)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      marginTop: 8
    }
  }, "Insights")), /*#__PURE__*/React.createElement("div", {
    style: {
      ...swrap,
      gridColumn: 'span 2',
      padding: 16,
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 38,
      background: 'var(--success-soft)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(SIcons.globe, {
    size: 20,
    stroke: "var(--success)"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700
    }
  }, "Multi-currency"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--mono-500)'
    }
  }, "NGN \xB7 USD \xB7 GBP \xB7 EUR"))));
}

/* Alternating feature rows (zig-zag) */
function FeatureZigZag() {
  const rows = [['Spend smarter', 'Automatic categories and weekly summaries keep you in control.', false], ['Save automatically', 'Lock funds into goals that earn while you sleep.', true]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, rows.map(([t, d, flip], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      ...swrap,
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 8,
      order: flip ? 2 : 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      letterSpacing: '-.01em'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--mono-500)',
      lineHeight: 1.6
    }
  }, d), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--primary)',
      fontWeight: 600,
      fontSize: 13.5,
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5
    }
  }, "Learn more ", /*#__PURE__*/React.createElement(SIcons.arrowR, {
    size: 15
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: i ? 'var(--success-soft)' : 'var(--primary-soft)',
      minHeight: 150,
      order: flip ? 1 : 2,
      display: 'grid',
      placeItems: 'center'
    }
  }, i ? /*#__PURE__*/React.createElement(SIcons.chart, {
    size: 40,
    stroke: "var(--success)"
  }) : /*#__PURE__*/React.createElement(SIcons.swap, {
    size: 40,
    stroke: "var(--primary)"
  })))));
}

/* Comparison / feature table */
function ComparisonTable() {
  const rows = [['Free transfers', true, true], ['Dollar card', true, true], ['Higher limits', false, true], ['Lounge access', false, true], ['Priority support', false, true]];
  const cell = on => /*#__PURE__*/React.createElement("td", {
    style: {
      textAlign: 'center',
      padding: '11px 14px',
      borderTop: '1px solid var(--surface-soft)'
    }
  }, on ? /*#__PURE__*/React.createElement(SIcons.check, {
    size: 17,
    stroke: "var(--success)",
    sw: 2.5
  }) : /*#__PURE__*/React.createElement(SIcons.x, {
    size: 15,
    stroke: "var(--mono-200)"
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...swrap,
      overflowX: 'auto'
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: 'var(--surface-soft)'
    }
  }, /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: 'left',
      padding: '12px 14px',
      fontSize: 11,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '.06em',
      color: 'var(--mono-400)'
    }
  }, "Feature"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '12px 14px',
      fontSize: 12.5,
      fontWeight: 700
    }
  }, "Personal"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '12px 14px',
      fontSize: 12.5,
      fontWeight: 700,
      color: 'var(--primary)'
    }
  }, "Premium"))), /*#__PURE__*/React.createElement("tbody", null, rows.map(r => /*#__PURE__*/React.createElement("tr", {
    key: r[0]
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '11px 14px',
      fontSize: 13.5,
      fontWeight: 500,
      borderTop: '1px solid var(--surface-soft)'
    }
  }, r[0]), cell(r[1]), cell(r[2]))))));
}

/* Team grid */
function TeamGrid() {
  const team = [['Ada N.', 'CEO', '#352eff'], ['Tunde A.', 'CTO', '#0053ff'], ['Zainab M.', 'Design', '#7b2ff7'], ['Kwame O.', 'Eng', '#1f8a5b']];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      letterSpacing: '-.02em',
      marginBottom: 16
    }
  }, "Meet the team"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(140px,1fr))',
      gap: 14
    }
  }, team.map(([n, role, c]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      ...swrap,
      padding: 18,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '0 auto 10px',
      width: 'fit-content'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: n.split(' ').map(x => x[0]).join(''),
    size: 54,
    tint: c
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--mono-500)'
    }
  }, role)))));
}

/* Banner strip (promo) */
function BannerStrip() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...swrap,
      background: 'var(--ink)',
      color: '#fff',
      padding: '20px 24px',
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 200
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 700,
      letterSpacing: '-.01em'
    }
  }, "Refer a friend, get \u20A65,000"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      opacity: .7,
      marginTop: 3
    }
  }, "For every friend who opens and funds an account.")), /*#__PURE__*/React.createElement(UBtn, {
    variant: "light"
  }, "Invite friends"));
}

/* Full footer */
function FooterFull() {
  const cols = [['Product', ['Personal', 'Business', 'Cards', 'API']], ['Company', ['About', 'Careers', 'Press', 'Contact']], ['Resources', ['Docs', 'Status', 'Blog', 'Help']], ['Legal', ['Privacy', 'Terms', 'Security', 'Cookies']]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ink)',
      color: '#fff',
      padding: '36px 28px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr repeat(4,1fr)',
      gap: 28,
      paddingBottom: 28,
      borderBottom: '1px solid rgba(255,255,255,.12)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FyscalLogo, {
    height: 20,
    variant: "white"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12.5,
      color: 'rgba(255,255,255,.55)',
      lineHeight: 1.6,
      marginTop: 14,
      maxWidth: 220
    }
  }, "The modern money platform for Africa.")), cols.map(([h, items]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '.08em',
      color: 'rgba(255,255,255,.45)',
      marginBottom: 12
    }
  }, h), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 9
    }
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it,
    href: "#",
    style: {
      fontSize: 13,
      color: 'rgba(255,255,255,.75)',
      textDecoration: 'none'
    }
  }, it)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 18,
      fontSize: 12,
      color: 'rgba(255,255,255,.45)'
    }
  }, "\xA9 2026 Fyscal Technologies. Licensed by the CBN."));
}
Object.assign(window, {
  HeroSplit,
  HowItWorks,
  BentoGrid,
  FeatureZigZag,
  ComparisonTable,
  TeamGrid,
  BannerStrip,
  FooterFull
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/LibrarySectionsB.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/LibrarySectionsC.jsx
try { (() => {
/* Fyscal Website UI Kit — Section layouts C (reference-matched).
   Testimonials, newsletter band, AI-model feature grid, bento feature grid.
   Theme-aware (var(--surface)/--fg/--border). Depends on Library.jsx + Icons.jsx. */
const {
  useState: uS6
} = React;
const cwrap = {
  background: 'var(--surface)',
  border: '1px solid var(--border)'
};
const Eye = ({
  icon,
  children
}) => /*#__PURE__*/React.createElement("span", {
  style: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 7,
    padding: '7px 15px',
    borderRadius: 9999,
    background: 'var(--surface)',
    border: '1px solid var(--border)',
    boxShadow: 'var(--shadow-sm)',
    fontSize: 13,
    fontWeight: 600,
    color: 'var(--fg)'
  }
}, icon, children);
const Stars = ({
  n = 4,
  size = 15
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    gap: 3
  }
}, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement(SIcons.star, {
  key: i,
  size: size,
  stroke: i < n ? 'var(--primary)' : 'var(--mono-200)',
  fill: i < n ? 'var(--primary)' : 'none',
  sw: i < n ? 0 : 1.5
})));

/* 1 — Testimonials: featured quote + image, then 3 rating cards */
function TestimonialsSection() {
  const cards = [['We needed intelligent automation — and they nailed it. Every step was collaborative, transparent, and focused on delivering the best outcome for us.', 'Brendan', 'Head of Operations', '#352eff'], ['Their team helped us identify key opportunities for AI, then built tools that boosted both our speed and accuracy. We\u2019re already seeing results.', 'Lanai', 'Head of Marketing', '#0053ff'], ['From ideation to final delivery, they were incredibly proactive and sharp. Our new AI-powered assistant reduced manual work and improved output.', 'Caren', 'Head of Product', '#7b2ff7']];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '8px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 640,
      margin: '0 auto 32px'
    }
  }, /*#__PURE__*/React.createElement(Eye, {
    icon: /*#__PURE__*/React.createElement(SIcons.star, {
      size: 13,
      fill: "var(--primary)",
      stroke: "var(--primary)",
      sw: 0
    })
  }, "Testimonials"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'clamp(30px,5vw,48px)',
      fontWeight: 600,
      letterSpacing: '-.03em',
      lineHeight: 1.05,
      margin: '16px 0 10px',
      color: 'var(--fg)'
    }
  }, "What Our Clients Say"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15.5,
      color: 'var(--mono-500)',
      lineHeight: 1.6
    }
  }, "Join forward-thinking companies that trust Fyscal to transform the way they move money \u2014 from instant payouts to automated reconciliation.")), /*#__PURE__*/React.createElement("div", {
    style: {
      ...cwrap,
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
      gap: 0,
      padding: 16,
      marginBottom: 22,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 22px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'clamp(20px,2.8vw,26px)',
      fontWeight: 700,
      letterSpacing: '-.02em',
      lineHeight: 1.25,
      color: 'var(--fg)'
    }
  }, "\u201CWe reduced payout time by 90% and doubled customer satisfaction.\u201D"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--mono-500)',
      lineHeight: 1.6,
      marginTop: 16,
      maxWidth: 380
    }
  }, "Transfers, bill payments, payroll \u2014 Fyscal handled it all from a single dashboard. Our customers get paid faster, and our team stays focused."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: "AO",
    size: 42
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: 'var(--fg)'
    }
  }, "Amara Okafor"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--mono-500)'
    }
  }, "CFO, Kano Works")))), /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: 240,
      background: 'var(--gradient-brand)',
      display: 'grid',
      placeItems: 'center',
      color: 'rgba(255,255,255,.7)',
      fontSize: 12.5,
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(SIcons.users, {
    size: 40,
    stroke: "rgba(255,255,255,.8)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, "Customer photo")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
      gap: 16
    }
  }, cards.map(([q, n, r, c]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      ...cwrap,
      padding: 22,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Stars, {
    n: 4
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--mono-600)',
      lineHeight: 1.6,
      flex: 1
    }
  }, q), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: n.slice(0, 2),
    size: 40,
    tint: c
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: 'var(--fg)'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--mono-500)'
    }
  }, r)))))));
}

/* 2 — Newsletter band: soft blue gradient, headline, email + circular arrow */
function NewsletterBand() {
  const [f, setF] = uS6(false);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      borderRadius: 0,
      padding: '56px 28px',
      textAlign: 'center',
      background: 'linear-gradient(105deg, #c9d8ff 0%, var(--surface) 30%, var(--surface) 70%, #c9d8ff 100%)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'clamp(28px,4.5vw,44px)',
      fontWeight: 600,
      letterSpacing: '-.03em',
      lineHeight: 1.05,
      color: 'var(--fg)'
    }
  }, "Work Smarter & Faster with Fyscal"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15.5,
      color: 'var(--mono-500)',
      lineHeight: 1.6,
      margin: '14px auto 0',
      maxWidth: 460
    }
  }, "Everything you need to move money in one place. Can't find what you're looking for? Reach out to our support team."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      justifyContent: 'center',
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      flex: 1,
      maxWidth: 440,
      height: 56,
      padding: '0 22px',
      borderRadius: 9999,
      background: 'var(--surface)',
      border: '1px solid ' + (f ? 'var(--primary)' : 'var(--border)'),
      boxShadow: f ? 'var(--shadow-focus)' : 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement("input", {
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    placeholder: "Enter your email address",
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontSize: 14.5,
      fontFamily: 'var(--font-body)',
      color: 'var(--fg)'
    }
  })), /*#__PURE__*/React.createElement("button", {
    style: {
      width: 56,
      height: 56,
      borderRadius: '50%',
      background: 'var(--primary)',
      border: 'none',
      cursor: 'pointer',
      display: 'grid',
      placeItems: 'center',
      boxShadow: '0 8px 20px rgba(53,46,255,.35)'
    }
  }, /*#__PURE__*/React.createElement(SIcons.arrowR, {
    size: 20,
    stroke: "#fff",
    style: {
      transform: 'rotate(-45deg)'
    }
  }))));
}

/* 3 — AI-style feature grid: 6 cards, icon tile + dots menu + title + body */
function ModelFeatureGrid() {
  const models = [['Instant Transfers', 'Send to any bank in seconds, 24/7. No queues, no cut-off times — money moves the moment you tap.', SIcons.bolt, '#352eff'], ['Smart Insights', 'Automatic categories and weekly summaries show exactly where every naira goes, so you stay in control.', SIcons.chart, '#0053ff'], ['Bill Payments', 'Airtime, data, electricity, TV and more — settle every bill from one balance in a couple of taps.', SIcons.card, '#1f8a5b'], ['Multi-Currency', 'Hold and convert NGN, USD, GBP and EUR at rates you can actually see, with no hidden spread.', SIcons.globe, '#7b2ff7'], ['Bank-Grade Security', 'Biometric login, real-time fraud monitoring and CBN-licensed deposit protection on every account.', SIcons.shield, '#ff00ff'], ['Developer API', 'A clean REST API and SDKs to embed payments, payouts and KYC into your own product in hours.', SIcons.api, '#0053ff']];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '8px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 640,
      margin: '0 auto 32px'
    }
  }, /*#__PURE__*/React.createElement(Eye, {
    icon: /*#__PURE__*/React.createElement(SIcons.bolt, {
      size: 13,
      fill: "var(--primary)",
      stroke: "var(--primary)",
      sw: 0
    })
  }, "Features"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'clamp(28px,4.5vw,44px)',
      fontWeight: 600,
      letterSpacing: '-.03em',
      lineHeight: 1.05,
      margin: '16px 0 10px',
      color: 'var(--fg)'
    }
  }, "Everything You Need in One Place"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15.5,
      color: 'var(--mono-500)',
      lineHeight: 1.6
    }
  }, "Access the full Fyscal money platform through a single, seamless app. Move money, pay bills, and grow your balance \u2014 all from one account.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))',
      gap: 16
    }
  }, models.map(([t, d, I, c]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      ...cwrap,
      padding: 22,
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 12,
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      boxShadow: 'var(--shadow-sm)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(I, {
    size: 22,
    stroke: c
  })), /*#__PURE__*/React.createElement(SIcons.dots, {
    size: 18,
    stroke: "var(--mono-300)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      letterSpacing: '-.01em',
      margin: '26px 0 8px',
      color: 'var(--fg)'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13.5,
      color: 'var(--mono-500)',
      lineHeight: 1.6
    }
  }, d)))));
}

/* 4 — Bento feature grid: mixed tiles with embedded mini-UI motifs */
function BentoFeatures() {
  const tools = [['Send Money', SIcons.swap], ['Pay a Bill', SIcons.card], ['Convert FX', SIcons.refresh]];
  const bars = Array.from({
    length: 40
  });
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '8px 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...cwrap,
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 10,
      marginBottom: 22
    }
  }, tools.map(([t, I]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      background: 'var(--bg-secondary)',
      border: '1px solid var(--border)',
      padding: '16px 8px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: 'var(--surface)',
      boxShadow: 'var(--shadow-sm)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(I, {
    size: 18,
    stroke: "var(--primary)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--fg)',
      textAlign: 'center'
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      color: 'var(--primary)',
      border: '1px solid var(--border)',
      padding: '2px 8px',
      background: 'var(--surface)'
    }
  }, "Try now")))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 19,
      fontWeight: 700,
      letterSpacing: '-.01em',
      color: 'var(--fg)'
    }
  }, "Quick Actions"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13.5,
      color: 'var(--mono-500)',
      lineHeight: 1.6,
      marginTop: 6
    }
  }, "Launch the things you do most \u2014 send, pay, and convert \u2014 straight from your home screen in a single tap.")), /*#__PURE__*/React.createElement("div", {
    style: {
      ...cwrap,
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-secondary)',
      border: '1px solid var(--border)',
      height: 130,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 2,
      padding: '0 16px',
      marginBottom: 22
    }
  }, bars.map((_, i) => {
    const h = 20 + Math.abs(Math.sin(i * 0.5)) * 70;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        width: 3,
        height: h + '%',
        background: i % 7 === 0 ? 'var(--primary)' : 'color-mix(in srgb, var(--primary) 35%, transparent)'
      }
    });
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 19,
      fontWeight: 700,
      letterSpacing: '-.01em',
      color: 'var(--fg)'
    }
  }, "Voice Transfers"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13.5,
      color: 'var(--mono-500)',
      lineHeight: 1.6,
      marginTop: 6
    }
  }, "Send money or check a balance just by speaking \u2014 ideal for hands-free banking when you're on the move."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...cwrap,
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-secondary)',
      border: '1px solid var(--border)',
      padding: 14,
      marginBottom: 20,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 26,
      height: 26,
      borderRadius: '50%',
      background: 'var(--primary)',
      display: 'grid',
      placeItems: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(SIcons.bolt, {
    size: 13,
    stroke: "#fff",
    fill: "#fff"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      padding: '6px 9px',
      color: 'var(--fg)'
    }
  }, "Your salary just landed \uD83C\uDF89")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      flexDirection: 'row-reverse'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: "AK",
    size: 26
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      background: 'var(--primary)',
      color: '#fff',
      padding: '6px 9px'
    }
  }, "Move \u20A650k to savings"))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 700,
      letterSpacing: '-.01em',
      color: 'var(--fg)'
    }
  }, "Smart Assistant"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: 'var(--mono-500)',
      lineHeight: 1.55,
      marginTop: 6
    }
  }, "Ask about spending, schedule a transfer, or split a bill in plain language.")), /*#__PURE__*/React.createElement("div", {
    style: {
      ...cwrap,
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-secondary)',
      border: '1px solid var(--border)',
      padding: 14,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      padding: '7px 10px',
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--mono-400)",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 21-4.35-4.35"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 6,
      background: 'color-mix(in srgb,var(--primary) 20%,transparent)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      background: 'var(--primary)',
      width: '70%',
      marginBottom: 7
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      background: 'color-mix(in srgb,var(--primary) 35%,transparent)',
      width: '50%'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 700,
      letterSpacing: '-.01em',
      color: 'var(--fg)'
    }
  }, "Transaction Search"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: 'var(--mono-500)',
      lineHeight: 1.55,
      marginTop: 6
    }
  }, "Find any payment instantly by name, amount, date or category.")), /*#__PURE__*/React.createElement("div", {
    style: {
      ...cwrap,
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-secondary)',
      border: '1px solid var(--border)',
      height: 118,
      display: 'grid',
      placeItems: 'center',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 54,
      height: 54,
      borderRadius: 14,
      background: 'var(--primary)',
      display: 'grid',
      placeItems: 'center',
      boxShadow: '0 8px 20px rgba(53,46,255,.3)'
    }
  }, /*#__PURE__*/React.createElement(SIcons.card, {
    size: 26,
    stroke: "#fff"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 700,
      letterSpacing: '-.01em',
      color: 'var(--fg)'
    }
  }, "Virtual Cards"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: 'var(--mono-500)',
      lineHeight: 1.55,
      marginTop: 6
    }
  }, "Spin up a single-use or recurring card for safer online spend in seconds."))));
}
Object.assign(window, {
  TestimonialsSection,
  NewsletterBand,
  ModelFeatureGrid,
  BentoFeatures
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/LibrarySectionsC.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Nav.jsx
try { (() => {
/* Fyscal Website UI Kit — navigation, buttons, footer */
const {
  useState
} = React;
function WBtn({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  full
}) {
  const [h, setH] = useState(false);
  const pad = size === 'lg' ? '15px 28px' : size === 'sm' ? '8px 16px' : '12px 22px';
  const fs = size === 'lg' ? 15 : size === 'sm' ? 13 : 14;
  const variants = {
    primary: {
      background: h ? 'var(--tertiary-2)' : 'var(--primary)',
      color: '#fff',
      border: '1.5px solid var(--primary)'
    },
    dark: {
      background: h ? '#000' : 'var(--ink)',
      color: '#fff',
      border: '1.5px solid var(--mono-900)'
    },
    ghost: {
      background: h ? 'var(--mono-100)' : 'transparent',
      color: 'var(--fg)',
      border: '1.5px solid var(--border-input)'
    },
    light: {
      background: h ? 'rgba(255,255,255,.85)' : '#fff',
      color: 'var(--primary)',
      border: '1.5px solid #fff'
    },
    outlineLight: {
      background: h ? 'rgba(255,255,255,.12)' : 'transparent',
      color: '#fff',
      border: '1.5px solid rgba(255,255,255,.5)'
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      padding: pad,
      fontSize: fs,
      fontWeight: 600,
      fontFamily: 'var(--font-body)',
      borderRadius: 0,
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      transition: '.15s',
      width: full ? '100%' : 'auto',
      letterSpacing: '-.01em',
      ...variants[variant]
    }
  }, children);
}
const NAV_LINKS = ['Personal', 'Business', 'Developers', 'Company', 'Pricing'];
const NAV_ITEMS = [{
  label: 'Personal',
  menu: [{
    t: 'Send money',
    d: 'Instant transfers, anywhere',
    icon: SIcons.swap
  }, {
    t: 'Pay bills',
    d: 'Airtime, data, electricity, TV',
    icon: SIcons.card
  }, {
    t: 'Cards',
    d: 'Virtual & physical, global spend',
    icon: SIcons.bolt
  }, {
    t: 'Savings',
    d: 'Goals that lock and earn',
    icon: SIcons.chart
  }]
}, {
  label: 'Business',
  menu: [{
    t: 'Payments API',
    d: 'Accept and send at scale',
    icon: SIcons.api
  }, {
    t: 'Payroll',
    d: 'Bulk payouts in minutes',
    icon: SIcons.users
  }, {
    t: 'Invoicing',
    d: 'Bill clients, get paid faster',
    icon: SIcons.card
  }, {
    t: 'Treasury',
    d: 'Multi-currency balances',
    icon: SIcons.globe
  }]
}, {
  label: 'Developers',
  menu: [{
    t: 'Documentation',
    d: 'Guides and quickstarts',
    icon: SIcons.api
  }, {
    t: 'API reference',
    d: 'Every endpoint, with examples',
    icon: SIcons.lock
  }, {
    t: 'Status',
    d: 'Live uptime and incidents',
    icon: SIcons.bolt
  }, {
    t: 'Changelog',
    d: "What's new this week",
    icon: SIcons.globe
  }]
}, {
  label: 'Company'
}, {
  label: 'Pricing'
}];
const Caret = () => /*#__PURE__*/React.createElement("svg", {
  className: "nav-caret",
  width: "11",
  height: "11",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.4",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M6 9l6 6 6-6"
}));
function NavBar({
  onCta
}) {
  const [open, setOpen] = useState(null);
  const [menu, setMenu] = useState(false);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(255,255,255,.9)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav-row",
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '0 20px',
      height: 64,
      display: 'flex',
      alignItems: 'center',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(FyscalLogo, {
    height: 20
  }), /*#__PURE__*/React.createElement("nav", {
    className: "nav-links",
    style: {
      display: 'flex',
      gap: 6,
      flex: 1
    }
  }, NAV_ITEMS.map(it => it.menu ? /*#__PURE__*/React.createElement("div", {
    key: it.label,
    className: 'nav-item' + (open === it.label ? ' open' : ''),
    onMouseEnter: () => setOpen(it.label),
    onMouseLeave: () => setOpen(null)
  }, /*#__PURE__*/React.createElement("button", {
    className: "nav-trigger",
    onFocus: () => setOpen(it.label),
    "aria-haspopup": "true",
    "aria-expanded": open === it.label
  }, it.label, /*#__PURE__*/React.createElement(Caret, null)), /*#__PURE__*/React.createElement("div", {
    className: "nav-panel",
    role: "menu"
  }, it.menu.map((m, i) => /*#__PURE__*/React.createElement("a", {
    key: m.t,
    href: "#",
    className: "nav-link-row",
    role: "menuitem",
    style: {
      transitionDelay: i * 45 + 'ms'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "nav-link-ic"
  }, React.createElement(m.icon, {
    size: 18,
    stroke: 'var(--primary)'
  })), /*#__PURE__*/React.createElement("span", {
    className: "nav-link-tx"
  }, /*#__PURE__*/React.createElement("span", {
    className: "nav-link-t"
  }, m.t), /*#__PURE__*/React.createElement("span", {
    className: "nav-link-d"
  }, m.d)))))) : /*#__PURE__*/React.createElement("a", {
    key: it.label,
    href: "#",
    className: "nav-plain"
  }, it.label))), /*#__PURE__*/React.createElement("div", {
    className: "nav-actions",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--fg)',
      textDecoration: 'none'
    }
  }, "Sign in"), /*#__PURE__*/React.createElement(WBtn, {
    size: "sm",
    onClick: onCta
  }, "Open account")), /*#__PURE__*/React.createElement("button", {
    className: "nav-burger",
    onClick: () => setMenu(m => !m),
    "aria-label": "Menu",
    style: {
      display: 'none',
      width: 42,
      height: 42,
      placeItems: 'center',
      border: '1px solid var(--border-input)',
      background: 'var(--surface)',
      cursor: 'pointer',
      marginLeft: 'auto'
    }
  }, menu ? /*#__PURE__*/React.createElement(SIcons.x, {
    size: 20,
    stroke: "var(--fg)"
  }) : /*#__PURE__*/React.createElement(SIcons.menu, {
    size: 20,
    stroke: "var(--fg)"
  }))), menu && /*#__PURE__*/React.createElement("div", {
    className: "nav-mobile",
    style: {
      borderTop: '1px solid var(--border)',
      padding: '12px 20px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      background: 'var(--surface)'
    }
  }, NAV_LINKS.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: () => setMenu(false),
    style: {
      fontSize: 16,
      fontWeight: 500,
      color: 'var(--fg)',
      textDecoration: 'none',
      padding: '12px 4px',
      borderBottom: '1px solid var(--surface-soft)'
    }
  }, l)), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--fg)',
      textDecoration: 'none',
      padding: '14px 4px 8px'
    }
  }, "Sign in"), /*#__PURE__*/React.createElement(WBtn, {
    full: true,
    onClick: onCta
  }, "Open account")));
}
function Footer() {
  const cols = [{
    h: 'Personal',
    items: ['Send money', 'Pay bills', 'Cards', 'Savings', 'Rewards']
  }, {
    h: 'Business',
    items: ['Payments API', 'Payroll', 'Invoicing', 'Treasury']
  }, {
    h: 'Developers',
    items: ['Documentation', 'API reference', 'Status', 'Changelog']
  }, {
    h: 'Company',
    items: ['About', 'Careers', 'Press', 'Contact']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ink)',
      color: '#fff',
      padding: '64px 32px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr repeat(4, 1fr)',
      gap: 40,
      paddingBottom: 48,
      borderBottom: '1px solid rgba(255,255,255,.12)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FyscalLogo, {
    height: 22,
    variant: "white"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: 'rgba(255,255,255,.55)',
      lineHeight: 1.6,
      marginTop: 18,
      maxWidth: 240
    }
  }, "The modern money platform for Africa \u2014 send, spend, and grow in one place."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 20
    }
  }, ['𝕏', 'in', 'f', '◎'].map(s => /*#__PURE__*/React.createElement("div", {
    key: s,
    style: {
      width: 34,
      height: 34,
      border: '1px solid rgba(255,255,255,.2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 13,
      color: 'rgba(255,255,255,.7)',
      cursor: 'pointer'
    }
  }, s)))), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '.08em',
      color: 'rgba(255,255,255,.45)',
      marginBottom: 16
    }
  }, c.h), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 11
    }
  }, c.items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    style: {
      fontSize: 13.5,
      color: 'rgba(255,255,255,.75)',
      textDecoration: 'none'
    }
  }, i)))))), /*#__PURE__*/React.createElement("div", {
    className: "footer-bottom",
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 28,
      flexWrap: 'wrap',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: 'rgba(255,255,255,.45)'
    }
  }, "\xA9 2026 Fyscal Technologies. Licensed by the Central Bank of Nigeria."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 22
    }
  }, ['Privacy', 'Terms', 'Security', 'Cookies'].map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontSize: 12.5,
      color: 'rgba(255,255,255,.55)',
      textDecoration: 'none'
    }
  }, l))))));
}
Object.assign(window, {
  WBtn,
  NavBar,
  Footer,
  NAV_LINKS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sections.jsx
try { (() => {
/* Fyscal Website UI Kit — marketing page sections */

const Section = ({
  children,
  bg = 'var(--surface)',
  pad = '88px 32px',
  style
}) => /*#__PURE__*/React.createElement("section", {
  className: "sec",
  style: {
    background: bg,
    padding: pad,
    ...style
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 1200,
    margin: '0 auto'
  }
}, children));
const Eyebrow = ({
  children,
  light
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    fontSize: 12,
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '.12em',
    color: light ? 'rgba(255,255,255,.7)' : 'var(--primary)',
    marginBottom: 18
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    width: 24,
    height: 2,
    background: light ? 'rgba(255,255,255,.5)' : 'var(--primary)'
  }
}), children);

/* ── Hero ────────────────────────────────────────────────────────────────── */
function Hero({
  onCta
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--bg)',
      borderBottom: '1px solid var(--border)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-grid",
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '72px 32px 0',
      display: 'grid',
      gridTemplateColumns: '1.05fr .95fr',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-copy",
    style: {
      paddingBottom: 72
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '6px 12px',
      border: '1px solid var(--border-input)',
      fontSize: 12.5,
      fontWeight: 600,
      color: 'var(--mono-700)',
      marginBottom: 26
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      background: 'var(--success)',
      display: 'inline-block'
    }
  }), "New \xB7 Instant cross-border transfers"), /*#__PURE__*/React.createElement("h1", {
    className: "hero-title",
    style: {
      fontSize: 58,
      fontWeight: 600,
      lineHeight: 1.04,
      letterSpacing: '-.035em',
      color: 'var(--fg)'
    }
  }, "Money that moves", /*#__PURE__*/React.createElement("br", null), "as fast as ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--primary)'
    }
  }, "you do.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: 'var(--mono-500)',
      lineHeight: 1.6,
      marginTop: 22,
      maxWidth: 460
    }
  }, "Send, spend, and grow your money in one account. No queues, no hidden fees \u2014 just banking built for how Africa actually moves."), /*#__PURE__*/React.createElement("div", {
    className: "hero-btns",
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(WBtn, {
    size: "lg",
    onClick: onCta
  }, "Open free account ", /*#__PURE__*/React.createElement(SIcons.arrowR, {
    size: 18
  })), /*#__PURE__*/React.createElement(WBtn, {
    size: "lg",
    variant: "ghost"
  }, "Talk to sales")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 22,
      marginTop: 34
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex'
    }
  }, ['#352eff', '#0053ff', '#7c9dff', '#171717'].map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      width: 34,
      height: 34,
      borderRadius: '50%',
      background: c,
      border: '2px solid var(--surface)',
      marginLeft: i ? -10 : 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontSize: 12,
      fontWeight: 700
    }
  }, ['A', 'O', 'K', 'M'][i]))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 2,
      color: 'var(--warning)'
    }
  }, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement(SIcons.star, {
    key: i,
    size: 14,
    fill: "var(--warning)",
    sw: 0
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--mono-500)',
      marginTop: 3
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--fg)'
    }
  }, "2.4M+"), " accounts opened")))), /*#__PURE__*/React.createElement("div", {
    className: "hero-visual",
    style: {
      position: 'relative',
      alignSelf: 'end',
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      width: 380,
      height: 380,
      background: 'var(--gradient-brand)',
      borderRadius: '50%',
      filter: 'blur(8px)',
      opacity: .12
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 290,
      background: '#000',
      padding: 8,
      paddingBottom: 0,
      borderRadius: '32px 32px 0 0',
      boxShadow: '0 30px 70px rgba(53,46,255,.18)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--gradient-brand)',
      borderRadius: '26px 26px 0 0',
      padding: '26px 22px 30px',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      opacity: .7,
      fontWeight: 600,
      letterSpacing: '.08em',
      textTransform: 'uppercase'
    }
  }, "Total balance"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 34px var(--font-mono)',
      letterSpacing: '-.02em',
      margin: '6px 0 2px'
    }
  }, "\u20A62,450,000"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      opacity: .6,
      marginBottom: 22
    }
  }, "+12.4% this month"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, [['Send', SIcons.swap], ['Pay', SIcons.card], ['Save', SIcons.chart]].map(([l, I], k) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      flex: 1,
      padding: '10px 0',
      background: 'rgba(255,255,255,.16)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6,
      fontSize: 11,
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement(I, {
    size: 18,
    stroke: "#fff"
  }), l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface)',
      padding: '18px 18px 26px',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, [['Salary — GTBank', '+₦350,000', 'var(--success)'], ['Airtime — MTN', '−₦2,000', 'var(--fg)'], ['James K.', '−₦20,000', 'var(--fg)']].map(([n, a, c], k) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 34,
      height: 34,
      background: 'var(--bg-secondary)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontSize: 12.5,
      fontWeight: 600
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 13px var(--font-mono)',
      color: c
    }
  }, a))))))));
}

/* ── Logo strip ──────────────────────────────────────────────────────────── */
function LogoStrip() {
  const logos = ['Paystack', 'Flutterwave', 'Interswitch', 'Kuda', 'Carbon', 'PiggyVest'];
  return /*#__PURE__*/React.createElement(Section, {
    bg: "var(--surface)",
    pad: "44px 32px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      fontSize: 12.5,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '.1em',
      color: 'var(--mono-300)',
      marginBottom: 28
    }
  }, "Trusted by teams across the continent"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 24
    }
  }, logos.map(l => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: {
      fontSize: 22,
      fontWeight: 800,
      color: 'var(--mono-200)',
      letterSpacing: '-.02em'
    }
  }, l))));
}

/* ── Features grid ───────────────────────────────────────────────────────── */
function Features() {
  const feats = [{
    icon: SIcons.bolt,
    title: 'Instant transfers',
    body: 'Money lands in seconds, 24/7 — to any bank or Fyscal account, at home or abroad.'
  }, {
    icon: SIcons.shield,
    title: 'Bank-grade security',
    body: 'Biometric login, real-time fraud monitoring, and CBN-licensed deposit protection.'
  }, {
    icon: SIcons.card,
    title: 'Cards that work everywhere',
    body: 'Virtual and physical cards for online, in-store, and international spend.'
  }, {
    icon: SIcons.chart,
    title: 'Smart insights',
    body: 'See where every naira goes with automatic categories and weekly summaries.'
  }, {
    icon: SIcons.globe,
    title: 'Multi-currency',
    body: 'Hold and convert NGN, USD, GBP and EUR at rates you can actually see.'
  }, {
    icon: SIcons.api,
    title: 'Built for developers',
    body: 'A clean REST API and SDKs to embed payments into your own product in hours.'
  }];
  return /*#__PURE__*/React.createElement(Section, {
    bg: "var(--surface-soft)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 620,
      marginBottom: 52
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Everything in one place"), /*#__PURE__*/React.createElement("h2", {
    className: "sec-title",
    style: {
      fontSize: 40,
      fontWeight: 600,
      letterSpacing: '-.03em',
      lineHeight: 1.1,
      color: 'var(--fg)'
    }
  }, "One account for every kind of money move")), /*#__PURE__*/React.createElement("div", {
    className: "feat-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 0,
      border: '1px solid var(--border)',
      background: 'var(--border)'
    }
  }, feats.map((f, i) => {
    const I = f.icon;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        background: 'var(--surface)',
        padding: 32
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 48,
        height: 48,
        background: 'var(--primary-soft)',
        color: 'var(--primary)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
      }
    }, /*#__PURE__*/React.createElement(I, {
      size: 24
    })), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 18,
        fontWeight: 700,
        letterSpacing: '-.01em',
        marginBottom: 8
      }
    }, f.title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14.5,
        color: 'var(--mono-500)',
        lineHeight: 1.6
      }
    }, f.body));
  })));
}

/* ── Product split ───────────────────────────────────────────────────────── */
function ProductSplit() {
  const points = ['Open an account in under 2 minutes', 'Free transfers to any Nigerian bank', 'Set savings goals that lock and earn', 'Spending caps and instant card freeze'];
  return /*#__PURE__*/React.createElement(Section, {
    bg: "var(--surface)"
  }, /*#__PURE__*/React.createElement("div", {
    className: "split-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 64,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "For individuals"), /*#__PURE__*/React.createElement("h2", {
    className: "sec-title",
    style: {
      fontSize: 38,
      fontWeight: 600,
      letterSpacing: '-.03em',
      lineHeight: 1.12,
      color: 'var(--fg)',
      marginBottom: 18
    }
  }, "Your whole financial life, in your pocket"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16.5,
      color: 'var(--mono-500)',
      lineHeight: 1.6,
      marginBottom: 28
    }
  }, "Fyscal brings spending, saving, and sending into one clean app \u2014 so you always know where you stand."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      marginBottom: 34
    }
  }, points.map(p => /*#__PURE__*/React.createElement("div", {
    key: p,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 24,
      height: 24,
      background: 'var(--primary)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(SIcons.check, {
    size: 15,
    stroke: "#fff",
    sw: 2.5
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15.5,
      color: 'var(--fg)',
      fontWeight: 500
    }
  }, p)))), /*#__PURE__*/React.createElement(WBtn, {
    size: "lg"
  }, "Get the app ", /*#__PURE__*/React.createElement(SIcons.arrowR, {
    size: 18
  }))), /*#__PURE__*/React.createElement("div", {
    className: "split-panel",
    style: {
      background: 'var(--gradient-brand)',
      padding: 48,
      minHeight: 420,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 18,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(255,255,255,.12)',
      border: '1px solid rgba(255,255,255,.2)',
      padding: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      opacity: .7,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '.08em'
    }
  }, "Savings goal \xB7 Japa Fund"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 28px var(--font-mono)',
      margin: '8px 0'
    }
  }, "\u20A61,840,000 ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      opacity: .6
    }
  }, "/ \u20A62,500,000")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      background: 'rgba(255,255,255,.2)',
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '74%',
      height: '100%',
      background: 'var(--surface)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: 'rgba(255,255,255,.12)',
      border: '1px solid rgba(255,255,255,.2)',
      padding: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      opacity: .7,
      fontWeight: 600
    }
  }, "This week"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 20px var(--font-mono)',
      marginTop: 4
    }
  }, "\u2212\u20A668,000")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: 'rgba(255,255,255,.12)',
      border: '1px solid rgba(255,255,255,.2)',
      padding: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      opacity: .7,
      fontWeight: 600
    }
  }, "Earned"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 20px var(--font-mono)',
      marginTop: 4
    }
  }, "+\u20A612,400"))))));
}

/* ── Stats band ──────────────────────────────────────────────────────────── */
function Stats() {
  const stats = [['2.4M+', 'Accounts opened'], ['₦480B', 'Processed in 2025'], ['99.99%', 'Uptime'], ['18', 'African markets']];
  return /*#__PURE__*/React.createElement(Section, {
    bg: "var(--ink)",
    pad: "64px 32px"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stats-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 24
    }
  }, stats.map(([v, l], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 44px var(--font-mono)',
      color: '#fff',
      letterSpacing: '-.03em'
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'rgba(255,255,255,.55)',
      marginTop: 6
    }
  }, l)))));
}

/* ── Pricing ─────────────────────────────────────────────────────────────── */
function Pricing({
  onCta
}) {
  const tiers = [{
    name: 'Personal',
    price: '₦0',
    per: '/forever',
    desc: 'Everything you need to manage money day to day.',
    feats: ['Free bank transfers', 'Virtual dollar card', 'Savings goals', 'Spending insights'],
    cta: 'Open account',
    highlight: false
  }, {
    name: 'Premium',
    price: '₦2,500',
    per: '/month',
    desc: 'For people who move serious money.',
    feats: ['Everything in Personal', 'Higher transfer limits', 'Airport lounge access', 'Priority support', '2 physical cards'],
    cta: 'Start free trial',
    highlight: true
  }, {
    name: 'Business',
    price: 'Custom',
    per: '',
    desc: 'Payments, payroll, and treasury for teams.',
    feats: ['Payments API access', 'Multi-user roles', 'Bulk payouts & payroll', 'Dedicated manager'],
    cta: 'Contact sales',
    highlight: false
  }];
  return /*#__PURE__*/React.createElement(Section, {
    bg: "var(--surface)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 560,
      margin: '0 auto 52px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Pricing"), /*#__PURE__*/React.createElement("h2", {
    className: "sec-title",
    style: {
      fontSize: 40,
      fontWeight: 600,
      letterSpacing: '-.03em',
      lineHeight: 1.1,
      color: 'var(--fg)'
    }
  }, "Simple plans, no surprises")), /*#__PURE__*/React.createElement("div", {
    className: "price-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 20
    }
  }, tiers.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.name,
    style: {
      border: t.highlight ? '1.5px solid var(--primary)' : '1px solid var(--border)',
      background: t.highlight ? 'var(--ink)' : 'var(--surface)',
      color: t.highlight ? '#fff' : 'var(--fg)',
      padding: 32,
      position: 'relative',
      display: 'flex',
      flexDirection: 'column'
    }
  }, t.highlight && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      background: 'var(--primary)',
      color: '#fff',
      fontSize: 11,
      fontWeight: 700,
      padding: '5px 12px',
      textTransform: 'uppercase',
      letterSpacing: '.06em'
    }
  }, "Popular"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '.06em',
      color: t.highlight ? 'rgba(255,255,255,.6)' : 'var(--mono-300)'
    }
  }, t.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 4,
      margin: '14px 0 6px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 38px var(--font-mono)',
      letterSpacing: '-.03em'
    }
  }, t.price), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: t.highlight ? 'rgba(255,255,255,.5)' : 'var(--mono-300)'
    }
  }, t.per)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13.5,
      color: t.highlight ? 'rgba(255,255,255,.6)' : 'var(--mono-500)',
      lineHeight: 1.5,
      marginBottom: 24,
      minHeight: 40
    }
  }, t.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      marginBottom: 28,
      flex: 1
    }
  }, t.feats.map(f => /*#__PURE__*/React.createElement("div", {
    key: f,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontSize: 13.5
    }
  }, /*#__PURE__*/React.createElement(SIcons.check, {
    size: 16,
    stroke: t.highlight ? 'var(--secondary)' : 'var(--primary)',
    sw: 2.5
  }), f))), /*#__PURE__*/React.createElement(WBtn, {
    full: true,
    variant: t.highlight ? 'light' : 'ghost',
    onClick: onCta
  }, t.cta)))));
}

/* ── Testimonial ─────────────────────────────────────────────────────────── */
function Testimonial() {
  return /*#__PURE__*/React.createElement(Section, {
    bg: "var(--surface-soft)",
    pad: "80px 32px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 860,
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 3,
      justifyContent: 'center',
      color: 'var(--warning)',
      marginBottom: 24
    }
  }, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement(SIcons.star, {
    key: i,
    size: 20,
    fill: "var(--warning)",
    sw: 0
  }))), /*#__PURE__*/React.createElement("p", {
    className: "quote",
    style: {
      fontSize: 30,
      fontWeight: 500,
      lineHeight: 1.35,
      letterSpacing: '-.02em',
      color: 'var(--fg)'
    }
  }, "\u201CWe switched our entire payroll to Fyscal and cut payout time from two days to ten minutes. The API was live in an afternoon.\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 14,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: '50%',
      background: 'var(--gradient-brand)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontWeight: 700
    }
  }, "NO"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700
    }
  }, "Ngozi Okonkwo"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--mono-500)'
    }
  }, "Head of Finance, Carbon")))));
}

/* ── Final CTA ───────────────────────────────────────────────────────────── */
function FinalCTA({
  onCta
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--gradient-brand)',
      padding: '88px 32px',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "cta-title",
    style: {
      fontSize: 46,
      fontWeight: 600,
      letterSpacing: '-.03em',
      lineHeight: 1.08
    }
  }, "Ready to move your money forward?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      opacity: .8,
      lineHeight: 1.6,
      marginTop: 18,
      maxWidth: 480,
      marginInline: 'auto'
    }
  }, "Open a free Fyscal account in two minutes. No paperwork, no minimum balance."), /*#__PURE__*/React.createElement("div", {
    className: "cta-btns",
    style: {
      display: 'flex',
      gap: 12,
      justifyContent: 'center',
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(WBtn, {
    size: "lg",
    variant: "light",
    onClick: onCta
  }, "Open free account"), /*#__PURE__*/React.createElement(WBtn, {
    size: "lg",
    variant: "outlineLight"
  }, "Book a demo"))));
}
Object.assign(window, {
  Section,
  Eyebrow,
  Hero,
  LogoStrip,
  Features,
  ProductSplit,
  Stats,
  Pricing,
  Testimonial,
  FinalCTA
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/fluted-glass.js
try { (() => {
/* Fyscal Website UI Kit — Frosted Columns background engine (vanilla JS, no deps).
   Renders the reference look: vertical frosted-blue columns rising from the
   bottom on a white field, each fading white(top)→brand-blue(bottom), with film
   grain and varying width/height. Animated like a slow equalizer — every column
   breathes its height + tint on its own phase. 2D canvas (no WebGL).
   Mount: FlutedGlass.mount(canvasEl, { ...dataAttrs }) → { destroy() }. */
(function () {
  function hexToRgb(h) {
    h = (h || '#000000').replace('#', '');
    if (h.length === 3) h = h.split('').map(c => c + c).join('');
    return [parseInt(h.substr(0, 2), 16), parseInt(h.substr(2, 2), 16), parseInt(h.substr(4, 2), 16)];
  }
  const num = (v, d) => v == null || v === '' || isNaN(+v) ? d : +v;
  const MAXW = 1100;
  const FPS = 30,
    MINDT = 1000 / FPS;
  // seeded RNG so the column layout is stable across resizes/reloads
  function rng(seed) {
    let s = seed >>> 0;
    return () => {
      s = s * 1664525 + 1013904223 >>> 0;
      return s / 4294967296;
    };
  }
  function mount(canvas, opts) {
    opts = opts || {};
    const cfg = {
      c1: hexToRgb(opts.colorOne || '#352EFF'),
      // saturated brand blue (bottom)
      c2: hexToRgb(opts.colorTwo || '#6B8CFF'),
      // lighter blue (variety)
      bg: opts.bgColor || '#ffffff',
      count: Math.max(4, Math.round(num(opts.columns, 8))),
      noise: num(opts.noise, 0.40),
      gloss: num(opts.gloss, 0.4),
      widthVar: num(opts.widthVariation, 1.6),
      hover: opts.hover !== false && opts.hover !== 'false',
      hoverIntensity: num(opts.hoverIntensity, 2.0),
      mode: opts.mode || 'columns',
      bandFloor: num(opts.bandFloor, 0.18),
      // bands mode: top of the band zone (e.g. 0.67 = bottom 33%)
      bandAlpha: num(opts.bandAlpha, 1),
      // bands mode: opacity multiplier (lower = lighter)
      reduced: !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    };
    const ctx = canvas.getContext('2d', {
      alpha: false
    });
    let W = 0,
      H = 0,
      grainC,
      grainPat,
      cols = [],
      raf = 0,
      last = 0;
    const ptr = {
      x: 0.7,
      a: 0,
      ta: 0
    };
    function makeGrain() {
      const s = 110;
      grainC = document.createElement('canvas');
      grainC.width = s;
      grainC.height = s;
      const g = grainC.getContext('2d');
      const id = g.createImageData(s, s);
      for (let i = 0; i < id.data.length; i += 4) {
        const v = 120 + Math.random() * 135;
        id.data[i] = id.data[i + 1] = id.data[i + 2] = v;
        id.data[i + 3] = 255;
      }
      g.putImageData(id, 0, 0);
      grainPat = ctx.createPattern(grainC, 'repeat');
    }
    function buildColumns() {
      const r = rng(20260603);
      cols = [];
      const gapMode = cfg.mode === 'bands'; // bands = zero gap, contiguous, full-bleed
      let x = gapMode ? 0 : -0.04 + r() * 0.03;
      while (x < 1.02) {
        const w = gapMode ? (0.05 + r() * 0.06) * cfg.widthVar / 1.6 : (0.07 + r() * 0.09) * cfg.widthVar / 1.6;
        const baseTop = 0.18 + r() * 0.6; // resting top (0=tall,1=short)
        const amp = 0.05 + r() * 0.13; // breathe amplitude
        const spd = 0.12 + r() * 0.32; // breathe speed
        const ph = r() * Math.PI * 2; // phase offset
        const light = r(); // tint blend c1↔c2
        const alpha = gapMode ? 0.82 + r() * 0.18 : 0.72 + r() * 0.28;
        cols.push({
          x,
          w,
          baseTop,
          amp,
          spd,
          ph,
          light,
          alpha
        });
        x += gapMode ? w : w + (0.005 + r() * 0.05); // bands touch; columns gap
      }
    }
    function resize() {
      const rect = canvas.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const scale = Math.min(1, MAXW / rect.width);
      W = Math.max(2, Math.round(rect.width * scale));
      H = Math.max(2, Math.round(rect.height * scale));
      canvas.width = W;
      canvas.height = H;
    }
    function paintGrain(t) {
      if (cfg.noise > 0 && grainPat) {
        ctx.globalCompositeOperation = 'multiply';
        ctx.globalAlpha = cfg.noise * 0.5;
        const ox = t * 7 % grainC.width,
          oy = t * 5 % grainC.height;
        ctx.save();
        ctx.translate(-ox, -oy);
        ctx.fillStyle = grainPat;
        ctx.fillRect(0, 0, W + grainC.width, H + grainC.height);
        ctx.restore();
        ctx.globalAlpha = 1;
        ctx.globalCompositeOperation = 'source-over';
      }
    }
    function colTint(c) {
      return [Math.round(cfg.c1[0] + (cfg.c2[0] - cfg.c1[0]) * c.light), Math.round(cfg.c1[1] + (cfg.c2[1] - cfg.c1[1]) * c.light), Math.round(cfg.c1[2] + (cfg.c2[2] - cfg.c1[2]) * c.light)];
    }

    /* columns — rising blue bars with gaps (default) */
    function renderColumns(t) {
      ctx.fillStyle = cfg.bg;
      ctx.fillRect(0, 0, W, H);
      for (const c of cols) {
        const breathe = Math.sin(t * c.spd + c.ph) * c.amp;
        let top = (c.baseTop + breathe) * H;
        if (cfg.hover && ptr.a > 0.01) {
          const d = Math.abs(c.x + c.w / 2 - ptr.x);
          top -= Math.max(0, 1 - d / 0.22) * ptr.a * 0.16 * Math.min(1.5, cfg.hoverIntensity / 2) * H;
        }
        top = Math.max(0.02 * H, Math.min(0.95 * H, top));
        const cx = c.x * W,
          cw = c.w * W,
          [R, G, B] = colTint(c);
        const grd = ctx.createLinearGradient(0, top, 0, H);
        grd.addColorStop(0, 'rgba(' + R + ',' + G + ',' + B + ',0)');
        grd.addColorStop(0.5, 'rgba(' + R + ',' + G + ',' + B + ',' + c.alpha * 0.42 + ')');
        grd.addColorStop(1, 'rgba(' + R + ',' + G + ',' + B + ',' + c.alpha + ')');
        ctx.fillStyle = grd;
        ctx.fillRect(cx, top, cw + 0.6, H - top);
        if (cfg.gloss > 0) {
          ctx.fillStyle = 'rgba(255,255,255,' + cfg.gloss * 0.18 + ')';
          ctx.fillRect(cx, top, Math.max(1, cw * 0.06), H - top);
        }
      }
      paintGrain(t);
    }

    /* VARIATION A — bands: contiguous full-bleed vertical bands, ZERO gaps,
       sharp seams, each band's blue rises/falls like a seamless equalizer wall. */
    function renderBands(t) {
      ctx.fillStyle = cfg.bg;
      ctx.fillRect(0, 0, W, H);
      const floor = cfg.bandFloor,
        zone = 1 - floor; // bands live in the bottom `zone` of the section
      for (const c of cols) {
        const n = Math.max(0, Math.min(1, (c.baseTop - 0.18) / 0.60)); // 0=tall .. 1=short, within zone
        let top = floor + (0.95 - floor) * n + Math.sin(t * c.spd + c.ph) * c.amp * zone;
        if (cfg.hover && ptr.a > 0.01) {
          const d = Math.abs(c.x + c.w / 2 - ptr.x);
          top -= Math.max(0, 1 - d / 0.25) * ptr.a * 0.12 * zone * Math.min(1.5, cfg.hoverIntensity / 2);
        }
        top = Math.max(floor * H, Math.min(0.97 * H, top * H));
        const cx = Math.round(c.x * W),
          cw = Math.ceil(c.w * W) + 1,
          [R, G, B] = colTint(c);
        const a = c.alpha * cfg.bandAlpha;
        const grd = ctx.createLinearGradient(0, top, 0, H);
        grd.addColorStop(0, 'rgba(' + R + ',' + G + ',' + B + ',0)');
        grd.addColorStop(0.45, 'rgba(' + R + ',' + G + ',' + B + ',' + a * 0.4 + ')');
        grd.addColorStop(1, 'rgba(' + R + ',' + G + ',' + B + ',' + a + ')');
        ctx.fillStyle = grd;
        ctx.fillRect(cx, top, cw, H - top);
        // sharp seam: thin dark line on the right edge + bright catch on the left
        ctx.fillStyle = 'rgba(10,16,40,' + 0.07 * cfg.bandAlpha + ')';
        ctx.fillRect(cx + cw - 1, top, 1, H - top);
        ctx.fillStyle = 'rgba(255,255,255,' + (0.10 + cfg.gloss * 0.22) + ')';
        ctx.fillRect(cx, top, 1, H - top);
      }
      paintGrain(t);
    }

    /* VARIATION B — mesh: continuous flowing blue aurora, no bands/edges at all,
       built from drifting radial blobs over white. Fully gap-free by nature. */
    let meshBlobs = null;
    function renderMesh(t) {
      if (!meshBlobs) {
        const r = rng(77);
        meshBlobs = [];
        for (let i = 0; i < 6; i++) meshBlobs.push({
          bx: r(),
          by: 0.5 + r() * 0.6,
          rr: 0.5 + r() * 0.5,
          sx: 0.04 + r() * 0.07,
          sy: 0.03 + r() * 0.06,
          px: r() * 6.28,
          py: r() * 6.28,
          light: r(),
          a: 0.5 + r() * 0.45
        });
      }
      ctx.fillStyle = cfg.bg;
      ctx.fillRect(0, 0, W, H);
      const mx = Math.max(W, H);
      for (const b of meshBlobs) {
        const cx = (b.bx + Math.sin(t * b.sx + b.px) * 0.18) * W;
        const cy = (b.by + Math.cos(t * b.sy + b.py) * 0.14) * H;
        const R = Math.round(cfg.c1[0] + (cfg.c2[0] - cfg.c1[0]) * b.light);
        const G = Math.round(cfg.c1[1] + (cfg.c2[1] - cfg.c1[1]) * b.light);
        const B = Math.round(cfg.c1[2] + (cfg.c2[2] - cfg.c1[2]) * b.light);
        const rr = b.rr * mx;
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, rr);
        g.addColorStop(0, 'rgba(' + R + ',' + G + ',' + B + ',' + b.a + ')');
        g.addColorStop(1, 'rgba(' + R + ',' + G + ',' + B + ',0)');
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, W, H);
      }
      // fade toward white at the very top so headline stays crisp
      const top = ctx.createLinearGradient(0, 0, 0, H * 0.5);
      top.addColorStop(0, 'rgba(255,255,255,0.7)');
      top.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = top;
      ctx.fillRect(0, 0, W, H * 0.5);
      paintGrain(t);
    }
    function render(t) {
      if (cfg.mode === 'bands') return renderBands(t);
      if (cfg.mode === 'mesh') return renderMesh(t);
      return renderColumns(t);
    }
    function loop(now) {
      raf = requestAnimationFrame(loop);
      if (now - last < MINDT) return;
      last = now;
      if (W < 2 || H < 2) {
        resize();
        if (W < 2) return;
      } // self-heal if layout wasn't ready at mount
      ptr.x += ptr.tx != null ? (ptr.tx - ptr.x) * 0.06 : 0;
      ptr.a += (ptr.ta - ptr.a) * 0.05;
      render(now / 1000);
    }
    function onMove(e) {
      const r = canvas.getBoundingClientRect();
      ptr.tx = (e.clientX - r.left) / r.width;
      ptr.ta = 1;
    }
    function onLeave() {
      ptr.ta = 0;
    }
    function onResize() {
      resize();
      if (cfg.reduced) render(6);
    }
    makeGrain();
    buildColumns();
    resize();
    let host = null;
    if (cfg.hover && !cfg.reduced) {
      host = canvas.parentElement || canvas;
      host.addEventListener('pointermove', onMove);
      host.addEventListener('pointerleave', onLeave);
    }
    window.addEventListener('resize', onResize);
    if (cfg.reduced) render(6);else raf = requestAnimationFrame(loop);
    return {
      destroy() {
        cancelAnimationFrame(raf);
        window.removeEventListener('resize', onResize);
        if (host) {
          host.removeEventListener('pointermove', onMove);
          host.removeEventListener('pointerleave', onLeave);
        }
      }
    };
  }
  function autoMount(root) {
    (root || document).querySelectorAll('canvas.fluted-glass-canvas[data-fluted-glass]').forEach(cv => {
      if (cv._fg) return;
      const d = cv.dataset;
      cv._fg = mount(cv, {
        colorOne: d.colorOne,
        colorTwo: d.colorTwo,
        colorThree: d.colorThree,
        bgColor: d.bgColor,
        columns: d.columns,
        distortion: d.distortion,
        noise: d.noise,
        gloss: d.gloss,
        widthVariation: d.widthVariation,
        hover: d.hover,
        hoverIntensity: d.hoverIntensity
      });
    });
  }
  window.FlutedGlass = {
    mount,
    autoMount
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/fluted-glass.js", error: String((e && e.message) || e) }); }

// ui_kits/website/theme-toggle.js
try { (() => {
/* Fyscal — light/dark theme toggle. Light is default; persists to localStorage.
   Injects a small fixed pill toggle bottom-right. Sets data-theme on <html>. */
(function () {
  var KEY = 'fyscal-theme';
  var saved = null;
  try {
    saved = localStorage.getItem(KEY);
  } catch (e) {}
  if (saved === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
  function ic(dark) {
    return dark ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>' : '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z"/></svg>';
  }
  function build() {
    var b = document.createElement('button');
    b.id = 'fyscal-theme-toggle';
    b.style.cssText = 'position:fixed;right:18px;bottom:18px;z-index:9999;display:inline-flex;align-items:center;gap:8px;padding:9px 14px;border:1px solid var(--border-input);background:var(--surface);color:var(--fg);font:600 12.5px var(--font-body,sans-serif);cursor:pointer;box-shadow:0 6px 20px rgba(0,0,0,.18);border-radius:9999px';
    function sync() {
      var dark = document.documentElement.getAttribute('data-theme') === 'dark';
      b.innerHTML = ic(dark) + '<span>' + (dark ? 'Dark' : 'Light') + '</span>';
    }
    b.onclick = function () {
      var dark = document.documentElement.getAttribute('data-theme') === 'dark';
      if (dark) {
        document.documentElement.removeAttribute('data-theme');
        try {
          localStorage.setItem(KEY, 'light');
        } catch (e) {}
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        try {
          localStorage.setItem(KEY, 'dark');
        } catch (e) {}
      }
      sync();
    };
    sync();
    document.body.appendChild(b);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build);else build();
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/theme-toggle.js", error: String((e && e.message) || e) }); }

})();
