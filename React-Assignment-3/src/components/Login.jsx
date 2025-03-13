import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import ProductList from "./ProductList";
import "./Login.css"; 

function Login() {
  const { isAuthenticated, login, logout } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    login(username, password);
  };

  if (isAuthenticated) {
    return (
      <div className="welcome-container">
        <h2>Welcome, Admin!</h2>
        <button onClick={logout}>Logout</button>
        <ProductList /> 
      </div>
    );
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
