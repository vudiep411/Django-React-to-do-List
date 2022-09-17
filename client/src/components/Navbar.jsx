import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import Dropdown from './Dropdown';

const Navbar = () => {
 const navigate = useNavigate()
 const user  = JSON.parse(localStorage.getItem('profile'));


 return (
    <Box sx={{ flexGrow: 1 }} style={{marginBottom: '30px'}}>
        <AppBar position="static" style={{backgroundColor: 'rgb(64,64,64)'}}>
            <Toolbar>
                <Typography 
                    variant="h5" 
                    component="div" 
                    sx={{ flexGrow: 1 }} 
                    style={{cursor: 'pointer', color: 'whitesmoke'}}
                    onClick={() => navigate('/')}
                    >
                    <b>Notes</b>
                </Typography>
                {user &&                 
                    <Dropdown username={user.user?.username}/>
                }
            </Toolbar>
        </AppBar>
    </Box>
  )
}

export default Navbar