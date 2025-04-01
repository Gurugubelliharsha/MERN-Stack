import React, { useState } from "react";
import { Paper, Typography, Button } from "@mui/material";

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <Paper elevation={3} style={{ padding: "15px", marginTop: "15px", textAlign: "center", backgroundColor: "#ffecb3" }}>
            <Typography variant="h6">Counter: {count}</Typography>
            <Typography variant="body1">{count % 2 === 0 ? "Count is even" : "Count is odd"}</Typography>

            <Button
                variant="contained"
                color="secondary"
                onClick={() => setCount(count + 1)}
                style={{ marginTop: "10px" }}
            >
                Increase Count
            </Button>
        </Paper>
    );
};

export default Counter;
