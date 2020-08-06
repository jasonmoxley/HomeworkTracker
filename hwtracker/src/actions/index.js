import { LOG_IN_SUCCESS, LOG_IN_ERROR, SIGN_UP_SUCCESS, SIGN_UP_ERROR, LOG_OUT_SUCCESS, CREATE_TASK_SUCCESS, CREATE_TASK_ERROR } from './types';
import history from '../history';

export const logIn = (formValues) => {
    console.log(formValues);

    return (dispatch, getState, getFirebase) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            formValues.email,
            formValues.password
        ).then(() => {
            dispatch({ type: LOG_IN_SUCCESS});
            history.push('/Dashboard');
        }).catch((err) => {
            dispatch({ type: LOG_IN_ERROR, payload: err});
        })
    }
};

export const signUp = (formValues) => {
    console.log(formValues);

    return (dispatch, getState, getFirebase) => {
        const firebase = getFirebase();
        console.log(firebase);
        const firestore = getFirebase().firestore();
        firebase.auth().createUserWithEmailAndPassword(
            formValues.email,
            formValues.password
        ).then((resp) => {
            return firestore.collection('users').doc(resp.user.uid).set({
                firstName: formValues.first,
                lastName: formValues.last
            })
        }).then(() => {
            dispatch({ type: SIGN_UP_SUCCESS });
            history.push('/Dashboard');
        }).catch((err) => {
            dispatch({ type: SIGN_UP_ERROR, payload: err })
        })
    }
};

export const logOut = () => {
    return (dispatch, getState, getFirebase) => {
        const firebase = getFirebase();
        firebase.auth().signOut().then(() => {
            dispatch({ type: LOG_OUT_SUCCESS });
            history.push('/');
        })
    };
};

export const createTask = (formValues) => {
    return (dispatch, getState, getFirebase) => {
        // const firebase = getFirebase();
        const firestore = getFirebase().firestore();
        firestore.collection('tasks').add({
            ...formValues,
            authorFirstName: 'Jason',
            authorLastName: 'Moxley'
        }).then(() => {
            dispatch({ type: CREATE_TASK_SUCCESS, payload: formValues });
            history.push('/Dashboard');
        }).catch((err) => {
            dispatch({ type: CREATE_TASK_ERROR, payload: err})
        })
    };
};