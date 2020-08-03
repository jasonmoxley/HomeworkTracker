import { LOG_IN, SIGN_UP, LOG_OUT} from '../actions/types';

const INITIAL_STATE = {
    isSignedIn: null,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOG_IN:
            return { ...state, isSignedIn: true};
        case SIGN_UP:
            return { ...state, isSignedIn: true};
        case LOG_OUT:
            return { ...state, isSignedIn: false, userId: null };
        default:
            return state;
    }
}
