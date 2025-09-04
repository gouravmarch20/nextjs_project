"use client";
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem("demoUser");
    if (savedUser) setUser(JSON.parse(savedUser));
    setLoading(false);
  }, []);

  const login = (username) => {
    const newUser = { name: username };
    localStorage.setItem("demoUser", JSON.stringify(newUser));
    setUser(newUser);
    if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(
        JSON.stringify({ type: "LOGIN", user: newUser })
      );
    }
  };

  const logout = () => {
    localStorage.removeItem("demoUser");
    setUser(null);
    if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(JSON.stringify({ type: "LOGOUT" }));
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
