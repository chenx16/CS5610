import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function TaskDetails() {
  const { taskId } = useParams();
  const [task, setTask] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTaskAndUsers() {
      try {
        // Fetch task
        const taskRes = await fetch(
          `http://localhost:3000/api/tasks/${taskId}`
        );
        const taskData = await taskRes.json();
        setTask(taskData);

        // Fetch users assigned to this task
        const usersRes = await fetch(
          `http://localhost:3000/api/users?task=${taskId}`
        );
        const usersData = await usersRes.json();
        setUsers(usersData);
      } catch (err) {
        console.error("Error fetching task or users:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchTaskAndUsers();
  }, [taskId]);

  if (loading) return <p>Loading...</p>;
  if (!task) return <p>Task not found.</p>;

  return (
    <div
      style={{ marginTop: "1rem", padding: "1rem", backgroundColor: "#f3f3f3" }}
    >
      <h3>{task.title}</h3>
      <p>Date: {task.date}</p>

      {users.length > 0 ? (
        users.map((user) => (
          <p key={user._id}>{user.name} is responsible for this task</p>
        ))
      ) : (
        <p>No users assigned to this task.</p>
      )}
    </div>
  );
}

export default TaskDetails;
