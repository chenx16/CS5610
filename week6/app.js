const fs = require('fs');
// Define the file path and message
const filePath = 'message.txt';
const message = 'Hello, this is a message written using Node.js!';

// Write the message to a new file
// fs.writeFile(filePath, message, (err) => {
//     if (err) {
//         console.error('Error writing to file:', err);
//         return;
//     }
//     console.log('File written successfully.');

//     // Read the message back from the file
//     fs.readFile(filePath, 'utf8', (err, data) => {
//         if (err) {
//             console.error('Error reading the file:', err);
//             return;
//         }
//         console.log('File content:', data);
//     });
// });

const logger = require('./logger.js');
logger.log();
console.log('Logger version:', logger.version);

const express = require('express');
const app = express();

// Root route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Tasks route
app.get('/tasks', (req, res) => {
    res.send('<h1>List of all the tasks</h1>');
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

