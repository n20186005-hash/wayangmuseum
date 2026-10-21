import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const code = fs.readFileSync(process.env.CONSENT_FILE || 'public/js/consent.js', 'utf8');
const key = 'wayang_cookie_preferences', gaId = 'G-HXM22WWPKP';
function fixture({ lang = 'en', shared = new Map(), session = new Map(), failures = {} } = {}) {
  const scripts = [], listeners = {}, status = { textContent: '' }, checkbox = { checked: false };
  const storage = (map, kind) => ({
    getItem(k) { if (failures[kind + 'Read']) throw Error('read'); return map.get(k) ?? null; },
    setItem(k, v) { if (failures[kind + 'Write']) throw Error('write'); map.set(k, v); },
    removeItem(k) { if (failures[kind + 'Remove'] || failures[kind + 'Write']) throw Error('remove'); map.delete(k); }
  });
  const context = { localStorage: storage(shared, 'local'), sessionStorage: storage(session, 'session'), location: { hostname: 'wayangmuseum.com' },
    document: { documentElement: { lang }, cookie: '', createElement: () => ({}), head: { appendChild: s => scripts.push(s) },
      querySelectorAll: selector => selector === '[data-consent-status]' ? [status] : [],
      getElementById: id => id === 'analytics' ? checkbox : null },
    addEventListener: (name, fn) => { listeners[name] = fn; } };
  context.window = context; vm.createContext(context); vm.runInContext(code, context);
  return { context, shared, session, scripts, status, checkbox, failures, listeners,
    reload: () => fixture({ lang, shared, session, failures }),
    update: value => listeners.storage({ key, newValue: value }),
    choice: value => context.WayangConsent.save(value),
    allowed: () => context.WayangConsent.read().analytics,
    runtime: () => context.dataLayer?.filter(args => args[0] === 'consent').at(-1)?.[2].analytics_storage };
}
for (const lang of ['en', 'id']) {
  const x = fixture({ lang }); assert.equal(x.scripts.length, 0); assert.equal(x.allowed(), false);
  x.choice(true); assert.equal(x.scripts.length, 1); assert.equal(x.runtime(), 'granted');
  x.choice(false); assert.equal(x.runtime(), 'denied'); assert.equal(x.context['ga-disable-' + gaId], true);
  x.choice(true); assert.equal(x.runtime(), 'granted'); assert.equal(x.scripts.length, 1); assert.equal(x.checkbox.checked, true);
  for (const dualFailure of [false, true]) {
    const y = fixture({ lang, shared: new Map([[key, '{"analytics":true}']]) });
    y.failures.localWrite = true; y.failures.sessionWrite = dualFailure;
    const result = y.choice(false); assert.equal(result.saved, false); assert.equal(y.allowed(), false); assert.equal(y.runtime(), 'denied');
    assert.match(y.status.textContent, dualFailure ? /on this page|halaman ini/ : /this tab|tab ini/);
    vm.runInContext(code, y.context); assert.equal(y.allowed(), false); assert.equal(y.scripts.length, 1);
    if (!dualFailure) { const reloaded = y.reload(); assert.equal(reloaded.allowed(), false); assert.equal(reloaded.scripts.length, 0); }
  }
  for (const failure of ['sessionRead', 'localRead']) {
    const y = fixture({ lang, shared: new Map([[key, '{"analytics":true}']]), failures: { [failure]: true } });
    assert.equal(y.scripts.length, 0); assert.equal(y.choice(true).saved, false); assert.equal(y.allowed(), false);
  }
  const shared = new Map([[key, '{"analytics":false}']]);
  const a = fixture({ lang, shared }), b = fixture({ lang, shared });
  a.choice(false); a.failures.sessionRemove = true;
  assert.equal(a.choice(true).saved, false); assert.equal(JSON.parse(shared.get(key)).analytics, false);
  b.update(shared.get(key)); assert.equal(b.scripts.length, 0); assert.equal(a.checkbox.checked, false);
  a.failures.sessionRemove = false; a.choice(true); b.update(shared.get(key));
  assert.equal(a.runtime(), 'granted');
  // Other tabs retain their own refusal until the visitor explicitly allows there.
  assert.equal(b.allowed(), false); b.choice(true); assert.equal(b.runtime(), 'granted');
  a.choice(false); b.update(shared.get(key)); assert.equal(b.runtime(), 'denied'); assert.equal(b.checkbox.checked, false);
  assert.match(b.status.textContent, /rejected|ditolak/);
  const malformed = fixture({ lang, shared: new Map([[key, 'broken']]) }); assert.equal(malformed.scripts.length, 0);
  console.log(`${lang}: PASS default denial, single-library regrant, withdrawal write failures, retained-document veto, full reload session veto, independent storage read failures, veto-clear failure before shared grant, cross-tab denial/UI, malformed preference`);
}
