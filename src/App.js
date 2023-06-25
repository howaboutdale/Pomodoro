import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Layout/NavBar";
import LandingPage from "./components/Pages/LandingPage";
import PomodoroTimerPage from "./components/Pages/PomodoroTimerPage";
import AboutPage from "./components/Pages/AboutPage";
import CompletedTaskListPage from "./components/Pages/CompletedTaskListPage"
import TaskListPage from "./components/Pages/TaskListPage"


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/completed' element={<CompletedTaskListPage />} />
        <Route path='/tasklist' element={<TaskListPage />} />
        <Route path='/pomodoro' element={<PomodoroTimerPage />} />
      </Routes>

    </Router>
  );
}

export default App;
