

import React from "react";
import { FaHome } from "react-icons/fa"; // Importing a welcome handshake icon

const Header = (props) => {
  return (
    <header style={styles.header}>
      <h1>
        <FaHome style={styles.icon} /> {props.title}
      </h1>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: "#611b3e",
    color: "white",
    padding: "15px",
    textAlign: "center",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
  },
  icon: {
    color: "#D4AF37 ", // Gold color icon
    marginRight: "10px",
    border: "2px solid #FFD700", // Gold border
    borderRadius: "50%", // Circle shape
    padding: "5px",
    position: "relative",
    top: "5px",
  },
};

export default Header;

