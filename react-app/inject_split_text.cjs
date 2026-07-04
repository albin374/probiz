const fs = require('fs');

let content = fs.readFileSync('src/pages/Index.jsx', 'utf8');

if (!content.includes("import SplitText")) {
    content = content.replace("import React from 'react';", "import React from 'react';\nimport SplitText from '../components/SplitText';");
}

const target = `<h1 className="hero-headline">
                    <span className="desktop-nowrap">Transforming Businesses.</span><br />
                    Empowering People.<br />
                    Delivering <span className="highlight italic">Excellence.</span>
                </h1>`;

const replacement = `<h1 className="hero-headline" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <span className="desktop-nowrap" style={{ display: 'inline-flex' }}>
                        <SplitText tag="span" text="Transforming Businesses." delay={30} textAlign="left" />
                    </span>
                    <span style={{ display: 'inline-flex' }}>
                        <SplitText tag="span" text="Empowering People." delay={30} textAlign="left" />
                    </span>
                    <span style={{ display: 'inline-flex', gap: '8px' }}>
                        <SplitText tag="span" text="Delivering" delay={30} textAlign="left" />
                        <SplitText tag="span" text="Excellence." delay={30} className="highlight italic" textAlign="left" />
                    </span>
                </h1>`;

if (content.includes(target)) {
    content = content.replace(target, replacement);
    fs.writeFileSync('src/pages/Index.jsx', content);
    console.log('Successfully replaced hero-headline');
} else {
    console.log('Target string not found');
}
