import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const TimerDisplay = ({ workOrBreak, workTimerMinutes, workTimerSeconds, breakTimerMinutes, breakTimerSeconds, calculateProgress }) => {

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
            <CircularProgress
                variant="determinate"
                value={calculateProgress()}
                size={120}
                thickness={5}
                style={{ textAlign: 'center', height: 'fit-content', margin: 'auto' }}
            />
            <h2 style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%) translateY(-19px)' }}>
                {workOrBreak
                    ? `${workTimerMinutes.toString().padStart(2, '0')}:${workTimerSeconds.toString().padStart(2, '0')}`
                    : `${breakTimerMinutes.toString().padStart(2, '0')}:${breakTimerSeconds.toString().padStart(2, '0')}`}
            </h2>
        </div>
    )
}

export default TimerDisplay