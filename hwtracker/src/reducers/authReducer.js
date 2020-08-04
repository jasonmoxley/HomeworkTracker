import { LOG_IN_SUCCESS, LOG_IN_ERROR, SIGN_UP_SUCCESS, SIGN_UP_ERROR, LOG_OUT_SUCCESS} from '../actions/types';

const INITIAL_STATE = {
    isSignedIn: null,
    authError: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOG_IN_SUCCESS:
            console.log('Log In Success');
            return { ...state, isSignedIn: true, authError: null };
        case LOG_IN_ERROR:
            console.log('Log In Error');
            return { ...state, isSignedIn: false, authError: 'Log In Error' };
        case SIGN_UP_SUCCESS:
            console.log('Sign Up Success');
            return { ...state, isSignedIn: true, authError: null };
        case SIGN_UP_ERROR:
            console.log('Sign Up Error');
            return { ...state, isSignedIn: false, authError: 'Sign Up Error' };
        case LOG_OUT_SUCCESS:
            console.log('Log Out Success');
            return { ...state, isSignedIn: false, authError: null };
        default:
            return state;
    }
}
