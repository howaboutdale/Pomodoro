import React, { useState } from 'react'
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';
import DeleteIcon from '@mui/icons-material/Delete';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PomodoroTimer from './PomodoroTimer';

const CompletedTasks = ({ completeTodoList, setCompleteTodoList }) => {
    const deleteTask = (id) => {
        setCompleteTodoList(completeTodoList.filter((task) => task.id !== id))

    }
    return (

        <div>
            <h2 style={{ textAlign: 'center' }}>Completed Task List</h2>
            <br />
            {completeTodoList.map((task) => (
                <div key={task.id}>
                    <h3 style={{ textAlign: 'center' }}>
                        {task.taskName}
                        <Button onClick={() => deleteTask(task.id)}>
                            <DeleteIcon style={{ color: 'red' }} />
                        </Button>
                    </h3>
                </div>
            ))}
        </div>
    )
}

export default CompletedTasks