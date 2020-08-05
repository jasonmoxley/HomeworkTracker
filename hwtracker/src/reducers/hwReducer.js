import { CREATE_TASK_SUCCESS, CREATE_TASK_ERROR, FETCH_TASK_SUCCESS, FETCH_TASK_ERROR, FETCH_TASKS_SUCCESS, FETCH_TASKS_ERROR } from '../actions/types';

const INITIAL_STATE = {
    tasks: {
        abcd: {
            title: "test 1",
            description: "sample content 1",
            authorFirstName: "Jason",
            authorLastName: "Moxley",
            date: new Date()
        },
        efgh: {
            title: "test 2",
            description: "sample content 2",
            authorFirstName: "John",
            authorLastName: "Doe",
            date: new Date()
        }
    },
    users: {}
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CREATE_TASK_SUCCESS:
            return state;
        case CREATE_TASK_ERROR:
            return state;
        case FETCH_TASK_SUCCESS:
            return state;
        case FETCH_TASK_ERROR:
            return state;
        case FETCH_TASKS_SUCCESS:
            return state;
        case FETCH_TASKS_ERROR:
            return state;
        default:
            return state;
    }
}