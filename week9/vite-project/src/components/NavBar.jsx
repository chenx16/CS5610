import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import AuthenticationButton from "./AuthenticationButton";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavBar.css";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Update screenWidth on window resize
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const shouldShowMenu = screenWidth > 576 || menuOpen;

  return (
    <nav className="nav-container">
      <div className="nav-header">
        {/* Show hamburger icon only on small screens */}
        {screenWidth <= 576 && (
          <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        )}
      </div>

      {/* Show nav links only if menu open (on small screen) or screen is large */}
      {shouldShowMenu && (
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
