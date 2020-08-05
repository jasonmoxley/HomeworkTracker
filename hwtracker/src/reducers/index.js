import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import hwReducer from './hwReducer';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    hw: hwReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
});