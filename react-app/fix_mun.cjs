const fs = require('fs');

const path = './src/pages/Learning.jsx';
let content = fs.readFileSync(path, 'utf8');

const searchStr = `        .inst-highlight {
            background-color: #fff4ed;
            border-left: 4px solid var(--color-orange);
            padding: 1.5rem;
        .beyond-card {`;

const replaceStr = `        .inst-highlight {
            background-color: #fff4ed;
            border-left: 4px solid var(--color-orange);
            padding: 1.5rem;
            margin-top: 2rem;
            font-size: 0.85rem;
            color: #d35400;
            font-weight: 600;
        }
        
        /* MUN Section */
        .mun-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
        }
        .mun-images {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
        }
        .mun-img { width: 100%; height: 100%; object-fit: cover; border-radius: 8px; }
        .mun-img-large { grid-column: span 2; height: 250px; }
        .mun-img-small { height: 180px; }
        
        .mun-features {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem;
            margin-top: 2rem;
        }
        .mun-feature { display: grid; grid-template-columns: 140px 1fr; gap: 1rem; align-items: flex-start; }
        .mun-feature svg { color: var(--color-orange); flex-shrink: 0; margin-top: 0.2rem; }
        .mun-feature h5 { font-size: 1rem; color: #111; margin-bottom: 0.3rem; margin-top: 0; }
        .mun-feature p { font-size: 0.85rem; color: #666; margin: 0; line-height: 1.5; }
        
        /* Debate */
        .debate-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
        }
        .debate-features {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            margin: 2rem 0;
            border-top: 1px solid #eee;
            border-bottom: 1px solid #eee;
            padding: 2rem 0;
        }
        .debate-feature h5 { color: var(--color-orange); font-size: 0.9rem; margin-bottom: 0.5rem; text-transform: uppercase; }
        .debate-feature p { font-size: 0.85rem; color: #555; margin: 0; }
        
        /* Beyond MUN */
        .beyond-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 1.5rem;
            margin-top: 3rem;
        }
        .beyond-card {`;

if (content.includes(searchStr)) {
    content = content.replace(searchStr, replaceStr);
    fs.writeFileSync(path, content, 'utf8');
    console.log("Successfully fixed the CSS in Learning.jsx");
} else {
    // try to fix CRLF issues
    const normalizedSearch = searchStr.replace(/\r\n/g, '\n');
    const normalizedContent = content.replace(/\r\n/g, '\n');
    if (normalizedContent.includes(normalizedSearch)) {
        const finalContent = normalizedContent.replace(normalizedSearch, replaceStr.replace(/\r\n/g, '\n'));
        fs.writeFileSync(path, finalContent, 'utf8');
        console.log("Successfully fixed the CSS in Learning.jsx (with CRLF normalization)");
    } else {
        console.log("Search string not found!");
    }
}
