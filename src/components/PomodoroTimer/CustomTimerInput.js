import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';

const CustomTimerInput = ({ customWorkMinutes, handleWorkTimeChange, customBreakMinutes, handleBreakTimeChange, setCustomTimer, toggleCustomInput }) => {



    return (
        <div>
            <br />
            <label>Work </label>
            <OutlinedInput
                type="number"
                inputProps={{ min: 1, max: 60 }}
                value={Number(customWorkMinutes)}
                onChange={handleWorkTimeChange}
            />
            <br />
            <br />
            <label>Break </label>
            <OutlinedInput
                type="number"
                inputProps={{ min: 1, max: 60 }}
                value={Number(customBreakMinutes)}
                onChange={handleBreakTimeChange}
            />
            <br />
            <Button onClick={setCustomTimer}>Set Timer</Button>
            <Button onClick={toggleCustomInput}>Cancel</Button>
        </div>
    )
}

export default CustomTimerInput