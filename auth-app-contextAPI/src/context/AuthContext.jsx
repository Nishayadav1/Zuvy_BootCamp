
import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);  
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const logIn = () => {
    setUser(username);  
  };

  const logOut = () => {
    setUser(null);  
  };

  return (
    <AuthContext.Provider
      value={{
        username,
        setUserName,
        password,
        setPassword,
        user,
        setUser,
        logIn,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
