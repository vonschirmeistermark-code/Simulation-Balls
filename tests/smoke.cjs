// Headless check: loads the app, reports script errors, then runs every
// template's physics for a while and prints ball counts over time.
// Usage: node tests/smoke.cjs [seconds]
const { chromium } = require('playwright');
const path = require('node:path');

const seconds = Number(process.argv[2] || 40);
const file = path.resolve(__dirname, '..', 'index.html');
(async () => {
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 860 } });
const errors = [];
page.on('pageerror', e => errors.push(e.message));
page.on('console', m => { if (m.type() === 'error' && !/fonts\.g/.test(m.text())) errors.push(m.text()); });
await page.goto('file://' + file);
await page.waitForFunction(() => window.SimLab);

const results = await page.evaluate((seconds) => {
  const { Sim, TEMPLATES } = window.SimLab;
  const out = [];
  for (const tpl of TEMPLATES) {
    const sim = new Sim(tpl.make());
    const marks = [];
    const t0 = performance.now();
    let bad = false;
    for (let s = 1; s <= seconds * 240; s++) {
      sim.step();
      if (s % (240 * 5) === 0) marks.push(sim.balls.length);
      if (sim.ended) { marks.push('end@' + sim.t.toFixed(1)); break; }
      if (s % 240 === 0 && sim.balls.some(b => !Number.isFinite(b.x) || !Number.isFinite(b.vx))) { bad = true; break; }
    }
    const ms = performance.now() - t0;
    out.push({ key: tpl.key, marks: marks.join(' '), peak: sim.peak, finale: sim.finale ? sim.finale.reason + '@' + sim.finale.t0.toFixed(1) : '-', nan: bad, msPerSimSec: (ms / sim.t).toFixed(1) });
  }
  return out;
}, seconds);
console.table(results);
console.log(errors.length ? 'ERRORS:\n' + errors.join('\n') : 'No page errors');
await browser.close();
process.exit(errors.length || results.some(r => r.nan) ? 1 : 0);
})();
