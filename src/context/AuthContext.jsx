import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

// 🛑 Safe JSON Parser (Crash Proof)
const safeParse = (str) => {
  try {
    if (!str || str === "undefined" || str === "null") return null;
    return JSON.parse(str);
  } catch (e) {
    console.error("Corrupt data found in localStorage", e);
    return null;
  }
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    const storedToken = localStorage.getItem("authToken");

    if (storedUser && storedToken) {
      const parsedUser = safeParse(storedUser);
      
      if (parsedUser) {
        setUser(parsedUser);
      } else {
        // 🛑 Agar data corrupt mila (jaise "undefined" string), toh storage clear kar do
        console.warn("Corrupt user data found. Clearing storage...");
        localStorage.removeItem("userData");
        localStorage.removeItem("authToken");
      }
    }

    setLoading(false);
  }, []);

  const login = (userData, token) => {
    // 🛑 Ensure ki kabhi bhi 'undefined' save na ho
    localStorage.setItem("authToken", token || "");
    localStorage.setItem("userData", JSON.stringify(userData || {}));
    setUser(userData || null);
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);