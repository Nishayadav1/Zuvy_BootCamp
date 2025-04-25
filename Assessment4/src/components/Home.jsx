import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';
function Home() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div>
      <h1>Welcome click here</h1>
      <button onClick={handleLoginClick}>Login</button>
    </div>
  );
}

export default Home;
