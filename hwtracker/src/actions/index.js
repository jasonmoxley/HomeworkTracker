import { LOG_IN, SIGN_UP, LOG_OUT } from './types';

export const logIn = (formValues) => {
    return {
        type: LOG_IN,
    };
}

export const signUp = (formValues) => {
    return {
        type: SIGN_UP,
    };
}

export const logOut = () => {
    return {
        type: LOG_OUT
    };
}