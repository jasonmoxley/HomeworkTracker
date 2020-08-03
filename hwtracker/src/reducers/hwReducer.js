import { CREATE_TASK, FETCH_TASK, FETCH_TASKS } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case CREATE_TASK:
            return state;
        case FETCH_TASK:
            return state;
        case FETCH_TASKS:
            return state;
        default:
            return state;
    }
}