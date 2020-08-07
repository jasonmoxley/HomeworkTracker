import { CREATE_TASK_SUCCESS, CREATE_TASK_ERROR, FETCH_TASK_SUCCESS, FETCH_TASK_ERROR, FETCH_TASKS_SUCCESS, FETCH_TASKS_ERROR } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case CREATE_TASK_SUCCESS:
            console.log('created project success');
            return state;
        case CREATE_TASK_ERROR:
            console.log('created project error', action.payload)
            return state;
        case FETCH_TASKS_SUCCESS:
            console.log('fetched tasks success');
            return { tasks: action.payload }
        case FETCH_TASKS_ERROR:
            console.log('fetched tasks error', action.payload);
            return state;
        default:
            return state;
    }
}