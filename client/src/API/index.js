import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:8000/'})

export const getTasks = () => API.get('/notes/')
export const addTask = (task) => API.post('/notes/', task)
export const deleteTask = (id) => API.delete(`/notes/${id}/`)
export const getOneTask = (id) => API.get(`/notes/${id}/`)
export const updateTask = (id, updated) => API.put(`/notes/${id}/`, updated)
