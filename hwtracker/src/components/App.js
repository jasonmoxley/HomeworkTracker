import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import LogIn from './LogIn';
import SignUp from './SignUp';
import Dashboard from './Dashboard';
import CreateTask from './CreateTask';
import history from '../history';

const App = () => {
    return (
            <Router history={history}>
                    <Header />
                    <div className="ui container">
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/SignUp" exact component={SignUp} />
                            <Route path="/LogIn" exact component={LogIn} />
                            <Route path="/Dashboard" exact component={Dashboard} />
                            <Route path="/CreateTask" exact component={CreateTask} />
                        </Switch>
                    </div>
            </Router>
    );
};

export default App;