import React from "react";
import { useTheme } from "./ThemeContext"; // Import ThemeContext

function ThemedButton() {
  const { theme } = useTheme();

  return (
    <button
      style={{
        backgroundColor: theme === "light" ? "#f0f0f0" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      Themed Button
    </button>
  );
}

export default ThemedButton;
