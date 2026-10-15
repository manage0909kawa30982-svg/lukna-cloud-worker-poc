'use strict';
// Reads TAP files and emits a GitHub Actions error annotation for each failing test (name + first error line).
// LUKNA reads these annotations (public API) and uses them as the re-request reason. Exit 1 if any test failed.
const fs = require('node:fs');
let failed = 0;
for (const file of process.argv.slice(2)) {
  const lines = fs.existsSync(file) ? fs.readFileSync(file, 'utf8').split('\n') : [];
  if (!lines.some((l) => /^# (pass|fail) \d+/.test(l))) { console.log(`::error title=${file}::no TAP summary (tests did not run)`); failed++; continue; }
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(/^\s*not ok \d+ - (.*)$/);
    if (!m) continue;
    failed++;
    let msg = '';
    for (let j = i + 1; j < Math.min(lines.length, i + 40); j++) {
      const e = lines[j].match(/^\s*error: ['"|]?(.*?)['"]?$/);
      if (e) { msg = e[1].trim() || (lines[j + 1] || '').trim(); break; }
    }
    const clean = (s) => String(s).replace(/[\r\n%:,]/g, ' ').slice(0, 200);
    console.log(`::error title=${clean(file)}::${clean(m[1])} - ${clean(msg)}`);
  }
}
process.exit(failed ? 1 : 0);
