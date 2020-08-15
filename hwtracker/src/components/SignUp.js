import React from 'react';
import { connect } from 'react-redux';
import { signUp } from '../actions';
import SignUpForm from './SignUpForm';
import history from '../history';

class SignUp extends React.Component {

    componentDidMount() {
        const { uid } = this.props;
        if (uid) {
            console.log('signup redirecting to dashboard');
            return history.push('/Dashboard');
        }
    }

    handleFormSubmit = (formValues) => {
        this.props.signUp(formValues);
    }

    render() {
        return (
            <div style={{ backgroundColor: "white", padding: "15px", marginTop: "100px", marginLeft: "100px", marginRight: "100px" }}>
                <h3 style={{ textAlign: "center" }}>Sign Up</h3>
                <SignUpForm onSubmit={(values) => this.handleFormSubmit(values)} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { uid: state.auth.uid }
}

export default connect(mapStateToProps, { signUp })(SignUp);