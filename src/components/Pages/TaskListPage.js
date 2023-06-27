import React from 'react'
import DefaultLayout from "../Layout/DefaultLayout";
import TaskList from "../TaskList";

const TaskListPage = ({ todoList, setTodoList, currentTask, setCurrentTask, completeTodoList, setCompleteTodoList }) => {
    return (
        <DefaultLayout>
            <TaskList
                todoList={todoList}
                setTodoList={setTodoList}
                currentTask={currentTask}
                setCurrentTask={setCurrentTask}
                completeTodoList={completeTodoList}
                setCompleteTodoList={setCompleteTodoList}
            />
        </DefaultLayout>
    );
};

export default TaskListPage;