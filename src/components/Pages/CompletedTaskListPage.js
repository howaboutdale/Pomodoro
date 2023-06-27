import DefaultLayout from "../Layout/DefaultLayout";
import CompletedTasks from "../CompletedTasks";
import React from 'react'

const CompletedTaskListPage = ({ completeTodoList, setCompleteTodoList }) => {
    return (
        <DefaultLayout>
            <h1>Completed Task List Page</h1>
            <CompletedTasks
                completeTodoList={completeTodoList}
                setCompleteTodoList={setCompleteTodoList}
            />
        </DefaultLayout>
    );
};

export default CompletedTaskListPage;