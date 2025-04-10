import { Link } from "react-router-dom";
import { useState } from "react";
import AuthenticationButton from "./AuthenticationButton";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavBar.css";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav-container">
      <div className="nav-header">
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Conditionally render links */}
      {menuOpen && (
        <div className="nav-links">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/tasks" onClick={() => setMenuOpen(false)}>Tasks</Link>
          <Link to="/profile" onClick={() => setMenuOpen(false)}>Profile</Link>
          <AuthenticationButton />
        </div>
      )}
    </nav>
  );
}

export default NavBar;
