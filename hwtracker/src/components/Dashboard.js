import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import TaskList from './TaskList';


class Dashboard extends React.Component {

    componentDidMount() {
        
    }

    render() {
        const { tasks, auth } = this.props;
        if (!auth.uid) {
            return <Redirect to="/LogIn" />;
        }
        if (!tasks) {
            return (
                <div className="ui segment" style={{ height: "150px", marginTop: "50px" }}>
                    <div className="ui active inverted dimmer">
                        <div className="ui large text loader">Loading</div>
                    </div>
                </div>
            );
        } else {
            return <TaskList tasks={tasks} />
        }
    };
}

const mapStateToProps = (state) => {
    return {
        tasks: state.firestore.ordered.tasks,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'tasks' }
    ])
)(Dashboard);