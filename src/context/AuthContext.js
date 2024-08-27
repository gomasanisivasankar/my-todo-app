import React, { useContext, useState, createContext } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  // Signup function to save user data in local storage
  function signup(user) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
  }

  // Login function to authenticate the user
  function login(email, password) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      setCurrentUser(user);
      return true;
    } else {
      return false;
    }
  }

  // Logout function to clear the current user
  function logout() {
    setCurrentUser(null);
  }

  const value = {
    currentUser,
    signup,
    login,
    logout, // Add the logout function to the context value
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
