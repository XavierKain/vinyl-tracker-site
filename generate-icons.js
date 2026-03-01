const sharp = require('/tmp/icon-gen/node_modules/sharp');
const path = require('path');
const fs = require('fs');

const svgPath = path.join(__dirname, 'favicon.svg');
const pngPath = path.join(__dirname, 'apple-touch-icon.png');

const svg = fs.readFileSync(svgPath);

sharp(svg)
  .resize(180, 180)
  .png()
  .toFile(pngPath)
  .then(() => console.log('Created apple-touch-icon.png (180x180)'))
  .catch(err => { console.error('Error:', err); process.exit(1); });
