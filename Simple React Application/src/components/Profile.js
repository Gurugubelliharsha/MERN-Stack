/*
import React from "react";

const Profile = (props) => {
  return (
    <div style={styles.container}>
      <h2>My Name: <span style={styles.highlight}>{props.name}</span></h2>
      <h2>My Hometown: <span style={styles.highlight}>{props.hometown}</span></h2>
      <p>This is a simple React app demonstrating JSX and rendering elements.</p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "30px",
    fontFamily: "Arial, sans-serif",
  },
  highlight: {
    color: "#e74c3c",
    fontWeight: "bold",
  },
};

export default Profile;

*/

import React from "react";

const Profile = (props) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.text}>
        My Name: <span style={styles.highlight}>{props.name}</span>
      </h2>
      <h2 style={styles.text}>
        My Hometown: <span style={styles.highlight}>{props.hometown}</span>
      </h2>
      <p style={styles.description}>
        This is a simple React app demonstrating JSX and rendering elements.
      </p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "30px",
    fontFamily: "Arial, sans-serif",
    background: "linear-gradient(145deg, #d7b1d5, #c48bc1)",
    boxShadow: "8px 8px 16px #a874a0, -8px -8px 16px #ce8cb3",
    borderRadius: "15px",
    padding: "20px",
    width: "50%",
    margin: "30px auto",
    transition: "transform 0.3s ease-in-out",
  },

  text: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#4a4a4a", // Dark grey for better readability
  },

  highlight: {
    color: "#201a41",
    fontWeight: "bold",
  },

  description: {
    fontSize: "1.4rem",
    color: "#333",
  },
};

export default Profile;
