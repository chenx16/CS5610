import { useState, useEffect } from "react";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import TasksList from "./components/TasksList";

function App() {
  const appName = "Welcome to My App";

  // State for tasks
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

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
      <Header appName={appName} />
      <AddTask onAddTask={addTask} />
      {loading ? <p>Loading...</p> : <TasksList tasks={tasks} onDelete={deleteTask} />}
    </div>
  );
}

export default App;
