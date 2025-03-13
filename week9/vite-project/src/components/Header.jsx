import PropTypes from "prop-types";

function Header({ appName }) {
  return (
    <header>
      <h1>{appName}</h1>
    </header>
  );
}

// Define prop types
Header.propTypes = {
  appName: PropTypes.string.isRequired,
};

export default Header;
