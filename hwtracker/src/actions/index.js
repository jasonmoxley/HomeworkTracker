import { LOG_IN_SUCCESS, LOG_IN_ERROR, SIGN_UP_SUCCESS, SIGN_UP_ERROR, LOG_OUT_SUCCESS } from './types';

export const logIn = (formValues) => {
    // return (dispatch, getState, {getFirebase}) => {
    //     const firebase = getFirebase();
    //     firebase.auth().signInWithEmailAndPassword(
    //         formValues.email,
    //         formValues.password
    //     ).then(() => {
    //         dispatch({ type: LOG_IN_SUCCESS });
    //     }).catch((err) => {
    //         dispatch({ type: LOG_IN_ERROR, err })
    //     })
    // }
    console.log(formValues);
    
    return {
        type: LOG_IN_SUCCESS
    };
}

export const signUp = (formValues) => {
    // return (dispatch, getState, {getFirebase, getFirestore}) => {
    //     const firebase = getFirebase();
    //     const firestore = getFirestore();

    //     firebase.auth.createUserWithEmailAndPassword(
    //         formValues.email,
    //         formValues.password
    //     ).then(resp => {
    //         return firestore.collection('users').doc(resp.user.uid).set({
    //             firstName: formValues.first,
    //             lastName: formValues.last
    //         });
    //     }).then(() => {
    //         dispatch({ type: SIGN_UP_SUCCESS });
    //     }). catch((err) => {
    //         dispatch({ type: SIGN_UP_ERROR});
    //     });
    // }

    return {
        type: SIGN_UP_SUCCESS
    };
}

export const logOut = () => {
    // return (dispatch, getState, {getFirebase}) => {
    //     const firebase = getFirebase();

    //     firebase.auth().signOut().then(() => {
    //         dispatch({ type: LOG_OUT_SUCCESS })
    //     });
    // }

    return {
        type: LOG_OUT_SUCCESS
    };
}

export const createTask = () => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        
    }
}