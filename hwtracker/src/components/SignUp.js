import React from 'react';
import { connect } from 'react-redux';
import { signUp } from '../actions';
import SignUpForm from './SignUpForm';
import { Redirect } from 'react-router-dom';

class SignUp extends React.Component {
    handleFormSubmit = (formValues) => {
        this.props.signUp(formValues);
    }

    render() {
        const { auth } = this.props;
        if (auth.uid) {
            return <Redirect to="/Dashboard" />;
        }
        return (
            <div>
                <h3>Sign Up</h3>
                <SignUpForm onSubmit={(values) => this.handleFormSubmit(values)} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { auth: state.firebase.auth }
}

export default connect(mapStateToProps, { signUp })(SignUp);