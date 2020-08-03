import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import LogIn from './LogIn';
import SignUp from './SignUp';
import Dashboard from './Dashboard';
import history from '../history';

const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/SignUp" exact component={SignUp} />
                        <Route path="/LogIn" exact component={LogIn} />
                        <Route path="/Dashboard" exact component={Dashboard} />

                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default App;
