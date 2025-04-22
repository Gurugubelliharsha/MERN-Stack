import React, { createContext, useState, useContext } from "react";

// Create the Theme Context
const ThemeContext = createContext();

// ThemeProvider component to manage theme state
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // Function to toggle theme
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use ThemeContext
export const useTheme = () => useContext(ThemeContext);
