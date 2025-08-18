import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import UserCard from "./components/UserCard";
import "./styles/index.css";

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleSignUp = (newUser) => {
    setUser(newUser);
    navigate("/user"); // Redirect to UserCard page
  };

  return (
    <div className="app-root">
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<SignUp onSignUp={handleSignUp} />} />
          <Route
            path="/user"
            element={
              user ? (
                <div className="user-page">
                  <h1>Welcome, {user.fullName} 🎉</h1>
                  <UserCard name={user.fullName} email={user.email} />
                </div>
              ) : (
                <p className="error">Login expired. Please sign up first. <button onClick={() => navigate("/")}>Signup</button></p>
              )
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
