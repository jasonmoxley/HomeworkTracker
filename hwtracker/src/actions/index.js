import { LOG_IN_SUCCESS, LOG_IN_ERROR, SIGN_UP_SUCCESS, SIGN_UP_ERROR, LOG_OUT_SUCCESS, CREATE_TASK_SUCCESS, CREATE_TASK_ERROR, FETCH_TASKS_SUCCESS, FETCH_TASKS_ERROR } from './types';
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
        const userId = getState().firebase.auth.uid;
        const firestore = getFirebase().firestore();
        firestore.collection('tasks').add({
            ...formValues,
            uid: userId
        }).then(() => {
            dispatch({ type: CREATE_TASK_SUCCESS, payload: formValues });
            history.push('/Dashboard');
        }).catch((err) => {
            dispatch({ type: CREATE_TASK_ERROR, payload: err})
        })
    };
};

export const fetchTasks = (userId) => (dispatch, getState, getFirebase) => {
    const firestore = getFirebase().firestore();
    const results = [];
    console.log(userId);
    firestore.collection('tasks').where('uid', '==', userId ).orderBy('date').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            results.push({ ...doc.data(), id: doc.id });
        });
        console.log(results);
        dispatch({ type: FETCH_TASKS_SUCCESS, payload: results });
    }).catch((err) => {
        dispatch({ type: FETCH_TASKS_ERROR, payload: err });
    })
};