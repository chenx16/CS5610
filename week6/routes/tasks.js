const express = require('express');
const router = express.Router();
const axios = require('axios'); // Import axios

// Route for /tasks
// router.get('/', (req, res) => {
//     res.send('<h1>List of all the tasks</h1>');
// });


// Route for /tasks - Fetch tasks from JSONPlaceholder
router.get('/', (req, res) => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(response => {
            res.json(response.data); // Send the fetched JSON data to the client
        })
        .catch(error => {
            console.error('Error fetching tasks:', error);
            res.status(500).json({ error: 'Failed to fetch tasks' });
        });
});


// Fetch a specific task by ID and render it using Pug
router.get('/:taskId', (req, res) => {
    const taskId = req.params.taskId;
    const url = `https://jsonplaceholder.typicode.com/todos/${taskId}`;

    axios.get(url)
        .then(response => {
            const task = response.data;
            res.render('task', {
                id: task.id,
                title: task.title,
                completed: task.completed ? "Completed" : "Not Completed"
            });
        })
        .catch(error => {
            console.error(`Error fetching task ${taskId}:`, error);
            res.status(500).send('Task not found or failed to fetch task details.');
        });
});

// Route for /tasks/:taskId/:userId
router.get('/:taskId/:userId', (req, res) => {
    const { taskId, userId } = req.params;
    res.send(`You are viewing task ${taskId} for user ${userId}`);
});

module.exports = router;
