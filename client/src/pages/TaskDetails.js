import { Container, Divider, Paper, Typography } from '@material-ui/core'
import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getOneTask } from '../actions/tasks'

const TaskDetails = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const task = useSelector(state => state.tasks[0])
  useEffect(() => {
    dispatch(getOneTask(id))
  }, [id])
  
  return (
    <Container maxWidth='sm'>
      <Paper style={{backgroundColor: 'rgb(64,64,64)', padding: '10px', minHeight: '90vh'}}>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <Typography variant='h4' style={{color: 'white'}}>{task?.title}</Typography>
        </div>
        <br/>
        <Divider style={{backgroundColor: 'rgb(32,32,32)'}}/>
        <br/>
        <Typography 
          variant='body2' 
          style={{color: 'rgb(200,200,200)', marginBottom: '5px', whiteSpace: 'pre'}}
        >
        {task.body}
        </Typography>
      </Paper>
    </Container>
  )
}

export default TaskDetails