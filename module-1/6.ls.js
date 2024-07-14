const fs = require('node:fs')

fs.readdir('.', (err, files) => {
    if (err) {
        console.log('An error occurred as the directory has been read', err);
        return;
    }
    files.forEach(file => {
        console.log(file);
    })
});