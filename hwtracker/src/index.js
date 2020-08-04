import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './components/App';
import reducers from './reducers';
import firebaseCongif from './config/firebaseConfig';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    composeWithDevTools(
        applyMiddleware(reduxThunk.withExtraArgument({ getFirestore, getFirebase })),
        reduxFirestore(firebaseCongif),
        reactReduxFirebase(firebaseCongif)
    )
    
);

//composeEnhancers(applyMiddleware(reduxThunk.withExtraArgument({ getFirestore, getFirebase })))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);