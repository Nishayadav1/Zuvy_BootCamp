export const login = (username, password) => {
    const hardcodedCredentials = {
      username: "admin",
      password: "123",
    };
  
    if (username === hardcodedCredentials.username && password === hardcodedCredentials.password) {
      localStorage.setItem("isAuthenticated", "true");
      return true;
    }
    return false;
  };
  
  export const logout = () => {
    localStorage.removeItem("isAuthenticated");
  };
  
  export const isAuthenticated = () => {
    return localStorage.getItem("isAuthenticated") === "true";
  };
  