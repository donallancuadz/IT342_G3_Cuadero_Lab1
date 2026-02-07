import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <div>
        <h1>BorrowBox</h1>
        <nav>
          <Link to="/register">Register</Link> |{" "}
          <Link to="/login">Login</Link> |{" "}
          <Link to="/dashboard">Dashboard</Link>
        </nav>
        <hr />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
