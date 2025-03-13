import Header from "./components/Header";
import TasksList from "./components/TasksList";

function App() {
  const appName = "Welcome to My App";

  return (
    <div className="app-container">
      <Header appName={appName} />
      <TasksList />
    </div>
  );
}

export default App;
