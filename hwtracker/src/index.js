import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import * as firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/firestore';
import 'firebase/auth';

import { createStore, applyMiddleware} from 'redux';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';

import { composeWithDevTools } from 'redux-devtools-extension';
import App from './components/App'
import reducers from './reducers';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC0jFQc4D7BDbV3MsrKiUWKLcVlsMUDGxM",
    authDomain: "homework-tracker-6c7e0.firebaseapp.com",
    databaseURL: "https://homework-tracker-6c7e0.firebaseio.com",
    projectId: "homework-tracker-6c7e0",
    storageBucket: "homework-tracker-6c7e0.appspot.com",
    messagingSenderId: "331335657143",
    appId: "1:331335657143:web:a5b2dd68a4403424cd0f32",
    measurementId: "G-9RV3BP2VTN"
};

const rrfConfig = {
    userProfile: 'users',
    userFirestoreForProfile: true
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore();


const middlewares = [thunk.withExtraArgument(getFirebase)];
const composeEnhancers = composeWithDevTools(applyMiddleware(...middlewares));
const store = createStore(reducers, composeEnhancers);

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
}

function Setup() {
    return (
        <Provider store={store}>
            <ReactReduxFirebaseProvider {...rrfProps}>
                <App />
            </ReactReduxFirebaseProvider>
        </Provider>
    );
}

render(<Setup />, document.getElementById('root'));