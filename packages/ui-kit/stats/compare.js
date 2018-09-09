const fs = require('fs');
const Table = require('cli-table2');

const table = new Table({
  head: ['#', 'Type', 'Size (Bytes)'],
});

const stats = [
  ['1', 'RAW', fs.statSync('stats/test.js').size],
  ['2', 'CJS', fs.statSync('stats/test.cjs.js').size],
  ['3', 'ES', fs.statSync('stats/test.es.js').size],
];

table.push(...stats);

console.log(table.toString());
