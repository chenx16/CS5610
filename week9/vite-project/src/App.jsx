import Header from "./components/Header";

function App() {
  const appName = "Welcome to My App";

  return (
    <div className="app-container">
      <Header appName={appName} />
    </div>
  );
}

export default App;
