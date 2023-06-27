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
            {completeTodoList.length > 0 ? (
                completeTodoList.map((task) => (
                    <div key={task.id}>
                        <h3 style={{ textAlign: 'center' }}>
                            {task.taskName}
                            <Button onClick={() => deleteTask(task.id)}>
                                <DeleteIcon style={{ color: 'red' }} />
                            </Button>
                        </h3>
                    </div>
                ))
            ) : (
                <div style={{ textAlign: 'center' }}>
                    <h2>.....</h2>
                    <h4>It looks like you haven't completed any tasks yet.</h4>
                    <p> If you navigate to the Task List page, you can add some tasks to complete.</p>
                </div>
            )
            }
        </div >
    )
}

export default CompletedTasks