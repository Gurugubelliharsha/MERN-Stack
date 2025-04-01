import React from "react";
import PropTypes from "prop-types";
import { Typography, Paper } from "@mui/material";

const Greeting = ({ name }) => {
    return (
        <Paper elevation={3} style={{ padding: "15px", marginTop: "15px", backgroundColor: "#e3f2fd" }}>
            <Typography variant="h6">Hello, {name}!</Typography>
        </Paper>
    );
};

Greeting.defaultProps = {
    name: "Guest"
};

Greeting.propTypes = {
    name: PropTypes.string.isRequired
};

export default Greeting;
