const fs = require('fs');
let content = fs.readFileSync('src/pages/Index.jsx', 'utf8');

if (!content.includes("import TextType")) {
    content = content.replace("import React from 'react';", "import React from 'react';\nimport TextType from '../components/TextType';");
}
if (!content.includes("import CircularText")) {
    content = content.replace("import React from 'react';", "import React from 'react';\nimport CircularText from '../components/CircularText';");
}

// 1. TextType H2
content = content.replace(
    /<h2 className="section-heading">A Different Kind of Consulting Partner<\/h2>/g,
    `<h2 className="section-heading">
                    <TextType 
                        text="A Different Kind of Consulting Partner"
                        typingSpeed={50}
                        loop={false}
                        showCursor={false}
                        as="span"
                        startOnVisible={true}
                    />
                </h2>`
);

// 2. CircularText
const targetCircular = `<h4 className="section-eyebrow">The ProBiz Approach</h4>`;
const replacementCircular = `<div style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
                        <h4 className="section-eyebrow">The ProBiz Approach</h4>
                        <div style={{ position: 'absolute', right: '0', top: '-60px', zIndex: 10 }} className="desktop-only">
                            <CircularText
                                text="* THE * PROBIZ * APPROACH "
                                onHover="speedUp"
                                spinDuration={20}
                                className=""
                            />
                        </div>
                    </div>`;

if (content.includes(targetCircular)) {
    content = content.replace(targetCircular, replacementCircular);
}

fs.writeFileSync('src/pages/Index.jsx', content);
console.log('Fixed all issues');
