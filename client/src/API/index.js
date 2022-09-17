import axios from 'axios'

const API = axios.create({ baseURL: 'https://web-notes-todo-app.herokuapp.com/'})
// const API = axios.create({ baseURL: 'http://localhost:8000/'})
API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile'))
    {
        const obj = JSON.parse(localStorage.getItem('profile'))
        req.headers.Authorization = `Token ${obj.token}`
    }

    return req
})
export const getTasks = (id) => API.get('/notes/', {params: {id: id}})
export const addTask = (task) => API.post('/notes/', task)
export const deleteTask = (id) => API.delete(`/notes/${id}/`)
export const getOneTask = (id) => API.get(`/notes/${id}/`)
export const updateTask = (id, updated) => API.put(`/notes/${id}/`, updated)


export const signIn = (formData) => API.post(`/api/auth/login`, formData)
export const signUp = (formData) => API.post(`/api/auth/register`, formData)