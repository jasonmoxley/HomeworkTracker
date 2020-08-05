import React from 'react';
import { connect } from 'react-redux';
import { createTask } from '../actions';
import CreateTaskForm from './CreateTaskForm';

class CreateTask extends React.Component {
    handleFormSubmit = (formValues) => {
        this.props.createTask(formValues);
    }

    render() {
        return (
            <div>
                <h3>CreateTask</h3>
                <CreateTaskForm onSubmit={(values) => this.handleFormSubmit(values)} />
            </div>
        );
    }
}

export default connect(null, { createTask })(CreateTask);