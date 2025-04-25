import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../auth/auth";
import './Login.css'
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (login(username, password)) {
      navigate("/products");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div>
    <form onSubmit={handleLogin}>
    <h1>Login Page</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
    </form>
    </div>
  );
};

export default Login;
