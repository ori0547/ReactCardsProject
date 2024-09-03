import React, { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import { getToken, getUser } from "../services/localStorageService";

const UserContext = createContext();

export default function UserProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(getToken());

  useEffect(() => {
    if (!user) {
      const userFromLocalStorage = getUser();
      setUser(userFromLocalStorage);
      setIsLoading(false);
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser, token, setToken, isLoading }}>
      {children}
    </UserContext.Provider>
  );
}

export const useCurrentUser = () => {
  const context = useContext(UserContext);
  
  if (!context) {
    throw new Error("useCurrentUser must be used within provider");
  }

  return context;
};