import * as React from 'react';
import { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    textAlign: 'center'
};

export default function TransitionsModal({ autoOpenModal, todoList, currentTask, completeTodoList, setCompleteTodoList }) {
    const [open, setOpen] = React.useState(autoOpenModal);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const updateTaskCompleteStatus = () => {
        const updatedTodoList = todoList.map((task) => {
            if (task.taskName === currentTask) {
                return { ...task, isComplete: true }
            }
            return task
        })
        const completedTask = updatedTodoList.find((task => task.taskName === currentTask))

        setCompleteTodoList([...completeTodoList, completedTask])
        // function that matches currenttask to object in todoList array
        // then changes that objects .isComplete to true
        // updates the completeTodoList array by adding the completed task
    }

    const handleTaskComplete = () => {
        updateTaskCompleteStatus()
        handleClose()
    }




    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            Great work! Did you finish your task?
                        </Typography>
                        <br />
                        <Stack spacing={1} direction="row">
                            <Button style={{ margin: 'auto', display: 'block' }} onClick={handleClose} variant="contained">
                                Not Quite...
                            </Button>
                            <Button style={{ margin: 'auto', display: 'block' }} onClick={handleTaskComplete} variant="contained">
                                All Done!
                            </Button>
                        </Stack>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}