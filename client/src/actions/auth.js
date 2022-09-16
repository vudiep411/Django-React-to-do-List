import * as api from '../API/index'

export const signin = (formData, navigate) => async(dispatch) => {

    const { data } = await api.signIn(formData)

        try {
            if(data)
            {
                dispatch({type: 'AUTH', data})
                navigate('/')
                return data
            } 
            else
                return {msg: 'Username and password do not match'}            
        } catch (error) {
            console.log(error)
        }          
}

export const signup = (formData, navigate) => async(dispatch) => {
    const {data} = await api.signUp(formData)
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