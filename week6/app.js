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

// Serve static files from the "public" folder
app.use(express.static('public'));

// Root route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Tasks route
app.get('/tasks', (req, res) => {
    res.send('<h1>List of all the tasks</h1>');
});

// Route to handle taskId parameter
app.get('/tasks/:taskId', (req, res) => {
    const taskId = req.params.taskId; // Extract taskId from the route
    res.send(`You are viewing task ${taskId}`);
});

app.get('/tasks/:taskId/:userId', (req, res) => {
    const { taskId, userId } = req.params; // Extract taskId and userId
    res.send(`You are viewing task ${taskId} for user ${userId}`);
});


// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


