import PropTypes from "prop-types";

function Header({ appName, showForm, onToggleForm }) {
  return (
    <header className="header">
      <h1>{appName}</h1>
      <button className="toggle-btn" onClick={onToggleForm}>
        {showForm ? "Close" : "Add a Task"}
      </button>
    </header>
  );
}

// Define PropTypes
Header.propTypes = {
  appName: PropTypes.string.isRequired,
  showForm: PropTypes.bool.isRequired,
  onToggleForm: PropTypes.func.isRequired,
};

export default Header;
