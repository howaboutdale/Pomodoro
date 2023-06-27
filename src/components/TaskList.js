import React, { useState } from 'react'
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';
import DeleteIcon from '@mui/icons-material/Delete';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PomodoroTimer from './PomodoroTimer';


const TaskList = ({ todoList, setTodoList, currentTask, setCurrentTask, setCompleteTodoList, completeTodoList }) => {
    const [newTask, setNewTask] = useState('')

    const handleChange = (event) => {
        setNewTask(event.target.value)
    }

    const addTask = () => {
        const task = {
            id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
            taskName: newTask,
            isComplete: false
        }
        setTodoList([...todoList, task])
        setNewTask('')

    }
    const deleteTask = (id) => {
        setTodoList(todoList.filter((task) => task.id !== id))

    }

    const startTimer = (taskName) => {
        setCurrentTask(taskName)
    }

    const showTaskList = () => {
        setCurrentTask(null);
    };
    // console.log('task list component', currentTask)
    return (
        <div>
            {currentTask ? (
                <div>
                    <div>
                        <Button style={{ margin: 'auto', display: 'block', marginBottom: '10px' }} onClick={showTaskList} variant="outlined">
                            Show Task List
                        </Button>
                        <h2 style={{ textAlign: 'center' }}>Current Task: {currentTask}</h2>

                    </div>


                    <PomodoroTimer
                        todoList={todoList}
                        setTodoList={setTodoList}
                        currentTask={currentTask}
                        setCurrentTask={setCurrentTask}
                        completeTodoList={completeTodoList}
                        setCompleteTodoList={setCompleteTodoList}
                    />


                </div>
            ) : (
                <div style={{ border: '1px solid black', borderRadius: '4%', paddingLeft: '10px', paddingRight: '10px', paddingBottom: '10px' }}>
                    <h2 style={{ textAlign: 'center' }}>Task List</h2>
                    <OutlinedInput onChange={handleChange} value={newTask} />
                    <Button onClick={addTask}>Add Task</Button>
                    <br />
                    {todoList.map((task) => (
                        <div key={task.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h3 style={{ textAlign: 'center', borderBottom: '1px solid rgba(239, 233, 236, 0.8)', flex: 1 }}>
                                {task.taskName}
                            </h3>
                            <div style={{ display: 'flex' }}>
                                <Button onClick={() => deleteTask(task.id)}>
                                    <DeleteIcon style={{ color: 'red' }} />
                                </Button>
                                <Button onClick={() => startTimer(task.taskName)}>
                                    <PlayArrowIcon />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

        </div>
    );
};

export default TaskList