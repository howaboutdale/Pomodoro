import DefaultLayout from "../Layout/DefaultLayout";
import CompletedTasks from "../CompletedTasks";
import React from 'react'

const CompletedTaskListPage = ({ completeTodoList, setCompleteTodoList }) => {
    return (
        <DefaultLayout>
            <CompletedTasks
                completeTodoList={completeTodoList}
                setCompleteTodoList={setCompleteTodoList}
            />
        </DefaultLayout>
    );
};

export default CompletedTaskListPage;