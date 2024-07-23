import fs from 'fs';
import path from 'path';

export function readFile() {
    const filePath = path.join(new URL(import.meta.url).pathname, '../files/file-data.txt');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        console.log('File content:', data);
    });
}
