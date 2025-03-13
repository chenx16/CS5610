import PropTypes from "prop-types";
import { FaTrash } from "react-icons/fa";

function Task({ task }) {
  return (
    <li className="task-item">
      <div className="task-container">
        <div className="task-content">
          <p><strong>{task.title}</strong></p>
          <p>{task.date}</p>
        </div>
        <FaTrash className="delete-icon" />
      </div>
    </li>
  );
}

// Define PropTypes
Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default Task;
