import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../Context/ThemeContext";
import "./Navbar.css";

export default function Navbar() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      <Link to="/" className="navbar-logo" onClick={closeMenu}>
        <span className="logo-tech">Tech</span>
        <span className="logo-nova">Nova</span>
      </Link>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <div className={`navbar-links ${menuOpen ? "active" : ""}`}>

        <Link to="/" onClick={closeMenu}>
          Home
        </Link>

        <Link to="/about" onClick={closeMenu}>
          About
        </Link>

        <Link to="/services" onClick={closeMenu}>
          Services
        </Link>

        <Link to="/projects" onClick={closeMenu}>
          Projects
        </Link>

        <Link to="/contact" onClick={closeMenu}>
          Contact
        </Link>

        <Link to="/admin" onClick={closeMenu}>
          Admin
        </Link>

        <button
          onClick={toggleTheme}
          className="theme-btn"
          aria-label="Toggle theme"
        >
          {darkMode ? "☀" : "☾"}
        </button>

      </div>
    </nav>
  );
} 