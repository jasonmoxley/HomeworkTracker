import React from 'react';
import { connect } from 'react-redux';
import { signUp } from '../actions';
import SignUpForm from './SignUpForm';

class SignUp extends React.Component {
    handleFormSubmit = (formValues) => {
        this.props.signUp(formValues);
    }

    render() {
        return (
            <div>
                <h3>Sign Up</h3>
                <SignUpForm onSubmit={(values) => this.handleFormSubmit(values)} />
            </div>
        );
    }
}

export default connect(null, { signUp })(SignUp);