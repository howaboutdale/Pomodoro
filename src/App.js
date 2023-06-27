import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Layout/NavBar";
import LandingPage from "./components/Pages/LandingPage";
import PomodoroTimerPage from "./components/Pages/PomodoroTimerPage";
import AboutPage from "./components/Pages/AboutPage";
import CompletedTaskListPage from "./components/Pages/CompletedTaskListPage"
import TaskListPage from "./components/Pages/TaskListPage"
import { useState } from 'react';


function App() {
  const [todoList, setTodoList] = useState([])
  const [currentTask, setCurrentTask] = useState(null)
  const [completeTodoList, setCompleteTodoList] = useState([])
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<PomodoroTimerPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/completed' element={<CompletedTaskListPage
          completeTodoList={completeTodoList}
          setCompleteTodoList={setCompleteTodoList}
        />}
        />
        <Route path='/tasklist' element={<TaskListPage
          todoList={todoList}
          setTodoList={setTodoList}
          currentTask={currentTask}
          setCurrentTask={setCurrentTask}
          completeTodoList={completeTodoList}
          setCompleteTodoList={setCompleteTodoList}
        />}
        />
        <Route path='/pomodoro' element={<PomodoroTimerPage
          todoList={todoList}
          setTodoList={setTodoList}
          currentTask={currentTask}
          setCurrentTask={setCurrentTask}
          completeTodoList={completeTodoList}
          setCompleteTodoList={setCompleteTodoList}
        />}
        />
      </Routes>

    </Router>
  );
}

export default App;
