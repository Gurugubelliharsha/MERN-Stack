import React from "react";
import { useTheme } from "./ThemeContext"; // Import ThemeContext

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: "10px 20px",
        cursor: "pointer",
        backgroundColor: theme === "light" ? "#4CAF50" : "#D32F2F",
        color: "white",
        border: "none",
        borderRadius: "5px",
        marginLeft: "10px",
      }}
    >
      Toggle Theme
    </button>
  );
}

export default ThemeToggle;
