(function () {
  'use strict';

  const river = document.querySelector('.river');
  if (!river) return;
  const stops = Array.from(river.children).filter((el) => el.classList.contains('stop'));
  if (!stops.length) return;

  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const STORE_KEY = 'river-boat:' + location.pathname;
  const BOAT_W = 96;
  const BOAT_H = 70;

  /* ---------- drawings ---------- */
  const palm = (x, y, s, delay) =>
    `<g transform="translate(${x} ${y}) scale(${s})"><g class="palm" style="animation-delay:${delay}s">` +
    '<path d="M0 0 Q-8 -40 6 -80" stroke="#6B4423" stroke-width="8" fill="none" stroke-linecap="round"/>' +
    '<path d="M6 -80 Q-24 -96 -52 -72 Q-24 -86 6 -76 Z" fill="#1F7A55"/>' +
    '<path d="M6 -80 Q36 -98 64 -74 Q34 -86 6 -76 Z" fill="#27895F"/>' +
    '<path d="M6 -80 Q28 -70 42 -42 Q20 -66 4 -76 Z" fill="#1C6B4C"/>' +
    '<path d="M6 -80 Q-18 -72 -30 -44 Q-8 -68 8 -76 Z" fill="#2F9A6C"/></g></g>';

  // moonlit sand with a shimmering foam ring around the shore
  const sand = (cx, cy, rx, ry) =>
    `<ellipse cx="${cx}" cy="${cy + 2}" rx="${rx * 1.34}" ry="${ry * 1.62}" fill="rgba(110,200,255,0.10)" stroke="rgba(140,230,255,0.30)" stroke-width="2"/>` +
    `<ellipse class="foam" cx="${cx}" cy="${cy + 3}" rx="${rx * 1.13}" ry="${ry * 1.28}" fill="none" stroke="rgba(210,248,255,0.55)" stroke-width="2.5" stroke-dasharray="10 8" stroke-linecap="round"/>` +
    `<ellipse cx="${cx + 3}" cy="${cy + 6}" rx="${rx + 4}" ry="${ry + 4}" fill="#A88F66"/>` +
    `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="#D8C49A"/>` +
    `<ellipse cx="${cx - rx * 0.15}" cy="${cy - ry * 0.25}" rx="${rx * 0.6}" ry="${ry * 0.45}" fill="#E8D8B2"/>`;

  const warm = (cx, cy, r, delay = 0) =>
    `<circle class="glowpulse" cx="${cx}" cy="${cy}" r="${r}" fill="url(#rgWarm)" style="animation-delay:${delay}s"/>`;

  const miniDiya = (x, y, delay = 0) =>
    `<g transform="translate(${x} ${y})">${warm(0, -4, 14, delay)}` +
    '<path d="M-5 0 Q0 4 5 0 Z" fill="#C2562E"/>' +
    `<path class="flame" d="M0 -7 Q2.4 -3.5 0 -1 Q-2.4 -3.5 0 -7 Z" fill="#FFC23D" style="animation-delay:${delay}s"/></g>`;

  const firefly = (x, y, delay) =>
    `<circle class="firefly" cx="${x}" cy="${y}" r="2" fill="#E8FF8A" style="animation-delay:${delay}s"/>`;

  const lantern = (x, y, color, delay) =>
    `<g transform="translate(${x} ${y})">${warm(0, 3, 18, delay)}` +
    '<line x1="0" y1="-14" x2="0" y2="-4" stroke="#3A2A1A" stroke-width="1.2"/>' +
    `<path d="M0 -4 L6.5 2 L0 11 L-6.5 2 Z" fill="${color}" stroke="#8E3A1E" stroke-width="1"/>` +
    '<path d="M-6.5 2 L6.5 2" stroke="#FFE27A" stroke-width="1.5"/>' +
    '<path d="M-2 11 L-2 16 M0 11 L0 17 M2 11 L2 16" stroke="#FFD25A" stroke-width="1"/></g>';

  const lotus = (x, y, delay) =>
    `<g transform="translate(${x} ${y})">` +
    `<circle class="glowpulse" cx="0" cy="-6" r="20" fill="url(#rgPink)" style="animation-delay:${delay}s"/>` +
    '<ellipse cx="0" cy="0" rx="13" ry="4.5" fill="#1F6B4C"/>' +
    '<path d="M-1 -1 Q-12 -2 -15 -6 Q-6 -6 -1 -1 Z" fill="#E8609A"/><path d="M1 -1 Q12 -2 15 -6 Q6 -6 1 -1 Z" fill="#E8609A"/>' +
    '<path d="M-1 -2 Q-10 -6 -12 -12 Q-4 -10 -1 -2 Z" fill="#FF7AB0"/><path d="M1 -2 Q10 -6 12 -12 Q4 -10 1 -2 Z" fill="#FF7AB0"/>' +
    '<path d="M0 -2 Q-4.5 -10 0 -17 Q4.5 -10 0 -2 Z" fill="#FFB3D4"/>' +
    '<circle cx="0" cy="-5" r="2" fill="#FFE27A"/></g>';

  const ISLES = [
    { w: 280, h: 230, body: // little temple with diyas on the steps
      warm(150, 118, 78) +
      sand(140, 178, 112, 36) +
      '<ellipse cx="128" cy="170" rx="82" ry="20" fill="#2F8A5A"/>' +
      palm(66, 176, 0.75, -2) +
      '<rect x="108" y="154" width="84" height="12" rx="2" fill="#C9B691" stroke="#8E7B5C" stroke-width="1.5"/>' +
      '<rect x="116" y="143" width="68" height="12" rx="2" fill="#D9C7A2" stroke="#8E7B5C" stroke-width="1.5"/>' +
      '<rect x="128" y="106" width="44" height="38" fill="#EDE1C6" stroke="#9C8862" stroke-width="1.5"/>' +
      warm(150, 132, 22, -0.5) +
      '<path d="M143 144 V127 Q150 118 157 127 V144 Z" fill="#FFB84D"/>' +
      '<path d="M125 108 Q150 40 175 108 Z" fill="#F3E8CF" stroke="#9C8862" stroke-width="1.5"/>' +
      '<path d="M134 94 Q150 88 166 94 M139 80 Q150 75 161 80 M144 66 Q150 63 156 66" stroke="#C9B48A" stroke-width="2" fill="none"/>' +
      '<circle cx="150" cy="52" r="4.5" fill="#F2B127"/>' +
      '<line x1="150" y1="50" x2="150" y2="26" stroke="#8E7B5C" stroke-width="2"/>' +
      '<path class="flagwave" d="M151 26 L168 31 L151 37 Z" fill="#FF7A2F"/>' +
      miniDiya(113, 154, 0) + miniDiya(187, 154, -0.4) + miniDiya(121, 143, -0.8) + miniDiya(179, 143, -1.2) },

    { w: 300, h: 200, body: // hut with lit windows and string lights
      sand(150, 142, 104, 34) +
      palm(78, 140, 0.85, -1.5) +
      warm(162, 114, 46, -1) +
      '<rect x="132" y="94" width="64" height="46" fill="#9A6A3C" stroke="#5A3A1E" stroke-width="3"/>' +
      '<rect x="138" y="102" width="16" height="13" rx="2" fill="#FFD27A"/>' +
      '<path d="M146 102 V115 M138 108.5 H154" stroke="#9A6A3C" stroke-width="1.5"/>' +
      '<rect x="164" y="112" width="18" height="28" rx="2" fill="#FFB84D"/>' +
      '<path d="M120 98 L164 56 L208 98 Z" fill="#C9A85A" stroke="#8E7333" stroke-width="3" stroke-linejoin="round"/>' +
      '<path d="M140 86 L188 86 M130 94 L198 94" stroke="#A88A44" stroke-width="2.5"/>' +
      '<path d="M88 76 Q125 96 164 62" stroke="#3A2A1A" stroke-width="1.2" fill="none"/>' +
      '<circle class="glowpulse" cx="99" cy="81" r="3.2" fill="#FFD25A"/>' +
      '<circle class="glowpulse" cx="114" cy="83.4" r="3.2" fill="#FF7A9A" style="animation-delay:-0.6s"/>' +
      '<circle class="glowpulse" cx="129" cy="81.7" r="3.2" fill="#7AE0FF" style="animation-delay:-1.2s"/>' +
      '<circle class="glowpulse" cx="145" cy="75.6" r="3.2" fill="#FFD25A" style="animation-delay:-1.8s"/>' +
      '<circle class="glowpulse" cx="158" cy="67" r="3.2" fill="#FF7A9A" style="animation-delay:-2.2s"/>' },

    { w: 260, h: 180, body: // bonfire on the beach
      warm(120, 100, 76) +
      sand(130, 124, 86, 27) +
      palm(204, 122, 0.7, -2.5) +
      '<ellipse cx="82" cy="124" rx="9" ry="5" fill="#8C9AA6"/><ellipse cx="160" cy="128" rx="8" ry="5" fill="#8C9AA6"/>' +
      '<path d="M104 118 L136 108 M104 108 L136 118" stroke="#4A2E14" stroke-width="5" stroke-linecap="round"/>' +
      '<g class="flicker">' +
      '<path d="M120 74 Q133 91 129 106 Q120 114 111 106 Q107 91 120 74 Z" fill="#FF6A2A"/>' +
      '<path d="M120 85 Q128 96 125 106 Q120 110 115 106 Q112 96 120 85 Z" fill="#FFB020"/>' +
      '<path d="M120 94 Q124 100 122 106 Q120 107 118 106 Q116 100 120 94 Z" fill="#FFF3B0"/></g>' +
      '<circle class="spark" cx="118" cy="70" r="1.6" fill="#FFC23D"/>' +
      '<circle class="spark" cx="126" cy="66" r="1.3" fill="#FFC23D" style="animation-delay:-0.7s"/>' +
      '<circle class="spark" cx="113" cy="62" r="1.4" fill="#FFE27A" style="animation-delay:-1.3s"/>' },

    { w: 330, h: 240, body: // lighthouse with keeper's hut
      '<path class="beam" d="M180 58 L330 18 L330 104 Z" fill="url(#rgBeam)"/>' +
      sand(160, 180, 130, 38) +
      '<ellipse cx="150" cy="170" rx="92" ry="24" fill="#2F8A5A"/>' +
      '<path d="M44 184 Q52 160 78 158 Q96 160 100 184 Z" fill="#6F7E8C"/>' +
      '<path d="M246 186 Q252 168 268 168 Q282 170 286 186 Z" fill="#5E6C7A"/>' +
      '<rect x="198" y="148" width="32" height="22" fill="#9A6A3C" stroke="#5A3A1E" stroke-width="2"/>' +
      '<path d="M193 150 L214 134 L235 150 Z" fill="#B5453F"/>' +
      warm(210, 158, 20, -0.8) + '<rect x="204" y="154" width="10" height="9" rx="1" fill="#FFD27A"/>' +
      '<path d="M146 170 L152 70 L176 70 L182 170 Z" fill="#F2F5FA" stroke="#9FB0C2" stroke-width="2"/>' +
      '<path d="M148.6 140 L179.9 140 L180.9 156 L147.6 156 Z" fill="#D63F45"/>' +
      '<path d="M150.4 104 L177.9 104 L178.7 118 L149.6 118 Z" fill="#D63F45"/>' +
      '<rect x="158" y="154" width="12" height="16" rx="2" fill="#FFB84D"/>' +
      '<rect x="148" y="66" width="32" height="6" rx="2" fill="#4A5866"/>' +
      warm(164, 59, 40) +
      '<rect x="152" y="50" width="24" height="18" rx="2" fill="#FFE27A" stroke="#4A5866" stroke-width="2"/>' +
      '<path d="M147 52 L164 32 L181 52 Z" fill="#D63F45" stroke="#A3333A" stroke-width="2" stroke-linejoin="round"/>' },

    { w: 250, h: 170, body: // lotus lagoon
      sand(120, 104, 58, 18) +
      '<ellipse cx="112" cy="98" rx="22" ry="7" fill="#2F8A5A"/>' +
      '<ellipse cx="40" cy="128" rx="14" ry="5" fill="#1F6B4C"/><ellipse cx="206" cy="134" rx="12" ry="4.5" fill="#1F6B4C"/>' +
      '<ellipse cx="176" cy="76" rx="11" ry="4" fill="#1F6B4C"/>' +
      lotus(62, 142, 0) + lotus(190, 112, -1) + lotus(150, 152, -2) + lotus(36, 92, -1.5) },

    { w: 250, h: 210, body: // palms with hanging lanterns
      sand(126, 160, 82, 27) +
      palm(98, 158, 1.05, -1) + palm(156, 156, 0.9, -3) +
      lantern(70, 102, '#FF8A3D', 0) + lantern(130, 98, '#FF5C8A', -0.8) + lantern(186, 96, '#FFC23D', -1.6) +
      firefly(40, 120, 0) + firefly(214, 130, -1.5) },

    { w: 240, h: 160, body: // bushes full of fireflies
      sand(120, 108, 72, 22) +
      '<circle cx="100" cy="94" r="16" fill="#1F6B4C"/><circle cx="122" cy="86" r="20" fill="#2F8A5A"/>' +
      '<circle cx="144" cy="96" r="14" fill="#1F6B4C"/><circle cx="118" cy="78" r="8" fill="#3E9E6B"/>' +
      '<circle cx="158" cy="110" r="4" fill="#FF7AA8"/><circle cx="86" cy="108" r="3.5" fill="#FFFFFF"/>' +
      firefly(92, 70, 0) + firefly(130, 62, -0.8) + firefly(156, 78, -1.6) + firefly(74, 88, -2.4) +
      firefly(110, 52, -3.1) + firefly(170, 92, -1.2) }
  ];

  const TREASURE = { w: 290, h: 210, body: // treasure spilling golden light
    sand(150, 146, 100, 34) + palm(88, 144, 0.85, -2.5) +
    '<circle class="glowpulse" cx="176" cy="112" r="56" fill="url(#rgGold)"/>' +
    '<rect x="152" y="118" width="48" height="28" rx="3" fill="#8A4F22" stroke="#4A2A10" stroke-width="3"/>' +
    '<path d="M150 118 Q154 94 176 92 Q198 94 202 118 Z" fill="#A9652E" stroke="#4A2A10" stroke-width="3" stroke-linejoin="round" transform="rotate(-18 152 118)"/>' +
    '<ellipse cx="176" cy="119" rx="22" ry="5" fill="#FFE27A"/>' +
    '<rect x="173" y="118" width="6" height="28" fill="#F2B127"/>' +
    '<circle cx="160" cy="116" r="3.5" fill="#FFD25A"/><circle cx="168" cy="113" r="3.5" fill="#FFE89A"/><circle cx="186" cy="114" r="3.5" fill="#FFD25A"/>' +
    '<circle cx="140" cy="150" r="3" fill="#FFD25A"/><circle cx="208" cy="150" r="3" fill="#FFD25A"/>' +
    '<path d="M112 160 l12 10 M124 160 l-12 10" stroke="#C0392B" stroke-width="3.5" stroke-linecap="round"/>' +
    firefly(220, 100, 0) + firefly(130, 96, -1.4) };

  const DOCK_SVG =
    '<svg viewBox="0 50 600 260" aria-hidden="true">' +
    '<ellipse cx="240" cy="200" rx="260" ry="145" fill="rgba(110,200,255,0.10)" stroke="rgba(140,230,255,0.28)" stroke-width="2"/>' +
    '<ellipse class="foam" cx="240" cy="204" rx="196" ry="100" fill="none" stroke="rgba(210,248,255,0.55)" stroke-width="3" stroke-dasharray="12 10" stroke-linecap="round"/>' +
    '<ellipse cx="246" cy="214" rx="176" ry="84" fill="#A88F66"/>' +
    '<ellipse cx="240" cy="200" rx="170" ry="78" fill="#D8C49A"/>' +
    '<ellipse cx="222" cy="186" rx="120" ry="46" fill="#E8D8B2"/>' +
    '<ellipse cx="180" cy="184" rx="78" ry="34" fill="#2F8A5A"/>' +
    '<ellipse cx="170" cy="176" rx="52" ry="20" fill="#3E9E6B"/>' +
    palm(150, 182, 1.3, 0) + palm(222, 176, 1.05, -2) +
    miniDiya(290, 236, 0) + miniDiya(320, 222, -0.6) +
    '<ellipse cx="378" cy="244" rx="12" ry="4" fill="rgba(170,230,255,0.4)"/>' +
    '<ellipse cx="476" cy="244" rx="12" ry="4" fill="rgba(170,230,255,0.4)"/>' +
    '<ellipse cx="562" cy="244" rx="12" ry="4" fill="rgba(170,230,255,0.4)"/>' +
    '<rect x="372" y="212" width="12" height="32" fill="#4A2E14"/>' +
    '<rect x="470" y="212" width="12" height="32" fill="#4A2E14"/>' +
    '<rect x="556" y="212" width="12" height="32" fill="#4A2E14"/>' +
    '<rect x="360" y="186" width="214" height="34" rx="4" fill="#8E5A2E" stroke="#5A3212" stroke-width="3"/>' +
    '<path d="M384 187 V219 M406 187 V219 M428 187 V219 M450 187 V219 M472 187 V219 M494 187 V219 M516 187 V219 M538 187 V219" stroke="#6E4220" stroke-width="2"/>' +
    '<rect x="488" y="150" width="10" height="44" rx="2" fill="#4A2E14"/>' +
    warm(556, 142, 46) +
    '<rect x="553" y="146" width="6" height="44" fill="#3A2410"/>' +
    '<rect x="546" y="130" width="20" height="18" rx="4" fill="#FFC861" stroke="#5A3212" stroke-width="2"/>' +
    '<path d="M544 131 L556 122 L568 131 Z" fill="#3A2410"/>' +
    '</svg>';

  const DEFS_SVG =
    '<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>' +
    '<radialGradient id="rgWarm"><stop offset="0" stop-color="#FFC861" stop-opacity="0.7"/><stop offset="0.45" stop-color="#FF9A3C" stop-opacity="0.22"/><stop offset="1" stop-color="#FF9A3C" stop-opacity="0"/></radialGradient>' +
    '<radialGradient id="rgPink"><stop offset="0" stop-color="#FF9EC4" stop-opacity="0.55"/><stop offset="1" stop-color="#FF9EC4" stop-opacity="0"/></radialGradient>' +
    '<radialGradient id="rgGold"><stop offset="0" stop-color="#FFE27A" stop-opacity="0.85"/><stop offset="0.5" stop-color="#FFC23D" stop-opacity="0.25"/><stop offset="1" stop-color="#FFC23D" stop-opacity="0"/></radialGradient>' +
    '<linearGradient id="rgBeam" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#FFE89A" stop-opacity="0.85"/><stop offset="1" stop-color="#FFE89A" stop-opacity="0"/></linearGradient>' +
    '</defs></svg>';

  const FLAG_SVG =
    '<svg viewBox="0 0 22 26" aria-hidden="true"><path d="M3 2 V24" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/>' +
    '<path d="M4 3 H19 L15 8.5 L19 14 H4 Z" fill="#FFD25A"/></svg>';

  const BOAT_SVG =
    '<svg viewBox="0 0 150 110" aria-hidden="true">' +
    '<defs><radialGradient id="boatLampGlow"><stop offset="0" stop-color="#FFC861" stop-opacity="0.75"/>' +
    '<stop offset="1" stop-color="#FFC861" stop-opacity="0"/></radialGradient></defs>' +
    '<circle cx="14" cy="30" r="30" fill="url(#boatLampGlow)"/>' +
    '<line x1="14" y1="34" x2="14" y2="62" stroke="#5A3212" stroke-width="3"/>' +
    '<rect x="8" y="21" width="12" height="15" rx="4" fill="#FFB84D" stroke="#8A4A1E" stroke-width="1.5"/>' +
    '<circle cx="14" cy="28.5" r="3.2" fill="#FFF3B0"/>' +
    '<line x1="52" y1="50" x2="22" y2="92" stroke="#7A4520" stroke-width="4" stroke-linecap="round"/>' +
    '<ellipse cx="20" cy="94" rx="10" ry="4.5" fill="#A9652E"/>' +
    '<rect x="62" y="34" width="30" height="36" rx="12" fill="#FF6B4A"/>' +
    '<line x1="77" y1="36" x2="77" y2="66" stroke="#FFD25A" stroke-width="3"/>' +
    '<circle cx="77" cy="24" r="12" fill="#F5C39C"/>' +
    '<circle cx="83" cy="25" r="1.7" fill="#2B1D14"/>' +
    '<path d="M79.5 29.5 Q83 32 86.5 29.5" stroke="#2B1D14" stroke-width="1.6" fill="none" stroke-linecap="round"/>' +
    '<path d="M62 19 Q77 0 92 19 Z" fill="#FFD25A"/>' +
    '<ellipse cx="77" cy="19" rx="21" ry="4.5" fill="#F2B127"/>' +
    '<path d="M18 60 L132 60 Q126 88 100 92 L50 92 Q24 88 18 60 Z" fill="#D9823F" stroke="#8A4A1E" stroke-width="3" stroke-linejoin="round"/>' +
    '<path d="M20 60 L130 60" stroke="#F2B26B" stroke-width="5" stroke-linecap="round"/>' +
    '<path d="M28 75 L122 75" stroke="#B5652A" stroke-width="2" stroke-linecap="round"/>' +
    '<path d="M84 44 Q93 50 101 46" stroke="#F5C39C" stroke-width="6" fill="none" stroke-linecap="round"/>' +
    '<line x1="99" y1="44" x2="128" y2="90" stroke="#7A4520" stroke-width="4.5" stroke-linecap="round"/>' +
    '<ellipse cx="130" cy="93" rx="11" ry="4.5" fill="#A9652E"/>' +
    '<path d="M0 88 Q12.5 81 25 88 T50 88 T75 88 T100 88 T125 88 T150 88 L150 110 L0 110 Z" fill="rgba(103,232,249,0.28)"/>' +
    '</svg>';

  const FISH_SVG = (flip, style) =>
    `<svg width="96" height="54" viewBox="0 0 96 54" style="${style}" aria-hidden="true"><g fill="rgba(150,220,255,0.16)"` +
    (flip ? ' transform="translate(96 0) scale(-1 1)"' : '') + '>' +
    '<path d="M40 14 Q55 4 70 14 Q55 24 40 14 Z"/><path d="M30 14 L40 7 L40 21 Z"/>' +
    '<path d="M10 32 Q25 22 40 32 Q25 42 10 32 Z"/><path d="M0 32 L10 25 L10 39 Z"/>' +
    '<path d="M56 40 Q71 30 86 40 Q71 50 56 40 Z"/><path d="M46 40 L56 33 L56 47 Z"/></g></svg>';


  /* ---------- helpers ---------- */
  const mk = (tag, cls) => {
    const el = document.createElement(tag);
    el.className = cls;
    return el;
  };
  const load = () => {
    try {
      const v = parseInt(localStorage.getItem(STORE_KEY), 10);
      return Number.isInteger(v) && v >= -1 && v < stops.length ? v : -1;
    } catch (e) { return -1; }
  };
  const save = (i) => {
    try { localStorage.setItem(STORE_KEY, String(i)); } catch (e) { /* storage blocked: fine */ }
  };

  /* ---------- 1. turn each node into a floating buoy ---------- */
  const LANTERNS = ['rani', 'indigo', 'plum', 'wine', 'ocean'];
  let lessonCount = 0;
  stops.forEach((stop) => {
    const node = stop.querySelector('.node');
    if (node && node.classList.contains('learn') && ![...node.classList].some((c) => c.startsWith('lantern-'))) {
      node.classList.add('lantern-' + LANTERNS[lessonCount % LANTERNS.length]);
      lessonCount++;
    }
    if (!node || node.parentElement.classList.contains('buoy')) return;
    const buoy = mk('span', 'buoy');
    node.parentNode.insertBefore(buoy, node);
    buoy.innerHTML = '<span class="ripple" aria-hidden="true"></span><span class="ripple r2" aria-hidden="true"></span>';
    buoy.appendChild(node);
    if (stop.classList.contains('locked')) node.setAttribute('aria-disabled', 'true');
    if (node.classList.contains('final')) stop.classList.add('final-stop');
  });

  const hasStatus = stops.some((s) => ['done', 'locked', 'current'].some((c) => s.classList.contains(c)));
  let current = stops.findIndex((s) => s.classList.contains('current'));
  if (current < 0 && hasStatus) {
    current = stops.findIndex((s) => !s.classList.contains('done') && !s.classList.contains('locked'));
    if (current >= 0) stops[current].classList.add('current');
  }

  /* ---------- 2. add scenery, dock and boat (after the stops, so the zig-zag stays the same) ---------- */
  const scene = mk('div', 'river-scene');
  scene.setAttribute('aria-hidden', 'true');
  scene.innerHTML =
    DEFS_SVG +
    '<svg class="river-route"><path/></svg>' +
    [[0.28, 46, -10, false], [0.52, 60, -35, true], [0.78, 52, -20, false]]
      .map(([top, dur, delay, flip]) =>
        `<div class="river-fish" style="top:${top * 100}%">` +
        FISH_SVG(flip, `animation-duration:${dur}s;animation-delay:${delay}s${flip ? ';animation-direction:reverse' : ''}`) +
        '</div>')
      .join('');
  const route = scene.querySelector('.river-route');
  const routePath = route.querySelector('path');

  const dock = mk('div', 'river-dock');
  dock.innerHTML = DOCK_SVG +
    `<button type="button" class="dock-sign" aria-label="Start: sail the boat back to the dock">${FLAG_SVG}START</button>`;

  const boat = mk('div', 'river-boat no-anim');
  boat.setAttribute('aria-hidden', 'true');
  boat.innerHTML = `<div class="boat-flip"><div class="boat-rock">${BOAT_SVG}</div></div>`;
  const boatFlip = boat.firstChild;

  river.append(scene, dock, boat);

  // night sky with stars, a moon, and the moon's shimmer on the water
  if (!document.querySelector('.night-sky')) {
    const sky = mk('div', 'night-sky');
    sky.setAttribute('aria-hidden', 'true');
    let skyHtml = '<span class="moon-glow"></span><span class="moon"></span>';
    for (let k = 0; k < 44; k++) {
      const x = ((k * 37.7) % 100).toFixed(1);
      const y = 6 + ((k * 53) % 215);
      const r = k % 5 === 0 ? 3 : k % 3 === 0 ? 2.4 : 1.6;
      skyHtml += `<span class="star" style="left:${x}%;top:${y}px;width:${r}px;height:${r}px;animation-delay:${-((k * 0.41) % 3).toFixed(2)}s"></span>`;
    }
    for (let k = 0; k < 9; k++) {
      const w = 70 - k * 6;
      skyHtml += `<span class="glint" style="left:calc(var(--moon-x) - ${w / 2}px + ${k % 2 ? 6 : -6}px);top:${246 + k * 18}px;width:${w}px;animation-delay:${-(k * 0.4).toFixed(1)}s"></span>`;
    }
    sky.innerHTML = skyHtml;
    document.body.prepend(sky);
  }

  // small ripples scattered over the water at random-looking spots
  if (!document.querySelector('.sea-marks')) {
    const marks = mk('div', 'sea-marks');
    marks.setAttribute('aria-hidden', 'true');
    let seed = 7;
    const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
    const shapes = [
      'M2 7 Q12 0 22 7',
      'M2 7 Q9 2 16 6 Q23 2 30 7',
      'M2 6 Q8 1 14 6'
    ];
    const count = Math.max(40, Math.min(200, Math.round(document.body.scrollHeight / 26)));
    let marksHtml = '';
    for (let k = 0; k < count; k++) {
      const shape = shapes[Math.floor(rnd() * shapes.length)];
      const scale = (0.7 + rnd() * 0.7).toFixed(2);
      const dur = (7 + rnd() * 5).toFixed(1);
      const delay = (-rnd() * 12).toFixed(1);
      const o = (0.35 + rnd() * 0.45).toFixed(2);
      marksHtml +=
        `<svg width="${Math.round(34 * scale)}" height="${Math.round(10 * scale)}" viewBox="0 0 34 10" ` +
        `style="left:${(rnd() * 98).toFixed(1)}%;top:${(rnd() * 99).toFixed(2)}%;--o:${o};animation-duration:${dur}s;animation-delay:${delay}s">` +
        `<path d="${shape}"/></svg>`;
    }
    marks.innerHTML = marksHtml;
    document.body.prepend(marks);
  }

  /* ---------- 3. positions ---------- */
  const rel = (el) => {
    const r = el.getBoundingClientRect();
    const b = river.getBoundingClientRect();
    return { x: r.left - b.left, y: r.top - b.top, w: r.width, h: r.height };
  };
  const buoyOf = (i) => stops[i].querySelector('.buoy') || stops[i];
  const centerOf = (i) => {
    const b = rel(buoyOf(i));
    return { x: b.x + b.w / 2, y: b.y + b.h / 2, b };
  };
  const dockEnd = () => {
    const d = rel(dock);
    return { x: d.x + d.w * (574 / 600), y: d.y + d.h * (203 - 50) / 260 };
  };

  const spot = (i) => {
    if (i < 0) {
      const e = dockEnd();
      return { x: e.x - BOAT_W + 4, y: e.y + 10 };
    }
    const c = centerOf(i);
    const boatOnLeft = c.x >= river.clientWidth / 2 - 4;
    return {
      x: boatOnLeft ? c.b.x - BOAT_W - 4 : c.b.x + c.b.w + 4,
      y: c.b.y + c.b.h - BOAT_H + 12
    };
  };

  let at = load();
  let facing = 1;

  const placeBoat = (animate) => {
    const p = spot(at);
    boat.classList.toggle('no-anim', !animate || reduceMotion);
    boat.style.transform = `translate(${p.x}px, ${p.y}px)`;
    boatFlip.style.transform = `scaleX(${facing})`;
  };

  const sailTo = (i) => {
    const from = spot(at);
    const to = spot(i);
    if (Math.abs(to.x - from.x) > 2) facing = to.x > from.x ? 1 : -1;
    at = i;
    save(i);
    placeBoat(true);
  };

  const drawRoute = () => {
    const pts = [dockEnd()].concat(stops.map((s, i) => centerOf(i)));
    let d = `M${pts[0].x} ${pts[0].y}`;
    for (let k = 1; k < pts.length; k++) {
      const a = pts[k - 1];
      const c = pts[k];
      const m = (c.y - a.y) / 2;
      d += ` C${a.x} ${a.y + m} ${c.x} ${c.y - m} ${c.x} ${c.y}`;
    }
    route.setAttribute('width', river.clientWidth);
    route.setAttribute('height', river.scrollHeight);
    routePath.setAttribute('d', d);
  };

  const placeIslands = () => {
    scene.querySelectorAll('.river-isle').forEach((n) => n.remove());
    const W = river.clientWidth;
    const b = river.getBoundingClientRect();
    const room = Math.min(b.left, document.documentElement.clientWidth - b.right);
    const wide = room > 150;
    const spots = [];

    if (wide) {
      // big screens: islands sit in the open sea either side of the path
      stops.forEach((s, i) => {
        const c = centerOf(i);
        spots.push({ side: i % 2 ? 'left' : 'right', y: c.y });
      });
    } else {
      // phones: smaller islands peeking in from the edges, between stops
      for (let i = 0; i < stops.length - 1; i += 2) {
        const a = centerOf(i);
        const c = centerOf(i + 1);
        const avg = (a.x + c.x) / 2 - W / 2;
        const side = avg > 10 ? 'left' : avg < -10 ? 'right' : (i % 4 ? 'left' : 'right');
        spots.push({ side, y: (a.y + c.y) / 2 });
      }
    }

    spots.forEach((sp, n) => {
      const isle = n === spots.length - 1 ? TREASURE : ISLES[n % ISLES.length];
      const s = wide ? Math.min(1, (room - 24) / isle.w) : 0.55;
      const w = isle.w * s;
      const h = isle.h * s;
      let x;
      if (wide) {
        // centre the island in the open sea beside the path, with a little wobble
        const free = room - w - 12;
        const wobble = free > 0 ? ((n * 47) % 41 - 20) / 20 * Math.min(free / 2, 40) : 0;
        const mid = room / 2 + w / 2 + wobble;
        x = sp.side === 'left' ? -mid : W + mid - w;
      } else {
        x = sp.side === 'left' ? -w * 0.12 : W - w * 0.88;
      }
      const y = sp.y - h / 2 + (wide ? ((n * 31) % 40) - 20 : 0);
      const el = mk('div', 'river-isle');
      el.style.cssText = `left:${x}px;top:${y}px;width:${w}px;height:${h}px`;
      el.innerHTML = `<svg viewBox="0 0 ${isle.w} ${isle.h}" width="${w}" height="${h}">${isle.body}</svg>`;
      scene.appendChild(el);
    });
  };

  const layout = () => {
    drawRoute();
    placeIslands();
    placeBoat(false);
  };

  /* ---------- 4. sailing ---------- */
  stops.forEach((stop, i) => {
    const node = stop.querySelector('.node');
    if (!node) return;
    node.addEventListener('click', (e) => {
      if (stop.classList.contains('locked')) {
        e.preventDefault();
        const b = buoyOf(i);
        b.classList.remove('shake');
        void b.offsetWidth; // restart the wiggle
        b.classList.add('shake');
        return;
      }
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      if (at === i) return; // already here: open the lesson straight away
      if (reduceMotion) { at = i; save(i); return; }
      const href = node.getAttribute('href');
      const leavesPage = node.tagName === 'A' && href && href.charAt(0) !== '#';
      if (leavesPage) e.preventDefault();
      sailTo(i);
      if (leavesPage) setTimeout(() => { window.location.href = node.href; }, 1300);
    });
  });

  dock.querySelector('.dock-sign').addEventListener('click', () => sailTo(-1));

  layout();
  // on arrival, the boat sails from where you left it to your next lesson
  if (current >= 0 && at !== current && !reduceMotion) {
    setTimeout(() => sailTo(current), 700);
  }

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(layout, 150);
  });
  window.addEventListener('load', layout);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(layout);
})();

