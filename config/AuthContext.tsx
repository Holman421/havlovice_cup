// contexts/AuthContext.js
"use client";
import React, {
  createContext,
  useState,
  useContext,
} from "react";

// Create a context
const AuthContext = createContext<{
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
} | null>(null);

export function useAuth() {
  return useContext(AuthContext);
}

// Create a provider component
export interface AuthProviderProps {
  children: React.ReactNode;
}

export default function AuthProvider({
  children,
}: AuthProviderProps) {
  const [isLoggedIn, setIsLoggedIn] =
    useState<boolean>(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
