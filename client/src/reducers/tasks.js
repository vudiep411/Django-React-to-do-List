export default (state = [], action) => {
    switch(action.type) {
        case 'GET_ALL':
            return action.payload
        case 'ADD_TASK':
            return [...state, action.payload]
        case 'DELETE_TASK':
            return state.filter(task => task.id !== action.payload)
        case 'GET_ONE_TASK':
            return [action.payload]
        case 'UPDATE_TASK':
            return state.map((task) => task.id === action.payload.id ? action.payload : task)
        default:
            return state
        
    }
    
}