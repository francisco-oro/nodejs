const {readFile} = require('node:fs/promises');

// IIFE Immediately Invoked Function Expression
(
    async () => {
        console.log('Reading first file...');
        const text = await readFile('./file.txt', 'utf-8');
        console.log('First text:', text);

        console.log('Do some things while reading the file');

        console.log('Reading second file...');
        const text2 = await readFile('./file2.txt', 'utf-8');
        console.log('Second text:', text2);
    }
)();
