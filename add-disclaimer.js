const fs = require('fs');
const files = ['src/app/page.tsx', 'src/app/about/page.tsx'];
const txt = '<p><strong>Disclaimer</strong><br/>Coincashy Sp. z o.o. only provides services to customers resident in the UK who fall within an exemption available under the UK financial promotion regime (Investment professionals, High net worth companies, unincorporated associations etc., Certified sophisticated investors, Communication to overseas recipients, etc).</p>';

files.forEach(f => {
    let c = fs.readFileSync(f, 'utf8');
    c = c.replace(/<\/div>\s*<\/footer>/, txt + '\n      </div>\n    </footer>');
    fs.writeFileSync(f, c);
});
console.log('Disclaimer added.');
