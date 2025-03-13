import { useState } from "react";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import TasksList from "./components/TasksList";

function App() {
  const appName = "Welcome to My App";

  // State to track if the form should be shown
  const [showForm, setShowForm] = useState(false);

  // Function to toggle form visibility
  const toggleForm = () => {
    setShowForm((prev) => !prev);
  };

  return (
    <div className="app-container">
      <Header appName={appName} showForm={showForm} onToggleForm={toggleForm} />
      {showForm && <AddTask />}
      <TasksList />
    </div>
  );
}

export default App;
