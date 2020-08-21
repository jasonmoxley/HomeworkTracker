import React from 'react';
import {Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class LogInForm extends React.Component {

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
        const className = 'field';
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
        return (
            <form onSubmit={this.props.handleSubmit} className="ui form error">
                <Field name="email" component={this.renderInput} type="text" label="Email" />
                <Field name="password" component={this.renderInput} type="password" label="Password" />
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
    return errors;
}

const mapStateToProps = (state) => {
    return { authError: state.auth.authError }
}

LogInForm = connect(mapStateToProps)(LogInForm);

export default reduxForm({
    form: 'logInForm',
    validate
})(LogInForm);