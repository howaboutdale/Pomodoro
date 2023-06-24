import React, { useState, useEffect } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';

/*

should this be a seperate component
on one hand, the PomoTimer comp is getting chonky
on the other, this is directly related to it...

decisions decisions

get it working on the other one and then maybe move it later
*/


const BreakTImer = () => {
    const [breakTimerMinutes, setBreakTimerMinutes] = useState(5);
    const [breakTimerSeconds, setBreakTimerSeconds] = useState(0);
}
