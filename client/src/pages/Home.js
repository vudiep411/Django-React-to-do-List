import React from 'react'
import { useState, useEffect } from 'react'
import { Typography } from '@mui/material'
import { Container } from '@mui/system'
import SearchBar from '../components/SearchBar'
import MediaQuery from 'react-responsive'
import TaskList from '../components/TaskList'
import AddTasks from '../components/AddTasks'
import { useDispatch } from 'react-redux'
import { getTasks } from '../actions/tasks'

const Home = () => {
    const dispatch = useDispatch()
    const [searchText, setSearchText] = useState("")
    const user  = JSON.parse(localStorage.getItem('profile'));
    const id = user?.user.id
    useEffect(() => {
      dispatch(getTasks(id))
    }, [dispatch])

    // const handleUpdate = async (id) => {
    //   await axios.put(`http://localhost:8000/notes/${id}/`, {body: body})
    // }
  return (
      <Container maxWidth='sm' style={{marginTop: '20px'}}>
        <div style={{justifyContent: 'space-between', display: 'flex'}}>
          <Typography variant='h3' color='white'><b>Your Notes</b></Typography><br/>
          <MediaQuery minWidth={750}>
            <AddTasks width='500px'/>
          </MediaQuery>
          <MediaQuery maxWidth={749}>
            <AddTasks width='300px'/>
          </MediaQuery>
        </div><br/>
        <SearchBar searchText={searchText} setSearchText={setSearchText} /><br/>
      <TaskList searchText={searchText}/>
      </Container>      
  )
}

export default Home