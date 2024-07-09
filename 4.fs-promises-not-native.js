// Use only on native modules that don't have native promises

const {promisify} = require('node:util')
const readFilePromise = promisify(fs.readFile);

console.log('Reading first file...');
const text = fs.readFilePromise('./file.txt', 'utf-8')
    .then(content => {
        console.log(content);
    });

console.log('Do some things while reading the file');

console.log('Reading second file...');
const secondText = fs.readFile('./file2.txt', 'utf-8', (err, data) => {
    console.log('second file: ', data);
});