import Header from "./components/Header";
import AddTask from "./components/AddTask";
import TasksList from "./components/TasksList";

function App() {
  const appName = "Welcome to My App";

  return (
    <div className="app-container">
      <Header appName={appName} />
      <AddTask />
      <TasksList />
    </div>
  );
}

export default App;
