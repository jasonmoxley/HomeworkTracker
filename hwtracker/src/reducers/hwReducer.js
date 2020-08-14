import { CREATE_TASK_SUCCESS, CREATE_TASK_ERROR, FETCH_TASKS_SUCCESS, FETCH_TASKS_ERROR, DELETE_TASK_SUCCESS, DELETE_TASK_ERROR, COMPLETE_TASK_SUCCESS, COMPLETE_TASK_ERROR } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case CREATE_TASK_SUCCESS:
            console.log('created project success');
            return state;
        case CREATE_TASK_ERROR:
            console.log('created project error', action.payload);
            return state;
        case FETCH_TASKS_SUCCESS:
            console.log('fetched tasks success');
            return { tasks: action.payload }
        case FETCH_TASKS_ERROR:
            console.log('fetched tasks error', action.payload);
            return state;
        case DELETE_TASK_SUCCESS:
            console.log('deleted task success');
            let newState2 = {tasks: [...state.tasks]};
            for (let x = 0; x < state.tasks.length; x++) {
                if (state.tasks[x].id === action.payload) {
                    newState2.tasks.splice(x, 1);
                    return newState2;
                }
            }
            return state;
        case DELETE_TASK_ERROR:
            console.log('deleted task error', action.payload);
            return state;
        case COMPLETE_TASK_SUCCESS:
            console.log('completed task success');
            let newState = {tasks: [...state.tasks]};
            for (let x = 0; x < state.tasks.length; x++) {
                if (state.tasks[x].id === action.payload.id) {
                    newState.tasks[x].completed = action.payload.isCompleted;
                    return newState;
                }
            }
            return state;
        case COMPLETE_TASK_ERROR:
            console.log('completed task error', action.payload);
            return state;
        default:
            return state;
    }
}