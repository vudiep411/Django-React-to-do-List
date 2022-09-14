import * as api from '../API'

export const getTasks = () => async(dispatch) => {
    try {
        const { data } = await api.getTasks()
        dispatch({type: 'GET_ALL', payload: [...data]})
    } catch (error) {
        console.log(error)
    }
}

export const getOneTask = (id) => async(dispatch) => {
    try {
        const { data } = await api.getOneTask(id)
        dispatch({type: 'GET_ONE_TASK', payload: data})
        return data
    } catch (error) {
        console.log(error)
    }
}

export const addTask = (task) => async(dispatch) => {
    try {
        const { data } = await api.addTask(task)
        dispatch({type: 'ADD_TASK', payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const deleteTask = (id) => async(dispatch) => {
    try {
        await api.deleteTask(id)
        dispatch({type: 'DELETE_TASK', payload: id})
    } catch (error) {
        console.log(error)
    }
}

export const updateTask = (id, updated) => async(dispatch) => {
    try {
        const {data} = await api.updateTask(id, updated)
        dispatch({type: 'UPDATE_TASK', payload: data})
    } catch (error) {
        console.log(error)
    }
}
