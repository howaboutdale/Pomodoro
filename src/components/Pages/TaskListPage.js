import DefaultLayout from "../Layout/DefaultLayout";
import TaskList from "../TaskList";

const TaskListPage = () => {
    return (
        <DefaultLayout>
            <h1>Task List Page</h1>
            <TaskList />
        </DefaultLayout>
    );
};

export default TaskListPage;