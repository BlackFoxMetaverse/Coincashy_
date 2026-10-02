const fs = require('fs');
const files = ['src/app/page.tsx', 'src/app/about/page.tsx'];

files.forEach(f => {
    let c = fs.readFileSync(f, 'utf8');
    // Remove the incorrectly placed disclaimer
    c = c.replace(/<p><strong>Disclaimer<\/strong><br\/>Coincashy Sp\. z o\.o\.[^<]+<\/p>\n/, '');
    
    // Add it correctly into .f-legal
    const txt = '<p><strong>Disclaimer</strong><br/>Coincashy Sp. z o.o. only provides services to customers resident in the UK who fall within an exemption available under the UK financial promotion regime (Investment professionals, High net worth companies, unincorporated associations etc., Certified sophisticated investors, Communication to overseas recipients, etc).</p>';
    c = c.replace(/(<div className="f-legal">\s*<p>.*?<\/p>\s*<p>.*?<\/p>\n)/s, '$1        ' + txt + '\n');
    fs.writeFileSync(f, c);
});
console.log('Disclaimer fixed.');
