const fs = require('fs');
let content = fs.readFileSync('src/pages/Index.jsx', 'utf8');

const regex = /<div className="about-text">[\s\S]*?<\/div>/;

const replacement = `<div className="about-text" style={{ minHeight: '350px' }}>
                    <TextType 
                        text={\`ProBiz Knowledge Center was founded on a simple belief: real change does not happen through slide decks delivered and forgotten. It happens when consultants roll up their sleeves alongside their clients and work through every challenge together.\\n\\nWe are a Trivandrum-based consulting practice with deep roots in organizational development and a growing footprint in business excellence and experiential learning. Drawing on lateral thinking methodologies and cross-cultural expertise across India and the GCC region, we bring a perspective that is both globally informed and locally grounded.\\n\\nWhen you engage ProBiz, we do not arrive with a generic playbook. We take time to understand your business, your people and your systems before we co-design solutions with you. Our goal is to leave your organization stronger, more agile and fully equipped to continue growing without us.\`}
                        typingSpeed={15}
                        loop={false}
                        showCursor={true}
                        hideCursorWhileTyping={false}
                        as="p"
                        startOnVisible={true}
                    />
                </div>`;

content = content.replace(regex, replacement);
fs.writeFileSync('src/pages/Index.jsx', content);
console.log('Replaced about-text successfully');
