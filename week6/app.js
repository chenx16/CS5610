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

const express = require('express'); // Import the Express module
const app = express();             // Create an Express application

// Set up a basic route
app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
