const fs = require('fs');
const path = require('path');

const files = [
  'src/features/landing/components/HomeView.tsx',
  'src/features/landing/components/PersonalView.tsx',
  'src/features/landing/components/BusinessView.tsx',
  'src/components/Nav.tsx',
  'src/components/Footer.tsx'
];

files.forEach(f => {
  if (!fs.existsSync(f)) return;
  let c = fs.readFileSync(f, 'utf8');
  let changed = false;

  // Add import if needed
  if (c.includes('<img') && !c.includes("import Image from 'next/image'")) {
    c = "import Image from 'next/image';\n" + c;
    changed = true;
  }

  // Replace <img ... /> with <Image ... />
  // We need to parse attributes carefully.
  // We'll use a regex that matches <img ... /> or <img ...>...</img>
  c = c.replace(/<img([^>]+)\/?>/g, (match, attrs) => {
    changed = true;
    
    // Fix src attribute: add leading slash if it starts with media/
    attrs = attrs.replace(/src="media\//g, 'src="/media/');
    
    // Check if width and height are provided in attributes
    let hasWidth = /width=/.test(attrs);
    let hasHeight = /height=/.test(attrs);
    
    // If not, try to extract from style={{ height: 26, width: 'auto' }}
    if (!hasWidth || !hasHeight) {
      if (/style=\{\{[^}]*height:\s*26/.test(attrs)) {
        if (!hasHeight) attrs += ' height={26}';
        if (!hasWidth) attrs += ' width={100}'; // arbitrary width, style auto overrides it
      } else {
        // Fallback arbitrary dimensions to satisfy Next.js
        if (!hasHeight) attrs += ' height={100}';
        if (!hasWidth) attrs += ' width={100}';
      }
    }
    
    return `<Image${attrs} />`;
  });

  if (changed) {
    fs.writeFileSync(f, c);
    console.log('Fixed images in', f);
  }
});
