import { LOG_IN_SUCCESS, LOG_IN_ERROR, SIGN_UP_SUCCESS, SIGN_UP_ERROR, LOG_OUT_SUCCESS, CREATE_TASK_SUCCESS, CREATE_TASK_ERROR, FETCH_TASKS_SUCCESS, FETCH_TASKS_ERROR, DELETE_TASK_SUCCESS, DELETE_TASK_ERROR, COMPLETE_TASK_SUCCESS, COMPLETE_TASK_ERROR } from './types';
import history from '../history';

export const logIn = (formValues) => {
    console.log(formValues);

    return (dispatch, getState, getFirebase) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            formValues.email,
            formValues.password
        ).then((resp) => {
            dispatch({ type: LOG_IN_SUCCESS, payload: resp.user.uid });
        }).then(() => {
            console.log('pushing to dashboard');
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
        var newUid = undefined;
        const firestore = getFirebase().firestore();
        firebase.auth().createUserWithEmailAndPassword(
            formValues.email,
            formValues.password
        ).then((resp) => {
            newUid = resp.user.uid;
            return firestore.collection('users').doc(resp.user.uid).set({
                firstName: formValues.first,
                lastName: formValues.last
            });
        }).then(() => {
            dispatch({ type: SIGN_UP_SUCCESS, payload: newUid });
        }).then(() => {
            console.log('pushing to dashboard');
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
        }).then(() => {
            console.log('pushing to home');
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
            uid: userId,
            completed: false
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
    firestore.collection('tasks').where('uid', '==', userId ).orderBy('date').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            results.push({ ...doc.data(), id: doc.id });
        });
        dispatch({ type: FETCH_TASKS_SUCCESS, payload: results });
    }).catch((err) => {
        dispatch({ type: FETCH_TASKS_ERROR, payload: err });
    })
};

export const deleteTask = (id, userId) => (dispatch, getState, getFirebase) => {
    const firestore = getFirebase().firestore();
    firestore.collection('tasks').doc(id).delete().then(() => {
        dispatch({ type: DELETE_TASK_SUCCESS, payload: id });
    }).catch((err) => {
        dispatch({ type: DELETE_TASK_ERROR, payload: err });
    })
};

export const completeTask = (id, userId, isCompleted) => (dispatch, getState, getFirebase) => {
    const firestore = getFirebase().firestore();
    firestore.collection('tasks').doc(id).update({ completed: isCompleted }).then(() => {
        dispatch({ type: COMPLETE_TASK_SUCCESS, payload: { id, isCompleted }});
    }).catch((err) => {
        dispatch({ type: COMPLETE_TASK_ERROR, payload: err });
    })
};