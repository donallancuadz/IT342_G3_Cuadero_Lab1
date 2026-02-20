import React, { useEffect, useState } from "react";
import { getMe } from "../services/api";
import { clearAuth, loadAuth } from "../services/auth";

export default function Dashboard({ onLogout }) {
  const [me, setMe] = useState(null);
  const [err, setErr] = useState("");

  useEffect(() => {
    const auth = loadAuth();
    if (!auth) {
      setErr("Not logged in");
      return;
    }

    getMe(auth.email, auth.password)
      .then(setMe)
      .catch((e) => setErr(e.message));
  }, []);

  const logout = () => {
    clearAuth();
    if (onLogout) onLogout();
  };

  return (
    <div style={{ maxWidth: 520, margin: "40px auto" }}>
      <h2>Dashboard / Profile</h2>

      {err && <p style={{ color: "crimson" }}>{err}</p>}

      {me && (
        <div style={{ marginTop: 12 }}>
          <p><b>ID:</b> {me.id}</p>
          <p><b>Full Name:</b> {me.fullName}</p>
          <p><b>Email:</b> {me.email}</p>
        </div>
      )}

      <button onClick={logout} style={{ marginTop: 16 }}>Logout</button>
    </div>
  );
}