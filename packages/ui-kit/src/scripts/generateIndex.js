/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

const ignoreFiles = [
  'theme',
  'scripts',
];

const srcPath = path.resolve(process.cwd(), 'src');
const components = fs.readdirSync(srcPath)
  .filter((files) => !ignoreFiles.includes(files));
let indexFileContents = 'export { default as theme } from \'../es/theme\';\nexport * from \'../es/theme\'\n';
components.forEach((component) => {
  indexFileContents += `export { default as ${component} } from '../es/${component}';\n`;
});

const dist = path.resolve(process.cwd(), 'dist');

mkdirp(dist, (mkdirpErr) => {
  if (mkdirpErr) throw mkdirpErr;
  const indexFile = path.resolve(process.cwd(), 'dist/index.mjs');
  fs.writeFile(indexFile, indexFileContents, (fileErr) => {
    if (fileErr) throw fileErr;
    console.log(`generated: ${indexFile}`);
  });
});
