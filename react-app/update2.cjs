const fs = require('fs');
let content = fs.readFileSync('src/pages/Index.jsx', 'utf8');

// Insert import if not exists
if (!content.includes('import CircularText')) {
    content = content.replace(
        "import TextType from '../components/TextType';",
        "import TextType from '../components/TextType';\nimport CircularText from '../components/CircularText';"
    );
}

// Add CircularText to the impact section
const target = `<div className="impact-top">`;
const replacement = `<div className="impact-top">
                <div style={{ position: 'absolute', right: '5%', top: '0%', opacity: 0.8, zIndex: 0, pointerEvents: 'none' }} className="desktop-only">
                    <div style={{ pointerEvents: 'auto' }}>
                        <CircularText
                          text="* THE * PROBIZ * APPROACH "
                          onHover="speedUp"
                          spinDuration={20}
                          className="custom-class"
                        />
                    </div>
                </div>`;

if (content.includes(target)) {
    content = content.replace(target, replacement);
}

fs.writeFileSync('src/pages/Index.jsx', content);
console.log('Added CircularText to Index.jsx');
