import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import TodoList from "../components/TodoList";

function Dashboard() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login"); // Redirect to login after logging out
  };

  return (
    <div style={styles.container}>
      {/* Profile Container moved to the top-right */}
      <div style={styles.profileContainer}>
        <img
          src={`https://api.dicebear.com/5.x/avataaars/svg?seed=${currentUser.name}`}
          alt="Profile"
          style={styles.profileImage}
        />
        <div style={styles.profileInfo}>
          <p style={styles.infoText}>Name: {currentUser.name}</p>
          <p style={styles.infoText}>Email: {currentUser.email}</p>
        </div>
        <button onClick={handleLogout} style={styles.logoutButton}>
          Logout
        </button>
      </div>
      
      <div style={styles.dashboardContent}>
        <h1 style={styles.todoTitle}>Todo List</h1>
        <TodoList />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    height: "100vh",
    padding: "20px",
    backgroundColor: "#f0f4f8",
  },
  profileContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    top: "20px",
    right: "20px",
    backgroundColor: "#ffffff",
    padding: "10px",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
  profileImage: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    marginRight: "10px",
  },
  profileInfo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginRight: "10px",
  },
  infoText: {
    margin: "2px 0",
    fontSize: "14px",
  },
  logoutButton: {
    padding: "5px 10px",
    fontSize: "12px",
    fontWeight: "bold",
    color: "#ffffff",
    backgroundColor: "#007BFF",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  dashboardContent: {
    textAlign: "center",
    backgroundColor: "#ffffff",
    padding: "40px",
    borderRadius: "10px",
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
    width: "600px",
    marginTop: "100px", // Adds spacing from the top
  },
  todoTitle: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
};

export default Dashboard;
