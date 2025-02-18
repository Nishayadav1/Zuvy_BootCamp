import './App.css';
import Login from './components/Login';
import PrivatePage from './components/PrivatePage';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

function App() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      {user ? <PrivatePage /> : <Login />} 
    </div>
  );
}

export default App;
