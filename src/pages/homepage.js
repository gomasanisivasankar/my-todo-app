import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function HomePage() {
  return (
    <div style={styles.container}>
      <Navbar />
      <h1>Welcome to My To-Do App</h1>
      <p>Manage your tasks easily and effectively.</p>
      <div style={styles.links}>
        <Link to="/login" style={styles.link}>
          Login
        </Link>
        <Link to="/signup" style={styles.link}>
          Signup
        </Link>
      </div>
      <footer style={styles.footer}>
        <p style={styles.footerText}>
          © {new Date().getFullYear()} My To-Do App. All rights reserved.
        </p>
        <div style={styles.socialIcons}>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
            <FontAwesomeIcon icon={faInstagram} style={styles.icon} />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
            <FontAwesomeIcon icon={faFacebook} style={styles.icon} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
            <FontAwesomeIcon icon={faLinkedin} style={styles.icon} />
          </a>
        </div>
        <p style={styles.footerText}>
          <a href="mailto:info@mytodoapp.com" style={styles.footerLink}>
            Contact Us
          </a>
        </p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5",
    textAlign: "center",
  },
  links: {
    marginTop: "20px",
  },
  link: {
    margin: "0 10px",
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "5px",
  },
  footer: {
    marginTop: "30px",
    padding: "10px 0",
    backgroundColor: "#007BFF",
    color: "#fff",
    textAlign: "center",
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
  footerText: {
    margin: "5px 0",
    fontSize: "14px",
  },
  socialIcons: {
    display: "flex",
    justifyContent: "center",
    margin: "10px 0",
  },
  iconLink: {
    margin: "0 10px",
    color: "#fff",
    textDecoration: "none",
  },
  icon: {
    fontSize: "24px",
  },
  footerLink: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default HomePage;
