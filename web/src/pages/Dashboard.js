import React, { useEffect, useState } from "react";
import { getCurrentUser } from "../services/api";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getCurrentUser().then(setUser);
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      {user ? (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>Loading user info...</p>
      )}
    </div>
  );
};

export default Dashboard;

