import {readFile} from 'node:fs/promises';

Promise.all([
    readFile('./file.txt', 'utf-8'),
    readFile('./file2.txt', 'utf-8'),
]).then(([text, text2]) => {
    console.log('First text:', text);
    console.log('Second text:', text2);
});