import { useState, useEffect } from "react";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import TasksList from "./components/TasksList";

function App() {
  const appName = "Welcome to My App";

  // State for tasks
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from the fake server
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:5001/tasks");

        // Handle non-200 responses
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    }

    fetchData();
  }, []); // Empty dependency array → Runs only once on mount

  return (
    <div className="app-container">
      <Header appName={appName} />
      <AddTask />
      <TasksList tasks={tasks} />
    </div>
  );
}

export default App;
