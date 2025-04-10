import { Link } from "react-router-dom";
import AuthenticationButton from "./AuthenticationButton";
import "./NavBar.css"; // Create this file for styling

function NavBar() {
  return (
    <nav className="nav-container">
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/tasks">Tasks</Link>
        <Link to="/profile">Profile</Link>
        <AuthenticationButton />
      </div>
    </nav>
  );
}

export default NavBar;
