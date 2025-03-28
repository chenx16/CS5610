const express = require("express");
const router = express.Router();
const axios = require("axios"); // Import axios
const { ObjectId } = require("mongodb");
const { getAllTasks, addToDB, findOneTask, deleteTaskById }  = require("../db");

// Route for /tasks
// router.get('/', (req, res) => {
//     res.send('<h1>List of all the tasks</h1>');
// });

// Route for /tasks - Fetch tasks from JSONPlaceholder
router.get("/newtask", (req, res) => {
  res.render("newtask"); // Render the Pug form
});

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    addToDB(req.body);
    res.redirect("/tasks");
  } catch (err) {
    console.log("Post Handler", err);
  }
});

// Route to fetch all tasks from MongoDB and render a list
router.get("/", async (req, res) => {
  try {
    const tasks = await getAllTasks(); // Fetch tasks from database

    // Render the "tasks" template, passing tasks to it
    res.render("tasks", { tasks });
  } catch (error) {
    console.error("Error fetching tasks:", error);
    res.status(500).send("Error retrieving tasks.");
  }
});

// POST from Pug form (can remove if only using API)
router.post("/tasks", async (req, res) => {
  try {
    await addToDB(req.body);
    res.redirect("/tasks");
  } catch (error) {
    res.status(500).send("Error adding task");
  }
});

// router.get("/", (req, res) => {
//   axios
//     .get("https://jsonplaceholder.typicode.com/todos")
//     .then((response) => {
//       res.json(response.data); // Send the fetched JSON data to the client
//     })
//     .catch((error) => {
//       console.error("Error fetching tasks:", error);
//       res.status(500).json({ error: "Failed to fetch tasks" });
//     });
// });

// Fetch a specific task by ID and also fetch user details
// router.get("/:taskId", async (req, res) => {
//   const taskId = req.params.taskId;
//   const taskUrl = `https://jsonplaceholder.typicode.com/todos/${taskId}`;

//   try {
//     // Fetch task details
//     const taskResponse = await axios.get(taskUrl);
//     const task = taskResponse.data;

//     // Fetch user details using userId from the task
//     const userUrl = `https://jsonplaceholder.typicode.com/users/${task.userId}`;
//     const userResponse = await axios.get(userUrl);
//     const user = userResponse.data;

//     // Render the Pug template with task and user details
//     res.render("task", {
//       id: task.id,
//       title: task.title,
//       completed: task.completed ? "Completed" : "Not Completed",
//       userName: user.name, // User's name
//     });
//   } catch (error) {
//     console.error(`Error fetching task ${taskId}:`, error);
//     res.status(500).send("Task not found or failed to fetch task details.");
//   }
// });

// Fetch a specific task by ID and render it using Pug
router.get("/:taskId", async (req, res) => {
  const taskId = req.params.taskId; // Get taskId from URL params

  try {
    // Convert string to ObjectId (MongoDB requires this format for querying _id)
    const query = { _id: new ObjectId(taskId) };
    const task = await findOneTask(query);

    if (!task) {
      return res.status(404).send("Task not found");
    }

    // Render the Pug template with task details
    res.render("task", {
      id: task._id,
      title: task.title,
      completed: task.completed ? "completed" : "not completed",
      dueDate: task.date, // Pass the date field
    });
  } catch (error) {
    console.error(`Error fetching task ${taskId}:`, error);
    res.status(500).send("Task not found or failed to fetch task details.");
  }
});

// Route for /tasks/:taskId/:userId
// router.get("/:taskId/:userId", (req, res) => {
//   const { taskId, userId } = req.params;
//   res.send(`You are viewing task ${taskId} for user ${userId}`);
// });

// GET /tasks/:id - Get a specific task
router.get("/api/tasks/:id", async (req, res) => {
  const id = req.params.id;

  try {
    // Validate and convert id to ObjectId
    const objectId = new ObjectId(id);
    const task = await findOneTask({ _id: objectId });

    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }

    res.json(task); // ✅ Return JSON
  } catch (err) {
    console.error("Error in /api/tasks/:id:", err);
    res.status(500).json({ error: "Failed to fetch task" });
  }
});


// GET /tasks
router.get("/api/tasks", async (req, res) => {
  try {
    const tasks = await getAllTasks(); // from db.js
    res.json(tasks); // ✅ MUST use res.json() here
  } catch (err) {
    console.error("Error fetching tasks:", err);
    res.status(500).json({ error: "Failed to fetch tasks" });
  }
});


// POST /tasks
// router.post("/tasks", async (req, res) => {
//   try {
//     const result = await addToDB(req.body);
//     res.status(201).json(result); // ✅ Return the created task
//   } catch (err) {
//     res.status(500).json({ error: "Failed to add task" });
//   }
// });

router.post("/api/tasks", async (req, res) => {
  try {
    const result = await addToDB(req.body); // this should return the inserted task
    res.status(201).json(result); // ✅ send JSON, not redirect
  } catch (err) {
    console.error("❌ Failed to add task:", err);
    res.status(500).json({ error: "Failed to add task" });
  }
});

router.delete("/api/tasks/:id", async (req, res) => {
  const taskId = req.params.id;
  console.log("🔻 DELETE requested for task ID:", taskId);

  try {
    const result = await deleteTaskById(taskId);

    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "Task not found" });
    }

    res.status(200).json({ message: "Task deleted" });
  } catch (error) {
    console.error("❌ Error deleting task:", error);
    res.status(500).json({ error: "Failed to delete task" });
  }
});



module.exports = router;
