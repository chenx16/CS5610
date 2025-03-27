import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import TasksList from "./components/TasksList";

function App() {
  const appName = "Welcome to My App";

  // State for tasks
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false); // Track form visibility

  // Fetch tasks from JSON Server
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:5001/tasks");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  // Function to toggle form visibility
  const toggleForm = () => {
    setShowForm((prev) => !prev);
  };

  // Function to add a new task
  const addTask = async (newTask) => {
    try {
      const response = await fetch("http://localhost:5001/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      });

      if (!response.ok) {
        throw new Error(`Failed to add task. Status: ${response.status}`);
      }

      const data = await response.json();
      setTasks((prevTasks) => [...prevTasks, data]); // Update UI with new task

      setShowForm(false); // Hide form after adding a task ✅
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  // Function to delete a task
  const deleteTask = async (id) => {
    try {
      const response = await fetch(`http://localhost:5001/tasks/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`Failed to delete task. Status: ${response.status}`);
      }

      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className="app-container">
      {/* Navigation */}
      <nav>
        <Link to="/">Home</Link> <Link to="/tasks">Tasks</Link>
      </nav>

      <Header appName={appName} showForm={showForm} onToggleForm={toggleForm} />

      <Routes>
        <Route
          path="/"
          element={<>{showForm && <AddTask onAddTask={addTask} />}</>}
        />
        <Route
          path="/tasks"
          element={
            loading ? (
              <p>Loading...</p>
            ) : (
              <TasksList tasks={tasks} onDelete={deleteTask} />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
