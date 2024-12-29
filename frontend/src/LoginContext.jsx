import React, { createContext, useState } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [loginDetails, setLoginDetails] = useState(null);
  console.log("LoginProvider initialized with:", loginDetails);
  return (
    <LoginContext.Provider value={{ loginDetails, setLoginDetails }}>
      {children}
    </LoginContext.Provider>
  );
};