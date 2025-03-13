import PropTypes from "prop-types";

function Task({ task }) {
  return (
    <li>
      <div className="task-container">
        <p><strong>{task.title}</strong></p>
        <p>{task.date}</p>
      </div>
    </li>
  );
}

// Define PropTypes for type-checking
Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default Task;
