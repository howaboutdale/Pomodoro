import React, { useState, useEffect } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';


/*
Might make more sense to have a button near the controls to do it, rather than up in the nav. Maybe both?

Need to add in break timer, + customise settings for it

Need to make tasklist component, want to keep that seperate I think to avoid screen clutter

*/

const PomodoroTimer = () => {
    const [workTimerMinutes, setWorkTimerMinutes] = useState(25);
    const [workTimerSeconds, setWorkTimerSeconds] = useState(0);
    const [isWorkTimerRunning, setIsWorkTimerRunning] = useState(false);
    const [isWorkTimerFinished, setIsWorkTimerFinished] = useState(false)
    const [customMinutes, setCustomMinutes] = useState(25)
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
                }
            }, 1000)
        }
        return () => clearInterval(interval)
    }, [isWorkTimerRunning, workTimerMinutes, workTimerSeconds])

    const startTimer = () => {
        setIsWorkTimerRunning(true)
        setIsWorkTimerFinished(false)
    }

    const stopTimer = () => {
        setIsWorkTimerRunning(false)
    }

    const resetTimer = () => {
        setWorkTimerMinutes(customMinutes);
        setWorkTimerSeconds(0)
        setIsWorkTimerRunning(false)
        setIsWorkTimerFinished(false)
    }

    const handleCustomInputChange = (event) => {
        setCustomMinutes(Number(event.target.value))
    }

    const toggleCustomInput = () => {
        setShowCustomInput(!showCustomInput)
    }

    const setCustomTimer = () => {
        setWorkTimerMinutes(customMinutes)
        setWorkTimerSeconds(0)
        setIsWorkTimerRunning(false)
        setIsWorkTimerFinished(false)
        setShowCustomInput(false)
    }

    return (
        <div>
            <h2 style={{ textAlign: 'center' }} >Time to Focus</h2>
            <div>
                <h2 style={{ textAlign: 'center' }}>{workTimerMinutes.toString().padStart(2, '0')}:
                    {workTimerSeconds.toString().padStart(2, '0')}</h2>
            </div>
            {isWorkTimerFinished && <div>Good work!</div>}
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