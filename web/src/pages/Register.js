import React, { useState } from "react";
import { registerUser } from "../services/api";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    const response = await registerUser({ name, email, password });
    if (response.status === "success") {
      setMessage(`Registered successfully as ${response.user.name}`);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} /><br/>
        <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} /><br/>
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} /><br/>
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Register;
