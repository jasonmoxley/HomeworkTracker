import React from 'react';
import { connect } from 'react-redux';
import { createTask } from '../actions';
import CreateTaskForm from './CreateTaskForm';
import history from '../history';

class CreateTask extends React.Component {

    componentDidMount() {
        const { uid } = this.props;
        console.log(uid);
        if (!uid) {
            console.log('createtask redirecting to home');
            history.push('/');
        }
    }

    handleFormSubmit = (formValues) => {
        this.props.createTask(formValues);
    }

    render() {
        return (
            <div style={{ backgroundColor: "white", padding: "15px", marginTop: "100px", marginLeft: "100px", marginRight: "100px" }}>
                <h3 style={{ textAlign: "center" }}>CreateTask</h3>
                <CreateTaskForm onSubmit={(values) => this.handleFormSubmit(values)} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { uid: state.auth.uid }; 
}

export default connect(mapStateToProps, { createTask })(CreateTask);