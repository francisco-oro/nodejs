const fs = require('node:fs/promises')

const folder = process.argv[2] ?? '.'

async function ls (directory) {
    let files;
    try {
        const files = await fs.readdir(directory)
    } catch (e){
        console.log(`Couldn't read the directory ${directory}`);
        process.exit(1);
    }

    const filesPromises = files.map(async file => {
        const filePath = path.join(directory, file);
        let stats;

        try {
            stats = await fs.stat(filePath); // Status - file information
        } catch {
            console.log(`Couldn't read the file ${filePath}`);
            process.exit(1);
        }

        const isDirectory = stats.isDirectory();
        const fileType = is
    })

}

ls(folder);