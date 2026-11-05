river.js: adds the islands, start dock, sea route and the boat to the river page.
   Add this line to the river page only, just before </body>:
     <script src="river.js" defer></script>

   Optional: put a class on each .stop to show progress:
     class="stop done"     finished (green check)
     class="stop current"  up next (glowing). If you leave this out, the first
                           stop that isn't done or locked glows.
     class="stop locked"   can't open yet (frosted buoy with a lock)
*/
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
    '<path d="M0 0 Q-8 -40 6 -80" stroke="#8B5A2B" stroke-width="8" fill="none" stroke-linecap="round"/>' +
    '<path d="M6 -80 Q-24 -96 -52 -72 Q-24 -86 6 -76 Z" fill="#2E9E62"/>' +
    '<path d="M6 -80 Q36 -98 64 -74 Q34 -86 6 -76 Z" fill="#37B06E"/>' +
    '<path d="M6 -80 Q28 -70 42 -42 Q20 -66 4 -76 Z" fill="#2A8F59"/>' +
    '<path d="M6 -80 Q-18 -72 -30 -44 Q-8 -68 8 -76 Z" fill="#45C07C"/></g></g>';

  const sand = (cx, cy, rx, ry) =>
    `<ellipse cx="${cx}" cy="${cy}" rx="${rx * 1.3}" ry="${ry * 1.55}" fill="rgba(200,252,242,0.45)"/>` +
    `<ellipse cx="${cx + 3}" cy="${cy + 6}" rx="${rx + 4}" ry="${ry + 4}" fill="#E0BC72"/>` +
    `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="#F7E2A8"/>`;

  const ISLES = [
    { w: 270, h: 210, body: // green hill
      sand(135, 146, 100, 36) +
      '<path d="M55 150 Q80 72 135 68 Q190 72 215 150 Z" fill="#4DB874"/>' +
      '<path d="M82 132 Q100 90 135 84 Q150 84 160 92" stroke="#74D191" stroke-width="8" fill="none" stroke-linecap="round"/>' +
      '<circle cx="70" cy="148" r="14" fill="#3FA866"/><circle cx="200" cy="148" r="12" fill="#3FA866"/><circle cx="186" cy="152" r="9" fill="#5CC27E"/>' +
      palm(138, 74, 0.7, -3) },
    { w: 300, h: 200, body: // straw hut
      sand(150, 142, 104, 34) +
      '<ellipse cx="140" cy="136" rx="80" ry="18" fill="#FCEFC6"/>' +
      palm(78, 140, 0.85, -1.5) +
      '<rect x="132" y="94" width="64" height="46" fill="#C98A4B" stroke="#7A4A22" stroke-width="3"/>' +
      '<rect x="155" y="112" width="18" height="28" rx="2" fill="#6E3F18"/>' +
      '<path d="M120 98 L164 56 L208 98 Z" fill="#E8C46A" stroke="#B8913A" stroke-width="3" stroke-linejoin="round"/>' +
      '<path d="M140 86 L188 86 M130 94 L198 94" stroke="#C9A24A" stroke-width="2.5"/>' },
    { w: 330, h: 240, body: // lighthouse
      '<path class="beam" d="M180 58 L330 22 L330 100 Z" fill="rgba(255,240,170,0.5)"/>' +
      sand(160, 180, 130, 38) +
      '<ellipse cx="150" cy="170" rx="92" ry="24" fill="#4DB874"/>' +
      '<path d="M44 184 Q52 160 78 158 Q96 160 100 184 Z" fill="#7C8D9E"/>' +
      '<path d="M232 186 Q240 166 260 166 Q276 168 280 186 Z" fill="#6F8193"/>' +
      '<path d="M146 170 L152 70 L176 70 L182 170 Z" fill="#FFFFFF" stroke="#C9D6E3" stroke-width="2"/>' +
      '<path d="M148.6 140 L179.9 140 L180.9 156 L147.6 156 Z" fill="#E5484D"/>' +
      '<path d="M150.4 104 L177.9 104 L178.7 118 L149.6 118 Z" fill="#E5484D"/>' +
      '<rect x="158" y="154" width="12" height="16" rx="2" fill="#6E3F18"/>' +
      '<rect x="148" y="66" width="32" height="6" rx="2" fill="#5A6B7C"/>' +
      '<rect x="152" y="50" width="24" height="18" rx="2" fill="#FFE27A" stroke="#5A6B7C" stroke-width="2"/>' +
      '<path d="M147 52 L164 32 L181 52 Z" fill="#E5484D" stroke="#B5363A" stroke-width="2" stroke-linejoin="round"/>' },
    { w: 260, h: 170, body: // beach umbrella
      sand(130, 118, 80, 25) +
      '<rect x="86" y="108" width="40" height="15" rx="3" fill="#4FA3F7" transform="rotate(-6 106 115)"/>' +
      '<path d="M90 112 L122 108" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/>' +
      '<line x1="152" y1="120" x2="152" y2="62" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round"/>' +
      '<path d="M110 70 Q152 26 194 70 Z" fill="#FF6B4A"/>' +
      '<path d="M152 33 Q142 52 138 70 L166 70 Q162 52 152 33 Z" fill="#FFF4D6"/>' +
      '<path d="M182 128 l4 -9 l4 9 l-9 -6 h10 z" fill="#FF8A65"/>' },
    { w: 240, h: 190, body: // palm islet
      sand(130, 140, 74, 25) + palm(128, 138, 1, -1) },
    { w: 200, h: 120, body: // rocks
      '<ellipse cx="100" cy="86" rx="92" ry="22" fill="rgba(255,255,255,0.35)"/>' +
      '<path d="M30 86 Q36 40 70 36 Q98 34 108 62 Q112 80 104 88 Z" fill="#6F8193"/>' +
      '<path d="M44 70 Q52 46 72 44 Q86 44 92 56" stroke="#95A6B6" stroke-width="5" fill="none" stroke-linecap="round"/>' +
      '<path d="M100 88 Q110 58 136 58 Q160 60 166 88 Z" fill="#5C6E80"/>' +
      '<ellipse cx="100" cy="90" rx="78" ry="9" fill="#FFFFFF" opacity="0.7"/>' },
    { w: 240, h: 150, body: // bushy sandbar
      sand(120, 100, 70, 21) +
      '<circle cx="102" cy="88" r="15" fill="#3FA866"/><circle cx="122" cy="80" r="18" fill="#4DB874"/>' +
      '<circle cx="142" cy="90" r="13" fill="#3FA866"/><circle cx="118" cy="74" r="7" fill="#74D191"/>' }
  ];

  const TREASURE = { w: 290, h: 210, body:
    sand(150, 144, 100, 34) + palm(92, 142, 0.85, -2.5) +
    '<rect x="152" y="118" width="46" height="28" rx="3" fill="#9A5A26" stroke="#5A3212" stroke-width="3"/>' +
    '<path d="M152 120 Q175 96 198 120 Z" fill="#B97A43" stroke="#5A3212" stroke-width="3" stroke-linejoin="round"/>' +
    '<rect x="172" y="106" width="6" height="40" fill="#F2B127"/>' +
    '<rect x="171" y="124" width="8" height="9" rx="1" fill="#FFD25A" stroke="#5A3212" stroke-width="1.5"/>' +
    '<circle cx="208" cy="110" r="3" fill="#FFF4C2"/><circle cx="146" cy="108" r="2.5" fill="#FFF4C2"/>' +
    '<path d="M112 158 l12 10 M124 158 l-12 10" stroke="#C0392B" stroke-width="3.5" stroke-linecap="round"/>' };

  const DOCK_SVG =
    '<svg viewBox="0 50 600 260" aria-hidden="true">' +
    '<ellipse cx="240" cy="200" rx="260" ry="145" fill="rgba(190,252,242,0.45)"/>' +
    '<ellipse cx="240" cy="200" rx="210" ry="112" fill="rgba(214,255,246,0.55)"/>' +
    '<ellipse cx="246" cy="214" rx="176" ry="84" fill="#E0BC72"/>' +
    '<ellipse cx="240" cy="200" rx="170" ry="78" fill="#F7E2A8"/>' +
    '<ellipse cx="222" cy="186" rx="120" ry="46" fill="#FCEFC6"/>' +
    '<ellipse cx="180" cy="184" rx="78" ry="34" fill="#4DB874"/>' +
    '<ellipse cx="170" cy="176" rx="52" ry="20" fill="#74D191"/>' +
    palm(150, 182, 1.3, 0) + palm(222, 176, 1.05, -2) +
    '<path d="M312 232 l5 -11 l5 11 l-11 -7 h12 z" fill="#FF8A65"/>' +
    '<ellipse cx="378" cy="244" rx="12" ry="4" fill="rgba(255,255,255,0.5)"/>' +
    '<ellipse cx="476" cy="244" rx="12" ry="4" fill="rgba(255,255,255,0.5)"/>' +
    '<ellipse cx="562" cy="244" rx="12" ry="4" fill="rgba(255,255,255,0.5)"/>' +
    '<rect x="372" y="212" width="12" height="32" fill="#6E4220"/>' +
    '<rect x="470" y="212" width="12" height="32" fill="#6E4220"/>' +
    '<rect x="556" y="212" width="12" height="32" fill="#6E4220"/>' +
    '<rect x="360" y="186" width="214" height="34" rx="4" fill="#B97A43" stroke="#7A4A22" stroke-width="3"/>' +
    '<path d="M384 187 V219 M406 187 V219 M428 187 V219 M450 187 V219 M472 187 V219 M494 187 V219 M516 187 V219 M538 187 V219" stroke="#8E5A2E" stroke-width="2"/>' +
    '<rect x="488" y="150" width="10" height="44" rx="2" fill="#6E3F18"/>' +
    '</svg>';

  const FLAG_SVG =
    '<svg viewBox="0 0 22 26" aria-hidden="true"><path d="M3 2 V24" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/>' +
    '<path d="M4 3 H19 L15 8.5 L19 14 H4 Z" fill="#FFD25A"/></svg>';

  const BOAT_SVG =
    '<svg viewBox="0 0 150 110" aria-hidden="true">' +
    '<ellipse cx="75" cy="97" rx="58" ry="8" fill="rgba(10,40,90,0.28)"/>' +
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
    '<path d="M0 88 Q12.5 81 25 88 T50 88 T75 88 T100 88 T125 88 T150 88 L150 110 L0 110 Z" fill="rgba(255,255,255,0.3)"/>' +
    '</svg>';

  const FISH_SVG = (flip, style) =>
    `<svg width="96" height="54" viewBox="0 0 96 54" style="${style}" aria-hidden="true"><g fill="rgba(8,45,100,0.22)"` +
    (flip ? ' transform="translate(96 0) scale(-1 1)"' : '') + '>' +
    '<path d="M40 14 Q55 4 70 14 Q55 24 40 14 Z"/><path d="M30 14 L40 7 L40 21 Z"/>' +
    '<path d="M10 32 Q25 22 40 32 Q25 42 10 32 Z"/><path d="M0 32 L10 25 L10 39 Z"/>' +
    '<path d="M56 40 Q71 30 86 40 Q71 50 56 40 Z"/><path d="M46 40 L56 33 L56 47 Z"/></g></svg>';

  const GULL_SVG =
    '<svg width="40" height="20" viewBox="0 0 40 20" aria-hidden="true"><path d="M2 16 Q10 4 18 16 Q26 4 34 16" stroke="#FFFFFF" stroke-width="3" fill="none" stroke-linecap="round"/></svg>';

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
  stops.forEach((stop) => {
    const node = stop.querySelector('.node');
    if (!node || node.parentElement.classList.contains('buoy')) return;
    const buoy = mk('span', 'buoy');
    node.parentNode.insertBefore(buoy, node);
    buoy.innerHTML = '<span class="ripple" aria-hidden="true"></span><span class="ripple r2" aria-hidden="true"></span>';
    buoy.appendChild(node);
    if (stop.classList.contains('locked')) node.setAttribute('aria-disabled', 'true');
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
    '<svg class="river-route"><path/></svg>' +
    [[0.28, 46, -10, false], [0.52, 60, -35, true], [0.78, 52, -20, false]]
      .map(([top, dur, delay, flip]) =>
        `<div class="river-fish" style="top:${top * 100}%">` +
        FISH_SVG(flip, `animation-duration:${dur}s;animation-delay:${delay}s${flip ? ';animation-direction:reverse' : ''}`) +
        '</div>')
      .join('') +
    [['8%', '150px', 0], ['16%', '180px', -3], ['86%', '38%', -5], ['4%', '64%', -2]]
      .map(([l, t, d]) => `<div class="river-gull" style="left:${l};top:${t};animation-delay:${d}s">${GULL_SVG}</div>`)
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
    const wide = room > 170;
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
      const s = wide ? Math.min(1, (room - 30) / isle.w) : 0.6;
      const w = isle.w * s;
      const h = isle.h * s;
      let x;
      if (wide) {
        const push = Math.max(0, Math.min((n * 47) % 50, room - w - 30));
        x = sp.side === 'left' ? -w - 16 - push : W + 16 + push;
      } else {
        x = sp.side === 'left' ? -w * 0.3 : W - w * 0.7;
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
