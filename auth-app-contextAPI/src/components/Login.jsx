import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const { username, setUserName, password, setPassword, logIn } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleLogin = () => {
    
    if (!username || !password) {
      setError("Both username and password are required.");
      return;
    }

    setError("");  
    logIn();  
  };

  return (
    <div className="container">
      <h2>Login Page</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      />
      <br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />

      {error && <p style={{ color: 'red' }}>{error}</p>} 

      <button onClick={handleLogin}>Log In</button>
    </div>
  );
}

export default Login;
