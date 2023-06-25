import React, { useState, useEffect } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';
import DeleteIcon from '@mui/icons-material/Delete';


const TaskList = () => {
    const [todoList, setTodoList] = useState([])
    const [newTask, setNewTask] = useState('')

    const handleChange = (event) => {
        setNewTask(event.target.value)
    }

    const addTask = () => {
        const task = {
            id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
            taskName: newTask
        }
        setTodoList([...todoList, task])
        setNewTask('')

    }
    const deleteTask = (id) => {
        setTodoList(todoList.filter((task) => task.id !== id))

    }
    return (
        <div>
            <h2>Task List</h2>
            <div>
                <OutlinedInput
                    onChange={handleChange}
                    value={newTask}
                />
                <Button onClick={addTask}>Add Task</Button>
                <br></br>
                {todoList.map((task) => (
                    <div key={task.id}>
                        <h3>
                            {task.taskName}
                            <Button onClick={() => deleteTask(task.id)}>
                                <DeleteIcon />
                            </Button>
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TaskList