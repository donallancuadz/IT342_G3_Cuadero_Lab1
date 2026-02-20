import React, { useEffect, useState } from "react";
import "./App.css";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { loadAuth } from "./services/auth";

function App() {
  const [page, setPage] = useState("login");

  useEffect(() => {
    const auth = loadAuth();
    setPage(auth ? "dashboard" : "login");
  }, []);

  return (
    <div>
      <nav style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 16 }}>
        <button onClick={() => setPage("register")}>Register</button>
        <button onClick={() => setPage("login")}>Login</button>
        <button onClick={() => setPage("dashboard")}>Dashboard</button>
      </nav>

      {page === "register" && <Register />}
      {page === "login" && <Login onLoggedIn={() => setPage("dashboard")} />}
      {page === "dashboard" && <Dashboard onLogout={() => setPage("login")} />}
    </div>
  );
}

export default App;