import React from 'react';
import { connect } from 'react-redux';
import { logIn } from '../actions';
import LogInForm from './LogInForm';
import { Redirect } from 'react-router-dom';

class LogIn extends React.Component {

    handleFormSubmit = (formValues) => {
        this.props.logIn(formValues);
    }

    render() {
        const { auth } = this.props;
        if (auth.uid) {
            console.log('login redirect');
            return <Redirect to="/Dashboard" />;
        }
        return (
            <div>
                <h3>Log In</h3>
                <LogInForm onSubmit={(values) => this.handleFormSubmit(values)} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { auth: state.firebase.auth }
}

export default connect(mapStateToProps, { logIn })(LogIn);