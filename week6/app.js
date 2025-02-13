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

const express = require('express'); // Import Express
const app = express();             // Create an Express application

// Define a GET route for the root path
app.get('/', function(req, res) {
  res.send('Hello World!'); // Respond with "Hello World!"
});

// Start the server and listen on port 3000
const port = 3000;
app.listen(port, function() {
  console.log(`Example app listening on port ${port}!`);
});

