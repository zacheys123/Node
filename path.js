const path = require('path');

const filepath = path.join('/content/', 'generalfolder', 'test.txt');

const base = path.basename(filepath);
console.log(base + ' generated');

const absolutepath = path.resolve(__dirname, filepath);
console.log(absolutepath + ' generated');
