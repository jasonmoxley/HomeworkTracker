import { LOG_IN_SUCCESS, LOG_IN_ERROR, SIGN_UP_SUCCESS, SIGN_UP_ERROR, LOG_OUT_SUCCESS, CREATE_TASK_SUCCESS } from './types';

export const logIn = (formValues) => {
    console.log(formValues);
    return {
        type: LOG_IN_SUCCESS
    };
};

export const signUp = (formValues) => {
    console.log(formValues);
    return {
        type: SIGN_UP_SUCCESS
    };
};

export const logOut = () => {
    return {
        type: LOG_OUT_SUCCESS
    };
};

export const createTask = (formValues) => {
    console.log(formValues);
    return {
        type: CREATE_TASK_SUCCESS
    };
};