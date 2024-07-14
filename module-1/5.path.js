const path = require('node:path');

// Path separator by OS
console.log(path.sep)

// Join paths using path.join
const filePath = path.join('./content', 'subfolder', 'text.txt');
console.log(filePath);

const base = path.basename('/tmp/frabores-secret-files/password.txt')
console.log(base)

const filename = path.basename('/tmp/frabores-secret-files/password.txt', '.txt')
console.log(filename)

const extension = path.extname('my.super.image.jpg')
console.log(extension)