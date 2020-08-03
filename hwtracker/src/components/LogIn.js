import React from 'react';
import { connect } from 'react-redux';
import { logIn } from '../actions';
import LogInForm from './LogInForm';

class LogIn extends React.Component {
    handleFormSubmit = (formValues) => {
        this.props.logIn(formValues);
    }

    render() {
        return (
            <div>
                <h3>Log In</h3>
                <LogInForm onSubmit={(values) => this.handleFormSubmit(values)} />
            </div>
        );
    }
}

export default connect(null, { logIn })(LogIn);