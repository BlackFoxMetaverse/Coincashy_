const fs = require('fs');
const files = [
  'src/features/landing/components/BusinessView.tsx',
  'src/features/landing/components/HomeView.tsx',
  'src/features/landing/components/PersonalView.tsx'
];

files.forEach(f => {
  let c = fs.readFileSync(f, 'utf8');
  c = c.replace(/style=\{\{(.*?--.*?)\}\}/g, 'style={{$1} as React.CSSProperties}');
  fs.writeFileSync(f, c);
  console.log('Fixed', f);
});
