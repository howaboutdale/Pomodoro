import React from 'react'
import DefaultLayout from "../Layout/DefaultLayout";
import PomodoroTimer from "../PomodoroTimer";

const PomodoroTimerPage = ({ todoList, setTodoList, currentTask, setCurrentTask }) => {
    return (
        <DefaultLayout>
            <h1>Pomodoro Timer Page</h1>
            <PomodoroTimer
                todoList={todoList}
                setTodoList={setTodoList}
                currentTask={currentTask}
                setCurrentTask={setCurrentTask} />
        </DefaultLayout>
    );
};

export default PomodoroTimerPage;