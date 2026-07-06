const fs = require('fs'); 
let lines = fs.readFileSync('src/pages/Leaders.jsx', 'utf-8').split(/\r?\n/); 
lines.splice(176, 1); 
lines.splice(97, 1); 
lines.splice(155, 0, '                    <img src="assets/images/img12.PNG" alt="Abhav R Nair" className="mobile-only" style={{ width: "100%", marginBottom: "1.5rem", borderRadius: "8px" }} />'); 
lines.splice(77, 0, '                    <img src="assets/images/img11.jpeg" alt="Rajit Karunakaran" className="mobile-only" style={{ width: "100%", marginBottom: "1.5rem", borderRadius: "8px" }} />'); 
fs.writeFileSync('src/pages/Leaders.jsx', lines.join('\n'));
