import PropTypes from "prop-types";

function Header({ appName }) {
  return (
    <header className="header">
      <h1>{appName}</h1>
      <button className="add-task-btn">Add a Task</button>
    </header>
  );
}

// Define prop types
Header.propTypes = {
  appName: PropTypes.string.isRequired,
};

export default Header;
