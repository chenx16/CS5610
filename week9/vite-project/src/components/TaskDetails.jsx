import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function TaskDetails() {
  const { taskId } = useParams();
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTask() {
      try {
        const response = await fetch(`http://localhost:5001/tasks/${taskId}`);
        if (!response.ok) {
          throw new Error("Task not found");
        }
        const data = await response.json();
        setTask(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchTask();
  }, [taskId]);

  if (loading) return <p>Loading task details...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!task) return null;

  return (
    <div style={{ marginTop: "1rem", backgroundColor: "#f3f3f3", padding: "1rem" }}>
      <h3>{task.title}</h3>
      <p>Date: {task.date}</p>
      <p>ID: {task.id}</p>
    </div>
  );
}

export default TaskDetails;
