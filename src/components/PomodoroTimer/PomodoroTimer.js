import React, { useState, useEffect } from 'react'
import TransitionsModal from '../TransitionsModal';
import TimerDisplay from './TimerDisplay';
import TimerControls from './TimerControls';
import CustomTimerInput from './CustomTimerInput';

const PomodoroTimer = ({ todoList, setTodoList, currentTask, setCurrentTask, setCompleteTodoList, completeTodoList }) => {
    const [workOrBreak, setWorkOrBreak] = useState(true)
    // Timer Minute/Second
    const [workTimerMinutes, setWorkTimerMinutes] = useState(25);
    const [breakTimerMinutes, setBreakTimerMinutes] = useState(5);
    const [workTimerSeconds, setWorkTimerSeconds] = useState(0);
    const [breakTimerSeconds, setBreakTimerSeconds] = useState(0);
    // -----------------------------------------------------------------
    // Are Timers running / finished?
    const [isWorkTimerRunning, setIsWorkTimerRunning] = useState(false);
    const [isBreakTimerRunning, setIsBreakTimerRunning] = useState(false);
    const [isWorkTimerFinished, setIsWorkTimerFinished] = useState(false)
    const [isBreakTimerFinished, setIsBreakTimerFinished] = useState(false)
    // ---------------------------------------------------------------------------
    // Custom Input
    const [customWorkMinutes, setCustomWorkMinutes] = useState(25)
    const [customBreakMinutes, setCustomBreakMinutes] = useState(5)
    const [showCustomInput, setShowCustomInput] = useState(false)

    // Break Timer useEffect
    useEffect(() => {
        let interval
        if (isBreakTimerRunning) {
            interval = setInterval(() => {
                if (breakTimerSeconds > 0) {
                    setBreakTimerSeconds(breakTimerSeconds - 1)
                } else if (breakTimerMinutes > 0) {
                    setBreakTimerMinutes(breakTimerMinutes - 1)
                    setBreakTimerSeconds(59)
                } else {
                    setIsBreakTimerFinished(true)
                    setIsBreakTimerRunning(false)
                    clearInterval(interval)
                    resetTimer()
                }
            }, 1000)
        }
        return () => clearInterval(interval)
    }, [isBreakTimerRunning, breakTimerMinutes, breakTimerSeconds])

    // Work Timer useEffect
    useEffect(() => {
        let interval
        if (isWorkTimerRunning) {
            interval = setInterval(() => {
                if (workTimerSeconds > 0) {
                    setWorkTimerSeconds(workTimerSeconds - 1)
                } else if (workTimerMinutes > 0) {
                    setWorkTimerMinutes(workTimerMinutes - 1)
                    setWorkTimerSeconds(59)
                } else {
                    setIsWorkTimerFinished(true)
                    setIsWorkTimerRunning(false)
                    setWorkOrBreak(false)
                    clearInterval(interval)
                }
            }, 1000)
        }
        return () => clearInterval(interval)
    }, [isWorkTimerRunning, workTimerMinutes, workTimerSeconds])

    const startTimer = () => {
        if (workOrBreak) {
            setIsWorkTimerRunning(true)
            setIsWorkTimerFinished(false)
        } else {
            setIsBreakTimerRunning(true)
            setIsBreakTimerFinished(false)
        }
    }

    const stopTimer = () => {
        if (workOrBreak) {
            setIsWorkTimerRunning(false)
            setIsWorkTimerFinished(false)
        } else {
            setIsBreakTimerRunning(false)
            setIsBreakTimerFinished(false)
        }
    }

    const resetTimer = () => {
        setWorkOrBreak(true)
        setWorkTimerMinutes(customWorkMinutes);
        setBreakTimerMinutes(customBreakMinutes)
        setWorkTimerSeconds(0)
        setBreakTimerSeconds(0)
        setIsWorkTimerRunning(false)
        setIsBreakTimerRunning(false)
        setIsWorkTimerFinished(false)
        setIsBreakTimerFinished(false)
    }

    const handleWorkTimeChange = (event) => {
        let newWorkValue = Number(event.target.value)
        if (newWorkValue < 1) {
            newWorkValue = 1
        } else if (newWorkValue > 60) {
            newWorkValue = 60
        }
        setCustomWorkMinutes(newWorkValue)
    }

    const handleBreakTimeChange = (event) => {
        let newBreakValue = Number(event.target.value)
        if (newBreakValue < 1) {
            newBreakValue = 1
        } else if (newBreakValue > 60) {
            newBreakValue = 60
        }
        setCustomBreakMinutes(newBreakValue)
    }

    const toggleCustomInput = () => {
        setShowCustomInput(!showCustomInput)
    }

    const setCustomTimer = () => {
        setWorkTimerMinutes(customWorkMinutes)
        setBreakTimerMinutes(customBreakMinutes)
        setWorkTimerSeconds(0)
        setBreakTimerSeconds(0)
        setIsWorkTimerRunning(false)
        setIsBreakTimerRunning(false)
        setIsWorkTimerFinished(false)
        setIsBreakTimerFinished(false)
        setShowCustomInput(false)
    }

    const calculateProgress = () => {
        if (workOrBreak) {
            const totalWorkSeconds = customWorkMinutes * 60;
            const remainingWorkSeconds =
                workTimerMinutes * 60 + workTimerSeconds;
            return ((totalWorkSeconds - remainingWorkSeconds) / totalWorkSeconds) * 100;
        } else {
            const totalBreakSeconds = customBreakMinutes * 60;
            const remainingBreakSeconds =
                breakTimerMinutes * 60 + breakTimerSeconds;
            return ((totalBreakSeconds - remainingBreakSeconds) / totalBreakSeconds) * 100;
        }
    };
    return (
        <div style={{ border: '1px solid black', padding: '10px', borderRadius: '3%' }}>
            {currentTask !== null && isWorkTimerFinished && (
                <div>
                    <TransitionsModal
                        autoOpenModal={true}
                        todoList={todoList}
                        currentTask={currentTask}
                        completeTodoList={completeTodoList}
                        setCompleteTodoList={setCompleteTodoList}
                    />
                </div>
            )}
            {isWorkTimerFinished ? (
                <h2 style={{ textAlign: 'center' }}>Enjoy your break!</h2>
            ) : (
                <h2 style={{ textAlign: 'center' }}>Time to Focus!</h2>
            )}

            <TimerDisplay
                workOrBreak={workOrBreak}
                workTimerMinutes={workTimerMinutes}
                workTimerSeconds={workTimerSeconds}
                breakTimerMinutes={breakTimerMinutes}
                breakTimerSeconds={breakTimerSeconds}
                calculateProgress={calculateProgress}
            />
            <br />
            <TimerControls
                isWorkTimerRunning={isWorkTimerRunning}
                isBreakTimerRunning={isBreakTimerRunning}
                showCustomInput={showCustomInput}
                startTimer={startTimer}
                stopTimer={stopTimer}
                resetTimer={resetTimer}
                toggleCustomInput={toggleCustomInput}
            />

            {showCustomInput && (
                <CustomTimerInput
                    customWorkMinutes={customWorkMinutes}
                    handleWorkTimeChange={handleWorkTimeChange}
                    customBreakMinutes={customBreakMinutes}
                    handleBreakTimeChange={handleBreakTimeChange}
                    setCustomTimer={setCustomTimer}
                    toggleCustomInput={toggleCustomInput} />
            )}
        </div>
    );
};

export default PomodoroTimer