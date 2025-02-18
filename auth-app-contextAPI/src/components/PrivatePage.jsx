import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function PrivatePage() {
  const { user, logOut } = useContext(AuthContext);


  if (!user) {
    return null;
  }

  return (
    <div>
      <h2>Welcome</h2>
      <h3>Hello, {user}</h3>
      <button onClick={logOut}>Log Out</button>
    </div>
  );
}

export default PrivatePage;
