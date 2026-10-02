const fs = require('fs');
const files = ['src/app/page.tsx', 'src/app/about/page.tsx'];
const replacements = {
    'Γé¼': '€',
    'ΓÇó': '•',
    'Γëê': '≈',
    'ΓêÆ': '−',
    'ΓåÆ': '→',
    '┬╖': '·',
    'Γé┐': '₿',
    'Γé«': '₮',
    'ΓùÄ': '◎',
    'Γçä': '⇄',
    'ΓÇª': '…',
    '┬⌐': '©',
    '┬á': ' ' // non-breaking space
};

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    for (const [bad, good] of Object.entries(replacements)) {
        content = content.split(bad).join(good);
    }
    fs.writeFileSync(file, content, 'utf8');
});
console.log('Encoding fixed.');
