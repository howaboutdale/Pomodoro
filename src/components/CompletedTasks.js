import React, { useState } from 'react'
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';
import DeleteIcon from '@mui/icons-material/Delete';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PomodoroTimer from './PomodoroTimer/PomodoroTimer';

const CompletedTasks = ({ completeTodoList, setCompleteTodoList }) => {
    const deleteTask = (id) => {
        setCompleteTodoList(completeTodoList.filter((task) => task.id !== id))

    }
    return (

        <div style={{ border: '1px solid black', borderRadius: '4%', paddingLeft: '10px', paddingRight: '10px', paddingBottom: '10px' }}>
            <h2 style={{ textAlign: 'center' }}>Completed Task List</h2>
            <br />
            {completeTodoList.length > 0 ? (
                completeTodoList.map((task) => (
                    <div key={task.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h3 style={{ textAlign: 'center', borderBottom: '1px solid rgba(239, 233, 236, 0.8)', flex: 1 }}>
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
            )}
        </div>
    )
}

export default CompletedTasks