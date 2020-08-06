import React from 'react';
import { connect } from 'react-redux';
import { createTask } from '../actions';
import CreateTaskForm from './CreateTaskForm';
import { Redirect } from 'react-router-dom';

class CreateTask extends React.Component {
    handleFormSubmit = (formValues) => {
        this.props.createTask(formValues);
    }

    render() {
        const { auth } = this.props;
        if (!auth.uid) {
            return <Redirect to="/LogIn" />;
        }
        return (
            <div>
                <h3>CreateTask</h3>
                <CreateTaskForm onSubmit={(values) => this.handleFormSubmit(values)} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { auth: state.firebase.auth }; 
}

export default connect(mapStateToProps, { createTask })(CreateTask);