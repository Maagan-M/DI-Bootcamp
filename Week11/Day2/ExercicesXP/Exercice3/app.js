// app.js

const { readFile, writeFile } = require('./fileManager');

async function manageFiles() {
    try {
        // Read content from Hello World.txt
        const helloContent = await readFile('Hello World.txt');
        console.log(`Content from Hello World.txt: ${helloContent}`);

        // Write content to Bye World.txt
        const writeResult = await writeFile('Bye World.txt', 'Writing to the file');
        console.log(writeResult);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Execute the function to manage files
manageFiles();
