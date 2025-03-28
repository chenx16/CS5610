const express = require("express");
const router = express.Router();
const { getUsersByTask } = require("../db");

// GET /api/users?task=123
router.get("/api/users", async (req, res) => {
  const taskId = req.query.task;

  if (!taskId) return res.status(400).json({ error: "Task ID is required" });

  try {
    const users = await getUsersByTask(taskId);
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

module.exports = router;
