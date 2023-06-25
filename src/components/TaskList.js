import React, { useState, useEffect } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';
import DeleteIcon from '@mui/icons-material/Delete';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PomodoroTimer from './PomodoroTimer';


const TaskList = () => {
    const [todoList, setTodoList] = useState([])
    const [newTask, setNewTask] = useState('')
    const [selectedTask, setSelectedTask] = useState(null)

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

    const startTimer = (taskName) => {
        setSelectedTask(taskName)
    }

    const resetTimer = () => {
        setSelectedTask(null);
    };
    return (
        <div>
            {selectedTask ? (
                <div>
                    <h2 style={{ textAlign: 'center' }}>Current Task: {selectedTask}</h2>
                    <PomodoroTimer
                        taskName={selectedTask}
                        resetTimer={resetTimer}
                    />
                </div>
            ) : (
                <div>
                    <h2 style={{ textAlign: 'center' }}>Task List</h2>
                    <OutlinedInput onChange={handleChange} value={newTask} />
                    <Button onClick={addTask}>Add Task</Button>
                    <br />
                    {todoList.map((task) => (
                        <div key={task.id}>
                            <h3 style={{ textAlign: 'center' }}>
                                {task.taskName}
                                <Button onClick={() => deleteTask(task.id)}>
                                    <DeleteIcon style={{ color: 'red' }} />
                                </Button>
                                <Button onClick={() => startTimer(task.taskName)}>
                                    <PlayArrowIcon />
                                </Button>
                            </h3>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default TaskList