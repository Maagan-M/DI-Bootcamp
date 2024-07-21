const path = require('path');
const fs = require('fs');

// Create a file path to the example.txt file within the data directory
const filePath = path.join(__dirname, 'data', 'example.txt');

// Check if the file exists
const fileExists = fs.existsSync(filePath);

if (fileExists) {
    // Get information about the file
    const stats = fs.statSync(filePath);
    const fileSize = stats.size;
    const creationTime = stats.birthtime;

    // Display the file's existence, size, and creation time
    console.log(`File exists: ${fileExists}`);
    console.log(`File size: ${fileSize} bytes`);
    console.log(`Creation time: ${creationTime}`);
} else {
    console.log('File does not exist.');
}
