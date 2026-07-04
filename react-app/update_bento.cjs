const fs = require('fs');

const svg1 = `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"></path><path d="M9 8h1"></path><path d="M9 12h1"></path><path d="M9 16h1"></path><path d="M14 8h1"></path><path d="M14 12h1"></path><path d="M14 16h1"></path><path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"></path></svg>`;
const svg2 = `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>`;
const svg3 = `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10H12V2z"></path><path d="M12 12 2.1 7.1"></path><path d="M12 12l9.9 4.9"></path></svg>`;

let content = fs.readFileSync('src/pages/Index.jsx', 'utf8');

if (!content.includes('import MagicBento')) {
    content = content.replace("import React from 'react';", "import React from 'react';\nimport MagicBento from '../components/MagicBento';");
}

const serviceCardsConst = `
const serviceCards = [
  {
    color: 'var(--color-dark)',
    customClass: 'card-wide-left',
    title: 'Organizational Development',
    description: 'Aligning people, processes, and leadership to create resilient, high-performing organizations that drive sustainable growth and long-term success.',
    label: '01',
    icon: (${svg1}),
    link: { text: 'Get Started \\u2192', url: 'services.html' }
  },
  {
    color: 'var(--color-dark)',
    customClass: 'card-narrow-right',
    title: 'Business Excellence',
    description: 'Driving continuous improvement through strategic alignment, operational excellence, and performance-focused frameworks that enable sustainable growth and lasting business success.',
    label: '02',
    icon: (${svg2}),
    link: { text: 'Learn More \\u2192', url: 'services.html' }
  },
  {
    color: 'var(--color-dark)',
    customClass: 'card-narrow-left',
    title: 'Experiential Learning',
    description: 'Transformative training programs that prioritize hands-on experience and behavioral change over theory.',
    label: '03',
    icon: (${svg3}),
    link: { text: 'Our Approach \\u2192', url: 'learning.html' }
  },
  {
    color: 'var(--color-orange)',
    customClass: 'card-wide-right orange-card',
    title: 'Ready for a custom strategy?',
    description: 'Our experts are available for a 30-minute consultation to map out your organization\\'s unique challenges.',
    link: { text: 'CONTACT US', url: 'contact.html' }
  }
];
`;

if (!content.includes('const serviceCards')) {
    content = content.replace("const Index = () => {", serviceCardsConst + "\nconst Index = () => {");
}

const startIndex = content.indexOf('<div className="services-grid">');
const endIndexStr = `            </div>\n        </div>\n    </section>\n\n    <section id="industries"`;
const endIndex = content.indexOf(endIndexStr);

if (startIndex !== -1 && endIndex !== -1) {
    const before = content.substring(0, startIndex);
    const after = content.substring(endIndex);
    const magicBento = `<div className="services-grid" style={{ display: 'block' }}>
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
                />`;
    
    content = before + magicBento + '\n' + after;
    fs.writeFileSync('src/pages/Index.jsx', content);
    console.log('Successfully replaced services-grid with MagicBento');
} else {
    console.log('Could not find services-grid block');
}
