import React from 'react';
import {Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import Moment from 'react-moment';
// import 'moment-timezone';

class CreateTaskForm extends React.Component {

    constructor() {
        super();
        this.state = {startDate: new Date()}
    }

    handleChange = date => {
        console.log('changing date');
        console.log(date);
        this.setState({
            startDate: date
        })
    }

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

    renderDate = ({ input, placeholder, defaultValue, meta, label }) => {
        return (
            <div className="field">
                <label>{label}</label>
                <div>
                    <DatePicker {...input} showTimeSelect selected={input.value ? input.value : null} />
                </div>
                {this.renderError(meta)}
            </div>
        );
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit} className="ui form">
                <Field name="title" component={this.renderInput} type="text" label="Title" />
                <Field name="description" component={this.renderInput} type="text" label="Description" />
                <Field name="date" component={this.renderDate} type="date" label="Due Date" />
                <Link to="/Dashboard" className="ui button">Cancel</Link>
                <button type="submit" className="ui button">Submit</button>
            </form>
        );
    };
}

const validate = (formValues) => {
    const errors = {};
    if (!formValues.title) {
        errors.title = 'please enter a title';
    }
    if (!formValues.description) {
        errors.description = 'please enter a description';
    }
    if (!formValues.date) {
        errors.date = 'please enter a date';
    }
    return errors;
}

export default reduxForm({
    form: 'CreateTaskForm',
    validate
})(CreateTaskForm);