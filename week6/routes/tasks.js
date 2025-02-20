const express = require('express');
const router = express.Router();

// Route for /tasks
router.get('/', (req, res) => {
    res.send('<h1>List of all the tasks</h1>');
});

// Route for /tasks/:taskId
router.get('/:taskId', (req, res) => {
    const taskId = req.params.taskId; // Extract taskId from the route
    res.render('task', { id: taskId }); // Render the Pug template with taskId
});

module.exports = router;
