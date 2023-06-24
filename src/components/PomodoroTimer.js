import React, { useState, useEffect } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';

const PomodoroTimer = () => {
    const [workTimerMinutes, setWorkTimerMinutes] = useState(25);
    const [breakTimerMinutes, setBreakTimerMinutes] = useState(5);
    const [workTimerSeconds, setWorkTimerSeconds] = useState(0);
    const [breakTimerSeconds, setBreakTimerSeconds] = useState(0);
    const [isWorkTimerRunning, setIsWorkTimerRunning] = useState(false);
    const [isBreakTimerRunning, setIsBreakTimerRunning] = useState(false);
    const [isWorkTimerFinished, setIsWorkTimerFinished] = useState(false)
    const [isBreakTimerFinished, setIsBreakTimerFinished] = useState(false)
    const [customWorkMinutes, setCustomWorkMinutes] = useState(25)
    const [customBreakMinutes, setCustomBreakMinutes] = useState(25)
    const [showCustomInput, setShowCustomInput] = useState(false)

    // use effect to run on render and again when the elements in the array change
    useEffect(() => {
        let interval
        // setInterval function is very handy, runs the if statements after the specified delay (1000ms)
        if (isWorkTimerRunning) {
            interval = setInterval(() => {
                if (workTimerSeconds > 0) {
                    setWorkTimerSeconds(workTimerSeconds - 1)
                } else if (workTimerMinutes > 0) {
                    setWorkTimerMinutes(workTimerMinutes - 1)
                    setWorkTimerSeconds(59)
                } else {
                    setIsWorkTimerFinished(true)
                    clearInterval(interval)
                    startBreakTimer()
                }
            }, 1000)
        }
        return () => clearInterval(interval)
    }, [isWorkTimerRunning, workTimerMinutes, workTimerSeconds])

    useEffect(() => {
        let interval
        // setInterval function is very handy, runs the if statements after the specified delay (1000ms)
        if (isBreakTimerRunning) {
            interval = setInterval(() => {
                if (breakTimerSeconds > 0) {
                    setBreakTimerSeconds(breakTimerSeconds - 1)
                } else if (breakTimerMinutes > 0) {
                    setBreakTimerMinutes(breakTimerMinutes - 1)
                    setBreakTimerSeconds(59)
                } else {
                    setIsBreakTimerFinished(true)
                    clearInterval(interval)
                    resetTimer()
                }
            }, 1000)
        }
        return () => clearInterval(interval)
    }, [isBreakTimerRunning, breakTimerMinutes, breakTimerSeconds])

    const startTimer = () => {
        setIsWorkTimerRunning(true)
        setIsWorkTimerFinished(false)
    }

    const startBreakTimer = () => {
        setIsBreakTimerRunning(true)
        setIsBreakTimerFinished(false)
    }

    const stopTimer = () => {
        setIsWorkTimerRunning(false)
        setIsBreakTimerRunning(false)
    }

    const resetTimer = () => {
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
        setCustomWorkMinutes(Number(event.target.value))
    }

    const handleBreakTimeChange = (event) => {
        setCustomBreakMinutes(Number(event.target.value))
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

    return (
        <div>
            <h2 style={{ textAlign: 'center' }} >Time to Focus</h2>
            <div>
                <h2 style={{ textAlign: 'center' }}>
                    {isWorkTimerRunning ? `${workTimerMinutes.toString().padStart(2, '0')}:${workTimerSeconds.toString().padStart(2, '0')}` :
                        `${breakTimerMinutes.toString().padStart(2, '0')}:${breakTimerSeconds.toString().padStart(2, '0')}`}
                </h2>
            </div>

            {isWorkTimerFinished && <div>Good work! Break Time!</div>}
            <Stack spacing={1} direction="row">
                {!showCustomInput && !isWorkTimerRunning && !isBreakTimerRunning && (
                    <Button onClick={startTimer} variant="contained">
                        Start
                    </Button>
                )}

                {(isWorkTimerRunning || isBreakTimerRunning) && (
                    <Button onClick={stopTimer} variant="contained">
                        Stop
                    </Button>
                )}
                {!showCustomInput && (
                    <Button onClick={resetTimer} variant="contained">
                        Reset
                    </Button>
                )}

                {!showCustomInput && (
                    <Button onClick={toggleCustomInput} variant="contained">
                        Customise Timer
                    </Button>
                )}
            </Stack>

            {showCustomInput && (
                <div>
                    <br />
                    <label>Work </label>
                    <OutlinedInput
                        type="text"
                        min={1}
                        value={Number(customWorkMinutes)}
                        onChange={handleWorkTimeChange}
                    />
                    <br />
                    <br />
                    <label>Break </label>
                    <OutlinedInput
                        type="text"
                        min={1}
                        value={Number(customBreakMinutes)}
                        onChange={handleBreakTimeChange}
                    />
                    <br />
                    <Button onClick={setCustomTimer}>Set Timer</Button>
                    <Button onClick={toggleCustomInput}>Cancel</Button>
                </div>
            )}
        </div>
    )
};

export default PomodoroTimer