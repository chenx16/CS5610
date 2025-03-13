import { useState } from "react";
import PropTypes from "prop-types";

function TasksList() {
  // Initialize state with the hardcoded tasks array
  const [tasks, setTasks] = useState([
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
  ]);

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <strong>{task.title}</strong> - {task.date}
        </li>
      ))}
    </ul>
  );
}

// Remove PropTypes as tasks are now managed internally in state

export default TasksList;
