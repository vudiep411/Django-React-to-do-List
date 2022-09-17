import * as api from '../API/index'

export const signin = (formData, navigate, setAlertMessage) => async(dispatch) => {

    const { data } = await api.signIn(formData)
                    .catch((err) => setAlertMessage('Wrong username or password'))

        try {
            if(data)
            {
                dispatch({type: 'AUTH', data})
                navigate('/')
            } 
            else
                return {msg: 'Username and password do not match'}            
        } catch (error) {
            console.log(error)
        }          
}

export const signup = (formData, navigate, setAlertMessage) => async(dispatch) => {
    const { data } = await api.signUp(formData)
                    .catch((err) => setAlertMessage('Username already exists or email is not valid'))
        try {
            if(data)
            {
                dispatch({type: 'AUTH', data})
                navigate('/')
                return data
            }
            else
                return {msg: 'Username already exists'}
        } catch (error) {
            console.log(error)
        }
    
}