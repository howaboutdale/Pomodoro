import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Layout/NavBar";
import LandingPage from "./components/Pages/LandingPage";
import PomodoroTimerPage from "./components/Pages/PomodoroTimerPage";
import AboutPage from "./components/Pages/AboutPage";
import CustomTimerPage from "./components/Pages/CustomTimerPage";
import CompletedTaskListPage from "./components/Pages/CompletedTaskListPage"
import TaskListPage from "./components/Pages/TaskListPage"

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/pomodoro' element={<PomodoroTimerPage />} />
        <Route path='/custom' element={<CustomTimerPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/completed' element={<CompletedTaskListPage />} />
        <Route path='/tasklist' element={<TaskListPage />} />
      </Routes>

    </Router>
  );
}

export default App;
