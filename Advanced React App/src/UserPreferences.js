import React from "react";
import useLocalStorage from "./useLocalStorage"; // Ensure correct path

function UserPreferences() {
  const [language, setLanguage] = useLocalStorage("preferredLanguage", "English");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "English" ? "Hindi" : "English"));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>User Preferences</h2>
      <p>Preferred Language: <strong>{language}</strong></p>
      <button onClick={toggleLanguage} style={{ padding: "10px 20px", backgroundColor: "green", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
        Toggle Language
      </button>
    </div>
  );
}

export default UserPreferences;
