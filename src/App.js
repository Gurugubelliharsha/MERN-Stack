import React, { useState } from "react";
import { Container, AppBar, Toolbar, Typography, Paper, TextField, Button, List, ListItem, ListItemText, IconButton } from "@mui/material";
import { Delete, CheckCircle, AddTask } from "@mui/icons-material";
import Greeting from "./components/Greeting";
import TaskList from "./components/TaskList";
import Counter from "./components/Counter";

const App = () => {
    const [tasks, setTasks] = useState([
        { id: 1, name: "Complete React Assignment", completed: false },
        { id: 2, name: "Push to GitHub", completed: false }
    ]);
    const [taskInput, setTaskInput] = useState("");

    const addTask = () => {
        if (taskInput.trim() === "") return;
        setTasks([...tasks, { id: tasks.length + 1, name: taskInput, completed: false }]);
        setTaskInput("");
    };

    const toggleTask = (id) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <Container maxWidth="sm">
            {/* Header */}
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Typography variant="h6">Task Manager</Typography>
                </Toolbar>
            </AppBar>

            {/* Greeting Component */}
            <Greeting name="Kusuma" />

            {/* Task Manager */}
            <Paper elevation={3} style={{ padding: "20px", marginTop: "20px", backgroundColor: "#f9f9f9" }}>
                <Typography variant="h5">Manage Your Tasks</Typography>
                
                <TextField
                    label="New Task"
                    variant="outlined"
                    fullWidth
                    value={taskInput}
                    onChange={(e) => setTaskInput(e.target.value)}
                    style={{ marginTop: "10px" }}
                />
                
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<AddTask />}
                    onClick={addTask}
                    style={{ marginTop: "10px", width: "100%" }}
                >
                    Add Task
                </Button>

                <List>
                    {tasks.map(task => (
                        <ListItem key={task.id} style={{ textDecoration: task.completed ? "line-through" : "none" }}>
                            <ListItemText primary={task.name} />
                            
                            <IconButton color="success" onClick={() => toggleTask(task.id)}>
                                <CheckCircle />
                            </IconButton>

                            <IconButton color="error" onClick={() => deleteTask(task.id)}>
                                <Delete />
                            </IconButton>
                        </ListItem>
                    ))}
                </List>
            </Paper>

            {/* Task List Component */}
            <TaskList tasks={tasks} />

            {/* Counter Component */}
            <Counter />

            {/* Footer */}
            <Paper elevation={3} style={{ textAlign: "center", padding: "10px", marginTop: "20px", backgroundColor: "#3f51b5", color: "white" }}>
                <Typography variant="body1">Task Manager App © 2025</Typography>
            </Paper>
        </Container>
    );
};

export default App;
