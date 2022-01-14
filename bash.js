const { cwd } = require('process');
const fs = require('fs');

const pwd = require('./pwd');
const ls = require('./ls');
const { fstat } = require('fs');

console.log(`Current directory: ${cwd()}`);
fs.readdir()

