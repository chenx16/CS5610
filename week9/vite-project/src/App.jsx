import Header from "./components/Header";
import TasksList from "./components/TasksList";

function App() {
  const appName = "Welcome to My App";

  // Hardcoded task list (moved to be passed as props)
  const tasks = [
    {
      id: 1,
      title: "Review week 9 material",
      date: "June 4th at 1 pm",
    },
    {
      id: 2,
      title: "Do quiz 9",
      date: "June 4th at 6 pm",
    },
    {
      id: 3,
      title: "Work on assignment 2",
      date: "June 5th at 8 am",
    },
  ];

  return (
    <div className="app-container">
      <Header appName={appName} />
      <TasksList tasks={tasks} />
    </div>
  );
}

export default App;
