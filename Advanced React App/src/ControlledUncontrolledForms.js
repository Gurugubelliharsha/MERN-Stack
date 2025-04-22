import React, { useState, useRef } from "react";

function ControlledUncontrolledForm() {
  // Controlled Component (React state manages this)
  const [email, setEmail] = useState("");

  // Uncontrolled Component (useRef manages this)
  const passwordRef = useRef();

  // Handle input change for controlled input
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const passwordValue = passwordRef.current.value; // Get value from ref (Uncontrolled)
    
    if (!email || !passwordValue) {
      alert("Both fields are required!");
      return;
    }

    alert(`Login Details:\nEmail: ${email}\nPassword: ${passwordValue}`);
    setEmail(""); // Clear controlled field
    passwordRef.current.value = ""; // Clear uncontrolled field
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      
      
      <form onSubmit={handleSubmit}>
        {/* Controlled Input */}
        <div style={{ marginBottom: "10px" }}>
          <label>Email (Controlled):</label>
          <input
            type="email"
            value={email} // Controlled by React state
            onChange={handleEmailChange} // Updates state
            placeholder="Enter your email"
            style={{ padding: "8px", marginLeft: "10px" }}
          />
        </div>

        {/* Uncontrolled Input */}
        <div style={{ marginBottom: "10px" }}>
          <label>Password (Uncontrolled):</label>
          <input
            type="password"
            ref={passwordRef} // Uncontrolled: Value accessed via ref
            placeholder="Enter your password"
            style={{ padding: "8px", marginLeft: "10px" }}
          />
        </div>

        <button
          type="submit"
          style={{ padding: "8px 15px", cursor: "pointer", backgroundColor: "blue", color: "white", border: "none" }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default ControlledUncontrolledForm;
