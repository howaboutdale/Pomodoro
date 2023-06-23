import React, { useState, useEffect } from 'react'


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
        setMinutes(25);
        setSeconds(0)
        setIsRunning(false)
        setIsFinished(false)
    }

    return (
        <div>
            <h2>Time to Focus</h2>
            <div>
                {minutes.toString().padStart(2, '0')}:
                {seconds.toString().padStart(2, '0')}
            </div>
            {isFinished && <div>Good work!</div>}
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
            <button onClick={resetTimer}>Reset</button>
        </div>
    )
};

export default PomodoroTimer