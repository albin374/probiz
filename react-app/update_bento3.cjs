const fs = require('fs');
let content = fs.readFileSync('src/pages/Index.jsx', 'utf8');
const regex = /<div className="services-grid">[\s\S]*?<\/section>/;
const replacement = `<div className="services-grid" style={{ display: 'block', padding: '0', maxWidth: '100%' }}>
                <MagicBento 
                    cards={serviceCards}
                    textAutoHide={false}
                    enableStars={true}
                    enableSpotlight={true}
                    enableBorderGlow={true}
                    enableTilt={true}
                    enableMagnetism={true}
                    clickEffect={true}
                    spotlightRadius={400}
                    particleCount={12}
                    glowColor="255, 122, 0"
                />
            </div>
        </div>
    </section>`;
if (regex.test(content)) {
    content = content.replace(regex, replacement);
    fs.writeFileSync('src/pages/Index.jsx', content);
    console.log('Successfully replaced services grid via regex');
} else {
    console.log('Regex match failed');
}
