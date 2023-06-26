import React from 'react'
import DefaultLayout from "../Layout/DefaultLayout";
import TaskList from "../TaskList";

const TaskListPage = ({ todoList, setTodoList, currentTask, setCurrentTask }) => {
    return (
        <DefaultLayout>
            <TaskList
                todoList={todoList}
                setTodoList={setTodoList}
                currentTask={currentTask}
                setCurrentTask={setCurrentTask} />
        </DefaultLayout>
    );
};

export default TaskListPage;