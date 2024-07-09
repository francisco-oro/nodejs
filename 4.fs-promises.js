const fs = require('node:fs/promises');

console.log('Reading first file...');
const text = fs.readFile('./file.txt', 'utf-8')
    .then(value => {
        console.log(value);
    });

console.log('Do some things while reading the file');

console.log('Reading second file...');
const secondText = fs.readFile('./file2.txt', 'utf-8')
    .then(value => {
        console.log(value);
    });
