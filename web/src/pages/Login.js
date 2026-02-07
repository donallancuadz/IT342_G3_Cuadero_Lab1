import React, { useState } from "react";
import { loginUser } from "../services/api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await loginUser({ email, password });
    if (response.status === "success") {
      setMessage(`Logged in as ${response.user.name}`);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} /><br/>
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} /><br/>
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;

