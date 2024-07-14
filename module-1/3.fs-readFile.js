const fs = require('node:fs');

console.log('Reading first file...');
const text = fs.readFile('./file.txt', 'utf-8', (err, data) => {
    console.log('first file: ', data);
});

console.log('Do some things while reading the file');

console.log('Reading second file...');
const secondText = fs.readFile('./file2.txt', 'utf-8', (err, data) => {
    console.log('second file: ', data);
});