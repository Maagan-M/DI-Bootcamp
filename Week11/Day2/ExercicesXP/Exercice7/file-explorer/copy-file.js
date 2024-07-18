const fs = require('fs');

// File paths
const sourceFile = 'source.txt';
const destinationFile = 'destination.txt';

// Read content from source.txt
fs.readFile(sourceFile, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    // Write content to destination.txt
    fs.writeFile(destinationFile, data, 'utf8', (err) => {
        if (err) {
            console.error('Error writing file:', err);
            return;
        }
        console.log(`Content from ${sourceFile} copied to ${destinationFile} successfully!`);
    });
});
