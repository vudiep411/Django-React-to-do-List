import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
 const navigate = useNavigate()
 return (
    <Box sx={{ flexGrow: 1 }} style={{marginBottom: '30px'}}>
        <AppBar position="static" style={{backgroundColor: 'rgb(64,64,64)'}}>
            <Toolbar>
            <Typography 
                variant="h5" 
                component="div" 
                sx={{ flexGrow: 1 }} 
                style={{cursor: 'pointer'}}
                onClick={() => navigate('/')}
                >
                <b>Notes</b>
            </Typography>
            <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    </Box>
  )
}

export default Navbar