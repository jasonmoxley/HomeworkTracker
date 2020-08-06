import { LOG_IN_SUCCESS, LOG_IN_ERROR, SIGN_UP_SUCCESS, SIGN_UP_ERROR, LOG_OUT_SUCCESS} from '../actions/types';

const INITIAL_STATE = {
    authError: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOG_IN_SUCCESS:
            console.log('Log In Success');
            return { ...state, authError: null };
        case LOG_IN_ERROR:
            console.log('Log In Error');
            return { ...state, authError: action.payload.message };
        case SIGN_UP_SUCCESS:
            console.log('Sign Up Success');
            return { ...state, authError: null };
        case SIGN_UP_ERROR:
            console.log('Sign Up Error');
            return { ...state, authError: action.payload.message };
        case LOG_OUT_SUCCESS:
            console.log('Log Out Success');
            return { ...state, authError: null };
        default:
            return state;
    }
}