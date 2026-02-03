import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../../all-css-files/Header.css"; // Assuming we'll create a CSS file for styling
import { logout } from "../../services/authService";

const Header = () => {
  const token = localStorage.getItem("token");

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login", { replace: true });
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h2>Naksh Sports</h2>
        </div>
        <div className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
          <Link to="/dashboard" className="navbar-link" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/dashboard" className="navbar-link" onClick={closeMenu}>
            Dashboard
          </Link>
          <Link to="/add-product" className="navbar-link" onClick={closeMenu}>
            Add Regristarion Form
          </Link>
          {isLoginPage ? (
            <Link to="/login" className="navbar-link" onClick={closeMenu}>
              Login
            </Link>
          ) : (
            <button type="submit" className="logoutbtn" onClick={handleLogout}>Logout</button>
          )}
        </div>
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
