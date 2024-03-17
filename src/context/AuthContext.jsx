import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [authState, setAuthState] = useState({ isAuth: false, token: null });

  const loginUser = (token) => {
    setAuthState({ isAuth: true, token });
  };

  const logoutUser = () => {
    setAuthState({ isAuth: false, token: null });
    localStorage.removeItem('currentUser');
  };

  let providerState = {
    authState,
    loginUser,
    logoutUser,
  };

  if (window.Cypress) {
    window.store = providerState;
  }

  return <AuthContext.Provider value={providerState}>{children}</AuthContext.Provider>;
};
