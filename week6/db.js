require("dotenv").config(); // Load environment variables
const { MongoClient } = require("mongodb");

const uri = process.env.MONGO_URI; // Get MongoDB URI from .env
const client = new MongoClient(uri);

async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas successfully!");
  } catch (err) {
    console.error("MongoDB Connection Error:", err);
    process.exit(1);
  }
}

// Function to insert a new task
async function addToDB(doc) {
  try {
    const result = await client.db("cs5610").collection("tasks").insertOne(doc);
    console.log("✅ Task added with ID:", result.insertedId);
    return { _id: result.insertedId, ...doc }; // Return full task
  } catch (err) {
    console.error("❌ addToDB Error:", err);
    throw err;
  }
}

// Function to retrieve all tasks
async function getAllTasks() {
  try {
    const tasks = await client
      .db("cs5610")
      .collection("tasks")
      .find()
      .toArray();
    return tasks; // Returns an array of tasks
  } catch (err) {
    console.error("getAllTasks Error:", err);
    return [];
  }
}

// Function to find one task by query
const { ObjectId } = require("mongodb");

async function findOneTask(query) {
  try {
    const task = await client.db("cs5610").collection("tasks").findOne(query);
    return task;
  } catch (err) {
    console.error("findOneTask Error:", err);
    return null;
  }
}


async function getUsersByTask(taskId) {
  try {
    return await client.db("cs5610").collection("users").find({ task: taskId }).toArray();
  } catch (err) {
    console.error("getUsersByTask Error:", err);
    return [];
  }
}
async function deleteTaskById(id) {
  try {
    if (!ObjectId.isValid(id)) {
      console.error("❌ Invalid ObjectId:", id);
      return { deletedCount: 0 };
    }

    const objectId = new ObjectId(id.toString());

    const result = await client
      .db("cs5610")
      .collection("tasks")
      .deleteOne({ _id: objectId });

    console.log("🗑️ Deleted count:", result.deletedCount);
    return result;
  } catch (err) {
    console.error("deleteTaskById Error:", err);
    return { deletedCount: 0 };
  }
}




module.exports = {
  connectDB,
  addToDB,
  getAllTasks,
  findOneTask,
  getUsersByTask,
  deleteTaskById, 
};
