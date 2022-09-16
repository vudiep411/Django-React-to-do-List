import { Container, Divider, Paper, TextField, Typography, Button } from '@material-ui/core'
import { textAlign } from '@mui/system'
import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getOneTask, updateTask } from '../actions/tasks'
import EditIcon from '@mui/icons-material/Edit';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';

const TaskDetails = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const [body, setBody] = useState()
  const [title, setTitle] = useState()
  const [isEdit, setIsEdit] = useState(false)
  const [time, setTime] = useState('')
  useEffect(() => {
    const fetch = async () =>{
      const data  = await dispatch(getOneTask(id))
      setBody(data.body)
      setTitle(data.title)
      setTime(data.updated)
    }
    fetch()
  }, [id, dispatch])
  
  const task = useSelector(state => state.tasks[0])
  if(!task) return null
  
  const handleUpdate = () => {
    dispatch(updateTask(id, {
      title: title,
      body: body
    }))
  }

  const handleIsEdit = () => {
    if(isEdit)
      setIsEdit(false)
    else
      setIsEdit(true)
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
  const timeFormat = (time) => {
    let format = ""
    for(let i = 0; i < time.length; i++)
    {
      if(time[i] === 'T')
        break;
      if(time[i] === '-')
        format += '/'
      else
        format += time[i]
    }
    return format
  }
  return (
    <Container maxWidth='sm'>
      <Paper style={{backgroundColor: 'rgb(64,64,64)', padding: '10px', minHeight: '80vh'}}>
        <Typography variant='body2' style={{color: 'rgb(120,120,120)'}}>{timeFormat(time)}</Typography>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          { !isEdit ? (
            <div style={{display: 'flex', marginTop: '5px'}}>
              <Typography variant='h4' style={{color: 'white', wordBreak: 'break-word'}}><b>{task?.title}</b></Typography> 
            </div>
          ) : (
            <TextField
              value={title}
              onChange={(e) => {setTitle(e.target.value)}}
              multiline
              InputProps={{
                disableUnderline: true, 
                style: {
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '35px',
                }}}
          />
          )
          }
          <p onClick={handleIsEdit} style={{cursor: 'pointer', color: 'rgb(255,127,80)', marginLeft: '10px'}}>
          {!isEdit ? 
          (
            <EditIcon fontSize='small'/>
          ) : (
            <CloseFullscreenIcon fontSize='small'/>
          )}
        </p>
        </div>
        <br/>
        <Divider style={{backgroundColor: 'rgb(32,32,32)'}}/>
        <br/>
        <TextField
          onKeyDown={(e) => handleKeyDown(e)}
          fullWidth
          value={body}
          onChange={(e) => {setBody(e.target.value)}}
          multiline
          InputProps={{
            disableUnderline: true, 
            style: {color: 'white'}
          }}
        />
        { (body !== task.body || title !== task.title)&&
          <Button 
            onClick={handleUpdate}
            style={{backgroundColor: 'rgb(255,127,80)', color: 'white', marginTop: '15px'}}>Save</Button>
        }
      </Paper>
    </Container>
  )
}

export default TaskDetails