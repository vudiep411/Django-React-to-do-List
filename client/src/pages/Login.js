import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Paper } from '@material-ui/core'
import { useDispatch } from 'react-redux';
import { useNavigate  } from 'react-router-dom';
import { signin, signup } from '../actions/auth';
import { Alert } from '@mui/material';

const initialState = {email:'', password:'', confirmPassword:'', username: ''}

const Login = () => {
    const [isSignup, setIsSignup] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [formData, setFormData] = useState(initialState)
    const [alertMessage, setAlertMessage] = useState()
  
    const handleChange = (e) => {
      setFormData({...formData, [e.target.name] : e.target.value})
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault()
  
      // Check if all fields filled out
      if(isSignup && (!formData.username || !formData.email || !formData.password))
      {
        setAlertMessage("Please enter all required fields")
      }
      else if(!isSignup && (!formData.username || !formData.password))
      {
        setAlertMessage("Please enter all required fields")
      }
      // Check if passwords are matched
      else if(isSignup && (formData.password !== formData.confirmPassword))
      {
        setAlertMessage("Password do not match")
      }
  
      // Proceed to signup or signin
      else
      {
        if(isSignup)
            await dispatch(signup(formData, navigate, setAlertMessage))
        
        else
            await dispatch(signin(formData, navigate, setAlertMessage))     
        
      }  
    }
  return (
    <Container component="main" maxWidth="xs">    
        {alertMessage && ( 
        <Grid style={{marginBottom: '30px'}}>    
            <Alert severity="error">{alertMessage}</Alert>
        </Grid>    
        )}
        <Paper style={{padding: '20px', backgroundColor: 'rgb(64,64,64)'}} elevation={6}>       
            <Box
            sx={{
                marginTop: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
            <Avatar sx={{ bgcolor: 'rgb(255,127,80)', marginBottom:2}}>
                <LockOutlinedIcon />
            </Avatar>

            <Typography component="h1" variant="h5" sx={{ marginBottom:2, color: 'white' }}>{isSignup ? 'Sign up' : 'Sign In'}</Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    {isSignup && 
                    (<>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            onChange={handleChange}
                            InputProps={{
                                style: {
                                color: 'white',
                                
                            }}}
                            InputLabelProps={{
                                style: {color: 'rgb(120,120,120)'}
                            }}
                        />
                    </Grid>
                    </>)
                    }
                    <Grid item xs={12}>
                        <TextField
                        autoComplete="given-name"
                        name="username"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        autoFocus
                        onChange={handleChange}
                        InputProps={{
                            style: {
                            color: 'white',                          
                        }}}
                        InputLabelProps={{
                            style: {color: 'rgb(120,120,120)'}
                        }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                        onChange={handleChange}
                        InputProps={{
                            style: {
                            color: 'white',
                        }}}
                        InputLabelProps={{
                            style: {color: 'rgb(120,120,120)'}
                        }}
                        />
                    </Grid>
                    {isSignup && 
                    (<Grid item xs={12}>
                        <TextField
                        required
                        fullWidth
                        name="confirmPassword"
                        label="Confirm Password"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                        onChange={handleChange}
                        InputProps={{
                            style: {
                            color: 'white',
                        }}}
                        InputLabelProps={{
                            style: {color: 'rgb(120,120,120)'}
                        }}
                        />
                    </Grid>)}
                </Grid>   
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={handleSubmit}>
                    {isSignup ? 'Sign Up' : 'Sign in'}
                </Button>
                </form>
                <Grid container justifyContent="flex-end">                
                { isSignup ?
                    (<Grid item>
                        <Button variant="body2" onClick={() => {setIsSignup(false); setAlertMessage(''); setFormData(initialState)}}>Already have an account? Sign in</Button>
                    </Grid>) :
                    (<Grid item>
                        <Button variant="body2" onClick={() => {setIsSignup(true); setAlertMessage(''); setFormData(initialState)}}>Don't have an account? Sign up</Button>
                    </Grid>)}
                </Grid>
            </Box>
        </Paper>
    </Container>
  )
}

export default Login