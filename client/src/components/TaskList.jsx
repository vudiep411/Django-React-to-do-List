import { Paper, Typography, Divider, Button } from '@material-ui/core'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector, useDispatch } from 'react-redux'
import { deleteTask } from '../actions/tasks';
import { useNavigate } from 'react-router-dom'

const TaskList = ({searchText}) => {
  const dispatch = useDispatch()
  const tasks = useSelector((state) => state.tasks)
  const navigate = useNavigate()

  const filtered = !searchText ? tasks :
  tasks?.filter((task) => {
    const bodyTitle = task.title + task.body
    return bodyTitle.toString().toLowerCase().includes(searchText.toLowerCase())
  })

  const handleDelete = (id) => {
    dispatch(deleteTask(id))
  }

  return (
    tasks?.length === 0 ? (
      <div style={{marginTop: '20px'}}>
        <Typography variant='h4' style={{color: 'rgb(144,144,144)'}}><b>Your list is empty !!</b></Typography><br/>
      </div>
    ) : (
      <Paper style={{ backgroundColor: 'rgb(64,64,64)'}}>
          {filtered?.map((task) => (
            <div key={task.id}>
              <div style={{ padding: '7px'}}>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <Typography variant='h6' style={{color: 'white', cursor: 'pointer'}} onClick={() => navigate(`/tasks/${task.id}`)}>{task.title}</Typography>
                  <Button color='secondary'><DeleteIcon fontSize='small' onClick={() => {handleDelete(task.id)}}/></Button>
                </div>
                  <Typography
                    onClick={() => navigate(`/tasks/${task.id}`)}
                    variant='body2' 
                    style={{color: 'rgb(200,200,200)', marginBottom: '5px', overflow: 'hidden', whiteSpace: 'no-wrap', textOverflow:'ellipsis', cursor: 'pointer'}}
                  >
                    {task.body}
                  </Typography>
              </div>
              <Divider style={{backgroundColor: 'rgb(32,32,32)'}}/>
            </div>
          ))}
      </Paper>
    )

    
  )
}

export default TaskList