import { useState, useEffect } from "react";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import TasksList from "./components/TasksList";

function App() {
  const appName = "Welcome to My App";

  // State for tasks (moved from TasksList)
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from JSON Server
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:5001/tasks");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json(); // Convert response to JS object
        setTasks(data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="app-container">
      <Header appName={appName} />
      <AddTask />
      <TasksList tasks={tasks} />
    </div>
  );
}

export default App;
