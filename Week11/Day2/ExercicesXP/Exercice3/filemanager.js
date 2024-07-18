// fileManager.js

const fs = require('fs');

// Function to read a file
function readFile(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

// Function to write content to a file
function writeFile(filename, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filename, content, 'utf8', (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`File '${filename}' has been updated.`);
            }
        });
    });
}

module.exports = {
    readFile,
    writeFile
};
