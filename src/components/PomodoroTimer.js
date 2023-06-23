import React, { useState, useEffect } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';


/*
Basic timer functionality, need to add in the ability to customise the minutes/seconds.

Might make more sense to have a button near the controls to do it, rather than up in the nav. Maybe both?

Need to make tasklist component, want to keep that seperate I think to avoid screen clutter

*/

const PomodoroTimer = () => {
    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [isFinished, setIsFinished] = useState(false)
    const [customMinutes, setCustomMinutes] = useState(25)
    const [showCustomInput, setShowCustomInput] = useState(false)

    useEffect(() => {
        let interval
        // setInterval function is very handy, runs the if statements after the specified delay (1000ms)
        if (isRunning) {
            interval = setInterval(() => {
                if (seconds > 0) {
                    setSeconds(seconds - 1)
                } else if (minutes > 0) {
                    setMinutes(minutes - 1)
                    setSeconds(59)
                } else {
                    setIsFinished(true)
                    clearInterval(interval)
                }
            }, 1000)
        }
        return () => clearInterval(interval)
    }, [isRunning, minutes, seconds])

    const startTimer = () => {
        setIsRunning(true)
        setIsFinished(false)
    }

    const stopTimer = () => {
        setIsRunning(false)
    }

    const resetTimer = () => {
        setMinutes(customMinutes);
        setSeconds(0)
        setIsRunning(false)
        setIsFinished(false)
    }

    const handleCustomInputChange = (event) => {
        setCustomMinutes(Number(event.target.value))
    }

    const toggleCustomInput = () => {
        setShowCustomInput(!showCustomInput)
    }

    const setCustomTimer = () => {
        setMinutes(customMinutes)
        setSeconds(0)
        setIsRunning(false)
        setIsFinished(false)
        setShowCustomInput(false)
    }

    return (
        <div>
            <h2 style={{ textAlign: 'center' }} >Time to Focus</h2>
            <div>
                <h2 style={{ textAlign: 'center' }}>{minutes.toString().padStart(2, '0')}:
                    {seconds.toString().padStart(2, '0')}</h2>
            </div>
            {isFinished && <div>Good work!</div>}
            <Stack spacing={1} direction="row">
                <Button onClick={startTimer} variant="contained">Start</Button>
                <Button onClick={stopTimer} variant="contained">Stop</Button>
                <Button onClick={resetTimer} variant="contained">Reset</Button>
                {!showCustomInput && (
                    <Button onClick={toggleCustomInput} variant="contained">Customise Timer</Button>
                )}
            </Stack>


            {showCustomInput && (
                <div>
                    <br />
                    <OutlinedInput
                        type="text"
                        min={1}
                        value={Number(customMinutes)}
                        onChange={handleCustomInputChange}
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