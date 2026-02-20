import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMe, logoutUser } from "../services/api";

export default function Dashboard() {
  const navigate = useNavigate();

  const [me, setMe] = useState(null);
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(true);

  async function loadMe() {
    setMsg("");
    setLoading(true);

    try {
      // ✅ requires Bearer token in localStorage
      const data = await getMe();
      setMe(data);
    } catch (err) {
      // token missing/invalid -> force logout and redirect
      logoutUser();
      navigate("/login");
    } finally {
      setLoading(false);
    }
  }

  function handleLogout() {
    logoutUser();
    navigate("/login");
  }

  useEffect(() => {
    // If no token, block dashboard
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }
    loadMe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <div style={{ maxWidth: 600, margin: "40px auto" }}>Loading...</div>;
  }

  return (
    <div style={{ maxWidth: 600, margin: "40px auto" }}>
      <h2>Dashboard / Profile</h2>

      {msg && <p style={{ color: "crimson" }}>{msg}</p>}

      {me && (
        <div style={{ marginTop: 12, padding: 12, border: "1px solid #ddd", borderRadius: 8 }}>
          <p><b>ID:</b> {me.id}</p>
          <p><b>Full Name:</b> {me.fullName}</p>
          <p><b>Email:</b> {me.email}</p>
        </div>
      )}

      <button onClick={handleLogout} style={{ marginTop: 16 }}>
        Logout
      </button>
    </div>
  );
}