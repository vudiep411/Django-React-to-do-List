import React, { useState } from 'react'
import { Button, Box, Typography, Modal, TextField } from '@material-ui/core'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from 'react-redux';
import { addTask } from '../actions/tasks';
import Alert from '@mui/material/Alert';

const useStyles = makeStyles({
    input: {
      color: "white",
    }
  });
const AddTasks = ({width}) => {
    const style = {
        position: 'absolute',
        width: width,
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'rgb(64,64,64)',
        boxShadow: 24,
        p: 3,
        borderRadius: '5px',

    };
    const classes = useStyles();
    const dispatch = useDispatch()

    const [body, setBody] = useState('');
    const [title, setTitle] = useState('')
    const [open, setOpen] = React.useState(false);
    const [msg, setMsg] = useState()

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
      setOpen(false)
      setBody('')
      setMsg('')
      setTitle('')
    };

    const handleSubmit = () => {
      if(title && body)
      {
        dispatch(addTask({title: title, body: body}))
        handleClose()
      }
      else
        setMsg('Please Enter all fields !')
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Tab')
      {
        e.preventDefault()
        const cursorPosition = e.target.selectionStart;
        const cursorEndPosition = e.target.selectionEnd;
        const tab = '\t';
        e.target.value =
          body.substring(0, cursorPosition) +
          tab +
          body.substring(cursorEndPosition);      
        setBody(e.target.value)
        e.target.selectionStart = cursorPosition + 1;
        e.target.selectionEnd = cursorPosition + 1;
      }
    }

  return (
    <div>
      <Button onClick={handleOpen} style={{}}><AddCircleIcon fontSize="large" style={{color: 'rgb(255,127,80)'}}/></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <div style={{justifyContent: 'center', display: 'flex'}}>
                <Typography id="modal-modal-title" variant="h5" style={{color: 'white', marginBottom: '15px'}}>
                    <b>Add a Note</b>
                </Typography>
            </div>
                {msg && 
                <Alert severity="error" style={{marginBottom: '15px'}}>{msg}</Alert>}
            <div>
                <Typography variant="h6" style={{color: 'white'}}>Title:</Typography>
                <TextField
                    onChange={(e) => setTitle(e.target.value)} 
                    variant='outlined' 
                    inputProps={{ className: classes.input }} 
                    fullWidth
                    style={{marginBottom: '15px'}}
                />
                <Typography variant="h6" style={{color: 'white'}}>Description:</Typography>
                <TextField
                    onKeyDown={(e) => handleKeyDown(e)}
                    onChange={(e) => setBody(e.target.value)} 
                    variant='outlined' 
                    inputProps={{ className: classes.input }} 
                    fullWidth
                    multiline
                    minRows={4}
                    style={{marginBottom: '20px'}}
                />
            </div>
            <div style={{display: 'flex', justifyContent: 'flex-end', gap: '15px'}}>
                <Button variant="contained" onClick={handleSubmit} style={{backgroundColor: 'green', color: 'white'}}>Save</Button>
                <Button color='secondary' variant='contained' onClick={handleClose}>Cancel</Button>
            </div>
        </Box>
      </Modal>        
    </div>
  )
}

export default AddTasks