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
        const { uid } = this.props;
        if (uid) {
            console.log('login redirect');
            return <Redirect to="/Dashboard" />;
        }
        return (
            <div style={{ backgroundColor: "white", padding: "15px", marginTop: "100px", marginLeft: "100px", marginRight: "100px" }} >
                <h3>Log In</h3>
                <LogInForm onSubmit={(values) => this.handleFormSubmit(values)} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { uid: state.auth.uid }
}

export default connect(mapStateToProps, { logIn })(LogIn);