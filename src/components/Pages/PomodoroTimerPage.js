import React from 'react'
import DefaultLayout from "../Layout/DefaultLayout";
import PomodoroTimer from "../PomodoroTimer";

const PomodoroTimerPage = ({ todoList, setTodoList, currentTask, setCurrentTask, setCompleteTodoList, completeTodoList }) => {
    return (
        <DefaultLayout>
            <h1>Pomodoro Timer Page</h1>
            <PomodoroTimer
                todoList={todoList}
                setTodoList={setTodoList}
                currentTask={currentTask}
                setCurrentTask={setCurrentTask}
                completeTodoList={completeTodoList}
                setCompleteTodoList={setCompleteTodoList} />
        </DefaultLayout>
    );
};

export default PomodoroTimerPage;