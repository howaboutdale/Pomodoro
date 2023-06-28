import React from 'react'
import { Stack } from '@mui/material'
import Button from '@mui/material/Button'

const TimerControls = ({ isWorkTimerRunning, isBreakTimerRunning, showCustomInput, startTimer, stopTimer, resetTimer, toggleCustomInput }) => {

    return (
        <Stack spacing={1} direction="row" justifyContent="space-between">
            {!showCustomInput && !isWorkTimerRunning && !isBreakTimerRunning && (
                <Button onClick={startTimer} variant="contained" style={{ flexGrow: 1 }}>
                    Start
                </Button>
            )}

            {(isWorkTimerRunning || isBreakTimerRunning) && (
                <Button onClick={stopTimer} variant="contained" style={{ flexGrow: 1 }}>
                    Stop
                </Button>
            )}

            {!showCustomInput && (
                <Button onClick={resetTimer} variant="contained" style={{ flexGrow: 1 }}>
                    Reset
                </Button>
            )}

            {!showCustomInput && (
                <Button onClick={toggleCustomInput} variant="contained" style={{ flexGrow: 1 }}>
                    Customise Timer
                </Button>
            )}
        </Stack>
    )
}

export default TimerControls