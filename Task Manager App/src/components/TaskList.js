import React from "react";
import { List, ListItem, ListItemText, Paper, Typography } from "@mui/material";

const TaskList = ({ tasks }) => {
    return (
        <Paper elevation={3} style={{ padding: "10px", marginTop: "20px", backgroundColor: "#e8f5e9" }}>
            <Typography variant="h6">Task List</Typography>
            <List>
                {tasks.map((task) => (
                    <ListItem key={task.id}>
                        <ListItemText primary={task.name} />
                    </ListItem>
                ))}
            </List>
        </Paper>
    );
};

export default TaskList;
