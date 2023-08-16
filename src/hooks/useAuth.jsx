import React, { useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

const AuthContext = React.createContext();
export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [error, setError] = useState(null);  

  function errorCatcher(error) {
    const { message } = error.response.data;
    setError(message);
  }
  useEffect(() => {
    if (error !== 0) {
      toast(error);
      setError(null);
    }
  }, [error]);
 
  return (
    // <AuthContext.Provider value={{ signUp, signIn, currentUser, logOut, updateUser, sendOrder, getOrderById }}>
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
