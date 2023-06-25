import React, { useState, useEffect } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';


const TaskList = () => {
    const [todoList, setTodoList] = useState([])
    const [newTask, setNewTask] = useState('')

    const handleChange = (event) => {
        setNewTask(event.target.value)
    }

    const addTask = () => {
        setTodoList([...todoList, newTask])
        setNewTask('')

    }
    return (
        <div>
            <h2>Task List</h2>
            <div>
                <label>#1 </label>
                <OutlinedInput
                    onChange={handleChange}
                    value={newTask}
                />
                <Button onClick={addTask}>Add Task</Button>
                <br></br>
                {todoList.map((task, index) => {
                    return <div>
                        <h3 key={index}>
                            {task}
                            <IconButton aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                        </h3>
                    </div>
                })}
            </div>
        </div>
    )
}

export default TaskList