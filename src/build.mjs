import { existsSync, readFileSync } from 'node:fs';
for(const p of ['www/index.html','www/app.js','www/style.css','www/manifest.webmanifest','www/assets/nexora-logo.png']) {if(!existsSync(p)) throw new Error(`Missing ${p}`)}
const html=readFileSync('www/index.html','utf8');
if(!html.includes('app.js') || !html.includes('style.css')) throw new Error('App entrypoint references missing');
console.log('NEXORA static application verified.');
