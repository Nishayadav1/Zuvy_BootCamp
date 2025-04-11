import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // In real app, send to backend
    alert(`Registered as ${email}`);
    navigate('/login'); // programmatic navigation
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
