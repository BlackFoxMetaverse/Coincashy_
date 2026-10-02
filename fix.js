const fs = require('fs');
const lines = fs.readFileSync('src/app/globals.css', 'utf8').split('\n');
// the file has 1011 lines, but we want to cut it at 1007 (so index 1007 is where we start replacing)
fs.writeFileSync('src/app/globals.css', lines.slice(0, 1007).join('\n') + '\n:root[data-theme="light"] .partner-logo { filter: invert(1); opacity: 0.6; }\n@media (max-width: 768px) { .hero { min-height: 100svh; padding-top: 100px; padding-bottom: 0px; } .hero-inner { justify-content: space-between; gap: 40px; padding-top: 40px; } .hero-proof { margin-bottom: 20px; } }\n');
