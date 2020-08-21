import React from 'react';
import {Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class SignUpForm extends React.Component {

    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui pointing red basic label">
                        {error}
                </div>
            );
        }
    }

    renderInput = ({ input, label, type, meta }) => {
        // const className = `field ${meta.error && meta.touched ? 'error': ''}`;
        const className = "field";
        return (
            <div className={className}>
                <label>{label}</label>
                <div>
                    <input {...input} placeholder={label} type={type} />
                    {this.renderError(meta)}
                </div>
            </div>
        );
    }

    render() {
        console.log(this.props.authError);

        return (
            <form onSubmit={this.props.handleSubmit} className="ui form error">
                <Field name="email" component={this.renderInput} type="text" label="Email" />
                <Field name="password" component={this.renderInput} type="password" label="Password" />
                <Field name="password2" component={this.renderInput} type="password" label="Confirm Password" />
                <Field name="first" component={this.renderInput} type="text" label="First" />
                <Field name="last" component={this.renderInput} type="text" label="Last" />
                <div className="ui error message">{this.props.authError ? this.props.authError : ''}</div>
                <Link to="/" className="ui button">Cancel</Link>
                <button type="submit" className="ui button">Submit</button>
            </form>
        );
    };
}

const validate = (formValues) => {
    const errors = {};
    if (!formValues.email) {
        errors.email = 'please enter an email address';
    }
    if (!formValues.password) {
        errors.password = 'please enter a password';
    }
    if (!formValues.password2) {
        errors.password2 = 'please confirm your password';
    }
    if (!formValues.first) {
        errors.first = 'please enter a first name';
    }
    if (!formValues.last) {
        errors.last = 'please enter a last name';
    }
    if (formValues.password !== formValues.password2) {
        errors.password2 = 'Your passwords do not match';
    }
    return errors;
}

const mapStateToProps = (state) => {
    return { authError: state.auth.authError }
}

SignUpForm = connect(mapStateToProps)(SignUpForm);

export default reduxForm({
    form: 'signUpForm',
    validate
})(SignUpForm);