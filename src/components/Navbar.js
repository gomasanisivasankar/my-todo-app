import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Import your logo image

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <Link to="/" style={styles.logoLink}>
        <img src={logo} alt="Logo" style={styles.logo} />
      </Link>
      <div style={styles.navLinks}>
        <Link to="/login" style={styles.navLink}>
          Login
        </Link>
        <Link to="/signup" style={styles.navLink}>
          Signup
        </Link>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between", // Distribute space between logo and links
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "#fff",
    position: "fixed",
    top: 0,
    width: "100%",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  logoLink: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    height: "40px", // Adjust logo size as needed
    width: "auto",
  },
  navLinks: {
    display: "flex",
    alignItems: "center",
  },
  navLink: {
    marginLeft: "20px", // Add space between the links
    padding: "10px 20px",
    backgroundColor: "#0056b3",
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
    borderRadius: "5px",
    transition: "background-color 0.3s",
  },
  navLinkHover: {
    backgroundColor: "#003d82",
  },
};

export default Navbar;
