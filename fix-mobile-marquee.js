const fs = require('fs');
let c = fs.readFileSync('src/app/globals.css', 'utf8');
c += `
@media (max-width: 768px) {
  .marquee-track { animation: marquee var(--dur, 40s) linear infinite !important; width: max-content !important; flex-wrap: nowrap !important; }
  .marquee {
    -webkit-mask-image: linear-gradient(90deg, transparent, #000 15%, #000 85%, transparent) !important;
    mask-image: linear-gradient(90deg, transparent, #000 15%, #000 85%, transparent) !important;
    width: 100vw !important;
    margin-left: -5vw !important;
    padding-bottom: 30px;
  }
  .marquee-group[aria-hidden="true"] { display: flex !important; }
  .marquee-group { flex-wrap: nowrap !important; }
  .hero-proof-label { font-size: 0.75rem !important; letter-spacing: 0.15em !important; opacity: 0.5; margin-bottom: 24px !important; display: block; text-align: center; }
  
  .hero-inner { gap: 32px; padding-top: 20px; }
  .hero-proof { margin-bottom: 0px !important; }
}
`;
fs.writeFileSync('src/app/globals.css', c);
console.log('Added CSS rules');
