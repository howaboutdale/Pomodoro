import DefaultLayout from "../Layout/DefaultLayout";

const AboutPage = () => {
    return (
        <DefaultLayout>
            <h1>Welcome to Pomodoro Pro!</h1>
            <h3 style={{ textAlign: 'center', marginTop: '0px' }}>About Us:</h3>
            <p style={{ textAlign: 'center', marginTop: '0px' }}>


                Pomodoro Pro is an innovative productivity app designed to enhance your focus and help you accomplish your tasks with maximum efficiency. With a unique combination of the renowned Pomodoro Technique and a built-in task list feature, our app empowers you to manage your time effectively and achieve your goals like a pro.
            </p>
        </DefaultLayout >
    );
};

export default AboutPage;