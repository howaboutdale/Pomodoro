import DefaultLayout from "../Layout/DefaultLayout";
import PomodoroTimer from "../PomodoroTimer";

const PomodoroTimerPage = () => {
    return (
        <DefaultLayout>
            <h1>Pomodoro Timer Page</h1>
            <PomodoroTimer />
        </DefaultLayout>
    );
};

export default PomodoroTimerPage;