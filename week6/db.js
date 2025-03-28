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
    const createdTask = await client
      .db("cs5610")
      .collection("tasks")
      .findOne({ _id: result.insertedId });

    console.log("Task added:", createdTask);
    return createdTask;
  } catch (err) {
    console.log("addToDB Error:", err);
    return null;
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

async function findOneTask(id) {
  try {
    const objectId = new ObjectId(id); // Convert string to ObjectId
    const task = await client.db("cs5610").collection("tasks").findOne({ _id: objectId });

    if (!task) {
      console.log("No task found with this ID.");
      return null;
    }

    return task;
  } catch (err) {
    console.error("findOneTask Error:", err);
    return null;
  }
}

  
  module.exports = { connectDB, addToDB, getAllTasks, findOneTask };
