const fs = require('fs');
let content = fs.readFileSync('src/pages/Learning.jsx', 'utf8');

const regex = /<div style={{ position: "absolute", bottom: "30px", left: "-30px", backgroundColor: "var\(--color-orange\)", color: "#fff", padding: "2rem", borderRadius: "4px", boxShadow: "0 10px 30px rgba\(211, 84, 0, 0\.3\)", maxWidth: "200px" }}>[\s\S]*?<\/div>/;

if (regex.test(content)) {
    content = content.replace(regex, '');
    fs.writeFileSync('src/pages/Learning.jsx', content);
    console.log('Successfully removed the box');
} else {
    console.log('Regex match failed');
}
